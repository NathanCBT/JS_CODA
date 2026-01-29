import Game from "./Data/Game.js";
import GameController from "./Controller/GameController.js";
import GameView from "./View/GameView.js";

const game = new Game();
const gameView = new GameView(game);
const gameController = new GameController(game, gameView);
