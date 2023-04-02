//selected the the section where the pokes are displyed with queryselector
let main_section = document.querySelector( `.main_section` );

for ( let i = 0; i <pokemon.length; i++ ){
    main_section.insertAdjacentHTML( `beforeend`, 
    ` <div class="main">
    <h2 class="name">${pokemon[i][`name`]} </h2>
    <img style="width:80px; height:80px; margin:30px; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); " src="${pokemon[i][`image_url`]}" alt="Pokémon image">
    <a style="text-decoration:none; border-radius:10px; border:1px solid black; color:Black; background-color:white; padding:5px;"  href="/pages/battle_arena.html class="selection" selection_kind="Pikachu"> Choose Me</a>

    </div>
  `)

}


