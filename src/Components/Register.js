import React from 'react'

const Register = () => {
  return (
    <div className='login1'>
        <div className='Compologin1'>
            <div className='recuadro1'>
            <p>Nombre</p>
            <input></input>
            <p>Apellidos</p>
            <input></input>
            <p>Nombre de Usuario</p>
            <input></input>
            <p>Dirección de correo</p>
            <input></input>
            <p>Contraseña</p>
            <input></input>
            <p>Repita la contraseña</p>
            <input></input>
            <div className='condiciones_servicio'>
            <p id = "condicionesserv">Lea las condiciones de servicio</p>
            </div>
            <div className='botonregister'> 
            <button>Registrarse</button>
            </div>
            </div>
        </div>
        <div className='descripcion_registro'>
            <h1>¡Estás a un solo paso de crear tu cuenta!</h1>
            <p>Rellena el siguiente formulario con tus datos y le 
                enviaremos un correo para confirmar el registro de su cuenta.
            </p>
            <p>
                Una vez que pertenezcas a la familia podrás consultar los
                resúmenes con los que podrás interactuar añadiéndolos a la
                lista de "favoritos", "ver después" o incluso... ¡comentarlos!
            </p>
        </div>
    </div>
  )
}

export default Register