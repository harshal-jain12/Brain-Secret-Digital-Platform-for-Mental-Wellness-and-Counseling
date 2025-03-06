//package com.brainsecret.controller;
//
//import java.util.Arrays;
//import java.util.List;
//
//import org.aspectj.weaver.patterns.TypePatternQuestions.Question;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.brainsecret.dto.ResultRequest;
//import com.brainsecret.entity.Result;
//import com.brainsecret.service.ResultService;
//
//@RestController
//@RequestMapping("/api")
//public class TestController {
//
//    @Autowired
//    private ResultService resultService;
//
//    @GetMapping("/questions/depression")
//    public List<Question> getDepressionQuestions() {
//        return Arrays.asList(
//            new Question("How often do you feel sad?", Arrays.asList("Never", "Sometimes", "Often", "Always"), Arrays.asList(0, 2, 5, 10)),
//            new Question("Do you have trouble sleeping?", Arrays.asList("No", "Rarely", "Sometimes", "Often"), Arrays.asList(0, 2, 4, 8))
//            // Add more questions here as needed
//        );
//    }
//
//
//    @PostMapping("/results")
//    public Result submitResult(@RequestBody ResultRequest resultRequest) {
//        // Total marks are 30 (sum of the max marks for all questions)
//        int totalMarks = 30;
//        return resultService.saveResult(resultRequest.getTestTitle(), resultRequest.getAnswers(), totalMarks);
//    }
//}
