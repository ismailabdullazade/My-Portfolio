import React from 'react';
import './nav.css';
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai"
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import { useState } from 'react';

const Nav = () => {
  const [activeNav,setActiveNav] = useState("#");

  return (
    <nav>
      <a onClick={() => setActiveNav("#")} className={ activeNav === "#" ? "active" : ""} href="#"><AiOutlineHome/></a>
      <a onClick={() => setActiveNav("#about")} className={ activeNav === "#about" ? "active" : ""} href="#about"><AiOutlineUser/></a>
      <a onClick={() => setActiveNav("#experience")} className={ activeNav === "#experience" ? "active" : ""} href="#experience"><BiBook/></a>
      <a onClick={() => setActiveNav("#services")} className={ activeNav === "#services" ? "active" : ""} href="#services"><RiServiceLine/></a>
      <a onClick={() => setActiveNav("#contact")} className={ activeNav === "#contact" ? "active" : ""} href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav