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
    <ul>
      {advantages.map((advantage) => (
        <li key={advantage.title} className=" mb-6">
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
