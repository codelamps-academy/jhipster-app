import { Gender } from 'app/entities/enumerations/gender.model';

export interface ICustomer {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  gender?: keyof typeof Gender | null;
  email?: string | null;
  phone?: string | null;
  addressLine1?: string | null;
  addressLine2?: string | null;
  city?: string | null;
  country?: string | null;
}

export type NewCustomer = Omit<ICustomer, 'id'> & { id: null };
