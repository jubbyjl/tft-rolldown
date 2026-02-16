import { createContext } from 'react';
import type { GameState, GameStateAction } from './game-state';

type GameStateContext = {
  state: GameState,
  dispatch: (action: GameStateAction) => void,
}

export const GameStateContext = createContext<GameStateContext>(null!);
