export type Discount = {
  createdAt: Date;
  discountType: string | null;
  expirationDate: Date | null;
  id: string;
  updatedAt: Date;
  user: string | null;
};
