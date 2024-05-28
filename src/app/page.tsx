import Hero from './components/Hero/hero';
import Delivery from './components/Delivery/delivery';
import OurAdvantages from './components/Advantages/our-advantages';
import Promo from './components/Promo/promo';
import Proposals from './components/Proposals/proposals';
import Brands from './components/Brands/brands';
import Reviews from './components/Reviews/reviews';
import { getAllProducts } from '@/services/api/api';

export default async function Home() {
  // const productsInfo = await getAllProducts({
  //   next: { revalidate: 60 },
  // });
  // const products = productsInfo.results;

  return (
    <main>
      <Hero />
      {/* <Proposals products={products} /> */}
      <Promo />
      <OurAdvantages />
      <Delivery />
      <Brands />
      <Reviews />
    </main>
  );
}
