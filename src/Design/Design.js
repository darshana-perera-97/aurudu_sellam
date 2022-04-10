import React from "react";
import StartButton from "./DesignComponents/StartButton";
import LoadingSc from "./LoadingSc/LoadingSc";
import Menu from "./Menu/Menu";
import "./styleSheet.css";
import { purple, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { btnTxt } from "./DataSheet";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[900],
  },
}));

export default function Design() {
  const [welcome, setwelcome] = React.useState(true);
  return (
    <div style={{ textAlign: "center", paddingBottom: "50px" }}>
      {!welcome && <LoadingSc />}
      {!welcome && (
        <ColorButton
          variant="contained"
          id="t2"
          style={{margin:"10px 0px"}}
          onClick={() => {
            setwelcome(false);
          }}
        >
          {btnTxt}
        </ColorButton>
      )}
      {welcome && <Menu />}
    </div>
  );
}
