import { FacebookIcon, InstagramIcon, PhoneIcon } from '../icons';
import TelegramIcon from '../icons/TelegramIcon';

function Socials() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <FacebookIcon width={35} height={35} />
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <InstagramIcon width={35} height={35} />
        </div>
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <TelegramIcon width={35} height={35} />
        </div>
      </div>
    </div>
  );
}

export default Socials;
