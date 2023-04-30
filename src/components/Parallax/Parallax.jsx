import React from 'react'
import { Parallax } from 'react-parallax';
import parallaxbackground from "../../assets/parallax-background.jpg"
import "./parallax.css"
import { motion } from 'framer-motion';
const Parallax_ = () => {
    return (
        <div className="parallax">
            <Parallax blur={2} bgClassName="back_par" bgImage={parallaxbackground} className="parallax_div" bgImageAlt="the cat" strength={400}>
                <div className="inside_parallax">
                    <motion.h1
                    initial={{
                        rotate:0
                    }}
                    whileHover={{
                        rotate:5,
                    }}
                    animate={{
                        scale:1.01,
                        transition:{
                            duration:1.5,
                            repeat:Infinity,
                        }
                    }}
                    >KsarHlel Mall</motion.h1>
                </div>
            </Parallax>
        </div>
    )
}

export default Parallax_