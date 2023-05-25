import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import style from "./SelectedRestaurant.module.css"
import { SlArrowRight } from "react-icons/sl"
import { motion } from 'framer-motion';
import { Paper, MenuList, MenuItem, ListItemIcon, ListItemText, Typography, Divider, LinearProgress, Alert, AlertTitle, Modal, DialogActions, DialogTitle, DialogContent, Button, Dialog, DialogContentText } from '@mui/material';
import { AiOutlineFieldTime, AiOutlinePhone, AiOutlineFacebook, AiOutlineInstagram, AiOutlineMore, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai"
import { Swiper, SwiperSlide } from "swiper/react";
import { MdOutlineCancel } from 'react-icons/md';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from "swiper";
import axios from 'axios';
import "swiper/css";
import "swiper/css/pagination";
const SelectedRestaurant = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const Allrestaurants = useSelector((state) => state.restaurants.data)
    const [restaurantData, setrestaurantData] = useState({});
    const [isloading, setisloading] = useState(true)
    const navigateToSelectedRestaurant = (e) => {
        navigate(`/restaurants/${e.titleRestaurant}`, { state: e })
    }
    const [isadmin, setisadmin] = useState(false);
    useEffect(() => {
        const b = location.state;
        axios.get(`http://localhost:9006/api/restaurant/find/${b.idRestaurant}`).then(res => {
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
    const [showMenu, setShowMenu] = useState(false);
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = useState(false)

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
                <a onClick={e => navigate("/restaurants", { state: "restaurants" })} className={style.nav_not_active}>Restaurants</a>
                <SlArrowRight size={12} />
                <a className={style.active_nav}>{restaurantData.titleRestaurant}</a>
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
                    <img src={restaurantData.logoRestaurant} width={220} alt="" />
                    <h3>{restaurantData.type}</h3>
                </motion.div>
                <div className={style.rightmaindiv}>
                    <motion.p initial={{ opacity: 0, y: 10, }} animate={{ opacity: 1, y: 0, }}  >{restaurantData.titleRestaurant} : {restaurantData.type}</motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className={style.desc}>{restaurantData.description}</motion.p>
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
                    <p className={style.ouverturetime}>{restaurantData.timeOuverture} </p>à  <p className={style.fermeturetime}>{restaurantData.timeFermeture}</p>
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
                    <p className={style.ouverturetime}>+216 {restaurantData.contactRestaurant} </p>
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
                                className={style.swiperSlide}><img src={value.logoRestaurant} /></SwiperSlide>
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
                    <ListItemText>{object.titleRestaurant}</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}
const EditObject = ({ object, setEdit, setrestaurantData }) => {
    const [titleRestaurant, settitleRestaurant] = useState(object.titleRestaurant)
    const [type, settype] = useState(object.type)
    const [timeOuverture, settimeOuverture] = useState(object.timeOuverture)
    const [timeFermeture, settimeFermeture] = useState(object.timeFermeture)
    const [logoRestaurant, setlogoRestaurant] = useState(object.logoRestaurant)
    const [lienface, setlienface] = useState(object.lienface)
    const [lieninsta, setlieninsta] = useState(object.lieninsta)
    const [contactRestaurant, setcontactRestaurant] = useState(object.contactRestaurant)
    const [description, setdescription] = useState(object.description)
    //
    console.log(object)
    const [isloading, setisloading] = useState(false);
    const [err, setErr] = useState(false)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    //
    const handleChange = () => {
        setisloading(true);
        axios.post(`http://localhost:9006/api/restaurant/update/${object.idRestaurant}`, {
            titleRestaurant,
            type,
            timeOuverture,
            timeFermeture,
            logoRestaurant,
            lienface,
            lieninsta,
            contactRestaurant,
            description,
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
                        Restaurant <strong> {object.titleRestaurant} </strong>was updated successfully
                    </Alert>
                </motion.div>}
                <div className={style.inside_edit}>
                    <div className={style.cancel_container} onClick={e => setEdit(false)}>
                        <MdOutlineCancel size={25} color='red' />
                    </div>
                    <div className={style.edit_container}>
                        {isloading && <LinearProgress color='primary' className={style.linear_update} />}
                        <p className={style.id_boutique}>Restaurant ID : <strong>{object.idRestaurant}</strong></p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
                            <input type="text" className={style.inputsimple} onChange={e => settitleRestaurant(e.target.value)} placeholder='restaurant title' value={titleRestaurant} />
                            <select className={style.inputselect} onChange={e => setBoutiqueType(e.target.value)} >
                                <option selected={type == "fast food" ? true : false} value="fast food">fast food</option>
                                <option selected={type == "cafe" ? true : false} value="cafe">Café</option>
                                <option selected={type == "patisserie" ? true : false} value="patisserie">Patisserie</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
                            <input type="text" className={style.inputsimple} value={timeOuverture} onChange={e => settimeOuverture(e.target.value)} placeholder='Time Ouverture' />
                            <input type="text" className={style.inputsimple} value={timeFermeture} onChange={e => settimeFermeture(e.target.value)} placeholder='Time Fermeture' />
                        </div><br />
                        <input type="text" className={style.inputsimple} placeholder='Logo Restaurant' value={logoRestaurant} onChange={e => setlogoRestaurant(e.target.value)} style={{ width: "100%" }} />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25 }}>
                            <input type="text" className={style.inputsimple} value={lienface} onChange={e => setlienface(e.target.value)} placeholder='Lien Facebook' />
                            <input type="text" className={style.inputsimple} value={lieninsta} onChange={e => setlieninsta(e.target.value)} placeholder='Lien Instagram' />
                        </div><br />
                        <input type="text" className={style.inputsimple} value={contactRestaurant} onChange={e => setcontactRestaurant(e.target.value)} placeholder='Contact Restaurant' style={{ width: "100%" }} />
                        <br></br><br />
                        <textarea className={style.inputarea} cols={4} value={description} onChange={e => setdescription(e.target.value)} placeholder='Description restaurant' />
                        <br />
                        <button onClick={handleChange} className={style.update_boutique}>submit</button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
export default SelectedRestaurant