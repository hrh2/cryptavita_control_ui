import image from '../assets/Logo.png'
export default function NavBar() {
  return (
<div className='md:p-8 p-2 py-12 bg-transparent'>
<nav className="relative select-none bg-transparent  md:grid justify-between md:grid-cols-3 sm:grid-cols-2 grid-cols-1 w-full">
  <div className="flex flex-no-shrink items-stretch h-12 font-extrabold">
    <a href="" className="flex-no-grow flex-no-shrink relative py-2 pr-2 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">
    <div className=" w-[10rem] m-1 rounded bg-contain bg-no-repeat bg-center h-[2.5rem]" style={{backgroundImage:`url(${image})`}}>
    </div>
    </a>
  </div>
  <div className=" ">
    <div className="flex justify-center font-bold">
      <a href="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white hover:bg-[#0000001e] rounded my-1  no-underline flex items-center hover:bg-grey-dark">Research</a>
      <a href="/feeds" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline hover:bg-[#0000001e] rounded my-1 flex items-center hover:bg-grey-dark">Product</a>
      <a href="/results" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline hover:bg-[#0000001e] rounded my-1 flex items-center hover:bg-grey-dark">Safe</a>
      <a href="/chatbot" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline hover:bg-[#0000001e] rounded my-1 flex items-center hover:bg-grey-dark">Company</a>
    </div>
  </div>
  <div className='flex gap-4 align-middle justify-end'>
      <a href="/signin" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline rounded-sm hover:border-2 hover:border-[#aa50ffd3] my-1 flex items-center hover:bg-grey-dark">Sign in</a>
      <a href="/signup" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline hover: rounded-sm my-1 border-2  border-[#aa50ffd3] flex items-center hover:bg-grey-dark">Sign up</a>
  </div>
</nav>
</div>
  )
}
