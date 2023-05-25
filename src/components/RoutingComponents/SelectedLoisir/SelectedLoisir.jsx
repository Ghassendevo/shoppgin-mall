import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import style from "./SelectedLoisir.module.css"
import { SlArrowRight } from "react-icons/sl"
import { MdOutlineCancel } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineFieldTime, AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMore, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { Paper, MenuList, MenuItem, ListItemIcon, ListItemText, Typography, Divider, LinearProgress, Alert, AlertTitle, Modal, DialogActions, DialogTitle, DialogContent, Button, Dialog, DialogContentText } from '@mui/material';
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect } from 'react';
const SelectedLoisir = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const Allrestaurants = useSelector((state) => state.loisirs.data)
    const [restaurantData, setrestaurantData] = useState({});
    const [isloading, setisloading] = useState(true)
    const navigateToSelectedRestaurant = (e) => {
        navigate(`/loisirs/${e.titleLoisir}`, { state: e })
    }
    const [showMenu, setShowMenu] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = useState(false)
    const [isadmin, setisadmin] = useState(false)
    //
    useEffect(() => {
        const b = location.state;
        axios.get(`http://localhost:9006/api/loisir/find/${b.idLoisir}`).then(res => {
            setrestaurantData(res.data)
            setisloading(false)
        }).catch(err => {
            alert(err)
        })
        let user = localStorage.getItem("user");
        if (user != null) {
            user = JSON.parse(user);
            if (user.user.email == "admin") setisadmin(true);
        }
    }, [])
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleDelete = () => {
        axios.delete(`http://localhost:9006/api/restaurant/delete/${restaurantData.idRestaurant}`).then(res => {
            navigate("/restaurants", { state: "restaurants" })
        }).catch(err => {
            alert(err)
        })

    }
    return (
        isloading && "loading" || <div className={style.selectedRestaurant}>
            <div className={style.nav}>
                <a onClick={e => navigate("/")} className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a onClick={e => navigate("/loisirs")} className={style.nav_not_active}>Loisirs</a>
                <SlArrowRight size={12} />
                <a className={style.active_nav}>{restaurantData.titleLoisir}</a>
            </div>
            <div className={style.foroncerestaurant}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -30,
                    }}
                    animate={{
                        opacity: [0.1, 0.3, 0.6, 0.8, 1],
                        y: 0,
                        transition: {
                            type: "spring", duration: 0.5, stiffness: 200
                        }
                    }}
                    whileHover={{
                        y: -5,
                    }}
                    className={style.leftmainrestaurant}>
                    <div className={style.menu_forboutique}>
                        <AnimatePresence>
                            {showMenu && <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                            ><Menu object={restaurantData} setShowMenu={setShowMenu} setEdit={setEdit} setOpen={setOpen} /></motion.div>}
                        </AnimatePresence>
                    </div>
                    {isadmin && <div onClick={e => setShowMenu(!showMenu)} className={style.popoverboutiques}>
                        <AiOutlineMore size={30} />
                    </div>}
                    <img src={restaurantData.logoLoisir} width={220} alt="" />
                    <h3>{restaurantData.typeLoisir}</h3>
                </motion.div>
                <div className={style.rightmaindiv}>
                    <motion.p initial={{ opacity: 0, y: 10, }} animate={{ opacity: 1, y: 0, }}  >{restaurantData.titleLoisir} : {restaurantData.typeLoisir}</motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className={style.desc}>{restaurantData.descriptionLoisir}</motion.p>
                </div>

            </div>
            <div className={style.restaurantInfo}>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -200
                    }}
                    animate={{
                        opacity: 1,
                        x: 0
                    }}
                    whileHover={{
                        rotate: 2
                    }}
                    className={style.horaire}>
                    <p>Horaire d'ouverture</p><AiOutlineFieldTime size={20} style={{ marginLeft: 5 }} />:
                    <p className={style.ouverturetime}>{restaurantData.timeouverture} </p>à  <p className={style.fermeturetime}>{restaurantData.timefermeture}</p>
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: -200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    whileHover={{
                        rotate: 2
                    }}
                    className={style.horaire}>
                    <p>Contact</p><AiOutlinePhone size={20} style={{ marginLeft: 5 }} />:
                    <p className={style.ouverturetime}>+216 {restaurantData.contactLoisir} </p>
                </motion.div>
                <motion.a
                    initial={{
                        opacity: 0,
                        y: -200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    whileHover={{
                        rotate: 5
                    }}
                    href="" className={style.contactrestaurant}>
                    <AiOutlineFacebook size={30} />
                </motion.a>
                <motion.a
                    initial={{
                        opacity: 0,
                        y: -200
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    whileHover={{
                        rotate: 5
                    }}
                    href="" className={style.contactrestaurant}>
                    <AiOutlineInstagram size={30} />
                </motion.a>
            </div>
            <div className={style.similar}>
                <h3>Enseignes similaires </h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={90}
                    navigation={{
                        nextEl: '.swiper_button_next_unique'
                    }}
                    modules={[Navigation]}

                    className={style.myswiper}
                >
                    {Allrestaurants.map((value, index) => {
                        return (
                            <SwiperSlide
                                onClick={() => navigateToSelectedRestaurant(value)}
                                className={style.swiperSlide}><img src={value.logoLoisir} /></SwiperSlide>
                        )
                    })}
                    <div className={style.swiper_button_next_unique}>sdfdsfd</div>
                </Swiper>
            </div>
            {edit && <EditObject object={restaurantData} setShowMenu={setShowMenu} setEdit={setEdit} setBoutiqueData={setrestaurantData} />}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete ?"}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleDelete} color='error' autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
const Menu = ({ object, setEdit, setOpen, setShowMenu }) => {
    return (
        <Paper sx={{ width: 320, maxWidth: '100%' }}>
            <MenuList>
                <MenuItem onClick={e => (setEdit(true), setShowMenu(false))}>
                    <ListItemIcon>
                        <AiOutlineEdit size={20} />
                    </ListItemIcon>
                    <ListItemText >Edit</ListItemText>
                </MenuItem>
                <MenuItem onClick={e => (setOpen(true), setShowMenu(false))}>
                    <ListItemIcon>
                        <AiOutlineDelete size={20} />
                    </ListItemIcon>
                    <ListItemText>Delete</ListItemText>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText>{object.titleLoisir}</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}
const EditObject = ({ object, setEdit, setrestaurantData }) => {
    const [titleLoisir, settitleLoisir] = useState(object.titleLoisir)
    const [typeLoisir, settypeLoisir] = useState(object.typeLoisir)
    const [timeouverture, settimeouverture] = useState(object.timeouverture)
    const [timefermeture, settimefermeture] = useState(object.timefermeture)
    const [logoLoisir, setlogoLoisir] = useState(object.logoLoisir)
    const [lienFacebook, setlienFacebook] = useState(object.lienFacebook)
    const [lienInstagram, setlienInstagram] = useState(object.lienInstagram)
    const [contactLoisir, setcontactLoisir] = useState(object.contactLoisir)
    const [descriptionLoisir, setdescriptionLoisir] = useState(object.descriptionLoisir)
    //
    const [isloading, setisloading] = useState(false);
    const [err, setErr] = useState(false)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    //
    const handleChange = () => {
        setisloading(true);
        axios.post(`http://localhost:9006/api/loisir/update/${object.idLoisir}`, {
            titleLoisir,
            typeLoisir,
            timeouverture,
            timefermeture,
            logoLoisir,
            lienFacebook,
            lienInstagram,
            contactLoisir,
            descriptionLoisir,
        }).then(res => {
            setisloading(false)
            setSuccess(true)
            setTimeout(() => {
                setSuccess(false)
            }, 3000);
            window.location.reload();
        }).catch(err => {
            setisloading(false);
            setErr(true)
            setTimeout(() => {
                setErr(false)
            }, 3000);
        })
    }
    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={style.EditObject} >
                {err && <motion.div
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        y: 20,
                        opacity: 0
                    }}
                    className={style.err_password}>
                    <Alert severity="error">
                        <AlertTitle>Error</AlertTitle>
                        Error in the <strong>Server</strong>
                    </Alert>
                </motion.div>}
                {success && <motion.div className={style.err_password}
                    initial={{
                        opacity: 0,
                        y: 40
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        y: 20,
                        opacity: 0
                    }}
                >
                    <Alert severity="success">
                        <AlertTitle>Success</AlertTitle>
                        Restaurant <strong> {object.titleLoisir} </strong>was updated successfully
                    </Alert>
                </motion.div>}
                <div className={style.inside_edit}>
                    <div className={style.cancel_container} onClick={e => setEdit(false)}>
                        <MdOutlineCancel size={25} color='red' />
                    </div>
                    <div className={style.edit_container}>
                        {isloading && <LinearProgress color='primary' className={style.linear_update} />}
                        <p className={style.id_boutique}>Restaurant ID : <strong>{object.idLoisir}</strong></p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
                            <input type="text" className={style.inputsimple} onChange={e => settitleLoisir(e.target.value)} placeholder='loisir title' value={titleLoisir} />
                            <select className={style.inputselect} onChange={e => setBoutiqueType(e.target.value)} >
                                <option selected={typeLoisir == "loisir" ? true : false} value="loisir">Loisir</option>
                                <option selected={typeLoisir == "culture" ? true : false} value="culture">Culture</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
                            <input type="text" className={style.inputsimple} value={timeouverture} onChange={e => settimeouverture(e.target.value)} placeholder='Time Ouverture' />
                            <input type="text" className={style.inputsimple} value={timefermeture} onChange={e => settimefermeture(e.target.value)} placeholder='Time Fermeture' />
                        </div><br />
                        <input type="text" className={style.inputsimple} placeholder='Logo Loisir' value={logoLoisir} onChange={e => setlogoLoisir(e.target.value)} style={{ width: "100%" }} />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25 }}>
                            <input type="text" className={style.inputsimple} value={lienFacebook} onChange={e => setlienFacebook(e.target.value)} placeholder='Lien Facebook' />
                            <input type="text" className={style.inputsimple} value={lienInstagram} onChange={e => setlienInstagram(e.target.value)} placeholder='Lien Instagram' />
                        </div><br />
                        <input type="text" className={style.inputsimple} value={contactLoisir} onChange={e => setcontactLoisir(e.target.value)} placeholder='Contact Loisir' style={{ width: "100%" }} />
                        <br></br><br />
                        <textarea className={style.inputarea} cols={4} value={descriptionLoisir} onChange={e => setdescriptionLoisir(e.target.value)} placeholder='Description Loisir' />
                        <br />
                        <button onClick={handleChange} className={style.update_boutique}>submit</button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default SelectedLoisir