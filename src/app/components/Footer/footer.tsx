
import styles from "./Footer.module.css"
import Image from "next/image";
import {LogoIcon, Wave, PhoneIcon, FacebookIcon, InstagramIcon} from '../icons';
import CatFooter from '../../../../public/images/cat-footer-2x.png'
import TelegramIcon from '../icons/TelegramIcon';
function Footer() {
  return <footer className="h-97 bg-cyan mt-10 text-white ">
  <div  >
<Wave >

</ Wave>
<div className="container text-center">
  <div className="flex xl:w-[1140px]">
  <div className="flex-auto bg-gray-200 p-2 mr-36 w-44 grid justify-center h-48">
    <LogoIcon className=" md:w-40 md:h-16 pb-4"/>
    <Image src={CatFooter} alt="ge" />
    </div>
  <div className="flex-auto bg-gray-200 m-2 flex-col w-48 mr-4 h-44">
  <div className="bg-gray-200  m-2 text-left pb-6"><span className='font-bold text-base '>Контакти
  </span></div>
  <div className="flex bg-gray-200 m-2 pb-6">
    <PhoneIcon className="text-white" /> +38(067) 447-81-03</div>
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
  </div></div>
  <div className="flex-auto bg-gray-200 m-2 w-56 mr-4 text-left">
  <div className="m-2">
  <span className='font-bold text-base'>Клієнтам</span>
  <p>Доставка і оплата</p>
  <p>Обмін і повернення</p>
  </div>

</div>
  <div className="flex-auto bg-gray-200 p-4 m-2 m-2 w-64">Блок 4</div>
</div>
</div>
</div>
 
    </footer>;
}

export default Footer;
