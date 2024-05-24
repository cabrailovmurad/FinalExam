import React from 'react'
import './style.scss'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer_container'>
      <div className='footer_container_top'>
        <div className='footer_container_top_logo'>
        <img src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png" alt="" />
        <p>Asorem ipsum adipolor sdit amet, consectetur adipisicing elitcf sed do eiusmod tem.</p>

        </div>
        <div className='footer_container_top_link'>
          <h4>LATEST TWITTER</h4>
          <ul className='footer_container_top_link_list'>
            <li>@colorlib</li>
           <h6>Activello is a good option. It has a slider built into that displays the featured image in the slider.</h6>
            <li>Offers&Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer_container_top_link'>
          <h4>Opening time</h4>
          <ul className='footer_container_top_link_list'>
            <li>About</li>
            <li>Offers&Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='footer_container_top_link'>
          <h4>Support</h4>
          <ul className='footer_container_top_link_list'>
            <li>About</li>
            <li>Offers&Discounts</li>
            <li>Get Coupon</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      <div className='footer_container_bottom'>
        <div className='footer_container_bottom_content'>
        @ 2017 Colorlib. Get The Theme|  
        </div>
        <div className='footer_container_bottom_icon'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-behance"></i>
        <i className="fa-solid fa-globe"></i>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer