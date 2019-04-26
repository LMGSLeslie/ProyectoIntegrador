import React from 'react';
import { Admin, Resource, ListGuesser} from 'react-admin';

//DASHBOARDS
import Author from './Dashboards/Author';
import Area from './Dashboards/Area';
import Institution from './Dashboards/Institution';

//ICONS
import person from '@material-ui/icons/Person';
import group from '@material-ui/icons/Group';
import domain from '@material-ui/icons/Domain';

//DATA PROVIDER
import dataProvider from './infoProvider.js';


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Autore" list={Author} icon={person}/>
    <Resource name="Área" list={Area} icon={group}/>
    <Resource name="Institucione" list={Institution} icon={domain} />
  </Admin>

);

export default App;
