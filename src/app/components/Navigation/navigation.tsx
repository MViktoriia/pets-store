import CategoryIcon from '../category-icon';
import { Category } from '../../components/category-icon'
import { BirdIcon, CatIcon, DogIcon, FishIcon } from '../icons';
import styles from './Navigation.module.css'; 
import NavigationDropDown from './NavigationDropDown';


function Navigation(){
  const ulClasses = ` flex fontFamily-sans md:h-20 min-h-12 items-center ${styles.navText} ${styles.ulScroll} bg-cyan-light md:rounded-xl overflow-x-auto`;
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`
   return(
       <>
       <section className="bg-cyan">
       <nav className={navClasses}>
     <ul  className={ulClasses}>
       <li className="md:flex-1 text-center mx-2 px-3 shrink-0">
      <a href="#"><CategoryIcon category={Category.Dog}  /> <span>Собаки</span></a> 
         {/* <DogIcon className="inline" /> */}
 </li>
       <li className="md:flex-1 text-center px-3  mx-2 shrink-0">
       <CategoryIcon category={Category.Cat}  /> <span>Коти</span> </li>
       <li className="md:flex-1 text-center px-3  mx-2 shrink-0"> 
       {/* <BirdIcon className="inline"/> Птахи */}
       <CategoryIcon category={Category.Bird}  /> <span>Птахи</span>
       </li>
       <li className="md:flex-1 text-center px-3  mx-2 shrink-0">
        {/* <FishIcon  className="inline"/> Риби */}
        <CategoryIcon category={Category.Fish}  /> <span>Риби</span>
        </li>
     </ul>
   
     <NavigationDropDown />

     
       </nav>
     
       </section>

        </>
    )
}
export default Navigation;