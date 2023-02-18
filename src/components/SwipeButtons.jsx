import React from "react";
import "./SwipeButtons.css"
import ReplayIcon from "@mui/icons-material/Replay"
import CloseIcon from "@mui/icons-material/Close"
import StartRateIcon from "@mui/icons-material/StarRate"
import FavoriteIcon from "@mui/icons-material/Favorite"
import FlahsOnIcon from "@mui/icons-material/FlashOn"
import IconButton from "@mui/material/Button"


const SwipeButtons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons-repeat s-btn">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons-left s-btn">
                <CloseIcon fontSize="large" />
            </IconButton>

            <IconButton className="swipeButtons-star s-btn">
                <StartRateIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons-right s-btn">
                <FavoriteIcon fontSize="large"/>
            </IconButton>

            <IconButton className="swipeButtons-left s-btn">
                <FlahsOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}



export default SwipeButtons;