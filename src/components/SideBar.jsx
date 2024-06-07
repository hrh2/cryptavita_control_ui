import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // Import PropTypes
import '../styles/SideBar.css';
import { FaCircleUser } from "react-icons/fa6";
import {FaChevronDown, FaRegSquare} from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { VscGear } from "react-icons/vsc";
import {BiSquareRounded} from "react-icons/bi";
import {MdOutlineCircle} from "react-icons/md";
import {LuTriangle} from "react-icons/lu";

function Sidebar({ isVisible, toggleSidebar,user }) {
    const handleLogout =()=>{

    }
    return (
        <div className={`transform transition-transform duration-300 py-4 rounded-3xl ${isVisible ? 'translate-x-0 md:static fixed h-[98vh] mt-[1vh] ml-[1vh] z-30' : '-translate-x-full'} w-70  bg-black text-white`}>
            <div className="flex flex-row items-center p-4 " onClick={toggleSidebar}>
                <div className='mt-1'>
                    <FaCircleUser className='mr-3' size={35}/>
                </div>
                <div>
                    <span className="text-lg font-semibold text-md">{user.firstName} {user.lastName}</span><br />
                    {!user.isVerified&&<span className='inline text-[#8593E8] text-sm font-bold'>New</span>}
                </div>
                <div>
                    <button className=' ml-[2em] mb-5 '>
                        <FaChevronDown className="text-white font-light" />
                    </button>
                </div>
            </div>
            <hr className={`border-[#686B6E22]`}/>
            <h4 className={` capitalize text-center py-2 text-[#686b6e] font-bold`}>PROJECTS</h4>
            <nav className="flex-1">
                <ul className='justify-between flex flex-col gap-3 p-2'>
                    <li className="p-2 hover:bg-gradient-to-r from-[#ffffff33] to-[#CCEBEB11] rounded-xl">
                        <Link to="#orbital" className="p-2 px-4 rounded flex gap-4">
                            <FaRegSquare className='text-[#B6F09C] my-auto' size={20} />
                            Orbital Odyssey
                        </Link>
                    </li>
                    <li className="p-2 hover:bg-gradient-to-r from-[#ffffff33] to-[#CCEBEB11] rounded-xl">
                        <Link to="#product" className="p-2 px-4 flex rounded gap-4">
                            <MdOutlineCircle className='text-[#BD3B3A] my-auto' size={20} />
                            Digital Product Launch
                        </Link>
                    </li>
                    <li className="p-2 hover:bg-gradient-to-r from-[#ffffff33] to-[#CCEBEB11] rounded-xl">
                        <Link to="#brand" className="p-2 flex px-4 rounded gap-4">
                            <BiSquareRounded className='text-[#E26F20] my-auto' size={20} />
                            Brand Refresh
                        </Link>
                    </li>
                    <li className="p-2 hover:bg-gradient-to-r from-[#ffffff33] to-[#CCEBEB11] rounded-xl">
                        <Link to="#social_media" className="p-2 px-4 flex rounded gap-4 ">
                            <LuTriangle className='text-[#82DBF7] my-auto' size={20} />
                            Social Media Strategy
                        </Link>
                    </li>
                    <li className="hover:text-gray-100">
                        <Link to="#project" className="text-gray-600 p-3 rounded gap-4 flex flex-row list-item-hover text-light">
                            <CiCirclePlus className='text-gray-500 my-auto' size={20} />
                            Add Project
                        </Link>
                    </li>
                </ul>
            </nav>

            <div className="flex absolute bottom-2 rounded-2xl flex-row items-center p-4 bg-gradient-to-r from-[#ffffff33] to-[#CCEBEB11] m-4 " >
                <div className='mt-1'>
                    <FaCircleUser className='mr-3' size={35}/>
                </div>
                <div>
                    <span className="font-semibold text-sm">{user.firstName} {user.lastName}</span><br/>
                    <button onClick={handleLogout} className='inline active:scale-110 cursor-pointer text-[#8593E8] text-sm font-bold'>Log out</button>
                </div>
                <div>
                    <button className=' ml-[2em] mb-5 '>
                        <VscGear className="text-white font-light"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

// Add property validation
Sidebar.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
