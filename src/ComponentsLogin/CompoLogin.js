import React from "react";
import  { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";


export default function BotonLogin (props) {


	return (
        <div className="Compologin">
            

            <div className="recuadro">
            <p>Usuario</p>
            <div className="inputprueba">
            <FaUser className="Hola"/>
            <input placeholder="Ingrese su usuario"></input>
            </div>
            <p>Contraseña</p>
            <div className="inputprueba">
            <RiLockPasswordFill className="Hola"/>
            <input className="input2" placeholder="Ingrese su contraseña"></input>
            </div>

            <button className="olvidarPass">¿Has olvidado la contraseña?</button>
            <button className="botonlogear">LogIn</button>
            </div>
          
        </div>
       );
	
}