import React, { useState } from 'react'
import style from "./SelectedBoutique.module.css"
import { SlArrowRight } from "react-icons/sl"
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineFieldTime, AiOutlineDelete, AiOutlineEdit, AiOutlineMore, AiOutlinePhone, AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai"
import { MdOutlineCancel } from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Paper, MenuList, MenuItem, ListItemIcon, ListItemText, Typography, Divider, LinearProgress, Alert, AlertTitle, Modal, DialogActions, DialogTitle, DialogContent, Button, Dialog, DialogContentText } from '@mui/material';
import { FaFacebookSquare } from "react-icons/fa"
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const SelectedBoutique = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const AllBoutiques = useSelector((state) => state.boutiques.data)
    const [boutiqueData, setBoutiqueData] = useState({});
    const [isloading, setisloading] = useState(true)
    const [isadmin, setisadmin] = useState(false)
    useEffect(() => {
        const b = location.state;
        axios.get(`http://localhost:9006/api/boutiqueid/${b.idBoutique}`)
            .then(res => {
                setisloading(false)
                setBoutiqueData(res.data)
            }).catch(err => {
                alert(err)
            })
        let user = localStorage.getItem("user");
        if (user != null) {
            user = JSON.parse(user);
            if (user.user.email == "admin") setisadmin(true);
        }
    }, [])
    const [open, setOpen] = React.useState(false);
    const [edit, setEdit] = useState(false)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const navigateToSelectedBoutique = (e) => {
        navigate(`/shops/${e.titleBoutique}`, { state: e })
    }
    const handleDelete = () => {
        axios.delete(`http://localhost:9006/api/boutique/delete/${boutiqueData.idBoutique}`).then(res => {
            navigate("/boutiques", { state: "boutiques" })
        }).catch(err => {
            alert(err)
        })

    }
    const [showMenu, setShowMenu] = useState(false);
    return (
        isloading && "loading " || <div className={style.selectedBoutique}>
            <div className={style.nav}>
                <a onClick={e => navigate("/")} className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a onClick={e => navigate("/boutiques", { state: "boutiques" })} className={style.nav_not_active}>Boutiques</a>
                <SlArrowRight size={12} />
                <a className={style.active_nav}>{boutiqueData.titleBoutique}</a>
            </div>
            <div className={style.foronceboutique}>
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
                    className={style.leftmainboutique}>
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
                            ><Menu object={boutiqueData} setShowMenu={setShowMenu} setEdit={setEdit} setOpen={setOpen} /></motion.div>}
                        </AnimatePresence>
                    </div>
                    {isadmin && <div onClick={e => setShowMenu(!showMenu)} className={style.popoverboutiques}>
                        <AiOutlineMore size={30} />
                    </div>}
                    <img src={boutiqueData.logoBoutique} width={220} alt="" />
                    <h3>{boutiqueData.type_boutique}</h3>
                </motion.div>
                <div className={style.rightmaindiv}>
                    <motion.p initial={{ opacity: 0, y: 10, }} animate={{ opacity: 1, y: 0, }}  >{boutiqueData.titleBoutique} : {boutiqueData.type_boutique}</motion.p>
                    <br />
                    <motion.p
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        className={style.desc}>{boutiqueData.descriptionBoutique}</motion.p>
                </div>

            </div>
            <div className={style.boutiqueInfo}>
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
                    <p className={style.ouverturetime}>{boutiqueData.timeouverture} </p>à  <p className={style.fermeturetime}>{boutiqueData.timefermeture}</p>
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
                    <p className={style.ouverturetime}>+216 {boutiqueData.contactBoutique} </p>
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
                    href="" className={style.contactboutique}>
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
                    href="" className={style.contactboutique}>
                    <AiOutlineInstagram size={30} />
                </motion.a>
            </div>
            <div className={style.similar}>
                <h3>Enseignes similaires </h3>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={90}
                    navigation={true}
                    modules={[Navigation]}

                    className={style.myswiper}
                >
                    {AllBoutiques.map((value, index) => {
                        return (
                            <SwiperSlide
                                onClick={() => navigateToSelectedBoutique(value)}
                                className={style.swiperSlide}><img src={value.logoBoutique} /></SwiperSlide>
                        )
                    })}
                    <div className={style.swiper_button_next_unique}>sdfdsfd</div>
                </Swiper>
            </div>
            {edit && <EditObject object={boutiqueData} setEdit={setEdit} setBoutiqueData={setBoutiqueData} />}
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
                    <ListItemText>{object.titleBoutique}</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}
const EditObject = ({ object, setEdit, setBoutiqueData, setShowMenu }) => {
    const [boutiqueTitle, setboutiqueTitle] = useState(object.titleBoutique)
    const [boutiqueType, setBoutiqueType] = useState(object.type_boutique)
    const [timeouverture, settimeOuverture] = useState(object.timeouverture)
    const [timefermeture, settimeFermeture] = useState(object.timefermeture)
    const [logoBoutique, setlogoBoutique] = useState(object.logoBoutique)
    const [lienfacebook, setlienfacebook] = useState(object.lienFacebook)
    const [lieninstagram, setlieninstagram] = useState(object.lienInstagram)
    const [contactboutique, setcontactboutique] = useState(object.contactBoutique)
    const [descboutique, setdescboutique] = useState(object.descriptionBoutique)
    //

    const [isloading, setisloading] = useState(false);
    const [err, setErr] = useState(false)
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    //
    const handleChange = () => {
        setShowMenu(false)
        setisloading(true);
        axios.post(`http://localhost:9006/api/boutique/update/${object.idBoutique}`, {
            descriptionBoutique: descboutique,
            titleBoutique: boutiqueTitle,
            contactBoutique: contactboutique,
            timeouverture: timeouverture,
            lienFacebook: lienfacebook,
            lienInstagram: lieninstagram,
            timefermeture: timefermeture,
            logoBoutique: logoBoutique,
            type_boutique: boutiqueType
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
                        Boutique <strong> {object.titleBoutique} </strong>was updated successfully
                    </Alert>
                </motion.div>}
                <div className={style.inside_edit}>
                    <div className={style.cancel_container} onClick={e => (setEdit(false), setShowMenu(false))}>
                        <MdOutlineCancel size={25} color='red' />
                    </div>
                    <div className={style.edit_container}>
                        {isloading && <LinearProgress color='primary' className={style.linear_update} />}
                        <p className={style.id_boutique}>Boutique ID : <strong>{object.idBoutique}</strong></p>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
                            <input type="text" className={style.inputsimple} onChange={e => setboutiqueTitle(e.target.value)} placeholder='boutique title' value={boutiqueTitle} />
                            <select className={style.inputselect} onChange={e => setBoutiqueType(e.target.value)} >
                                <option selected={boutiqueType == "mode homme" ? true : false} value="mode homme">Mode Homme</option>
                                <option selected={boutiqueType == "mode femme" ? true : false} value="mode femme">Mode Femme</option>
                                <option selected={boutiqueType == "accessoires" ? true : false} value="accessoires">Accessoires</option>
                                <option selected={boutiqueType == "mode enfant" ? true : false} value="mode enfant">Mode enfant</option>
                                <option selected={boutiqueType == "chaussures" ? true : false} value="chaussures">Chaussures</option>
                                <option selected={boutiqueType == "maison" ? true : false} value="maison">Maison</option>
                                <option selected={boutiqueType == "cosmetiques" ? true : false} value="cosmetiques">Cosmetiques</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
                            <input type="text" className={style.inputsimple} value={timeouverture} onChange={e => settimeOuverture(e.target.value)} placeholder='Time Ouverture' />
                            <input type="text" className={style.inputsimple} value={timefermeture} onChange={e => settimeFermeture(e.target.value)} placeholder='Time Fermeture' />
                        </div><br />
                        <input type="text" className={style.inputsimple} placeholder='Logo Boutique' value={logoBoutique} onChange={e => setlogoBoutique(e.target.value)} style={{ width: "100%" }} />
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 25 }}>
                            <input type="text" className={style.inputsimple} value={lienfacebook} onChange={e => setlienfacebook(e.target.value)} placeholder='Lien Facebook' />
                            <input type="text" className={style.inputsimple} value={lieninstagram} onChange={e => setlieninstagram(e.target.value)} placeholder='Lien Instagram' />
                        </div><br />
                        <input type="text" className={style.inputsimple} value={contactboutique} onChange={e => setcontactboutique(e.target.value)} placeholder='Contact Boutique' style={{ width: "100%" }} />
                        <br></br><br />
                        <textarea className={style.inputarea} cols={4} value={descboutique} onChange={e => setdescboutique(e.target.value)} placeholder='Description boutique' />
                        <br />
                        <button onClick={handleChange} className={style.update_boutique}>submit</button>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}
export default SelectedBoutique