import { Appointment } from "../appointment/Appointment";

export type Client = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  email: string | null;
  phoneNumber: string | null;
  firstName: string | null;
  lastName: string | null;
  appointments?: Array<Appointment>;
};
