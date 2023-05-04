import React, { useState } from 'react'
import style from "./boutiques.module.css"
import { motion } from 'framer-motion'
import { SlArrowRight } from "react-icons/sl"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBoutiques } from '../../../redux/actions/getAlldata'
import { getAllBoutiques } from '../../../redux/reducers/boutiquesReducer'
const buttonVariants = {
    whilehover: {
        y: -10,
        rotate: 1.5,
        cursor: "pointer"
    }
}

const Boutiques = () => {
    const [navSelected, setNavSelected] = useState("boutiques");//
    const dispatch = useDispatch();
    const boutiquesData = useSelector((state)=>state.boutiques.data);
    useEffect(()=>{
          dispatch(getBoutiques());
    },[])
    return (
        <div className={style.boutiques}>
            <div className={style.nav}>
                <a href="" className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a href="" className={style.active_nav}>Boutiques</a>
                <SlArrowRight size={12} />
                {navSelected!=="boutiques" && <a href="" className={style.active_nav}>{navSelected}</a>}
            </div>
            <div className={style.liste_all}>
                <motion.div
                    onClick={e => setNavSelected("boutiques")}
                    variants={buttonVariants}
                    style={{ backgroundColor: navSelected == "boutiques" ? "#f2380c" : "white" }}
                    whileHover={buttonVariants.whilehover}
                    className={navSelected == "boutiques" ? style.href_nav_active : style.href_nav}>
                    <p>TOUTES LES BOUTIQUES</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("accessoires")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    style={{ backgroundColor: navSelected == "accessoires" ? "#f2380c" : "white" }}
                    className={navSelected == "accessoires" ? style.href_nav_active : style.href_nav}>
                    <p>accessoires</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("mode enfant")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    style={{ backgroundColor: navSelected == "mode enfant" ? "#f2380c" : "white" }}
                    className={navSelected == "mode enfant" ? style.href_nav_active : style.href_nav}>
                    <p>mode enfant</p>
                </motion.div>
                <motion.div 
                onClick={e=>setNavSelected("cosmetiques")}
                variants={buttonVariants}
                whileHover="whilehover"
                style={{backgroundColor:navSelected=="cosmetiques" ? "#f2380c" : "white"}}
                className={navSelected=="cosmetiques" ? style.href_nav_active : style.href_nav}>
                   <p>cosmetiques</p>
                </motion.div>
                <motion.div 
                onClick={e=>setNavSelected("chaussures")}
                variants={buttonVariants}
                whileHover="whilehover"
                style={{backgroundColor:navSelected=="chaussures" ? "#f2380c" : "white"}}
                className={navSelected=="chaussures" ? style.href_nav_active : style.href_nav}>
                   <p>chaussures</p>
                </motion.div>
                <motion.div 
                onClick={e=>setNavSelected("maison")}
                variants={buttonVariants}
                whileHover="whilehover"
                style={{backgroundColor:navSelected=="maison" ? "#f2380c" : "white"}}
                className={navSelected=="maison" ? style.href_nav_active : style.href_nav}>
                   <p>maison</p>
                </motion.div>
                <motion.div 
                onClick={e=>setNavSelected("mode femme")}
                variants={buttonVariants}
                whileHover="whilehover"
                style={{backgroundColor:navSelected=="mode femme" ? "#f2380c" : "white"}}
                className={navSelected=="mode femme" ? style.href_nav_active : style.href_nav}>
                   <p>mode femme</p>
                </motion.div>
                <motion.div 
                onClick={e=>setNavSelected("autres")}
                variants={buttonVariants}
                whileHover="whilehover"
                style={{backgroundColor:navSelected=="autres" ? "#f2380c" : "white"}}
                className={navSelected=="autres" ? style.href_nav_active : style.href_nav}>
                   <p>autres</p>
                </motion.div>
            </div>
        </div>
    )
}

export default Boutiques