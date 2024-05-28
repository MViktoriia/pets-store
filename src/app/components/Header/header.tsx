'use client';
import { CartIcon, CrossIcon, HeartIcon, LogoIcon } from '../icons';
import burger from '../../../../public/icons/Burger.png';
import Image from 'next/image';
import BurgerMenu from '../BurgerMenu/burger-menu';
import { useState } from 'react';
import Backdrop from '../BurgerMenu/backdrop';
function Header() {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const handleOpenCloseBurgerMenuBtn = () => {
    setIsBurgerMenuOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className=" relative md:min-h-56 h-48  bg-cyan">
        <div className="flex flex-col container md:flex-row pt-10 pb-8 md:justify-between justify-center relative">
          <div className="flex items-center">
            <button onClick={handleOpenCloseBurgerMenuBtn}>
              <Image
                src={burger}
                className="md:w-56 w-12 md:hidden"
                alt="Burger Icon"
              />
            </button>
            <div className="flex-1 bg-lightblue grid items-center justify-center mb-4 md:mb-0">
              <LogoIcon className="md:w-56 md:h-24 w-28 h-12" />
              {/* <Image  src={logo} className="md:w-56 w-29" alt="Logo" /> */}
            </div>
          </div>

          <div className="flex-auto md:flex-col md:text-right h-40">
            <div className="grid border-b-2 border-yellow md:h-20 items-center">
              <span className="text-lg font-normal text-white hidden md:grid">
                Увійти
              </span>
            </div>
            <div className="flex justify-end h-20">
              <div className="h-20 w-92 md:w-96 grid items-center">
                <input
                  type="text"
                  placeholder="Пошук"
                  className="p-2 rounded-md border border-gray-ligthMax md:mr-4 w-92"
                />
              </div>
              <div className="h-20 w-22 bg-blue md:grid items-center order-3 md:order-2 absolute md:relative md:top-0 top-11 right-6">
                <CartIcon />
              </div>
              <div className="h-20 w-22 bg-green items-center pr-16  md:grid hidden">
                <HeartIcon className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Backdrop isOpen={isBurgerMenuOpen}>
        <BurgerMenu
          onCloseClick={handleOpenCloseBurgerMenuBtn}
          isOpen={isBurgerMenuOpen}
        />
      </Backdrop>

    </>
  );
}

export default Header;
