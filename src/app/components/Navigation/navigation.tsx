import { MouseEvent, useState, useEffect } from 'react';
import fetchCategories from '@/services/api/categories';
import CategoryIcon from '../category-icon';
import { Category } from '../../components/category-icon'
import { BirdIcon, CatIcon, DogIcon, FishIcon } from '../icons';
import styles from './Navigation.module.css'; 
import NavigationDropDown from './NavigationDropDown';
import { categories } from '../../../lib/utils/constants/categories';
import { getCategories } from '@/services/api/api';
interface Item {
  id: string;
  name: string;
  description: string;
  subcategories: []
}

  function Navigation(){
    
    
  const ulClasses = ` flex fontFamily-sans md:h-20 min-h-12 items-center ${styles.navText} ${styles.ulScroll} bg-cyan-light md:rounded-xl overflow-x-auto`;
  const navClasses = `md:container mx-auto bg-cyan ${styles.scrollableContainer}`
 const [categoriesNav, setCategoriesNav] = useState<Item[]>([]);
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const [nameCategory, setNameCategory] = useState('')
  const [clickedItem, setClickedItem] = useState<string>('');
  const [nameKey, setNewNameKey] = useState<string>('');
  async function fetchProductData() {
    const categoriesInfo = await getCategories({
      next: { revalidate: 60 },
    });
    const categoriesArray = categoriesInfo.results;
    console.log(categoriesArray)
    setCategoriesNav(categoriesArray)
    // Здесь можно использовать переменную products для дальнейшей обработки
  }
  useEffect(() => {
    fetchProductData();
      },[])

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const result = await fetchCategories(); // Assuming fetchCategories returns a Promise<Item[]> or undefined
//         setCategoriesNav(result); // Assuming setCategoriesNav is expecting Item[] | undefined
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchData();
// }, []);
  function HandleOnclick(event: any, key:string) {
    event.isDefaultPrevented();
    const spanValue = event.currentTarget.innerText;
    if(nameKey !== key){
      setDropDownMenu(true)
      setClickedItem(key)
    }else{
      setDropDownMenu(false)
      setClickedItem('')
    }
    setNameCategory(spanValue);
    setNewNameKey(key);
  }
  const handleNameChange = (newName: string, key: string) => {
    setNameCategory(newName);
    setNewNameKey(key)
    setClickedItem(key)
  };
  return(
       <>
       <section className="bg-cyan">
       <nav className={navClasses}>
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
     {dropDownMenu && categoriesNav
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