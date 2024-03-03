import { CheckIcon } from './icons';

export interface Advantage {
  title: string;
  description: string;
}

export interface AdvantagesListProps {
  advantages: Advantage[];
}

function AdvantagesList({ advantages }: AdvantagesListProps) {
  return (
    <ul className="flex flex-col md:flex-row md:flex-wrap md:max-w-[55vw]">
      {advantages.map((advantage) => (
        <li
          key={advantage.title}
          className=" mb-6  md:odd:mr-[16px] md:w-[24vw] xl:odd:ml-[23px] xl:w-[23vw]"
        >
          <div className="flex justify-start items-center mb-3">
            <CheckIcon className=" fill-yellow mr-3" />
            <h3 className=" text-base font-bold">{advantage.title}</h3>
          </div>
          <p>{advantage.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default AdvantagesList;
