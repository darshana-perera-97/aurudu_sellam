import React from "react";
import { gameName } from "../../../DataSheet";
import { CircularProgressbar } from "react-circular-progressbar";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles.css";

export default function Grease(p) {
  const [v, setv] = React.useState(50);
  const g = 10;

  setInterval(() => {
    var o = Math.random();
    var t = Math.round(o * 10);
    // setv(t)
  }, 1000);
  return (
    <div>
      <p id="t1" style={{ fontWeight: "bold", color: "red" }}>
        {gameName[p.p - 1]}
      </p>
      <p id="t2" style={{ fontWeight: "bold", color: "black" }}>
        Sorry!... Game is under Construction. Try again later
      </p>
      {/* <div style={{ width: "20%", margin: "auto" }}>
        <CircularProgressbar value={v} maxValue={100} text={`${v}%`} />
      </div> */}
    </div>
  );
}
