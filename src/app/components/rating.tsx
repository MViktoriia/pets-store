import clsx from 'clsx';
import { StarIcon } from './icons';

export interface RatingProps {
  rating: string;
}

function Rating({ rating }: RatingProps) {
  return (
    <div className="absolute top-[10px] right-0 w-[116px] h-[18px] flex gap-1">
      <span className="w-[18px] h-[18px]">
        <StarIcon
          className={clsx(Number(rating) >= 0.5 && '[&>path]:fill-yellow')}
        />
      </span>
      <span className="w-[18px] h-[18px]">
        <StarIcon
          className={clsx(Number(rating) >= 1 && '[&>path]:fill-yellow')}
        />
      </span>
      <span className="w-[18px] h-[18px]">
        <StarIcon
          className={clsx(Number(rating) >= 3 && '[&>path]:fill-yellow')}
        />
      </span>
      <span className="w-[18px] h-[18px]">
        <StarIcon
          className={clsx(Number(rating) >= 4 && '[&>path]:fill-yellow')}
        />
      </span>
      <span className="w-[18px] h-[18px]">
        <StarIcon
          className={clsx(Number(rating) == 5 && '[&>path]:fill-yellow')}
        />
      </span>
    </div>
  );
}

export default Rating;
