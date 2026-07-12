import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../store/auth/useAuth';

const ProtectedRoute = () => {
    const { user } = useAuth();
    const isAuthenticated = !!user;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
