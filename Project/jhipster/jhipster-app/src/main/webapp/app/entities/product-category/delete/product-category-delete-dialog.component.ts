import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IProductCategory } from '../product-category.model';
import { ProductCategoryService } from '../service/product-category.service';

@Component({
  standalone: true,
  templateUrl: './product-category-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class ProductCategoryDeleteDialogComponent {
  productCategory?: IProductCategory;

  constructor(
    protected productCategoryService: ProductCategoryService,
    protected activeModal: NgbActiveModal,
  ) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.productCategoryService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
