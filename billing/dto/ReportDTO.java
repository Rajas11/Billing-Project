package com.example.billing.dto;

public class ReportDTO {
    private Double totalSales;
    private Long totalInvoices;

    public ReportDTO(Double totalSales, Long totalInvoices) {
        this.totalSales = totalSales;
        this.totalInvoices = totalInvoices;
    }

    public Double getTotalSales() {
        return totalSales;
    }

    public Long getTotalInvoices() {
        return totalInvoices;
    }
}
