// Desc: This file contains the ScorePage component.
import React, { useEffect, useState } from "react";
import { StyledTetrisWrapper } from "./styles/StyledTetris";
import { StyledPageWrapper, StyledPage } from "./styles/StyledPages";
import ExitButton from "./ExitButton";
// ScorePage component is used to render the score page.
const ScorePage = ({ onExitGame }) => {
  // Initialize as an empty array
  const [playerData, setPlayerData] = useState([]);
  // Fetch data from the server
  useEffect(() => {
    fetch("http://localhost:5000/scores")
      .then((response) => response.json())
      .then((data) => {
        setPlayerData(data);
      })
      .catch((error) => {
        console.error("Error fetching scores:", error);
      });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  const sortedPlayers = playerData
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);
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
                <tr key={player.username}>
                  <td>{index + 1}</td>
                  <td>{player.username}</td>
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
