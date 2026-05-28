package com.vocal.dto;
import jakarta.validation.constraints.*; import java.math.BigDecimal; import java.util.List;
public class CommerceDtos {
  public record AddCartRequest(@NotNull Long variantId, @Min(1) Integer quantity) {}
  public record CartLine(Long id, Long variantId, String productName, String size, String color, Integer quantity, BigDecimal unitPrice, String imageUrl) {}
  public record CheckoutRequest(@NotNull Long addressId, String couponCode, @NotBlank String paymentMethod) {}
  public record OrderResponse(Long id, String orderNumber, String status, BigDecimal subtotal, BigDecimal tax, BigDecimal shipping, BigDecimal total, List<CartLine> items) {}
  public record PaymentIntentResponse(String provider, String checkoutToken, String clientSecret) {}
}
