import React from "react";
import '../App.css';
import {Link} from 'react-router-dom';

export default function Navbar (props) {


	return (

        <div>
            <nav className='nav_links'>

            <ul>
                <li><Link  to= "/creadores">
                       Creadores
                    </Link></li>
                <li><Link to= "/resumenes">
                       Resúmenes
                    </Link></li>
                <li><Link to= "/evaluaciones">
                    Evaluacion
                </Link></li>  
                <li><Link to= "/enviar">
                    Subir Contenido
                </Link></li>                  
            </ul> 
            </nav>
        </div>);
	
}