import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IProductCategory } from '../product-category.model';
import { ProductCategoryService } from '../service/product-category.service';

export const productCategoryResolve = (route: ActivatedRouteSnapshot): Observable<null | IProductCategory> => {
  const id = route.params['id'];
  if (id) {
    return inject(ProductCategoryService)
      .find(id)
      .pipe(
        mergeMap((productCategory: HttpResponse<IProductCategory>) => {
          if (productCategory.body) {
            return of(productCategory.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default productCategoryResolve;
