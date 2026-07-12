import type { User } from './user.types';

export type AuthUser = Pick<User, 'id' | 'name'> & { token: string };
