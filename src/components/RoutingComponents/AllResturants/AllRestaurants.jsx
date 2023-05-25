import React, { useState } from 'react'
import style from "./AllRestaurants.module.css"
import { AnimatePresence, motion } from 'framer-motion'
import { SlArrowRight } from "react-icons/sl"
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBoutiques } from '../../../redux/actions/getAlldata'
import { fetchBoutiques } from '../../../redux/reducers/boutiquesReducer'
import { getAllBoutiques } from '../../../redux/reducers/boutiquesReducer'
import { fetchRestaurants } from '../../../redux/reducers/restaurantsReducer'
import { AiOutlinePlus } from "react-icons/ai"
import { Skeleton, LinearProgress, Alert, AlertTitle } from '@mui/material'
import { MdOutlineCancel } from "react-icons/md"
import { FaVrCardboard } from "react-icons/fa"
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
const buttonVariants = {
    whilehover: {
        y: -10,
        rotate: 1.5,
        cursor: "pointer"
    }
}

const AllRestaurants = () => {
    const [navSelected, setNavSelected] = useState("");//
    const dispatch = useDispatch();
    const restaurantsData = useSelector((state) => state.restaurants.data);
    const isloading = useSelector((state) => state.restaurants.loading);
    const [searchedValue, setSearchedValue] = useState("");
    const location = useLocation();
    const resttype = location.state;
    const [isadmin, setisadmin] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(fetchRestaurants());
        setNavSelected(resttype)
        let user = localStorage.getItem("user");
        if (user != null) {
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
    const [titleRestaurant, settitleRestaurant] = useState()
    const [type, settype] = useState("fast food")
    const [timeOuverture, settimeOuverture] = useState()
    const [timeFermeture, settimeFermeture] = useState()
    const [logoRestaurant, setlogoRestaurant] = useState()
    const [lienface, setlienface] = useState()
    const [lieninsta, setlieninsta] = useState()
    const [contactRestaurant, setcontactRestaurant] = useState()
    const [description, setdescription] = useState()

    const [isloadingadd, setisloadingadd] = useState(false);
    const [isadd, setidadd] = useState(false);
    const handleChange = () => {
        if (titleRestaurant && type && timeOuverture && timeFermeture && logoRestaurant && lienface && lieninsta && contactRestaurant && description) {
            setisloadingadd(true);
            axios.post("http://localhost:9006/api/restaurant/add", {
                description: description,
                titleRestaurant: titleRestaurant,
                contactRestaurant: parseInt(contactRestaurant),
                timeOuverture: timeOuverture,
                lienface: lienface,
                lieninsta: lieninsta,
                timeFermeture: timeFermeture,
                logoRestaurant: logoRestaurant,
                type: type
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
                <a onClick={e => navigate("/restaurants")} href="" className={style.active_nav}>Restaurants</a>
                <SlArrowRight size={12} />
                {navSelected !== "restaurants" && <a href="" className={style.active_nav}>{navSelected}</a>}
            </div>
            <div className={style.liste_all}>
                <motion.div
                    onClick={e => setNavSelected("restaurants")}
                    variants={buttonVariants}
                    whileHover={buttonVariants.whilehover}
                    className={navSelected == "restaurants" ? style.href_nav_active : style.href_nav}>
                    <p>TOUS LES RESTAURANTS</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("fast food")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    className={navSelected == "fast food" ? style.href_nav_active : style.href_nav}>
                    <p>fast food</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("cafe")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    className={navSelected == "cafe" ? style.href_nav_active : style.href_nav}>
                    <p>cafe</p>
                </motion.div>
                <motion.div
                    onClick={e => setNavSelected("patisserie")}
                    variants={buttonVariants}
                    whileHover="whilehover"
                    className={navSelected == "patisserie" ? style.href_nav_active : style.href_nav}>
                    <p>patisserie</p>
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
            {isloading && <MainRestaurantsSkeleton /> || <MainRestaurants type={navSelected} restaurantsData={restaurantsData} searching={searchedValue} />}
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
                            Boutique <strong> {titleRestaurant} </strong>was updated successfully
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
                                <input type="text" className={style.inputsimple} onChange={e => settitleRestaurant(e.target.value)} placeholder='Restaurant title' value={titleRestaurant} />
                                <select className={style.inputselect} onChange={e => settype(e.target.value)} >
                                    <option selected={type == "fast food" ? true : false} value="mode homme">Fast Food</option>
                                    <option selected={type == "cafe" ? true : false} value="cafe">Cafe</option>
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
                            <textarea className={style.inputarea} cols={4} value={description} onChange={e => setdescription(e.target.value)} placeholder='Description Restaurant' />
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
            setFilteredValue(restaurantsData.filter((a, b) => { return a.titleRestaurant.includes(searching) }))
        } else {
            if (type == "restaurants") { setFilteredValue(restaurantsData) }
            else if (type == "fast food") {
                setFilteredValue(restaurantsData.filter((a, b) => { return a.type == type }))
            } else if (type == "cafe") {
                setFilteredValue(restaurantsData.filter((a, b) => { return a.type == type }))
            } else if (type == "patisserie") {
                setFilteredValue(restaurantsData.filter((a, b) => { return a.type == type }))
            }
        }
    }, [type, searching])
    //methodes
    const navigateToSelectedBoutique = (e) => {
        navigate(`/restaurants/${e.titleRestaurant}`, { state: e });
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
                                    <img src={value.logoRestaurant} width={220} alt="" />
                                    <h3>{value.type}</h3>
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
export default AllRestaurants