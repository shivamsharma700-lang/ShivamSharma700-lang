package com.vocal.entity;
import jakarta.persistence.*; import lombok.*; import java.math.BigDecimal;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="order_items")
public class OrderItem extends BaseEntity { @ManyToOne(fetch=FetchType.LAZY) private Order order; @ManyToOne(fetch=FetchType.LAZY) private ProductVariant variant; private String productName; private String sku; private Integer quantity; @Column(nullable=false, precision=12, scale=2) private BigDecimal unitPrice; }
