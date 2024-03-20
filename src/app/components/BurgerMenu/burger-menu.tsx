import Image from 'next/image';
import logo from '../../../../public/icons/Logo.png';
import clsx from 'clsx';
import { CartIcon, CrossIcon, HeartIcon } from '../icons';
import BurgerMenuItem from './burger-menu-item';
import Socials from '../Socials/socials';
import Phone from '../Contacts/phone';
import BurgerUserhNav from './burger-user-nav';
import BurgerAuthNav from './burger-auth-nav';

export interface BurgerMenuProps {
  onCloseClick: () => void;
  isOpen: boolean;
}

const burgerMenuItems = [
  {
    title: 'Кошик',
    icon: (
      <CartIcon width={36} hanging={36} className=" [&_path]:stroke-black" />
    ),
    value: 3,
  },
  {
    title: 'Список бажань',
    icon: (
      <HeartIcon width={34} hanging={34} className=" [&_path]:stroke-black" />
    ),
    value: 12,
  },
  { title: 'Персональна інформація' },
  { title: 'Історія замовлень' },
  { title: 'Відгуки' },
];

function BurgerMenu({ onCloseClick, isOpen }: BurgerMenuProps) {
  const isLogIn = false;
  return (
    <div
      className={clsx(
        'text-base font-normal absolute w-[80vw] top-0 left-0 transition-transform',
        isOpen ? 'translate-x-0' : 'translate-x-[-120%]',
      )}
    >
      <div className="py-6 bg-cyan-dark">
        <div className="flex justify-between items-center pl-3 pr-2 mb-[47px]">
          <Image src={logo} alt="pets logo" height={48} width={115} />
          <CrossIcon onClick={onCloseClick} />
        </div>
        {isLogIn ? <BurgerUserhNav /> : <BurgerAuthNav />}
      </div>
      <div className=" bg-[#f9f9f9] px-4 pt-4 pb-8">
        <ul className="pb-6 mb-6 border-b border-b-gray-ligthMax ">
          {burgerMenuItems.map((item) => (
            <BurgerMenuItem
              key={item.title}
              title={item.title}
              value={item.value}
            >
              {item.icon}
            </BurgerMenuItem>
          ))}
        </ul>
        <div className="w-[216px] mb-6">
          <p className="mb-2 ">Ми в соціальних мережах</p>
          <Socials />
        </div>
        <Phone className="[&>p]:text-mdDesc" />
      </div>
    </div>
  );
}

export default BurgerMenu;
