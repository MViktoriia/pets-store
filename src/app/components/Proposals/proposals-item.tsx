import clsx from 'clsx';
import { EventHandler, MouseEventHandler } from 'react';

export interface ProposalsItemProps {
  current?: boolean;
  children: React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
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
