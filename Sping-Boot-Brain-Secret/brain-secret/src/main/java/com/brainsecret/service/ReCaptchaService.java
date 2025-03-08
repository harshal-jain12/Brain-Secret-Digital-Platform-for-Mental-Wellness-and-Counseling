package com.brainsecret.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Map;

@Service
public class ReCaptchaService {

    private static final String SECRET_KEY = "6Ld0nu0qAAAAAEjRzCOUwl4CkQNtk4V6L3i3M73a"; // Replace with your secret key
    private static final String VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

    public boolean validateCaptcha(String token) {
        RestTemplate restTemplate = new RestTemplate();
        String url = VERIFY_URL + "?secret=" + SECRET_KEY + "&response=" + token;
        
        Map<String, Object> response = restTemplate.postForObject(url, null, Map.class);

        return response != null && (boolean) response.get("success");
    }
}
