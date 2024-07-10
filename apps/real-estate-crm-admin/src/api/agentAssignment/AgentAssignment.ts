import { Property } from "../property/Property";

export type AgentAssignment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  agentName: string | null;
  assignedDate: Date | null;
  property?: Property | null;
};
