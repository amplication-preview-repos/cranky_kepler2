import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const DiscountEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="discountType" source="discountType" />
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <TextInput label="User" source="user" />
      </SimpleForm>
    </Edit>
  );
};
