import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { OrderItemDetailComponent } from './order-item-detail.component';

describe('OrderItem Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderItemDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: OrderItemDetailComponent,
              resolve: { orderItem: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(OrderItemDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load orderItem on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', OrderItemDetailComponent);

      // THEN
      expect(instance.orderItem).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
