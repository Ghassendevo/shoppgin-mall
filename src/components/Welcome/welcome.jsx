import React from 'react'
import "./style.css"

import { motion } from 'framer-motion'
import mall1 from "../../assets/mall1.png"
import mall2 from "../../assets/mall2.jpg"
import mall3 from "../../assets/mall3.jpg"
const btnVariant = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 13px rgb(226,154,82)",
    transition: {
      duration: 0.2,
    }
  },
  press: {
    scale: 1
  }

}
const nameVariant = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring", stiffness: 50, delay: 1
    }
  },
  hover: {
    fontSize: "30px",
  }
}
const welcomeVariant = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    originX: 0,
    originY: 0,
    transition: { duration: 0.4, delay: 0.5 }
  }
}
const divVariant = {
  initial: {
    opacity: 0,
    x: "40vh"
  },
  show: {
    opacity: 1,
    x: "0",
    transition: {
      type: "spring", stiffness: 60, when: "beforeChildren"
    }
  }
}
const imageVariant = {
  intitial: {
    boxShadow: "0px 0px 20px rgb(142, 136, 136)",
  },
  animate: {
    boxShadow: "0px 0px 20px #f9a38f",
    rotate: '3deg',
    scale: 1.1,
    transition: {
      duration: 0.4,
    }
  },
  // loop:{
  //   boxShadow: "0px 0px 80px #f9a38f",
  //   transition:{
  //     repeat:Infinity,duration:1
  //   }
  // }
}
export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="containerWelcome">
        <motion.div
          variants={divVariant}
          initial="initial"
          whileInView="show"
          viewport={{ once: true }}
          className="outletone">
          <motion.h3
            variants={welcomeVariant}
            initial="initial"
            whileInView="show"
            viewport={{ once: true }}
            className="welcometo">Welcome To</motion.h3>
          <h3 className="getwaymall">getway mall</h3>
          <div style={{ display: 'flex', alignItems: "center", width: "600px" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: "200px" }}>
              <div className="yellow_line"></div> <div className="yellow_line" style={{ width: "20px" }}></div>
            </div>
            <motion.h1
              variants={nameVariant}
              initial="initial"
              viewport={{ once: true }}
              whileInView="show"
              whileHover="hover"
              className="mallname">AT KSARHLEL MALL</motion.h1>
          </div><br></br>
          <p className="parag">Mall of Sousse - Accueil FOOD PIAZZA Quand le goût et les saveurs se réunissent ! Voir tous les restaurants amusement & emotion en cinema en ce moment Téléchargez notre, oir tous les restaurants amusement & emotion en cinema en ce moment Téléchargez notr</p>
          <br />
          <motion.button
            variants={btnVariant}
            whileTap="press"
            whileHover="hover"

            className="contactus_btn">contact us</motion.button>
        </motion.div>
        <div className="outlettwo">
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            animate="loop"
            src={mall1} alt="" className="welcome_img" />
          <motion.img
            variants={imageVariant}
            whileHover="animate"
            src={mall2} alt="" className="welcome_img" />
          <motion.img
            src={mall3} alt="" className="welcome_img" />
        </div>
      </div>
    </div>
  )
}
