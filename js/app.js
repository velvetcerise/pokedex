 function handleResponse(pokemon) {
        console.log('the ajax request has finished!');
        console.log(pokemon);
 }

//   function addPokemon(pokemon){
//     console.log(pokemon);
//    $('#pokemon').html(`<div class='style'>
//     < img class = "prueba"
//     https: //dummyimage.com/280x300/d13d1f/ffffff.png&text=pokemon  alt="muestra">
//     <div class="body">
//       <h5 class="name">${pokwmon.name || ''}</h5>
//       <h6>@${pokemon.login}</h6>
//       <p class="card-text">${pokemon.bio || ''}</p>
//       <a href="${pokemon.html_url}" class="btn btn-primary">ver más información</a>
//     </div>
//   </div>`*/);
//    }

   $('#searcher').submit(function (e) {
       e.preventDefault();

       var searchInf = $('#keyword');
       var getPkmn = searchInf.val(); 
        console.log(getPkmn);
      //objeto de configuración
      //request
        $.ajax({ url: `https://pokeapi.co/api/v2/pokemon/${getPkmn}`
        }).done(handleResponse); //el método .done, sustituye onload()

       
  
    });
//limpiando callbacks
