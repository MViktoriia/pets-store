
import styles from "./Footer.module.css"
import Image from "next/image";
import {LogoIcon, Wave, PhoneIcon, FacebookIcon, InstagramIcon} from '../icons';
import CatFooter from '../../../../public/images/cat-footer-2x.png'
import Mastercard from '../../../../public/images/Mastercard.png'
import Visa from '../../../../public/images/Visa.png'
import TelegramIcon from '../icons/TelegramIcon';
function Footer() {
  return <footer className="md:h-97 h-[510px] bg-cyan mt-10 text-white ">
  <div  >
<Wave >

</ Wave>
<div className="container text-center">
  <div className="flex xl:w-[1140px] w-[375px] flex-wrap">
  <div className="flex-auto bg-gray-200 md:mr-36  md:w-44 w-[95px] grid justify-center md:h-48">
    <LogoIcon className=" md:w-40 md:h-16 w-28 h-12 md:pb-4 "/>
    <Image src={CatFooter} alt="ge" className="w-[95px] h-[101px] md:w-[173px] md:h-[115px]" />
    </div>
  <div className="flex-auto bg-gray-200 m-2 flex-col md:w-48 w-[182px] mr-4 md:h-44">
  <div className="bg-gray-200  m-2 text-left md:pb-6"><span className='font-bold text-base '>Контакти
  </span></div>
  <div className="flex flex-col bg-gray-200 m-2 md:pb-6 pb-4">
  <div className="flex md:items-center">
    <PhoneIcon className="text-white mr-2" />
    <span>+38(067) 447-81-03</span>
  </div>
  <span className="md:hidden pt-2 text-left">Зателефонувати вам?</span>
    </div>
  <div className="bg-gray-200  m-2 ">
    <div className="flex">
      <div className="bg-blue-200  m-1">
      <a
          href="https://web.telegram.org/a/"
          className="w-[50px] h-[50px] flex justify-center items-center hover:scale-[140%] hover:transition-transform hover:ease-linear hover:duration-300 active:scale-100"
        >
          <TelegramIcon width={35} height={35} />
        </a>
      </div>
      <div className="bg-blue-200  m-1">
      <a
          href="https://www.instagram.com/"
          className="w-[50px] h-[50px] flex justify-center items-center hover:scale-[140%] hover:transition-transform hover:ease-linear hover:duration-300 active:scale-100"
        >
          <InstagramIcon width={35} height={35} />
        </a>
     
      </div>
      <div className="bg-blue-200  m-1">
      <a
          href="https://www.facebook.com/"
          className="w-[50px] h-[50px] flex justify-center items-center hover:scale-[140%] hover:transition-transform hover:ease-linear hover:duration-300 active:scale-100"
        >
          <FacebookIcon width={35} height={35} />
        </a>
        
      </div>
    </div>
  </div>
  </div>
  <div className="md:flex-auto flex bg-gray-200 md:m-2 md:w-56 w-[198px] md:mr-4 text-left">
  <div className="md:m-2 w-[198px]">
  <span className='font-bold text-base'>Клієнтам</span>
  <ul className="text-baseM">
    <li className="py-1.5">
    Доставка і оплата
    </li>
    <li className="py-1.5">
    Обмін і повернення
    </li>
    <li className="py-1.5">
    Публічна оферта
    </li>
    <li className="py-1.5">Політика конфіденційності</li>
    <li className="py-1.5">Програма лояльності</li>
  </ul>
  </div>

</div>
  <div className="md:flex-auto flex flex-col bg-gray-200 md:m-2 md:w-63 w-[144px] md:text-left text-center h-[134px]">
  <span className='md:font-bold font-semibold text-base '>Способи оплати:
  </span>
  <div className="flex flex-col md:flex-row md:justify-start justify-center items-center  md:w-63 w-[144px] mt-4  ">
    <Image src={Mastercard} alt="Способи оплати" className="md:mr-4 mb-4 md:mb-0"  />
    <Image src={Visa} alt="Способи оплати"  />
  </div>
  </div>
</div>
</div>
</div>
 
    </footer>;
}

export default Footer;
