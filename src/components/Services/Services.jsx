import React from 'react'
import "./services.css"
import customer from "../../assets/customer-service.png"
import { AiOutlineWifi, AiOutlineKey, AiOutlineIdcard, AiOutlineBank } from "react-icons/ai"
import { TbHorseToy } from "react-icons/tb"
import { CiParking1 } from "react-icons/ci"
import { motion } from 'framer-motion'
import { useRef } from 'react'
import { SlArrowUp } from "react-icons/sl"
const Services = () => {
    const containerRef = useRef();
    return (
        <>
            <div className="Services">
                <h2>Services</h2>
                <h3>garantissent la meilleure expérience de shopping !</h3>
                <img src={customer} className="customer" alt="" />
                <div ref={containerRef} className="services_container">
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        drag dragConstraints={containerRef} className="service_main">
                        <AiOutlineWifi className="service_icon" />
                        <p className="service_def">Wifi gratuit</p>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        drag dragConstraints={containerRef} className="service_main">
                        <AiOutlineKey className="service_icon" />
                        <p className="service_def">Voiturier</p>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        drag dragConstraints={containerRef} className="service_main">
                        <TbHorseToy className="service_icon" />
                        <p className="service_def">Garderie</p>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        drag dragConstraints={containerRef} className="service_main">
                        <AiOutlineIdcard className="service_icon" />
                        <p className="service_def">Carte de<br></br> Fidelité</p>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        drag dragConstraints={containerRef} className="service_main">
                        <CiParking1 className="service_icon" />
                        <p className="service_def">Parking</p>
                    </motion.div>
                    <motion.div
                        whileHover={{
                            scale: 1.1
                        }}
                        drag dragConstraints={containerRef} className="service_main">
                        <AiOutlineBank className="service_icon" />
                        <p className="service_def">Bank</p>
                    </motion.div>
                </div>

            </div>
            <div className="backtotop">
                <a href='#home'>
                    <SlArrowUp size={25} />
                </a>
                <h3>Back to Top</h3>
            </div>
        </>
    )
}

export default Services