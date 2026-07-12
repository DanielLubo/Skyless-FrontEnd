import type { AuthUser } from '../../types';

export type AuthContextType = {
    user: AuthUser | null;
    login: (
        email: string,
        password: string
    ) => Promise<{ success: boolean; message?: string }>;
    logout: () => void;
};
