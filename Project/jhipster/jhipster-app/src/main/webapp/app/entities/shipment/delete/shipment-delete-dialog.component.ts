import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IShipment } from '../shipment.model';
import { ShipmentService } from '../service/shipment.service';

@Component({
  standalone: true,
  templateUrl: './shipment-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class ShipmentDeleteDialogComponent {
  shipment?: IShipment;

  constructor(
    protected shipmentService: ShipmentService,
    protected activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.shipmentService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
