import { CheckIcon } from '../icons';

export interface Advantage {
  title: string;
  description: string;
}

export interface AdvantagesListProps {
  advantages: Advantage[];
}

function AdvantagesList({ advantages }: AdvantagesListProps) {
  return (
    <ul className=" lg:grid lg:gap-6 lg:grid-cols-2">
      {advantages.map((advantage) => (
        <li
          key={advantage.title}
          className=" mb-6 md:last:mb-0 lg:mb-0 lg:w-[22vw] xl:w-[310px] "
        >
          <div className="flex justify-start items-center mb-3">
            <CheckIcon className=" fill-yellow mr-3" />
            <h3 className=" text-base font-bold xl:text-lg">
              {advantage.title}
            </h3>
          </div>
          <p className="text-base xl:text-md">{advantage.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default AdvantagesList;
