"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "@/store/useStore";

const step2Schema = z.object({
  floors: z.string(), // Select returns string usually, need to parse
  bedrooms: z.string(),
  parking: z.enum(["yes", "no"]),
  vastu: z.enum(["yes", "no"]),
  budget: z.enum(["low", "medium", "high"]),
});

type Step2Data = z.infer<typeof step2Schema>;

interface Step2Props {
  onNext: () => void;
  onBack: () => void;
}

export default function Step2Requirements({ onNext, onBack }: Step2Props) {
  const { questionnaire, setQuestionnaire } = useStore();
  const {
    setValue,
    handleSubmit,
    watch,
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      floors: String(questionnaire.floors),
      bedrooms: String(questionnaire.bedrooms),
      parking: questionnaire.parking ? "yes" : "no",
      vastu: questionnaire.vastu ? "yes" : "no",
      budget: questionnaire.budget as any,
    },
  });

  const onSubmit = (data: Step2Data) => {
    setQuestionnaire({
      floors: parseInt(data.floors),
      bedrooms: parseInt(data.bedrooms),
      parking: data.parking === "yes",
      vastu: data.vastu === "yes",
      budget: data.budget,
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="floors" className="text-sm sm:text-base">Number of Floors</Label>
             <Select onValueChange={(val) => setValue("floors", val)} defaultValue={watch("floors")}>
            <SelectTrigger className="h-11 sm:h-10">
              <SelectValue placeholder="Select floors" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 (Ground Only)</SelectItem>
              <SelectItem value="2">2 (G+1)</SelectItem>
              <SelectItem value="3">3 (G+2)</SelectItem>
            </SelectContent>
          </Select>
          </div>
           <div className="space-y-2">
            <Label htmlFor="bedrooms" className="text-sm sm:text-base">Bedrooms per Floor</Label>
             <Select onValueChange={(val) => setValue("bedrooms", val)} defaultValue={watch("bedrooms")}>
            <SelectTrigger className="h-11 sm:h-10">
              <SelectValue placeholder="Select bedrooms" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 BHK</SelectItem>
              <SelectItem value="2">2 BHK</SelectItem>
              <SelectItem value="3">3 BHK</SelectItem>
              <SelectItem value="4">4 BHK</SelectItem>
            </SelectContent>
          </Select>
          </div>
        </div>

         <div className="space-y-2">
           <Label className="text-sm sm:text-base">Parking Needed?</Label>
            <RadioGroup
            defaultValue={watch("parking")}
            onValueChange={(val) => setValue("parking", val as any)}
            className="flex flex-row space-x-4"
          >
             <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="parking-yes" />
              <Label htmlFor="parking-yes" className="text-sm sm:text-base cursor-pointer">Yes</Label>
            </div>
             <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="parking-no" />
              <Label htmlFor="parking-no" className="text-sm sm:text-base cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
           <Label className="text-sm sm:text-base">Vastu Compliance?</Label>
            <RadioGroup
            defaultValue={watch("vastu")}
            onValueChange={(val) => setValue("vastu", val as any)}
            className="flex flex-row space-x-4"
          >
             <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="vastu-yes" />
              <Label htmlFor="vastu-yes" className="text-sm sm:text-base cursor-pointer">Yes</Label>
            </div>
             <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="vastu-no" />
              <Label htmlFor="vastu-no" className="text-sm sm:text-base cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>

         <div className="space-y-2">
            <Label className="text-sm sm:text-base">Budget Preference</Label>
             <Select onValueChange={(val) => setValue("budget", val as any)} defaultValue={watch("budget")}>
            <SelectTrigger className="h-11 sm:h-10">
              <SelectValue placeholder="Select budget" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low (Economy)</SelectItem>
              <SelectItem value="medium">Medium (Standard)</SelectItem>
              <SelectItem value="high">High (Premium)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onBack} className="w-full sm:w-auto h-12 sm:h-10">Back</Button>
        <Button type="submit" className="w-full sm:w-auto h-12 sm:h-10 px-8">Next Step</Button>
      </div>
    </form>
  );
}

