import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 12100,
  name: 'fooey',
  price: 29415.06,
  size: 'M',
};

export const sampleWithPartialData: IProduct = {
  id: 5821,
  name: 'beware',
  description: 'vastly knottily ha',
  price: 3429.84,
  size: 'S',
};

export const sampleWithFullData: IProduct = {
  id: 10908,
  name: 'musty',
  description: 'which although clap',
  price: 5232.3,
  size: 'XL',
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewProduct = {
  name: 'tan literate',
  price: 14991.31,
  size: 'L',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
