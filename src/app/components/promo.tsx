import Image from 'next/image';
import React from 'react';
import dog from '../../../public/images/dog-discount-2x.png';
import ButtonLink from './button-link';

function Promo() {
  return (
    <section className=" pt-6">
      <div className=" container">
        <div className=" relative xl:px-[98px] before:absolute before:w-[37px] before:h-[45px] before:border-l-2 before:border-t-2 before:border-l-yellow before:border-t-yellow xl:before:w-[51px] xl:before:h-[73px] after:absolute after:w-[37px] after:h-[45px] after:border-l-2 after:border-b-2 after:border-l-yellow after:border-b-yellow after:bottom-0 xl:after:w-[51px] xl:after:h-[73px]">
          <div className=" flex justify-between items-center gap-3 pt-5 pb-[17px] pl-[9px] pr-[15px] lg:pt-[55px] lg:px-[60px] before:absolute before:w-[37px] before:h-[45px] before:border-r-2 before:border-t-2 before:border-r-yellow before:border-t-yellow before:top-0 before:right-0 xl:before:right-[98px] xl:before:w-[51px] xl:before:h-[73px] after:absolute after:w-[37px] after:h-[45px] after:border-r-2 after:border-b-2 after:border-r-yellow after:border-b-yellow after:right-0 after:bottom-0 xl:after:w-[51px] xl:after:h-[73px] xl:after:right-[98px]">
            <div className=" relative flex-auto min-w-[119px] h-auto xl:max-w-[261px] after:content-['-10%'] after:w-[62px] after:absolute after:text-[26px] after:font-bold after:font-crimson after:text-orange after:top-[55%] after:left-[23%] after:text-center md:after:text-[3.3em] md:after:w-[119px] xl:after:w-[136px] xl:after:text-[64px]">
              <Image
                width={261}
                height={261}
                src={dog}
                alt="a small dog with a sheet of paper in its paws"
              />
            </div>
            <div className="flex flex-col items-center xl:max-w-[540px]">
              <h2 className="flex-auto  font-sans text-[18px] text-left font-normal mb-6 xl:text-[36px] xl:font-serif xl:mb-10">
                Зареєструйся та отримай знижку на перше замовлення!
              </h2>
              <ButtonLink
                href="/programa-loyalnosti"
                className="px-[44px] py-[7px] xl:px-[64px] xl:py-[10px] border-yellow hover:border-orange hover:text-white hover:bg-yellow active:border-cyan-light xl:"
              >
                Стати своїм
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promo;
