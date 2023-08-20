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
  } else if (gamePage === 1) {
    return (
      <div>
        <Tetris />
      </div>
    );
  } else if (gamePage === 2) {
    return (
      <div>
        <ScorePage onExitGame={() => setGamePage(0)} />
      </div>
    );
  } else if (gamePage === 3) {
    return (
      <div>
        <ConfigurePage onExitGame={() => setGamePage(0)} />
      </div>
    );
  }

  // Optional: You can return null or some fallback JSX if none of the conditions are met.
  return null;
};

export default GamePages;
