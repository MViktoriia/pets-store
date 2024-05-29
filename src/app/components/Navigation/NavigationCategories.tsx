'use client'
import { MouseEvent, useState, useEffect } from 'react';
import CategoryIcon from '../category-icon';
import { Category } from '../../components/category-icon'
import { BirdIcon, CatIcon, DogIcon, FishIcon } from '../icons';
import styles from './Navigation.module.css'; 
interface Item {
    nameKey: string,
    onClickTHings: (booleanN: boolean, key: string, spanValue: string) => void;
}
function NavigationCategories({onClickTHings, nameKey }: Item){
    const ulClasses = ` flex fontFamily-sans md:h-20 min-h-12 items-center ${styles.navText} ${styles.ulScroll} bg-cyan-light md:rounded-xl overflow-x-auto`;
    const [clickedItem, setClickedItem] = useState<string>('');
    function HandleOnclick(event: any, key:string) {
        event.isDefaultPrevented();
        const spanValue = event.currentTarget.innerText;
        if(nameKey !== key){
            onClickTHings(true, key, spanValue)
        }else{
            onClickTHings(false, key, spanValue)
        }
      }
   
   return(
<ul  className={ulClasses}>
     
     <li
         key='dog'
         className={`md:flex-1 text-center px-3 mx-2 shrink-0 h-full md:grid items-center	 ${clickedItem === 'dog' ? 'bg-cyan rounded-md' : ''}`}
        
         >
         <a href="#" onClick={(e) => HandleOnclick(e,'dog')}>
           <CategoryIcon category={Category.Dog} active={clickedItem === 'dog'} /><span>Собаки</span>
           </a>
       </li>
     
     
     <li key='cat' className={`md:flex-1 text-center px-3 mx-2 shrink-0 h-full md:grid items-center	 ${clickedItem === 'cat' ? 'bg-cyan rounded-md' : ''}`} >
           <a href="#" className='inline-block w-full' onClick={(e) => HandleOnclick(e,'cat')}>
               <CategoryIcon category={Category.Cat} active={clickedItem === 'cat'} />
               <span className="">Коти</span> 
           </a>
       </li>
      <li className={`md:flex-1 text-center px-3  mx-2 shrink-0 h-full md:grid items-center  ${clickedItem === 'bird' ? 'bg-cyan rounded-md' : ''}`}> 
      {/* <BirdIcon className="inline"/> Птахи */}
     <a href="#" className='inline-block w-full' onClick={(e) => HandleOnclick(e,'bird')}>
     <CategoryIcon category={Category.Bird} active={clickedItem === 'bird'} /><span>Птахи</span>
     </a>   
      </li>
      <li className={`md:flex-1 text-center px-3  mx-2 shrink-0 h-full md:grid items-center  ${clickedItem === 'fish' ? 'bg-cyan rounded-md' : ''}`}>
      
       <a href="#" className='inline-block w-full' onClick={(e) => HandleOnclick(e,'fish')}>  
       <CategoryIcon category={Category.Fish} active={clickedItem === 'fish'} /><span>Риби</span>
       </a>
       </li>
     </ul>
    )
}
export default NavigationCategories;