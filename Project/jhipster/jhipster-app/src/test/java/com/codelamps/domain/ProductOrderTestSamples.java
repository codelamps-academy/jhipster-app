package com.codelamps.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class ProductOrderTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static ProductOrder getProductOrderSample1() {
        return new ProductOrder().id(1L).code("code1");
    }

    public static ProductOrder getProductOrderSample2() {
        return new ProductOrder().id(2L).code("code2");
    }

    public static ProductOrder getProductOrderRandomSampleGenerator() {
        return new ProductOrder().id(longCount.incrementAndGet()).code(UUID.randomUUID().toString());
    }
}
