
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface TranslatedTextProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  // New prop for using key-based translations (recommended)
  tKey?: string;
  // Fallback text when using tKey
  fallback?: string;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({ 
  children, 
  as: Component = 'span',
  className,
  tKey,
  fallback
}) => {
  const { translate, currentLanguage, t } = useLanguage();
  const [translatedContent, setTranslatedContent] = useState(children);
  
  useEffect(() => {
    let isMounted = true;
    
    const performTranslation = async () => {
      // If using key-based translation (recommended approach)
      if (tKey) {
        const keyTranslation = t(tKey, fallback || children);
        setTranslatedContent(keyTranslation);
        return;
      }
      
      // Legacy text-based translation for backward compatibility
      if (currentLanguage === 'en') {
        setTranslatedContent(children);
        return;
      }
      
      const result = await translate(children);
      if (isMounted) {
        setTranslatedContent(result);
      }
    };
    
    performTranslation();
    
    return () => { isMounted = false; };
  }, [children, currentLanguage, translate, t, tKey, fallback]);
  
  return <Component className={className}>{translatedContent}</Component>;
};
