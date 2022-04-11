import React from "react";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import { gameName, pNames } from "../../../DataSheet";

export default function Amuththa(p) {
  const [v1, setv1] = React.useState(true);
  const [s, sets] = React.useState(5);
  var o = Math.random();
  var t = Math.round(o * 5);
  var winner = false;
  if (s === t) {
    winner = true;
  }
  return (
    <div style={{ paddingBottom: "50px" }}>
      <p id="t1" style={{ fontWeight: "bold", color: "red" }}>
        {gameName[p.p - 1]}
      </p>

      <div>
        <p id="t2" style={{ color: "black", marginTop: "-10px" }}>
          සැඟවුනු අමුත්තා කවුරුන්දැයි තෝරන්න
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "80%",
            margin: "auto",
          }}
        >
          {pNames.map((val, key) => {
            return (
              <div style={{ color: "red" }} key={key}>
                {v1 && (
                  <IconButton
                    aria-label="delete"
                    size="large"
                    color="primary"
                    onClick={() => {
                      sets(key);
                      setv1(false);
                    }}
                  >
                    <PersonIcon fontSize="large" />
                  </IconButton>
                )}
                <p id="t2" style={{ color: "blue", marginTop: "-10px" }}>
                  {/* {pNames[t]} */}
                  {val}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {!v1 && (
        <div>
          <p id="t2" style={{ color: "black", marginTop: "-10px" }}>
            සැඟවුනු අමුත්තා වන්නේ {pNames[t]} වේ.
          </p>
          <br />
          {winner && (
            <p id="t2" style={{ color: "green", marginTop: "-10px" }}>
              ඔබ ජයහනය කරනු ලබයි
            </p>
          )}
          {!winner && (
            <p id="t2" style={{ color: "red", marginTop: "-10px" }}>
              සැඟවුනු අමුත්තා සොයාගැනීමට අසමත් වී ඇත
            </p>
          )}
          <br />
          <a href="." id="t2">
            ආරම්භයට ගමන් කරන්න
          </a>
        </div>
      )}
    </div>
  );
}
