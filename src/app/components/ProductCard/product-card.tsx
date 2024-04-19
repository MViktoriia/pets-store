import Image from 'next/image';
import notFound from '../../../../public/images/notFound.png';
import Link from 'next/link';
import { HeartWithShadowIcon } from '../icons';
import clsx from 'clsx';
import Rating from '../rating';
import { Product } from '@/lib/types';
import ButtonSecondary from '../button-secondary';
import styles from './ProductCard.module.css';

export interface ProductCardProps extends Product {
  isNew: boolean;
}

function ProductCard({
  id,
  slug,
  name,
  productCode,
  descriptionShort,
  price,
  priceDiscount,
  categories,
  discountPercentage,
  typesProduct,
  image,
  rating,
  isNew,
}: ProductCardProps) {
  const productPageLink = `/${slug}`;
  const handleBuyBtn = () => {
    console.log(`Товар ${name} додано в корзину`);
  };

  return (
    <div className=" inline-block bg-white rounded-[10px] w-[286px] h-[450px] px-4 pt-4 pb-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.25)]">
      <div
        className={clsx(
          ` relative w-[254px] h-[176px] mb-4 rounded-[10px] overflow-hidden `,
          isNew && discountPercentage == ''
            ? ` before:content-["Новинка"] before:absolute  before:min-w-[89px] before:px-[10px] before:py-1 before:font-inter before:font-bold before:text-base before:text-white before:bg-cyan-light before:top-[10px] before:left-0 before:rounded-r-[6px]`
            : '',
        )}
      >
        <Link href={productPageLink}>
          <Image
            className=" object-contain"
            src={image ? image : notFound}
            alt={`${name} image`}
            width={254}
            height={176}
          />
          <Rating rating={rating} className="absolute top-[10px] right-0 " />
          {discountPercentage !== '' && (
            <span className="absolute min-w-[60px] px-[10px] py-1 text-center font-inter font-bold text-base text-white bg-orange top-[10px] left-0 rounded-r-[6px]">
              {`
            ${discountPercentage}%`}
            </span>
          )}
        </Link>
      </div>
      <div className=" flex flex-col gap-3 mb-4">
        <Link href={productPageLink}>
          <p
            title={name}
            className={clsx(styles.truncated_text, ' font-normal text-baseM')}
          >
            {name}
          </p>
        </Link>
        <div className="flex gap-3 font-medium leading-[121%]">
          <p
            className={clsx(
              'text-sm font-medium text-[#ADADAD] line-through mb-[5px]',
              discountPercentage == '' ? ' hidden' : '',
            )}
          >{`${price} грн`}</p>
          {discountPercentage == '' ? (
            <p className=" text-md font-medium">{`${price} грн`}</p>
          ) : (
            <p className="text-md font-medium">{`${priceDiscount} грн`}</p>
          )}
        </div>
      </div>
      <Link href={productPageLink}>
        <p
          title={descriptionShort}
          className="text-xs h-[34px] font-normal text-[#767676] mb-6 overflow-hidden"
        >
          {descriptionShort}
        </p>
      </Link>
      <div className=" flex justify-between items-center">
        <ButtonSecondary
          onClick={handleBuyBtn}
          type="button"
          className="border border-solid border-yellow rounded-md text-[18px] px-[60px] py-2 hover:bg-yellow hover:border-orange hover:text-white active:border-cyan-light transition-colors"
        >
          Купити
        </ButtonSecondary>
        <div className=" flex justify-center items-center w-[41px] h-[41px]">
          <HeartWithShadowIcon
            width={32}
            height={30}
            className=" fill-cyan hover:fill-cyan-light transition-colors"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
