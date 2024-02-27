import Image from 'next/image';
import notFound from '../../../public/images/no-foto.jpg';
import Link from 'next/link';
import { Hammersmith_One } from 'next/font/google';
import { HeartIcon, HeartWithShadowIcon } from './icons';

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
}: ProductProps) {
  return (
    <Link
      href="/"
      className=" inline-block bg-white rounded-[10px] w-[286px] h-[450px] px-4 pt-4 pb-6 shadow-[0_1px_1px_0_rgba(0,0,0,0.25)]"
    >
      <div className=" w-[254px] h-[240px] mb-4 rounded-[10px] overflow-hidden ">
        <Image
          className=" object-contain"
          src={image ? image : notFound}
          alt={`${name} image`}
        />
      </div>
      <div className=" flex justify-between mb-[30px]">
        <p className="font-semibold">{name}</p>
        <p className="font-medium">{`${price} грн`}</p>
      </div>
      <p className="text-sm font-normal text-[#767676] mb-6">{description}</p>
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
    </Link>
  );
}

export default ProductCard;
