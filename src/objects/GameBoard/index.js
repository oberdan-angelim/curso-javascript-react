import CardGame from "../../components/CardGame";

function GameBoard(amountCards){

    const $GameBoard = CardGame().repeat(amountCards);

    return $GameBoard;

}

export default GameBoard;