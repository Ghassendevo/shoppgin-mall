import React, { useRef, useState } from 'react';
import "./Landing.css"
// Import Swiper React components
import { Swiper, SwiperSlide, } from 'swiper/react';
import image1 from "../../assets/main-banner-01_1903x740.png"
import image2 from "../../assets/main-banner-02_1903x740.png"
import banner1 from "../../assets/banner-01.png";
import banner2 from "../../assets/banner-02.png";
import banner3 from "../../assets/banner-03.png";
import { animate, motion } from 'framer-motion';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md"
import { SlArrowLeft, SlArrowRight, } from "react-icons/sl"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import badge from "../../assets/badge.png";
import badge2 from "../../assets/badge2.png"
import { Autoplay, Pagination, Navigation } from 'swiper';
export const Landing = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="landing">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={false}
                    navigation={{
                        nextEl: ".swiper-button-next-unique",
                        prevEl: ".swiper-button-prev-unique",
                    }}
                    modules={[Autoplay, Pagination, Navigation,]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="image_swiper" src={image1} />
                        <motion.div
                            initial={{
                                x: '-90vh',
                            }}
                            animate={{
                                x: "0",
                            }}
                            transition={{
                                type: "spring", stiffness: 120
                            }}
                            className="inside_swiper">
                            <h5 className="h5" style={{ color: "white" }}>Get 15% OFF - Only this Weekend...!</h5>
                            <br />
                            <img src={badge} style={{ width: '250px' }} />
                            <br />
                            <p className="p">
                                weekend
                            </p>
                            <br />
                            <p className="special">special sale</p>
                            <br />
                            <div className="start">
                                <p className="startingfrom">starting from</p>
                                <p className="price">$99.00</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                    <SwiperSlide><img className="image_swiper" src={image2} />
                        <motion.div
                            initial={{
                                x: '90vh'
                            }}
                            whileInView={{
                                x: '0'
                            }}

                            viewport={{ once: true }}
                            transition={{
                                type: "tween", duration: 0.3
                            }}
                            className="inside_swiper">
                            <h5 className="h5" style={{ color: "white" }}>Get 15% OFF - Only this Weekend...!</h5>
                            <br />
                            <img src={badge2} style={{ width: '250px' }} />
                            <br />
                            <p className="p">
                                weekend
                            </p>
                            <br />
                            <p className="special">special sale</p>
                            <br />
                            <div className="start">
                                <p className="startingfrom">starting from</p>
                                <p className="price">$99.00</p>
                            </div>
                        </motion.div>
                    </SwiperSlide>

                    <div class="swiper-button-prev-unique" >
                        <MdKeyboardArrowLeft size={35} color="white" />
                    </div>
                    <div class="swiper-button-next-unique" >
                        <MdKeyboardArrowRight size={35} color="white" />
                    </div>
                </Swiper>
                <div className="add">
                    <div>
                        <motion.div
                            initial={{
                                position: 'absolute',
                                x: '60vh',

                            }}
                            animate={{
                                x: 0,
                            }}

                            transition={{
                                type: 'spring', stiffness: 110, delay: 0.1, damping: 8
                            }}
                            whileHover={{
                                zoom: 1.1,
                                originX: 0,
                                originY: 0,
                            }}

                            className="banner_image">
                            <img src={banner1} />
                        </motion.div>
                    </div>
                    <div>
                        <div>
                            <motion.div
                                initial={{
                                    position: 'absolute',
                                    x: '60vh',

                                }}
                                animate={{
                                    x: 0,
                                    duration: 10
                                }}

                                transition={{
                                    type: 'spring', stiffness: 110, delay: 0.1
                                }}
                                whileHover={{
                                    zoom: 1.1,
                                    originX: 0,
                                    originY: 0,
                                }}
                                whileInView
                                className="banner_image">
                                <img src={banner2} />
                            </motion.div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <motion.div
                                initial={{
                                    x: '-60vh',

                                }}
                                animate={{
                                    x: 0,
                                    duration: 10
                                }}

                                transition={{
                                    type: 'spring', stiffness: 110, delay: 0.1
                                }}
                                whileHover={{
                                    zoom: 1.1,
                                    originX: 0,
                                    originY: 0,
                                }}
                                className="banner_image">
                                <img src={banner3} />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
