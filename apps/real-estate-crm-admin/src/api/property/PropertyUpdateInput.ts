import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AgentAssignmentUpdateManyWithoutPropertiesInput } from "./AgentAssignmentUpdateManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyUpdateInput = {
  propertyName?: string | null;
  address?: string | null;
  price?: number | null;
  listingDate?: Date | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentUpdateManyWithoutPropertiesInput;
  images?: InputJsonValue;
};
