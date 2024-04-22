import React, { useContext } from 'react'
import Single from "./Pages/single/Single"
import Home from "./Pages/home/Home"
import Write from "./Pages/write/Write"
import Settings from "./Pages/settings/Settings"
import Login from "./Pages/login/Login"
import Register from "./Pages/register/Register"
import { Context } from './context/Context'
import { Routes, Route } from "react-router-dom";
import TopBar from './components/topbar/TopBar';

function App() {
 const { user } = useContext(Context);
 return (
<div className='app'>
  <TopBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/post/:postId" element={<Single />} />
    </Routes>
  </div>
 );
}

export default App;
