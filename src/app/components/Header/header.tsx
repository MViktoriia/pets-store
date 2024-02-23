import { CartIcon, HeartIcon, LogoIcon } from "../icons";

function Header() {
  return (
    <>
      <header className='min-h-93 container'>
        <div className='flex pt-10 pb-8 justify-between'>
          <div className="flex-none w-1/5 bg-lightblue grid items-center"><LogoIcon /></div>
          <div className="flex-auto flex-col text-right h-40 ">
            <div className="grid border-b-2 border-yellow h-20 items-center">
              <span className="text-lg font-normal text-white">Увійти</span></div>
            <div className="flex justify-end h-20 ">
            <div className="h-20 w-96 grid items-center pr-16"> <input type="text" placeholder="Пошук" className="p-2 rounded-md border border-gray-ligthMax mr-4" /></div>
  <div className="h-20 w-22 bg-green grid items-center pr-16"><HeartIcon className=" text-white"/> </div>
  <div className="h-20 w-12 bg-blue grid items-center"><CartIcon /></div>
            </div>
          </div>
        </div>
      </header>

    </>

  )
}

export default Header;
