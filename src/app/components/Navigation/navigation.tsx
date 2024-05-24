import styles from './Navigation.module.css'; 
import { getCategories } from '@/services/api/api';
import NavigationUseClient from './navigationCopy';

async function Navigation(){
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`
  // const productsInfo = await getCategories({
  //   next: { revalidate: 4000 },
  // });
  // const categories = productsInfo.results;
  return(
       <>
       <section className="bg-cyan">
       <nav className={navClasses}>
   <NavigationUseClient  />
       </nav>
       </section>
        </>
    )
}
export default Navigation;