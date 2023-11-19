import { inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { of, EMPTY, Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { IShipment } from '../shipment.model';
import { ShipmentService } from '../service/shipment.service';

export const shipmentResolve = (route: ActivatedRouteSnapshot): Observable<null | IShipment> => {
  const id = route.params['id'];
  if (id) {
    return inject(ShipmentService)
      .find(id)
      .pipe(
        mergeMap((shipment: HttpResponse<IShipment>) => {
          if (shipment.body) {
            return of(shipment.body);
          } else {
            inject(Router).navigate(['404']);
            return EMPTY;
          }
        }),
      );
  }
  return of(null);
};

export default shipmentResolve;
