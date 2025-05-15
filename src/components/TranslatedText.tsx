
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

interface TranslatedTextProps {
  children: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({ 
  children, 
  as: Component = 'span',
  className 
}) => {
  const { translate, currentLanguage } = useLanguage();
  const [translatedContent, setTranslatedContent] = useState(children);
  
  useEffect(() => {
    let isMounted = true;
    
    const performTranslation = async () => {
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
  }, [children, currentLanguage, translate]);
  
  return <Component className={className}>{translatedContent}</Component>;
};
