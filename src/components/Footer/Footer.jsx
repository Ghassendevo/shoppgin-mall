import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { motion } from 'framer-motion'
import { AiOutlineInstagram, AiOutlineYoutube, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai"
const Footer = () => {
    return (
        <>
            <footer>
                <div class="footer">
                    <div class="row">
                        <a href="#"><FaFacebookF size={30} className='footer_icons'/></a>
                        <a href="#"><AiFillInstagram size={30} className='footer_icons' /></a>
                        <a href="#"><AiOutlineYoutube size={30} className='footer_icons' /></a>
                        <a href="#"><AiFillTwitterCircle size={30} className='footer_icons' /></a>
                    </div>

                    <div class="row">
                        <ul>
                            <li><a href="#">Boutiques</a></li>
                            <li><a href="#">Food Piezza</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div class="row">
                        KSARHLELMALL Copyright © 2021 KSARHLEL - All rights reserved || Designed By: Ghassen
                    </div>
                </div>
            </footer>
        </>
    )

}

export default Footer