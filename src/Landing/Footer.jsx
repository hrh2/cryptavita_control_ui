import bgImage from '../assets/Rectangle 247.svg'
import image from '../assets/Group 853.svg'
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { CiTwitter } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <div className={` md:min-h-[100vh] #md:bg-contain bg-no-repeat bg-cover bg-center w-full flex flex-col text-white `} style={{backgroundImage:`url(${bgImage})`}}>
      <div className="grid md:mt-[30vh] mt-[30vh] md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:w-[95%] w-[96%] mx-auto gap-4 border-b-2 border-white">
        <div className="md:col-span-1 col-span-2">
          <div className="md:w-[20rem] md:h-[5rem] w-[10rem] m-1 rounded bg-contain bg-no-repeat bg-center h-[3rem]" style={{backgroundImage:`url(${image})`}}></div>
          <p className="md:py-6 md:text-xl">
          Lorem ipsum dolor sit amet, consect etur adipiscing elit. Ullamcorper purus eleifend purus faucibus faucibus.
          </p>
          <div className="flex flex-row justify-between py-5 w-[90%] mx-auto md:text-xl">
            <a href="" className=" aspect-square rounded-full border-[1px] border-[#ffffffcc] p-2"><CiTwitter size={32} /></a>
            <a href="" className="aspect-square rounded-full border-[1px] border-[#ffffffcc] p-2"><FiFacebook size={32} /></a>
            <a href="" className="aspect-square rounded-full border-[1px] border-[#ffffffcc] p-2"><FaInstagram size={32} /></a>
            <a href="" className="aspect-square rounded-full border-[1px] border-[#ffffffcc] p-2"><FiLinkedin size={32} /></a>
          </div>
        </div>
        <div className="flex flex-col gap-6 text-white font-bold md:text-xl">
            <h4 className="md:text-2xl text-xl md:text-center px-6">Resources</h4>
            <div className="flex flex-col justify-between">
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
            </div>
        </div>
        <div className="flex flex-col gap-6 text-white font-bold md:text-xl">
            <h4 className="md:text-2xl text-xl md:text-center px-6">Resources</h4>
            <div className="flex flex-col justify-between">
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
              <a href="" className="text-[#ffffffcc] md:text-center py-2 px-12 hover:text-[#af37ff] hover:border-[#af37ff] transition-[.9s]">services</a>
            </div>
        </div>
        <div className="md:col-span-1 col-span-2 font-bold flex flex-col gap-y-6 md:text-xl">
        <h4 className="md:text-2xl text-xl md:text-center px-6">Resources</h4>
          <p className="text-center text-[#ffffffcc] ">
          Lorem ipsum dolor sit amet, consect etur adipiscing elit. Ullamcorper purus eleifend purus faucibus faucibus.
          </p>
          <div className="flex flex-row justify-between py-5 w-[90%] mx-auto">
            <input type="email" placeholder="Email address" className="bg-transparent px-2 border-r-[0px] border-[1px] w-[70%] rounded-l-sm h-[3rem]" name="email"/>
            <button className="bg-blue-900 border-[1px] border-white border-l-[0px] text-white py-2 px-4 rounded-sm rounded-l-[0px] w-[30%] md:text-[80%] text-[0.9rem]">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center align-middle py-6 font-bold md:text-2xl text-[] ">
        <p>Copyright 2021 <a href="/" className="text-blue-900 font-extrabold">cryptavita </a> All Rights Reserved.</p>
      </div>
    </div>
  )
}
