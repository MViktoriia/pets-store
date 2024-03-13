import { MouseEventHandler } from 'react';

export interface ProductsListNavBtnProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function ProductsListNavBtn({
  children,
  onClick,
}: ProductsListNavBtnProps) {
  return (
    <button
      onClick={onClick}
      className=" w-[45px] h-[45px] border rounded border-yellow px-[15px] py-[10px]"
    >
      {children}
    </button>
  );
}

export default ProductsListNavBtn;
