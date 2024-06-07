import Title from '../Titles/GeneralTitle2'
import bg from '../assets/WelcometoCryptaAi.svg'
import {FiEdit3, FiSend, FiShare2, FiSun} from "react-icons/fi";
import {HiOutlineLogout, HiOutlineMicrophone} from "react-icons/hi";
import {MdInfoOutline} from "react-icons/md";
import AiCreativeFeatures from "./AiCreativeFeatures.jsx";
import AiContentCreation from "./AiContentCreation.jsx";
import AiDeveloperTools from "./AiDeveloperTools.jsx";
import AiIdeaGeneration from "./AiIdeaGeneration.jsx";
import {GrAttachment} from "react-icons/gr";
import Sidebar from "./SideBar.jsx";
import {useEffect, useRef, useState} from "react";
import {VscLayoutSidebarLeft} from "react-icons/vsc";
import UserQuestion from "./UserQuestion.jsx";
import AiMessage from "./AiMessage.jsx";
import { SyncLoader} from "react-spinners";
import io from 'socket.io-client';
import Axios  from "axios";
import {defaultServerUrl} from "../servers/servers.js";

const server = 'https://cryptavita-ai.onrender.com'; // Replace with your server URL
// const server = 'http://localhost:5001'; // Replace with your server URL
const socket = io(server);

export default function ChatBot({user}) {
    const [unique_chat_id,setChat_id] = useState('');
    const [isSidebarVisible, setIsSidebarVisible] = useState(true);
    const [messages, setMessages] = useState([]);
    const [message,setMessage] = useState('');
    const [proposer,setProposer] = useState(true);
    const handleMessage=(event)=>{
        const {value } = event.target;
        setMessage(value)
    }
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    }
    // Chat handling
    const [loading, setLoading] = useState(true);
    const messagesEndRef = useRef(null);
    useEffect( () => {

        socket.on('generatedContent', (message) => {
            setMessages(prevMessages => [...prevMessages, message]);
            // console.log(message)
            scrollToBottom();
            setLoading(false); // Stop the loader when response is received
        });
        return () => {
            socket.off('generatedContent');
        };
    }, []);
    useEffect(() => {
        async function fetchChat_id() {
            try {
                const token = localStorage.getItem("cryptavita_client_token");
                Axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                const response = await Axios.get(`${defaultServerUrl.authentication}/v1/chat/chat_id`);
                setChat_id(response.data.chat_id);
                console.log(response.data.chat_id);
            } catch (error) {
                window.alert(error.message);
                window.location.reload();
            }
        }

        fetchChat_id();
    }, []);

    useEffect(() => {
        // Scroll to bottom when messages change
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const handleSendMessage = (e) => {
        setProposer(false)
        e.preventDefault();
        if (message) {
            setLoading(true)
            socket.emit('generateContent',{message:message,chat_id:unique_chat_id,user_id:user._id});
            setMessage('')
        }
    };

    return (
        <div className={`min-h-screen !w-full bg-[#131619] flex`}>
            <Sidebar user={user} isVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
            <div className={`flex-1 transition-all duration-300 ${isSidebarVisible ? 'ml-0 overflow-hidden' : 'md:ml-[-18rem] ml-[-18rem]'}`}>
                <div className="flex justify-between md:p-6 p-4">
                    <div className={`text-white flex flex-row justify-center align-middle gap-3 `}>
                        <div>
                            <p className={`md:text-[20px] flex `}>
                                {!isSidebarVisible && <VscLayoutSidebarLeft onClick={toggleSidebar} size={40} className={`active:scale-125 active:bg-[#1A1D21] hover:bg-[#1A1D21] p-2 rounded-md my-auto`} />}
                                {user.lastName} 👋
                            </p>
                            <Title size={"md:w-[18rem] w-[10rem] h-[4vh] bg-contain bg-center bg-no-repeat"} bg={bg} />
                        </div>
                    </div>
                    <div className={`text-white md:flex sm:flex flex-row gap-x-3 md:visible sm:visible hidden `}>
                        <FiSun size={31} className={`text-[#fff] p-2 border-[1px] border-white rounded-full active:scale-105 cursor-pointer hover:text-[#ffffffcc] transition-[0.9s]`} />
                        <FiShare2 size={31} className={`text-[#fff] p-2 border-[1px] border-white rounded-full active:scale-105 cursor-pointer hover:text-[#ffffffcc] transition-[0.9s]`} />
                        <MdInfoOutline size={31} className={`text-[#fff] p-2 border-[1px] border-white rounded-full active:scale-105 cursor-pointer hover:text-[#ffffffcc] transition-[0.9s]`} />
                        <FiEdit3 size={31} className={`text-[#fff] p-2 border-[1px] border-white rounded-full active:scale-105 cursor-pointer hover:text-[#ffffffcc] transition-[0.9s]`} />
                        <HiOutlineLogout size={31} className={`text-[#fff] p-2 border-[1px] border-white rounded-full active:scale-105 cursor-pointer hover:text-[#ffffffcc] transition-[0.9s]`} />
                    </div>
                </div>
                {proposer&&messages.length === 0 ?(
                    <>
                        <div className={`grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 md:p-4 p-3 md:w-[80%] w-[90%] h-[59vh] mx-auto overflow-y-scroll md:mt-[10vh] mt-[5vh]`}>
                            <div className={`flex flex-col md:col-span-4 sm:col-span-2 justify-center`}>
                                <Title size={"md:w-[20rem] w-[12rem] h-[4vh] bg-contain bg-center bg-no-repeat mx-auto"} bg={bg} />
                                <p className={`text-[#9B9C9E] text-md mx-auto text-center md:p-4 p-3`}>Kickstart your innovation process with our comprehensive selection of predefined prompts.</p>
                            </div>
                            <AiCreativeFeatures />
                            <AiDeveloperTools />
                            <AiContentCreation />
                            <AiIdeaGeneration />
                        </div>
                        <div className={`h-[4vh]`} />
                    </>
                ) : (
                    <div className={`md:min-h-[73vh] flex flex-col gap-4 md:w-[80%] w-[90%] h-[66vh] mx-auto overflow-y-scroll rounded-2xl`}>
                        {messages.map((message, index) => (
                            <div key={index} className={`md:mb-8 mb-6 flex flex-col gap-4`}>
                                <UserQuestion question={message.question} key={index + message.question} />
                                <AiMessage message={message.message} key={index} />
                            </div>
                        ))}
                        {loading&&<div className={`flex justify-center pb-3`}>
                            <SyncLoader color="#36d7b7"/>
                        </div>}
                        <div ref={messagesEndRef}></div>
                    </div>
                )}
                <div className={`mx-ahttps://www.youtube.com/watch?v=q4owivy2K-c&t=66suto `}>
                    <div className={`bg-black md:w-[80%] w-[90%] mx-auto rounded-2xl`}>
                        <form className="mx-auto flex m-2 flex-row p-4 gap-3" onSubmit={handleSendMessage}>
                            <button type={`button`} className="text-white " disabled={true} title={`currently disabled`}>
                                <HiOutlineMicrophone size={40} className={`aspect-square rounded-full hover:bg-[#1A1D21] active:scale-105 active:bg-[#1A1D21] p-2`} />
                            </button>
                            <textarea
                                className="p-3 bg-transparent text-gray-300 w-full border-[1px] border-[#00000001] md:rounded-2xl rounded-xl resize-none overflow-hidden"
                                placeholder="Ask me anything! I am here to help..."
                                onChange={handleMessage}
                                name={`message`}
                                value={message}
                                rows={2}
                                style={{ minHeight: '40px' }}
                                required={true}
                            />
                            <button type={`button`} className="text-white " disabled={true} title={`currently disabled`}>
                                <GrAttachment size={40} className={`aspect-square rounded-md hover:bg-[#1A1D21] active:scale-105 active:bg-[#1A1D21] p-2`} />
                            </button>
                            <button type="submit" className="text-white">
                                <FiSend size={40} className={`aspect-square rounded-md bg-[#1A1D21] active:scale-125 active:bg-[#1A1D21] p-2`} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
