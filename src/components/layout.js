import React from "react"
import PropTypes from "prop-types"
import Button from '@material-ui/core/Button';


import Header from "./header"
import ContactCard from "./contact-card"
import ApplicationCard from "./application-card"
import EmployeeDatatable from "./employee-dt"
import "../assets/scss/main.scss"

const Layout = () => {
    return (
        <>
            <Header siteTitle="pied piper" />
            <div className="main">
                <div className="col-1">
                    <ContactCard />
                    <EmployeeDatatable />
                </div>
                <div className="col-2">
                    <ApplicationCard />
                </div>
            </div>
        </>
    )
}

export default Layout
