import produce from 'immer';
import { GET_DETALHE_ERROR, GET_DETALHE_REQUEST, GET_DETALHE_SUCCESS } from "./action";

const INITIAL_STATE = {
  resultado: undefined,
  carregando: false,
  mensagem: undefined,
};

export default function indicador(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case GET_DETALHE_REQUEST: {
        draft.carregando = true;
        draft.mensagem = undefined;
        break;
      }
      case GET_DETALHE_SUCCESS: {
        draft.resultado = action.data;
        draft.carregando = false;
        draft.mensagem = undefined;
        break;
      }
      case GET_DETALHE_ERROR: {
        draft.carregando = false;
        draft.mensagem = action.message
        break;
      }
      default:
    }
  });
}
