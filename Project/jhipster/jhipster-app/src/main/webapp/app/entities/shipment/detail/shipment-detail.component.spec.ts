import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ShipmentDetailComponent } from './shipment-detail.component';

describe('Shipment Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipmentDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: ShipmentDetailComponent,
              resolve: { shipment: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(ShipmentDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load shipment on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', ShipmentDetailComponent);

      // THEN
      expect(instance.shipment).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
