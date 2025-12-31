import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepNavigationProps {
  currentStep: number;
  steps: string[];
}

export default function StepNavigation({ currentStep, steps }: StepNavigationProps) {
  return (
    <div className="relative flex w-full justify-between mb-6 sm:mb-8 px-2 sm:px-0">
       <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-muted" />
       <div 
         className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 bg-primary transition-all duration-300"
         style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
       />
      
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={step} className="relative z-10 flex flex-col items-center bg-background px-1 sm:px-2">
            <div
              className={cn(
                "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border-2 transition-colors duration-300 text-xs sm:text-sm",
                isActive
                  ? "border-primary bg-primary text-primary-foreground"
                  : isCompleted
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-muted bg-background text-muted-foreground"
              )}
            >
              {isCompleted ? <Check className="h-3 w-3 sm:h-4 sm:w-4" /> : <span>{stepNumber}</span>}
            </div>
            <span className={cn("mt-1.5 sm:mt-2 text-[10px] sm:text-xs font-medium text-center", isActive ? "text-primary" : "text-muted-foreground")}>
                {step.split(' ')[0]}
            </span>
          </div>
        );
      })}
    </div>
  );
}

