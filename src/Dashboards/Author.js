import React from 'react';
import './Author.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { Legend } from '@devexpress/dx-react-chart-material-ui';
// import { PieSeries } from '@devexpress/dx-react-chart-bootstrap4';
import { ValueScale, Animation } from '@devexpress/dx-react-chart';
import { List, Create, Edit, SimpleForm, DisabledInput, TextInput, DateInput, LongTextInput, ReferenceManyField, Datagrid, TextField, DateField, EditButton } from 'react-admin';

import { Chart, ArgumentAxis, ValueAxis, LineSeries, PieSeries, BarSeries } from "@devexpress/dx-react-chart-material-ui";

var cardStyle = {
    width: '100%',
    height: '100%',
    marginBottom: '5%'
  
  }

  
const areas = [
        {'id': '1', 'nombre_area':'Computación'},
        {'id': '2', 'nombre_area':'Matemáticas'},
        {'id': '3', 'nombre_area':'Arte y diseño'}
    ];


const Author = () =>(
    <div class="container">
        <form>
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <center><label>Tiempo</label></center>
                    <div class="row justify-content-center">
                        <div class="col-1">
                            <label>2 años</label>
                        </div>
                        <div class="col-10">
                            <input type="range" class="custom-range" min="2" max="10" tooltip="show"/>
                        </div>
                        <div class ="col-1">
                            <label>10 años</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-4 col-sm-7">
                    <select class ="custom-select">
                        {
                            areas.map(area => {
                                return (
                                <option key={area.id} value={area.nombre_area}>
                                {area.nombre_area}
                                </option>
                                )
                            })
                        }
                    </select>
                </div>
                
            </div>
        </form>
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
    </Grid>
    </div>


);

export default Author;