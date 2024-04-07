import { PhoneIcon, PhoneWhithFillIcon } from '../icons';

interface PhoneProps {
  isFilled?: boolean;
  className?: string;
}

function Phone({ isFilled, className }: PhoneProps) {
  return (
    <a
      className={`flex items-center gap-2 ${className}`}
      href="tel:+380674478103"
    >
      {isFilled ? (
        <div className="flex justify-center items-center w-[50px] h-[50px] hover:scale-[120%] hover:transition-transform hover:ease-linear hover:duration-300 active:scale-100">
          <PhoneWhithFillIcon width={35} height={35} />
        </div>
      ) : (
        <div className="flex justify-center items-center w-[28px] h-[28px]">
          <PhoneIcon
            width={24.5}
            height={24.5}
            className="[&>svg]:fill-black"
          />
        </div>
      )}
      <p>+38(067) 447-81-03</p>
    </a>
  );
}

export default Phone;
