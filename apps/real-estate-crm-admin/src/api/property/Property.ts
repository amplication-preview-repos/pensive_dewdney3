import { Appointment } from "../appointment/Appointment";
import { AgentAssignment } from "../agentAssignment/AgentAssignment";
import { JsonValue } from "type-fest";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  propertyName: string | null;
  address: string | null;
  price: number | null;
  listingDate: Date | null;
  appointments?: Array<Appointment>;
  agentAssignments?: Array<AgentAssignment>;
  images: JsonValue;
};
