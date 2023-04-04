let selected_json = Cookies.get( `user_pokemon` )
//selected the the section where the pokes are displyed with queryselector
 
let main_section = document.querySelector( `.main_section` )

for ( let i = 0; i <pokemon.length; i++ ){
    main_section.insertAdjacentHTML( `beforeend`, 
    ` <div class="main">
        <div>
            <img style="width:100px; height:100px; margin:30px; " src="${pokemon[i][`image_url`]}" alt="Pokémon image">
            <h2 class="name">${pokemon[i][`name`]} </h2>
        </div>
         <a  class="selection" selection_kind="${pokemon[i][`name`]}"> Choose Me</a>
    </div>
  `)

    
}
let userData = []
function selectPokemon( details ){
    let userPokemon = undefined;
    let selected_pokeman = details[`target`].getAttribute(`selection_kind`)
    for ( let x = 0; x < pokemon.length; x++ ){
        if ( selected_pokeman === pokemon[x][`name`] ){
            userPokemon = pokemon[x]
        }
          
      
    }
    if ( !( selected_json === undefined ) ){ 
        userData = JSON.parse(selected_json);
     
    }
        userData.push(userPokemon)
        let compPokemon =pokemon[1]
        let userPokemon_json = JSON.stringify(userData )
        let compPokemon_json = JSON.stringify(compPokemon)
        Cookies.set( `user_hp`, userPokemon[`max_health`])
        Cookies.set( `comp_hp`, compPokemon[`max_health`])
        Cookies.set( `user_pokemon`, userPokemon_json)
        Cookies.set( `computer_pokemon`, compPokemon_json )

    
}

let selection_btn = document.querySelectorAll( `.selection` )

for ( let i = 0; i < selection_btn.length; i++ ){
    selection_btn[i].addEventListener( `click`, selectPokemon )
}