import { state } from "../../state";

export function initGetInSala(params) {
    const div = document.createElement("div");
    div.className = "welcome-container"

    div.innerHTML = `
      <custom-text variant="title">
         Piedra, Papel ó Tijeras
      </custom-text>
      <input class="codigo" placeholder="código"/>
      <custom-boton class="get-in">Ingresar a sala</custom-boton>
      <div class="welcome-hands-container">
         <custom-tijera></custom-tijera>
         <custom-piedra></custom-piedra>
         <custom-papel></custom-papel>
      </div>
    `

    const secondButton:any = div.querySelector(".get-in");

    state.listenRoom()
    secondButton.addEventListener("click", (e) => {
      e.preventDefault()
      const codigo = div.querySelector("input")?.value
      if(codigo) {
        const cs = state.getState();
        cs.roomId = codigo
        
        state.setState(cs)
        state.getRtdbRoomId()
        .then(() => {
         params.goTo("/get-name")
       })
      }
    })

    return div;
}