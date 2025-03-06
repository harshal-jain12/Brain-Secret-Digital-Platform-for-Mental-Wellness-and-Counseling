package com.brainsecret.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainsecret.dto.ApiResponse;
import com.brainsecret.entity.NewsletterEntity;
import com.brainsecret.service.NewsletterService;

@RestController
@RequestMapping("/api/newsletter")
public class NewsletterController {

    @Autowired
    private NewsletterService newsletterService;

    // Create (Subscribe to Newsletter)
    @PostMapping("/subscribe")
    public ApiResponse subscribeNewsletter(@RequestBody NewsletterEntity request) {
        return newsletterService.subscribeNewsletter(request.getEmail());
    }

    // Read (Get All Subscribed Emails)
    @GetMapping("/all")
    public List<NewsletterEntity> getAllSubscribers() {
        return newsletterService.getAllSubscribers();
    }

    // Update (Update an Email)
    @PutMapping("/update/{id}")
    public ApiResponse updateEmail(@PathVariable Long id, @RequestBody NewsletterEntity request) {
        return newsletterService.updateEmail(id, request.getEmail());
    }

    // Delete (Unsubscribe)
    @DeleteMapping("/unsubscribe/{email}")
    public ApiResponse unsubscribeNewsletter(@PathVariable String email) {
        return newsletterService.unsubscribeNewsletter(email);
    }
}
