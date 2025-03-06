package com.brainsecret.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.brainsecret.entity.CommunityPost;
import com.brainsecret.service.CommunityService;

@RestController
@RequestMapping("/api/community")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend requests
public class CommunityController {

    @Autowired
    private CommunityService communityService;

    @PostMapping("/create")
    public CommunityPost createPost(@RequestBody CommunityPost post) {
        return communityService.createPost(post.getUsername(), post.getTitle(), post.getContent());
    }

    @GetMapping("/posts")
    public List<CommunityPost> getAllPosts() {
        return communityService.getAllPosts();
    }
}
