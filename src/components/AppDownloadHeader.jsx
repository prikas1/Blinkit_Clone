import React from "react";
import './AppDownloadHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function AppDownloadHeader() {
    return(
        <div className="DownloadAppHeader">
        <div class="DownloadAppHeaderContainer"><img src="https://blinkit.com/8a3fd859084bd0f463dc.png" class="BlinkitLogo" />
        <div class="InfoHeadingContainer">
            <div class="InfoHeading ">Get the app</div>
            <div class="InfoSubHeading ">for better experience and</div>
            <div class="InfoSubHeading">exclusive features</div>
        </div>
        <div class="UseAppButton">Use app</div>
    </div>
    </div>
    )
}

export default AppDownloadHeader;