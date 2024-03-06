import React from 'react';
import DeliveryItem from './delivery-item';
import { deliverySectionText } from '../../lib/utils/constants/deliveryItems';

function Delivery() {
  return (
    <section className="pt-6 xl:pt-[60px]">
      <div className="container">
        <h2 className=" font-serif text-[24px] text-center font-normal mb-6 lg:text-[36px] lg:mb-[57px]">
          Доставка
        </h2>

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
