// selected the necessary tags from the battle_arena.html using query selectors
    let main_display = document.querySelector( `.main_section` )
    let getmain = document.querySelector( `main` )
    let result_display = document.querySelector( `#result` )
    
//get the value of a cookie and  stored it to the variable userPokemon_json as a user player data
    let userPokemon_json = Cookies.get( `user_pokemon` )
// used Json.parse to change the data type from string to object from and store it in a new variable named userSelection
    let userSelection = JSON.parse( userPokemon_json )
//get the value of a cookie and  stored it to the variable CompPokemon_json as a computer player data
    let compPokemon_json = Cookies.get( `computer_pokemon` )
// used Json.parse to change the data type from string to object from and store it in a new variable named compSelection
    let compSelection = JSON.parse( compPokemon_json )
//get the user and the computer player health values from cookie jar and 
// stored it in the user_health and comp_health variables  respectively 
    let user_health = Cookies.get(`user_hp`)
    let comp_health = Cookies.get( `comp_hp`)
    
// configured a loop that loops through the value of the userSelection data and display it in the battle_arena.html dynamically
    for ( let i = 0; i < userSelection.length; i++ ){
//created a variable that is storing an empty string
        let damageHTML = ''
//created a loop that will loop through the userSelection attacks object
//  value and will store the damage value inside a button
            for ( let x = 0; x < userSelection[i][`attacks`].length;  x++){
                // adding the value of the html for a button and storing it to the value of the empty
                //  string on top for every value of damage in the loop
                damageHTML += `<button id="attack_btn" 
                style="text-decoration:none; border-radius:10px; cursor: pointer;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); background-color:white;
                padding:5px;  width:90px"  class="selection"
                damage_value="${userSelection[i][`attacks`][x][`damage`]}">${ userSelection[i][`attacks`][x][`name`]}</button>
                `
        }
        //using insertAdjacentHtml method to add the desired html dynamically 
        // with the values of userSelection data.also adding the value of damageHTML in the desired position
        main_display.insertAdjacentHTML( `afterbegin`,
            ` <div style="display:grid" class="main">
                <img style="width:80px; height:80px; margin:30px;" src="${ userSelection[i][`image_url`] }" alt="Pokémon image">
                <p id="user_hp_text"  style="width:30px;text-align:center;background-color:white;">${ userSelection[i][`max_health`] }</p>

                <h2 class="name" style="margin-bottom:1rem;">${ userSelection[i][`name`] } </h2>

                <div class="damage_types"  style="gap:1rem; width:600px; display:grid; grid-template-columns: 1fr 1fr 1fr;width:224px; ">
                   ${damageHTML}
                </div>
            </div>`)
       
    }
//using insertAdjacentHtml method to add the desired html dynamically  with a value of compSelectiondata 
        main_display.insertAdjacentHTML( `afterbegin`,
                    ` <div class="main">
                    <img style="width:80px; height:80px; margin:30px;" src="${compSelection[`image_url`] }" alt="Pokémon image">
                    <p id="comp_hp_text" style=" width:30px; text-align:center;background-color:white;">${compSelection[`max_health`]}</p>

                    <h2 class="name">${compSelection[`name`] } </h2>
                    </div>
                    `)

let new_comp_h;

//declared a function fro the computer payer
//  that will set a new value of the user_health after the user has been attaked 
    function compAttack(){
// using MATH.random to get a random value of  attacks assigned to the computer
//player since we have 3 kinds of attaks with different damage value  
// here we will get 3 in length  and random value of either 0, 1 or 2
        let randomAttackIndex = [Math.floor( Math.random() * pokemon[1][`attacks`].length )]//0,1,2
//used the randomAttackIndex to get the random attacks object
        let randomAttack = pokemon[1][`attacks`][randomAttackIndex]//{ name:`Defog`, damage:7} etc..
// used the randomAttack object and acssesed the damage value randomly 
// and assign it to a new variable
        let randomDamage = randomAttack[`damage`]// 6,7,5 etc..
//   used the asign method  to get a new value of user_health
//  after the user palyer has been attacked by computer palyer the randomDamage
        user_health = user_health - randomDamage
        //setting the updated value of the user_health value
            Cookies.set( `user_hp`, user_health )


        }

    let = Cookies.get( `user_hp` )
    let comp_display = document.getElementById( `comp_hp_text` )
    let new_comp_hp= Cookies.get( `comp_hp`)
        comp_display[`innerHTML`] = new_comp_hp
    

    
    function userAttack( details ){
        let min_health = 0
        let attackValue = {
            damage: details[`target`].getAttribute( `damage_value` ),
        }
        let user_display = document.getElementById( `user_hp_text` )
        user_display[`innerHTML`] = new_user_hp

        comp_health = comp_health - attackValue[`damage`]
        Cookies.set( `comp_hp`, comp_health )
        new_comp_hp= comp_health
        setTimeout( compAttack, 3000 )

        if (new_user_hp <= min_health){ 
            
            alert(`User Lost`)

            
        } else if ( new_comp_hp <= min_health )
        {
            alert(`User Won`)
         
            // result_display.insertAdjacentHTML(`beforeend`,`<h2> User Won</h2>`)


        } 
        

}
    
let attack_button = document.querySelectorAll( `#attack_btn` )
        for ( let i = 0; i < attack_button.length; i++ ){ 
                
            attack_button[i].addEventListener( `click`, userAttack )
            
        }