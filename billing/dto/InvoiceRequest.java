package com.example.billing.dto;

import java.time.LocalDate;
import java.util.List;

public class InvoiceRequest {
	private Long id;
    private Long customerId;
    private LocalDate date;
    private Double totalAmount;
    private List<InvoiceItemDTO> items;

    public void InvoiceDTO(Long id, Long customerId, LocalDate date, Double totalAmount, List<InvoiceItemDTO> items) {
        this.id = id;
        this.customerId = customerId;
        this.date = date;
        this.totalAmount = totalAmount;
        this.items = items;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public List<InvoiceItemDTO> getItems() {
        return items;
    }

    public void setItems(List<InvoiceItemDTO> items) {
        this.items = items;
    }
}
