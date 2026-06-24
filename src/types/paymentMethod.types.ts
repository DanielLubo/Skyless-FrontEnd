import type { CardType } from './cardType.types';
import type { PaymentNetwork } from './paymentNetworks.types';

export interface PaymentMethod {
    id: string;
    cardNumber: string;
    cardType: CardType;
    paymentNetwork: PaymentNetwork;
}
