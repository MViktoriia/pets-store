import Hero from './components/Hero/hero';
import Delivery from './components/Delivery/delivery';
import OurAdvantages from './components/Advantages/our-advantages';
import Promo from './components/Promo/promo';
import Proposals from './components/Proposals/proposals';
import Brands from './components/Brands/brands';
import Reviews from './components/Reviews/reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <Proposals />
      <Promo />
      <OurAdvantages />
      <Delivery />
      <Brands />
      <Reviews />
    </main>
  );
}
