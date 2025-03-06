package com.brainsecret.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainsecret.dto.ApiResponse;
import com.brainsecret.entity.NewsletterEntity;
import com.brainsecret.repository.NewsletterRepository;

@Service
public class NewsletterService {

    @Autowired
    private NewsletterRepository newsletterRepository;

    // Create (Subscribe)
    public ApiResponse subscribeNewsletter(String email) {
        if (newsletterRepository.findByEmail(email).isPresent()) {
            return new ApiResponse(false, "You are already subscribed to the newsletter.");
        }

        NewsletterEntity newSubscriber = new NewsletterEntity();
        newSubscriber.setEmail(email);
        newsletterRepository.save(newSubscriber);
        return new ApiResponse(true, "You have successfully subscribed to the newsletter.");
    }

    // Read (Get All Subscribers)
    public List<NewsletterEntity> getAllSubscribers() {
        return newsletterRepository.findAll();
    }

    // Update (Change Email)
    public ApiResponse updateEmail(Long id, String newEmail) {
        Optional<NewsletterEntity> existingSubscriber = newsletterRepository.findById(id);
        if (existingSubscriber.isPresent()) {
            NewsletterEntity subscriber = existingSubscriber.get();
            subscriber.setEmail(newEmail);
            newsletterRepository.save(subscriber);
            return new ApiResponse(true, "Email updated successfully.");
        } else {
            return new ApiResponse(false, "Subscriber not found.");
        }
    }

    // Delete (Unsubscribe)
    public ApiResponse unsubscribeNewsletter(String email) {
        Optional<NewsletterEntity> subscriber = newsletterRepository.findByEmail(email);
        if (subscriber.isPresent()) {
            newsletterRepository.delete(subscriber.get());
            return new ApiResponse(true, "You have successfully unsubscribed.");
        } else {
            return new ApiResponse(false, "No subscription found for this email.");
        }
    }
}
