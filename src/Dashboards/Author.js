// -------------------------------IMPORTS-------------------------------------------------//
import React from 'react';

//Material UI
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import { DatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

//devexpress
import { Legend } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale, Animation, Stack } from '@devexpress/dx-react-chart';
import { Chart, ArgumentAxis, ValueAxis, LineSeries, PieSeries, BarSeries } from "@devexpress/dx-react-chart-material-ui";

import serviceArea from '../services/area.service';

import AsyncSelect from 'react-select';

import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE,
    GET_MANY,
    GET_MANY_REFERENCE,
} from 'react-admin';


// -------------------------------STYLES-------------------------------------------------//
var cardStyle = {
    width: '100%',
    height: '100%',
    marginBottom: '5%'

}

var parametrizationStyle = {
    width: '100%',
    marginBottom: '5%',
    height: '900px'
}

var formControl = {
    minWidth: '100%',
    maxWidth: 300,
}
// -------------------------------DATOS-------------------------------------------------//

const datos_factor_impacto = [
    { argument: "Juanito", factor: 30, publicaciones: 20, citas: 10 },
    { argument: "Perenganito", factor: 30, publicaciones: 20, citas: 10 },
    { argument: "Jorgito", factor: 30, publicaciones: 20, citas: 10 },
]

const datos_citas_autor = [
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
]
// -----------------------------------------CLASS --------------------------------------------//
var areas = {};
var date = new Date();
var year = date.getFullYear();
var minYear = 1984;
var minEndYear = minYear + 2;
var maxEndYear = minYear + 10;
var state;
class Author extends React.Component {
    state = {
        area: '',
        authors: [],
        startDate: year,
        endDate: year
    };

    componentWillMount(){ 
        areas = serviceArea.getAllAreas();
    };

    componentDidMount(){
        console.log(areas);
    };

    handleChangeArea = event => {
        this.setState({ area: event.target.value });
    };

    handleChangeAuthors = event => {
        this.setState({ authors: event.target.value });
    };

    handleChangeStartDate = event => {
        const eventYear = new Date(event).getFullYear();
        console.log(year);
        this.setState({ startDate: eventYear });
        minEndYear = eventYear + 2
        maxEndYear = eventYear + 10 > year ? year : eventYear + 10;
    };

    handleChangeEndDate = event => {
        this.setState({ endDate: new Date(event).getFullYear() });
    };

    

    /*const promiseOptions = inputValue =>
        new Promise(resolve => {
            setTimeout(() => {
            resolve(filterColors(inputValue));
            }, 1000);
    });*/
    // ------------------------------------GRID-------------------------------------------------//
    render() {
        return (
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Card style={parametrizationStyle}>
                        <CardContent>
                            <form autoComplete="off">
                                <Grid container spacing={8}>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid item xs={6}>
                                            <DatePicker
                                                style={formControl}
                                                views={["year"]}
                                                label="Desde"
                                                minDate={new Date((minYear + 1).toString())}
                                                maxDate={new Date()}
                                                value={new Date((this.state.startDate + 1).toString())}
                                                onChange={this.handleChangeStartDate}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <DatePicker
                                                style={formControl}
                                                views={["year"]}
                                                label="Hasta"
                                                minDate={new Date((minEndYear + 1).toString())}
                                                maxDate={new Date((maxEndYear + 1).toString())}
                                                value={new Date((this.state.endDate + 1).toString())}
                                                onChange={this.handleChangeEndDate}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid container spacing={8}>
                                    <Grid item xs={6}>
                                        <FormControl style={formControl}>
                                            <InputLabel htmlFor="input_area">Área</InputLabel>
                                                <AsyncSelect
                                                    cacheOptions
                                                    defaultOptions
                                                    isClearable
                                                    loadOptions={areas}
                                                    onChange={this.handleChangeArea}
                                                />
                                        </FormControl>
                                    </Grid>
                                    
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

                <Grid item xs={12} md={6}>
                    <Card style={cardStyle}
                    >
                        <CardHeader title="Factor de impacto" />
                        <CardContent>


                            <Chart
                                data={datos_factor_impacto}
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

                <Grid item xs={12} md={6}>
                    <Card style={cardStyle}
                    >
                        <CardHeader title="Promedio de citas por autor" />
                        <CardContent>

                            <Chart
                                data={datos_citas_autor}
                            >
                                <ArgumentAxis />
                                <ValueAxis />
                                <LineSeries
                                    name="Juanito"
                                    valueField="promedio"
                                    argumentField="argument"
                                />
                                <LineSeries
                                    name="Perenganito"
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
                <Grid item xs={12} md={6}>
                    <Card style={cardStyle}
                    >
                        <CardHeader title="H-Index" />
                        <CardContent>

                            <Chart
                                data={datos_citas_autor}
                            >
                                <ArgumentAxis />
                                <ValueAxis />
                                <LineSeries
                                    name="Juanito"
                                    valueField="promedio"
                                    argumentField="argument"
                                />
                                <LineSeries
                                    name="Perenganito"
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

            </Grid>
        )
    }
}


export default Author;

/*<form>
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
                <div class="col-md-6 col-sm-12">
                <select class ="custom-select">
                    {
                        dataProvider[0].area.map(a =>{
                                return (
                                    <option key={a.IdArea} value={a.NombreArea}>
                                    {a.NombreArea}
                                    </option>
                            )})
                        })
                        });
                    }
                </select>
                </div>
                <div class="col-md-6 col-sm-12">
                    <select class="custom-select" multiple>
                    {
                        dataProvider[0].autor.map(a =>{
                                return (
                                    <option key={a.IdInvestigador} value={a.Nombre}>
                                    {a.Nombre}
                                    </option>
                            )
                            })
                        })
                        });
                    }
                    </select>
                </div>

            </div>
        </form>*/