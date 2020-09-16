import React, { useContext } from "react";
import useLocalStorageState from "use-local-storage-state";

const GameStateContext = React.createContext({
  gameState: null,
  setGameState: () => {},
});

export const GameContextProvider = ({ children }) => {
  const [gameState, setGameState] = useLocalStorageState("gameState", {
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
  });

  return (
    <GameStateContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameStateContext.Provider>
  );
};

export const useGameContext = () => useContext(GameStateContext);
