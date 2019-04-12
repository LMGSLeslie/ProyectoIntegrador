import React from 'react';
import './Author.css';


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
    </div>
);

export default Author;