const initialState = {
  totalInvertido: 0,
  criptosCG: [], // CoinGecko
  accionesYF: [], // Yahoo Finance
  acciones: [],
  criptos: [],
};

const ActivosReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "OBTENER_TOTAL_INVERTIDO":
    //   return {
    //     ...state,
    //     totalInvertido: action.total,
    //   };
    case "OBTENER_CRIPTOS":
      return {
        ...state,
        criptosCG: action.criptos,
      };
    case "OBTENER_CRIPTOS_PORTFOLIO":
      return {
        ...state,
        criptos: action.criptos,
      };
    default:
      return state;
  }
};

export default ActivosReducer;
