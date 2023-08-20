import React from "react";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
import ExitButton from "./ExitButton";
const ScorePage = () => {
  const players = [
    { name: "Alice", score: 8000 },
    { name: "Bob", score: 6000 },
    { name: "Charlie", score: 7000 },
  ];
  const [playerData] = React.useState(players);
  const sortedPlayers = playerData.sort((a, b) => b.score - a.score);

  return (
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
              {sortedPlayers.map((player, index) => (
                <tr key={player.name}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ExitButton />
        </StyledPage>
      </StyledPageWrapper>
    </StyledTetrisWrapper>
  );
};

export default ScorePage;
