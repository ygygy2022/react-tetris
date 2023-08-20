import React, { useState } from "react";
import ExitButton from "./ExitButton";
// import css files
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
const Configure = () => {
  const [gameLevel, setGameLevel] = useState(0);
  const [gameMode, setGameMode] = useState("Normal");
  const [playerMode, setPlayerMode] = useState("Player");
  // eslint-disable-next-line no-unused-vars
  const [fieldSize, setFieldSize] = useState("12x20");
  return (
    <StyledTetrisWrapper>
      <StyledPageWrapper>
        <StyledPage>
          <h1>CONFIGURE</h1>
          <h2>Size of the field:</h2>
          <select onChange={(e) => setFieldSize(e.target.value)}>
            <option value="12x20">12x20</option>
            <option value="15x25">15x25</option>
            <option value="18x30">18x30</option>
          </select>
          <h2>Game level:</h2>
          <input
            type="range"
            min="0"
            max="10"
            value={gameLevel}
            onChange={(e) => setGameLevel(e.target.value)}
          />
          <div>{gameLevel}</div>

          <h2>Normal or extended game:</h2>
          <select
            value={gameMode}
            onChange={(e) => setGameMode(e.target.value)}
          >
            <option value="Normal">Normal</option>
            <option value="Extended">Extended</option>
          </select>

          <h2>Player or AI game mode:</h2>
          <select
            value={playerMode}
            onChange={(e) => setPlayerMode(e.target.value)}
          >
            <option value="Player">Player</option>
            <option value="AI">AI</option>
          </select>

          <ExitButton />
        </StyledPage>
      </StyledPageWrapper>
    </StyledTetrisWrapper>
  );
};

export default Configure;
