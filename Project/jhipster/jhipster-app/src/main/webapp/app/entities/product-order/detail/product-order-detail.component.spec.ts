import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProductOrderDetailComponent } from './product-order-detail.component';

describe('ProductOrder Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOrderDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: ProductOrderDetailComponent,
              resolve: { productOrder: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(ProductOrderDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load productOrder on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', ProductOrderDetailComponent);

      // THEN
      expect(instance.productOrder).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
