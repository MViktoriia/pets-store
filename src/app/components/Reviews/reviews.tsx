'use client';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import cat from '../../../../public/images/cat-reviews-2x.png';
import dog from '../../../../public/images/dog-reviews-2x.png';
import ReviewCard from './review-card';
import { reviews } from '@/lib/utils/constants/reviews';
import ReviewsNavBtn from './reviews-nav-btn';
import { ArrowPrevReviewsIcon } from '../icons';
import { ArrowNextReviewsIcon } from '../icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import clsx from 'clsx';
import SectionHeading from '../section-heading';

function Reviews() {
  const swiper = useSwiper();
  return (
    <section className="pt-6 xl:pt-[84px]">
      <SectionHeading className=" text-center mb-6">Відгуки</SectionHeading>
      <div className=" relative bg-yellow h-[448px] xl:h-[450px] pt-6">
        <div className=" container [&_.swiper-pagination-bullets.swiper-pagination-horizontal]:bottom-[30px] xl:[&_.swiper-pagination-bullets.swiper-pagination-horizontal]:bottom-8 ">
          <div className="flex items-center">
            <div id="prevBtn" className=" hidden mr-6 w-[50px] md:flex ">
              <ReviewsNavBtn>
                <ArrowPrevReviewsIcon />
              </ReviewsNavBtn>
            </div>
            <Swiper
              wrapperTag="ul"
              wrapperClass="items-center"
              spaceBetween={11}
              slidesPerView={1}
              loop
              modules={[Pagination, Navigation]}
              pagination={{
                el: '#reviewsContainerForBullets',
                type: 'bullets',
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 1,
              }}
              navigation={{
                nextEl: '#nextBtn',
                prevEl: '#prevBtn',
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
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
                  className="w-[286px] flex justify-center items-center   "
                  key={review.id}
                >
                  <ReviewCard
                    reviewerName={review.name}
                    reviewText={review.text}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div id="nextBtn" className=" hidden ml-6 w-[50px] md:flex ">
              <ReviewsNavBtn>
                <ArrowNextReviewsIcon />
              </ReviewsNavBtn>
            </div>
          </div>
          <div
            id="reviewsContainerForBullets"
            className="absolute text-center transition-opacity z-10 w-[156px] left-1/2 translate-x-[-50%] whitespace-nowrap overflow-hidden xl:w-[256px]  [&>.swiper-pagination-bullet]:w-4 [&>.swiper-pagination-bullet]:h-4 [&>.swiper-pagination-bullet]:bg-orange [&>.swiper-pagination-bullet]:opacity-100 [&>.swiper-pagination-bullet.swiper-pagination-bullet-active-main]:bg-white "
          ></div>
          <div className="absolute z-10 bottom-0 left-4 xl:left-[72px] w-[67px] xl:w-[146px]">
            <Image src={cat} alt="The striped cat raised a paw" />
          </div>
          <div className=" absolute z-10 bottom-0 right-2 xl:right-[76px] w-[60px] xl:w-[123px]">
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
