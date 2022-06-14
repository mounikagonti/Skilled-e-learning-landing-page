import React from "react"
import Image from "next/image"

const Banner = () => {
  return (
    <div className='banner'>
      <div className='container'>
        <div className='banner_wrapper'>
          <div className='banner_left'>
            <h1>Maximize skill,</h1>
            <h1>minimize budget</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              dolorem quas odit dignissimos vero repudiandae incidunt aliquid
              repellat culpa tempore.
            </p>
            <button className='banner_btn'>Get Started</button>
          </div>
          <div className='banner_right'>
            <div className='boxes'>
              <div className='box_one'>
                <p>Course hours</p>
                <h1>1,451</h1>
              </div>
              <div className='box_two'>
                <p>Members</p>
                <h1>29k</h1>
              </div>
            </div>
            <div className='banner_img'>
              <Image
                className='img'
                src='/images/girlwlap.jpg'
                alt='Picture of the author'
                width={200}
                height={400}
                objectFit='cover'
                style={{ borderRadius: "130px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
