import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <div>Footer</div>
        </div>
    )
}

export default Main