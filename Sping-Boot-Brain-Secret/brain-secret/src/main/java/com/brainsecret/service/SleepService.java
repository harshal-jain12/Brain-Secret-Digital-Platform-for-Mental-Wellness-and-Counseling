package com.brainsecret.service;

import com.brainsecret.entity.SleepResult;
import com.brainsecret.repository.SleepRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SleepService {
    private final SleepRepository sleepRepository;

    public SleepService(SleepRepository sleepRepository) {
        this.sleepRepository = sleepRepository;
    }

    // Create sleep record
    public SleepResult createSleepRecord(SleepResult sleepResult) {
        return sleepRepository.save(sleepResult);
    }

    // Get all sleep records
    public List<SleepResult> getAllSleepRecords() {
        return sleepRepository.findAll();
    }

    // Get sleep record by ID
    public SleepResult getSleepById(int id) {
        return sleepRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Sleep record not found for ID: " + id));
    }

    // Update sleep record
    public SleepResult updateSleepRecord(int id, SleepResult updatedSleepResult) {
        SleepResult existingRecord = getSleepById(id);
        existingRecord.setSleepTime(updatedSleepResult.getSleepTime());
        existingRecord.setWakeTime(updatedSleepResult.getWakeTime());
        existingRecord.setDisturbances(updatedSleepResult.getDisturbances());
        existingRecord.setSleepQuality(updatedSleepResult.getSleepQuality());
        return sleepRepository.save(existingRecord);
    }

    // Delete sleep record
    public void deleteSleepRecord(int id) {
        SleepResult existingRecord = getSleepById(id);
        sleepRepository.delete(existingRecord);
    }
}
