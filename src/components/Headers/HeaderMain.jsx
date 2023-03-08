import React, { useState } from 'react'
import "./HeaderMainStyle.css"
import { CiHeart, CiUser, CiShoppingCart, CiPercent } from "react-icons/ci"
import { motion, useViewportScroll, useTransform, transform } from "framer-motion";
import { AiOutlineClose, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai"
import { lineHeight } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RiArrowDropDownLine } from "react-icons/ri"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
export const HeaderMain = () => {
    const [defaultLang, setDefaultLang] = useState("English")
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    console.log("hello")
    const handleClose = (e) => {
        setAnchorEl(null);
        setDefaultLang(e)
    };
    const [searchValue, setsearchValue] = useState("");
    const favClick = () => {

    }
    const loginClick = () => {

    }
    const itemsClick = () => {

    }
    return (
        <>
            <div className="HeaderMain">
                <div>
                    <h1>Logo</h1>
                </div>
                <div>
                    <div className="Search">
                        <input type="text" onChange={e => setsearchValue(e.target.value)} value={searchValue} placeholder='Search Product here...' />
                        {searchValue != "" && <AiOutlineClose onClick={() => setsearchValue("")} style={{ cursor: "pointer" }} size={14} />}
                        <button>
                            <AiOutlineSearch color='white' style={{ cursor: "pointer" }} size={18} />
                        </button>
                    </div>
                </div>
                <div >
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
                    <div className="for_fav" onClick={favClick}>
                        <motion.div
                            whileHover={{
                                rotateY:180,
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type:"tween",duration:0.17
                            }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <CiHeart color='#ee2d01' style={{ cursor: "pointer" }} size={45} />
                        </motion.div>
                        <p style={{ fontSize: 13, cursor: "pointer", lineHeight: 1.5 }}>Favourite<br></br> Wishlist</p>
                    </div>
                    <div className="for_login" onClick={loginClick}>
                        <motion.div
                            whileHover={{
                                rotateY:180,
                            }}
                            transition={{
                                type:"tween",duration:0.17
                            }}
                            whileTap={{ scale: 0.9 }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <CiUser color='#ee2d01' style={{ cursor: "pointer" }} size={45} />
                        </motion.div>
                        <p style={{ fontSize: 13, cursor: "pointer", lineHeight: 1.5 }}>Login <br></br>My Account</p>
                    </div>
                    <div className="for_items" onClick={itemsClick}>
                        <motion.div
                            whileHover={{
                                rotateY:180,
                            }}
                            transition={{
                                type:"tween",duration:0.17
                            }}
                            whileTap={{ scale: 0.9 }}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <CiShoppingCart color='#ee2d01' style={{ cursor: "pointer" }} size={45} />
                        </motion.div>
                        <p style={{ fontSize: 13, cursor: "pointer", lineHeight: 1.5 }}>Login <br></br>My Account</p>
                    </div>

                </div>
            </div>
            <div className="navigationmenu">
                <div className="navigone">
                    <div>
                        <HiOutlineMenuAlt1 size={20} />
                        <p>Shop Category</p>
                        <RiArrowDropDownLine size={20} />

                    </div>
                    <div className="line">
                    </div>
                    <div>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}
                           
                            href="" className="nav_li">Home</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}
                           
                            href="" className="nav_li">Our Store</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}
                           
                            href="" className="nav_li">Blogs</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}
                           
                            href="" className="nav_li">Contact</motion.a>
                        <motion.a
                            whileHover={{
                                scale: 1.1,
                                originX: 0,
                            }}
                           
                            href="" className="nav_li">For Kids</motion.a>
                    </div>
                </div>
                <div className="navigtwo">
                    <CiPercent color="#fe5730" size={20} />
                    <p>Offer Zone Or Discount
                    </p>
                </div>
            </div>
        </>
    )
}
