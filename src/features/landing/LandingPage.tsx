import { useAuth } from '../../store/auth/useAuth';

const LandingPage = () => {
    const { logout } = useAuth();

    return (
        <div>
            <h1>Landing Page Skyless</h1>
            <button onClick={logout}>Cerrar Sesion</button>
        </div>
    );
};

export default LandingPage;
