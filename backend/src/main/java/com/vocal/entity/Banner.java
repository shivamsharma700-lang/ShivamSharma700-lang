package com.vocal.entity;
import jakarta.persistence.*; import lombok.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="banners")
public class Banner extends BaseEntity { private String title; private String eyebrow; private String imageUrl; private String ctaLabel; private String ctaUrl; private Integer sortOrder; private boolean active; }
