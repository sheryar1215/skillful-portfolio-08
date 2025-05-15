
import React from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { languages, Language } from '@/services/translationService';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 p-2 text-sm font-medium hover:text-primary transition-colors">
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{languages.find(l => l.code === currentLanguage)?.name || 'Language'}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => changeLanguage(language.code as Language)}
            className={`${currentLanguage === language.code ? 'bg-accent' : ''}`}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
