"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const step3Schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
});

type Step3Data = z.infer<typeof step3Schema>;

interface Step3Props {
  onBack: () => void;
}

export default function Step3Contact({ onBack }: Step3Props) {
  const { questionnaire, setQuestionnaire, setMatchedTemplate, setGeneratedPlan } = useStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues: {
      name: questionnaire.name,
      email: questionnaire.email,
      phone: questionnaire.phone,
    },
  });

  const onSubmit = async (data: Step3Data) => {
    setIsLoading(true);
    setQuestionnaire({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });

    try {
       // 1. Try to generate a procedural plan first (if custom or just as default)
       // For this demo, let's always try to generate one to show off the engine
       const genRes = await fetch('/api/generate-plan', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               plotLength: questionnaire.plotSize === 'custom' ? questionnaire.plotLength : (questionnaire.plotSize === '30x40' ? 40 : 60),
               plotWidth: questionnaire.plotSize === 'custom' ? questionnaire.plotWidth : (questionnaire.plotSize === '30x40' ? 30 : 40),
               facing: questionnaire.facing,
               bedrooms: questionnaire.bedrooms,
               floors: questionnaire.floors,
               vastu: questionnaire.vastu
           })
       });
       
       const genData = await genRes.json();
       if (genData.plan) {
           setGeneratedPlan(genData.plan);
       }

       // 2. Also try to find a static template match as fallback/alternative
       const matchRes = await fetch('/api/match-template', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({
               plotSize: questionnaire.plotSize,
               facing: questionnaire.facing,
               floors: questionnaire.floors,
               bedrooms: questionnaire.bedrooms,
               vastu: questionnaire.vastu
           })
       });
       
       const matchData = await matchRes.json();
       if (matchData.match) {
           setMatchedTemplate(matchData.match);
       } else {
           // Ensure matchedTemplate is null if we rely on generated
           setMatchedTemplate(null);
       }

       router.push('/floor-plan');

    } catch (error) {
        console.error("Error processing:", error);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label>
          <Input id="name" {...register("name")} placeholder="John Doe" className="h-11 sm:h-10" />
          {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
          <Input id="email" type="email" {...register("email")} placeholder="john@example.com" className="h-11 sm:h-10" />
           {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
          <Input id="phone" type="tel" {...register("phone")} placeholder="1234567890" className="h-11 sm:h-10" />
           {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onBack} disabled={isLoading} className="w-full sm:w-auto h-12 sm:h-10">Back</Button>
        <Button type="submit" disabled={isLoading} className="w-full sm:w-auto h-12 sm:h-10">
            {isLoading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Finding Best Plan...</> : "See My Floor Plan"}
        </Button>
      </div>
    </form>
  );
}
