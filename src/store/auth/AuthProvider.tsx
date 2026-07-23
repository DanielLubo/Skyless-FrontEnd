import { useState } from 'react';
import { AuthContext } from './AuthContext';
import { AUTH_USER_KEY, USERS_MOCK_KEY } from './authStorage.constants';
import type { AuthProviderType } from './AuthProvider.type';
import type { AuthUser } from '../../types';
import type { MockUser } from './mockUser.type';

export const AuthProvider = ({ children }: AuthProviderType) => {
    // UseState para poder obtener algun usuario autenticado del localStorage
    const [user, setUser] = useState<AuthUser | null>(() => {
        // Obtenemos valor que haya del localStorage
        const raw = localStorage.getItem(AUTH_USER_KEY);
        if (raw === null) return null;

        const rawParsed = JSON.parse(raw) as AuthUser;
        return rawParsed;
    });

    // Metodo Login
    const login = async (
        email: string,
        password: string
    ): Promise<{ success: boolean; message?: string }> => {
        // Obtenemos primero el array del localStorage
        const raw = localStorage.getItem(USERS_MOCK_KEY);

        // Si no se obtiene nada del localStorage iniciamos un array vacio
        const mockUsers: MockUser[] =
            raw === null ? [] : (JSON.parse(raw) as MockUser[]);

        // Buscamos a un usuario si existe y sus atributos de email y password son correctos
        const searchedUser: MockUser | undefined = mockUsers.find(
            (mockUser) =>
                mockUser.email === email && mockUser.password === password
        );

        // Si no se encuentra nada retornamos un mensaje de error y el "estado" en false
        if (searchedUser === undefined) {
            return {
                success: false,
                message: 'El email o la contraseña no son validos',
            };
        }

        // Creamos un objeto de AuthUser con las props del usuario encontrado
        const authUser: AuthUser = {
            id: searchedUser.id,
            name: searchedUser.name,
            token: crypto.randomUUID(),
        };

        const jsonAuthUser = JSON.stringify(authUser);
        localStorage.setItem(AUTH_USER_KEY, jsonAuthUser);

        //! Importante setear el valor del usuario autenticado
        setUser(authUser);

        return {
            success: true,
            message:
                'Inicio de sesion exitoso, el usuario se ha logeado con exito',
        };
    };

    const register = async (
        name: string,
        email: string,
        password: string
    ): Promise<{ success: boolean; message?: string }> => {
        const raw = localStorage.getItem(USERS_MOCK_KEY);

        const mockUsers: MockUser[] =
            raw === null ? [] : (JSON.parse(raw) as MockUser[]);

        const emailUserDuplicated = mockUsers.find(
            (user) => user.email === email
        );

        if (emailUserDuplicated) {
            return {
                success: false,
                message: 'El correo ingresado ya esta en uso',
            };
        }

        const newMockUser: MockUser = {
            id: crypto.randomUUID(),
            name,
            email,
            password,
        };

        mockUsers.push(newMockUser);

        const jsonMockUsers = JSON.stringify(mockUsers);
        localStorage.setItem(USERS_MOCK_KEY, jsonMockUsers);

        return await login(email, password);
    };

    // Metodo Logout
    const logout = () => {
        localStorage.removeItem(AUTH_USER_KEY);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
