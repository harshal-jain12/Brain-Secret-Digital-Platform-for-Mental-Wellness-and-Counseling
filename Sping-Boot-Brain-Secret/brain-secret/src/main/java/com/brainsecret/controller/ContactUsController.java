package com.brainsecret.controller;

import com.brainsecret.entity.ContactUs;
import com.brainsecret.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/contact")
public class ContactUsController {

    @Autowired
    private ContactUsService service;

    // Create a new query
    @PostMapping
    public ResponseEntity<?> createQuery(@Validated @RequestBody ContactUs contactUs) {
        try {
            ContactUs savedQuery = service.saveQuery(contactUs);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedQuery);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: Failed to submit query. Please try again.");
        }
    }

    // Get all queries
    @GetMapping
    public ResponseEntity<List<ContactUs>> getAllQueries() {
        List<ContactUs> queries = service.getAllQueries();
        if (queries.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(queries);
    }

    // Get a query by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getQueryById(@PathVariable Long id) {
        Optional<ContactUs> query = service.getQueryById(id);
        if (query.isPresent()) {
            return ResponseEntity.ok(query.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Error: Query not found.");
        }
    }

    // Update a query
    @PutMapping("/{id}")
    public ResponseEntity<?> updateQuery(@PathVariable Long id, @Validated @RequestBody ContactUs updatedQuery) {
        try {
            ContactUs updated = service.updateQuery(id, updatedQuery);
            return ResponseEntity.ok(updated);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: Could not update the query.");
        }
    }

    // Delete a query
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteQuery(@PathVariable Long id) {
        try {
            service.deleteQuery(id);
            return ResponseEntity.ok("Query deleted successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: Could not delete the query.");
        }
    }
}
