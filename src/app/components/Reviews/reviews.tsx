'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import cat from '../../../../public/images/cat-reviews-2x.png';
import dog from '../../../../public/images/dog-reviews-2x.png';
import ReviewCard from './review-card';
import { reviews } from '@/app/lib/utils/constants/reviews';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { type } from 'os';

function Reviews() {
  return (
    <section className="pt-6 xl:pt-[60px]">
      <h2 className=" font-serif text-[24px] text-center font-normal mb-6 lg:text-[36px] lg:mb-[57px]">
        Відгуки
      </h2>
      <div className=" relative bg-yellow h-[448px] xl:h-[450px] pt-6">
        <div className=" container">
          <Swiper
            wrapperTag="ul"
            wrapperClass="items-center"
            spaceBetween={11}
            slidesPerView={1}
            loop
            modules={[Pagination, Navigation]}
            pagination={{
              el: '#containerForBullets',
              type: 'bullets',
              clickable: true,
              bulletClass:
                'inline-block w-3 h-3 mr-3 last:mr-0 rounded-full border border-yellow',
              bulletActiveClass: 'bg-yellow',
            }}
            breakpoints={{
              1024: {
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 11,
              },
            }}
          >
            {reviews.map((review) => (
              <SwiperSlide
                tag="li"
                className="w-[286px] flex justify-center items-center"
                key={review.id}
              >
                <ReviewCard
                  reviewerName={review.name}
                  reviewText={review.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            id="containerForBullets"
            className=" w-[156px] left-1/2 translate-x-1/2 md:-translate-x-1/2 md:w-[60px]"
          ></div>
          <div className="absolute z-30 bottom-0 left-4 xl:left-[72px] w-[67px] xl:w-[146px]">
            <Image src={cat} alt="The striped cat raised a paw" />
          </div>
          <div className=" absolute z-30 bottom-0 right-2 xl:right-[76px] w-[60px] xl:w-[123px]">
            <Image
              src={dog}
              alt="The white-brown dog has raised its paw and is listening"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
