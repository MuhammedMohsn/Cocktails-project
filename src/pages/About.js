import React, { Fragment } from "react";
import styles from "../App.css"
import Navbar from "../Navbar.js"
import {Outlet} from 'react-router-dom'
 function About() {
  return (<Fragment>
    <Outlet/>
    <section className="section about_section">
      <h1 className="section_title">about us</h1>
      <p className="section_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        repudiandae architecto qui adipisci in officiis, aperiam sequi atque
        perferendis eos, autem maiores nisi saepe quisquam hic odio consectetur
        nobis veritatis quasi explicabo obcaecati doloremque? Placeat ratione
        hic aspernatur error blanditiis?
      </p>
      
    </section></Fragment>
    
  );
}
export default About