const initialState = {
  usuarios: [],
  usuario: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "OBTENER_USUARIOS":
      return {
        ...state,
        usuarios: action.usuarios,
      };

    case "USUARIO_EN_SESION":
      return {
        ...state,
        usuario: action.usuario,
      };
    default:
      return state;
  }
};

export default UserReducer;
