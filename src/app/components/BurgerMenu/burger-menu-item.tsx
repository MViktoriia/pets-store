import Link from 'next/link';
import { PropsWithChildren, ReactNode } from 'react';

export interface BurgerMenuItemProps {
  title: string;
  value?: number;
  children?: ReactNode;
}

function BurgerMenuItem({ children, title, value }: BurgerMenuItemProps) {
  return (
    <li className="flex justify-between items-center mb-6 last:mb-0 ">
      <Link href="/cart" className="flex items-center">
        {children ? (
          <div className="w-[40px] h-[40px]"> {children} </div>
        ) : (
          <div className="w-[40px]"> </div>
        )}
        <p className="ml-3">{title}</p>
      </Link>
      {value ? (
        <span className="flex items-center justify-center text-white w-[29px] h-[29px] rounded-full bg-cyan-light">
          {value}
        </span>
      ) : null}
    </li>
  );
}

export default BurgerMenuItem;
