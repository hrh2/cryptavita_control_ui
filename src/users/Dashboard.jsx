import ChatBot from "../components/ChatBot"
import {useEffect, useState} from "react";
import {defaultServerUrl} from "../servers/servers.js";
import axios from "axios";
import {RiseLoader} from "react-spinners";
export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        async function fetchVideos() {
            try {
                const token = localStorage.getItem("cryptavita_client_token");
                const url =`${defaultServerUrl.authentication}/v1/user`
                axios.defaults.headers.common.Authorization = `Bearer ${token}`;
                const response = await axios.get(url);
                setUser(response.data);
                console.log(user)
                setTimeout(() => {
                    setLoader(false);
                }, 1000);
            } catch (error) {
                setError(error.response ? error.response.data.message : 'Network error the server is down.');
                setTimeout(() => {
                    setLoader(false);
                }, 2000);
            }
        }
        fetchVideos();
    }, []);

  return (
    <div>
        {user ?
            <ChatBot user={user}/>
            :
            <div className={`h-screen flex justify-center align-middle`}>
                <RiseLoader color="#36d7b7" className={`my-auto`}/>
                {error && <div className={`text-red-700 font-bold `}>{error} Reload page or sign in again</div>}
            </div>
        }
    </div>
  )
}
