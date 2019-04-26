
import dataProvider from '../infoProvider';

import {
    GET_LIST,
    GET_ONE,
    CREATE,
    UPDATE,
    DELETE,
    GET_MANY,
    GET_MANY_REFERENCE,
} from 'react-admin';


class serviceAreas{

  
  getAllAreas(onSuccess, onFail) {
    // Get the current 'global' time from an API using Promise
    return new Promise((resolve, reject) => {
      dataProvider(GET_LIST,"area",{pagination:{page: 1, perPage: 1000}, sort: {field: 'NombreArea', order: 'ASC'}, filter: {},}).then(function(result){
        resolve(result.data);
      })  
    })
  }
}


const serviceArea = new serviceAreas();

export default serviceArea;