import React from 'react'
import { purple, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import wall from "./ba.jpg";

const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[900],
    },
  }));

export default function MenuItems() {
  return (
    <div>
        <img src={wall} alt="logo" width="100%"/>
        <ColorButton
          variant="contained"
          id="t2"
          style={{margin:"10px 0px"}}
          onClick={() => {
            // setwelcome(false);
          }}
        >
          as
        </ColorButton>
    </div>
  )
}
