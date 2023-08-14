import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
import { StyledStartButton } from "./styles/StyledStartButton";
const Configure = () => {
  return (
    <StyledTetrisWrapper>
      <StyledPageWrapper>
        <StyledPage>
          <h1>CONFIGURE</h1>
          <h2>Size of the field:</h2>
          <h2>Game level: 0 </h2>
          <h2>Normal or extended game : Normal</h2>
          <h2>Player or AI game mode : Player</h2>
          <StyledStartButton>Close</StyledStartButton>
        </StyledPage>
      </StyledPageWrapper>
    </StyledTetrisWrapper>
  );
};

export default Configure;
