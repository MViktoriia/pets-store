import CategoryIcon, { Category } from './components/category-icon';
import {
  ArrowNextReviewsIcon,
  ArrowPrevIcon,
  ArrowPrevReviewsIcon,
  BirdIcon,
  CartIcon,
  CatIcon,
  DeliveryCar,
  DogIcon,
  FacebookIcon,
  FishIcon,
  InstagramIcon,
  LogoIcon,
  OrdersIcon,
  PawsIcon,
  ProfileIcon,
} from './components/icons';

export default function Home() {
  return (
    <main>
      <h1 className=" text-center font-sans font-normal text-2xl">
        Бренди з якими ми працюємо
      </h1>
      <ArrowNextReviewsIcon />
      <ArrowPrevReviewsIcon />
      <ArrowPrevIcon />
      <BirdIcon />
      <CartIcon />
      <CatIcon />
      <DeliveryCar />
      <DogIcon />
      <FacebookIcon />
      <FishIcon />
      <OrdersIcon />
      <ProfileIcon />
      <InstagramIcon />
      <LogoIcon />
      <PawsIcon />
      <CategoryIcon category={Category.Cat} />
    </main>
  );
}
