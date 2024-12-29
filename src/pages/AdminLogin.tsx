import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const AdminLogin = () => {
  const [email, setEmail] = useState("sana@admin.com");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        // If logged in, check if admin
        const { data: adminUser } = await supabase
          .from('admin_users')
          .select('email')
          .eq('email', session.user.email)
          .maybeSingle();

        if (adminUser) {
          navigate("/");
        } else {
          // If not admin, sign out
          await supabase.auth.signOut();
        }
      }
    };
    checkSession();
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // First sign in with password
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        toast({
          variant: "destructive",
          title: "Error",
          description: signInError.message
        });
        setLoading(false);
        return;
      }

      if (!signInData.user) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "No user found"
        });
        setLoading(false);
        return;
      }

      // Then check if the user is an admin
      const { data: adminUser, error: adminError } = await supabase
        .from('admin_users')
        .select('email')
        .eq('email', signInData.user.email)
        .maybeSingle();

      if (adminError || !adminUser) {
        // If not an admin, sign out and show error
        await supabase.auth.signOut();
        toast({
          variant: "destructive",
          title: "Error",
          description: "Not authorized as admin"
        });
        setLoading(false);
        return;
      }

      // If we get here, the user is successfully logged in as an admin
      navigate("/");
      toast({
        title: "Success",
        description: "Logged in successfully"
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Admin Login</h2>
          <p className="mt-2 text-gray-600">Please sign in to continue</p>
        </div>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full"
                disabled
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full"
              />
            </div>
          </div>
          <Button 
            type="submit" 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;