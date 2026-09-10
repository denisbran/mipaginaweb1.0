num = 255;
texto = 'Hola mundo';
decimal = 3.1416;

console.log("Tipo de variable: " + typeof num);
console.log("Valor de la variable: " + num);

let elemento_html = document.querySelector('body');

elemento_html.appendChild(document.createElement('div'));

let elemento_div = document.querySelector('div');
elemento_div.style.backgroundColor = ('rgb(0, 162, 255)');
elemento_div.style.width = ('440px');
elemento_div.textContent = typeof num + ": " + num + "; "
+ typeof texto + ": " + texto + "; " +
typeof decimal + ": " + decimal + "; ";
