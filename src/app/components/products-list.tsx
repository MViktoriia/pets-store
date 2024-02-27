'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation, Pagination } from 'swiper/modules';
import ProductCard, { ProductProps } from './product-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import ProductsListNavBtn from './products-list-nav-btn';
import { ArrowNextIcon, ArrowPrevIcon } from './icons';

export interface ProductListProps {
  products: ProductProps[];
}

function ProductsList({ products }: ProductListProps) {
  return (
    <>
      <Swiper
        wrapperTag="ul"
        grid={{ rows: 1, fill: 'row' }}
        pagination={{
          renderBullet: function (index, className) {
            return '<span class="' + className + '"> </span>';
          },
          type: 'bullets',
          clickable: true,
          el: '#containerForBullets',
          bulletClass:
            'inline-block w-3 h-3 mr-3 last:mr-0 rounded-full border border-yellow',
          bulletActiveClass: 'bg-yellow',
          dynamicBullets: true,
        }}
        modules={[Navigation, Pagination, Grid]}
        slidesPerView={1}
        spaceBetween={32}
        breakpoints={{
          768: { slidesPerView: 2, grid: { rows: 2, fill: 'row' } },
          1024: {
            navigation: true,
            slidesPerView: 3,
            grid: { rows: 2, fill: 'row' },
          },
          1440: {
            slidesPerView: 4,
            navigation: true,
            grid: { rows: 2, fill: 'row' },
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide
            tag="li"
            className="w-[286px] flex justify-center items-center"
            key={product.id}
          >
            <ProductCard
              id={product.id}
              slug={product.slug}
              name={product.name}
              productCode={product.productCode}
              price={product.price}
              priceDiscount={product.priceDiscount}
              categories={product.categories}
              disciuntPercentage={product.disciuntPercentage}
              typesProduct={product.typesProduct}
              image={product.image}
              rating={product.rating}
              manufacturer={product.manufacturer}
              description={product.description}
              images={product.images}
            ></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end items-center mt-8">
        <ProductsListNavBtn>
          <ArrowPrevIcon className="fill-cyan" />
        </ProductsListNavBtn>
        <div
          id="containerForBullets"
          className=" w-[80px] left-1/2 translate-x-1/2 md:-translate-x-1/2 md:w-[60px] "
        ></div>
        <ProductsListNavBtn>
          <ArrowNextIcon className="fill-cyan" />
        </ProductsListNavBtn>
      </div>
    </>
  );
}

export default ProductsList;
