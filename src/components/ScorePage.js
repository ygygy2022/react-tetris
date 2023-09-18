// Desc: This file contains the ScorePage component.
import React from "react";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
import ExitButton from "./ExitButton";
// ScorePage component is used to render the score page.
const ScorePage = ({ onExitGame }) => {
  // fake data
  const players = [
    { name: "Alice", score: 8000 },
    { name: "Bob", score: 6000 },
    { name: "Charlie", score: 7000 },
    { name: "Alice", score: 8000 },
    { name: "Bob", score: 6000 },
    { name: "Charlie", score: 7000 },
    { name: "Alice", score: 8000 },
    { name: "Bob", score: 6000 },
    { name: "Charlie", score: 7000 },
    { name: "Alice", score: 8000 },
    { name: "Bob", score: 6000 },
    { name: "Charlie", score: 7000 },
  ];
  // hook to store the player data
  const [playerData] = React.useState(players);
  const sortedPlayers = playerData.sort((a, b) => b.score - a.score);

  return (
    // StyledTetrisWrapper is a styled component.
    <StyledTetrisWrapper>
      <StyledPageWrapper>
        <StyledPage>
          <h1>Score</h1>
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {/* Display scores from high to low */}
              {sortedPlayers.map((player, index) => (
                <tr key={player.name}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Exit button to exit the game */}
          <ExitButton callback={onExitGame} />
        </StyledPage>
      </StyledPageWrapper>
    </StyledTetrisWrapper>
  );
};

export default ScorePage;
