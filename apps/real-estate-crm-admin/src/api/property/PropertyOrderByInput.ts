import { SortOrder } from "../../util/SortOrder";

export type PropertyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  propertyName?: SortOrder;
  address?: SortOrder;
  price?: SortOrder;
  listingDate?: SortOrder;
  images?: SortOrder;
};
