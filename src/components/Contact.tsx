
import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useSupabaseClient } from '@/hooks/useSupabase';

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
          message: data.message,
          created_at: new Date().toISOString()
        });

      if (error) throw error;

      toast.success("Your message has been sent!", {
        description: "I'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting message:', error);
      toast.error("Failed to send message", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--tw-gradient-stops))] from-background via-background to-secondary/30" />
      </div>
      
      <div className="section-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="opacity-0 animate-slide-up-delay-2 group hover:-translate-y-1 transition-transform duration-300">
            <h3 className="text-2xl font-display font-bold mb-6 relative">
              Get in Touch
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
                        Your Name
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
                        Email Address
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
                        Message
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
                    "button-primary w-full flex items-center justify-center gap-2 hover:-translate-y-1 transition-transform",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </Form>
          </div>
          
          <div className="opacity-0 animate-slide-up-delay-3 group hover:-translate-y-1 transition-transform duration-300">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
