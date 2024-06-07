import React from 'react'
import { Outlet } from 'react-router-dom'
// import NavBar from '../Landing/NavBar'

export default function Landing() {
  return (
    <div>
      {/* <NavBar/> */}
      <Outlet/>
    </div>
  )
}
