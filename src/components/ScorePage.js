import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";
import Display from "./Display";
const ScorePage = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Display text={"Score"} />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default ScorePage;
