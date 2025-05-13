export interface PersonaInspiration {
  name: string;
  role: string;
  image: string;
  lessons: string[];
}

export interface Experience {
  title: string;
  description: string;
  date: string;
  tags: string[];
  link?: string;
}

export interface Persona {
  id: PersonaId;
  title: string;
  emoji: string;
  color: string;
  description: string;
  experiences: Experience[];
}

export type PersonaId = 'music maker' | 'programmer' | 'Co-Host';

export interface DevRelPillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
} 