import type { BaseGender } from './common.types';
import type { PaymentMethod } from './paymentMethod.types';

export interface User {
    id: string;
    name: string;
    lastName: string;
    email: string;
    birthday: string;
    gender: BaseGender;
    numberPhone: string;
    address: string;
    paymentMethods: PaymentMethod[];
}
