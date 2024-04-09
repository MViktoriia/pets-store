import Image from 'next/image';
import Vector from  '../../../../public/icons/Vector.svg';

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
    return(
        <>
        <div className="block">
    <p className='text-lg pb-4 font-bold'>{name} <Image className='inline md:hidden' src={Vector} alt="vector"></Image></p>
    <ul className='text-base font-medium'>
{elementObj && elementObj.subcategories && elementObj.subcategories.map((element,index)=>(
     <li className='py-2 leading-5'><a>{element.name}</a></li>
))}
        {/* <li className='py-2 leading-5'><a>Сухий корм</a></li>
        <li className='py-2 leading-5'><a>Вологий корм</a></li>
        <li className='py-2 leading-5'><a>Лікувальний корм</a></li>
        <li className='py-2 leading-5'><a>Ласощі</a></li> */}
    </ul>
   </div>
        </>
    )
}
export default NavList;