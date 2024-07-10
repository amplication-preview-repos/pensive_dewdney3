import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  dateTime?: SortOrder;
  location?: SortOrder;
  description?: SortOrder;
  clientId?: SortOrder;
  propertyId?: SortOrder;
};
