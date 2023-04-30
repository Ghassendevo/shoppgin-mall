import React from 'react'
import "./style.css"
import pizza from "../../assets/pizza.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Pagination, Navigation, A11y } from "swiper";
import hamburger from "../../assets/hamburger.png"
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi"
import masmoudi from "../../assets/masmoudi.png"
const Food = () => {
    return (
        <div className='food'>
            <h2>food piezza</h2>
            <h3>Quand le goût et les saveurs se réunissent !</h3>
            <img src={pizza} className="pizza" alt="" />
            <div className="piezzadiv" >
                <Swiper
                    grabCursor={true}
                    modules={[Navigation, Pagination]}
                    slidesPerView={2}

                    draggable={true}
                    className="piezzaSwiper"
                    navigation={{
                        nextEl: ".rightarrowpiezza",
                        prevEl: ".leftarrowpiezza",
                    }}
                >
                    <SwiperSlide className="slide_piezza">
                        <motion.img
                            initial={{
                                rotate: 80,
                            }}
                            viewport={{
                                once: "true"
                            }}
                            whileInView={{
                                rotate: 0,

                            }}
                            whileHover={{
                                rotate: 10,

                            }}
                            src={masmoudi} alt="" className='img_piezza' />
                        <div className="pizza_info">
                            <p>FOOD + SNACKS</p>
                            <h4>MASMOUDI</h4>
                            <p>Café & Patisserie</p>
                            <motion.a
                                whileHover={{
                                    y: -2
                                }}
                                whileTap={{
                                    scale: 1.1
                                }}
                                className="visit_piezza">+ Visit</motion.a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide_piezza">
                        <motion.img
                            initial={{
                                rotate: 80,
                            }}
                            viewport={{
                                once: "true"
                            }}
                            whileInView={{
                                rotate: 0,

                            }}
                            whileHover={{
                                rotate: 10,

                            }}
                            src={masmoudi} alt="" className='img_piezza' />
                        <div className="pizza_info">
                            <p>FOOD + SNACKS</p>
                            <h4>MASMOUDI</h4>
                            <p>Café & Patisserie</p>
                            <motion.a
                                whileHover={{
                                    y: -2
                                }}
                                whileTap={{
                                    scale: 1.1
                                }}
                                className="visit_piezza">+ Visit</motion.a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide_piezza">
                        <motion.img
                            initial={{
                                rotate: 80,
                            }}
                            viewport={{
                                once: "true"
                            }}
                            whileInView={{
                                rotate: 0,

                            }}
                            whileHover={{
                                rotate: 10,

                            }}
                            src={masmoudi} alt="" className='img_piezza' />
                        <div className="pizza_info">
                            <p>FOOD + SNACKS</p>
                            <h4>MASMOUDI</h4>
                            <p>Café & Patisserie</p>
                            <motion.a
                                whileHover={{
                                    y: -2
                                }}
                                whileTap={{
                                    scale: 1.1
                                }}
                                className="visit_piezza">+ Visit</motion.a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="for_navigation">
                    <motion.div whileHover={{
                        rotate: 5
                    }} className='leftarrowpiezza'>
                        <HiOutlineArrowNarrowLeft size={40} color="#ee2d00" />
                    </motion.div>
                    <motion.div whileHover={{
                        rotate: -5
                    }} className='rightarrowpiezza'>
                        <HiOutlineArrowNarrowRight size={40} color="#ee2d00" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Food