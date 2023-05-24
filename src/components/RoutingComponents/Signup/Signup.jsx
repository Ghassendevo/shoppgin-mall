import React, { useState } from 'react'
import style from "./Signup.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { inlogin } from '../../../redux/reducers/loginReducer'
import logo from "../../../assets/mallLogo.png"
import { AnimatePresence, motion } from 'framer-motion'
import discount from "../../../assets/discount.png"
import sale from "../../../assets/sale.png"
import { LinearProgress } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import axios from 'axios'
import { Alert, AlertTitle } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const theme = createTheme({
    palette: {
        primary: {
            light: '#f2360cd5',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});
const Signup = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [isloading, setIsloading] = useState(false)
    const [errPassword, setIserrPassword] = useState(false)
    const [success, setsuccess] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(inlogin(true))
    }, [])
    const reset = ()=>{
        setName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }
    const signup = () => {
        if (name && email && password && confirmpassword) {
            if (password !== confirmpassword) {
                setIserrPassword(true)
                setTimeout(() => {
                    setIserrPassword(false)
                }, 2000);
            } else {
                setIsloading(true)
                axios.post("http://localhost:9006/api/user/addUser", {
                    name,
                    email,
                    motdepasse:password
                }).then(res => {
                    setIsloading(false)
                    setsuccess(true)
                    reset()
                    setTimeout(() => {
                        setsuccess(false)
                    }, 2000);
                }).catch(err => {
                    alert(err)
                })
            }
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
                        Confirm password is incorrect <strong>check it out!</strong>
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
                        You create a new Account <strong>Login</strong>
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

                        <p className={style.create_p}>Create  new account easly</p>

                        <p className={style.create_pp}>join mall of ksarhlel with just few steps,shop by categorys, enjoy our web application and make fun</p>
                        <div className={style.inputs}>
                            <div className={style.input_container}>
                                <label htmlFor="name">Your name</label><br />
                                <motion.input whileFocus={{ border: "1px solid black" }} value={name} onChange={e => setName(e.target.value)} type="text" name='name' id='name' placeholder='name' />
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor="name">Your email</label><br />
                                <motion.input whileFocus={{ border: "1px solid black" }} value={email} onChange={e => setEmail(e.target.value)} type="text" name='email' id='email' placeholder='email' />
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor="name">Password</label><br />
                                <motion.input whileFocus={{ border: "1px solid black" }} value={password} onChange={e => setPassword(e.target.value)} type="text" name='password' id='password' placeholder='password' />
                            </div>
                            <div className={style.input_container}>
                                <label htmlFor="name">Confirm password</label><br />
                                <motion.input whileFocus={{ border: "1px solid black" }} value={confirmpassword} onChange={e => setConfirmPassword(e.target.value)} type="text" name='password' id='password' placeholder=' confirm password' />
                            </div>
                        </div>
                        <button className={style.signup} onClick={signup}>Create Account</button>
                        <p onClick={e=>navigate("/login")} className={style.tologin}>Already have an account ? Login</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup