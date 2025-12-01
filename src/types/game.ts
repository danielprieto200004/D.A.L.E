/**
 * JSON Schema para los niveles del juego DALE
 * Estructura para narrativas interactivas tipo "Beyond: Two Souls"
 */

export interface DataPoint {
  id: string;
  label: string;
  value: number | string;
  unit?: string;
  trend?: "up" | "down" | "stable";
  visualization?: "bar" | "line" | "pie" | "metric";
  description?: string;
}

export interface Option {
  id: string;
  text: string;
  description?: string;
  dataImpact?: {
    dataPointId: string;
    change: number;
    reason: string;
  }[];
  riskLevel?: "low" | "medium" | "high";
  icon?: string;
}

export interface Consequence {
  id: string;
  title: string;
  description: string;
  dataChanges?: {
    dataPointId: string;
    newValue: number | string;
    explanation: string;
  }[];
  nextLevelId?: string;
  endingType?: "success" | "failure" | "neutral" | "branch";
  scoreImpact?: {
    dataScore: number;
    reasoning: string;
  };
}

export interface Level {
  id: string;
  chapter: number;
  title: string;
  description: string;
  
  // Contexto narrativo
  context: {
    scenario: string;
    role: string; // Rol del usuario en la historia
    objective: string;
    background?: string;
    characters?: {
      id: string;
      name: string;
      role: string;
      avatar?: string;
    }[];
  };
  
  // Datos disponibles para el usuario
  data: {
    dashboard: {
      title: string;
      description: string;
      dataPoints: DataPoint[];
    };
    additionalContext?: {
      reports?: string[];
      emails?: string[];
      news?: string[];
    };
  };
  
  // Opciones de decisión
  options: Option[];
  
  // Mapeo de opciones a consecuencias
  consequences: {
    [optionId: string]: Consequence;
  };
  
  // Configuración del nivel
  config: {
    timeLimit?: number; // En segundos (opcional)
    minOptionsToShow?: number;
    allowBacktrack?: boolean;
    difficulty: "easy" | "medium" | "hard" | "expert";
  };
  
  // Metadatos
  metadata: {
    estimatedDuration: number; // En minutos
    tags: string[];
    learningObjectives: string[];
    prerequisites?: string[]; // IDs de niveles previos
  };
}

export interface Story {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  author: string;
  levels: Level[];
  metadata: {
    totalChapters: number;
    estimatedTotalDuration: number;
    difficulty: "beginner" | "intermediate" | "advanced";
    category: "business" | "social" | "technical" | "strategy";
    tags: string[];
  };
}

export interface UserProgress {
  userId: string;
  storyId: string;
  currentLevelId: string;
  completedLevels: string[];
  decisions: {
    levelId: string;
    optionId: string;
    timestamp: Date;
    consequenceId: string;
  }[];
  dataScore: number;
  achievements: string[];
}

