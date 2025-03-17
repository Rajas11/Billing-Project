package com.example.billing.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "invoices")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Invoice {
	
	   @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne(cascade = CascadeType.ALL)
	    @JoinColumn(name = "customer_id", nullable = false)
	    private Customer customer;

	    @Column(nullable = false)
	    private LocalDate date;

	    @Column(nullable = false)
	    private BigDecimal totalAmount;
	    

	    @OneToMany(mappedBy = "invoice", cascade = CascadeType.ALL, orphanRemoval = true)
	    private List<InvoiceItem> invoiceItems;

}
