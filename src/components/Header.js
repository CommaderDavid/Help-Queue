import React from "react";
import ticketsImage from "./../img/tickets.png";

function Header() {
    return (
        <React.Fragment>
            <img src={ticketsImage} alt="A set of tickets" id="tickets" />
        </React.Fragment>
    );
}

export default Header;