import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function LandingPage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (name.trim()) {
      navigate("/chat", { state: { name } });
    }
  };

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 w-full lg:w-1/2">
        <Card className="mx-auto w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Healthcare AI Assistant
            </CardTitle>
            <CardDescription>
              Get instant medical advice and support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Your Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={handleStart} className="w-full">
              Start Chat
            </Button>
          </CardFooter>
        </Card>
      </div>
      <div className="relative hidden lg:block w-1/2 overflow-hidden">
        <img
          src="/home.jpeg"
          alt="Healthcare illustration"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/6 backdrop-blur-md rounded-t-3xl" />
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <blockquote className="space-y-2">
            <p className="text-lg text-white">
              "This AI assistant has revolutionized how we provide initial
              medical guidance. It's an invaluable tool for our patients."
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
