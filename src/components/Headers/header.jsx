import React from 'react'
import "./headerStyle.css"
export const Header = () => {
    return (
        <div className="contact_header">
            <div>
                <a className='header_a'>Spend $99 More And Get Free Shipping!</a>
                <div className="bar"></div>
                <a className='header_a' href="">Email : ghassendevo@gmail.Com</a>
                <div className="bar"></div>
                <a className='header_a' href="">Hotline:(888) 4344 6000-(888) 1338 8193</a>
            </div>

            <div>
                <a className='header_a2'>About us</a>
                <div className="bar"></div>
                <a className='header_a2' href="">Contact</a>
                <div className="bar"></div>
                <a className='header_a2' href="">Faq</a>
                <div className="bar"></div>
                <a className='header_a2' href="">Size Chart</a>
                <div className="bar"></div>
                <a className='header_a2' href="">earring</a>
            </div>
        </div>
    )
}
