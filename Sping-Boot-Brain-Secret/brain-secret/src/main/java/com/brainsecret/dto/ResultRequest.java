package com.brainsecret.dto;

import java.util.List;

public class ResultRequest {

    private String testTitle;
    private List<Integer> answers;

    // Getters and Setters
    public String getTestTitle() {
        return testTitle;
    }

    public void setTestTitle(String testTitle) {
        this.testTitle = testTitle;
    }

    public List<Integer> getAnswers() {
        return answers;
    }

    public void setAnswers(List<Integer> answers) {
        this.answers = answers;
    }
}
