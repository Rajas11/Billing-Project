package com.example.billing.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.billing.dto.ReportDTO;
import com.example.billing.repository.InvoiceRepository;

@Service
public class ReportService {
    
    @Autowired
    private InvoiceRepository invoiceRepository;

    public ReportDTO getReport() {
        Double totalSales = invoiceRepository.calculateTotalSales();
        Long totalInvoices = invoiceRepository.countTotalInvoices();
        return new ReportDTO(totalSales, totalInvoices);
    }
}
