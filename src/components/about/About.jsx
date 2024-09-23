import React from 'react'
import "./about.css"
import Me from "../../assets/aris.jpeg"
import AboutBox from './AboutBox'
import ImgHtml from "../../assets/icon-html.png"
import ImgCss from "../../assets/icon-css.png"
import ImgJavascript from "../../assets/icon-javascript.png"
import ImgNode from "../../assets/icon-nodejs.png"
import ImgExpress from "../../assets/icon-laravel.png"
import ImgMongodb from "../../assets/mongodb-icon.svg"
import ImgMysql from "../../assets/icon-mysql.png"
import ImgPostgre from "../../assets/icon-postgre.png"
import ImgTailwind from "../../assets/icon-tailwindcss.png"
import ImgFlutter from "../../assets/icon-flutter.png"
import ImgNextJs from "../../assets/icon-next.png";
import Firebase from "../../assets/icon-firestore.png"
const About = () => {
  return (
    <section className='about container section' id="about">
      <h2 className="section__title">
        About Me
      </h2>

      <div className="about__contaier grid">
         <img style={{borderRadius:'50%',width:'150px',height:'150px'}} src={Me} alt="" className='about__img' />

         <div className="about__data grid">
          <div className="about__info">
            <p className="about__descripton" style={{marginBottom:"1.5rem"}}>
              I am teguh muhammad harits, developer from jakarta, indonesia,
              Passionate about crafting seamless web experiences, I specialize in building efficient, scalable, and attractive web applications
              also mobile hibrid using flutter.~ Bringing digital dreams to life.
              
            </p>
            <a href="#" className="btn">Download CV</a>
          </div>
          <div className='sill__container'>

            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgHtml} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgCss} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgJavascript} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgNode} alt="" />
            </div>

            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgExpress} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgMongodb} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgMysql} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgPostgre} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={Firebase} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgTailwind} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgFlutter} alt="" />
            </div>
            <div style={{padding:"10px",border:"0.5px solid gray",width:'50px',borderRadius:'10px'}}>
              <img style={{width:"30px",height:'30px'}} src={ImgNextJs} alt="" />
            </div>
            {/* <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                 Development
                </h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                 UI/UX Design
                </h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">
                 Mobile Development
                </h3>
                <span className="skills__number">89%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage"></span>
              </div>
            </div> */}
          </div>
         </div>
      </div>

      <AboutBox/>
    </section>
  )
}

export default About
