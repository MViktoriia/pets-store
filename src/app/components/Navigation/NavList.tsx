import Image from 'next/image';
import Vector from '../../../../public/icons/Vector.svg';
import { useState, useEffect } from 'react';
import Link from 'next/link';
interface Subcategory {
  id: string;
  name: string;
  slug: string;
}
interface ElementObject {
  id: string;
  name: string;
  subcategories?: Subcategory[];
}
type Props = {
  categorySlug: string;
  name: string;
  elementObj: ElementObject;
  key2: number;
};

function NavList({ categorySlug, name, elementObj, key2 }: Props) {
  // console.log(elementObj.subcategories[0].name)
  const [isOpen, setIsOpen] = useState(true);
  useEffect(() => {
    setIsOpen(key2 !== 0);
  }, [key2]);
  const toggleBlock = () => {
    setIsOpen(!isOpen);
  };
  const block = `md:block ${isOpen ? 'hidden' : 'visible'}`;
  return (
    <>
      <div className="block">
        <p
          className="md:text-lg mdLiNav font-bold mt-[20px] md:mt-0"
          onClick={toggleBlock}
        >
          {name}{' '}
          <Image className="inline md:hidden" src={Vector} alt="vector"></Image>
        </p>
        <div className={block}>
          <ul className="text-base font-medium">
            {elementObj &&
              elementObj.subcategories &&
              elementObj.subcategories.map((element, index) => (
                <li key={index} className="py-2 leading-5 mdLiNav">
                  <Link href={`/${categorySlug}/${element.slug}`}>
                    {element.name}
                  </Link>
                </li>
              ))}
            {/* <li className='py-2 leading-5'><a>Сухий корм</a></li>
        <li className='py-2 leading-5'><a>Вологий корм</a></li>
        <li className='py-2 leading-5'><a>Лікувальний корм</a></li>
        <li className='py-2 leading-5'><a>Ласощі</a></li> */}
          </ul>
        </div>
      </div>
    </>
  );
}
export default NavList;
