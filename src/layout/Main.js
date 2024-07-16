import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <div>Navbar</div>
            <Outlet />
            <div>Footer</div>
        </div>
    )
}

export default Main