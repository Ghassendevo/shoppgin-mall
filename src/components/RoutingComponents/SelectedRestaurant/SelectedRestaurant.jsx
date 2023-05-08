import React from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import style from "./SelectedRestaurant.module.css"
import { SlArrowRight } from "react-icons/sl"
import { motion } from 'framer-motion';
import { AiOutlineFieldTime, AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const SelectedRestaurant = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const Allrestaurants = useSelector((state) => state.restaurants.data)
    const restaurantData = location.state;

    return (
        <div className={style.selectedRestaurant}>
            <div className={style.nav}>
                <a onClick={e => navigate("/")} className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a onClick={e => navigate("/restaurants")} className={style.nav_not_active}>Restaurants</a>
                <SlArrowRight size={12} />
                <a className={style.active_nav}>{restaurantData.titleRestaurant}</a>
            </div>
            <div className={style.foroncerestaurant}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -30,
                    }}
                    animate={{
                        opacity: [0.1, 0.3, 0.6, 0.8, 1],
                        y: 0,
                        transition: {
                            type: "spring", duration: 0.5, stiffness: 200
                        }
                    }}
                    whileHover={{
                        y: -5,
                    }}
                    className={style.leftmainrestaurant}>
                    <img src={restaurantData.logoRestaurant} width={220} alt="" />
                    <h3>{restaurantData.type}</h3>
                </motion.div>
                <div className={style.rightmaindiv}>
                    <motion.p initial={{ opacity: 0, y: 10, }} animate={{ opacity: 1, y: 0, }}  >{restaurantData.titleRestaurant} : {restaurantData.type}</motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className={style.desc}>{restaurantData.description}</motion.p>
                </div>

            </div>
            <div className={style.restaurantInfo}>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -200
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    whileHover={{
                        rotate: 2
                    }}
                    className={style.horaire}>
                    <p>Horaire d'ouverture</p><AiOutlineFieldTime size={20} style={{ marginLeft: 5 }} />:
                    <p className={style.ouverturetime}>{restaurantData.timeOuverture} </p>à  <p className={style.fermeturetime}>{restaurantData.timeFermeture}</p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    whileHover={{
                        rotate: 2
                    }}
                    className={style.horaire}>
                    <p>Contact</p><AiOutlinePhone size={20} style={{ marginLeft: 5 }} />:
                    <p className={style.ouverturetime}>+216 {restaurantData.contactRestaurant} </p>
                </motion.div>
                <motion.a
                    initial={{
                        opacity: 0,
                        y: -200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    whileHover={{
                        rotate: 5
                    }}
                    href="" className={style.contactrestaurant}>
                    <AiOutlineFacebook size={30} />
                </motion.a>
                <motion.a
                    initial={{
                        opacity: 0,
                        y: -200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    whileHover={{
                        rotate: 5
                    }}
                    href="" className={style.contactrestaurant}>
                    <AiOutlineInstagram size={30} />
                </motion.a>
            </div>
            <div className={style.similar}>
                <h3>Enseignes similaires </h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={90}
                    navigation={{
                        nextEl:'.swiper_button_next_unique'
                    }}
                    modules={[Navigation]}

                    className={style.myswiper}
                >
                    {Allrestaurants.map((value, index) => {
                        return (
                            <SwiperSlide className={style.swiperSlide}><img src={value.logoRestaurant} /></SwiperSlide>
                        )
                    })}
                    <div className={style.swiper_button_next_unique}>sdfdsfd</div>
                </Swiper>
            </div>
        </div>
    )
}

export default SelectedRestaurant