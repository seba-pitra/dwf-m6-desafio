import { state } from "../../state"

export function initPageJugada(params) {
    const div = document.createElement("div");
    div.className = "jugada-container"
    
    const cs = state.getState();
    const playerOneChoise = cs.rtdbData.playerOne.choise
    const playerTwoChoise = cs.rtdbData.playerTwo.choise

    const comps = {
        piedra: "<custom-piedra></custom-piedra>",
        papel: "<custom-papel></custom-papel>",
        tijeras: "<custom-tijera></custom-tijera>"
    };

    if (cs.player === 1) {
        div.innerHTML = `
        <div class="machine">
        ${ comps[playerTwoChoise] }
        </div>
        ${ comps[playerOneChoise] }
        `;   
    } else if(cs.player === 2) {
        div.innerHTML = `
        <div class="machine">
        ${ comps[playerOneChoise] }
        </div>
        ${ comps[playerTwoChoise] }
        `;
    }


    
    let myValue = sessionStorage.getItem("me");
    let playerTwoValue = sessionStorage.getItem("playerTwo");
    const resultOfPlay = state.whoWins(playerOneChoise, playerTwoChoise);
    
    if (resultOfPlay == "ganaste") {
        sessionStorage.setItem("me", JSON.stringify(Number(myValue) + 1))
    } else if(resultOfPlay == "perdiste") {
        sessionStorage.setItem("playerTwo", JSON.stringify(Number(playerTwoValue) + 1))
    } 
    
    setTimeout(()=>{ return params.goTo(`/${resultOfPlay}`); }, 2000)
    
    return div;
}