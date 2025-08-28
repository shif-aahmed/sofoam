// import { useState } from 'react'
import Home from './pages/Home/Home'
import RecviteHome from './pages/RecviteHome/RecviteHome'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recvite" element={<RecviteHome />} />
      </Routes>
    </>
  )
}

export default App
