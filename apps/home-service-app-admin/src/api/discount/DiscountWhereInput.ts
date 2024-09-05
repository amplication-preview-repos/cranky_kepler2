import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DiscountWhereInput = {
  discountType?: StringNullableFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
};
