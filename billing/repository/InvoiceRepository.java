package com.example.billing.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import com.example.billing.entity.Invoice;

public interface InvoiceRepository extends JpaRepository<Invoice, Long> {
	
	@Query("SELECT i FROM Invoice i JOIN FETCH i.customer")
	List<Invoice> findAllInvoicesWithCustomers();
	
	   @Query("SELECT SUM(i.totalAmount) FROM Invoice i")
	    Double calculateTotalSales();

	    @Query("SELECT COUNT(i) FROM Invoice i")
	    Long countTotalInvoices();
	    
}
