import React from "react"
import { BiWalk } from "react-icons/bi"
import { TbPhoto } from "react-icons/tb"
import { MdOutlinePhotoCamera } from "react-icons/md"
import { BiBitcoin } from "react-icons/bi"
import { BsFillBagFill } from "react-icons/bs"

export const Card = () => {
  return (
    <div className='card'>
      <div className='container'>
        <div className='card_wrapper'>
          <div className='cards card1'>
            <h3>Check out our</h3>
            <h3>most popular</h3>
            <h3>courses!</h3>
          </div>
          <div className='cards card2'>
            <div className='man'>
              <BiWalk className='icon' />
            </div>
            <h3>Animation</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi at
              dolores neque saepe! Eaque, iste.
            </p>
            <h5>Get Started</h5>
          </div>
          <div className='cards card3'>
            <div className='gallery'>
              <TbPhoto className='icon' />
            </div>
            <h3>Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi at
              dolores neque saepe! Eaque, iste.
            </p>
            <h5>Get Started</h5>
          </div>
          <div className='cards card4'>
            <div className='camera'>
              <MdOutlinePhotoCamera className='icon' />
            </div>
            <h3>Photography</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi at
              dolores neque saepe! Eaque, iste.
            </p>
            <h5>Get Started</h5>
          </div>
          <div className='cards card5'>
            <div className='bitcoin'>
              <BiBitcoin className='icon' />
            </div>
            <h3>Crypto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi at
              dolores neque saepe! Eaque, iste.
            </p>
            <h5>Get Started</h5>
          </div>
          <div className='cards card6'>
            <div className='bag'>
              <BsFillBagFill className='icon' />
            </div>
            <h3>Business</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi at
              dolores neque saepe! Eaque, iste.
            </p>
            <h5>Get Started</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
