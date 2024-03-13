import Image from 'next/image';
import notFound from '../../../public/images/notFound.png';
import Link from 'next/link';
import { HeartWithShadowIcon } from './icons';
import clsx from 'clsx';
import Rating from './rating';

export interface Manufacturer {
  id: string;
  trade_brand: string;
  country: string;
  country_brand_registration: string;
}

export interface Image {
  id: string /*need to clarify the type */;
  image: string /*need to clarify the type */;
  product: string /*need to clarify the type */;
}

export interface ProductProps {
  id: string;
  slug: string;
  name: string;
  productCode: string;
  price: string;
  priceDiscount: string;
  categories: string;
  disciuntPercentage: string;
  typesProduct: string /*need to clarify what is it and it type */;
  image: string;
  rating: string;
  manufacturer: Manufacturer;
  description: string;
  images: Image;
}

export interface ProductCardProps extends ProductProps {
  isNew: boolean;
}

function ProductCard({
  id,
  slug,
  name,
  productCode,
  price,
  priceDiscount,
  categories,
  disciuntPercentage,
  typesProduct,
  image,
  rating,
  manufacturer,
  description,
  images,
  isNew,
}: ProductCardProps) {
  return (
    <div className=" inline-block bg-white rounded-[10px] w-[286px] h-[450px] px-4 pt-4 pb-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.25)]">
      <div
        className={clsx(
          ` relative w-[254px] h-[240px] mb-4 rounded-[10px] overflow-hidden `,
          isNew
            ? ` before:content-["Новинка"] before:absolute  before:min-w-[89px] before:px-[10px] before:py-1 before:font-inter before:font-bold before:text-base before:text-white before:bg-cyan-light before:top-[10px] before:left-0 before:rounded-r-[6px]`
            : '',
        )}
      >
        <Link href="/">
          <Image
            className=" object-contain"
            src={image ? image : notFound}
            alt={`${name} image`}
          />
          <Rating rating={rating} />
          {disciuntPercentage !== '' && (
            <span className="absolute min-w-[60px] px-[10px] py-1 text-center font-inter font-bold text-base text-white bg-orange top-[10px] left-0 rounded-r-[6px]">
              {`
            ${disciuntPercentage}%`}
            </span>
          )}
        </Link>
      </div>
      <div className=" flex justify-between mb-[30px]">
        <Link href="/">
          <p className="font-semibold">{name}</p>
        </Link>
        <p className="font-medium">{`${price} грн`}</p>
      </div>
      <Link href="/">
        <p className="text-xs font-normal text-[#767676] mb-6">{description}</p>
      </Link>
      <div className=" flex justify-between items-center">
        <button
          type="button"
          className="border border-solid border-yellow rounded-md text-[18px] px-[60px] py-2 hover:bg-yellow hover:border-orange hover:text-white active:border-cyan-light transition-colors"
        >
          Купити
        </button>
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
