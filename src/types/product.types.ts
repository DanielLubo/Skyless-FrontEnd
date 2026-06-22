import type { Collection } from './collection.types';
import type { BaseGender } from './common.types';
import type { ReviewProduct } from './reviewProduct.types';

export type ProductGender = BaseGender | 'Pareja'

export interface Product {
    id: string;
    code: string;
    name: string;
    description: string;
    price: number;
    reviews: ReviewProduct[];
    images: string[];
    materials: string[];
    productGender: ProductGender;
    collection: Collection;
    createdAt: string;
}
