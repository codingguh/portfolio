import React from 'react'
import "./home.css";
import Me from "../../assets/teguh.jpeg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
const Home = () => {
  return (
    <section className='home container' id="home">
      <div className="intro">
        <img style={{borderRadius:'50%'}} src={Me} alt="" className="home__img" />
      <h1 className="home__name">Teguh Muhammadd Harits</h1>
      <span className="home__education">I'am Frontend developer</span>
      <HeaderSocials/>
      <a href="#contact" className="btn">Hire Me</a>

      <ScrollDown/>
      </div>

      <Shapes/>
    </section>
  )
}

export default Home
