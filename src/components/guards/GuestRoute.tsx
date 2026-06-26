import { Navigate, Outlet } from 'react-router';

const GuestRoute = () => {
    const isAuthenticated = false;
    return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default GuestRoute;
