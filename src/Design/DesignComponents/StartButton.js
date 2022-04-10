import React from "react";
import { purple,red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { btnTxt } from "../DataSheet";



const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[900],
  },
}));

export default function StartButton() {
  return (
    <div style={{textAlign:"center"}}>
      <ColorButton variant="contained" id="t2">
          {btnTxt}
      </ColorButton>
      
    </div>
  );
}
