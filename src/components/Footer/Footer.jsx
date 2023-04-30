import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-links">
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>
                </div>
                <div className="footer-social-media">
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2023
                    <span> My Website Name</span> | All Rights Reserved
                </p>
            </div>
        </div>
    )

}

export default Footer