package com.codelamps.domain;

import static com.codelamps.domain.ProductCategoryTestSamples.*;
import static com.codelamps.domain.ProductTestSamples.*;
import static org.assertj.core.api.Assertions.assertThat;

import com.codelamps.web.rest.TestUtil;
import org.junit.jupiter.api.Test;

class ProductTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Product.class);
        Product product1 = getProductSample1();
        Product product2 = new Product();
        assertThat(product1).isNotEqualTo(product2);

        product2.setId(product1.getId());
        assertThat(product1).isEqualTo(product2);

        product2 = getProductSample2();
        assertThat(product1).isNotEqualTo(product2);
    }

    @Test
    void productCategoryTest() throws Exception {
        Product product = getProductRandomSampleGenerator();
        ProductCategory productCategoryBack = getProductCategoryRandomSampleGenerator();

        product.setProductCategory(productCategoryBack);
        assertThat(product.getProductCategory()).isEqualTo(productCategoryBack);

        product.productCategory(null);
        assertThat(product.getProductCategory()).isNull();
    }
}
