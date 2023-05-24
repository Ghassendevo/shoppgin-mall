import React from 'react'
import "./style.css"
import pizza from "../../assets/pizza.png"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Pagination, Navigation, A11y, Autoplay } from "swiper";
import hamburger from "../../assets/hamburger.png"
import { motion } from 'framer-motion';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi"
import masmoudi from "../../assets/masmoudi.png"
import { useEffect } from 'react';
import { fetchRestaurants } from '../../redux/reducers/restaurantsReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Food = () => {
    const dispatch = useDispatch();
    const restaurantData = useSelector((state) => state.restaurants.data);
    const isloading = useSelector((state) => state.restaurants.loading)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [])
    return (
        <div className='food' id='piezza'>
            <h2>food piezza</h2>
            <h3>Quand le goût et les saveurs se réunissent !</h3>
            <img src={pizza} className="pizza" alt="" />
            <div className="piezzadiv" >
                <Swiper
                    grabCursor={true}
                    modules={[Autoplay, Navigation, Pagination]}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    draggable={true}
                    className="piezzaSwiper"
                    navigation={{
                        nextEl: ".rightarrowpiezza",
                        prevEl: ".leftarrowpiezza",
                    }}
                >
                    {
                        restaurantData.map((value, index) => {
                            return (
                                <SwiperSlide className="slide_piezza" onClick={()=>navigate(`/restaurants/${value.titleRestaurant}`,{state:value})}>
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
                                        src={value.logoRestaurant} alt="" className='img_piezza' />
                                    <div className="pizza_info">
                                        <p>{value.type}</p>
                                        <h4>{value.titleRestaurant}</h4>
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
                            )
                        })
                    }
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