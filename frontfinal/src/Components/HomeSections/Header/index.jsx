import React from 'react'
import './style.scss'
const Header = () => {
  return (
    <section className='header'>
        <div className='header_container'>
            <div className='header_container_content'>
                <h1>𝒲ℯ𝓁𝒸ℴ𝓂ℯ 𝒯ℴ</h1>
                <h2>PATO PLACE </h2>
                {/* <p>PATO PLACE</p> */}
                <div className='btn'>
                <button>LOOK MENU</button>
                </div>
            </div>
            <div className='header_container_img'>
                {/* <img src="https://preview.colorlib.com/theme/pato/images/slide1-01.jpg" alt="" /> */}
            </div>
        </div>
    </section>
  )
}

export default Header