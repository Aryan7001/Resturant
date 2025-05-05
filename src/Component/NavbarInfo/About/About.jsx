import React from 'react'
import { icons } from '../../Images/assets'
import './About.css'

const About = () => {
  return (
    <div className='main-about'>
      <div className='main'>
        <div className='section'>
          <div className='img-container green-shadow'>
            <img src={icons.chief} alt="Our Chef" />
          </div>
          <div className='text-container'>
            <h3>About <br /><span>Our Restaurant</span></h3>
            <p>
              This is one of the finest restaurants you'll ever find in this entire city. <br />
              We have the best cuisines in the world and the most talented chefs.
            </p>
          </div>
        </div>

        <div className='section reverse'>
        <div className='img-container purple-shadow'>
            <img src={icons.chief} alt="Our Chef" />
          </div>
          <div className='text-container'>
            <h3>About <br /><span>Our Restaurant</span></h3>
            <p>
              We take pride in offering a wide variety of global cuisines that delight every palate. <br />
              Come and experience the best flavors crafted by our expert chefs.
            </p>
          </div>
        </div>

        <div className='section'>
          <div className='img-container yellow-shadow'>
            <img src={icons.Aryan} alt="Owner - Aryan Thapa" />
          </div>
          <div className='text-container'>
            <h3>Owner</h3>
            <h4>Aryan Thapa</h4>
            <p>
              Hello, I am the owner of this restaurant. We offer a wide variety of dishes with unique flavors.
              We are proud to be the only restaurant in town serving cuisines from all around the world.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
