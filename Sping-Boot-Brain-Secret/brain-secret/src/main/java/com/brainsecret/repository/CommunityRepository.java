package com.brainsecret.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.brainsecret.entity.CommunityPost;

public interface CommunityRepository extends JpaRepository<CommunityPost, Long> {
}
