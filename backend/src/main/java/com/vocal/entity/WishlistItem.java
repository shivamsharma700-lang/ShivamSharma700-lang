package com.vocal.entity;
import jakarta.persistence.*; import lombok.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="wishlist_items", uniqueConstraints=@UniqueConstraint(columnNames={"user_id","product_id"}))
public class WishlistItem extends BaseEntity { @ManyToOne(fetch=FetchType.LAZY) private User user; @ManyToOne(fetch=FetchType.LAZY) private Product product; }
