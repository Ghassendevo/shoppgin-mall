import style from "./Login.module.css"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { inlogin, loginauth } from '../../../redux/reducers/loginReducer'
import logo from "../../../assets/mallLogo.png"
import { AnimatePresence, motion } from 'framer-motion'
import discount from "../../../assets/discount.png"
import sale from "../../../assets/sale.png"
import { LinearProgress } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import axios from 'axios'
import { Alert, AlertTitle } from '@mui/material'
import { useNavigate } from "react-router-dom"
const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isloading, setIsloading] = useState(false)
    const [errPassword, setIserrPassword] = useState(false)
    const [success, setsuccess] = useState(false)
    const userAuth = useSelector((state) => state.login.data);
    const userAuthLocal = localStorage.getItem("user");
    const navigate = useNavigate();
    useEffect(() => {
        if (userAuthLocal || userAuth) navigate("/")
        else dispatch(inlogin(true))

    }, [])
    const reset = () => {
        setEmail("")
        setPassword("")
    }
    const login = () => {
        if (email && password) {
            setIsloading(true)
            axios.get("http://localhost:9006/api/user/user", {
                params: {
                    email,
                    mdp: password
                }
            }).then(res => {
                setIsloading(false)
                if (!res.data) {
                    setIserrPassword(true), setTimeout(() => {
                        setIserrPassword(false)
                    }, 2000);
                }
                else {
                    reset()
                    setsuccess(true)
                    setTimeout(() => {
                        setsuccess(false)
                    }, 2000);
                    dispatch(loginauth(res.data))
                    localStorage.setItem("user", JSON.stringify({ user: res.data, once: true }))
                    navigate("/")

                }
            }).catch(err => {
                setIsloading(false)
            })

        }

    }
    return (
        <>
            <AnimatePresence>
                {errPassword && <motion.div
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
                        Incorrect information  <strong>check your email or password !</strong>
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
                        <strong>You have been loged in</strong>
                    </Alert>
                </motion.div>}
            </AnimatePresence>
            <img src={discount} className={style.discount} alt="" />

            <img src={logo} className={style.logo} />
            <img src={sale} className={style.sale} alt="" />
            <div className={style.signup_container} >

                <div className={style.signup_form}>
                    <div className={style.form_container}>
                        {isloading && <LinearProgress color="primary" className={style.progress} />}

                        <p className={style.create_p}>Login to your account </p>

                        <p className={style.create_pp}>join mall of ksarhlel with just few steps,shop by categorys, enjoy our web application and make fun</p>
                        <div className={style.inputs}>
                            <div className={style.input_container}>
                                <label htmlFor="name">Your email</label><br />
                                <motion.input whileFocus={{ border: "1px solid black" }} value={email} onChange={e => setEmail(e.target.value)} type="text" name='email' id='email' placeholder='email' />
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor="name">Password</label><br />
                                <motion.input whileFocus={{ border: "1px solid black" }} value={password} onChange={e => setPassword(e.target.value)} type="text" name='password' id='password' placeholder='password' />
                            </div>
                        </div>
                        <button className={style.signup} onClick={login}>Login</button>
                        <p onClick={e => navigate("/signup")} className={style.tologin}>Join us  ? Singup</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login