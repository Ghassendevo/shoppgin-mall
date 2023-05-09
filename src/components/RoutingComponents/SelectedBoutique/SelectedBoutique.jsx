import React, { useState } from 'react'
import style from "./SelectedBoutique.module.css"
import { SlArrowRight } from "react-icons/sl"
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AiOutlineFieldTime, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { FaFacebookSquare } from "react-icons/fa"
import { useSelector } from 'react-redux';
const SelectedBoutique = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const AllBoutiques = useSelector((state)=> state.boutiques.data)
    const boutiqueData = location.state;
    const navigateToSelectedBoutique = (e)=>{
        navigate(`/shops/${e.titleBoutique}`,{state:e})
    }
    return (
        <div className={style.selectedBoutique}>
            <div className={style.nav}>
                <a onClick={e => navigate("/")} className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a onClick={e => navigate("/boutiques",{state:"boutiques"})} className={style.nav_not_active}>Boutiques</a>
                <SlArrowRight size={12} />
                <a className={style.active_nav}>{boutiqueData.titleBoutique}</a>
            </div>
            <div className={style.foronceboutique}>
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
                    className={style.leftmainboutique}>
                    <img src={boutiqueData.logoBoutique} width={220} alt="" />
                    <h3>{boutiqueData.type_boutique}</h3>
                </motion.div>
                <div className={style.rightmaindiv}>
                    <motion.p initial={{ opacity: 0, y: 10, }} animate={{ opacity: 1, y: 0, }}  >{boutiqueData.titleBoutique} : {boutiqueData.type_boutique}</motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className={style.desc}>{boutiqueData.descriptionBoutique}</motion.p>
                </div>

            </div>
            <div className={style.boutiqueInfo}>
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
                    <p className={style.ouverturetime}>{boutiqueData.timeouverture} </p>à  <p className={style.fermeturetime}>{boutiqueData.timefermeture}</p>
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
                    <p className={style.ouverturetime}>+216 {boutiqueData.contactBoutique} </p>
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
                    href="" className={style.contactboutique}>
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
                    href="" className={style.contactboutique}>
                    <AiOutlineInstagram size={30} />
                </motion.a>
            </div>
            <div className={style.similar}>
                <h3>Enseignes similaires </h3>
                <Swiper
                slidesPerView={3}
                spaceBetween={90}
                navigation={true} 
                modules={[Navigation]}
              
                className={style.myswiper}
                >
                    {AllBoutiques.map((value,index)=>{
                        return (
                            <SwiperSlide 
                            onClick={()=>navigateToSelectedBoutique(value)}
                            className={style.swiperSlide}><img src={value.logoBoutique} /></SwiperSlide>
                        )
                    })}
                    <div className={style.swiper_button_next_unique}>sdfdsfd</div>
                </Swiper>
            </div>
        </div>
    )
}

export default SelectedBoutique