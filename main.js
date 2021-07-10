import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import  CardGame from "./src/components/CardGame";
import './style.css'
import GameBoard from './src/objects/GameBoard';



const $root = document.querySelector('#root');

$root.textContent = "OLÁ MEU NOME É OBERDAN'";

const $htmlGameBoard  = GameBoard(6);
$root.insertAdjacentHTML("beforeend", $htmlGameBoard);