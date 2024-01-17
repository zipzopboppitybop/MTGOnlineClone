import React from "react";
import me from "../../images/BrianWashingtonJr.jpg"
import "./Footer.css"

 
const Footer = () => {
    return (
        <>
        <ul className="footer-container">
            <li className="footer-item">
                Brian Washington Jr
                &nbsp;
                <img className="me" src={me} alt="Brian Washington Jr"/>
            </li>
            <li className="footer-item">
                Contact Me:
                &nbsp;
                bw49078@gmail.com
            </li>
            <a href="https://www.linkedin.com/in/brian-washington-668129244/" target="_blank" rel="noreferrer">
                <li className="footer-item">
                    Linkedin:
                    &nbsp;
                    <i className="fa fa-linkedin-square footer-icon" ></i>
                </li>
            </a>
            <a href="https://github.com/zipzopboppitybop" target="_blank" rel="noreferrer"> 
                <li className="footer-item">
                    Github:
                    &nbsp;
                    <i className="fa fa-github footer-icon"></i>
                </li>
            </a>

        </ul>
        </>
    );
};
export default Footer;