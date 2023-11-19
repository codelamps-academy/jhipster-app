import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { ShipmentComponent } from './list/shipment.component';
import { ShipmentDetailComponent } from './detail/shipment-detail.component';
import { ShipmentUpdateComponent } from './update/shipment-update.component';
import ShipmentResolve from './route/shipment-routing-resolve.service';

const shipmentRoute: Routes = [
  {
    path: '',
    component: ShipmentComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: ShipmentDetailComponent,
    resolve: {
      shipment: ShipmentResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: ShipmentUpdateComponent,
    resolve: {
      shipment: ShipmentResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: ShipmentUpdateComponent,
    resolve: {
      shipment: ShipmentResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default shipmentRoute;
