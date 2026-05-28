package com.vocal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class VocalApplication {
  public static void main(String[] args) { SpringApplication.run(VocalApplication.class, args); }
}
