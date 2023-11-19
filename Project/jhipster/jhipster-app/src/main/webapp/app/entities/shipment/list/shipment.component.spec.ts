import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { ShipmentService } from '../service/shipment.service';

import { ShipmentComponent } from './shipment.component';

describe('Shipment Management Component', () => {
  let comp: ShipmentComponent;
  let fixture: ComponentFixture<ShipmentComponent>;
  let service: ShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{ path: 'shipment', component: ShipmentComponent }]),
        HttpClientTestingModule,
        ShipmentComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              defaultSort: 'id,asc',
            }),
            queryParamMap: of(
              jest.requireActual('@angular/router').convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              }),
            ),
            snapshot: { queryParams: {} },
          },
        },
      ],
    })
      .overrideTemplate(ShipmentComponent, '')
      .compileComponents();

    fixture = TestBed.createComponent(ShipmentComponent);
    comp = fixture.componentInstance;
    service = TestBed.inject(ShipmentService);

    const headers = new HttpHeaders();
    jest.spyOn(service, 'query').mockReturnValue(
      of(
        new HttpResponse({
          body: [{ id: 123 }],
          headers,
        }),
      ),
    );
  });

  it('Should call load all on init', () => {
    // WHEN
    comp.ngOnInit();

    // THEN
    expect(service.query).toHaveBeenCalled();
    expect(comp.shipments?.[0]).toEqual(expect.objectContaining({ id: 123 }));
  });

  describe('trackId', () => {
    it('Should forward to shipmentService', () => {
      const entity = { id: 123 };
      jest.spyOn(service, 'getShipmentIdentifier');
      const id = comp.trackId(0, entity);
      expect(service.getShipmentIdentifier).toHaveBeenCalledWith(entity);
      expect(id).toBe(entity.id);
    });
  });
});
