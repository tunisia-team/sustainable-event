import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: "sana@admin.com",
        password: "sana/2025"
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Invalid credentials"
        });
      } else {
        navigate("/");
        toast({
          title: "Success",
          description: "Logged in successfully"
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred"
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <h2 className="text-center text-3xl font-bold">Admin Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full"
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;