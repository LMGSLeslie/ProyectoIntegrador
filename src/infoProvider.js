mport React from 'react';
import { Admin, Resource} from 'react-admin';
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
  autor : [
  {'IdInvestigador': '1', 'IdArea': '1', 'Nombre': 'Manuel', 'Apellidos': 'Pérez Estrada', 'FactorImpacto': '1', 'HIndex': '3'},
  {'IdInvestigador': '2', 'IdArea': '2', 'Nombre': 'Graciela', 'Apellidos': 'Medina Hernández', 'FactorImpacto': '3', 'HIndex': '5'},
  {'IdInvestigador': '3', 'IdArea': '3', 'Nombre': 'Verónica', 'Apellidos': 'Martínez Salazar', 'FactorImpacto': '1', 'HIndex': '4'},
  {'IdInvestigador': '4', 'IdArea': '4', 'Nombre': 'Fernando', 'Apellidos': 'Lima Jiménez', 'FactorImpacto': '2', 'HIndex': '4'},
  {'IdInvestigador': '5', 'IdArea': '5', 'Nombre': 'Antonio Julian', 'Apellidos': 'Campos Valle', 'FactorImpacto': '4', 'HIndex': '2'}
  ],

  area: [
  {'IdArea': '10', 'NombreArea': 'Ciencias Computacionales'},
  {'IdArea': '20', 'NombreArea': 'Medicina'},
  {'IdArea': '30', 'NombreArea': 'Física'},
  {'IdArea': '40', 'NombreArea': 'Ciencias Sociales'},
  {'IdArea': '50', 'NombreArea': 'Artes y Humanidades'},
  {'IdArea': '60', 'NombreArea': 'Robótica'},
  {'IdArea': '70', 'NombreArea': 'Ingeniería'},
  {'IdArea': '80', 'NombreArea': 'Química'},
  {'IdArea': '90', 'NombreArea': 'Economía'},
  {'IdArea': '100', 'NombreArea': 'Electrónica'}
  ],
  
  areaInstitucion: [
  ('1','100','10'),
    ('2','100','20'),
    ('3','200','30'),
    ('4','200','40'),
    ('5','200','50'),
    ('6','200','60'),
    ('7','200','70'),
    ('8','200','80'),
    ('9','300','10'),
    ('10','300','20'),
    ('11','400','10'),
    ('12','400','20'),
    ('13','500','10'),
    ('14','500','20'),
    ('15','500','30'),
    ('16','500','80'),
    ('17','500','90'),
    ('18','500','100'),
    ('19','600','10'),
    ('20','600','20'),
    ('21','600','30'),
    ('22','600','40'),
    ('23','600','60'),
    ('24','600','100'),
    ('25','700','10'),
    ('26','700','20'),
    ('27','700','30'),
    ('28','800','80'),
    ('29','800','90'),
    ('30','900','100'),
    ('31','900','10'),
    ('32','900','20'),
    ('33','900','80'),
    ('34','1000','90'),
    ('35','1000','100'),
    ('36','1000','10'),
    ('37','1000','20'),
    ('38','1000','30'),
    ('39','1000','80'),
    ('40','1000','40')
],
  institucion: [
  {'IdInstitucion': '100', 'NombreInstitucion': 'Tecnológico de Monterrey', 'RankingQs': '178','Pais': 'Mexico'},
  {'IdInstitucion': '200', 'NombreInstitucion': 'Massachusetts Institute of Technology', 'RankingQs': '1','Pais': 'Estados Unidos'},
  {'IdInstitucion': '300', 'NombreInstitucion': 'Stanford University', 'RankingQs': '2','Pais': 'Estados Unidos'},
  {'IdInstitucion': '400', 'NombreInstitucion': 'California Institute of Technology', 'RankingQs': '4','Pais': 'Estados Unidos'},
  {'IdInstitucion': '600', 'NombreInstitucion': 'University of Oxford', 'RankingQs': '5', 'Pais': 'Reino Unido'},
  {'IdInstitucion': '700', 'NombreInstitucion': 'Universidad Nacional Autonoma de México', 'RankingQs': '122','Pais': 'Mexico'},
  {'IdInstitucion': '800', 'NombreInstitucion': 'Instituto Politecnico Nacional', 'RankingQs': '651','Pais': 'Mexico'},
  {'IdInstitucion': '900', 'NombreInstitucion': 'Yale University', 'RankingQs': '15', 'Pais': 'Estados Unidos'},
  {'IdInstitucion': '1000', 'NombreInstitucion': 'Cornell University', 'RankingQs': '14', 'Pais': 'Estados Unidos'}
  ]
})


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="Por autor" list={Author} icon={person}/>
    <Resource name="Por área" list={Area} icon={group}/>
    <Resource name="Por institución" list={Institution} icon={domain} />
  </Admin>

);

export default App;
