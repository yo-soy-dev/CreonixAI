import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { Menu, X } from 'lucide-react'
import Sidebar from '../components/Sidebar'
import { SignIn, useUser } from '@clerk/clerk-react'

const Layout = () => {
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false)
  const { user } = useUser()

  return user ? (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <nav className="w-full px-8 h-20 flex items-center justify-between border-b border-gray-200 bg-white">
        {/* <img
          src={assets.logo}
          alt="Logo"
          className="h-19 cursor-pointer w-32 sm:w-44"
          onClick={() => navigate('/')}
        /> */}

        <h1
          className="
          text-xl sm:text-2xl font-bold tracking-wide cursor-pointer
          bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
          drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]
          hover:scale-105 transition-transform duration-200
        "
          onClick={() => navigate("/")}
        >
          CreonixAI
        </h1>

        {sidebar ? (
          <X
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
            onClick={() => setSidebar(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 text-gray-600 sm:hidden cursor-pointer"
            onClick={() => setSidebar(true)}
          />
        )}
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />

        <div className="flex-1 bg-[#F4F7FB] overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout
