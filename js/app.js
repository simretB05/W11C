//selected the the section where the pokes are displyed with queryselector
let get_main = document.querySelector( `#main` );

for ( let i = 0; i <pokemon.length; i++ ){
    get_main.insertAdjacentHTML( `beforeend`, 
    `<div class="main">
    <h2 class="name">${pokemon[i][`name`]} </h2>
    <img src="${pokemon[i][`image_url`]}" alt="Pokémon image">
    <button class="selection" selection_kind="Pikachu">Choose Me</button>
     </div>
  `)

}


