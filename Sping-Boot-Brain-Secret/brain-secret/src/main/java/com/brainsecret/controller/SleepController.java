package com.brainsecret.controller;

import com.brainsecret.entity.SleepResult;
import com.brainsecret.service.SleepService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sleep")
@CrossOrigin(origins = "http://localhost:3000")
public class SleepController {
    private final SleepService sleepService;

    public SleepController(SleepService sleepService) {
        this.sleepService = sleepService;
    }

    // Create sleep record
    @PostMapping
    public ResponseEntity<SleepResult> createSleepRecord(@Valid @RequestBody SleepResult sleepResult) {
        SleepResult createdRecord = sleepService.createSleepRecord(sleepResult);
        return ResponseEntity.ok(createdRecord);
    }

    // Get all sleep records
    @GetMapping
    public ResponseEntity<List<SleepResult>> getAllSleepRecords() {
        List<SleepResult> records = sleepService.getAllSleepRecords();
        return ResponseEntity.ok(records);
    }

    // Get sleep record by ID
    @GetMapping("/{id}")
    public ResponseEntity<SleepResult> getSleepById(@PathVariable int id) {
        SleepResult record = sleepService.getSleepById(id);
        return ResponseEntity.ok(record);
    }

    // Update sleep record
    @PutMapping("/{id}")
    public ResponseEntity<SleepResult> updateSleepRecord(@PathVariable int id, @Valid @RequestBody SleepResult updatedSleepResult) {
        SleepResult updatedRecord = sleepService.updateSleepRecord(id, updatedSleepResult);
        return ResponseEntity.ok(updatedRecord);
    }

    // Delete sleep record
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSleepRecord(@PathVariable int id) {
        sleepService.deleteSleepRecord(id);
        return ResponseEntity.noContent().build();
    }
}
