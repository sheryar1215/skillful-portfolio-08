
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Phone, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSupabaseClient } from '@/hooks/useSupabase';
import { useLanguage } from '@/hooks/useLanguage';

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    url: "mailto:1215sheryarkhan@gmail.com",
    color: "hover:text-[#EA4335]"
  },
  {
    name: "Phone",
    icon: Phone,
    url: "tel:+923161290066",
    color: "hover:text-[#4CAF50]"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/sheryar1215",
    color: "hover:text-[#181717]"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sheryar-khan-2b34832ab",
    color: "hover:text-[#0A66C2]"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://x.com/SherKha40731606",
    color: "hover:text-[#1DA1F2]"
  }
];

// Form schema validation with Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const supabase = useSupabaseClient();
  const { t } = useLanguage();

  // Initialize form with react-hook-form
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Save message to Supabase
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          name: data.name,
          email: data.email,
          message: data.message
        });

      if (error) throw error;

      toast({
        title: t('contact.success'),
        description: "I'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting message:', error);
      toast({
        title: t('contact.error'),
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper function to scroll into view with smooth animation
  const scrollIntoView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-background via-background to-secondary/30" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t('contact.title')}
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          {t('contact.subtitle')}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-display font-bold mb-6 relative">
              {t('contact.title')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-32 transition-all duration-500"></span>
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="block text-sm font-medium text-foreground/80 mb-2 group-hover:text-foreground transition-colors">
                        {t('contact.name')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          className="contact-input transform transition-transform focus:-translate-y-1 focus:shadow-md"
                          placeholder="John Doe"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="block text-sm font-medium text-foreground/80 mb-2 group-hover:text-foreground transition-colors">
                        {t('contact.email')}
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          className="contact-input transform transition-transform focus:-translate-y-1 focus:shadow-md"
                          placeholder="john@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="group">
                      <FormLabel className="block text-sm font-medium text-foreground/80 mb-2 group-hover:text-foreground transition-colors">
                        {t('contact.message')}
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={5}
                          className="contact-input resize-none transform transition-transform focus:-translate-y-1 focus:shadow-md"
                          placeholder="I'd like to discuss a project..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-primary text-primary-foreground flex items-center justify-center gap-2 px-6 py-3 rounded-md hover:-translate-y-1 transition-transform",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {t('contact.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      {t('contact.send')}
                    </>
                  )}
                </button>
              </form>
            </Form>
            
            <div className="mt-8 bg-muted/50 p-6 rounded-lg border border-border">
              <h4 className="font-medium mb-2">Quick Navigation</h4>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => scrollIntoView('home')}
                  className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-all"
                >
                  {t('navbar.home')}
                </button>
                <button 
                  onClick={() => scrollIntoView('about')}
                  className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-all"
                >
                  {t('navbar.about')}
                </button>
                <button 
                  onClick={() => scrollIntoView('projects')}
                  className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-all"
                >
                  {t('navbar.projects')}
                </button>
                <button 
                  onClick={() => scrollIntoView('experience')}
                  className="px-3 py-1 text-xs bg-secondary hover:bg-secondary/80 rounded-full transition-all"
                >
                  {t('navbar.experience')}
                </button>
              </div>
            </div>
          </div>
          
          <div className="group hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-display font-bold mb-6 relative">
              Connect With Me
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-44 transition-all duration-500"></span>
            </h3>
            
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through any of the platforms below. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="flex flex-col space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors transform hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md",
                      link.color
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                );
              })}
            </div>
            
            <div className="mt-10 p-6 rounded-lg border border-border bg-secondary/30 transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-md">
              <h4 className="font-medium text-lg mb-2">Response Time</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to all messages within 24-48 hours. For urgent inquiries, email or phone is the best way to reach me.
              </p>
            </div>
            
            <div className="mt-6 p-6 rounded-lg border border-border bg-secondary/30 transform hover:-translate-y-1 transition-transform duration-300 hover:shadow-md">
              <h4 className="font-medium text-lg mb-2">Availability</h4>
              <p className="text-muted-foreground text-sm">
                I'm currently open to freelance opportunities, full-time positions, and interesting collaborations. Let's discuss how we can work together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
