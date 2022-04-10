import React from "react";
import StartButton from "./DesignComponents/StartButton";
import LoadingSc from "./LoadingSc/LoadingSc";
import Menu from "./Menu/Menu";
import './styleSheet.css'

export default function Design() {
  return (
    <div>
      <LoadingSc />
      <StartButton />
      <Menu />
    </div>
  );
}
