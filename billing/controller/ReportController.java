package com.example.billing.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.billing.dto.ReportDTO;
import com.example.billing.service.ReportService;

@RestController
@RequestMapping("/api/reports")
public class ReportController {
    
    @Autowired
    private ReportService reportService;

    @GetMapping
    public ResponseEntity<ReportDTO> getReport() {
        return ResponseEntity.ok(reportService.getReport());
    }
}
