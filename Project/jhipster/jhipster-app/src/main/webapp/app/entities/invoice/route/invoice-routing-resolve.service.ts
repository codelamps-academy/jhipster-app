import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IInvoice } from '../invoice.model';
import { InvoiceService } from '../service/invoice.service';

export const invoiceResolve = (route: ActivatedRouteSnapshot): Observable<null | IInvoice> => {
  const id = route.params['id'];
  if (id) {
    return inject(InvoiceService)
      .find(id)
      .pipe(
        mergeMap((invoice: HttpResponse<IInvoice>) => {
          if (invoice.body) {
            return of(invoice.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default invoiceResolve;
