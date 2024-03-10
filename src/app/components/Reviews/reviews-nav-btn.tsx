import { Children, MouseEventHandler } from 'react';
import ArrowNextReviewsIcon from '../icons/ArrowPrevReviewsIcon';

export interface ReviewsNavBtnProps {
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

function ReviewsNavBtn({ children, onClick }: ReviewsNavBtnProps) {
  return (
    <button
      onClick={onClick}
      className=" w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center [&>svg]:fill-yellow"
    >
      {children}
    </button>
  );
}

export default ReviewsNavBtn;
