import React from "react";
import Pesquisa from "../../micro/search/search";
import Usuario from "../../micro/user/user";



function Header(props){
    return (
    <>
    {/* <!-- header-starts --> */}
    <div className="header sticky-header">
      {/* <!-- notification menu start --> */}
      <div className="menu-right">
        <div className="navbar user-panel-top justify-content-end">
          <Pesquisa/>
          <Usuario/>
        </div>
      </div>
    </div>
    {/* <!--notification menu end --> */}
    {/* <!-- //header-ends --> */}
    </>
    )
}

export default Header