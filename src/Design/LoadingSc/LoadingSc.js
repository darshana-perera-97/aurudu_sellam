import React from "react";
import wall from "./wall.jpg";

export default function LoadingSc() {
  return (
    <div style={{textAlign:"center"}}>
      <img src={wall} alt="logo" width="100%"/>
      <p id="com" style={{fontWeight:"bold",color:"blue"}}>Powered by DnD Creations</p>
    </div>
  );
}
