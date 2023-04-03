let get_main = document.querySelector( `.main_section` )
let getmain = document.querySelector(`main`)
let userPokemon_json = Cookies.get( `selected_pokemon` );

let selection_json = JSON.parse(userPokemon_json );

for ( i = 0; i < selection_json.length; i++ )
{
 

    get_main.insertAdjacentHTML( `afterbegin`,
        ` <div class="main">
<h2 class="name">${ selection_json[i][`name`] } </h2>
<img style="width:80px; height:80px; margin:30px;" src="${ selection_json[i][`image_url`] }" alt="Pokémon image">
<button style="text-decoration:none; border-radius:10px;  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); background-color:white; padding:5px; width:90px"  class="selection" selection_kind="Pikachu">${ selection_json[i][`attacks`][i][`name`]} </button>
<p id="user_hp">${ selection_json[i][`max_health`] }</p>
</div>
` )

}