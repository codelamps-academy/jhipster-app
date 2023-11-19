import dayjs from 'dayjs/esm';

import { IShipment, NewShipment } from './shipment.model';

export const sampleWithRequiredData: IShipment = {
  id: 24217,
  date: dayjs('2023-11-16T14:47'),
};

export const sampleWithPartialData: IShipment = {
  id: 10563,
  date: dayjs('2023-11-16T17:38'),
  details: 'scarcely unwrap upon',
};

export const sampleWithFullData: IShipment = {
  id: 6999,
  trackingCode: 'out',
  date: dayjs('2023-11-17T02:31'),
  details: 'blah yippee disaster',
};

export const sampleWithNewData: NewShipment = {
  date: dayjs('2023-11-16T20:27'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
