package com.vocal.entity;
import jakarta.persistence.*; import lombok.*; import java.util.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="users", indexes={@Index(name="idx_users_email", columnList="email")})
public class User extends BaseEntity { @Column(nullable=false, unique=true) private String email; @Column(nullable=false) private String password; @Column(nullable=false) private String fullName; private String phone; @Builder.Default private boolean enabled=true; @Builder.Default @ManyToMany(fetch=FetchType.EAGER) @JoinTable(name="user_roles", joinColumns=@JoinColumn(name="user_id"), inverseJoinColumns=@JoinColumn(name="role_id")) private Set<Role> roles=new HashSet<>(); }
