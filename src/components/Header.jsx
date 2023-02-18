import React from "react"
import "./Header.css"
import PersonIcon from "@mui/icons-material/Person"
import IconButton from "@mui/material/Button"
import ForumIcon from "@mui/icons-material/Forum"

const Header = () =>{
    return(
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header-icon" />
            </IconButton>

            <img src="logo192.png" alt="header" className="header-logo" />
            
            <IconButton >
                <ForumIcon fontSize="large" className ="header-icon" />
            </IconButton>
        </div>
    )
}


export default Header;