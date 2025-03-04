"use client";  // ✅ Add this at the top

import { cn } from "@/components/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const email = (e.target as any).email.value;
    const password = (e.target as any).password.value;

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      let data;
      try {
        data = await response.json();
      } catch (error) {
        console.error("Failed to parse JSON response:", error);
        setError("Unexpected server response. Please try again.");
        return;
      }

      if (response.ok) {
        console.log("Login successful:", data);
      } else {
        console.error("Error:", data?.error || "Unknown error");
        setError(data?.error || "An error occurred while logging in.");
      }
    } catch (error) {
      console.error("Network error:", error);
      setError("Failed to connect to the server.");
    }
  };

  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={handleSubmit} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" name="email" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" name="password" required />
        </div>
        <Button type="submit" className="w-full"> 
        <a href="/dashboard"> Login </a>
        </Button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </form>
  );
}
