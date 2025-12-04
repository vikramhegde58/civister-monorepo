"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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

const step1Schema = z.object({
  plotSize: z.enum(["30x40", "40x60", "custom"]),
  plotLength: z.string().optional(),
  plotWidth: z.string().optional(),
  facing: z.enum(["North", "East", "West", "South"]),
  cornerSite: z.enum(["yes", "no"]),
});

type Step1Data = z.infer<typeof step1Schema>;

interface Step1Props {
  onNext: () => void;
}

export default function Step1PlotDetails({ onNext }: Step1Props) {
  const { questionnaire, setQuestionnaire } = useStore();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      plotSize: (questionnaire.plotSize as any) || "30x40",
      plotLength: questionnaire.plotLength,
      plotWidth: questionnaire.plotWidth,
      facing: (questionnaire.facing as any) || "North",
      cornerSite: questionnaire.cornerSite ? "yes" : "no",
    },
  });

  const plotSize = watch("plotSize");

  const onSubmit = (data: Step1Data) => {
    setQuestionnaire({
      plotSize: data.plotSize,
      plotLength: data.plotLength || "",
      plotWidth: data.plotWidth || "",
      facing: data.facing,
      cornerSite: data.cornerSite === "yes",
    });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm sm:text-base">Plot Size</Label>
          <RadioGroup
            defaultValue={plotSize}
            onValueChange={(val) => setValue("plotSize", val as any)}
            className="flex flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="30x40" id="30x40" />
              <Label htmlFor="30x40">30x40</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="40x60" id="40x60" />
              <Label htmlFor="40x60">40x60</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Custom</Label>
            </div>
          </RadioGroup>
        </div>

        {plotSize === "custom" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="plotLength" className="text-sm sm:text-base">Length (ft)</Label>
              <Input id="plotLength" {...register("plotLength")} placeholder="e.g. 50" className="h-11 sm:h-10" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plotWidth" className="text-sm sm:text-base">Width (ft)</Label>
              <Input id="plotWidth" {...register("plotWidth")} placeholder="e.g. 80" className="h-11 sm:h-10" />
            </div>
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="facing" className="text-sm sm:text-base">Facing Direction</Label>
          <Select onValueChange={(val) => setValue("facing", val as any)} defaultValue={watch("facing")}>
            <SelectTrigger className="h-11 sm:h-10">
              <SelectValue placeholder="Select facing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="North">North</SelectItem>
              <SelectItem value="East">East</SelectItem>
              <SelectItem value="West">West</SelectItem>
              <SelectItem value="South">South</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
           <Label className="text-sm sm:text-base">Is it a Corner Site?</Label>
            <RadioGroup
            defaultValue={watch("cornerSite")}
            onValueChange={(val) => setValue("cornerSite", val as any)}
            className="flex flex-row space-x-4"
          >
             <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="corner-yes" />
              <Label htmlFor="corner-yes" className="text-sm sm:text-base cursor-pointer">Yes</Label>
            </div>
             <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="corner-no" />
              <Label htmlFor="corner-no" className="text-sm sm:text-base cursor-pointer">No</Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button type="submit" className="w-full sm:w-auto h-12 sm:h-10 px-8">Next Step</Button>
      </div>
    </form>
  );
}

