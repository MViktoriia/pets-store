import Image from 'next/image';
import Vector from  '../../../../public/icons/Vector.svg';
function NavList (){
    return(
        <>
        <div className="block">
    <p className='text-lg pb-4 font-bold'>Харчування <Image className='inline md:hidden' src={Vector} alt="vector"></Image></p>
    <ul className='text-base font-medium'>
        <li className='py-2 leading-5'><a>Сухий корм</a></li>
        <li className='py-2 leading-5'><a>Вологий корм</a></li>
        <li className='py-2 leading-5'><a>Лікувальний корм</a></li>
        <li className='py-2 leading-5'><a>Ласощі</a></li>
    </ul>
   </div>
        </>
    )
}
export default NavList;