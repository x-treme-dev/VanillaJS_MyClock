"use strict"
 
 /* часы, минуты, секунды должны быть в градусах
    Отсчет часов начинается от 0
	Чтобы получить положение часовой стрелки в градусах, нужно взять остаток от деления
	19 часов % 12 = получим остаток от деления 7  * 30 градусов = 210 градусов, 
	что соответсвует 19 часам.
	0 часов = 0 градусов
	3 часа = 90 градусов
	6 часов = 180 градусов
	9 часов = 270 градусов и т.д.
	Наименьшее деление циферблата соответствует 6 градусам. 
	Каждый час соответсвуют углу в 30 градусов.
 */
 const deg = 6; //угол поворота
 let hourArrow  = document.querySelector('#hour-arrow');
 let minuteArrow  = document.querySelector('#minute-arrow');
 let secondArrow  = document.querySelector('#second-arrow');

function clock(){
	let date = new Date();
	let hour = date.getHours() % 12; // 0 - 12
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	 
	var hourDeg = hour * 30 + (minutes * 0.5); 
	var minuteDeg = minutes * 6; // минутная стрелка поворачивается на 6 градусов за минуту, т.е. на 1 деление
	var secondDeg = seconds * 6; /* секундная стрелка поворачивается на 6 градусов за секунду, 
	тогда за минуту она пройдет весь циферблат */	
	 
	 
	//получаем время, соответствующее внутреннему времени узла
	
	
	hourArrow.style.transform = 'rotate(' + hourDeg + 'deg)';
	minuteArrow.style.transform = 'rotate(' + minuteDeg + 'deg)';
	secondArrow.style.transform = 'rotate(' + secondDeg + 'deg)';
	 
	setTimeout(clock, 1000);
};

clock();

//running string
let p = document.querySelector('p');
let text = p.innerHTML;

setInterval(function (){
    text = text.substring(1) + text[0];
    p.innerHTML = text;
	 
}, 500);

  
 



  
