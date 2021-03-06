import PropTypes from "prop-types";
import React from "react";
import LogoSVG from "../assets/images/logo-white.svg";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#397D74`,
      marginBottom: `1.45rem`,
    }}
  >
    <div className="header-bounds">
        <img src={LogoSVG} alt={siteTitle}/>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
