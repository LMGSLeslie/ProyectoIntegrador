import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Legend } from '@devexpress/dx-react-chart-material-ui';
// import { PieSeries } from '@devexpress/dx-react-chart-bootstrap4';
import { ValueScale, Animation, Stack } from '@devexpress/dx-react-chart';
import Grid from '@material-ui/core/Grid';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

import { Chart, ArgumentAxis, ValueAxis, LineSeries, PieSeries, BarSeries } from "@devexpress/dx-react-chart-material-ui";

import dataProvider from '../infoProvider'

var cardStyle = {
  width: '100%',
  height: '100%',
  marginBottom: '5%'

}

const Area = () => (
  <container>

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
                { argument: "Ciencia de la Computación", factor: 30, publicaciones: 20, citas: 10 },
                { argument: "Química", factor: 30, publicaciones: 20, citas: 10 },
                { argument: "Medicina", factor: 30, publicaciones: 20, citas: 10 },
              ]}
            >
              <ArgumentAxis />
              <ValueAxis />

              <BarSeries
                name="Factor"
                valueField="factor"
                argumentField="argument"
              />
              <BarSeries
                name="Publicaciones"
                valueField="publicaciones"
                argumentField="argument"
              />
              <BarSeries
                name="Citas"
                valueField="citas"
                argumentField="argument"
              />
              <Animation />
              <Legend />
              <Stack />
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
                { argument: 2014, promedio: 10 },
                { argument: 2015, promedio: 7 },
                { argument: 2016, promedio: 5 },
                { argument: 2017, promedio: 12 },
                { argument: 2018, promedio: 8 },

                { argument1: 2014, promedio1: 7 },
                { argument1: 2015, promedio1: 5 },
                { argument1: 2016, promedio1: 12 },
                { argument1: 2017, promedio1: 8 },
                { argument1: 2018, promedio1: 10 },
              ]}
            >
              <ArgumentAxis />
              <ValueAxis />
              <LineSeries
                name="Ciencias de la computación"
                valueField="promedio"
                argumentField="argument"
              />
              <LineSeries
                name="Química"
                valueField="promedio1"
                argumentField="argument1"
              />
              <Animation />
              <Legend />
            </Chart>
          </CardContent>
        </Card>
      </Grid>

      {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

      <Grid item xs={6}>
        <Card style={cardStyle}
        >
          <CardHeader title="Porcentaje de articulos sin citas en el año" />
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