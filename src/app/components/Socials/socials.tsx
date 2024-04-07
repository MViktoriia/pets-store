import { FacebookIcon, InstagramIcon, PhoneIcon } from '../icons';
import TelegramIcon from '../icons/TelegramIcon';
interface SocialsProps {
  className?: string;
}

function Socials({ className }: SocialsProps) {
  return (
    <div>
      <div className={`flex items-center justify-between ${className}`}>
        <a
          href="https://www.facebook.com/"
          className="w-[50px] h-[50px] flex justify-center items-center hover:scale-[140%] hover:transition-transform hover:ease-linear hover:duration-300 active:scale-100"
        >
          <FacebookIcon width={35} height={35} />
        </a>
        <a
          href="https://www.instagram.com/"
          className="w-[50px] h-[50px] flex justify-center items-center hover:scale-[140%] hover:transition-transform hover:ease-linear hover:duration-300 active:scale-100"
        >
          <InstagramIcon width={35} height={35} />
        </a>
        <a
          href="https://web.telegram.org/a/"
          className="w-[50px] h-[50px] flex justify-center items-center hover:scale-[140%] hover:transition-transform hover:ease-linear hover:duration-300 active:scale-100"
        >
          <TelegramIcon width={35} height={35} />
        </a>
      </div>
    </div>
  );
}

export default Socials;
