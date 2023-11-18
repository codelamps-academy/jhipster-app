package com.codelamps.domain;

import static com.codelamps.domain.InvoiceTestSamples.*;
import static com.codelamps.domain.ShipmentTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.codelamps.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ShipmentTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Shipment.class);
        Shipment shipment1 = getShipmentSample1();
        Shipment shipment2 = new Shipment();
        assertThat(shipment1).isNotEqualTo(shipment2);

        shipment2.setId(shipment1.getId());
        assertThat(shipment1).isEqualTo(shipment2);

        shipment2 = getShipmentSample2();
        assertThat(shipment1).isNotEqualTo(shipment2);
    }

    @Test
    void invoiceTest() throws Exception {
        Shipment shipment = getShipmentRandomSampleGenerator();
        Invoice invoiceBack = getInvoiceRandomSampleGenerator();

        shipment.setInvoice(invoiceBack);
        assertThat(shipment.getInvoice()).isEqualTo(invoiceBack);

        shipment.invoice(null);
        assertThat(shipment.getInvoice()).isNull();
    }
}
