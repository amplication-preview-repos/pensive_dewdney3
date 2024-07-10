import { ClientWhereUniqueInput } from "../client/ClientWhereUniqueInput";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type AppointmentUpdateInput = {
  dateTime?: Date | null;
  location?: string | null;
  description?: string | null;
  client?: ClientWhereUniqueInput | null;
  property?: PropertyWhereUniqueInput | null;
};
