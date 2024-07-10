import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  phoneNumber?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
};
