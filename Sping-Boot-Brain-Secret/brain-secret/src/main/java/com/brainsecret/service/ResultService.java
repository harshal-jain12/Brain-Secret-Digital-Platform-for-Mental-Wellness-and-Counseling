package com.brainsecret.service;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainsecret.entity.Result;
import com.brainsecret.repository.ResultRepository;

@Service
public class ResultService {

    @Autowired
    private ResultRepository resultRepository;

    public Result saveResult(String testTitle, Map<Integer, Integer> answers, int totalMarks) {
        // Calculate obtained marks
        int obtainedMarks = answers.values().stream().mapToInt(Integer::intValue).sum();

        // Determine message based on obtained marks
        String message;
        double percentage = ((double) obtainedMarks / totalMarks) * 100;
        if (percentage < 40) {
            message = "You need a counseling session. Please book an appointment.";
        } else if (percentage >= 40 && percentage < 80) {
            message = "Book an appointment for better mental health.";
        } else {
            message = "You are mentally fit. Connect with us to enjoy life.";
        }

        // Create and save the result entity
        Result result = new Result();
        result.setTestTitle(testTitle);
        result.setTotalMarks(totalMarks);
        result.setObtainedMarks(obtainedMarks);
        result.setMessage(message);

        return resultRepository.save(result);
    }
}
