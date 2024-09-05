import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CategoryWhereInput = {
  icon?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
};
