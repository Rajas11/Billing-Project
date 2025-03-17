package com.example.billing.entity;

import java.math.BigDecimal;

import jakarta.persistence.*;
import lombok.*;


@Entity
@Table(name = "invoice_items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class InvoiceItem {
	
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "invoice_id", nullable = false)
	    private Invoice invoice;

	    @ManyToOne
	    @JoinColumn(name = "product_id", nullable = false)
	    private Product product;

	    @Column(nullable = false)
	    private Integer quantity;

	    @Column(nullable = false)
	    private BigDecimal price;


}
