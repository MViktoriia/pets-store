import clsx from 'clsx';

export interface DeliveryItemProps {
  text: string;
  check?: boolean;
  decorated?: boolean;
}

function DeliveryItem({ text, check, decorated }: DeliveryItemProps) {
  return (
    <li className=" flex justify-center xl:flex-col xl:items-center ">
      <div
        className={clsx(
          'relative block mb-8 w-[36px] h-[36px] rounded-full xl:w-[50px] xl:h-[50px]',
          check
            ? ' bg-cyan after:content-deliveryCheck after:absolute after:w-[25px] after:h-[25px] after:top-[6px] after:left-[5px] xl:after:w-[33px] xl:after:h-[33px] xl:after:top-[9px] xl:after:left-[8px]'
            : ' bg-yellow border-[10px] xl:border-[13px] border-cyan after:absolute after:bottom-[-42px] after:left-[6px] after:w-1 after:h-8 after:bg-cyan xl:after:w-[267px] xl:after:h-1 xl:after:bottom-[12px] xl:after:left-[37px]',
          decorated &&
            ' xl:before:content-deliveryCar xl:before:absolute xl:before:left-[126px] xl:before:w-[57px] xl:before:h-[57px] xl:before:top-[-42px]',
        )}
      ></div>
      <p className=" text-base ml-[18px] w-[79vw] xl:w-[289px]">{text}</p>
    </li>
  );
}

export default DeliveryItem;
