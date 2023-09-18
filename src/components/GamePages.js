// Desc: This file contains the GamePages component which will be used to render the correct page based on the gamePage state.
import React from "react";
import Tetris from "./Tetris";
import WelcomePage from "./WelcomePage";
import ScorePage from "./ScorePage";
import usePages from "../hooks/usePages";
import ConfigurePage from "./Configure";
const GamePages = () => {
  // This is the state that will be used to determine which page to render
  const [gamePage, setGamePage] = React.useState(0);
  // This useEffect is used to add an event listener to the window object
  usePages(gamePage, setGamePage);
  // This function will be used to render the correct page
  // 0 = Welcome Page
  // 1 = Game Page
  // 2 = Score Page
  // 3 = Configure Page

  const handleClose = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to leave this page?"
    );

    if (userConfirmed) {
      setGamePage(0);
    }
  };
  // This is the JSX that will be rendered
  // If the gamePage state is 0, render the WelcomePage component
  if (gamePage === 0) {
    return (
      <div>
        <WelcomePage
          onStartGame={() => setGamePage(1)}
          onStartScore={() => setGamePage(2)}
          onStartConfigure={() => setGamePage(3)}
        />
      </div>
    );
    // If the gamePage state is 1, render the Tetris component
  } else if (gamePage === 1) {
    return (
      <div>
        <Tetris />
      </div>
    );
    // If the gamePage state is 2, render the ScorePage component
  } else if (gamePage === 2) {
    return (
      <div>
        <ScorePage onExitGame={handleClose} />
      </div>
    );
    // If the gamePage state is 3, render the ConfigurePage component
  } else if (gamePage === 3) {
    return (
      <div>
        <ConfigurePage onExitGame={handleClose} />
      </div>
    );
  }

  // Optional: You can return null or some fallback JSX if none of the conditions are met.
  return null;
};

export default GamePages;
