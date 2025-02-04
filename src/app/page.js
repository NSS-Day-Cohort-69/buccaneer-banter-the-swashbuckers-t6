'use client'

import { useEffect, useState } from 'react'
import Dashboard from "@/components/dashboard"
import Login from "@/components/login"
import Navbar from "@/components/navbar"
import '@/styles/globals.css'
import '@/styles/captainslog.css'
import { getFollowers, getPirates, getPirateById, getStories, deleteFollower, postFollower } from "../services.js"

const Index = () =>
{
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('pirateId'))


    if(!isLoggedIn)
    {
        return <Login onLogin={() => setIsLoggedIn(true)} />
    }

    return <>
        <Navbar setIsLoggedIn={setIsLoggedIn} />
        <Dashboard />
    </>
}

export default Index
