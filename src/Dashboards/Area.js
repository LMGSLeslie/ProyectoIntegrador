import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Chart, ArgumentAxis, ValueAxis, LineSeries } from "@devexpress/dx-react-chart-material-ui";

var cardStyle = {
   display: 'block',
   width: '85vw',
   transitionDuration: '0.3s',
   height: '45vw'
}

export default () => (
    <Card //style={cardStyle}
    >
        <CardHeader title="PowerBI Demo" />
        <CardContent>

        <Chart
         data={[
           { argument: 1, value: 10 },
           { argument: 2, value: 20 },
           { argument: 3, value: 30 }
         ]}
         >
         <ArgumentAxis />
         <ValueAxis />
         <LineSeries valueField="value" argumentField="argument" />
        </Chart>

        </CardContent>
    </Card>
);
