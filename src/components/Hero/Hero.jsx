import React from 'react'
import Header from '../Header/Header'
import './Hero.css'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="h-left">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>Workout programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="h-right">
        <button className="btn">Join Now</button>

        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} className="hero-image" alt="" />
        <img src={hero_image_back} className="hero-image-back" alt="" />

        <div className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220kcal</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
