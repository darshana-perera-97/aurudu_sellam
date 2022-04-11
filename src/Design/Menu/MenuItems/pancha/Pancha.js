import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import TextField from "@mui/material/TextField";
import { gameName } from "../../../DataSheet";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

export default function Pancha(p) {
  const [st, setSt] = React.useState(true);
  const [st2, setSt2] = React.useState(true);
  const [v1, setv1] = React.useState(0);
  const [v2, setv2] = React.useState(0);
  const [v, setv] = React.useState(0);
  const [p1, setp1] = React.useState("Player 01");
  const [p2, setp2] = React.useState("Player 02");
  const [win, setWin] = React.useState("");
  if (v1 >= 99) {
    setv1(0);
    setv2(0);
    setSt2(false);
    setWin(p1);
  }
  if (v2 >= 99) {
    setv1(0);
    setv2(0);
    setSt2(false);
    setWin(p2);
  }
  return (
    <div>
      <p id="t1" style={{ fontWeight: "bold", color: "red" }}>
        {gameName[p.p - 1]}
      </p>
      {st && (
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            var o = Math.random();
            setv1(v1 + o * 10);
            setSt(!st);
            setv(Math.round(o * 10))
          }}
        >
          දාදු කැටය දමන්න
        </Button>
      )}
      {st2 && !st && (
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            var o = Math.random();
            setv2(v2 + o * 15);
            setSt(!st);
            setv(Math.round(o * 10))
          }}
        >
          දාදු කැටය දමන්න
        </Button>
      )}
      <p id="t2" style={{ fontWeight: "bold", color: "blue" }}>
            {v}
          </p>
      {st2 && (
        <div>
          <br />
          <br />
          <div>
            <TextField
              required
              id="outlined-required"
              label="Player 01 Name"
              defaultValue="Player 01"
              onChange={(e) => setp1(e.target.value)}
              style={{ margin: "10px" }}
            />
            <TextField
              required
              id="outlined-required"
              label="Player 02 Name"
              defaultValue="Player 02"
              onChange={(e) => setp2(e.target.value)}
              style={{ margin: "10px" }}
            />
          </div>
          <br />
          <p id="t2" style={{ fontWeight: "bold", color: "Red" }}>
            {p1}
          </p>
          <BorderLinearProgress
            variant="determinate"
            value={v1}
            style={{ width: "80%", margin: "auto" }}
          />
          <p id="t2" style={{ fontWeight: "bold", color: "Green" }}>
            {p2}
          </p>
          <BorderLinearProgress
            variant="determinate"
            value={v2}
            style={{ width: "80%", margin: "auto" }}
          />
        </div>
      )}
      {!st2 && (
        <div>
          <p id="t1" style={{ fontWeight: "bold", color: "red" }}>
            තරඟය ජයග්‍රහනය කරනු ලබන්නේ <br />
            {win}
          </p>
          <a href="." id="t2">ආරම්භයට ගමන් කරන්න</a>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
