//  function handleResponse(pokemon) {
//         console.log('wuju!');
//         console.log(pokemon);
//  }

// //   function addPokemon(pokemon){
// //     console.log(pokemon);
// //    $('#pokemon').html(`<div class='style'>
// //     < img class = "prueba"
// //     https: //dummyimage.com/280x300/d13d1f/ffffff.png&text=pokemon  alt="muestra">
// //     <div class="body">
// //       <h5 class="name">${pokwmon.name || ''}</h5>
// //       <h6>@${pokemon.login}</h6>
// //       <p class="card-text">${pokemon.bio || ''}</p>
// //       <a href="${pokemon.html_url}" class="btn btn-primary">ver más información</a>
// //     </div>
// //   </div>`*/);
// //    }

//    $('#searcher').submit(function (e) {
//        e.preventDefault();

//        var searchInf = $('#keyword');
//        var getPkmn = searchInf.val(); 
//         console.log(getPkmn);
//       //objeto de configuración
//       //request
//         $.ajax({ url: `https://pokeapi.co/api/v2/pokemon/${getPkmn}`
//         }).done(handleResponse); //el método .done, sustituye onload()


//   });
//limpiando callbacks
//USAR FETCH, PUNTOS EXTRAS
let container = document.getElementById('container') ;
// console.log(container)
    function handleResponse(data){
        let getEntrie = data.pokemon_entries;
        //pintar fuera de mi for o loop infinito
        let getCard = ' ';
           console.log(getEntrie);
        let getPkmnInfo =  getEntrie.forEach(element =>{
        let getSpecies = element.pokemon_species;
        // console.log(getSpecies);
        let getName = getSpecies.name;
        // console.log(getName);
        let getUrl = getSpecies.url;
        // console.log(getUrl);
        //painting   
            getCard += 
            
            `<div class="col xl4 center" id="pkmn-card">
                    <img src="assets/images/Pokeball.png" id="pokeball" class="responsive-img"/>
                        <p> ${getName} </p>
                    </div>
                </div>
            </div>`
        })
        //Pintando 
        container.innerHTML = getCard;
        console.log(getCard)
    }
    
    //Calling Api with ajax
        $.ajax({ 
            url: `https://pokeapi.co/api/v2/pokedex/1/`
        }).done(handleResponse); //el método .done, sustituye onload()
