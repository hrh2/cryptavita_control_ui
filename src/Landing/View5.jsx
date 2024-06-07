import LandingCard from '../components/LandingCard'
import Title from '../assets/markting.svg'
import Img1 from '../assets/removebgR.svg'
import RoundImage from '../components/RoundImage'
export default function View5() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 md:py-8 py-4'>
        <RoundImage image={Img1} size={" bg-no-repeat bg-contain  #bg-center md:h-[50vh] h-[40vh] md:w-[60%] w-[80%] mx-auto"}/>
        <LandingCard size={"md:w-[70%] m-auto md:gap-y-4 md:text-2xl gap-4 min-h-[40vh]"} h2={`Optimized Reach`} titlesvg={Title} p={"DOML is a digital media agency powered by AI technology providing real time, data-driven insights on your business and audience. The mission of DOML is to create the best experiences for companies through intelligent insights, powerful analytics and strategic execution."} link={"/#"} linkTitle={"Learn more"}/>
    </div>
  )
}
