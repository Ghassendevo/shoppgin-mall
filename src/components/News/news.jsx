import React from 'react'
import "./news.css"
import { MdArrowForwardIos } from "react-icons/md"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { color, motion } from 'framer-motion'
const News = () => {
    return (
        <div className="news">
            <div className="inside_news">
                <div className="for_news">
                    <h2 className="news_n">News</h2>
                    <div>
                        <a style={{ letterSpacing: 1.3 }}>See all news (13) <MdArrowForwardIos color='black' size={13} /></a>
                    </div>
                </div>
                <div className='main'>
                    <div className="child_main">
                        <motion.div 
                       initial={{
                        opacity:0,
                        x:-600,
                       }}
                        whileHover={{
                            y:-10,
                            transition:{
                                duration:0.2
                            }
                        }}
                        whileTap={{
                            scale:1.02
                        }}
                        whileInView={{
                            opacity:1,
                            x:0,
                            transition:{
                                type:"spring",delay:0.5,stiffness:100
                            }
                        }}
                        className="container_news" >
                            <div className="image_container" >
                                <div style={{ textAlign: 'right', display: 'flex', justifyItems: "right" }}>
                                    <motion.div 
                                    whileHover={
                                        {
                                            scale:1.1
                                        }
                                    }
                                    whileTap={{
                                        scale:1
                                    }}
                                    className="fav_btn">
                                        <AiFillHeart className="icon" color="#d0d0d0" size={20} />
                                    </motion.div>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'25vh',alignItems:'center'}}>
                                <h3 style={{ textTransform: "uppercase", textAlign: "center", fontWeight: 300, paddingTop: 60, fontSize: 22 }}>consigne à bagage</h3>
                                <motion.a 
                                whileHover={{
                                    backgroundColor:"#F5F5F5",
                                }}
                                whileTap={{
                                    scale:1.1,
                                    transition:{
                                        duration:0.3
                                    }
                                }}
                                
                                 className="news_link">en savoir plus</motion.a>
                            </div>
                        </motion.div>
                      
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News