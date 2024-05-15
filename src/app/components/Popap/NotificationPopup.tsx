import Image from 'next/image';
import React from 'react';
import dog from '../../../../public/images/dog-discount-2x.png';
import Socials from '../Socials/socials';

function NotificationPopup() {
  return (
    <div className="px-10 py-10">
      <div className="flex items-center justify-center gap-[124px]">
        <div className=" relative flex-auto min-w-[135px] h-auto xl:max-w-[261px] after:content-['-10%'] after:w-[62px] after:absolute after:text-[26px] after:font-bold after:font-crimson after:text-orange after:top-[55%] after:left-[23%] after:text-center md:after:text-[3.3em] md:after:w-[119px] xl:after:w-[136px] xl:after:text-[64px]">
          <Image
            width={261}
            height={261}
            src={dog}
            alt="a small dog with a sheet of paper in its paws"
          />
        </div>
        <div className="flex flex-col items-center ">
          <p className=" font-serif text-xl text-orange font-bold mb-10 text-center">
            Отримай знижку 10%
          </p>
          <p className=" w-[540px] font-sans text-lg font-normal mb-10 text-center">
            Зареєструйтесь зараз та отримайте знижку на перше замовлення
          </p>

          <button className=" px-8 py-2 bg-cyan rounded-[20px] text-gray-extraLight mb-12">
            Зареєструватися
          </button>

          <div className=" flex flex-col items-center">
            <p>Підпишіться на ексклюзивні оновлення</p>
            <Socials className="w-[198px] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationPopup;
