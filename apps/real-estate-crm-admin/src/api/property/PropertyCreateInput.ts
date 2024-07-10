import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AgentAssignmentCreateNestedManyWithoutPropertiesInput } from "./AgentAssignmentCreateNestedManyWithoutPropertiesInput";
import { InputJsonValue } from "../../types";

export type PropertyCreateInput = {
  propertyName?: string | null;
  address?: string | null;
  price?: number | null;
  listingDate?: Date | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  agentAssignments?: AgentAssignmentCreateNestedManyWithoutPropertiesInput;
  images?: InputJsonValue;
};
