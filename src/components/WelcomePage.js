import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
import { StyledStartButton } from "./styles/StyledStartButton";
const WelcomePage = ({ onStartGame, onStartScore, onStartConfigure }) => {
  return (
    <StyledTetrisWrapper>
      <StyledPageWrapper>
        <StyledPage>
          <h1>Welcome to Tetris!</h1>
          <h2>2023 7805ICT</h2>
          <h3>STUDENT 1: Yu Guo </h3>
          <h3>STUDENT 2: Maisi Hao</h3>
          <StyledStartButton onClick={onStartGame}>
            Start Game
          </StyledStartButton>
          <StyledStartButton onClick={onStartScore}>Score</StyledStartButton>

          <StyledStartButton onClick={onStartConfigure}>
            Configure
          </StyledStartButton>
          <StyledStartButton>Close</StyledStartButton>
        </StyledPage>
      </StyledPageWrapper>
    </StyledTetrisWrapper>
  );
};

export default WelcomePage;
