import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../store/auth/useAuth';

const GuestRoute = () => {
    const { user } = useAuth();
    const isAuthenticated = !!user;

    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoute;
