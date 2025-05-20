
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const BusinessLogin = () => {
  const { toast } = useToast();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [taxId, setTaxId] = useState("");
  const [chamberCode, setChamberCode] = useState("");
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome to your business dashboard.",
    });
  };
  
  const handleTaxisNetLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "TaxisNet Authentication",
      description: "Redirecting to TaxisNet authentication...",
    });
  };
  
  const handleChamberLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "eChamber Authentication",
      description: "Verifying your Chamber credentials...",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Business Login</h1>
            <p className="text-gray-600 mt-2">
              Access your business profile and manage your information
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <Tabs defaultValue="credentials" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="credentials">Credentials</TabsTrigger>
                <TabsTrigger value="taxisnet">TaxisNet</TabsTrigger>
                <TabsTrigger value="chamber">eChamber</TabsTrigger>
              </TabsList>
              
              {/* Standard Login */}
              <TabsContent value="credentials">
                <form onSubmit={handleLogin}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/forgot-password" className="text-sm text-cyclades-blue hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="••••••••" 
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-cyclades-blue-dark hover:bg-cyclades-blue">
                      Login
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              {/* TaxisNet Login */}
              <TabsContent value="taxisnet">
                <form onSubmit={handleTaxisNetLogin}>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 mb-2">
                      Login using your TaxisNet credentials to manage your business profile.
                    </p>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tax-id">Tax ID (ΑΦΜ)</Label>
                      <Input 
                        id="tax-id" 
                        placeholder="e.g. 123456789" 
                        value={taxId}
                        onChange={(e) => setTaxId(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="tax-password">TaxisNet Password</Label>
                      <Input 
                        id="tax-password" 
                        type="password" 
                        placeholder="••••••••" 
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Login with TaxisNet
                    </Button>
                  </div>
                </form>
              </TabsContent>
              
              {/* eChamber Login */}
              <TabsContent value="chamber">
                <form onSubmit={handleChamberLogin}>
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 mb-2">
                      If you are a registered member of the Cyclades Chamber, you can login using your Chamber credentials.
                    </p>
                    
                    <div className="space-y-2">
                      <Label htmlFor="chamber-code">Chamber Registration Code</Label>
                      <Input 
                        id="chamber-code" 
                        placeholder="e.g. CYC12345" 
                        value={chamberCode}
                        onChange={(e) => setChamberCode(e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="chamber-password">Password</Label>
                      <Input 
                        id="chamber-password" 
                        type="password" 
                        placeholder="••••••••" 
                        required
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Login with eChamber
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/register" className="text-cyclades-blue hover:underline font-medium">
                  Register your business
                </Link>
              </p>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-4 border border-gray-100">
            <h3 className="text-sm font-medium mb-2">Need help?</h3>
            <p className="text-xs text-gray-600">
              Contact the Cyclades Chamber of Commerce for assistance with your business account.
              <br />
              <a href="mailto:support@e-kyklades.gr" className="text-cyclades-blue hover:underline">
                support@e-kyklades.gr
              </a>{" "}
              or call{" "}
              <a href="tel:+3022810822346" className="text-cyclades-blue hover:underline">
                +30 22810 82346
              </a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessLogin;
