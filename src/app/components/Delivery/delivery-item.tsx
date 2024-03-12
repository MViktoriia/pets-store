import clsx from 'clsx';

export interface DeliveryItemProps {
  text: string;
}

function DeliveryItem({ text }: DeliveryItemProps) {
  return (
    <li className=" flex justify-center mb-6 md:mb-0 md:flex-col md:items-center md:[23vw] xl:w-[289px] ">
      <p className=" text-base xl:text-md ">{text}</p>
    </li>
  );
}

export default DeliveryItem;
