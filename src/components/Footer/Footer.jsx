import React from 'react'
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { motion } from 'framer-motion'
import { FaParking, FaTwitter } from "react-icons/fa"
import { AiOutlineInstagram, AiFillYoutube, AiFillFacebook, AiFillMail, AiFillPhone, AiOutlineYoutube, AiFillTwitterCircle, AiFillInstagram, AiOutlineWifi } from "react-icons/ai"
import { BsBank, BsSend } from "react-icons/bs"
import { TbHorseToy } from "react-icons/tb"
import { MdLocationOn } from "react-icons/md"

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer_services_container">
                    <div className="services_for_one">
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                                cursor: "pointer"
                            }}
                            transition={{
                                type: "tween", duration: 0.17
                            }}
                        >
                            <AiOutlineWifi className='icon_footer_service' />
                        </motion.div>
                        <div>
                            <p>wifi gratuit</p>
                            <p>free, fast, reliable delivery on<br></br> over order 99%</p>
                        </div>
                    </div>
                    <div className="services_for_one">
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                                cursor: "pointer"
                            }}
                            transition={{
                                type: "tween", duration: 0.17
                            }}
                        >
                            <FaParking className='icon_footer_service' />
                        </motion.div>
                        <div>
                            <p>Parking</p>
                            <p>free, fast, reliable delivery on<br></br> over order 99%</p>
                        </div>
                    </div>
                    <div className="services_for_one">
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                                cursor: "pointer"
                            }}
                            transition={{
                                type: "tween", duration: 0.17
                            }}
                        >
                            <BsBank className='icon_footer_service' />
                        </motion.div>
                        <div>
                            <p>bank</p>
                            <p>free, fast, reliable delivery on<br></br> over order 99%</p>
                        </div>
                    </div>
                    <div className="services_for_one">
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                                cursor: "pointer"
                            }}
                            transition={{
                                type: "tween", duration: 0.17
                            }}
                        >
                            <TbHorseToy className='icon_footer_service' />
                        </motion.div>
                        <div>
                            <p>garderie</p>
                            <p>free, fast, reliable delivery on<br></br> over order 99%</p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <div className="hr_type">
                </div>
                <div className="join_footer">
                    <div className="left_join">
                        <BsSend color='#f2380c' size={50} />
                        <p>sing up for newsletter </p>
                    </div>
                    <div className="right_join">
                        <div className='right_join_main'>
                            <input type="email" placeholder='Your Email' />
                            <button>subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="hr_type">
                </div>
                <div className="links_footer">
                    <div className="links_container">
                        <p className="links_titre">
                            contact us
                        </p>
                        <div className="links_location">
                            <MdLocationOn color="#aaa" size={22} />
                            <p>mall of ksarhlel <br></br>No. 1295 tunis, mahdia, 11111 <br />Tunis</p>
                        </div>
                        <div className="links_location">
                            <AiFillPhone color="#aaa" size={22} />
                            <p>+216 50818730</p>
                        </div>
                        <div className="links_location">
                            <AiFillMail color="#aaa" size={22} />
                            <p>ghassendevo@gmail.com</p>
                        </div>
                        <div className="links_location">
                            <div className="icons_links">
                                <FaTwitter size={20} color="white" />
                            </div>
                            <div className="icons_links">
                                <AiFillFacebook size={20} color="white" />
                            </div>
                            <div className="icons_links">
                                <AiOutlineInstagram size={20} color="white" />
                            </div>
                            <div className="icons_links">
                                <AiFillYoutube size={20} color="white" />
                            </div>
                        </div>
                    </div>
                    <div className="links_container">
                        <p className="links_titre">
                            information
                        </p>
                        <div className="links_location">
                            <p>privacy policy </p>
                        </div>
                        <div className="links_location">
                            <p>refuned policy</p>
                        </div>
                        <div className="links_location">
                            <p>shipping policy</p>
                        </div>
                        <div className="links_location">
                            <p>terms of service</p>
                        </div>
                        <div className="links_location">
                            <p>search</p>
                        </div>
                    </div>
                    <div className="links_container">
                        <p className="links_titre">
                            account
                        </p>
                        <div className="links_location">
                            <p>about us  </p>
                        </div>
                        <div className="links_location">
                            <p>contact</p>
                        </div>
                        <div className="links_location">
                            <p>fac</p>
                        </div>
                        <div className="links_location">
                            <p>size chart</p>
                        </div>
                        <div className="links_location">
                            <p>earring</p>
                        </div>
                    </div>
                    <div className="links_container">
                        <p className="links_titre">
                            quick links
                        </p>
                        <div className="links_location">
                            <p>boutiques  </p>
                        </div>
                        <div className="links_location">
                            <p>restaurants</p>
                        </div>
                        <div className="links_location">
                            <p>loisirs</p>
                        </div>
                        <div className="links_location">
                            <p>acceuil</p>
                        </div>
                        <div className="links_location">
                            <p>log in</p>
                        </div>
                    </div>
                    <div className="links_container" s>
                        <p className="links_titre">
                            our app
                        </p>
                        <div className="links_location">
                            <p>download our app  </p>
                        </div>
                        
                    </div>
                </div>
                <div className="hr_type">
                </div>
            </footer >
        </>
    )

}

export default Footer
{/* <div class="footer">
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
                </div> */}