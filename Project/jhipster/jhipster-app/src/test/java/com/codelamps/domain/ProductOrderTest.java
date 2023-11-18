package com.codelamps.domain;

import static com.codelamps.domain.CustomerTestSamples.*;
import static com.codelamps.domain.InvoiceTestSamples.*;
import static com.codelamps.domain.OrderItemTestSamples.*;
import static com.codelamps.domain.ProductOrderTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.codelamps.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class ProductOrderTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(ProductOrder.class);
        ProductOrder productOrder1 = getProductOrderSample1();
        ProductOrder productOrder2 = new ProductOrder();
        assertThat(productOrder1).isNotEqualTo(productOrder2);

        productOrder2.setId(productOrder1.getId());
        assertThat(productOrder1).isEqualTo(productOrder2);

        productOrder2 = getProductOrderSample2();
        assertThat(productOrder1).isNotEqualTo(productOrder2);
    }

    @Test
    void orderItemTest() throws Exception {
        ProductOrder productOrder = getProductOrderRandomSampleGenerator();
        OrderItem orderItemBack = getOrderItemRandomSampleGenerator();

        productOrder.addOrderItem(orderItemBack);
        assertThat(productOrder.getOrderItems()).containsOnly(orderItemBack);
        assertThat(orderItemBack.getOrder()).isEqualTo(productOrder);

        productOrder.removeOrderItem(orderItemBack);
        assertThat(productOrder.getOrderItems()).doesNotContain(orderItemBack);
        assertThat(orderItemBack.getOrder()).isNull();

        productOrder.orderItems(new HashSet<>(Set.of(orderItemBack)));
        assertThat(productOrder.getOrderItems()).containsOnly(orderItemBack);
        assertThat(orderItemBack.getOrder()).isEqualTo(productOrder);

        productOrder.setOrderItems(new HashSet<>());
        assertThat(productOrder.getOrderItems()).doesNotContain(orderItemBack);
        assertThat(orderItemBack.getOrder()).isNull();
    }

    @Test
    void invoiceTest() throws Exception {
        ProductOrder productOrder = getProductOrderRandomSampleGenerator();
        Invoice invoiceBack = getInvoiceRandomSampleGenerator();

        productOrder.addInvoice(invoiceBack);
        assertThat(productOrder.getInvoices()).containsOnly(invoiceBack);
        assertThat(invoiceBack.getOrder()).isEqualTo(productOrder);

        productOrder.removeInvoice(invoiceBack);
        assertThat(productOrder.getInvoices()).doesNotContain(invoiceBack);
        assertThat(invoiceBack.getOrder()).isNull();

        productOrder.invoices(new HashSet<>(Set.of(invoiceBack)));
        assertThat(productOrder.getInvoices()).containsOnly(invoiceBack);
        assertThat(invoiceBack.getOrder()).isEqualTo(productOrder);

        productOrder.setInvoices(new HashSet<>());
        assertThat(productOrder.getInvoices()).doesNotContain(invoiceBack);
        assertThat(invoiceBack.getOrder()).isNull();
    }

    @Test
    void customerTest() throws Exception {
        ProductOrder productOrder = getProductOrderRandomSampleGenerator();
        Customer customerBack = getCustomerRandomSampleGenerator();

        productOrder.setCustomer(customerBack);
        assertThat(productOrder.getCustomer()).isEqualTo(customerBack);

        productOrder.customer(null);
        assertThat(productOrder.getCustomer()).isNull();
    }
}
