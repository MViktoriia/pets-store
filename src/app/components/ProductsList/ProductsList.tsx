import { Product } from '@/lib/types';
import React from 'react';
import ProductCard from '../ProductCard/product-card';
type ProductsListProps = {
  products: Product[];
};

function ProductsList({ products }: ProductsListProps) {
  return (
    <ul className=" grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {products.map((product, index) => (
        <li key={product.id}>
          <ProductCard
            id={product.id}
            slug={product.slug}
            name={product.name}
            productCode={product.productCode}
            price={product.price}
            priceDiscount={product.priceDiscount}
            categories={product.categories}
            discountPercentage={product.discountPercentage}
            typesProduct={product.typesProduct}
            image={product.image}
            rating={product.rating}
            descriptionShort={product.descriptionShort}
            isNew={index < 10}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
