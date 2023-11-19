import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { OrderItemComponent } from './list/order-item.component';
import { OrderItemDetailComponent } from './detail/order-item-detail.component';
import { OrderItemUpdateComponent } from './update/order-item-update.component';
import OrderItemResolve from './route/order-item-routing-resolve.service';

const orderItemRoute: Routes = [
  {
    path: '',
    component: OrderItemComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: OrderItemDetailComponent,
    resolve: {
      orderItem: OrderItemResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: OrderItemUpdateComponent,
    resolve: {
      orderItem: OrderItemResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: OrderItemUpdateComponent,
    resolve: {
      orderItem: OrderItemResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default orderItemRoute;
