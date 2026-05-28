package com.vocal.config;
import io.swagger.v3.oas.models.*; import io.swagger.v3.oas.models.info.*; import org.springframework.context.annotation.*;
@Configuration public class OpenApiConfig { @Bean OpenAPI api(){return new OpenAPI().info(new Info().title("Vocal Commerce API").version("v1").description("Premium men's fashion e-commerce REST API with JWT, catalog, cart, checkout, payments and admin modules."));} }
