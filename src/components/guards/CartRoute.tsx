import { Navigate, Outlet } from 'react-router';

const CartRoute = () => {
    const hasItems = false;
    return hasItems ?  <Outlet /> : <Navigate to="/catalog" />;
};

export default CartRoute;
