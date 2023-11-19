import { Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access.service';
import { ASC } from 'app/config/navigation.constants';
import { InvoiceComponent } from './list/invoice.component';
import { InvoiceDetailComponent } from './detail/invoice-detail.component';
import { InvoiceUpdateComponent } from './update/invoice-update.component';
import InvoiceResolve from './route/invoice-routing-resolve.service';

const invoiceRoute: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    data: {
      defaultSort: 'id,' + ASC,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/view',
    component: InvoiceDetailComponent,
    resolve: {
      invoice: InvoiceResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: 'new',
    component: InvoiceUpdateComponent,
    resolve: {
      invoice: InvoiceResolve,
    },
    canActivate: [UserRouteAccessService],
  },
  {
    path: ':id/edit',
    component: InvoiceUpdateComponent,
    resolve: {
      invoice: InvoiceResolve,
    },
    canActivate: [UserRouteAccessService],
  },
];

export default invoiceRoute;
