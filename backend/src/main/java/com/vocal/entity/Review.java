package com.vocal.entity;
import jakarta.persistence.*; import lombok.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="reviews", uniqueConstraints=@UniqueConstraint(columnNames={"user_id","product_id"}))
public class Review extends BaseEntity { @ManyToOne(fetch=FetchType.LAZY) private User user; @ManyToOne(fetch=FetchType.LAZY) private Product product; @Column(nullable=false) private Integer rating; @Column(columnDefinition="TEXT") private String comment; private boolean approved; }
