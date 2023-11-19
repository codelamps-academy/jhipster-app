import { IProductCategory, NewProductCategory } from './product-category.model';

export const sampleWithRequiredData: IProductCategory = {
  id: 12756,
  name: 'scarily',
};

export const sampleWithPartialData: IProductCategory = {
  id: 22,
  name: 'longingly critical considering',
};

export const sampleWithFullData: IProductCategory = {
  id: 22820,
  name: 'sure-footed',
  description: 'consequently frenetically',
};

export const sampleWithNewData: NewProductCategory = {
  name: 'peddle meh',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
