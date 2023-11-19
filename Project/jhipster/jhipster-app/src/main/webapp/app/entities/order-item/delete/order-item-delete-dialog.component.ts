import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IOrderItem } from '../order-item.model';
import { OrderItemService } from '../service/order-item.service';

@Component({
  standalone: true,
  templateUrl: './order-item-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class OrderItemDeleteDialogComponent {
  orderItem?: IOrderItem;

  constructor(
    protected orderItemService: OrderItemService,
    protected activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.orderItemService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
