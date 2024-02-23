function Header() {
  return (
    <>
    <header className='min-h-93'>
    <div className='flex pt-10 pb-8 justify-between'>
   
  <div className="flex-none w-1/6 bg-lightblue">Left Block</div>
  <div className="flex-auto flex-col text-right h-40 ">
    <div className="bg-red border-b-2 border-yellow-600 h-20 items-center">Top Right</div>
    <div className="bg-yellow h-20">Bottom Right</div>
</div>



  </div>
    </header>
    
    </>
 
)
}

export default Header;
