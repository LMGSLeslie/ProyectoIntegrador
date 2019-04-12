import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Legend } from '@devexpress/dx-react-chart-material-ui';
// import { PieSeries } from '@devexpress/dx-react-chart-bootstrap4';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import Grid from '@material-ui/core/Grid';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

import { Chart, ArgumentAxis, ValueAxis, LineSeries, PieSeries, BarSeries } from "@devexpress/dx-react-chart-material-ui";

var cardStyle = {
  width: '100%',
  height: '100%',
  marginBottom: '5%'

}

const Area = () => (
  <container>
    {/* <Card style={cardStyle}
      >
        <CardHeader title="Publicaciones por área" />
        <CardContent>

          <Chart
            data={[
              { argument: "Financiera", value: 10 },
              { argument: "Agricultura", value: 20 },
              { argument: "Medicina", value: 30 },
              { argument: "Arte", value: 10 },
              { argument: "Química", value: 20 },
              { argument: "Ciencia de la computación", value: 30 },
              { argument: "Ciencias Biologicas", value: 10 },
              { argument: "Economía", value: 20 },
              { argument: "Ley y Política", value: 30 }
            ]}
          >
            <ValueScale name="sale" />
            <ValueScale name="total" />
            <PieSeries name="publicaciones" valueField="value" argumentField="argument" />

            <Animation />
            <Legend />
          </Chart>

        </CardContent>
      </Card>

      <Card style={cardStyle}
      >
        <CardHeader title="Promedio de citas por área" />
        <CardContent>

          <Chart
            data={[
              { argument: 1, value: 10 },
              { argument: 2, value: 20 },
              { argument: 3, value: 30 },
              { argument1: 1, value1: 30 },
              { argument1: 2, value1: 20 },
              { argument1: 3, value1: 10 }
            ]}
          >
            <ValueScale name="sale" />
            <ValueScale name="total" />
            <ArgumentAxis />
            <ValueAxis />
            <LineSeries
              valueField="value"
              argumentField="argument"
            />
            <LineSeries
              valueField="value1"
              argumentField="argument1"
            />
            <Animation />
          </Chart>
        </CardContent>
      </Card> */}

    {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

    <Grid container spacing={8}>
      <Grid item xs={6}>
        <Card style={cardStyle}
        >
          <CardHeader title="Publicaciones por área" />
          <CardContent>

            <Chart
              data={[
                { argument: "Financiera", value: 10 },
                { argument: "Agricultura", value: 20 },
                { argument: "Medicina", value: 30 },
                { argument: "Arte", value: 10 },
                { argument: "Química", value: 20 },
                { argument: "Ciencia de la computación", value: 30 },
                { argument: "Ciencias Biologicas", value: 10 },
                { argument: "Economía", value: 20 },
                { argument: "Ley y Política", value: 30 }
              ]}
            >
              <ValueScale name="sale" />
              <ValueScale name="total" />
              <PieSeries name="publicaciones" valueField="value" argumentField="argument" />

              <Animation />
              <Legend />
            </Chart>


            <SimpleForm>
              <TextInput source="Sucursal" />
              <TextInput source="Nombre" />
              <TextInput source="Departamento" />
              <TextInput source="Puesto" />
              <TextInput source="Correo" />
              <TextInput source="Contraseña" />
              <TextInput source="Rol" />
            </SimpleForm>
          </CardContent>

        </Card>
      </Grid>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <Grid item xs={6}>
        <Card style={cardStyle}
        >
          <CardHeader title="Factor de impacto" />
          <CardContent>

            <Chart
              data={[
                { argument: 1, value: 10 },
                { argument: 2, value: 20 },
                { argument: 3, value: 30 },
                { argument1: 1 - 2, value1: 30 },
                { argument1: 2, value1: 20 },
                { argument1: 3, value1: 10 },
              ]}
            >

              <LineSeries
                valueField="value"
                argumentField="argument"
              />
              <BarSeries
                valueField="value1"
                argumentField="argument"
              />
              <Animation />
            </Chart>
          </CardContent>
        </Card>
      </Grid>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <Grid item xs={6}>
        <Card style={cardStyle}
        >
          <CardHeader title="Promedio de citas por área" />
          <CardContent>

            <Chart
              data={[
                { argument: 1, value: 10 },
                { argument: 2, value: 20 },
                { argument: 3, value: 30 },
                { argument1: 1, value1: 30 },
                { argument1: 2, value1: 20 },
                { argument1: 3, value1: 10 }
              ]}
            >
              <ValueScale name="sale" />
              <ValueScale name="total" />
              <ArgumentAxis />
              <ValueAxis />
              <LineSeries
                valueField="value"
                argumentField="argument"
              />
              <LineSeries
                valueField="value1"
                argumentField="argument1"
              />
              <Animation />
            </Chart>
          </CardContent>
        </Card>
      </Grid>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <Grid item xs={6}>
        <Card style={cardStyle}
        >
          <CardHeader title="Porcentaje de articulos sin citas" />
          <CardContent>

            <Chart
              data={[
                { argument: "Financiera", value: 10 },
                { argument: "Agricultura", value: 20 },
                { argument: "Medicina", value: 30 },
                { argument: "Arte", value: 10 },
                { argument: "Química", value: 20 },
                { argument: "Ciencia de la computación", value: 30 },
                { argument: "Ciencias Biologicas", value: 10 },
                { argument: "Economía", value: 20 },
                { argument: "Ley y Política", value: 30 }
              ]}
            >
              <ValueScale name="sale" />
              <ValueScale name="total" />
              <PieSeries name="publicaciones" valueField="value" argumentField="argument" />

              <Animation />
              <Legend />
            </Chart>
          </CardContent>
        </Card>
      </Grid>



    </Grid>
  </container>
);

export default Area;