import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Template } from '@/data/templates';
import { FloorPlan } from '@/lib/generator/types';

export interface QuestionnaireState {
  plotSize: string;
  plotLength: string;
  plotWidth: string;
  facing: string;
  cornerSite: boolean;
  floors: number;
  bedrooms: number;
  parking: boolean;
  vastu: boolean;
  budget: string;
  name: string;
  phone: string;
  email: string;
}

export interface StoreState {
  questionnaire: QuestionnaireState;
  matchedTemplate: Template | null;
  generatedPlan: FloorPlan | null; // New state for generated plan
  setQuestionnaire: (data: Partial<QuestionnaireState>) => void;
  setMatchedTemplate: (template: Template | null) => void;
  setGeneratedPlan: (plan: FloorPlan | null) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      questionnaire: {
        plotSize: '30x40',
        plotLength: '',
        plotWidth: '',
        facing: 'North',
        cornerSite: false,
        floors: 1,
        bedrooms: 2,
        parking: true,
        vastu: true,
        budget: 'medium',
        name: '',
        phone: '',
        email: '',
      },
      matchedTemplate: null,
      generatedPlan: null,
      setQuestionnaire: (data) =>
        set((state) => ({
          questionnaire: { ...state.questionnaire, ...data },
        })),
      setMatchedTemplate: (template) => set({ matchedTemplate: template }),
      setGeneratedPlan: (plan) => set({ generatedPlan: plan }),
    }),
    {
      name: 'construction-app-storage',
    }
  )
);
