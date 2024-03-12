import clsx from 'clsx';

export interface DeliveryItemIconProps {
  check?: boolean;
  decorated?: boolean;
}

function DeliveryItemIcon({ check, decorated }: DeliveryItemIconProps) {
  return (
    <li className=" flex justify-center mb-8 md:mb-0 md:flex-col md:items-center md:w-[23vw] xl:w-[289px] ">
      <div
        className={clsx(
          'relative block  w-[36px] h-[36px] rounded-full md:w-[50px] md:h-[50px]',
          check
            ? ' bg-cyan after:content-deliveryCheck after:absolute after:w-[25px] after:h-[25px] after:top-[6px] after:left-[5px] md:after:w-[33px] md:after:h-[33px] md:after:top-[9px] md:after:left-[8px]'
            : ' bg-yellow border-[10px] md:border-[13px] border-cyan after:absolute after:bottom-[-42px] after:left-[6px] after:w-1 after:h-8 after:bg-cyan md:after:w-[18.5vw] md:after:h-1 xl:after:w-[267px]  md:after:bottom-[12px] md:after:left-[37px]',
          decorated &&
            ' xl:before:content-deliveryCar xl:before:absolute xl:before:left-[126px] xl:before:w-[57px] xl:before:h-[57px] xl:before:top-[-42px]',
        )}
      ></div>
    </li>
  );
}

export default DeliveryItemIcon;
