package com.brainsecret.exception;


public class RazorpayException extends RuntimeException {
    
    private int statusCode;
    
    public RazorpayException(String message) {
        super(message);
    }
    
    public RazorpayException(String message, Throwable cause) {
        super(message, cause);
    }
    
    public RazorpayException(String message, int statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
    
    public RazorpayException(String message, Throwable cause, int statusCode) {
        super(message, cause);
        this.statusCode = statusCode;
    }
    
    public int getStatusCode() {
        return statusCode;
    }
}