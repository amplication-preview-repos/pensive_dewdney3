import { Client } from "../client/Client";
import { Property } from "../property/Property";

export type Appointment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  dateTime: Date | null;
  location: string | null;
  description: string | null;
  client?: Client | null;
  property?: Property | null;
};
