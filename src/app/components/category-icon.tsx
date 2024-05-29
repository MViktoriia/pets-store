import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { useState } from 'react';
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

    const [isActive, setIsActive] = useState(false);

   
    const handleClick = () => {
      setIsActive(!isActive);
      console.log(isActive)
    };


  switch (category) {
    case 'dog':
      return (
          <DogIcon
            className={clsx(
              'w-[19.72px] h-[19.34px] md:w-[51px] md:h-[51px] xl:w-[52px] xl:h-[51px] fill-white hover:fill-yellow inline',
              active && ' fill-yellow',
              isActive && ' fill-yellow'
            )}
           onClick={handleClick} />
 
      );
    case 'cat':
      return (
    
          <CatIcon
            className={clsx(
              'w-[22px] h-[21.63px] md:w-[51px] md:h-[51px] xl:w-[51px] xl:h-[51px] fill-white hover:fill-yellow inline',
              active && ' fill-yellow',
              disabled && 'cursor-not-allowed',
            )}
          />

      );
    case 'bird':
      return (
     
          <BirdIcon
            className={clsx(
              'w-[12px] h-[22px] md:w-[51px] md:h-[51px] xl:w-[26px] xl:h-[51px] fill-white hover:fill-yellow inline',
              active && ' fill-yellow',
              disabled && 'cursor-not-allowed',
            )}
          />
      
      );
    case 'fish':
      return (

          <FishIcon
            className={clsx(
              'w-[19px] h-[22px] md:w-[51px] md:h-[51px] xl:w-[44px] xl:h-[51px] fill-white hover:fill-yellow inline',
              active && ' fill-yellow',
              disabled && 'cursor-not-allowed',
            )}
          />
   
      );
    default:
      return <svg></svg>;
  }
}

export default CategoryIcon;
