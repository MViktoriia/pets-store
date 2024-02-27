import Hero from './components/hero';
import Promo from './components/promo';
import Proposals from './components/proposals';

export default function Home() {
  return (
    <main>
      <Hero />
      <Proposals />
      <Promo />
    </main>
  );
}
