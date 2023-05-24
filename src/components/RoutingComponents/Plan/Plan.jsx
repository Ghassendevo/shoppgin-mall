import React from 'react'
import style from "./Plan.module.css"
import {SlArrowRight} from "react-icons/sl"
import { useNavigate } from 'react-router-dom'
const Plan = () => {
    const navigate = useNavigate();
    return (
        <div className={style.plan}>
            <div className={style.nav}>
                <a onClick={e => navigate("/")} href="" className={style.nav_not_active}>Acceuil</a>
                <SlArrowRight size={12} />
                <a onClick={e => navigate("/plan")} href="" className={style.active_nav}>Plan</a>
            </div>
            <div className={style.plan_image}>
                <img src="https://www.mallofsousse.tn/assets/images/GuideShoppingDirectories.png"  />
            </div>
        </div>
    )
}

export default Plan