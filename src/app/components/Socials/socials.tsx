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
          className="w-[50px] h-[50px] flex justify-center items-center"
        >
          <FacebookIcon width={35} height={35} />
        </a>
        <a
          href="https://www.instagram.com/"
          className="w-[50px] h-[50px] flex justify-center items-center"
        >
          <InstagramIcon width={35} height={35} />
        </a>
        <a
          href="https://web.telegram.org/a/"
          className="w-[50px] h-[50px] flex justify-center items-center"
        >
          <TelegramIcon width={35} height={35} />
        </a>
      </div>
    </div>
  );
}

export default Socials;
