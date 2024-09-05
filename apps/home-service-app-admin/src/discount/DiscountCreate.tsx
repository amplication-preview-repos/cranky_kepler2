import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DiscountCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="discountType" source="discountType" />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Create>
  );
};
