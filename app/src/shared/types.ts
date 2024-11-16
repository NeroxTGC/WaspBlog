import { ComponentType, SVGProps } from 'react';

export interface ExplanationContent {
  type: 'paragraph' | 'heading' | 'pre' | 'list';
  text?: string;
  items?: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Feature {
  name: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
}

export interface PageContent {
  hero: {
    title: string;
    description: string;
  };
  features: {
    title: string;
    items: Feature[];
  };
  features2?: {
    title: string;
    subtitle: string;
    description: string;
    items: Feature[];
  };
  explanation: {
    title: string;
    content: ExplanationContent[];
  };
  faqs: FAQ[];
}
