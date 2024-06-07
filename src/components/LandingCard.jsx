import LandingTitle2 from '../Titles/GeneralTitle2'
import {FaArrowRight} from 'react-icons/fa6'

export default function LandingCard({size,titlesvg,h2,p,link,linkTitle}) {
  return (
    <div className={`${size} text-white flex flex-col`} >
      <LandingTitle2 size={`bg-contain bg-no-repeat bg-center w-[70%] mx-auto h-[5vh]`} bg={titlesvg}/>
      <h1 className='text-2xl md:text-4xl text-center font-semibold'>{h2}</h1>
      <div className='flex flex-col md:gap-8 gap-4 w-[80%] mx-auto'>
        <p className=' justify-start py-4 border-b-2 border-[#8e38ff]'>{p}</p>
        <a href={'/${link}'} className=' p-2 px-8 flex text-[0.9rem] rounded-[40rem] w-[13rem] text-center border-2  gap-x-3 text-white hover:border-white border-[#7c2aff]'>{linkTitle}<FaArrowRight size={26}/></a>
      </div>
    </div>
  )
}
