package com.brainsecret.service;

import com.brainsecret.entity.ContactUs;
import com.brainsecret.repository.ContactUsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository repository;

    // Save Query
    public ContactUs saveQuery(ContactUs contactUs) {
        return repository.save(contactUs);
    }

    // Get All Queries
    public List<ContactUs> getAllQueries() {
        return repository.findAll();
    }

    // FIX: Return Optional<ContactUs> instead of ContactUs
    public Optional<ContactUs> getQueryById(Long id) {
        return repository.findById(id);  // This returns Optional<ContactUs>
    }

    // Update Query
    public ContactUs updateQuery(Long id, ContactUs updatedQuery) {
        ContactUs existingQuery = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Query not found with id: " + id));

        existingQuery.setName(updatedQuery.getName());
        existingQuery.setEmail(updatedQuery.getEmail());
        existingQuery.setPhone(updatedQuery.getPhone());
        existingQuery.setQuery(updatedQuery.getQuery());

        return repository.save(existingQuery);
    }

    // Delete Query
    public void deleteQuery(Long id) {
        repository.deleteById(id);
    }
}
