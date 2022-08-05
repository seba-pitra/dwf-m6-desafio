export function initGetName(params) {
    const div = document.createElement("div");
    div.className = "welcome-container"

    div.innerHTML = `
      <custom-text variant="title">
         Piedra, Papel ó Tijeras
      </custom-text>
      <label for="input-name" class="name-label">Tu nombre</label>
      <input class="codigo" placeholder="Nombre" name="input-name"/>
      <custom-boton class="new-game">Empezar</custom-boton>
      <div class="welcome-hands-container">
         <custom-tijera></custom-tijera>
         <custom-piedra></custom-piedra>
         <custom-papel></custom-papel>
      </div>
    `

    const firstButton:any = div.querySelector(".new-game");
    firstButton.addEventListener("click", (e) => {
      e.preventDefault()
      console.log(firstButton.innerHTML);
      params.goTo("./wait-player")
    })

    return div;
}