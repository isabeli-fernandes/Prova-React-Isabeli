import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function Search(props){
    return (
        <div className="search">
            <form action="#search-results.html" method="get">
              <input className="search-input" placeholder="Pesquise Aqui..." type="search" id="search"/>
              <button className="search-submit" value=""><FontAwesomeIcon icon={faSearch}/></button>
            </form>
          </div>
    )
}

export default Search