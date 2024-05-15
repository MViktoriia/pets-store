import Image from 'next/image';
import React from 'react';
import dog from '../../../../public/images/dog-auth-2x.png';
import { LogoIcon } from '../icons';

function AuthPopup() {
  return (
    <div className="w-[858px] h-[562px] bg-cyan">
      <div className="flex justify-between items-center">
        <div className="w-[360px] h-[498px] mt-8 mb-8 ml-8">
          <LogoIcon />
        </div>
        <div className="w-[426px] h-[273px]">
          <Image src={dog} alt="dog lying near laptop and looking the screen" />
        </div>
      </div>
    </div>
  );
}

export default AuthPopup;
