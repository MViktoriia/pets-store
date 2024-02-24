import { CartIcon, HeartIcon, LogoIcon } from "../icons";

function Header() {
  return (
    <>
      <header className='min-h-93 container'>
      <div className='flex flex-col md:flex-row pt-10 pb-8 md:justify-between justify-center relative'>
  <div className="flex-none  md:w-1/1 bg-lightblue grid items-center justify-center mb-4 md:mb-0">
    <LogoIcon />
  </div>
  <div className="flex-auto md:flex-col md:text-right h-40">
    <div className="grid border-b-2 border-yellow md:h-20 items-center">
      <span className="text-lg font-normal text-white hidden md:grid">Увійти</span>
    </div>
    <div className="flex justify-end h-20">
      <div className="h-20 w-92 md:w-96  grid items-center pr-16">
        <input type="text" placeholder="Пошук" className="p-2 rounded-md border border-gray-ligthMax mr-4" />
      </div>
      <div className="h-20 w-12 bg-blue grid items-center order-3 md:order-2 absolute md:relative md:top-0 top-16 right-0">
        <CartIcon />
      </div>
      <div className="h-20 w-22 bg-green grid items-center pr-16  md:grid hidden">
        <HeartIcon className="text-white" />
      </div>
    </div>
  </div>
</div>

      </header>

    </>

  )
}

export default Header;
