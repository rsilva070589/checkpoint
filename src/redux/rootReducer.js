import { combineReducers } from 'redux';

import clima from './clima/reducer'; 
import detalhe from './detalhe/reducer'; 

export default combineReducers({
  clima, detalhe,
});