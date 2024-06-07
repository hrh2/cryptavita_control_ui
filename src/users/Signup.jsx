import SignupNavBar from './SignupNavBar'
import Title from '../Titles/GeneralTitle2'
import bg from '../assets/Letsgetcreative.png'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import bgImage from "../assets/Illustration.svg"
import {useState} from "react";
import {PropagateLoader} from "react-spinners"
import Axios from "axios"
import {defaultServerUrl} from "../servers/servers.js";

export default function Signup() {
    const [error, setError] = useState('Create Account to have total access');
    const [info, setInfo] = useState('');
    const [rPassword, setRPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({
        firstName: '',
        lastName:'',
        email:'',
        phone:null,
        password: '',
    });
    const handleChange = (event) => {
        setError('');
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }
    const  handleRepeatedPassword = (event)=>{
        setError('');
        const {value} = event.target;
        setRPassword(value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(rPassword!==data.password){
            setError("Passwords do not match");
            return
        }
        setLoader(true);
        try {
            const response = await Axios.post(`${defaultServerUrl.authentication}/v1/register`, data);
            const token = response.data.token;
            setInfo(response.data.message);
            localStorage.setItem('cryptavita_client_token', token);
            setTimeout(() => {
                window.location = "/chat";
            },6000);
        } catch (error) {
            setLoader(false);
            setError(error.response.data.message);
        }
    };

  return (
    <div className="bg-[#131619] min-h-screen grid md:grid-cols-3 grid-cols-1">
      <div className='min-h-full col-span-2'>
        <SignupNavBar/>
          <form action="" className='md:w-[80%]  w-[90%] mx-auto text-white md:text-xl text-md flex flex-col gap-y-3'
                onSubmit={handleSubmit}>
              <Title size={`bg-contain bg-center bg-no-repeat md:w-[17rem] w-[10rem] md:h-[6vh] h-[5vh] `} bg={bg}/>
              <div className='flex flex-col gap-y-2'>
                  <label htmlFor='email' className=''>Email</label>
                  <input type="email" value={data.email} onChange={handleChange} name="email" id="email"
                         placeholder='Enter Your email here'
                         className='border-[1px] border-[#ffffff54] md:p-4 p-2 bg-[#363A3D] rounded-md '/>
              </div>
              <div className='flex flex-col gap-y-2'>
                  <label htmlFor='phone' className=''>Phone</label>
                  <input type="number" value={data.phone} onChange={handleChange} name="phone" id="phone"
                         placeholder='Enter Your phone number here'
                         className='border-[1px] border-[#ffffff54] md:p-4 p-2 bg-[#363A3D] rounded-md '/>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-2  grid-cols-1 md:gap-6 gap-4'>
                  <div className='flex flex-col gap-y-3'>
                      <label htmlFor='firstName'>First name</label>
                      <input type="text" value={data.firstName} onChange={handleChange} name="firstName" id="firstName"
                             placeholder='First name'
                             className='border-[1px] border-[#ffffff54] md:p-4 p-3 bg-[#363A3D] rounded-md'/>
                  </div>
                  <div className='flex flex-col gap-y-3'>
                      <label htmlFor='lastName'>Last name</label>
                      <input type="text" value={data.lastName} onChange={handleChange} name="lastName" id="lastName"
                             placeholder='Last name'
                             className='border-[1px] border-[#ffffff54] md:p-4 p-3 bg-[#363A3D] rounded-md'/>
                  </div>
              </div>
              <div className='grid md:grid-cols-2 sm:grid-cols-2  grid-cols-1 md:gap-6 gap-4'>
                  <div className='flex flex-col gap-y-3'>
                      <label htmlFor='password'>Password</label>
                      <input type="password" value={data.password} onChange={handleChange} name="password" id="password"
                             placeholder='Password'
                             className='border-[1px] border-[#ffffff54] md:p-4 p-3 bg-[#363A3D] rounded-md'/>
                  </div>
                  <div className='flex flex-col gap-y-3'>
                      <label htmlFor='rpassword'>Repeat Password</label>
                      <input type="password" value={rPassword} onChange={handleRepeatedPassword} name="rpassword"
                             id="rpassword" placeholder='Repeat password'
                             className='border-[1px] border-[#ffffff54] md:p-4 p-3 bg-[#363A3D] rounded-md'/>
                  </div>
              </div>
              <div className='flex align-middle py-4 gap-x-4'>
                  <input type="checkbox" name="terms" id="terms"
                         className='h-[20px] w-[20px] border-[1px] bg-[#363a3d] text-white '/>
                  <label htmlFor="terms" className=''>I agree with <a href="http://"
                                                                      className='text-[#82DBF7]'>Terms <span
                      className='text-white'>and</span> Conditions</a></label>
              </div>
              {loader&&<div className={`flex justify-center pb-3`}>
                  <PropagateLoader color="#36d7b7"/>
              </div>}
              {error&&<p className={`text-red-700 text-center font-bold py-2`}>
                  {error}
              </p>}
              {info&&
                  <p className={`text-green-700 text-center font-bold py-2`}>
                      {info}
                  </p>
              }
              <button type="submit" className='bg-[#8593E8] py-3 md:rounded-md rounded-sm font-semibold' disabled={loader}>Create Free
                  Account
              </button>
          </form>
          <div
              className='grid md:w-[70%] w-[70%] md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 mx-auto py-8'>
              <a href="http://"
                 className='bg-[#1A1D21] flex flex-row md:p-4 p-3 gap-x-5 rounded-md text-[#686B6E] hover:text-white active:scale-105'><FcGoogle
                  size={31}/> SignUp in with Google</a>
          <a href="http://" className='bg-[#1A1D21] flex flex-row md:p-4 p-3 gap-x-5 rounded-md text-[#686B6E] hover:text-white active:scale-105'><FaApple size={31} />SignUp in with Apple</a>
        </div>
        <div className='flex justify-center gap-6'>
          <hr className=' md:w-[15rem] w-[30%] mt-4 border-[#686B6E] stroke-white'/>
          <p className='text-[#686B6E]'>or continue with e-mail</p>
          <hr className=' md:w-[15rem] w-[30%] mt-4 border-[#686B6E]'/>
        </div>
        <div className='text-[#9B9C9E] w-[90%] flex justify-between mx-auto py-6'>
          <p className='text-start'>CryptaVita © 2024</p>
          <p className='text-end'>Privacy Policy</p>
        </div>
      </div>
      <div className='rounded-l-3xl bg-blue-500 md:min-h-screen  md:visible sm:invisible w-full bg-cover bg-center' style={{backgroundImage:`url(${bgImage})`}}>
      </div>
    </div>
  )
}
