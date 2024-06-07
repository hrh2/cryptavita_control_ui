import RoundImage from "../components/RoundImage"
import Img1 from '../assets/removebgR.svg'
// import { FaArrowRight } from "react-icons/fa6"
export default function View8() {
  return (
    <div className='md:w-[80%] w-[90%] mx-auto md:py-8 p-4 text-white'>
      <div className='flex flex-row gap-4 md:py-12 py-8 bg-gradient-to-r from-[#8593E8] to-[#6F9DF5] md:rounded-3xl rounded-xl'>
        <RoundImage image={Img1} size={" bg-no-repeat bg-contain  bg-center md:h-[40vh] h-[30vh] md:w-[60%] w-[80%] mx-auto"}/>
        <div className="flex flex-col align-middle justify-center gap-y-5">
          <h1 className="h1 md:text-5xl text-center px-5 font-extrabold">Instant answers. Greater productivity. Endless inspiration.</h1>
          <div className=" flex justify-center gap-4">
            <a href={'/#'} className=' p-2 px-8 flex md:text-[0.9rem] text-[0.8rem] justify-center align-middle font-bold rounded-[40rem] md:w-[13rem] text-center border-2  gap-x-3 text-white hover:border-white border-[#7c2aff]'>Get Started{/*<FaArrowRight size={26}/>*/}</a>
            <a href={'/#'} className=' p-2 px-8 flex md:text-[0.9rem] text-[0.8rem] font-bold justify-center align-middle rounded-[40rem] md:w-[13rem] text-center border-2  gap-x-3 text-white hover:border-white border-[#7c2aff]'>Visit Cryptavita{/*<FaArrowRight size={26}/>*/}</a>
          </div>
        </div>
      </div>
    </div>
  )
}