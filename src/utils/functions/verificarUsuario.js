export default function verificarUsuario(navigate) {
  const usuarioEnSesion = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioEnSesion) {
    navigate("/");
  }
}
