import { PhoneIcon, PhoneWhithFillIcon } from '../icons';

interface PhoneProps {
  isFilled?: boolean;
  className?: string;
}

function Phone({ isFilled, className }: PhoneProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {isFilled ? (
        <div className="flex justify-center items-center w-[50px] h-[50px]">
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
    </div>
  );
}

export default Phone;
