let main_display = document.querySelector( `.main_section` )
let getmain = document.querySelector( `main` )

let userPokemon_json = Cookies.get( `selected_pokemon` )
let userSelection = JSON.parse( userPokemon_json )

let compPokemon_json =Cookies.get(`computer_pokemon`)
let compSelection = JSON.parse(compPokemon_json)

for ( i = 0; i < userSelection.length; i++ ){
 
    main_display.insertAdjacentHTML( `afterbegin`,
        ` <div class="main">
<h2 class="name">${ userSelection[i][`name`] } </h2>
<img style="width:80px; height:80px; margin:30px;" src="${ userSelection[i][`image_url`] }" alt="Pokémon image">
<button style="text-decoration:none; border-radius:10px; cursor: pointer; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); background-color:white; padding:5px; width:90px"  class="selection" selection_kind="Pikachu">${ userSelection[i][`attacks`][i][`name`]} </button>
<p id="user_hp">${ userSelection[i][`max_health`] }</p>
</div>
` )

}

main_display.insertAdjacentHTML( `afterbegin`,
` <div class="main">
<h2 class="name">${compSelection[`name`] } </h2>
<img style="width:80px; height:80px; margin:30px;" src="${compSelection[`image_url`] }" alt="Pokémon image">
<button style="text-decoration:none; border-radius:10px;  cursor: pointer; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); background-color:white; padding:5px; width:90px"  class="selection" selection_kind="Pikachu">${compSelection[`attacks`][2][`name`]} </button>
<p id="user_hp">${compSelection[`max_health`]}</p>
</div>
` )
 