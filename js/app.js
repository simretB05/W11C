let selected_json = Cookies.get( `selected_pokemon` )


//selected the the section where the pokes are displyed with queryselector
let main_section = document.querySelector( `.main_section` )

for ( let i = 0; i <pokemon.length; i++ ){
    main_section.insertAdjacentHTML( `beforeend`, 
    ` <div class="main">
    <h2 class="name">${pokemon[i][`name`]} </h2>
    <img style="width:80px; height:80px; margin:30px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); " src="${pokemon[i][`image_url`]}" alt="Pokémon image">
    <a style="text-decoration:none; border-radius:10px; border:1px solid black; color:Black; background-color:white; padding:5px;"  class="selection" selection_kind="Pikachu"> Choose Me</a>

    </div>
  `)

}
let userData = []
let compData=[]
function selectPokemon( details ){
    let userPokemon = undefined;
    let selected_pokeman = details[`target`].getAttribute( `selection_kind` )
    for ( let x = 0; x < pokemon.length; x++ ){
        if ( selected_pokeman === pokemon[x][`name`] ){
        userData.push( pokemon[x] )
            userPokemon = pokemon[x]
            console.log(true)
    }
    let CompPokemon = [1]
    let selection_json = JSON.stringify( userData )
    let userPokemon_json = JSON.stringify( userPokemon )
    let  CompPokemon_json = JSON.stringify(CompPokemon)
    Cookies.set( `user_hp`, userPokemon[`max_health`])
    Cookies.set( `comp_hp`, CompPokemon[`max_health`] )
    Cookies.set( `selected_pokemon`, userPokemon_json )
    Cookies.set( `computer`, CompPokemon_json )
    Cookies.set( `selected_pokemon`, selection_json )
     }
    
}

let selection_btn = document.querySelectorAll( `.selection` )



for ( let i = 0; i < selection_btn.length; i++ ){
    selection_btn[i].addEventListener( `click`, selectPokemon )
}