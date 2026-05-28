package com.vocal.entity;
import com.vocal.enums.PaymentStatus; import jakarta.persistence.*; import lombok.*; import java.math.BigDecimal;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="payments")
public class Payment extends BaseEntity { @OneToOne(fetch=FetchType.LAZY) private Order order; private String provider; private String providerOrderId; private String providerPaymentId; @Enumerated(EnumType.STRING) private PaymentStatus status; @Column(nullable=false, precision=12, scale=2) private BigDecimal amount; private String currency; }
