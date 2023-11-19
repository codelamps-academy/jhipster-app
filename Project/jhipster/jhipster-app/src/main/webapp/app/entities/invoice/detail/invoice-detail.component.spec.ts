import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness, RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { InvoiceDetailComponent } from './invoice-detail.component';

describe('Invoice Management Detail Component', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceDetailComponent, RouterTestingModule.withRoutes([], { bindToComponentInputs: true })],
      providers: [
        provideRouter(
          [
            {
              path: '**',
              component: InvoiceDetailComponent,
              resolve: { invoice: () => of({ id: 123 }) },
            },
          ],
          withComponentInputBinding(),
        ),
      ],
    })
      .overrideTemplate(InvoiceDetailComponent, '')
      .compileComponents();
  });

  describe('OnInit', () => {
    it('Should load invoice on init', async () => {
      const harness = await RouterTestingHarness.create();
      const instance = await harness.navigateByUrl('/', InvoiceDetailComponent);

      // THEN
      expect(instance.invoice).toEqual(expect.objectContaining({ id: 123 }));
    });
  });
});
