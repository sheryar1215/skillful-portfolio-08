
import React, { useState, useEffect } from 'react';
import { useSupabaseClient, useSupabaseSession } from '@/hooks/useSupabase';
import { useAdmin } from '@/hooks/useAdmin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table';
import { formatDistanceToNow } from 'date-fns';
import { Loader2, ChevronDown, Trash2, Eye, Mail, LogOut } from 'lucide-react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

const Admin = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedMessage, setExpandedMessage] = useState<number | null>(null);
  const supabase = useSupabaseClient();
  const { session, loading: sessionLoading } = useSupabaseSession();
  const { isAdmin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();
  
  // Check authentication and admin status
  useEffect(() => {
    if (!sessionLoading && !session) {
      toast.error("Please log in to access the admin area");
      navigate('/auth');
      return;
    }
    
    if (!adminLoading && !isAdmin && session) {
      toast.error("You don't have admin access");
      navigate('/');
    }
  }, [session, sessionLoading, isAdmin, adminLoading, navigate]);

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data, error } = await supabase
          .from('contact_messages')
          .select('*')
          .order('created_at', { ascending: false });
          
        if (error) throw error;
        
        setMessages(data || []);
        console.log("Fetched messages:", data);
      } catch (error) {
        console.error('Error fetching messages:', error);
        toast.error('Failed to load messages');
      } finally {
        setLoading(false);
      }
    };

    if (session && isAdmin) {
      fetchMessages();
    }
  }, [supabase, session, isAdmin]);

  const toggleMessage = (id: number) => {
    setExpandedMessage(expandedMessage === id ? null : id);
  };

  const deleteMessage = async (id: number) => {
    try {
      setLoading(true);
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
      
      setMessages(messages.filter(msg => msg.id !== id));
      toast.success('Message deleted successfully');
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message');
    } finally {
      setLoading(false);
    }
  };

  const replyToMessage = (email: string) => {
    window.open(`mailto:${email}`, '_blank');
  };
  
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      toast.success('Logged out successfully');
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to log out');
    }
  };

  if (sessionLoading || adminLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <p className="text-muted-foreground">Checking authorization...</p>
        </div>
      </div>
    );
  }

  if (!session || !isAdmin) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Card className="mb-8 bg-gradient-to-r from-secondary/30 to-background border-primary/10">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              Contact Messages Dashboard
            </CardTitle>
            <CardDescription>
              Manage and respond to messages from your portfolio visitors
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout}
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </CardHeader>
      </Card>
      
      {loading ? (
        <div className="flex justify-center my-12">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Loading messages...</p>
          </div>
        </div>
      ) : messages.length === 0 ? (
        <div className="text-center py-16 bg-secondary/20 rounded-lg border border-primary/5">
          <p className="text-lg text-muted-foreground">No messages received yet.</p>
          <p className="text-sm text-muted-foreground/70 mt-2">Messages from your contact form will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <Card 
              key={msg.id} 
              className="transition-all duration-300 hover:shadow-md overflow-hidden"
            >
              <div 
                className="p-4 cursor-pointer flex items-center justify-between"
                onClick={() => toggleMessage(msg.id)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground">{msg.name}</h3>
                    <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full">
                      {formatDistanceToNow(new Date(msg.created_at), { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{msg.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMessage(msg.id);
                    }}
                  >
                    <ChevronDown 
                      className={`h-5 w-5 transition-transform ${expandedMessage === msg.id ? 'transform rotate-180' : ''}`} 
                    />
                  </Button>
                </div>
              </div>
              
              {expandedMessage === msg.id && (
                <div className="p-4 pt-0 border-t border-secondary/50 animate-fade-in">
                  <div className="bg-secondary/10 p-4 rounded-md my-2">
                    <p className="text-foreground/80 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                  <div className="flex justify-end gap-2 mt-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1"
                      onClick={() => replyToMessage(msg.email)}
                    >
                      <Mail className="h-4 w-4" />
                      Reply
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm" 
                      className="flex items-center gap-1"
                      onClick={() => deleteMessage(msg.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Admin;
