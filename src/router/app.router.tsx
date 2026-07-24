import { createBrowserRouter } from 'react-router';
import LandingPage from '../features/landing/LandingPage';
import ProtectedRoute from '../components/guards/ProtectedRoute';
import GuestRoute from '../components/guards/GuestRoute';
import CartRoute from '../components/guards/CartRoute';
import LoginPage from '../features/auth/LoginPage';
import RegisterPage from '../features/auth/RegisterPage';
import MainLayout from '../components/layout/MainLayout';

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
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
                path: 'men',
                element: <div>Men</div>,
            },
            {
                path: 'women',
                element: <div>Woman</div>,
            },
            {
                path: 'sale',
                element: <div>Sale</div>,
            },
            {
                path: 'contact',
                element: <div>Contact</div>,
            },
            {
                element: <GuestRoute />,
                children: [
                    {
                        path: 'login',
                        element: <LoginPage />,
                    },
                    {
                        path: 'register',
                        element: <RegisterPage />,
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
