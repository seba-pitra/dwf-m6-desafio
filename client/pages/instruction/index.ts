import { stat } from "fs";
import { state } from "../../state";

export function initInstrucionsPage(params) {
    const cs = state.getState();

    const div = document.createElement("div");

    div.innerHTML = `
    <custom-header></custom-header>
    <div class="instructions-container">
      <custom-text>
       Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los segundos.
      </custom-text>
      <custom-boton>¡Jugar!</custom-boton>
      <div class="play-hands-container">
        <custom-tijera></custom-tijera>
        <custom-piedra></custom-piedra>
        <custom-papel></custom-papel>
      </div>
    </div>
    `

    const button:any = div.querySelector("custom-boton");
    
    state.cleanPlay()
    state.setState(cs)
    button.addEventListener("click",async (e) => {
      e.preventDefault()

      if (cs.player === 1) {
        cs.playerTwoName = cs.rtdbData.playerTwo.name
        state.setStatus({player:1, online:true, start:true, name:cs.playerName})
        .then( ()=> params.goTo("/wait-room"))
      } else if(cs.player === 2) {
        state.setStatus({player:2, online:true, start:true, name:cs.playerTwoName})
        .then( ()=> params.goTo("/wait-room"))
      }
    })
    
    return div;
}