import React, { useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

const GameStateContext = React.createContext({
  gameState: null,
  setGameState: () => {},
});

export const GameContextProvider = ({ children }) => {
  const defaultGameState = {
    players: [
      {
        name: "",
        faction: "",
      },
      {
        name: "",
        faction: "",
      },
    ],
    scores: [
      {
        primaries: [0, 0, 0, 0],
        secondaries: [0, 0, 0],
      },
      {
        primaries: [0, 0, 0, 0],
        secondaries: [0, 0, 0],
      },
    ],
    cps: [0, 0],
  };
  const [gameState, setGameState] = useLocalStorageState(
    "gameState",
    defaultGameState
  );

  const resetGameState = () => {
    setGameState(defaultGameState);
  };

  return (
    <GameStateContext.Provider
      value={{ gameState, setGameState, resetGameState }}
    >
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameContext = () => useContext(GameStateContext);
