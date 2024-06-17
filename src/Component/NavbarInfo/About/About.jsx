import React from 'react'
import { icons } from '../../Images/assets'
import './About.css'

const About = () => {
  return (
    <div className='main-about'>
      <div className="main">
        <div className="first">
            <div className='img-main'>
            <img src={icons.chief} alt="" />
            </div>
            <div className='text-main'>
            <h3>About <br/> <span>Our Resturant </span></h3>
            <p>this is one of the finest resturant u will ever find in this entire city. <br /> We have the best cuisines in the world and also bets cheif </p>
            </div>
        </div>
        <div className="second">
            <div className='text-main1'>
            <h3>About <br/> <span>Our Resturant </span></h3>
            <p>this is one of the finest resturant u will ever find in this entire city. <br /> We have the best cuisines in the world and also bets cheif </p>
            </div>
            <div className='img-main1'>
            <img src={icons.chief} alt="" />
            </div>
        </div>
        <div className="third">
        <div className='img-main2'>
            <img src={icons.Aryan} alt="" />
            </div>
            <div className='text-main2'>
            <h3>Owner</h3>
        <h4>Aryan Thapa</h4>
        <p>Hello, I am the owner of this resturant. Here we provide u the varities of dishes with  unique taste and not only this we are only the resturant in the town where u will find every dishes of every country.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
