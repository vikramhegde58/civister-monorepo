"use client";

import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useStore } from "@/store/useStore";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, Suspense } from "react";
import { leadSchema } from "@/lib/validation";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("templateId");
  const { questionnaire } = useStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof leadSchema>>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: questionnaire.name,
      email: questionnaire.email,
      phone: questionnaire.phone,
      templateId: templateId || undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof leadSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error("Failed to submit lead");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md mx-auto"
      >
        <Card className="border border-gray-200 bg-white backdrop-blur-md shadow-2xl">
          <CardContent className="pt-12 pb-12 text-center space-y-6">
            <div className="flex justify-center">
                <div className="h-20 w-20 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Request Received</h2>
            <p className="text-gray-600 text-lg">
              We have received your project details. A Civister construction expert will contact you within 24 hours.
            </p>
            <Button 
                onClick={() => (window.location.href = "/")} 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
            >
                Back to Home
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg mx-auto"
    >
        <Card className="border border-gray-200 bg-white backdrop-blur-md shadow-2xl">
          <CardHeader className="border-b border-gray-200 pb-4 sm:pb-6 px-4 sm:px-6 pt-4 sm:pt-6">
            <CardTitle className="text-xl sm:text-2xl">Initialize Project</CardTitle>
            <CardDescription className="text-gray-600 text-sm sm:text-base">
                {templateId 
                    ? "Let's discuss building your selected floor plan." 
                    : "Tell us about your construction needs."}
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6 sm:pt-8 px-4 sm:px-6 pb-4 sm:pb-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">Full Name</Label>
                <Input id="name" {...register("name")} placeholder="John Doe" className="bg-gray-50 border-gray-300 focus:border-primary" />
                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input id="email" type="email" {...register("email")} placeholder="john@example.com" className="bg-gray-50 border-gray-300 focus:border-primary" />
                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input id="phone" type="tel" {...register("phone")} placeholder="1234567890" className="bg-gray-50 border-gray-300 focus:border-primary" />
                {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-foreground">Additional Requirements</Label>
                <Textarea 
                    id="requirements" 
                    {...register("requirements")} 
                    placeholder="Any specific modifications or questions?" 
                    className="min-h-[100px] bg-gray-50 border-gray-300 focus:border-primary"
                />
              </div>
              <input type="hidden" {...register("templateId")} />
              
              <Button type="submit" className="w-full h-12 text-lg font-bold bg-primary hover:bg-primary/90 text-white transition-all" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Request"}
              </Button>
            </form>
          </CardContent>
        </Card>
    </motion.div>
  );
}

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background py-12 sm:py-16 md:py-24 flex items-center justify-center relative overflow-hidden">
             <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]" 
                style={{ 
                    backgroundImage: 'linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />
            <div className="container relative z-10 px-4 sm:px-6">
                <Suspense fallback={<div className="text-foreground text-center">Loading...</div>}>
                    <ContactForm />
                </Suspense>
            </div>
        </div>
    )
}
