import { Discount as TDiscount } from "../api/discount/Discount";

export const DISCOUNT_TITLE_FIELD = "discountType";

export const DiscountTitle = (record: TDiscount): string => {
  return record.discountType?.toString() || String(record.id);
};
