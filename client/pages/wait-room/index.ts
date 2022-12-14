import { state } from "../../state";

export function initWaitRoom(params) {
    const cs = state.getState()
    const div = document.createElement("div");
    div.className = "welcome-container"

    if (cs.player === 1) {
      const playerTwoName = cs.rtdbData.playerTwo.name
       div.innerHTML = `
         <custom-text class="wait-text">
            Esperando que "${playerTwoName}" presione ¡Jugar!
         </custom-text>
         <div class="welcome-hands-container">
            <custom-tijera></custom-tijera>
            <custom-piedra></custom-piedra>
            <custom-papel></custom-papel>
         </div>
       `
    } else if(cs.player === 2) {
      const playerOneName = cs.rtdbData.playerOne.name
      div.innerHTML = `
         <custom-text class="wait-text">
            Esperando que "${playerOneName}" presione ¡Jugar!
         </custom-text>
         <div class="welcome-hands-container">
            <custom-tijera></custom-tijera>
            <custom-piedra></custom-piedra>
            <custom-papel></custom-papel>
         </div>
       `
    }

    let interval = setInterval(()=>{
       const playerOneStart = cs.rtdbData.playerOne.start;
       const playerTwoStart = cs.rtdbData.playerTwo.start; 

       if (playerOneStart && playerTwoStart) {
         params.goTo("/play")
         clearInterval(interval)
       } 
    }, 1000)

    
    function redireccionar() {
      if (location.pathname === "/wait-room") {
         if (cs.player === 1) {
            state.setStatus({ player: 1, online: true, start: false, name: cs.playerName })
            .then(() => params.goTo("/instruction"))
         } 
         if (cs.player === 2) {
            state.setStatus({ player: 2, online: true, start: false, name: cs.playerTwoName })
            .then(() => params.goTo("/instruction"))
         } 
      }
  }

   setTimeout(()=> { redireccionar() }, 7000)
    
   return div;
}
