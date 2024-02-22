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

function CategoryIcon({ category, active, disabled }: CategoryIconProps) {
  switch (category) {
    case 'dog':
      return (
        <button className=" flex justify-center items-center w-20 h-20">
          <DogIcon
            className={clsx(
              ' fill-white hover:fill-orange',
              active && ' fill-yellow',
              disabled &&
                'fill-gray-light cursor-not-allowed hover:fill-gray-light',
            )}
          />
        </button>
      );
    case 'cat':
      return (
        <button className=" flex justify-center items-center w-20 h-20">
          <CatIcon
            className={clsx(
              ' fill-white hover:fill-orange',
              active && ' fill-yellow',
              disabled &&
                'fill-gray-light cursor-not-allowed hover:fill-gray-light',
            )}
          />
        </button>
      );
    case 'bird':
      return (
        <button className=" flex justify-center items-center w-20 h-20">
          <BirdIcon
            className={clsx(
              ' fill-white hover:fill-orange',
              active && ' fill-yellow',
              disabled &&
                'fill-gray-light cursor-not-allowed hover:fill-gray-light',
            )}
          />
        </button>
      );
    case 'fish':
      return (
        <button className=" flex justify-center items-center w-20 h-20">
          <FishIcon
            className={clsx(
              ' fill-white hover:fill-orange',
              active && ' fill-yellow',
              disabled &&
                'fill-gray-light cursor-not-allowed hover:fill-gray-light',
            )}
          />
        </button>
      );
    default:
      return <svg></svg>;
  }
}

export default CategoryIcon;
