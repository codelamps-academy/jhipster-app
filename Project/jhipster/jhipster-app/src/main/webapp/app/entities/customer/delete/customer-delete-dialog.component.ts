import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ICustomer } from '../customer.model';
import { CustomerService } from '../service/customer.service';

@Component({
  standalone: true,
  templateUrl: './customer-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class CustomerDeleteDialogComponent {
  customer?: ICustomer;

  constructor(
    protected customerService: CustomerService,
    protected activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.customerService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
