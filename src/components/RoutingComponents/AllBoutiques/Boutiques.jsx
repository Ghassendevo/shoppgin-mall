import React, { useState } from 'react'
import style from "./boutiques.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import { SlArrowRight } from "react-icons/sl"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBoutiques } from '../../../redux/actions/getAlldata'
import { fetchBoutiques } from '../../../redux/reducers/boutiquesReducer'
import { getAllBoutiques } from '../../../redux/reducers/boutiquesReducer'

import { Skeleton } from '@mui/material'
import { FaVrCardboard } from "react-icons/fa"
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
    const boutiquesData = useSelector((state) => state.boutiques.data);
    const isloading = useSelector((state) => state.boutiques.loading);
    const [searchedValue, setSearchedValue] = useState("");
    useEffect(() => {
        dispatch(fetchBoutiques());
    }, [])
    const handleSearch = (e) => {
        setSearchedValue(e.target.value);
    }
    return (
        <div className={style.boutiques}>
            <div className={style.nav}>
                <a href="" className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a href="" className={style.active_nav}>Boutiques</a>
                <SlArrowRight size={12} />
                {navSelected !== "boutiques" && <a href="" className={style.active_nav}>{navSelected}</a>}
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
                    onClick={e => setNavSelected("cosmetiques")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    style={{ backgroundColor: navSelected == "cosmetiques" ? "#f2380c" : "white" }}
                    className={navSelected == "cosmetiques" ? style.href_nav_active : style.href_nav}>
                    <p>cosmetiques</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("chaussures")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    style={{ backgroundColor: navSelected == "chaussures" ? "#f2380c" : "white" }}
                    className={navSelected == "chaussures" ? style.href_nav_active : style.href_nav}>
                    <p>chaussures</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("maison")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    style={{ backgroundColor: navSelected == "maison" ? "#f2380c" : "white" }}
                    className={navSelected == "maison" ? style.href_nav_active : style.href_nav}>
                    <p>maison</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("mode femme")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    style={{ backgroundColor: navSelected == "mode femme" ? "#f2380c" : "white" }}
                    className={navSelected == "mode femme" ? style.href_nav_active : style.href_nav}>
                    <p>mode femme</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("autres")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    style={{ backgroundColor: navSelected == "autres" ? "#f2380c" : "white" }}
                    className={navSelected == "autres" ? style.href_nav_active : style.href_nav}>
                    <p>autres</p>
                </motion.div>
            </div>
            <div className={style.for_search_boutiques}>
                <motion.input
                    initial={{
                        outline: "none",
                    }}
                    whileFocus={{
                        y: -10,
                        border: "1px solid #f2380c",
                    }}
                    type="text" onChange={e => handleSearch(e)} className={style.input_search} placeholder='Search for boutiques' />
            </div>
            {isloading && <MainBoutiquesSkeleton /> || <MainBoutiques type={navSelected} boutiquesData={boutiquesData} searching={searchedValue} />}
        </div>
    )
}

const boutiqueVariant = {
    initial: {
        opacity: 0,
        y: -50,
    },
    
    whileHover: {
        scale: 1.03,
        rotate: 1,
        transition: {
            type: "spring"
        }
    },
    whileinview: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring', stiffness: 100
        }
    },
    exit: {
        y: -200,

    }
}
const MainBoutiquesSkeleton = () => {
    return (
        <>
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={"70%"} />
            <div className={style.liste_all}>
                <Skeleton variant="rectangular" width={"50vh"} height={"30vh"} />
                <Skeleton variant="rectangular" width={"50vh"} height={"30vh"} />
                <Skeleton variant="rectangular" width={"50vh"} height={"30vh"} />
            </div>
        </>
    )
}
const MainBoutiques = ({ type, boutiquesData, searching }) => {
    const [filteredValues, setFilteredValue] = useState([])
    useEffect(() => {
        if (searching !== "") {
            setFilteredValue(boutiquesData.filter((a, b) => { return a.titleBoutique.includes(searching) }))
        } else {
            if (type == "boutiques") { setFilteredValue(boutiquesData) }
            else if (type == "accessoires") {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            } else if (type == "mode enfant") {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            } else if (type == "cosmetiques") {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            } else if (type == "chaussures") {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            } else if (type == "maison") {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            } else if (type == "mode femme") {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            } else if (type == "mode homme") {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            }
        }
    }, [type, searching])
    return (
        <div className={style.for_fetched_boutiques}>
            <div className={style.nombre_boutiques}>
                {filteredValues.length} résultats
            </div>

            <div className={style.mainList}>
                <AnimatePresence>
                    {filteredValues == "" ? (
                        <div className={style.nothing_to_show}>
                            <FaVrCardboard size={130} />
                            <h3>Nothing to show</h3>
                        </div>
                    ) : (
                        filteredValues.map((value, index) => {
                            return (

                                <motion.div
                                    variants={boutiqueVariant}
                                    initial="initial"
                                    exit="exit"
                                    whileHover="whileHover"
                                    whileInView="whileinview"
                                    className={style.one_boutique}>
                                    {value.logo_boutique}
                                    <img src={value.logoBoutique} width={220} alt="" />
                                    <h3>{value.type_boutique}</h3>
                                </motion.div>

                            )
                        }
                        )
                    )
                    }
                </AnimatePresence>
            </div>
        </div>
    )

}
export default Boutiques