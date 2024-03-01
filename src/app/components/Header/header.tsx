import { CartIcon, HeartIcon, LogoIcon } from "../icons";
import logo from "../../../../public/icons/Logo.png"
import burger from "../../../../public/icons/Burger.png"
import Image from 'next/image'
import Navigation from "../Navigation/navigation";
function Header() {
  return (
    <>
      <header className='md:min-h-56 h-48 container bg-cyan'>
      <div className='flex flex-col md:flex-row pt-10 pb-8 md:justify-between justify-center relative'>
      {/* Контейнер для бургера и логотипа */}
    <div className="flex items-center"> 
      <div> {/* Отступ справа для бургера */}
        <Image  src={burger} className="md:w-56 w-12 md:hidden" alt="Burger Icon" />
      </div>
      <div className="flex-1 bg-lightblue grid items-center justify-center mb-4 md:mb-0">
        <Image  src={logo} className="md:w-56 w-29" alt="Logo" />
      </div>
    </div>
    {/* Остальная часть хедера */}
    <div className="flex-auto md:flex-col md:text-right h-40">
      <div className="grid border-b-2 border-yellow md:h-20 items-center">
        <span className="text-lg font-normal text-white hidden md:grid">Увійти</span>
      </div>
      <div className="flex justify-end h-20">
        <div className="h-20 w-92 md:w-96 grid items-center">
          <input type="text" placeholder="Пошук" className="p-2 rounded-md border border-gray-ligthMax md:mr-4 w-92" />
        </div>
        <div className="h-20 w-22 bg-blue md:grid items-center order-3 md:order-2 absolute md:relative md:top-0 top-11 right-0">
          <CartIcon />
        </div>
        <div className="h-20 w-22 bg-green items-center pr-16  md:grid hidden">
          <HeartIcon className="text-white" />
        </div>
      </div>
    </div>
  </div>
</header>
<Navigation />
    </>

  )
}

export default Header;
