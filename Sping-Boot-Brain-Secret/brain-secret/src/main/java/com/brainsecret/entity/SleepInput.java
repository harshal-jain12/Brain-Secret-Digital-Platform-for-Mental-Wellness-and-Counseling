package com.brainsecret.entity;

import java.time.LocalTime;

public class SleepInput {
    private LocalTime sleepTime;
    private LocalTime wakeTime;
    private int disturbances;
    private String sleepFeeling;

    // ✅ Constructor
    public SleepInput(LocalTime sleepTime, LocalTime wakeTime, int disturbances, String sleepFeeling) {
        this.sleepTime = sleepTime;
        this.wakeTime = wakeTime;
        this.disturbances = disturbances;
        this.sleepFeeling = sleepFeeling;
    }

    // ✅ Getters
    public LocalTime getSleepTime() {
        return sleepTime;
    }

    public LocalTime getWakeTime() {
        return wakeTime;
    }

    public int getDisturbances() {
        return disturbances;
    }

    public String getSleepFeeling() {
        return sleepFeeling;
    }

    // ✅ Setters
    public void setSleepTime(LocalTime sleepTime) {
        this.sleepTime = sleepTime;
    }

    public void setWakeTime(LocalTime wakeTime) {
        this.wakeTime = wakeTime;
    }

    public void setDisturbances(int disturbances) {
        this.disturbances = disturbances;
    }

    public void setSleepFeeling(String sleepFeeling) {
        this.sleepFeeling = sleepFeeling;
    }

    // ✅ Override toString() for debugging
    @Override
    public String toString() {
        return "SleepInput{" +
                "sleepTime=" + sleepTime +
                ", wakeTime=" + wakeTime +
                ", disturbances=" + disturbances +
                ", sleepFeeling='" + sleepFeeling + '\'' +
                '}';
    }
}
