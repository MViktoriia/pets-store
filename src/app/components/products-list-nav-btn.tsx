import { MouseEventHandler } from 'react';
import { ArrowNextIcon, ArrowPrevIcon } from './icons';

export interface ProductsListNavBtnProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function ProductsListNavBtn({
  children,
  onClick,
  ...rest
}: ProductsListNavBtnProps) {
  return (
    <div className=" hidden md:block">
      <button
        onClick={onClick}
        className=" w-[45px] h-[45px] border rounded border-yellow px-[15px] py-[10px]"
      >
        {children}
      </button>
    </div>
  );
}

export default ProductsListNavBtn;
