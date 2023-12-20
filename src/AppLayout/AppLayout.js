import React from 'react'
import NavBar from './NavBar'
import FrontPage from './FrontPage'
import { Outlet } from 'react-router-dom'

const AppLayout = ()=>{
    return(<div>
        <NavBar/>
        <Outlet/>
    </div>)
}

export default AppLayout