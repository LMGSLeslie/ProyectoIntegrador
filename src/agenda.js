import React, { Fragment, ReferenceInput, SelectInput } from 'react';
import { Show, SimpleShowLayout, List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';
import Button from '@material-ui/core/Button';
import { BulkDeleteButton } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

export const AgendaShow = props => (
  <List {...props} title="PwerBi">
  <Datagrid>
  <object type="text/html" data="https://app.powerbi.com/view?r=eyJrIjoiZjhhMTZmOTQtNDNhNi00NzYzLTkwZTEtNjA5NjIxOTUyOGVjIiwidCI6ImQ0MmQxMThhLTMxNjQtNDY3MS1hZjk4LTZkMzkwNTljZTcwYiJ9">
  </object>
  </Datagrid>
</List>
);
