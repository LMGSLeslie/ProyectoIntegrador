import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Legend } from '@devexpress/dx-react-chart-material-ui';
// import { PieSeries } from '@devexpress/dx-react-chart-bootstrap4';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';

import { Chart, ArgumentAxis, ValueAxis, LineSeries, PieSeries } from "@devexpress/dx-react-chart-material-ui";

var cardStyle = {
  display: 'block',
  width: '85vw',
  transitionDuration: '0.3s',
  height: '45vw'
}

const Area = () => (
  <container>
    <Card //style={cardStyle}
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
            { argument: "Ley y Polítiac", value: 30 }
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

    <Card //style={cardStyle}
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
  </container>

);

export default Area;