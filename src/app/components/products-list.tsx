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
        wrapperClass="items-center"
        className="max-w-[286px] md:max-w-[604px] lg:max-w-[922px] xl:max-w-[1240px]"
        pagination={{
          type: 'bullets',
          clickable: true,
          el: '#containerForBullets',
          // bulletClass:
          //   'inline-block w-3 h-3 mr-3 last:mr-0 rounded-full border border-yellow',
          // bulletActiveClass: 'bg-yellow',
          dynamicBullets: true,
          dynamicMainBullets: 1,
        }}
        navigation={{
          nextEl: '#nextBtnProducts',
          prevEl: '#prevBtnProducts',
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
        {products.map((product, index) => (
          <SwiperSlide tag="li" className="" key={product.id}>
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
              isNew={index < 5}
            ></ProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" relative flex justify-end items-center mt-8 [&>.swiper-pagination-bullets.swiper-pagination-horizontal]:bottom-0 md:[&>.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic]:translate-x-0">
        <div id="prevBtnProducts" className=" hidden md:block">
          <ProductsListNavBtn>
            <ArrowPrevIcon className="fill-cyan" />
          </ProductsListNavBtn>
        </div>
        <div
          id="containerForBullets"
          className="absolute md:static [&>.swiper-pagination-bullet]:w-3 [&>.swiper-pagination-bullet]:h-3 [&>.swiper-pagination-bullet]:border [&>.swiper-pagination-bullet]:border-orange [&>.swiper-pagination-bullet]:bg-transparent [&>.swiper-pagination-bullet]:opacity-100 [&>.swiper-pagination-bullet.swiper-pagination-bullet-active-main]:bg-orange [&>.swiper-pagination-bullets-dynamic.swiper-pagination-bullet-active-prev]:scale-100   "
        ></div>
        <div id="nextBtnProducts" className=" hidden md:block">
          <ProductsListNavBtn>
            <ArrowNextIcon className="fill-cyan" />
          </ProductsListNavBtn>
        </div>
      </div>
    </>
  );
  // absolute text-center transition-opacity z-10 left-1/2 translate-x-[-50%] whitespace-nowrap overflow-hidden md:left-[-50%]
}

export default ProductsList;
