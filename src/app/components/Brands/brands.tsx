'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import { brands } from '../../../lib/utils/constants/brands';
import SectionHeading from '../section-heading';

function Brends() {
  return (
    <section className="pt-6 xl:pt-[60px]">
      <div className=" container">
        <SectionHeading className=" text-center mb-6 lg:mb-[48px]">
          Бренди з якими ми працюємо
        </SectionHeading>
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
