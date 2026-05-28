package com.vocal.exception;
import org.springframework.http.*; import org.springframework.web.bind.MethodArgumentNotValidException; import org.springframework.web.bind.annotation.*; import java.time.Instant; import java.util.*;
@RestControllerAdvice public class GlobalExceptionHandler { record ErrorResponse(Instant timestamp,int status,String message,Map<String,String> errors){}
 @ExceptionHandler(ApiException.class) ResponseEntity<ErrorResponse> api(ApiException ex){ return ResponseEntity.status(ex.status).body(new ErrorResponse(Instant.now(),ex.status.value(),ex.getMessage(),Map.of())); }
 @ExceptionHandler(MethodArgumentNotValidException.class) ResponseEntity<ErrorResponse> validation(MethodArgumentNotValidException ex){ Map<String,String> errors=new LinkedHashMap<>(); ex.getBindingResult().getFieldErrors().forEach(e->errors.put(e.getField(),e.getDefaultMessage())); return ResponseEntity.badRequest().body(new ErrorResponse(Instant.now(),400,"Validation failed",errors)); }
 @ExceptionHandler(Exception.class) ResponseEntity<ErrorResponse> generic(Exception ex){ return ResponseEntity.status(500).body(new ErrorResponse(Instant.now(),500,ex.getMessage(),Map.of())); }}
