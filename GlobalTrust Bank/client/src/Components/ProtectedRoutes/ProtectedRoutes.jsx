import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children, adminRequired = false }) => {
  const { isAuthenticated, userData } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminRequired && userData?.role !== 'admin') {
    return <Navigate to="/user-dashboard" />;
  }

  return children;
};

export default ProtectedRoute;