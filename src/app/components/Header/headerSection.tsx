
import Navigation from '../Navigation/navigation';
import Header from './header';
import { fetchData } from '@/services/apiN';


async function HeaderSection() {
  const categoriesInfo = await fetchData();
  const categories = categoriesInfo;
  return (
    <>
      <Header />
      <Navigation categories={categories} />
    </>
  );
}

export default HeaderSection;
