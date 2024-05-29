import Image from 'next/image';
import Vector from '../../../../public/icons/Vector.svg';
import { useState, useEffect } from 'react';
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
  key2: number
}


function NavList({ name, elementObj, key2 }: Props) {
  // console.log(elementObj.subcategories[0].name)
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(key2 !== 0);
  }, [key2]);
  const toggleBlock = () => {
    setIsOpen(!isOpen);
  };
  const block = `md:block ${isOpen ? 'hidden' : 'visible'}`
  return (
    <>
      <div className="block">
        <p className='md:text-lg mdLiNav font-bold mt-[20px] md:mt-0' onClick={toggleBlock}>{name} <Image className='inline md:hidden' src={Vector} alt="vector" ></Image></p>
        <div className={block}>
          <ul className='text-base font-medium'>
            {elementObj && elementObj.subcategories && elementObj.subcategories.map((element, index) => (
              <li key={index} className='py-2 leading-5 mdLiNav'><a>{element.name}</a></li>
            ))}
         
          </ul>
        </div>
      </div>
    </>
  )
}
export default NavList;