import {CustomInputProps} from '../../../lib/types/index'
function Input({placeholder, type,className, ...inputProps}: CustomInputProps){
    return(
        <>
         <div className="h-10 w-93 md:w-93 mb-[24px] grid items-center">
                <input
                  type={type}
                  placeholder={placeholder}
                  className={className}
                  {...inputProps} 
                />
              </div>
        </>
    )
}
export default Input;