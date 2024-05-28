import styles from './Navigation.module.css'; 
import { getCategories } from '@/services/api/api';
import NavigationUseClient from './navigationCopy';
import {fetchData} from '@/services/apiN'
 async function Navigation(){
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`
  const productsInfo = await fetchData();
  const categories = productsInfo;
  console.log(categories)
  return(
       <>
       <section className="bg-cyan">
       <nav className={navClasses}>
   <NavigationUseClient arrCategories={categories} />
       </nav>
       </section>
        </>
    )
}
export default Navigation;