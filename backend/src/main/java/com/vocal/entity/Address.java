package com.vocal.entity;
import jakarta.persistence.*; import lombok.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="addresses")
public class Address extends BaseEntity { @ManyToOne(fetch=FetchType.LAZY) private User user; private String fullName; private String phone; private String line1; private String line2; private String city; private String state; private String postalCode; private String country; private boolean defaultAddress; }
