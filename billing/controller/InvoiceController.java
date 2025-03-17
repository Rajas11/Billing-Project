package com.example.billing.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.billing.entity.Invoice;
import com.example.billing.service.InvoiceService;

@RestController
@RequestMapping("/api/invoices")
@CrossOrigin(origins="http://localhost:3000", allowCredentials = "true")

public class InvoiceController {
	
	
	   @Autowired
	    private InvoiceService invoiceService;

	    @PostMapping
	    public ResponseEntity<Invoice> createInvoice(@RequestBody Invoice invoice) {
	        return ResponseEntity.ok(invoiceService.saveInvoice(invoice));
	    }

	    @GetMapping
	    public ResponseEntity<List<Invoice>> getAllInvoices() {
	        return ResponseEntity.ok(invoiceService.getAllInvoices());
	    }

	    @GetMapping("/{id}")
	    public ResponseEntity<Invoice> getInvoiceById(@PathVariable Long id) {
	        return ResponseEntity.ok(invoiceService.getInvoiceById(id));
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<String> deleteInvoice(@PathVariable Long id) {
	        invoiceService.deleteInvoice(id);
	        return ResponseEntity.ok("Invoice deleted successfully");
	    }

}
