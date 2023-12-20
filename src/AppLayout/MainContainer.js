import React from 'react'
import FrontPage from './FrontPage'
import Login from './Login'
import { useSelector } from 'react-redux';

export const MainContainer = () => {
    let user = useSelector(store => store.user.user);
  return (
    <div>
            {
                user?<FrontPage/> : <Login/> 
            }
    </div>
  )
}
