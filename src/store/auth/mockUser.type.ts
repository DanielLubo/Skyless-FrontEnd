import type { User } from '../../types';

export type MockUser = Pick<User, 'id' | 'name' | 'email'> & {
    password: string;
};
