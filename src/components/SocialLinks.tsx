
import React from 'react';
import { Mail, Github, Linkedin, Twitter, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface SocialLink {
  name: string;
  icon: React.ElementType;
  url: string;
  color: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:1215sheryarkhan@gmail.com",
    color: "hover:text-[#EA4335] hover:bg-[#EA4335]/10"
  },
  {
    name: "Phone",
    icon: Phone,
    url: "tel:+923161290066",
    color: "hover:text-[#4CAF50] hover:bg-[#4CAF50]/10"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/sheryar1215",
    color: "hover:text-[#181717] hover:bg-[#181717]/10"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sheryar-khan-2b34832ab",
    color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/SherKha40731606",
    color: "hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10"
  }
];

const SocialLinks = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2.5 p-2.5 rounded-lg",
              "bg-secondary/40 border border-border/50",
              "transition-all duration-300 transform hover:-translate-y-1",
              "shadow-sm hover:shadow-md",
              link.color
            )}
            aria-label={`Connect with Sheryar Khan on ${link.name}`}
          >
            <Icon className="h-4 w-4" />
            <span className="text-sm font-medium">{link.name}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
