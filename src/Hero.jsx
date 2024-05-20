import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className='hero-center'>
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas tempore repudiandae iure sed facilis perferendis velit adipisci ipsum repellat illo, sit enim voluptatum quos optio exercitationem soluta! Obcaecati, culpa?
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt='woman and the browser' />
            </div>
        </div>
    </section>
  )
}

export default Hero