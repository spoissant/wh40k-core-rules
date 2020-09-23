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
