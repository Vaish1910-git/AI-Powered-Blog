import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header2'

const Home = ()=>{
    return(
        <div>
            <Navbar/>
            <Header/>
            <div id="home-debug" className="sr-only">home-debug</div>
        </div>
    )
}

export default Home;