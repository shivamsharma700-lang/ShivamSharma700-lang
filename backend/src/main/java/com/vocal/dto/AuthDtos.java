package com.vocal.dto;
import jakarta.validation.constraints.*;
public class AuthDtos {
  public record RegisterRequest(@Email @NotBlank String email, @Size(min=8) String password, @NotBlank String fullName, String phone) {}
  public record LoginRequest(@Email @NotBlank String email, @NotBlank String password) {}
  public record TokenResponse(String accessToken, String refreshToken, UserResponse user) {}
  public record UserResponse(Long id, String email, String fullName, String phone) {}
}
