import './src/styles/settings/colors.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import  CardGame from "./src/components/CardGame";
import './style.css'



const $root = document.querySelector('#root');

$root.textContent = "OLÁ MEU NOME É OBERDAN'";

const $htmlCardGame  = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);