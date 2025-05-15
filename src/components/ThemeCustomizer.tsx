
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useCustomTheme } from '@/hooks/useCustomTheme';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, RefreshCw, Palette } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { TranslatedText } from '@/components/TranslatedText';

const ThemeCustomizer: React.FC = () => {
  const [mood, setMood] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const { interpretMood, isLoading, resetTheme, themeSettings } = useCustomTheme();
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;
    
    await interpretMood(mood);
  };

  const toggleCustomizer = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Toggle Button */}
      <Button 
        className="fixed bottom-4 right-4 shadow-lg z-40 rounded-full p-3 h-12 w-12"
        onClick={toggleCustomizer}
        variant="default"
        size="icon"
      >
        <Palette className="h-5 w-5" />
      </Button>

      {/* Theme Customizer Card */}
      <Card 
        className={`w-full max-w-md fixed bottom-20 right-4 shadow-lg z-50 transition-all ease-in-out duration-300 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <CardHeader className="space-y-1">
          <CardTitle>
            <TranslatedText>Theme Customizer</TranslatedText>
          </CardTitle>
          <CardDescription>
            <TranslatedText>Describe your mood or desired vibe</TranslatedText>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea 
              placeholder="e.g., 'calm ocean', 'energetic neon', 'professional blue', 'sunset vibes'..."
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              className="resize-none"
              disabled={isLoading}
            />
            
            {themeSettings && (
              <div className="text-xs text-muted-foreground mt-2">
                <p><TranslatedText>{themeSettings.description}</TranslatedText></p>
              </div>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={resetTheme}
            disabled={isLoading}
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            <TranslatedText>Reset</TranslatedText>
          </Button>
          <Button 
            onClick={handleSubmit}
            disabled={isLoading || !mood.trim()}
            size="sm"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                <TranslatedText>Updating...</TranslatedText>
              </>
            ) : (
              <TranslatedText>Apply Theme</TranslatedText>
            )}
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ThemeCustomizer;
