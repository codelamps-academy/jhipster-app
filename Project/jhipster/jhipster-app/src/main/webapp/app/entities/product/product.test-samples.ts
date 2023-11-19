import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 31753,
  name: 'jovially',
  price: 8019.08,
  size: 'L',
};

export const sampleWithPartialData: IProduct = {
  id: 1128,
  name: 'concerning throughout',
  price: 11690.27,
  size: 'L',
};

export const sampleWithFullData: IProduct = {
  id: 30919,
  name: 'regarding flare',
  description: 'aluminium yippee preface',
  price: 25592.66,
  size: 'S',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'ouch extra-small',
  price: 23496.7,
  size: 'XXL',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
