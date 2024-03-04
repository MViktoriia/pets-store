import Image from 'next/image';
import React from 'react';
import partner1 from '../../../public/images/partner-1-logo-2x.png';
import partner2 from '../../../public/images/partner-2-logo-2x.png';
import partner3 from '../../../public/images/partner-3-logo-2x.png';

function Brends() {
  return (
    <section className="xl:pt-[60px]">
      <div className=" container">
        <h2 className=" font-serif text-[24px] text-center font-normal mb-6 lg:text-[36px] lg:mb-[57px]">
          Бренди з якими ми працюємо
        </h2>
        <ul className="flex justify-center items-center">
          <li className=" mr-[35px] last:mr-0 xl:mr-[144px]">
            <div className="w-[24vw] xl:w-[200px]">
              <Image src={partner1} alt="partner logo" />
            </div>
          </li>
          <li className=" mr-[35px] last:mr-0 xl:mr-[144px]">
            <div className="w-[24vw] xl:w-[200px]">
              <Image src={partner2} alt="partner logo" />
            </div>
          </li>
          <li className=" mr-[35px] last:mr-0 xl:mr-[144px]">
            <div className="w-[24vw] xl:w-[200px]">
              <Image src={partner3} alt="partner logo" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Brends;
