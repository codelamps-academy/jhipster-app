import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ProductCategoryDetailComponent } from './product-category-detail.component';

describe('ProductCategory Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCategoryDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: ProductCategoryDetailComponent,
              resolve: { productCategory: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(ProductCategoryDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load productCategory on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', ProductCategoryDetailComponent);

      // THEN
      expect(instance.productCategory).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
