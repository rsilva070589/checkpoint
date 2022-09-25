
export const GET_DETALHE_REQUEST = "GET_DETALHE_REQUEST";
export const GET_DETALHE_SUCCESS = "GET_DETALHE_SUCCESS";
export const GET_DETALHE_ERROR = "GET_DETALHE_ERROR";

export function getDetalheRequest(indicadores) {
    return {
      type: GET_DETALHE_REQUEST,
      payload: indicadores,
    };
}

export function getDetalheSuccess(dados) {
    return {
      type: GET_DETALHE_SUCCESS,
      data: dados,
      
    };
}

export function getDetalheError(error) {
    return {
      type: GET_DETALHE_ERROR,
      message: error,
    };
} 