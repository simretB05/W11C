    // let randomDamageIndex = [Math.floor( Math.random() * [randomAttack].length)]// 0,1 length 2


    let main_display = document.querySelector( `.main_section` )
    let getmain = document.querySelector( `main` )
    
    let userPokemon_json = Cookies.get( `user_pokemon` )
    let userSelection = JSON.parse( userPokemon_json )
    
    let compPokemon_json =Cookies.get(`computer_pokemon`)
    let compSelection = JSON.parse( compPokemon_json )
    
    let user_health = Cookies.get(`user_hp`)
    let comp_health = Cookies.get( `comp_hp`)
    

    for ( let i = 0; i < userSelection.length; i++ ){
        
        let damageHTML = ''
            for ( let x = 0; x < userSelection[i][`attacks`].length;  x++){
                damageHTML += `<button id="attack_btn" 
                style="text-decoration:none; border-radius:10px; cursor: pointer;
                box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); background-color:white;
                padding:5px;  width:90px"  class="selection"
                damage_value="${userSelection[i][`attacks`][x][`damage`]}">${ userSelection[i][`attacks`][x][`name`]}</button>
                `
            }
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
        main_display.insertAdjacentHTML( `afterbegin`,
                    ` <div class="main">
                    <img style="width:80px; height:80px; margin:30px;" src="${compSelection[`image_url`] }" alt="Pokémon image">
                    <p id="comp_hp_text" style=" width:30px; text-align:center;background-color:white;">${compSelection[`max_health`]}</p>

                    <h2 class="name">${compSelection[`name`] } </h2>
                    </div>
                    `)
     
function compAttack()
{
                   
    let randomAttackIndex = [Math.floor( Math.random() * pokemon[1][`attacks`].length )]//0,1,2
                
    let randomAttack = pokemon[1][`attacks`][randomAttackIndex]//{ name:`Defog`, damage:7}

    let randomDamage = randomAttack[`damage`]// 6,7,5
        user_health= user_health -  randomDamage
        Cookies.set( `user_hp`, user_health )
        let user_display = document.getElementById( `user_hp_text` )
        user_display[`innerHTML`] = user_health

    }
// let new_user_hp = []
// let new_comp_hp = []
    function userAttack( details ){
        let attackValue = {
            damage: details[`target`].getAttribute( `damage_value` ),
        }
       // if ( !( user_health === undefined && comp_health === undefined ) ){ 
        //     // new_user_hp = user_health.slice()
        //     // new_comp_hp = comp_health.slice()

          
        // }
        comp_health = comp_health - attackValue[`damage`]
        Cookies.set( `comp_hp`, comp_health )

        let comp_display = document.getElementById( `comp_hp_text` )
        comp_display[`innerHTML`] = comp_health
        setTimeout( compAttack, 3000 )
        

        
    }
        

        
let attack_button = document.querySelectorAll( `#attack_btn` )
        for ( let i = 0; i < attack_button.length; i++ ){ 
                
            attack_button[i].addEventListener( `click`, userAttack )
            
        }

    
    
    