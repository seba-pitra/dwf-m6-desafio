import { initRouter } from "./router";
import { initTextComp } from "./components/text";
import { initBotonComp }from "./components/button";
import {initTijeraComp} from "./components/tijeras";
import { initPiedraComp } from "./components/piedra";
import { initPapelComp } from "./components/papel";
import { initCounterComp } from "./components/counter";
import { state } from "./state";

(function() {
    const root = document.querySelector(".root")
    initRouter(root)
    initTijeraComp();
    initPiedraComp();
    initPapelComp();
    initBotonComp();
    initTextComp();
    initCounterComp();
    
    //Pruebas del state
    
     state.setName("Seba", 1)
     state.signIn(1)// => "/signup"
     state.signIn(2)

    const cs = state.getState();
    // console.log(cs.roomId, "ESTE ES EL ROOM ID");

    state.accessToRoom()
    state.setStatus({
        player: 2,
        online: true,
        start: true
    })
    state.setPlay({
        player: 1,
        choise: "piedra"
    })
    state.setPlay({
        player: 1,
        choise: "piedra"
    })

    
    

    
    
})()