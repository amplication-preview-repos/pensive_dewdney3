import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AgentAssignmentWhereInput = {
  id?: StringFilter;
  agentName?: StringNullableFilter;
  assignedDate?: DateTimeNullableFilter;
  property?: PropertyWhereUniqueInput;
};
