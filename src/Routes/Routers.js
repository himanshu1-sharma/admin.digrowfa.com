import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddEdit from '../Pages/DashboardPages/AddEdit'
import Dashboard from '../Pages/DashboardPages/Dasgboard'
import Login from '../Pages/DashboardPages/Login'
import ScrollToTop from '../Pages/ScrollToTop'

const Routers = () => {
    return (
        <>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/add-edit" element={<AddEdit />} />
                </Routes>
            </ScrollToTop>
        </>
    )
}

export default Routers 