import image from './assets/cryptavita.png'
export default function TopBar() {
  return (
<div className=''>
<nav className="relative select-none bg-grey lg:flex lg:items-stretch w-full">
  <div className="flex flex-no-shrink items-stretch h-12 font-extrabold">
    <a href="" className="flex-no-grow flex-no-shrink relative py-2 pr-2 leading-normal text-black no-underline flex items-center hover:bg-grey-dark">
    <div className=" w-[10rem] m-1 rounded bg-cover bg-center h-[2.5rem]" style={{backgroundImage:`url(${image})`}}>
    </div>
    </a>
    <button className="block lg:hidden cursor-pointer ml-auto relative w-12 h-12 p-4">
      <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"/></svg>
    </button>
  </div>
  <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow">
    <div className="lg:flex md:flex grid grid-cols-2 ml-auto font-bold">
      <a href="/" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black hover:bg-[#0000001e] rounded my-1  no-underline flex items-center hover:bg-grey-dark">Dashboard</a>
      <a href="/feeds" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline hover:bg-[#0000001e] rounded my-1 flex items-center hover:bg-grey-dark">Drone Feeds</a>
      <a href="/results" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline hover:bg-[#0000001e] rounded my-1 flex items-center hover:bg-grey-dark">surveillance Results</a>
      <a href="/chatbot" className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline hover:bg-[#0000001e] rounded my-1 flex items-center hover:bg-grey-dark">Bot</a>
    </div>
  </div>
</nav>
</div>
  )
}
