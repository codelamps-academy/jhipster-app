import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'product',
        data: { pageTitle: 'jhipsterApp.product.home.title' },
        loadChildren: () => import('./product/product.routes'),
      },
      {
        path: 'product-category',
        data: { pageTitle: 'jhipsterApp.productCategory.home.title' },
        loadChildren: () => import('./product-category/product-category.routes'),
      },
      {
        path: 'customer',
        data: { pageTitle: 'jhipsterApp.customer.home.title' },
        loadChildren: () => import('./customer/customer.routes'),
      },
      {
        path: 'product-order',
        data: { pageTitle: 'jhipsterApp.productOrder.home.title' },
        loadChildren: () => import('./product-order/product-order.routes'),
      },
      {
        path: 'order-item',
        data: { pageTitle: 'jhipsterApp.orderItem.home.title' },
        loadChildren: () => import('./order-item/order-item.routes'),
      },
      {
        path: 'invoice',
        data: { pageTitle: 'jhipsterApp.invoice.home.title' },
        loadChildren: () => import('./invoice/invoice.routes'),
      },
      {
        path: 'shipment',
        data: { pageTitle: 'jhipsterApp.shipment.home.title' },
        loadChildren: () => import('./shipment/shipment.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
