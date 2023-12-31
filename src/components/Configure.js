// Desc: Configure page for the game
import React, { useState, useContext } from "react";
import GlobalContext from "../GlobalContext";

// import components
import ExitButton from "./ExitButton";
// import css files
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
const Configure = ({ onExitGame }) => {
  // hooks
  const {
    configureLevel,
    setConfigureLevel,
    mode,
    setMode,
    height,
    setHeight,
    width,
    setWidth,
  } = useContext(GlobalContext);
  // set the default value of player mode
  const [playerMode, setPlayerMode] = useState("Player");

  // This is the JSX that will be rendered
  return (
    <StyledTetrisWrapper>
      <StyledPageWrapper>
        <StyledPage>
          <h1>CONFIGURE</h1>
          <h2>Size of the field:</h2>
          {/* Allow user change stage size */}
          <select
            value={width + `x` + height}
            onChange={(e) => {
              const [newWidth, newHeight] = e.target.value
                .split("x")
                .map(Number);
              setHeight(newHeight);
              setWidth(newWidth);
            }}
          >
            <option value="12x20">12x20</option>
            <option value="15x25">15x25</option>
            <option value="18x30">18x30</option>
          </select>
          {/* Allow user change game level*/}
          <h2>Game level:</h2>
          <input
            type="range"
            min="0"
            max="10"
            value={configureLevel}
            onChange={(e) => setConfigureLevel(Number(e.target.value))}
          />
          <div>{configureLevel}</div>
          {/* Allow user change game styles*/}
          <h2>Normal or Extended game:</h2>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="Normal">Normal</option>
            <option value="Extended">Extended</option>
          </select>
          {/* Allow user change game mode*/}
          <h2>Player or AI game mode:</h2>
          <select
            value={playerMode}
            onChange={(e) => setPlayerMode(e.target.value)}
          >
            <option value="Player">Player</option>
            <option value="AI">AI</option>
          </select>
          {/* Exit button to exit the game */}
          <ExitButton callback={onExitGame} />
        </StyledPage>
      </StyledPageWrapper>
    </StyledTetrisWrapper>
  );
};

export default Configure;
