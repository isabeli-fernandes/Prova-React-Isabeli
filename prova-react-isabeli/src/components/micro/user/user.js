import React from "react";
import usuario from '../../../assets/images/usuario.jpg'

function User(props){
    return (
        <div className="detalhe_usuario">
            <ul>
              <li className="dropdown detalhe_usuario_drop">
                  <div className="usuario">
                    <img src={usuario} className="circulo" alt="" />
                    <div className="usuario-ativo">
                      <span></span>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
    )
}

export default User