import React from "react";
import worldImg from "./assets/world.svg";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={worldImg} alt="Globe Icon" />
            <h3>My Travel Journal</h3>
        </header>
    )
}