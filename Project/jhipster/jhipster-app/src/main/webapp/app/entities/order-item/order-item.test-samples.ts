import { IOrderItem, NewOrderItem } from './order-item.model';

export const sampleWithRequiredData: IOrderItem = {
  id: 19498,
  quantity: 648,
  totalPrice: 23900.62,
  status: 'OUT_OF_STOCK',
};

export const sampleWithPartialData: IOrderItem = {
  id: 4041,
  quantity: 13523,
  totalPrice: 18193.25,
  status: 'OUT_OF_STOCK',
};

export const sampleWithFullData: IOrderItem = {
  id: 27215,
  quantity: 15594,
  totalPrice: 22967.84,
  status: 'OUT_OF_STOCK',
};

export const sampleWithNewData: NewOrderItem = {
  quantity: 29221,
  totalPrice: 15918.17,
  status: 'OUT_OF_STOCK',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
