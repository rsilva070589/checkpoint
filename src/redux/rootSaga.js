import { all } from 'redux-saga/effects'; 
import clima from "./clima/sagas";
import detalhe from "./detalhe/sagas";

function* rootSaga() {
  yield all([clima]);
  yield all([detalhe]);
}

export default rootSaga;
