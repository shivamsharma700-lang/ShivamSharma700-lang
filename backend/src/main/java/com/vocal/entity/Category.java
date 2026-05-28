package com.vocal.entity;
import jakarta.persistence.*; import lombok.*; import java.util.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="categories", indexes=@Index(name="idx_category_slug", columnList="slug"))
public class Category extends BaseEntity { @Column(nullable=false) private String name; @Column(nullable=false, unique=true) private String slug; private String imageUrl; @ManyToOne(fetch=FetchType.LAZY) private Category parent; @Builder.Default private boolean active=true; }
