import Image from 'next/image';
import Vector from  '../../../../public/icons/Vector.svg';
import { useState } from 'react';
interface Subcategory {
    id: string;
    name: string;
  }
  interface ElementObject {
    id: string;
    name: string;
    subcategories?: Subcategory[];
  }
type Props = {
    name: string;
    elementObj: ElementObject;
  }

 
function NavList ({name, elementObj}: Props){
   // console.log(elementObj.subcategories[0].name)
   const [isOpen, setIsOpen] = useState(true);

   const toggleBlock = () => {
     setIsOpen(!isOpen); 
   };
   const block = `md:block ${isOpen ? 'hidden' : 'visible'}`
    return(
        <>
        <div className="block">
    <p className='md:text-lg mdLiNav font-bold' onClick={toggleBlock}>{name} <Image className='inline md:hidden' src={Vector} alt="vector" ></Image></p>
  <div className={block}>
  <ul className='text-base font-medium'>
{elementObj && elementObj.subcategories && elementObj.subcategories.map((element,index)=>(
     <li key={index} className='py-2 leading-5 mdLiNav'><a>{element.name}</a></li>
))}
        {/* <li className='py-2 leading-5'><a>Сухий корм</a></li>
        <li className='py-2 leading-5'><a>Вологий корм</a></li>
        <li className='py-2 leading-5'><a>Лікувальний корм</a></li>
        <li className='py-2 leading-5'><a>Ласощі</a></li> */}
    </ul>
    </div> 
   </div>
        </>
    )
}
export default NavList;