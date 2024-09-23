import React from 'react'
import "./services.css"
import Image1 from "../../assets/service-1.svg";
import Image2 from "../../assets/service-2.svg";
import Image3 from "../../assets/smartphone.png";

const data = [
  {
    id: 1,
    image: Image1,
    title: "UI/UX design",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 2,
    image: Image2,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
  {
    id: 3,
    image: Image3,
/*************  ✨ Codeium Command 🌟  *************/
    title: "Mobile Flutter",
    description:
      "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
  },
];

// Services component
// This component renders a section with a title and a list of services
// Each service is an object with an id, an image, a title, and a description
// The list of services is contained in the data variable
const Services = () => {
  return (
   <section className="servies container section" id="services">
    <h2 className="section__title">Services</h2>

    <div className="services__container grid">
      {data.map(({id,image,title,description})=>{
        return (
          <div className="services__card" key={id}>
            <img width={100} height={100} src={image} alt="" className='services__img' />
            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        );
      })}
    </div>
   </section>
  )
}

export default Services
