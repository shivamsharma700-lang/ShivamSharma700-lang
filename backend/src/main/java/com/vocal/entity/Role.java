package com.vocal.entity;
import com.vocal.enums.RoleName; import jakarta.persistence.*; import lombok.*;
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder @Entity @Table(name="roles")
public class Role extends BaseEntity { @Enumerated(EnumType.STRING) @Column(nullable=false, unique=true, length=40) private RoleName name; }
