import Hero from './components/Hero/hero';
import Delivery from './components/Delivery/delivery';
import OurAdvantages from './components/our-advantages';
import Promo from './components/promo';
import Proposals from './components/proposals';
import Brands from './components/brands';
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
