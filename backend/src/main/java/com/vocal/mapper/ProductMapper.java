package com.vocal.mapper;
import com.vocal.dto.ProductDtos.*; import com.vocal.entity.*; import org.mapstruct.Mapper;
@Mapper(componentModel="spring")
public interface ProductMapper { ProductResponse toResponse(Product product); CategoryResponse toResponse(Category category); VariantResponse toResponse(ProductVariant variant); }
