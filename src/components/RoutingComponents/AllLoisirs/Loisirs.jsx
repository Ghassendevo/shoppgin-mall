import React, { useState } from 'react'
import style from "./Loisirs.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import { SlArrowRight } from "react-icons/sl"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLoisirs } from '../../../redux/reducers/loisirReducer'

import { fetchLoisir } from '../../../redux/reducers/loisirReducer'

import { Skeleton } from '@mui/material'
import { FaVrCardboard } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
const buttonVariants = {
    whilehover: {
        y: -10,
        rotate: 1.5,
        cursor: "pointer"
    }
}

const AllLoisirs = () => {
    const [navSelected, setNavSelected] = useState("tous");//
    const dispatch = useDispatch();
    const restaurantsData = useSelector((state) => state.loisirs.data);
    const isloading = useSelector((state) => state.loisirs.loading);
    const [searchedValue, setSearchedValue] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchLoisir());
    }, [])
    const handleSearch = (e) => {
        setSearchedValue(e.target.value);
    }
    return (
        <div className={style.boutiques}>
            <div className={style.nav}>
                <a onClick={e => navigate("/")} href="" className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a onClick={e => navigate("/loisirs")} href="" className={style.active_nav}>Loisirs</a>
                <SlArrowRight size={12} />
                {navSelected !== "loisirs" && <a href="" className={style.active_nav}>{navSelected}</a>}
            </div>
            <div className={style.liste_all}>
                <motion.div
                    onClick={e => setNavSelected("tous")}
                    variants={buttonVariants}
                    whileHover={buttonVariants.whilehover}
                    className={navSelected == "tous" ? style.href_nav_active : style.href_nav}>
                    <p>TOUS LES LOISIRS</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("loisir")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    className={navSelected == "loisir" ? style.href_nav_active : style.href_nav}>
                    <p>loisir</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("culture")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    className={navSelected == "culture" ? style.href_nav_active : style.href_nav}>
                    <p>culture</p>
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
                    type="text" onChange={e => handleSearch(e)} className={style.input_search} placeholder='Search for loisirs' />
            </div>
            {isloading && <MainRestaurantsSkeleton /> || <MainRestaurants type={navSelected} restaurantsData={restaurantsData} searching={searchedValue} />}
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
const MainRestaurantsSkeleton = () => {
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
const MainRestaurants = ({ type, restaurantsData, searching }) => {
    const [filteredValues, setFilteredValue] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        if (searching !== "") {
            setFilteredValue(restaurantsData.filter((a, b) => { return a.titleLoisir.includes(searching) }))
        } else {
            if (type == "tous") { setFilteredValue(restaurantsData) }
            else if (type == "loisir") {
                setFilteredValue(restaurantsData.filter((a, b) => { return a.typeLoisir == type }))
            } else if (type == "culture") {
                setFilteredValue(restaurantsData.filter((a, b) => { return a.typeLoisir == type }))
            } 
        }
    }, [type, searching])
    //methodes
    const navigateToSelectedBoutique = (e) => {
        navigate(`/loisirs/${e.titleLoisir}`, { state: e });
    }
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
                                    onClick={e => navigateToSelectedBoutique(value)}
                                    variants={boutiqueVariant}
                                    initial="initial"
                                    exit="exit"
                                    whileHover="whileHover"
                                    whileInView="whileinview"
                                    className={style.one_boutique}>
                                    {value.logo_boutique}
                                    <img src={value.logoLoisir} width={220} alt="" />
                                    <h3>{value.titleLoisir}</h3>
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
export default AllLoisirs