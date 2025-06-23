import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { user } = useAuthContext();

  // Si aún no se sabe si hay usuario, no renderices nada (o muestra un loader)
  if (user === undefined) return null;

  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
export default ProtectedRoute;