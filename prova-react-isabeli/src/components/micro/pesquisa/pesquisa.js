import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Pesquisa(props){
    return (
        <div className="pesquisa">
            <form action="#pesquisa-results.html" method="get">
              <input className="pesquisa-input" placeholder="Pesquise Aqui..." type="pesquisa" id="pesquisa"/>
              <button className="pesquisa-submit" value=""><FontAwesomeIcon icon={faSearch}/></button>
            </form>
          </div>
    )
}

export default Pesquisa