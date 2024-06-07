// Landing
import Landing from './Services/Landing'
import MainLanding from './Landing/MainLanding'
// Users Services
import Login from './users/Login'
import Signup from './users/Signup'
import Dashboard from './users/Dashboard'
// Admin
// Global
// Auth
import {Navigate, Route, Routes} from 'react-router-dom'
// import DroneControlDashboard from "./components/DroneControlDashboard.jsx";
// import Results from "./components/Results.jsx";


function App() {

  const isLocalUser = () => {
    return localStorage.getItem('cryptavita_client_token');
  };
  const redirectToLanding = () => <Navigate to="/landing" />;
  return (
  <div className='bg-black min-h-screen text-white'>
    <Routes>
      <Route path="/" exact element={<Landing/>}>
            <Route index element={<MainLanding/>} />
      </Route>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/signin' exact element={<Login/>}/>
      <Route path='/chat' exact element={isLocalUser()?<Dashboard/>:redirectToLanding()}/>
      <Route path="*" element={<Navigate to="/" />} />
      {/*<Route path='/dash' exact element={<DroneControlDashboard/>}/>*/}
      {/*<Route path='/feed' exact element={<Results />}/>*/}

    {/* <Route path="/" exact element={<Main/>}>
            <Route path="/feeds" element={<DroneFeeds />} />
            <Route path="/results" element={<Results />} />
            <Route path="/chatbot" element={<Chatbot />} />
    </Route> */}
    </Routes>
    </div>
  )
}

export default App
