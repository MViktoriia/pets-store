'use client'
import { MouseEvent, useState, useEffect } from 'react';
import fetchCategories from '@/services/api/categories';
import CategoryIcon from '../category-icon';
import { Category } from '../category-icon'
import { BirdIcon, CatIcon, DogIcon, FishIcon } from '../icons';
import styles from './Navigation.module.css'; 
import NavigationDropDown from './NavigationDropDown';
import { categories } from '../../../lib/utils/constants/categories';
import { getCategories } from '@/services/api/api';
import { fetchData } from '@/services/apiN';
import NavigationCategories from './NavigationCategories';
interface Item {
  id: string,
  name: string,
  slug: string,
  level: number,
  subcategories: []
}
interface ProposalsProps {
  arrCategories: Item[];
}
 function NavigationUseClient(){
  const ulClasses = ` flex fontFamily-sans md:h-20 min-h-12 items-center ${styles.navText} ${styles.ulScroll} bg-cyan-light md:rounded-xl overflow-x-auto`;
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`
 const [categoriesNav, setCategoriesNav] = useState<Item[]>([]);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [nameCategory, setNameCategory] = useState('')
  const [clickedItem, setClickedItem] = useState<string>('');
  const [nameKey, setNewNameKey] = useState<string>('');
 
  const onClickTHings = (booleanN:boolean, key:string, spanValue: string) => {
    setDropDownMenu(booleanN)
    setClickedItem(key)
    setNewNameKey(key)
    setNameCategory(spanValue)
    // setCategoriesNav(arrCategories)
    // console.log(arrCategories)
  }

  // const handleClick = async () => {
  //   try {
  //     const response = await fetchData();
  //     console.log(response)
  //     setCategoriesNav(response)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  // useEffect(() => {handleClick()},[])

  const handleNameChange = (newName: string, key: string) => {
    setNameCategory(newName);
    setNewNameKey(key)
    setClickedItem(key)
  };
  return(
       <>
    
    <NavigationCategories onClickTHings={onClickTHings} nameKey={nameKey} />
     {dropDownMenu && categoriesNav
  .filter(element => element.name === nameCategory)
  .map((element, index) => (
    <NavigationDropDown key={index} name={nameCategory} img={nameKey} onNameChange={handleNameChange} elementObj={element} />
  ))}

        </>
    )
}
export default NavigationUseClient;