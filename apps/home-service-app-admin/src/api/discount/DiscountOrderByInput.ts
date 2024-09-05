import { SortOrder } from "../../util/SortOrder";

export type DiscountOrderByInput = {
  createdAt?: SortOrder;
  discountType?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
