import { call, put, takeLatest, all } from 'redux-saga/effects' 
import axios from "axios"; 
import { getDetalheError, getDetalheSuccess, GET_DETALHE_REQUEST } from './action';

var id=15;

export const getDetalheItens = 
async (params) => await axios.get((`http://10.0.2.106:8000/detalhe/${id}`)   ,{params})
.then(res=>{  
   return (res.data)
})


export function* getDetalhe({payload}) { 
    try {   
    
      const resultadoDetalhe =    yield call(getDetalheItens); 
      console.log(resultadoDetalhe);

      yield put(getDetalheSuccess(resultadoDetalhe));

    } catch (e) {  
       const {cod, message} = e.response;
       yield put(getDetalheError("CodError: "+cod+" Message: "+message));
    }
 } 

export default all([takeLatest(GET_DETALHE_REQUEST, getDetalhe)]);