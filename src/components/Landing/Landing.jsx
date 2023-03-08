import React, { useRef, useState } from 'react';
import "./Landing.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../assets/main-banner-01_1903x740.png"
import image2 from "../../assets/main-banner-02_1903x740.png"
import banner1 from "../../assets/banner-01.png";
import banner2 from "../../assets/banner-02.png";
import banner3 from "../../assets/banner-03.png";
import { motion } from 'framer-motion';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="image_swiper" src={image1} />
                          d
                    </SwiperSlide>
                    <SwiperSlide><img className="image_swiper" src={image2} /></SwiperSlide>

                    
                </Swiper>
                <div className="add">
                    <div>
                        <motion.div
                        whileHover={{
                            zoom:1.1
                        }}
                         className="banner_image">
                            <img src={banner1} />
                        </motion.div>
                    </div>
                    <div>
                    <div>
                        <motion.div
                        whileHover={{
                            zoom:1.1
                        }}
                         className="banner_image">
                            <img src={banner2} />
                        </motion.div>
                    </div>
                    </div>
                    <div>
                    <div>
                        <motion.div
                        whileHover={{
                            zoom:1.1
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
