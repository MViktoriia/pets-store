import Hero from './components/hero';
import OurAdvantages from './components/our-advantages';
import Promo from './components/promo';
import Proposals from './components/proposals';

export default function Home() {
  return (
    <main>
      <Hero />
      <Proposals />
      <Promo />
      <OurAdvantages />
    </main>
  );
}
