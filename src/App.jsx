import DroneControlDashboard from './DroneControlDashboard'
import Main from './MainR'
import DroneFeeds from './DroneFeeds'
import Results from './Results'
import Chatbot from './Chatbot'

import  {Route,Routes} from 'react-router-dom'

function App() {

  return (
    <Routes>
    <Route path="/" exact element={<Main/>}>
            <Route index element={<DroneControlDashboard/>} />
            <Route path="/feeds" element={<DroneFeeds />} />
            <Route path="/results" element={<Results />} />
            <Route path="/chatbot" element={<Chatbot />} />
    </Route>
    </Routes>
  )
}

export default App
