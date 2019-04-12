import React from 'react';
import { Admin, Resource} from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import authProvider from './authProvider';

//ICONS
import {person, group} from '@material-ui/icons'



const dataProvider = fakeDataProvider({
  agenda : [
  {'Empresa': 'GEPP', 'Servicio': 'NOM-OTRO', 'Fecha': 'Mon Jan 14 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '11:00', 'Hora de Finalización': '15:00', 'Técnico Asignado': 'Josue Ese', 'Ubicación': 'Cuautitlán', 'Agendó': 'Pedro Aquel'},
  {'Empresa': 'Bimbo', 'Servicio': 'NOM-ALGO', 'Fecha': 'Thu Jan 17 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '08:00', 'Hora de Finalización': '11:00', 'Técnico Asignado': 'Pedro Algo', 'Ubicación': 'Atizapan', 'Agendó': 'Pablo Otro'},
  {'Empresa': 'América Móvil', 'Servicio': 'NOM-OTRO', 'Fecha': 'Mon Jan 20 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '11:00', 'Hora de Finalización': '15:00', 'Técnico Asignado': 'Josue Algo', 'Ubicación': 'Cuautitlán', 'Agendó': 'Pedro Aquel'},
  {'Empresa': 'CMR', 'Servicio': 'NOM-ALGO', 'Fecha': 'Thu Jan 22 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '08:00', 'Hora de Finalización': '11:00', 'Técnico Asignado': 'Pedro Algo', 'Ubicación': 'Atizapan', 'Agendó': 'Pablo Otro'},
  {'Empresa': 'Alsea', 'Servicio': 'NOM-ALGO', 'Fecha': 'Thu Jan 25 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '08:00', 'Hora de Finalización': '11:00', 'Técnico Asignado': 'Pedro Algo', 'Ubicación': 'Atizapan', 'Agendó': 'Juan Otro'},
  {'Empresa': 'Altex', 'Servicio': 'NOM-ALGO', 'Fecha': 'Thu Jan 22 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '08:00', 'Hora de Finalización': '11:00', 'Técnico Asignado': 'Pedro Algo', 'Ubicación': 'Atizapan', 'Agendó': 'Pablo Otro'},
  {'Empresa': 'Cemaco', 'Servicio': 'NOM-ALGO', 'Fecha': 'Thu Jan 27 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '08:00', 'Hora de Finalización': '11:00', 'Técnico Asignado': 'Pedro Algo', 'Ubicación': 'Atizapan', 'Agendó': 'Pablo Otro'},
  {'Empresa': 'FEMSA', 'Servicio': 'NOM-OTRO', 'Fecha': 'Tue Jan 22 2019 00:00:00 GMT+0000 (UTC)', 'Hora de Inicio': '08:00', 'Hora de Finalización': '11:00', 'Técnico Asignado': 'Pablo Aquel', 'Ubicación': 'Toluca', 'Agendó': 'Victor'}
  ]
})


const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="Por autor" list="Author" icon={person}/>
    <Resource name="Por área" list="Area" icon={group}/>
    <Resource name="Por institución" list="Institution"/>
  </Admin>

);

export default App;
