import { Outlet } from 'react-router';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default MainLayout;
