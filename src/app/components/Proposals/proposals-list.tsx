import { MouseEventHandler } from 'react';
import ProposalsItem from './proposals-item';

export interface ProposalsListProps {
  proposals: string[];
  onClick: MouseEventHandler<HTMLButtonElement>;
  current: string;
}

function ProposalsList({ proposals, onClick, current }: ProposalsListProps) {
  return (
    <ul className="flex justify-start items-center mb-6">
      {proposals.map((proposal, index) => (
        <li
          key={proposal}
          className=" text-base mr-[35px] last:mr-0 text-center hover:text-orange active:text-yellow lg:mr-8 lg:text-[24px] "
        >
          <ProposalsItem onClick={onClick} current={current === proposal}>
            {proposal}
          </ProposalsItem>
        </li>
      ))}
    </ul>
  );
}

export default ProposalsList;
