var bg = document.getElementById('bg');
var change = document.getElementById('change');
var color1 = document.getElementById('col1');
var color2 = document.getElementById('col2');
var h3 = document.getElementsByTagName('h3');
var css = document.getElementById('css');
var body = document.getElementById('m');

// console.log(body);

function changeBackgroundColor(){
	body.style.background = 
		'linear-gradient(to right' 
		+ ', ' 
		+ color1.value 
		+ ', ' 
		+ color2.value 
		+ ')';

css.textContent = body.style.background + ";"
}

color1.addEventListener("input", changeBackgroundColor);

color2.addEventListener("input", changeBackgroundColor);