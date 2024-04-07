import React from 'react';
import DeliveryItem from './delivery-item';
import { deliverySectionText } from '../../../lib/utils/constants/deliveryItems';
import SectionHeading from '../section-heading';
import DeliveryItemIcon from './delivery-item-icon';

function Delivery() {
  return (
    <section className="pt-6 xl:pt-[60px]">
      <div className="container">
        <SectionHeading className=" text-center mb-6 lg:mb-[57px]">
          Доставка
        </SectionHeading>

        <div className="flex justify-start items-start gap-[18px] md:gap-[30px] md:flex-col md:items-center">
          <ul className=" flex flex-col justify-center items-center md:flex-row md:items-center md:w-[86vw] xl:w-[1240px]">
            {deliverySectionText.map((item) => (
              <DeliveryItemIcon
                key={item.text}
                check={item.last}
                decorated={item.decorated}
              />
            ))}
          </ul>

          <ul className=" flex flex-col justify-center items-center md:flex-row md:items-center md:w-[86vw] xl:w-[1240px]">
            {deliverySectionText.map((item) => (
              <DeliveryItem key={item.text} text={item.text} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Delivery;
