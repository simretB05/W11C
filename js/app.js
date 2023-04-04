let selected_json = Cookies.get( `user_pokemon` )
//selected the the section where the pokes are displyed with queryselector
let main_section = document.querySelector( `.main_section` )
// created a loop to loop through a pokemon object and display desired html dynamically with a value of pokemon object data
for ( let i = 0; i <pokemon.length; i++ ){
    main_section.insertAdjacentHTML( `beforeend`, 
    ` <div class="main">
        <div>
            <img style="width:100px; height:100px; margin:30px; " src="${pokemon[i][`image_url`]}" alt="Pokémon image">
            <h2 class="name">${pokemon[i][`name`]} </h2>
        </div>
         <a  class="selection"  style=" text-decoration: none;"  href="/pages/battle_arena.html"  selection_kind="${pokemon[i][`name`]}"> Choose Me</a>
    </div>
  `)

    
}
// created an empty arry that will be used to save the value os selected pokemon by the user
let userData = []
// created a function that has the details argument 
function selectPokemon( details ){
// created a userPokemon variable and set its value to be  undefined
    let userPokemon = undefined;
// created a variable that will catch the selected pokemon from the click vevent and the get attribute
    let selected_pokeman = details[`target`].getAttribute(`selection_kind`)
    
//looped through the pokemon object data and compared if the value is equal 
// to the value of the selected pokemon by the user player and if so the value of the userPokemon is updated 
    for ( let x = 0; x < pokemon.length; x++ )
    {
        if ( selected_pokeman === pokemon[x][`name`] ){
            userPokemon = pokemon[x]
        }
          
      
    }
// checking if the value of  the selected_json is not undefined if not we get a parsed JSON data and set it to our userData array
    if ( !( selected_json === undefined ) ){ 
        userData = JSON.parse(selected_json);
     
    }
// used push method to push the data of the selected userpokemon in our
//  userData array this will have the previously stored parsed Json value and the new selected value of the userPokemon
    userData.push( userPokemon )
// created a new variable for the computer player and picked the second pokemon from our pokemon object
        let compPokemon =pokemon[1]
//  used  Cookies method and Json method to get and store data respectively as needed 
        let userPokemon_json = JSON.stringify( userData )
        let compPokemon_json = JSON.stringify(compPokemon)
        Cookies.set( `user_hp`, userPokemon[`max_health`])
        Cookies.set( `comp_hp`, compPokemon[`max_health`])
        Cookies.set( `user_pokemon`, userPokemon_json)
        Cookies.set( `computer_pokemon`, compPokemon_json )

    
}

// used a querySelector to select from the available pokemons in the index.html and added an
// event - listener to the link that will take  players to the battle filed // the battel_arean.html
let selection_btn = document.querySelectorAll( `.selection` )

for ( let i = 0; i < selection_btn.length; i++ ){
    selection_btn[i].addEventListener( `click`, selectPokemon )
}