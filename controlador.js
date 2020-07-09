//este sera el consumo del servicio de spotify para traer conciones 


//1. Definir la url. 

let url="https://api.spotify.com/v1/artists/4rTv3Ejc7hKMtmoBOK1B4T/top-tracks?country=ES";

//2. Definir el token o permiso de acceso. 

let token="Bearer BQCX6bfKxd3sfAz_wKIBESMzX9_1VP7hh7jMfBmR7qjHhTULBKpnTwLwpGkmGqYVweZfC__s_5Ufn32P4835L3F7sfh0IzxLE7VYBMNQvUbTnJ-czW0LRoFwl0iKLHGCJv-A4LCfrIrICvSXkDVy-L1S_FftNPE";

//3. Definir objeto AJAX.

let objAJAX= new XMLHttpRequest(); 

//4. Abrir la conexion.

objAJAX.open('GET', url, true);

//5. Crear en cabezado de conexcion.

objAJAX.setRequestHeader8('Authorization',token);

//6. Cargarlos datos del sevircio.
objAJAX.onload = function() {

    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks);
    console.log(respuesta.tracks[0]);
    console.log(respuesta.tracks[0].album);
}

//Enviamos la peticion
objAJAX.send(); 