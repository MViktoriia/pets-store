'use client';
import React, { useEffect, useState } from 'react';
import Modal from '../../Modal/modal';
import SignUp from './SignUp';
import Image from 'next/image';
import logo from '../../../../../public/icons/Logo.png';
function Sign() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <div className=" flex w-[858px] h-[637px] p-[32px] pr-0 rounded-tl-[10px] gap-[40px] bg-cyan">
  <div className=" w-[360px] h-[573px] flex flex-col  items-center ">
  <div className="mb-[40px]">
        <Image src={logo} width={185} height={77} alt="pets logo" />
      </div>
      <div className="w-[100%] h-[100%] mt-[24px]">
     <SignUp />
      </div> 
      </div>
  
  <div className="flex flex-col justify-center width-[426px]">
 <Image src="/images/dog-auth-2x.png" 
 alt="dog-auth" 
 width={426} 
height={273} />
  </div>
</div>

  
    </Modal>
  );
}

export default Sign;
