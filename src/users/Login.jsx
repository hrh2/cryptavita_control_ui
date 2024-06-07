import LoginNavBar from './LoginNavBar';
import Title from '../Titles/GeneralTitle2';
import bg from '../assets/WelcometoCryptaVita.svg';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import bgImage from '../assets/Illustration2.svg';
import { useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import Axios from 'axios';
import { defaultServerUrl } from '../servers/servers.js';

export default function Login() {
    const [error, setError] = useState('');
    const [info, setInfo] = useState('');
    const [loader, setLoader] = useState(false);
    const [data, setData] = useState({
        email_phone: '',
        password: '',
    });

    const handleChange = (event) => {
        setError('');
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoader(true);
        try {
            const response = await Axios.post(`${defaultServerUrl.authentication}/v1/login`, data);
            const token = response.data.token;
            setInfo(response.data.message);
            localStorage.setItem('cryptavita_client_token', token);
            setTimeout(() => {
                window.location = "/chat";
            }, 6000);
        } catch (error) {
            setLoader(false);
            setError(error.response.data.message);
        }
    };

    return (
        <div className="bg-[#131619] min-h-screen grid md:grid-cols-3 grid-cols-1">
            <div className='min-h-full col-span-2'>
                <LoginNavBar/>
                <form action="" className='md:w-[60%]  w-[90%] mx-auto text-white md:text-xl text-md flex flex-col gap-y-6' onSubmit={handleSubmit}>
                    <Title size={`bg-contain bg-center bg-no-repeat md:w-[17rem] w-[10rem] md:h-[6vh] h-[5vh] `} bg={bg}/>
                    <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 mx-auto py-8'>
                        <a href="http://" className='bg-[#1A1D21] !w-full flex flex-row md:p-4 p-3 gap-x-5 rounded-md text-[#686B6E] hover:text-white active:scale-105'>
                            <FcGoogle size={31}/> SignUp in with Google
                        </a>
                        <a href="http://" className='bg-[#1A1D21] !w-full flex flex-row md:p-4 p-3 gap-x-5 rounded-md text-[#686B6E] hover:text-white active:scale-105'>
                            <FaApple size={31}/>SignUp in with Apple
                        </a>
                    </div>
                    <div className='flex justify-center gap-6'>
                        <hr className=' md:w-[15rem] w-[30%] mt-4 border-[#686B6E] stroke-white'/>
                        <p className='text-[#686B6E]'>or continue with e-mail</p>
                        <hr className=' md:w-[15rem] w-[30%] mt-4 border-[#686B6E]'/>
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24" fill="#686B6E">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623-3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                        </svg>
                        <input type="text" id="email" name="email_phone" value={data.email_phone} onChange={handleChange} className="border-[1px] border-[#ffffff54] md:px-12 p-2 bg-[#363A3D] rounded-md pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Email" />
                    </div>
                    <div className="flex items-center text-lg mb-6 md:mb-8">
                        <svg className="absolute ml-3" viewBox="0 0 24 24" width="24" fill="#686B6E">
                            <path d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"/>
                        </svg>
                        <input type="password" id="password" name="password" value={data.password} onChange={handleChange} className="border-[1px] border-[#ffffff54] md:px-12 p-2 bg-[#363A3D] rounded-md pl-12 py-2 md:py-4 focus:outline-none w-full" placeholder="Password" />
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex align-middle py-4 gap-x-4'>
                            <input type="checkbox" name="remember" id="remember" className='h-[20px] w-[20px] border-[1px] bg-[#363a3d] text-white '/>
                            <label htmlFor="remember" className=''>Remember me</label>
                        </div>
                        <div>
                            <a href="/" className='text-[#82DBF7]'>Forgot password?</a>
                        </div>
                    </div>
                    {loader && <div className={`flex justify-center pb-3`}>
                        <PropagateLoader color="#36d7b7" />
                    </div>}
                    {error && <p className={`text-red-700 text-center font-bold py-2`}>
                        {error}
                    </p>}
                    {info && <p className={`text-green-700 text-center font-bold py-2`}>
                        {info}
                    </p>}
                    <button type="submit" className='bg-[#8593E8] py-3 md:rounded-md rounded-sm font-semibold' disabled={loader}>Log In</button>
                </form>
                <p className='text-[#9B9C9E] w-[90%] flex text-center justify-center align-middle  mx-auto py-12'>Don’t have an account? <a href='/signup' className='text-[#82DBF7]'>&nbsp; Sign up</a></p>
                <div className='text-[#9B9C9E] w-[90%] mt-[4vh] flex justify-between mx-auto py-6'>
                    <a href='/' className='text-start'>CryptaVita © 2024</a>
                    <a href='/' className='text-end hover:text-white'>Privacy Policy</a>
                </div>
            </div>
            <div className='rounded-l-3xl bg-blue-500 md:min-h-screen  md:visible sm:invisible w-full bg-cover bg-center' style={{ backgroundImage: `url(${bgImage})` }}>
            </div>
        </div>
    );
}
