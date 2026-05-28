package com.vocal.entity;
import jakarta.persistence.*; import lombok.*; import java.math.BigDecimal;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="product_variants", indexes=@Index(name="idx_variant_sku", columnList="sku"))
public class ProductVariant extends BaseEntity { @Column(nullable=false, unique=true) private String sku; private String size; private String color; @Column(nullable=false) private Integer stock; @Column(precision=12, scale=2) private BigDecimal priceOverride; @ManyToOne(fetch=FetchType.LAZY) @JoinColumn(name="product_id", nullable=false) private Product product; }
