import React from 'react';
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
  {'IdInvestigador': '5', 'IdArea': '5', 'Nombre': 'Antonio Julian', 'Apellidos': 'Campos Valle', 'FactorImpacto': '4', 'HIndex': '1'},
  {'IdInvestigador': '6', 'IdArea': '6', 'Nombre': 'Miguel Angel', 'Apellidos': 'Santiago Mora', 'FactorImpacto': '4', 'HIndex': '3'},
  {'IdInvestigador': '7', 'IdArea': '7', 'Nombre': 'César', 'Apellidos': 'Licona Díaz', 'FactorImpacto': '4', 'HIndex': '2'},
  {'IdInvestigador': '8', 'IdArea': '8', 'Nombre': 'Armando', 'Apellidos': 'Casas Peña', 'FactorImpacto': '4', 'HIndex': '9'},
  {'IdInvestigador': '9', 'IdArea': '9', 'Nombre': 'Sara Julieta', 'Apellidos': 'Andrade Gómez', 'FactorImpacto': '4', 'HIndex': '2'},
  {'IdInvestigador': '10', 'IdArea': '10', 'Nombre': 'Wendy', 'Apellidos': 'Fernández', 'FactorImpacto': '4', 'HIndex': '1'},
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
  ],

  publicacion:[
  {'IdPublicacion': '1', 'IdTipoPublicacion': '1', 'TituloPublicacion': 'Redes y economía','AñoPublicacion': '2015'},
  {'IdPublicacion': '2', 'IdTipoPublicacion': '2', 'TituloPublicacion': 'Arte y ciencia en la mecánica','AñoPublicacion': '2012'},
  {'IdPublicacion': '3', 'IdTipoPublicacion': '1', 'TituloPublicacion': 'Computación cuántica','AñoPublicacion': '2005'},
  {'IdPublicacion': '5', 'IdTipoPublicacion': '2', 'TituloPublicacion': 'Química en los negocios', 'AñoPublicacion': '2018'},
  {'IdPublicacion': '7', 'IdTipoPublicacion': '2', 'TituloPublicacion': 'Electromagnetismo computacional','AñoPublicacion': '2011'},
  {'IdPublicacion': '8', 'IdTipoPublicacion': '4', 'TituloPublicacion': 'Iones y riñones', 'AñoPublicacion': '2002'},
  {'IdPublicacion': '9', 'IdTipoPublicacion': '3', 'TituloPublicacion': 'Física espacial', 'AñoPublicacion': '2000'},
  {'IdPublicacion': '10', 'IdTipoPublicacion': '2', 'TituloPublicacion': 'Finanzas cognitivas', 'AñoPublicacion': '2017'}
  ],

areaInstitucion: [
  ('IdAreaInstitucion':'1','IdInstitucion':'100','IdArea':'10'),
    ('IdAreaInstitucion':'2','IdInstitucion':'100','IdArea':'20'),
    ('IdAreaInstitucion':'3','IdInstitucion':'200','IdArea':'30'),
    ('IdAreaInstitucion':'4','IdInstitucion':'200','IdArea':'40'),
    ('IdAreaInstitucion':'5','IdInstitucion':'200','IdArea':'50'),
    ('IdAreaInstitucion':'6','IdInstitucion':'200','IdArea':'60'),
    ('IdAreaInstitucion':'7','IdInstitucion':'200','IdArea':'70'),
    ('IdAreaInstitucion':'8','IdInstitucion':'200','IdArea':'80'),
    ('IdAreaInstitucion':'9','IdInstitucion':'300','IdArea':'10'),
    ('IdAreaInstitucion':'10','IdInstitucion':'300','IdArea':'20'),
    ('IdAreaInstitucion':'11','IdInstitucion':'400','IdArea':'10'),
    ('IdAreaInstitucion':'12','IdInstitucion':'400','IdArea':'20'),
    ('IdAreaInstitucion':'13','IdInstitucion':'500','IdArea':'10'),
    ('IdAreaInstitucion':'14','IdInstitucion':'500','IdArea':'20'),
    ('IdAreaInstitucion':'15','IdInstitucion':'500','IdArea':'30'),
    ('IdAreaInstitucion':'16','IdInstitucion':'500','IdArea':'80'),
    ('IdAreaInstitucion':'17','IdInstitucion':'500','IdArea':'90'),
    ('IdAreaInstitucion':'18','IdInstitucion':'500','IdArea':'100'),
    ('IdAreaInstitucion':'19','IdInstitucion':'600','IdArea':'10'),
    ('IdAreaInstitucion':'20','IdInstitucion':'600','IdArea':'20'),
    ('IdAreaInstitucion':'21','IdInstitucion':'600','IdArea':'30'),
    ('IdAreaInstitucion':'22','IdInstitucion':'600','IdArea':'40'),
    ('IdAreaInstitucion':'23','IdInstitucion':'600','IdArea':'60'),
    ('IdAreaInstitucion':'24','IdInstitucion':'600','IdArea':'100'),
    ('IdAreaInstitucion':'25','IdInstitucion':'700','IdArea':'10'),
    ('IdAreaInstitucion':'26','IdInstitucion':'700','IdArea':'20'),
    ('IdAreaInstitucion':'27','IdInstitucion':'700','IdArea':'30'),
    ('IdAreaInstitucion':'28','IdInstitucion':'800','IdArea':'80'),
    ('IdAreaInstitucion':'29','IdInstitucion':'800','IdArea':'90'),
    ('IdAreaInstitucion':'30','IdInstitucion':'900','IdArea':'100'),
    ('IdAreaInstitucion':'31','IdInstitucion':'900','IdArea':'10'),
    ('IdAreaInstitucion':'32','IdInstitucion':'900','IdArea':'20'),
    ('IdAreaInstitucion':'33','IdInstitucion':'900','IdArea':'80'),
    ('IdAreaInstitucion':'34','IdInstitucion':'1000','IdArea':'90'),
    ('IdAreaInstitucion':'35','IdInstitucion':'1000','IdArea':'100'),
    ('IdAreaInstitucion':'36','IdInstitucion':'1000','IdArea':'10'),
    ('IdAreaInstitucion':'37','IdInstitucion':'1000','IdArea':'20'),
    ('IdAreaInstitucion':'38','IdInstitucion':'1000','IdArea':'30'),
    ('IdAreaInstitucion':'39','IdInstitucion':'1000','IdArea':'80'),
    ('IdAreaInstitucion':'40','IdInstitucion':'1000','IdArea':'40')
],

detallePublicacion:  [
  ('IdDetallePublicacion':'1','IdInvestigador':'1','IdPublicacion':'1'),
    ('IdDetallePublicacion':'2','IdInvestigador':'1','IdPublicacion':'2'),
    ('IdDetallePublicacion':'3','IdInvestigador':'1','IdPublicacion':'3'),
    ('IdDetallePublicacion':'4','IdInvestigador':'2','IdPublicacion':'3'),
    ('IdDetallePublicacion':'5','IdInvestigador':'3','IdPublicacion':'3'),
    ('IdDetallePublicacion':'6','IdInvestigador':'3','IdPublicacion':'4'),
    ('IdDetallePublicacion':'7','IdInvestigador':'4','IdPublicacion':'5'),
    ('IdDetallePublicacion':'8','IdInvestigador':'4','IdPublicacion':'6'),
    ('IdDetallePublicacion':'9','IdInvestigador':'4','IdPublicacion':'7'),
    ('IdDetallePublicacion':'10','IdInvestigador':'5','IdPublicacion':'8'),
    ('IdDetallePublicacion':'11','IdInvestigador':'6','IdPublicacion':'9'),
    ('IdDetallePublicacion':'12','IdInvestigador':'7','IdPublicacion':'10'),
    ('IdDetallePublicacion':'13','IdInvestigador':'8','IdPublicacion':'10'),
    ('IdDetallePublicacion':'14','IdInvestigador':'9','IdPublicacion':'10'),
    ('IdDetallePublicacion':'15','IdInvestigador':'10','IdPublicacion':'10')
],


tipoPublicacion:  [
  ('IdTipoPublicacion':'1','Categoria':'Q1'),
    ('IdTipoPublicacion':'2','Categoria':'Q2'),
    ('IdTipoPublicacion':'3','Categoria':'Q3'),
    ('IdTipoPublicacion':'4','Categoria':'Congreso'),
],

citaPublicacion:  [
  ('IdCitaPublicacion':'1','IdPublicacion':'1','FechaCita':'9999-12-31','CantidadCitas':'7'),
    ('IdCitaPublicacion':'2','IdPublicacion':'1','FechaCita':'2009-11-11','CantidadCitas':'6'),
    ('IdCitaPublicacion':'3','IdPublicacion':'1','FechaCita':'2010-09-04','CantidadCitas':'2'),
    ('IdCitaPublicacion':'4','IdPublicacion':'2','FechaCita':'2016-04-03','CantidadCitas':'3'),
    ('IdCitaPublicacion':'5','IdPublicacion':'2','FechaCita':'2018-08-10','CantidadCitas':'8'),
    ('IdCitaPublicacion':'6','IdPublicacion':'3','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'7','IdPublicacion':'3','FechaCita':'9999-12-31','CantidadCitas':'7'),
    ('IdCitaPublicacion':'8','IdPublicacion':'3','FechaCita':'2009-11-11','CantidadCitas':'6'),
    ('IdCitaPublicacion':'9','IdPublicacion':'4','FechaCita':'2010-09-04','CantidadCitas':'2'),
    ('IdCitaPublicacion':'10','IdPublicacion':'4','FechaCita':'2016-04-03','CantidadCitas':'3'),
    ('IdCitaPublicacion':'11','IdPublicacion':'4','FechaCita':'2018-08-10','CantidadCitas':'8'),
    ('IdCitaPublicacion':'12','IdPublicacion':'5','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'13','IdPublicacion':'5','FechaCita':'9999-12-31','CantidadCitas':'7'),
    ('IdCitaPublicacion':'14','IdPublicacion':'5','FechaCita':'2009-11-11','CantidadCitas':'6'),
    ('IdCitaPublicacion':'15','IdPublicacion':'5','FechaCita':'2010-09-04','CantidadCitas':'2'),
    ('IdCitaPublicacion':'16','IdPublicacion':'5','FechaCita':'2016-04-03','CantidadCitas':'3'),
    ('IdCitaPublicacion':'17','IdPublicacion':'5','FechaCita':'2018-08-10','CantidadCitas':'8'),
    ('IdCitaPublicacion':'18','IdPublicacion':'5','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'19','IdPublicacion':'5','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'20','IdPublicacion':'6','FechaCita':'9999-12-31','CantidadCitas':'7'),
    ('IdCitaPublicacion':'21','IdPublicacion':'7','FechaCita':'2009-11-11','CantidadCitas':'6'),
    ('IdCitaPublicacion':'22','IdPublicacion':'7','FechaCita':'2010-09-04','CantidadCitas':'2'),
    ('IdCitaPublicacion':'23','IdPublicacion':'7','FechaCita':'2016-04-03','CantidadCitas':'3'),
    ('IdCitaPublicacion':'24','IdPublicacion':'8','FechaCita':'2018-08-10','CantidadCitas':'8'),
    ('IdCitaPublicacion':'25','IdPublicacion':'8','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'26','IdPublicacion':'8','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'27','IdPublicacion':'9','FechaCita':'9999-12-31','CantidadCitas':'7'),
    ('IdCitaPublicacion':'28','IdPublicacion':'9','FechaCita':'2009-11-11','CantidadCitas':'6'),
    ('IdCitaPublicacion':'29','IdPublicacion':'9','FechaCita':'2010-09-04','CantidadCitas':'2'),
    ('IdCitaPublicacion':'30','IdPublicacion':'9','FechaCita':'2016-04-03','CantidadCitas':'3'),
    ('IdCitaPublicacion':'31','IdPublicacion':'9','FechaCita':'2018-08-10','CantidadCitas':'8'),
    ('IdCitaPublicacion':'32','IdPublicacion':'9','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'33','IdPublicacion':'9','FechaCita':'2019-02-25','CantidadCitas':'2'),
    ('IdCitaPublicacion':'34','IdPublicacion':'10','FechaCita':'2019-02-25','CantidadCitas':'6'),
    ('IdCitaPublicacion':'35','IdPublicacion':'10','FechaCita':'2017-12-31','CantidadCitas':'7'),
    ('IdCitaPublicacion':'36','IdPublicacion':'10','FechaCita':'2017-04-12','CantidadCitas':'6'),
    ('IdCitaPublicacion':'37','IdPublicacion':'10','FechaCita':'2011-03-09','CantidadCitas':'2'),
    ('IdCitaPublicacion':'38','IdPublicacion':'10','FechaCita':'2019-04-12','CantidadCitas':'3'),
    ('IdCitaPublicacion':'39','IdPublicacion':'10','FechaCita':'2018-08-01','CantidadCitas':'8'),
    ('IdCitaPublicacion':'40','IdPublicacion':'10','FechaCita':'2013-06-01','CantidadCitas':'6'),
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
