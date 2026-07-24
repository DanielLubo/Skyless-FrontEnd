import { useAuth } from '../../store/auth/useAuth';
import { Link } from 'react-router';

type Links = {
    name: string;
    path: string;
};

const mockupLinks: Links[] = [
    { name: 'Inicio', path: '/' },
    { name: 'Hombre', path: '/men' },
    { name: 'Mujer', path: '/women' },
    { name: 'Sale', path: '/sale' },
    { name: 'Contacto', path: '/contact' },
];

const Navbar = () => {
    const { user } = useAuth();

    return (
        <nav>
            <div>
                <h2>Skyless</h2>
            </div>
            <ul>
                {mockupLinks.map((item) => (
                    <Link key={item.path} to={item.path}>
                        {item.name}
                    </Link>
                ))}
            </ul>
            <div>
                {user === null ? (
                    <Link to="/login">Iniciar Sesion</Link>
                ) : (
                    <Link to="/profile">{user.name}</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
