// Desc: This is the welcome page of the game
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
import { StyledStartButton } from "./styles/StyledStartButton";
// This is the welcome page of the game, it is the first page that the user sees when they open the game
const WelcomePage = ({ onStartGame, onStartScore, onStartConfigure }) => {
  // when user enter ESC, it will ask user if they want to close the game
  const handleClose = () => {
    const userConfirmed = window.confirm(
      "Are you sure you want to close this game?"
    );

    if (userConfirmed) {
      window.close();
    }
  };
  // This is the JSX that will be rendered
  return (
    <StyledTetrisWrapper>
      {/* This is the main wrapper for the Tetris game */}
      <StyledPageWrapper>
        <StyledPage>
          <h1>Welcome to Tetris!</h1>
          <h2>2023 7805ICT</h2>
          {/* These are student names */}
          <h3>STUDENT 1: Yu Guo </h3>
          <h3>STUDENT 2: Maisi Hao</h3>
          <h3>STUDENT 3: Jiaxiang Yao</h3>
          {/* Start button to initiate the game */}
          <StyledStartButton onClick={onStartGame}>
            Start Game
          </StyledStartButton>
          {/* Score button to view the score page */}
          <StyledStartButton onClick={onStartScore}>Score</StyledStartButton>
          {/* Configure button to configure the game */}
          <StyledStartButton onClick={onStartConfigure}>
            Configure
          </StyledStartButton>
          {/* Exit button to exit the game */}
          <StyledStartButton onClick={handleClose}>Close</StyledStartButton>
        </StyledPage>
      </StyledPageWrapper>
    </StyledTetrisWrapper>
  );
};

export default WelcomePage;
