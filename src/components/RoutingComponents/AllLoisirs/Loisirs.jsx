import React, { useState } from 'react'
import style from "./Loisirs.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import { SlArrowRight } from "react-icons/sl"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllLoisirs } from '../../../redux/reducers/loisirReducer'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdOutlineCancel } from 'react-icons/md'
import { fetchLoisir } from '../../../redux/reducers/loisirReducer'
import axios from 'axios'
import { Skeleton, LinearProgress, Alert, AlertTitle } from '@mui/material'
import { FaVrCardboard } from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom'
const buttonVariants = {
    whilehover: {
        y: -10,
        rotate: 1.5,
        cursor: "pointer"
    }
}

const AllLoisirs = () => {
    const [navSelected, setNavSelected] = useState("");//
    const dispatch = useDispatch();
    const restaurantsData = useSelector((state) => state.loisirs.data);
    const isloading = useSelector((state) => state.loisirs.loading);
    const [searchedValue, setSearchedValue] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const loisirType = location.state;
    const [isdamin, setisadmin] = useState(false);
    useEffect(() => {
        dispatch(fetchLoisir());
        setNavSelected(loisirType)
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
    const [titleLoisir, settitleLoisir] = useState()
    const [typeLoisir, settypeLoisir] = useState("loisir")
    const [timeouverture, settimeouverture] = useState()
    const [timefermeture, settimefermeture] = useState()
    const [logoLoisir, setlogoLoisir] = useState()
    const [lienFacebook, setlienFacebook] = useState()
    const [lienInstagram, setlienInstagram] = useState()
    const [contactLoisir, setcontactLoisir] = useState()
    const [descriptionLoisir, setdescriptionLoisir] = useState()

    const [isloadingadd, setisloadingadd] = useState(false);
    const [isadd, setidadd] = useState(false);
    const handleChange = () => {
        if (titleLoisir && typeLoisir && timeouverture && timefermeture && logoLoisir && lienFacebook && lienInstagram && contactLoisir && descriptionLoisir) {
            setisloadingadd(true);
            axios.post("http://localhost:9006/api/loisir/add", {
                descriptionLoisir: descriptionLoisir,
                titleLoisir: titleLoisir,
                contactLoisir: parseInt(contactLoisir),
                timeouverture: timeouverture,
                lienFacebook: lienFacebook,
                lienInstagram: lienInstagram,
                timefermeture: timefermeture,
                logoLoisir: logoLoisir,
                typeLoisir: typeLoisir
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
        <div className={style.boutiques}>
            <div className={style.nav}>
                <a onClick={e => navigate("/")} href="" className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a onClick={e => navigate("/loisirs", { state: "tous" })} href="" className={style.active_nav}>Loisirs</a>
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
            {isdamin && <motion.div
                whileHover={{
                    backgroundColor: "#fb4a22",
                    color: "white",
                    scale: 1.1
                }}
                onClick={e => setidadd(true)}
                className={style.add_main}>
                <AiOutlinePlus size={18} />
            </motion.div>}
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
                            Boutique <strong> {titleLoisir} </strong>was updated successfully
                        </Alert>
                    </motion.div>}
                    <div className={style.inside_edit}>
                        <div className={style.cancel_container} onClick={e => setidadd(false)}>
                            <MdOutlineCancel size={25} color='red' />
                        </div>
                        <div className={style.edit_container}>
                            {isloadingadd && <LinearProgress color='primary' className={style.linear_update} />}
                            <p className={style.idRestaurant}>Add Restaurant</p>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 30 }}>
                                <input type="text" className={style.inputsimple} onChange={e => settitleLoisir(e.target.value)} placeholder='Loisir title' value={titleLoisir} />
                                <select className={style.inputselect} onChange={e => settype(e.target.value)} >
                                    <option selected={typeLoisir == "loisir" ? true : false} value="loisir">Loisir</option>
                                    <option selected={typeLoisir == "cafe" ? true : false} value="cafe">Cafe</option>
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
                </motion.div>}
            </AnimatePresence>
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