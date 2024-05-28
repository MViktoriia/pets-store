import Hero from './components/Hero/hero';
import Delivery from './components/Delivery/delivery';
import OurAdvantages from './components/Advantages/our-advantages';
import Promo from './components/Promo/promo';
import Proposals from './components/Proposals/proposals';
import Brands from './components/Brands/brands';
import Reviews from './components/Reviews/reviews';
import { getAllProducts, getCategories } from '@/services/api/api';
import Navigation from './components/Navigation/navigation';

export default async function Home() {
  const productsInfo = await getAllProducts({
    next: { revalidate: 60 },
  });
  const products = productsInfo.results;
  const productsInfo1 = await getCategories({
    next: { revalidate: 60 },
  });
  const categories = productsInfo1.results;
  console.log(categories)
  return (
    <main>
      <Hero />
      <Proposals products={products} />
      <Promo />
      <OurAdvantages />
      <Delivery />
      <Brands />
      <Reviews />
    <Navigation categories={categories} />
    </main>
  );
}
