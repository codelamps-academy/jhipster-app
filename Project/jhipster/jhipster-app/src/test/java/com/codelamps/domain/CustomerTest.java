package com.codelamps.domain;

import static com.codelamps.domain.CustomerTestSamples.*;
import static com.codelamps.domain.ProductOrderTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.codelamps.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class CustomerTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Customer.class);
        Customer customer1 = getCustomerSample1();
        Customer customer2 = new Customer();
        assertThat(customer1).isNotEqualTo(customer2);

        customer2.setId(customer1.getId());
        assertThat(customer1).isEqualTo(customer2);

        customer2 = getCustomerSample2();
        assertThat(customer1).isNotEqualTo(customer2);
    }

    @Test
    void orderTest() throws Exception {
        Customer customer = getCustomerRandomSampleGenerator();
        ProductOrder productOrderBack = getProductOrderRandomSampleGenerator();

        customer.addOrder(productOrderBack);
        assertThat(customer.getOrders()).containsOnly(productOrderBack);
        assertThat(productOrderBack.getCustomer()).isEqualTo(customer);

        customer.removeOrder(productOrderBack);
        assertThat(customer.getOrders()).doesNotContain(productOrderBack);
        assertThat(productOrderBack.getCustomer()).isNull();

        customer.orders(new HashSet<>(Set.of(productOrderBack)));
        assertThat(customer.getOrders()).containsOnly(productOrderBack);
        assertThat(productOrderBack.getCustomer()).isEqualTo(customer);

        customer.setOrders(new HashSet<>());
        assertThat(customer.getOrders()).doesNotContain(productOrderBack);
        assertThat(productOrderBack.getCustomer()).isNull();
    }
}
