package com.codelamps.domain;

import jakarta.persistence.*;

/**
 * Created by IntelliJ IDEA.
 * Made with love ❤️❤️❤️
 * User: Andre Rizaldi Brillianto
 * Email: andrerizaldib@gmail.com
 * Date: 18/11/23
 * Time: 10.32
 * description: jhipster-app
 */

@Entity
@Table(name = "product")
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String nama_produk;

    private String quantity;
}
