'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import { brands } from '../lib/utils/constants/brands';

function Brends() {
  return (
    <section className="xl:pt-[60px]">
      <div className=" container">
        <h2 className=" font-serif text-[24px] text-center font-normal mb-6 lg:text-[36px] lg:mb-[57px]">
          Бренди з якими ми працюємо
        </h2>
        <Swiper
          wrapperTag="ul"
          wrapperClass="items-center"
          spaceBetween={35}
          slidesPerView={3}
          autoplay={{
            delay: 2500,
          }}
          loop
          modules={[Autoplay]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 144,
            },
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide
              key={brand.id}
              tag="li"
              className="w-[91px] xl:w-[200px] flex justify-center items-center"
            >
              <Image
                width={200}
                height={200}
                src={brand.logo}
                alt={`${brand.name} logo`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Brends;
