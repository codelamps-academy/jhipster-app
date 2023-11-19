import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { ProductCategoryComponent } from './list/product-category.component';
import { ProductCategoryDetailComponent } from './detail/product-category-detail.component';
import { ProductCategoryUpdateComponent } from './update/product-category-update.component';
import ProductCategoryResolve from './route/product-category-routing-resolve.service';

const productCategoryRoute: Routes = [
  {
    path: '',
    component: ProductCategoryComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ProductCategoryDetailComponent,
    resolve: {
      productCategory: ProductCategoryResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ProductCategoryUpdateComponent,
    resolve: {
      productCategory: ProductCategoryResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ProductCategoryUpdateComponent,
    resolve: {
      productCategory: ProductCategoryResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default productCategoryRoute;
