import React from "react";
import me from "../../images/BrianWashingtonJr.jpg"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

 
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
            <a href="https://www.linkedin.com/in/brian-washington-668129244/" target="_blank">
                <li className="footer-item">
                    Linkedin:
                    &nbsp;
                    <i class="fa fa-linkedin-square" ></i>
                </li>
            </a>
            <a href="https://github.com/zipzopboppitybop" target="_blank">
                <li className="footer-item">
                    Github:
                    &nbsp;
                    <i class="fa fa-github"></i>
                </li>
            </a>

        </ul>
        </>
    );
};
export default Footer;