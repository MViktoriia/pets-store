'use client';
import React, { useEffect, useState } from 'react';
import { CheckIcon } from '../icons';
import { CustomCheckboxProps } from '../../../lib/types/index'
import Input from '../Input/input';
function Checkbox({ text }: CustomCheckboxProps) {
    const [isChecked, setIsChecked] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };
    return (
        <>
            <div className="flex items-center ">
                <label className="relative w-[16px] h-[16px] mr-[8px] cursor-pointer">
                    <Input
                        type={"checkbox"}
                        className={"absolute opacity-0 w-[16px] h-[16px] cursor-pointer"}
                        checked={isChecked}
                        onChange={toggleCheckbox} />
                    <span className="absolute inset-0 border border-gray-dark rounded-sm bg-white flex items-center justify-center">
                        {isChecked && <CheckIcon className="w-4 h-4" />}
                    </span>
                </label>
                <span className="font-sans text-white text-xs">
                 <a href="/" className='underline'>  {text}</a>  
                </span>
            </div>
        </>
    )
}
export default Checkbox;