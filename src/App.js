import React from 'react';
import { Admin, Resource, ListGuesser} from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';

//DASHBOARDS
import Author from './Dashboards/Author';
import Area from './Dashboards/Area';
import Institution from './Dashboards/Institution';

//ICONS
import person from '@material-ui/icons/Person';
import group from '@material-ui/icons/Group';
import domain from '@material-ui/icons/Domain';



const dataProvider = fakeDataProvider({
  Institucione : [
  {'Rank': '1', 'Universidad': 'MIT', 'País': 'Estados Unidos'},
  {'Rank': '2', 'Universidad': 'Cmabridge', 'País': 'Estados Unidos'},
  ]
})


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Autore" list={Author} icon={person}/>
    <Resource name="Área" list={Area} icon={group}/>
    <Resource name="Institucione" list={Institution} icon={domain} />
  </Admin>

);

export default App;
