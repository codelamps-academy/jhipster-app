import dayjs from 'dayjs/esm';

import { IInvoice, NewInvoice } from './invoice.model';

export const sampleWithRequiredData: IInvoice = {
  id: 20398,
  date: dayjs('2023-11-17T02:22'),
  status: 'ISSUED',
  paymentMethod: 'PAYPAL',
  paymentDate: dayjs('2023-11-17T08:06'),
  paymentAmount: 31715.12,
};

export const sampleWithPartialData: IInvoice = {
  id: 25174,
  date: dayjs('2023-11-17T11:30'),
  details: 'wetly dimpled yawningly',
  status: 'PAID',
  paymentMethod: 'PAYPAL',
  paymentDate: dayjs('2023-11-16T23:44'),
  paymentAmount: 31189.28,
};

export const sampleWithFullData: IInvoice = {
  id: 20367,
  date: dayjs('2023-11-16T19:34'),
  details: 'actual',
  status: 'PAID',
  paymentMethod: 'CASH_ON_DELIVERY',
  paymentDate: dayjs('2023-11-16T16:42'),
  paymentAmount: 18609.14,
};

export const sampleWithNewData: NewInvoice = {
  date: dayjs('2023-11-16T18:06'),
  status: 'ISSUED',
  paymentMethod: 'CASH_ON_DELIVERY',
  paymentDate: dayjs('2023-11-17T02:35'),
  paymentAmount: 17233.82,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
