import React, { useState, useRef } from 'react'
import { MdArrowForwardIos } from "react-icons/md"
import "./style.css"
import movie from "../../assets/movie.jpg"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards, Pagination, Navigation, A11y } from "swiper";
import { motion, AnimatePresence } from 'framer-motion'
import { BiRightArrow, BiLeftArrow } from "react-icons/bi"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,

};

const Cinema = ({ setpassComponent }) => {
    const [skipvideo, setskipVideo] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [ishover, setishover] = useState(false)
    const myvid = useRef(null)
    const [videoend, setvideoEnd] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        myvid.current.play();
    };
    return (
        <motion.div className="cinema" >
            <div className="inside_cinema">
                <div className="for_cinema">
                    <h2 className="cinema_n">Films</h2>
                    <div>
                        <a style={{ letterSpacing: 1.3 }}>See all films (13) <MdArrowForwardIos color='black' size={13} /></a>
                    </div>
                </div>

            </div>
            <motion.div className="main_cinema" >
                <div className="movie_main">
                    <img src={movie} className="movie_img" alt="" />
                    <h3 className="">Watch best movies</h3>
                    <h2>The best in KsarHlel</h2>
                    <div className="for_swiper_cinema">
                        <motion.div className="leftarrowcinema"
                            whileHover={{
                                rotate: 10,
                            }}
                            whileTap={{
                                scale: 1.1
                            }}
                        >
                            <BiLeftArrow color='black' size={25} />
                        </motion.div>
                        <div className="cardsmovie">
                            <Swiper
                                effect={"cards"}
                                grabCursor={true}
                                modules={[EffectCards, Navigation]}
                                pagination={true}
                                className="cinemaSwiper"
                                navigation={{
                                    nextEl: ".rightarrowcinema",
                                    prevEl: ".leftarrowcinema",
                                }}
                            >
                                <SwiperSlide className="cinema_slide">
                                    <motion.div
                                        className="blured_div"
                                    >
                                        <a>Creed III</a>
                                    </motion.div>
                                </SwiperSlide>
                                <SwiperSlide className="cinema_slide">
                                    <motion.div
                                        className="blured_div"
                                    >
                                        <a>Jhon Wick 4</a>
                                    </motion.div>
                                </SwiperSlide>
                                <SwiperSlide className="cinema_slide">
                                    <motion.div
                                        className="blured_div"
                                    >
                                        <a>The nun</a>
                                    </motion.div>
                                </SwiperSlide>
                                <SwiperSlide className="cinema_slide">
                                    <motion.div
                                        className="blured_div"
                                    >
                                        <a>Ghoudwa</a>
                                    </motion.div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <motion.div className="rightarrowcinema"
                            whileHover={{
                                rotate: 10,
                            }}
                            whileTap={{
                                scale: 1.1
                            }}
                        >
                            <BiRightArrow color='black' size={25} />
                        </motion.div>

                    </div>
                    <motion.a
                        initial={{
                            opacity: 0,
                            y: -300,
                            rotate: 20,
                        }}
                        whileInView={{
                            opacity: 1,
                            rotate: 0,
                            y: 0,
                            transition:{
                                type:'spring',delay:0.5
                            }
                        }}
                        viewport={{once:"true"}}
                        whileHover={{
                            scale:1.1,
                        }}
                        className="explore">explore vox cinemas</motion.a>
                </div>
            </motion.div>

        </motion.div>
    )
}


export default Cinema;