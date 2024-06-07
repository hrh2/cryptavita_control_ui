import TopBar from './TopBar'
import { Outlet } from 'react-router-dom'

function Main() {

  return (
    <>
    <TopBar/>
    <Outlet/>
    </>
  )
}

export default Main
