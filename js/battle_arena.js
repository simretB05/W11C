let main_display = document.querySelector( `.main_section` )
let getmain = document.querySelector( `main` )

let userPokemon_json = Cookies.get( `selected_pokemon` )
let userSelection = JSON.parse( userPokemon_json )

let compPokemon_json =Cookies.get(`computer_pokemon`)
let compSelection = JSON.parse( compPokemon_json )

let user_health = Cookies.get(`user_hp`)
let comp_health = Cookies.get( `comp_hp`)

for ( i = 0; i < userSelection.length; i++ ){
 
    main_display.insertAdjacentHTML( `afterbegin`,
        ` <div class="main">
<h2 class="name">${ userSelection[i][`name`] } </h2>
<img style="width:80px; height:80px; margin:30px;" src="${ userSelection[i][`image_url`] }" alt="Pokémon image">
<button id="attack_btn" style="text-decoration:none; border-radius:10px; cursor: pointer; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); background-color:white; padding:5px; width:90px"  class="selection" selection_kind="Pikachu">${ userSelection[i][`attacks`][i][`name`]} </button>
<p id="user_hp_text"  style=" width:30px; text-align:center;background-color:white;">${ userSelection[i][`max_health`] }</p>
</div>
` )

}

main_display.insertAdjacentHTML( `afterbegin`,
` <div class="main">
<h2 class="name">${compSelection[`name`] } </h2>
<img style="width:80px; height:80px; margin:30px;" src="${compSelection[`image_url`] }" alt="Pokémon image">
<button style="text-decoration:none; border-radius:10px;  cursor: pointer; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); background-color:white; padding:5px; width:90px"  class="selection" selection_kind="Pikachu">${compSelection[`attacks`][2][`name`]} </button>
<p id="comp_hp_text" style=" width:30px; text-align:center;background-color:white;">${compSelection[`max_health`]}</p>
</div>
` )
 
// function computerdamage() {
//     return choices[Math.floor(Math.random()*.length)];
// }
 
function attack( details ){
    user_health = user_health - 
    Cookies.set( `user_health`, user_health )
    
    comp_health = comp_health - 5
    Cookies.set( `user_health`, user_health )

    let user_display = document.getElementById( `user_hp_text` )
    user_display[`innerHTML`] = user_health
    let comp_display = document.getElementById( `comp_hp_text` )
    comp_display[`innerHTML`] = user_health



    
}


let attack_button = document.getElementById( `attack_btn` )
attack_button.addEventListener(`click`,attack)