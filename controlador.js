//Consumo del servicio de spotyfy para
//traer canciones de un artista


//DEFINIR LA VARIABLE PARA RECIBIR LA ETIQUETA DE IMG1
//let imagen1 = document.getElementById("imagen1");

//1. Definir la URL del servicio
let url = "https://api.spotify.com/v1/artists/4rTv3Ejc7hKMtmoBOK1B4T/top-tracks?country=ES";

//2. Definir el token o permiso de acceso
let token = "Bearer BQCy5ORNesfoXGLUJdh4zlw2BOlVcbK4IjXOC2l8nWpQltBu9yPJTawNgK7cwWH9sKEdSZ7B__VIJ7wZJbwJ8W1rwcwNK6aS9mM62_0nQ7-JWraGy70s0AjCijLJ9iEjegZm_nwHfT3hOdQ8";

let token2 = "Bearer BQCOcEOsDkuEwkfiyRuIaKnTQEZxNeKRY-zQb5FT1CFmtT4YqslbAIto0LixUycv-hEQVb-FAjqJsxv6BB17A2t89CDsck0BMISOqT6Ycurn0JZubvg0ETJNpJl7OdFXHXXS6CWMejSdK_Tjl7pWDjNeeEoa4dQ";
    //3.Definir Objeto AJAX
let objetoAJAX = new XMLHttpRequest();

//4. Abrir la conexion
objetoAJAX.open('GET', url, true);

//5. crear encabezado de conexion
objetoAJAX.setRequestHeader('Authorization', token2);

//6. cargamos los datos del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
    console.log(respuesta.tracks[0].album);
    console.log(respuesta.tracks[0].album.images);
    console.log(respuesta.tracks[0].album.images[0]);
    console.log(respuesta.tracks[0].album.images[0].url);
    console.log(respuesta.tracks[0].album.name);
    console.log(respuesta.tracks[0].preview_url);



    let tutilo = document.getElementById("titulo");
    titulo.textContent = respuesta.tracks[0].album.name;

    let audio = document.getElementById("audio");
    audio.src = respuesta.tracks[0].preview_url;
}



//7. enviamos la peticion
objetoAJAX.send();