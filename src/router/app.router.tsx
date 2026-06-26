import { createBrowserRouter, Outlet } from 'react-router';
import LandingPage from '../features/landing/LandingPage';
import ProtectedRoute from '../components/guards/ProtectedRoute';
import GuestRoute from '../components/guards/GuestRoute';
import CartRoute from '../components/guards/CartRoute';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <LandingPage />,
            },
            {
                path: 'catalog',
                element: <div>Catalog</div>,
            },
            {
                path: 'catalog/:id',
                element: <div>Product Detail</div>,
            },
            {
                element: <GuestRoute />,
                children: [
                    {
                        path: 'login',
                        element: <div>Login</div>,
                    },
                    {
                        path: 'register',
                        element: <div>Register</div>,
                    },
                ],
            },
            {
                element: <CartRoute />,
                children: [
                    {
                        path: 'checkout',
                        element: <div>Checkout</div>,
                    },
                ],
            },
            {
                element: <ProtectedRoute />,
                children: [
                    {
                        path: 'profile',
                        element: <div>Profile</div>,
                    },
                ],
            },
        ],
    },
]);
