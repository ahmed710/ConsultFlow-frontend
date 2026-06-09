export interface Project {
  id: number;
  name: string;
  demand : string;
}

export interface Candidate {
  id: number;
  fullName: string;
  skills: string;
}

export interface Consultant {
  id: number;
  name: string;
  expertise: string;
}
