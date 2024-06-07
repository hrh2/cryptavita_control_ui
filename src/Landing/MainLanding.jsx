import NavBar from './NavBar'
import View1 from './View1'
import View2 from './View2'
import View3 from './View3'
import View4 from './View4'
import View5 from './View5'
import View6 from './View6'
import View7 from './View7'
import View8 from './View8'
import Footer from './Footer'
import BgImage from '../assets/bgImage.svg'

export default function MainLanding() {
  return (
    <div  className='bg-center !min-w-full !bg-cover bg-no-repeat min-h-screen' style={{backgroundImage:`url(${BgImage})`}}>
      <NavBar/>
      <View1 size={"w-full md:h-[65vh] lg:h-[65vh] h-[30vh] bg-transparent bg-contain bg-no-repeat bg-center"}/>
      <View2/>
      <View3 size={"md:w-[70%] w-[80%] mx-auto bg-contain bg-no-repeat bg-center md:h-[13vh]  h-[8vh] bg-contained"}/>
      <View4/>
      <View5/>
      <View6/>
      <View7/>
      <View8/>
      <Footer/>
    </div>
  )
}
