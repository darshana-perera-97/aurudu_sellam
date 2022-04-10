import React from "react";
import { purple, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import wall from "./ba.jpg";
import { gameName } from "../../DataSheet";
import Pancha from "./pancha/Pancha";
import Amuththa from "./Amuththa/Amuththa";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[900],
  },
}));

export default function MenuItems() {
  const [menu, setmenu] = React.useState(true);
  const [game, setgame] = React.useState(0);
  var games;
  if (game == "1") {
    games = <Pancha p={"1"}/>;
  } else if (game == "2") {
    games = <Amuththa p={"2"}/>;
  }
  return (
    <div>
      <img src={wall} alt="logo" width="100%" />
      {games}
      {menu && (
        <div>
          {gameName.map((val, key) => {
            return (
              <div key={key}>
                <ColorButton
                  variant="contained"
                  id="t2"
                  style={{ margin: "12px 0px" }}
                  onClick={() => {
                    setmenu(false);
                    setgame(key+1);
                  }}
                >
                  {val}
                </ColorButton>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
