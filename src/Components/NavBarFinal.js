import React from "react";
import '../App.css';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';
import BotonLogin from "./BotonLogin";
import BotonLogin2 from "./BotonLogin2";

export default function NavBarFinal (props) {


	return (

        <div className = "navigation">
            <Logo/>
            <Navbar/>
            <BotonLogin2/>
            <BotonLogin/>
        </div>
    );
}