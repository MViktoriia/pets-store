
import Navigation from '../Navigation/navigation';
import Header from './header';
import { fetchData } from '@/services/apiN';


async function HeaderSection() {
  const productsInfo = await fetchData();
  const categories = productsInfo;
  console.log(categories)
  return (
    <>
      <Header />
      <Navigation categories={categories} />
    </>
  );
}

export default HeaderSection;
