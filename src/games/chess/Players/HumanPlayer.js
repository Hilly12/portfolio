import Player from "../Player";

export default class HumanPlayer extends Player {
  isHuman() {
    return true;
  }
}