import dayjs from 'dayjs/esm';

import { IProductOrder, NewProductOrder } from './product-order.model';

export const sampleWithRequiredData: IProductOrder = {
  id: 16128,
  placedDate: dayjs('2023-11-17T02:32'),
  status: 'PENDING',
  code: 'including',
};

export const sampleWithPartialData: IProductOrder = {
  id: 14286,
  placedDate: dayjs('2023-11-16T19:33'),
  status: 'PENDING',
  code: 'ugh that where',
};

export const sampleWithFullData: IProductOrder = {
  id: 14034,
  placedDate: dayjs('2023-11-16T14:33'),
  status: 'PENDING',
  code: 'meld afterwards failing',
};

export const sampleWithNewData: NewProductOrder = {
  placedDate: dayjs('2023-11-17T10:02'),
  status: 'CANCELLED',
  code: 'softly late ack',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
