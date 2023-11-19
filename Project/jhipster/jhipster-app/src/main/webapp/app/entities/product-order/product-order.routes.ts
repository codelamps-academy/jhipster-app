import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { ProductOrderComponent } from './list/product-order.component';
import { ProductOrderDetailComponent } from './detail/product-order-detail.component';
import { ProductOrderUpdateComponent } from './update/product-order-update.component';
import ProductOrderResolve from './route/product-order-routing-resolve.service';

const productOrderRoute: Routes = [
  {
    path: '',
    component: ProductOrderComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ProductOrderDetailComponent,
    resolve: {
      productOrder: ProductOrderResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ProductOrderUpdateComponent,
    resolve: {
      productOrder: ProductOrderResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ProductOrderUpdateComponent,
    resolve: {
      productOrder: ProductOrderResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default productOrderRoute;
