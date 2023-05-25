import React, { useState } from 'react'
import "./HeaderMainStyle.css"
import { CiHeart, CiUser, CiShoppingCart, CiPercent, CiShop, CiPizza } from "react-icons/ci"
import { motion, useViewportScroll, useTransform, transform, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineShop, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai"
import { lineHeight } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RiArrowDropDownLine } from "react-icons/ri"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { GiFilmSpool } from "react-icons/gi"
import { GrBusinessService } from "react-icons/gr"
import { BsShop, BsBinoculars } from "react-icons/bs"

import logo from "../../assets/mallLogo.png"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBoutiques } from '../../redux/reducers/boutiquesReducer';
import { fetchRestaurants } from '../../redux/reducers/restaurantsReducer';
import { fetchLoisir } from '../../redux/reducers/loisirReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Chip } from '@mui/material';
const menuVariant = {
    initial: {
        opacity: 0,
        height: 0,
    },
    animate: {
        opacity: 1,
        height: '55vh',
    },
    animate2: {
        opacity: 1,
        height: '30vh',
    },
    exit: {
        height: 0,
        opacity: 0,
    }
};

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
export const HeaderMain = () => {
    const [defaultLang, setDefaultLang] = useState("English")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [boutiquesMenu, setBoutiquesMenu] = useState(false);
    const [menuHovererd, setMenuHovered] = useState(false)
    const [restaurantMenu, setRestaurantMenu] = useState(false)
    const [loisirMenu, setLoisirMenu] = useState(false)
    const navigate = useNavigate();
    const [showSearch, setshowsearch] = useState(false)
    const open = Boolean(anchorEl);
    //
    const dispatch = useDispatch();
    const boutiqueData = useSelector((state) => state.boutiques.data)
    const isloadingboutique = useSelector((state) => state.boutiques.loading)
    //
    const restaurantData = useSelector((state) => state.restaurants.data)
    const isloadingrestaurant = useSelector((state) => state.restaurants.loading)
    //
    const loisirData = useSelector((state) => state.loisirs.data)
    const isloadingloisir = useSelector((state) => state.loisirs.loading)
    //
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (e) => {
        setAnchorEl(null);
        setDefaultLang(e)
    };
    const [searchValueBoutique, setsearchValueBoutique] = useState([]);
    const [searchValueRestaurant, setsearchValueRestaurant] = useState([]);
    const [searchValueLoisir, setsearchValueLoisir] = useState([]);
    const [isloggedin, setisloggedin] = useState(false)
    useEffect(() => {
        let a = localStorage.getItem("user");
        if (a) setisloggedin(true)
    }, [])
    const exitMenuBoutique = () => {
        setTimeout(() => {
            alert(menuHovererd)
            if (menuHovererd == false) setBoutiquesMenu(false)
        }, 1000);
    }
    const shoppingWishList = () => {

    }
    const loginClick = () => {

    }
    const itemsClick = () => {

    }
    const logout = () => {
        localStorage.clear();
        navigate("/login")
    }
    const login = () => {
        navigate("/login")
    }
    const handleSearch = (e) => {
        const value = e.target.value;
        const filtereddata = boutiqueData.filter((a) => { return a.titleBoutique.includes(value) })
        setsearchValueBoutique(filtereddata);
        console.log(searchValueBoutique)
        //
        const filtereddata2 = restaurantData.filter((a, b) => { return a.titleRestaurant.includes(value) })
        setsearchValueRestaurant(filtereddata2);
        //
        const filtereddata3 = loisirData.filter((a, b) => { return a.titleLoisir.includes(value) })
        setsearchValueLoisir(filtereddata3);
    }
    const navigateToSelectedRestaurant = (e) => {
        setshowsearch(false)
        navigate(`/restaurants/${e.titleRestaurant}`, { state: e });

    }
    const navigateToSelectedBoutique = (e) => {
        setshowsearch(false)
        navigate(`/shops/${e.titleBoutique}`, { state: e });
    }
    const navigateToSelectedLoisir = (e) => {
        navigate(`/loisirs/${e.titleLoisir}`, { state: e });
    }
    return (
        <>
            <div className="HeaderMain" id='home'>
                <div style={{ marginLeft: 40 }}>
                    <img onClick={() => navigate("/")} src={logo} width={"190 px"} height={"60px"} style={{ cursor: "pointer" }} />
                </div>
                <div >
                    <div className="Search">
                        <input type="text" onClick={e => (setshowsearch(true), dispatch(fetchBoutiques()), dispatch(fetchRestaurants()), dispatch(fetchLoisir()))} placeholder='Search Product here...' />
                        {/* <AiOutlineClose onClick={() => setsearchValue("")} style={{ cursor: "pointer" }} size={14} /> */}
                        <button>
                            <AiOutlineSearch color='white' style={{ cursor: "pointer" }} size={18} />
                        </button>
                    </div>
                </div>
                <div style={{ paddingRight: 20 }}>
                    <div className="for_menu">
                        <Button
                            style={{ color: "black", fontWeight: 400, textAlign: 'center', width: 100 }}
                            className="lang"
                            id="basic-button"
                            variant='text'
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            color="primary"

                        >
                            {defaultLang} <RiArrowDropDownLine color='black' size={18} />
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={() => handleClose(defaultLang)}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={e => handleClose("arabic")}>Arabic</MenuItem>
                            <MenuItem onClick={e => handleClose("frensh")}>Frensh</MenuItem>
                            <MenuItem onClick={e => handleClose("english")}>English</MenuItem>
                        </Menu>
                    </div>
                    <div className="for_fav" onMouseEnter={() => setBoutiquesMenu("icon_hover")} onMouseLeave={() => exitMenuBoutique} onClick={() => shoppingWishList}>
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "tween", duration: 0.17
                            }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <CiShop color='#ee2d01' style={{ cursor: "pointer" }} size={45} />
                        </motion.div>
                        <p style={{ fontSize: 13, cursor: "pointer", lineHeight: 1.5 }}>Shopping<br></br> Wishlist</p>
                    </div>
                    <div className="for_login" onClick={loginClick}>
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                            }}
                            transition={{
                                type: "tween", duration: 0.17
                            }}
                            whileTap={{ scale: 0.9 }}
                            onMouseEnter={() => setRestaurantMenu(true)}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <CiPizza color='#ee2d01' style={{ cursor: "pointer" }} size={45} />
                        </motion.div>
                        <p style={{ fontSize: 13, cursor: "pointer", lineHeight: 1.5 }}>Food <br></br>Wishlist</p>
                    </div>
                    <div className="for_items" onClick={itemsClick}>
                        <motion.div
                            whileHover={{
                                rotateY: 180,
                            }}
                            transition={{
                                type: "tween", duration: 0.17
                            }}
                            whileTap={{ scale: 0.9 }}
                            onMouseEnter={() => setLoisirMenu(true)}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <BsBinoculars color='#ee2d01' style={{ cursor: "pointer", color: "#ee2d01" }} size={45} />
                        </motion.div>
                        <p style={{ fontSize: 13, cursor: "pointer", lineHeight: 1.5 }}>Loisir <br></br>culture</p>
                    </div>

                </div>
            </div>
            <div className="navigationmenu">
                <div className="navigone">
                    <div>
                        {isloggedin && <Chip label="Log out" variant="outlined" onClick={e => logout()} /> || <Chip label="Log in" variant="outlined" onClick={e => login()} />}
                    </div>
                    <div className="line">
                    </div>
                    <div>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            href="/#landing" className="nav_li">Home</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            href="/#news" className="nav_li">News</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            href="/#offre" className="nav_li">Offre</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            href="/#marque" className="nav_li">Marques</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            href="/#pathé" className="nav_li">Pathé</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            href="/#piezza" className="nav_li">Piezza</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            href="/#service" className="nav_li">Services</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}

                            onClick={e => navigate("/plan")} className="nav_li">Plan</motion.a>
                    </div>
                </div>
                <div className="navigtwo">
                    <CiPercent color="#fe5730" size={20} />
                    <p>Offer Zone Or Discount
                    </p>
                </div>
            </div>
            <AnimatePresence>
                {boutiquesMenu && <motion.div
                    variants={menuVariant}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onMouseEnter={() => setMenuHovered(true)}
                    onMouseLeave={() => (setBoutiquesMenu(false), setMenuHovered(false))}
                    className="menuBoutiques">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 200,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.1, when: 'afterParent'
                            }
                        }}
                        className="inside_menuboutiques">
                        <div className="inside_menu_boutiques_left">
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "boutiques" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>toutes les boutiques</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "mode homme" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>mode homme</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "mode femme" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>mode femme</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "mode enfant" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>mode enfants</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer", scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "chaussures" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>chaussures</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer", scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "cosmetiques" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>cosmetiques</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer", scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "accessoires" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>accessoires</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer", scale: 1.1,
                                }}
                                onClick={() => (navigate("/boutiques", { state: "maison" }), setBoutiquesMenu(false))}
                                className="menu_container">
                                <p>maisons</p>
                            </motion.div>
                        </div>
                        <div className="inside_menu_boutiques_right">
                            <img src={logo} alt="" />
                        </div>
                    </motion.div>
                </motion.div>}
                {restaurantMenu && <motion.div
                    variants={menuVariant}
                    initial="initial"
                    animate="animate2"
                    exit="exit"
                    onMouseEnter={() => (setLoisirMenu(false), setBoutiquesMenu(false), setRestaurantMenu(true))}
                    onMouseLeave={() => (setRestaurantMenu(false), setMenuHovered(false))}
                    className="menuRestaurant">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 200,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.1, when: 'afterParent'
                            }
                        }}
                        className="inside_menuboutiques">
                        <div className="inside_menu_boutiques_left">
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/restaurants", { state: "restaurants" }), setRestaurantMenu(false))}
                                className="menu_container">
                                <p>tous les restaurants</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/restaurants", { state: "fast food" }), setRestaurantMenu(false))}
                                className="menu_container">
                                <p>fast food</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/restaurants", { state: "cafe" }), setRestaurantMenu(false))}
                                className="menu_container">
                                <p>café</p>
                            </motion.div>

                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer", scale: 1.1,
                                }}
                                onClick={() => (navigate("/restaurants", { state: "patisserie" }), setRestaurantMenu(false))}
                                className="menu_container">
                                <p>patisserie</p>
                            </motion.div>

                        </div>
                        <div className="inside_menu_boutiques_right">
                            <img src={logo} alt="" />
                        </div>
                    </motion.div>
                </motion.div>}
                {loisirMenu && <motion.div
                    variants={menuVariant}
                    initial="initial"
                    animate="animate2"
                    exit="exit"
                    onMouseEnter={() => (setRestaurantMenu(false), setBoutiquesMenu(false), setLoisirMenu(true))}
                    onMouseLeave={() => (setLoisirMenu(false), setMenuHovered(false))}
                    className="menuRestaurant">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 200,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                delay: 0.1, when: 'afterParent'
                            }
                        }}
                        className="inside_menuboutiques">
                        <div className="inside_menu_boutiques_left">
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/loisirs", { state: "tous" }), setLoisirMenu(false))}
                                className="menu_container">
                                <p>tous les loisirs</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/loisirs", { state: "culture" }), setLoisirMenu(false))}
                                className="menu_container">
                                <p>culture</p>
                            </motion.div>
                            <motion.div
                                initial={{ border: "none" }}
                                whileHover={{
                                    border: "1px solid rgb(240, 240, 240)",
                                    cursor: "pointer",
                                    scale: 1.1,
                                }}
                                onClick={() => (navigate("/loisirs", { state: "loisir" }), setLoisirMenu(false))}
                                className="menu_container">
                                <p>loisirs</p>
                            </motion.div>
                        </div>
                        <div className="inside_menu_boutiques_right">
                            <img src={logo} alt="" />
                        </div>
                    </motion.div>
                </motion.div>}
                {showSearch && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className='big_search'>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="big_close">
                        <AiOutlineClose onClick={e => setshowsearch(false)} className='big_close' size={50} />
                    </motion.div>
                    <div className="input_big">
                        <input type="text" onChange={e => handleSearch(e)} placeholder='Search for anything ' className="inbig" />
                    </div>
                    <div className="data_container">
                        {searchValueBoutique.map((value, index) => {
                            return <motion.div
                                key={index}
                                onClick={e => navigateToSelectedBoutique(value)}
                                variants={boutiqueVariant}
                                initial="initial"
                                exit="exit"
                                whileHover="whileHover"
                                whileInView="whileinview"
                                className="one_boutique">
                                {value.logo_boutique}
                                <img src={value.logoBoutique} width={220} alt="" />
                                <h3>{value.type_boutique}</h3>
                            </motion.div>

                        })}
                        {searchValueRestaurant.map((value, index) => {
                            return <motion.div
                                onClick={e => navigateToSelectedRestaurant(value)}
                                variants={boutiqueVariant}
                                initial="initial"
                                exit="exit"
                                whileHover="whileHover"
                                whileInView="whileinview"
                                className="one_boutique">
                                {value.logo_boutique}
                                <img src={value.logoRestaurant} width={220} alt="" />
                                <h3>{value.type}</h3>
                            </motion.div>

                        })}
                        {searchValueLoisir.map((value, index) => {
                            return <motion.div
                                onClick={e => navigateToSelectedLoisir(value)}
                                variants={boutiqueVariant}
                                initial="initial"
                                exit="exit"
                                whileHover="whileHover"
                                whileInView="whileinview"
                                className="one_boutique">
                                {value.logo_boutique}
                                <img src={value.logoLoisir} width={220} alt="" />
                                <h3>{value.titleLoisir}</h3>
                            </motion.div>

                        })}
                    </div>
                </motion.div>}
            </AnimatePresence>
        </>
    )
}
