import React, { useState } from 'react'
import style from "./boutiques.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import { SlArrowRight } from "react-icons/sl"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBoutiques } from '../../../redux/actions/getAlldata'
import { fetchBoutiques } from '../../../redux/reducers/boutiquesReducer'
import { getAllBoutiques } from '../../../redux/reducers/boutiquesReducer'
import { AiOutlineMore } from "react-icons/ai"
import { Skeleton } from '@mui/material'
import { AiOutlinePlus } from "react-icons/ai"
import { FaVrCardboard } from "react-icons/fa"
import { MdOutlineCancel } from 'react-icons/md'
import { LinearProgress } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { Alert, AlertTitle } from '@mui/material'
import axios from 'axios'
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
    const navigate = useNavigate();
    const location = useLocation();
    const boutType = location.state
    const [isadmin, setisadmin] = useState(false);
    useEffect(() => {
        dispatch(fetchBoutiques());
        setNavSelected(boutType)
        let user = localStorage.getItem("user");
        if(user!=null){
            user = JSON.parse(user);
            if (user.user.email == "admin") setisadmin(true);
        }
        
    }, [])
    const handleSearch = (e) => {
        setSearchedValue(e.target.value);
    }
    const [err, setErr] = useState(false);
    const [success, setSuccess] = useState(false);
    //
    const [boutiqueTitle, setboutiqueTitle] = useState()
    const [boutiqueType, setBoutiqueType] = useState("mode homme")
    const [timeouverture, settimeOuverture] = useState()
    const [timefermeture, settimeFermeture] = useState()
    const [logoBoutique, setlogoBoutique] = useState()
    const [lienfacebook, setlienfacebook] = useState()
    const [lieninstagram, setlieninstagram] = useState()
    const [contactboutique, setcontactboutique] = useState()
    const [descboutique, setdescboutique] = useState()

    const [isloadingadd, setisloadingadd] = useState(false);
    const [isadd, setidadd] = useState(false);
    const handleChange = () => {
        if (boutiqueTitle && boutiqueType && timeouverture && timefermeture && logoBoutique && lienfacebook && lieninstagram && contactboutique && descboutique) {
            setisloadingadd(true);
            axios.post("http://localhost:9006/api/boutique/add", {
                descriptionBoutique: descboutique,
                titleBoutique: boutiqueTitle,
                contactBoutique: parseInt(contactboutique),
                timeouverture: timeouverture,
                lienFacebook: lienfacebook,
                lienInstagram: lieninstagram,
                timefermeture: timefermeture,
                logoBoutique: logoBoutique,
                type_boutique: boutiqueType
            }).then(res => {
                setisloadingadd(false)
                setSuccess(true)
                window.location.reload();
                setTimeout(() => {
                    setSuccess(false)
                }, 3000);
            }).catch(err => {
                alert(err)
                setisloadingadd(false);
                setErr(true)
                setTimeout(() => {
                    setErr(false)
                }, 3000);
            })
        }
    }
    return (
        <>
            <div className={style.boutiques}>
                <div className={style.nav}>
                    <a onClick={e => navigate("/")} href="" className={style.nav_not_active}>Acceuil</a>
                    <SlArrowRight size={12} />
                    <a onClick={e => navigate("/boutiques")} href="" className={style.active_nav}>Boutiques</a>
                    <SlArrowRight size={12} />
                    {navSelected !== "boutiques" && <a href="" className={style.active_nav}>{navSelected}</a>}
                </div>
                <div className={style.liste_all}>
                    <motion.div
                        onClick={e => setNavSelected("boutiques")}
                        variants={buttonVariants}
                        whileHover={buttonVariants.whilehover}
                        className={navSelected == "boutiques" ? style.href_nav_active : style.href_nav}>
                        <p>TOUTES LES BOUTIQUES</p>
                    </motion.div>
                    <motion.div
                        onClick={e => setNavSelected("accessoires")}
                        variants={buttonVariants}
                        whileHover="whilehover"
                        className={navSelected == "accessoires" ? style.href_nav_active : style.href_nav}>
                        <p>accessoires</p>
                    </motion.div>
                    <motion.div
                        onClick={e => setNavSelected("mode enfant")}
                        variants={buttonVariants}
                        whileHover="whilehover"
                        className={navSelected == "mode enfant" ? style.href_nav_active : style.href_nav}>
                        <p>mode enfant</p>
                    </motion.div>
                    <motion.div
                        onClick={e => setNavSelected("cosmetiques")}
                        variants={buttonVariants}
                        whileHover="whilehover"
                        className={navSelected == "cosmetiques" ? style.href_nav_active : style.href_nav}>
                        <p>cosmetiques</p>
                    </motion.div>
                    <motion.div
                        onClick={e => setNavSelected("chaussures")}
                        variants={buttonVariants}
                        whileHover="whilehover"
                        className={navSelected == "chaussures" ? style.href_nav_active : style.href_nav}>
                        <p>chaussures</p>
                    </motion.div>
                    <motion.div
                        onClick={e => setNavSelected("maison")}
                        variants={buttonVariants}
                        whileHover="whilehover"
                        className={navSelected == "maison" ? style.href_nav_active : style.href_nav}>
                        <p>maison</p>
                    </motion.div>
                    <motion.div
                        onClick={e => setNavSelected("mode femme")}
                        variants={buttonVariants}
                        whileHover="whilehover"
                        className={navSelected == "mode femme" ? style.href_nav_active : style.href_nav}>
                        <p>mode femme</p>
                    </motion.div>
                    <motion.div
                        onClick={e => setNavSelected("autres")}
                        variants={buttonVariants}
                        whileHover="whilehover"
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
                {isadmin && <motion.div
                    whileHover={{
                        backgroundColor: "#fb4a22",
                        color: "white",
                        scale: 1.1
                    }}
                    onClick={e => setidadd(true)}
                    className={style.add_main}>
                    <AiOutlinePlus size={18} />
                </motion.div>}

            </div>
            <AnimatePresence>
                {isadd && <motion.div
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
                            Boutique <strong> {boutiqueTitle} </strong>was updated successfully
                        </Alert>
                    </motion.div>}
                    <div className={style.inside_edit}>
                        <div className={style.cancel_container} onClick={e => setidadd(false)}>
                            <MdOutlineCancel size={25} color='red' />
                        </div>
                        <div className={style.edit_container}>
                            {isloadingadd && <LinearProgress color='primary' className={style.linear_update} />}
                            <p className={style.id_boutique}>Add Boutique</p>
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
                </motion.div>}
            </AnimatePresence>
        </>

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
    const navigate = useNavigate();
    useEffect(() => {
        if (searching !== "") {
            setFilteredValue(boutiquesData.filter((a, b) => { return a.titleBoutique.includes(searching) }))
        } else {
            if (type == "boutiques") { setFilteredValue(boutiquesData) }
            else {
                setFilteredValue(boutiquesData.filter((a, b) => { return a.type_boutique == type }))
            }
        }
    }, [type, searching])
    //methodes
    const navigateToSelectedBoutique = (e) => {
        navigate(`/shops/${e.titleBoutique}`, { state: e });
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