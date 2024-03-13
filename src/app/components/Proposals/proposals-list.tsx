'use client';

import { SyntheticEvent, useState } from 'react';
import ProposalsItem from './proposals-item';

export interface ProposalsListProps {
  proposals: string[];
}

function ProposalsList({ proposals }: ProposalsListProps) {
  const [isCurrent, setIsCurrent] = useState(false);
  const handleProposalItemClick = (e: SyntheticEvent) => {
    console.log(e.currentTarget);
  };

  return (
    <ul className="flex justify-start items-center mb-6">
      {proposals.map((proposal, index) => (
        <li
          key={proposal}
          className=" text-base mr-[35px] last:mr-0 text-center hover:text-orange active:text-yellow lg:mr-8 lg:text-[24px] "
        >
          <ProposalsItem
            onClick={handleProposalItemClick}
            current={index === 0 && true}
          >
            {proposal}
          </ProposalsItem>
        </li>
      ))}
    </ul>
  );
}

export default ProposalsList;
