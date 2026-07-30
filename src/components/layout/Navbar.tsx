import { useAuth } from '../../store/auth/useAuth';
import { Link } from 'react-router';
import { Search, Heart, ShoppingCart } from 'lucide-react';

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
        <nav className="m-4 p-2 rounded-full grid grid-cols-[1fr_auto_1fr] items-center bg-brand-background shadow-lg">
            <div>
                <h2 className="px-2 font-medium">Skyless</h2>
            </div>
            <ul className="flex items-center gap-6">
                {mockupLinks.map((item) => (
                    <li key={item.path}>
                        <Link
                            className="font-medium border-b-2 border-transparent text-brand-dark hover:-translate-y-1 hover:border-b-brand-dark transition duration-200 inline-block"
                            to={item.path}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-6 justify-self-end">
                <Search />
                <Heart />
                <ShoppingCart />
                {user === null ? (
                    <Link
                        className="py-2 px-6 font-medium text-white bg-brand-dark rounded-full shadow-lg"
                        to="/login"
                    >
                        Iniciar Sesión
                    </Link>
                ) : (
                    <Link to="/profile">{user.name}</Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
