package com.vocal.entity;
import jakarta.persistence.*; import lombok.*; import java.math.BigDecimal; import java.time.Instant;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="coupons")
public class Coupon extends BaseEntity { @Column(nullable=false, unique=true) private String code; @Column(nullable=false) private String type; @Column(nullable=false, precision=12, scale=2) private BigDecimal value; private BigDecimal minimumOrderValue; private Instant expiresAt; private boolean active; }
