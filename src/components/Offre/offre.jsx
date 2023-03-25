import React from 'react'
import "./offre.css";
import { MdArrowForwardIos } from "react-icons/md"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { animate, color, motion } from 'framer-motion'
import { CiShoppingTag } from "react-icons/ci"
const variantOffre = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring", delay: 0.5,
    }
  },
  press: {
    scale: 1.1,
    transition: {
      type: "tween",
    }
  },
  hover:{
    y:-4,
  }
}
const Offre = () => {
  return (
    <div className="offre">
      <div className="inside_news">
        <div className="for_news">
          <h2 className="news_n">Offre</h2>
          <div>
            <a style={{ letterSpacing: 1.3 }}>See all offre (13) <MdArrowForwardIos color='black' size={13} /></a>
          </div>
        </div>
        <div className='main_in_offre'>
          <motion.a viewport={{ once: true }}
          whileHover="hover"
          variants={variantOffre} initial="initial" whileInView="animate" className="offre_main">
            <AiFillHeart className="icon" color="#d0d0d0" size={25} />
            <div className="logo_offre">
              <img src="https://th.bing.com/th/id/OIP._EEpgxbYYp0zpEGfXcdrAgHaHa?pid=ImgDet&w=960&h=960&rs=1" alt="" />
              <br></br><h3>DE NOUVILLE</h3>

            </div>
            <div className="offre_price">
              <div>
                <p>-15%</p>
                <p>sur une sélection d'articles*</p>
              </div>
              <a href="" className="news_linke">j'en profite</a>
            </div>
          </motion.a>
          <motion.div viewport={{ once: true }}
           variants={variantOffre} initial="initial" whileInView="animate"
           whileHover="hover"
           className="selection_offre">

            <div className="first_offre">
              <CiShoppingTag size={50} />
            </div>
            <div className="second_offre">
              <h3>selection d'offres</h3>
              <p>Profitez d'une sélection d'offres personnalisées en vous connectant.</p>
            </div>
            <div className="third_offre">
              <button className="offre_se_connecter">Se connecter</button>
              <a href="">Pas encore de compte ? je m'inscris</a>
            </div>
          </motion.div>
          <motion.a viewport={{ once: true }} variants={variantOffre} 
          initial="initial" whileInView="animate" 
          whileHover="hover"
          className="offre_main">
            <AiFillHeart className="icon" color="#d0d0d0" size={25} />
            <div className="logo_offre">
              <img src="https://th.bing.com/th/id/OIP._EEpgxbYYp0zpEGfXcdrAgHaHa?pid=ImgDet&w=960&h=960&rs=1" alt="" />
              <br></br><h3>DE NOUVILLE</h3>

            </div>
            <div className="offre_price">
              <div>
                <p>-15%</p>
                <p>sur une sélection d'articles*</p>
              </div>
              <a href="" className="news_linke">j'en profite</a>
            </div>
          </motion.a>
        </div>

      </div>
    </div>
  )
}

export default Offre