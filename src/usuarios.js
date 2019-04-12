import React, { Fragment, ReferenceInput, SelectInput } from 'react';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';
import Button from '@material-ui/core/Button';
import { BulkDeleteButton } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const UsuariosCreate = props => (
  <Create {...props}>
      <SimpleForm>
      <TextInput source="Sucursal" />
      <TextInput source="Nombre" />
      <TextInput source="Departamento" />
      <TextInput source="Puesto" />
      <TextInput source="Correo" />
      <TextInput source="Contraseña" />
      <TextInput source="Rol" />
      </SimpleForm>
  </Create>
);

export const UsuariosList = props => (
    <List {...props} title="Usuarios">
    <Datagrid>
          <TextField source="Sucursal" />
          <TextField source="Nombre" />
          <TextField source="Departamento" />
          <TextField source="Puesto" />
          <TextField source="Correo" />
          <TextField source="Contraseña" />
          <TextField source="Rol" />
          <EditButton />
      </Datagrid>
    </List>
);
