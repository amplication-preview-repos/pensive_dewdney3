import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AgentAssignmentListRelationFilter } from "../agentAssignment/AgentAssignmentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  propertyName?: StringNullableFilter;
  address?: StringNullableFilter;
  price?: FloatNullableFilter;
  listingDate?: DateTimeNullableFilter;
  appointments?: AppointmentListRelationFilter;
  agentAssignments?: AgentAssignmentListRelationFilter;
  images?: JsonFilter;
};
