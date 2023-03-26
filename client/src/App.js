import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import { Routes, Route, Router } from 'react-router-dom';
import About from './component/about/About'
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import Flights from './component/flight/Flight'


function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {/* {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ):(
        backendData.users.map((user,i) => (
          <p key={i}>{user}</p>
        ))
      )} */}
      <Header />
      <About />
      <Flights />
      <Footer />

    </div>
  )
}

export default App
