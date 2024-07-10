import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PropertyList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Properties"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="propertyName" source="propertyName" />
        <TextField label="address" source="address" />
        <TextField label="price" source="price" />
        <TextField label="listingDate" source="listingDate" />
        <TextField label="images" source="images" />
      </Datagrid>
    </List>
  );
};
