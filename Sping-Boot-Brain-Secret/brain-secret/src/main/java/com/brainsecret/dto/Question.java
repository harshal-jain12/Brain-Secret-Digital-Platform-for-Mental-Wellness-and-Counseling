package com.brainsecret.dto;

import java.util.List;

public class Question {

    private String questionText;
    private List<String> options;
    private List<Integer> weights;

    // Constructor
    public Question(String questionText, List<String> options, List<Integer> weights) {
        this.questionText = questionText;
        this.options = options;
        this.weights = weights;
    }

    // Getters and Setters
    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public List<String> getOptions() {
        return options;
    }

    public void setOptions(List<String> options) {
        this.options = options;
    }

    public List<Integer> getWeights() {
        return weights;
    }

    public void setWeights(List<Integer> weights) {
        this.weights = weights;
    }
}
