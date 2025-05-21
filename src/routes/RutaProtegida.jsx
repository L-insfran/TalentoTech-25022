import { useAuthCarrito } from '../context/ContextUser'
const RutaProtegida = ({children}) => {
  const { userAutorizado} = useAuthCarrito()
  return (
    <>
      {userAutorizado ? (
        children
      ) : (
        <div className="container">
          <h1 className="text-center">No tienes permiso para acceder a esta página</h1>
          <p className="text-center">Por favor, inicia sesión para continuar.</p>
        </div>
      )}
    </>
  )
}

export default RutaProtegida
