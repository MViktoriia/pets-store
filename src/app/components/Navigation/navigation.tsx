import { BirdIcon, CatIcon, DogIcon, FishIcon } from '../icons';
import styles from './Navigation.module.css'; 
function Navigation(){
  const ulClasses = `flex fontFamily-sans md:h-20 items-center ${styles.navText} bg-cyan-light md:rounded-xl overflow-x-auto`;
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`
   return(
       <>
       <nav className={navClasses}>
     <ul className={ulClasses}>
       <li className="md:flex-1 text-center md:mx-4 px-3 shrink-0"> <DogIcon className="inline" />
Собаки </li>
       <li className="md:flex-1 text-center   mx-4 shrink-0"> <CatIcon className="inline" /> Коти</li>
       <li className="md:flex-1 text-center  mx-4 shrink-0"> <BirdIcon className="inline"/> Птахи</li>
       <li className="md:flex-1 text-center  mx-4 shrink-0"><FishIcon  className="inline"/> Риби</li>
     </ul>
       </nav>
        </>
    )
}
export default Navigation;