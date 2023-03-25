import React from 'react'
import {MdArrowForwardIos} from "react-icons/md"
import "./marque.css";
const Marque = () => {
  return (
    <div className="marque">
      <div className="inside_marque">
        <div className="for_marque">
          <h2 className="marque_n">Marques</h2>
          <div>
            <a style={{ letterSpacing: 1.3 }}>See all marque (13) <MdArrowForwardIos color='black' size={13} /></a>
          </div>
        </div>
        <div className="main_marque">
          <div className="marque_container">
            <img src="https://cdn.shopify.com/s/files/1/0643/2525/5401/files/brand-banner-01_244x244@2x.jpg?v=1652182877" alt="" />
            <div className="marque_logo">
              <img src="https://www.ostrava.avion.cz/-/media/images/b2c/czech-republic/ostrava/prodejny/bershka/bershka_logo.ashx" alt="" />
            </div>
            <p>Fashion look</p>
            <h3>Up to 25% OFF</h3>
            <button className="marque_voir_btn">Voir +</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Marque