import { JsonValue } from "type-fest";

export type Category = {
  createdAt: Date;
  icon: JsonValue;
  id: string;
  title: string | null;
  updatedAt: Date;
};
