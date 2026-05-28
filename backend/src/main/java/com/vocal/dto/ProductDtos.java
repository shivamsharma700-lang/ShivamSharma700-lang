package com.vocal.dto;
import java.math.BigDecimal; import java.util.*;
public class ProductDtos {
  public record CategoryResponse(Long id, String name, String slug, String imageUrl) {}
  public record VariantResponse(Long id, String sku, String size, String color, Integer stock, BigDecimal priceOverride) {}
  public record ProductResponse(Long id, String name, String slug, String description, BigDecimal price, BigDecimal compareAtPrice, List<String> imageUrls, CategoryResponse category, List<VariantResponse> variants, boolean featured, boolean bestSeller) {}
  public record ProductFilter(String q, String category, BigDecimal min, BigDecimal max) {}
}
