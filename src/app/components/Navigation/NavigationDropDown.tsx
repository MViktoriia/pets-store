import styles from './NavigationDropDown.module.css'
import CategoryIcon from '../category-icon';
import { Category } from '../../components/category-icon'
import Image from 'next/image';
import dog from  '../../../../public/images/dog-menu-popup-2x.png';
function NavigationDropDown(){
    const flexContainer = `${styles.flexContainer} bg-cyan-light` ;
    const imageContainder = `${styles.wide}`
   return (
    <>

    <div className={flexContainer}>
  <div className={styles.narrow}>
  <div><CategoryIcon category={Category.Dog} /> </div>
    <div> <CategoryIcon category={Category.Cat}  /></div>
    <div> <CategoryIcon category={Category.Bird}  /></div>
    <div><CategoryIcon category={Category.Fish}  /></div>
  </div>
  <div className={styles.wide}>
    <div className='flex justify-between h-16 items-center w-96 border-b-2 border-yellow'>
<div className=''>
    <h2 className='font-serif text-white text-xl'>Собаки</h2></div>
<div>2</div>
    </div>
    <div className='grid grid-cols-3 gap-5 mt-2 font-sans text-white'>
  <div className="block">
    <p className='text-lg pb-6'>Харчування</p>
    <ul>
        <li><a>Сухий корм</a></li>
        <li><a>Вологий корм</a></li>
        <li><a>Лікувальний корм</a></li>
        <li><a>Ласощі</a></li>
    </ul>
   </div>
  <div className="block">
  <p className='text-lg pb-6'>Харчування</p></div>
  <div className="block">
  <p className='text-lg pb-6'>Харчування</p>
  
  </div>
  <div className="block">
  <p className='text-lg pb-6'>Харчування</p></div>
  <div className="block">
  <p className='text-lg pb-6'>Харчування</p></div>
  <div className="block">
  <p className='text-lg pb-6'>Харчування</p></div>
  </div>
  </div>
 
  <div className={imageContainder}>
  <div className="flex justify-center items-end h-full">
        <Image src={dog}  alt="Описание изображения" width={348} height={300} />
</div>
    
  </div>
</div>

   
    </>
   )
}
export default NavigationDropDown;