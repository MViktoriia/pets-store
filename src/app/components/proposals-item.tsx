import clsx from 'clsx';
import { MouseEventHandler } from 'react';

export interface ProposalsItemProps {
  current?: boolean;
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

export default function ProposalsItem({
  onClick,
  current,
  children,
}: ProposalsItemProps) {
  return (
    <button
      className={clsx(
        current && `underline underline-offset-1 text-orange font-bold`,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
