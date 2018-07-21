//Por buena practica debe ir a la altura de mi archivo raíz

function getPokmn () {
    let getEntrie = data.pokemon_entries;
    //pintar fuera de mi for o loop infinito
    
       console.log(getEntrie);
    let getPkmnInfo =  getEntrie.forEach(element =>{
    let getSpecies = element.pokemon_species;
    // console.log(getSpecies);
    let getName = getSpecies.name;
    // console.log(getName);
    let getUrl = getSpecies.url;
    // console.log(getUrl);
    //painting   
       return
        
        `<div class="col xl4 center" id="pkmn-card">
                <img src="assets/images/Pokeball.png" id="pokeball" class="responsive-img"/>
                    <p> ${getName} </p>
                </div>
            </div>
        </div>`
    })
}

describe("A suite", function() {
    // it("contains spec with an expectation", function() {
    //     expect(true).toBe(true);
        //const nuevoValor = 1 / 0;
        //Nueva suit, rendereando un pokemon
        it('Pinta un Pokemon', () => {
            const esperando = '<div class="col xl4 center" id="pkmn-card"><img src="assets/images/Pokeball.png" id="pokeball" class="responsive-img"> <p> ivysaur </p></div>'
            //.toEqual(jasmine.any(Function))
        
            let entrada = 
                [ {
                    "entry_number":2,
                    "pokemon_species":{
                    "url":"https://pokeapi.co/api/v2/pokemon-species/2/",
                    "name":"ivysaur"}
                    }
                ]

                
            
            
            expect(entrada).toEqual(jasmine.any(Object))

            
            const actual = describe(entrada)
            expect(actual).toEqual(esperando)
        })

    });
    //});

    //spec = especificación, esta en nuestro it.
    /* No tiene expectativas 
    
    Dentro de mi llamada expecto pongo algo, cadena, objeto, (lo que define mi expectativa), 
    esta llamada nos da un objeto nos da un método, esto es un matcher (coincidencia), ahora usamos matcher toBe, hay varios, incluso podemos definir nuestros matchers.
        expect = lo que esperas que pase
        toBe =
    */

    //Hacer prueba 

    //1.- Lo que recibe y lo que pinta

    //Jasmin any sirve para comprobar que un objeto es de un tipo... que algo sea un método, algo sea null, etc.


