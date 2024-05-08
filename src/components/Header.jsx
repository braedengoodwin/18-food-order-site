import logoImg from "../assets/logo.jpg";
import React, { useState } from "react";

export default function Header({setCartClick}) {
  

  return (
    <header id="main-header">
      <title id="title">
        <img src={logoImg} id="img" />
        <h1>Reactfood</h1>
      </title>
      {/* will need to change this button, just here as a placeholder for now */}
      
        <button className="text-button" onClick={() => setCartClick(true)}>Cart( )</button>
    </header>
  );
}
