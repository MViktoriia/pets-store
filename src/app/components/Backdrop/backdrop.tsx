import clsx from 'clsx';
import { type PropsWithChildren } from 'react';

type BackdropProps = PropsWithChildren<{ isOpen: boolean }>;
function Backdrop({ isOpen, children }: BackdropProps) {
  return (
    <div
      className={clsx(
        'absolute top-0 right-0 w-[100vw] h-full z-20 bg-cyan-backdrop transition-opacity ',
        isOpen ? ' opacity-1' : ' opacity-0 pointer-events-none',
      )}
    >
      {children}
    </div>
  );
}

export default Backdrop;
