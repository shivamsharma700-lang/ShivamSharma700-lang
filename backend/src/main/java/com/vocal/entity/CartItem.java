package com.vocal.entity;
import jakarta.persistence.*; import lombok.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="cart_items", uniqueConstraints=@UniqueConstraint(columnNames={"user_id","variant_id"}))
public class CartItem extends BaseEntity { @ManyToOne(fetch=FetchType.LAZY) @JoinColumn(name="user_id") private User user; @ManyToOne(fetch=FetchType.LAZY) @JoinColumn(name="variant_id") private ProductVariant variant; @Column(nullable=false) private Integer quantity; }
