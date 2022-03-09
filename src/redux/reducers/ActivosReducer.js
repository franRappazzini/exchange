const initialState = { acciones: [], criptos: [] };

const ActivosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OBTENER_CRIPTOS":
      return {
        ...state,
        criptos: action.criptos,
      };
    case "OBTENER_ACCIONES":
      return {
        ...state,
        acciones: action.acciones,
      };
    default:
      return state;
  }
};

export default ActivosReducer;
