
import styles from './Navigation.module.css'; 

import NavigationUseClient from './navigationCopy';
interface Item {
    id: string,
    name: string,
    slug: string,
    level: number,
    subcategories: []
  }
  interface ProposalsProps {
    categories: Item[];
  }
 async function Navigation({categories}:ProposalsProps){
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`

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