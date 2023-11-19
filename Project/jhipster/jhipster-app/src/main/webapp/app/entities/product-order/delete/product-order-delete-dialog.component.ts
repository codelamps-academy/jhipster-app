import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IProductOrder } from '../product-order.model';
import { ProductOrderService } from '../service/product-order.service';

@Component({
  standalone: true,
  templateUrl: './product-order-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class ProductOrderDeleteDialogComponent {
  productOrder?: IProductOrder;

  constructor(
    protected productOrderService: ProductOrderService,
    protected activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.productOrderService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
