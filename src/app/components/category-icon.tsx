import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { BirdIcon, CatIcon, DogIcon, FishIcon } from './icons';
import clsx from 'clsx';

export enum Category {
  Dog = 'dog',
  Cat = 'cat',
  Bird = 'bird',
  Fish = 'fish',
}

export interface CategoryIconProps {
  category: Category;
  active?: boolean;
  disabled?: boolean;
}

function CategoryIcon({
  category,
  active,
  disabled,
  ...rest
}: CategoryIconProps &
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  switch (category) {
    case 'dog':
      return (
        <div {...rest}>
          <DogIcon
            className={clsx(
              'w-[19.72px] h-[19.34px] xl:w-[52px] xl:h-[51px] fill-white hover:fill-yellow',
              active && ' fill-orange',
              disabled && 'cursor-not-allowed',
            )}
          />
        </div>
      );
    case 'cat':
      return (
        <div {...rest}>
          <CatIcon
            className={clsx(
              'w-[22px] h-[21.63px] xl:w-[51px] xl:h-[51px] fill-white hover:fill-yellow',
              active && ' fill-orange',
              disabled && 'cursor-not-allowed',
            )}
          />
        </div>
      );
    case 'bird':
      return (
        <div {...rest}>
          <BirdIcon
            className={clsx(
              'w-[12px] h-[22px] xl:w-[26px] xl:h-[51px] fill-white hover:fill-yellow',
              active && ' fill-orange',
              disabled && 'cursor-not-allowed',
            )}
          />
        </div>
      );
    case 'fish':
      return (
        <div {...rest}>
          <FishIcon
            className={clsx(
              'w-[19px] h-[22px] xl:w-[44px] xl:h-[51px] fill-white hover:fill-yellow',
              active && ' fill-orange',
              disabled && 'cursor-not-allowed',
            )}
          />
        </div>
      );
    default:
      return <svg></svg>;
  }
}

export default CategoryIcon;
