import React, { useState } from "react";
import "./App.css";

function App() {
  const [ho, setho] = useState(20);
  const [ver, setver] = useState(20);
  const [blur, setb] = useState(20);
  const [color, setcolor] = useState("black");

  return (
    <div className="a">
      <h1>box Shadow  React js mini project</h1>

      <div className="App">
        <div className="c1">
          <label className="l1">Horizontal length</label>
          <input
            type="range"
            min="0"
            max="100"
            value={ho}
            onChange={(e) => setho(e.target.value)}
          />
          <label>vertical length</label>
          <input
            type="range"
            min="0"
            max="100"
            value={ver}
            onChange={(e) => setver(e.target.value)}
          />
          <label>Blur effect</label>
          <input
            type="range"
            min="0"
            max="100"
            value={blur}
            onChange={(e) => setb(e.target.value)}
          />
          <label>Color</label>
          <input
            type="range"
            min="0"
            max="100"
            value={color}
            onChange={(e) => setcolor(e.target.value)}
          />
        </div>
        <div class="output">
          <div
            className="box"
            style={{ boxShadow: `${ho}px ${ver}px ${blur}px Gray` }}
          ></div>
          <p>
            boxShadow:{ho}px {ver}px {blur}px {color}
          </p>
        </div>

        <div className="c2"></div>
      </div>
    </div>
  );
}

export default App;
