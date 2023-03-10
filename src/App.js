import React, { createContext, useReducer } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Contact from './components/Contact';
import Register from './components/Register';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import { Route, Routes } from "react-router-dom";
import { initialState, reducer } from '../src/reducer/UseReducer';
import './App.css';




export const UserContext = createContext();
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" component={ErrorPage} />
    </Routes>
  )
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (

    <>
      <UserContext.Provider value={{ state, dispatch }}>

        <Navbar />
        <Routing />


      </UserContext.Provider>
    </>
  )
}

export default App;