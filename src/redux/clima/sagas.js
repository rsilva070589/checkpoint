import { call, put, takeLatest, all } from 'redux-saga/effects' 
import axios from "axios"; 
import { getClimaError, getClimaSuccess, GET_CLIMA_REQUEST } from './action';

 
export const getDadosTemperatura = 
async (params) => await axios.get("http://localhost:8000/checkpoint/",{params})
.then(res=>{  
   return (res.data)
})

export function* getClima({payload}) { 
    try {    
    
      const resultado =  yield call(getDadosTemperatura) 
      console.log(payload);

      yield put(getClimaSuccess(resultado));
      yield put(payload);

    } catch (e) {  
       const {cod, message} = e.response;
       yield put(getClimaError("CodError: "+cod+" Message: "+message));
    }
 } 


export default all([takeLatest(GET_CLIMA_REQUEST, getClima)]);