package com.brainsecret.service;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.brainsecret.entity.CommunityPost;
import com.brainsecret.repository.CommunityRepository;

@Service
public class CommunityService {

    @Autowired
    private CommunityRepository communityRepository;

    public CommunityPost createPost(String username, String title, String content) {
        CommunityPost post = new CommunityPost();
        post.setUsername(username);
        post.setTitle(title);
        post.setContent(content);
        post.setTimestamp(LocalDateTime.now());

        return communityRepository.save(post);
    }

    public List<CommunityPost> getAllPosts() {
        return communityRepository.findAll();
    }
}

