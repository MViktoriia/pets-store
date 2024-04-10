'use client'
import { MouseEvent, useState } from 'react';
import fetchCategories from '@/services/api/categories';
import CategoryIcon from '../category-icon';
import { Category } from '../../components/category-icon'
import { BirdIcon, CatIcon, DogIcon, FishIcon } from '../icons';
import styles from './Navigation.module.css'; 
import NavigationDropDown from './NavigationDropDown';
import { categories } from '../../../lib/utils/constants/categories';


function Navigation(){
  const ulClasses = ` flex fontFamily-sans md:h-20 min-h-12 items-center ${styles.navText} ${styles.ulScroll} bg-cyan-light md:rounded-xl overflow-x-auto`;
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [nameCategory, setNameCategory] = useState('')
  const [clicked, setClicked] = useState<string>('');
  const [nameKey, setNewNameKey] = useState<string>('');
  function HandleOnclick(event: any, key:string) {
    event.isDefaultPrevented();
    const spanValue = event.currentTarget.innerText;
    if(nameKey !== key){
      console.log(key)
     // fetchCategories();
     //console.log(categories[0].results[0].name)
      setDropDownMenu(true)
      setClicked(key)
    }else{
      setDropDownMenu(false)
      setClicked('')
    }
   // dropDownMenu ? setClicked('') : setClicked(key);
   console.log(spanValue)
    setNameCategory(spanValue);
    setNewNameKey(key);
  }
  const handleNameChange = (newName: string, key: string) => {
    setNameCategory(newName);
    setNewNameKey(key)
    setClicked(key)
   
  };
  return(
       <>
       <section className="bg-cyan">
       <nav className={navClasses}>
     <ul  className={ulClasses}>
     
      <li
          key='dog'
          className={`md:flex-1 text-center px-3 mx-2 shrink-0 h-full md:grid items-center	 ${clicked === 'dog' ? 'bg-cyan rounded-md' : ''}`}
         
          >
          <a href="#" onClick={(e) => HandleOnclick(e,'dog')}>
            <CategoryIcon category={Category.Dog}  /><span>Собаки</span>
            </a>
        </li>

    
 <li key='cat' className={`md:flex-1 text-center px-3 mx-2 shrink-0 h-full md:grid items-center	 ${clicked === 'cat' ? 'bg-cyan rounded-md' : ''}`} >
            <a href="#" className='inline-block w-full' onClick={(e) => HandleOnclick(e,'cat')}>
                <CategoryIcon category={Category.Cat} />
                <span className="">Коти</span> 
            </a>
        </li>
       <li className={`md:flex-1 text-center px-3  mx-2 shrink-0 h-full md:grid items-center  ${clicked === 'bird' ? 'bg-cyan rounded-md' : ''}`}> 
       {/* <BirdIcon className="inline"/> Птахи */}
    <a href="#" className='inline-block w-full' onClick={(e) => HandleOnclick(e,'bird')}>
    <CategoryIcon category={Category.Bird}  /><span>Птахи</span>
      </a>   
       </li>
       <li className={`md:flex-1 text-center px-3  mx-2 shrink-0 h-full md:grid items-center  ${clicked === 'fish' ? 'bg-cyan rounded-md' : ''}`}>
        {/* <FishIcon  className="inline"/> Риби */}
        <a href="#" className='inline-block w-full' onClick={(e) => HandleOnclick(e,'fish')}>  <CategoryIcon category={Category.Fish}  /><span>Риби</span>
        </a>
        </li>
     </ul>
     {dropDownMenu && categories[0].results
  .filter(element => element.name === nameCategory)
  .map((element, index) => (
    <NavigationDropDown key={index} name={nameCategory} img={nameKey} onNameChange={handleNameChange} elementObj={element} />
  ))}
    {/* {dropDownMenu && <NavigationDropDown name={nameCategory} img={nameKey}  onNameChange={handleNameChange} />} */}

     
       </nav>
     
       </section>

        </>
    )
}
export default Navigation;