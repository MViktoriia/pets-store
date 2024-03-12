import React from 'react';
import DeliveryItem from './delivery-item';
import { deliverySectionText } from '../../lib/utils/constants/deliveryItems';
import SectionHeading from '../section-heading';

function Delivery() {
  return (
    <section className="pt-6 xl:pt-[60px]">
      <div className="container">
        <SectionHeading className=" text-center mb-6 lg:mb-[57px]">
          Доставка
        </SectionHeading>

        <ul className=" flex flex-col justify-center items-center w-[91vw] xl:flex-row xl:items-center xl:w-[1240px]">
          {deliverySectionText.map((item) => (
            <DeliveryItem
              key={item.text}
              text={item.text}
              check={item.last}
              decorated={item.decorated}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Delivery;
