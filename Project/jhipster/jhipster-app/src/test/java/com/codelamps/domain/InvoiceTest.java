package com.codelamps.domain;

import static com.codelamps.domain.InvoiceTestSamples.*;
import static com.codelamps.domain.ProductOrderTestSamples.*;
import static com.codelamps.domain.ShipmentTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.codelamps.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class InvoiceTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Invoice.class);
        Invoice invoice1 = getInvoiceSample1();
        Invoice invoice2 = new Invoice();
        assertThat(invoice1).isNotEqualTo(invoice2);

        invoice2.setId(invoice1.getId());
        assertThat(invoice1).isEqualTo(invoice2);

        invoice2 = getInvoiceSample2();
        assertThat(invoice1).isNotEqualTo(invoice2);
    }

    @Test
    void shipmentTest() throws Exception {
        Invoice invoice = getInvoiceRandomSampleGenerator();
        Shipment shipmentBack = getShipmentRandomSampleGenerator();

        invoice.addShipment(shipmentBack);
        assertThat(invoice.getShipments()).containsOnly(shipmentBack);
        assertThat(shipmentBack.getInvoice()).isEqualTo(invoice);

        invoice.removeShipment(shipmentBack);
        assertThat(invoice.getShipments()).doesNotContain(shipmentBack);
        assertThat(shipmentBack.getInvoice()).isNull();

        invoice.shipments(new HashSet<>(Set.of(shipmentBack)));
        assertThat(invoice.getShipments()).containsOnly(shipmentBack);
        assertThat(shipmentBack.getInvoice()).isEqualTo(invoice);

        invoice.setShipments(new HashSet<>());
        assertThat(invoice.getShipments()).doesNotContain(shipmentBack);
        assertThat(shipmentBack.getInvoice()).isNull();
    }

    @Test
    void orderTest() throws Exception {
        Invoice invoice = getInvoiceRandomSampleGenerator();
        ProductOrder productOrderBack = getProductOrderRandomSampleGenerator();

        invoice.setOrder(productOrderBack);
        assertThat(invoice.getOrder()).isEqualTo(productOrderBack);

        invoice.order(null);
        assertThat(invoice.getOrder()).isNull();
    }
}
