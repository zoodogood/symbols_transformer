"use strict"
console.clear()
console.log(console);
var textarea = document.getElementById('textarea');
var buttongo = document.getElementById('buttongo');
var world = document.getElementById('world');
var change1 = document.getElementById('change1');
var change2 = document.getElementById('change2');
var change3 = document.getElementById('change3');
var colorful = document.getElementById('colorful');
var colorfulopen = document.getElementById('colorfulopen');
document.getElementById('right').addEventListener("click", () => editChange("right"));
document.getElementById("left").addEventListener("click", () => editChange("left"));
change1.addEventListener("click", () => editChange("right"));
change3.addEventListener("click", () => editChange("left"));
var temp = "";


if (window.innerWidth < 910) {
  change1.style.cssText = "display: none";
  change3.style.cssText = "display: none";
  console.log(window.innerWidth);
}



buttongo.addEventListener("mousedown", function(){
  buttongo.style.cssText = "margin-top: 3px; border: 2px ridge #FFFFFF; width: 145px; display: inline;"
  go();
  buttongo.addEventListener("mouseleave", remove)
})
buttongo.addEventListener("mouseup", remove,)

function remove() {
  buttongo.style.cssText = "margin-top: 0px; border: 2px solid #FFFFFF; width: 150px; display: inline;"
  buttongo.removeEventListener("mouseleave", remove)
}


/*document.addEventListener('keydown', function(e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 37:
      editChange("left");
    break;
    case 39:
      editChange("right");
    break;
    case 38:
      textarea.focus();
    break;
}
});
*/


var change = ["Числа в код", "Код в числа", "Символы в код", "Код в символы"];
change1.textContent = change[0];
change2.textContent = change[1];
change3.textContent = change[2];



function editChange(side) {
console.log(side);
if (side == "left") change.push(change.shift());
if (side == "right") change.unshift(change.pop());
change1.textContent = change[0];
change2.textContent = change[1];
change3.textContent = change[2];
}


function go(){
  console.log(change[1]);
  let answer;
  let value = textarea.value;
  switch (change[1]) {
    case "Код в числа":
      answer = Math.desat(value);
      break;
    case "Числа в код":
      answer = Math.dable(value);
      break;
    case "Символы в код":
      answer = Math.convert(value);
      break;
    case "Код в символы":
      answer = Math.notconvert(value);
      break;
    case "-console":
      temp = "#"
      consol(value);
      console.log(temp);
      if (temp == "#") temp = "¯\\_(ツ)_/¯";
      answer = temp;   //Если в консоли ничего не выводится
      break;
    default:
      alert("Произошла ошибка (╯︵╰,)");
      break;
  }
  editHello(String(answer));
}


function editHello(say) {
  var start = new Typed('#world', {
    strings: ["null", say  ],
    typeSpeed: 30,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    smartBackspace: false,
    onComplete:  function() {textarea.value = world.textContent;}
  });

}


function consol(value) {
  value = String(value)
  if (value[0] != "-"){
    eval(value);
  }


}


Math.dable = function(numb){
    numb = Number(numb);
    let cubenum = 0;  // степень
    let cube = 0; // исход степени
    let say = ""//без этого будет ошибка в строке 15 переменная не существует
    while (numb > cube -1){ // ждет пока cube не станет больше чтоб потом отнять
        cube = Math.pow(2, cubenum); //возводит в степень
        cubenum++; // 1, 2, 4, 8, 16, 32, 64 ...
    }
    while (true){ //Вечный цикл

    cube /= 2; // нам нужно разделить число на числа равние 2 в степени
    console.log(`${numb} - ${cube} = ${numb-cube}`);//из этого можно узнать все
    numb -= cube;// отнимает

    if(numb>= 0){
        say += "1";
    }else{
        say += "0";
        numb += cube;
    }
    if(cube < 2){
    return say;
    }
    }
}



Math.desat = function (numb){ //262145
    numb = String(numb);
    if (numb == "-console"){
      change.unshift("-console");
      editChange("right");
      return "console";
    }

    let leght = numb.length;
    let cubenum = 0;
    let say = 0;
    for (let i = leght; i > -1; --i){
        if (numb[i]=="1"){
            say += Math.pow(2,cubenum);
        }
        console.log(say);
        cubenum++;
      }
      return say/2;
}
Math.convert = function (numb) {
  let say = ""
  for (let i = 0; i < numb.length; i++){
    say += String(numb[i].charCodeAt() + " ");
  }
  return say;
 }

 Math.notconvert = function (numb) {
    let arr = numb.split(" ");
    let say = "";
    arr.forEach(function(elem){
      say += String.fromCharCode(elem);
    })
    return say;
  }



var start = new Typed('#world', {
  strings: ["null","say \"Hi\"", "and say", "HELLO, WORLD!" ],
  typeSpeed: 30,
  backSpeed: 0,
  fadeOut: true,
  loop: false,
  onComplete:  function() {
    buttongo.style.display = "inline"
    anime({

      targets: '#buttongo',
      width: '145px'
    })
  document.addEventListener('keydown', function(e) {
  if (e.keyCode == 13) {
    go();
  }
  });
  }
});

Math.chance = Math.random;

Math.random = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.chance() * (max - min)) + min; //Максимум не включается, минимум включается
}





document.getElementsByClassName("typed-cursor")[0].style.cssText =
`color: white;
font-size: 30px;
font-family: Helvetica, sans-serif;
vertical-align:  top;
display: inline`


colorful.open = false;
colorfulopen.addEventListener("click", () => opencolorful())
function opencolorful() {
  if (colorful.open == true) {
    colorful.open = false;
    colorful.style.cssText += "margin-left: -18px";

  }else{
    colorful.open = true;
    colorful.style.cssText += "margin-left: -60px";

  }
}

document.addEventListener ("click", function (e) {
    if (e.target.id != "colorfulopen" && e.target.id != "colorful" && e.target.classList[0] != "colors" && e.target.id != "box" && colorful.open == true) {

      colorful.open = false;
      colorful.style.cssText += "margin-left: -18px"
    }
});





var ground = document.getElementById("background")
colorful.colors = Array.from(document.getElementsByClassName("colors"));
for (var i = 0; i < colorful.colors.length; i++) {
  let color = "";
  switch (i) {
    case 0:
      color = "red";
    break;
    case 1:
      color = "black";
    break;
    case 2:
      color = "green";
    break;
    case 3:
      color = "purpure";
    break;
    case 4:
      color = "random"
    break;
  }

  colorful.colors[i].addEventListener("click", () => editBackgroundColor(color));
}


function editBackgroundColor(color) {
  let element = document.getElementById(color);

  element.style.cssText = "border-radius: 0%;"
  colorful.colors.forEach(function (elem) {
    if (elem.id != element.id) {
      elem.style.cssText = "border-radius: 50%;"
    }
  })

  switch (element.id) {
    case "red":
      ground.style.cssText = `
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(121,9,39,1) 35%, rgba(0,212,255,1) 100%);`
      colorful.style.background =  "linear-gradient(135deg, rgba(0,182,235,1) 0%, #868A8F 100%)";
    break;
    case "purpure":
      ground.style.cssText = `
      background:  linear-gradient(to bottom right, rgb(101, 115, 255), rgb(111, 114, 247), rgb(120, 114, 239), rgb(130, 113, 231), rgb(139, 112, 223), rgb(149, 111, 215), rgb(158, 111, 208), rgb(168, 110, 200), rgb(177, 109, 192), rgb(187, 108, 184), rgb(196, 108, 176), rgb(206, 107, 168));`
        colorful.style.background =  "linear-gradient(135deg, #8B70DF 0%, #868A8F 100%)";
    break;
    case "black":
      ground.style.cssText = `
      background: linear-gradient(135deg, #000 0%, #112 30%, #223 50%, #446 70%, #559 100%);`
      colorful.style.background =  "linear-gradient(135deg, #002 0%, #868A8F 100%)";
    break;
    case "green":
      ground.style.cssText = `
      background: linear-gradient(0deg, rgba(9,61,2,1) 0%,  rgba(0,0,0,1) 25%, rgba(126,190,137,1) 60%, rgba(0,0,0,1) 75%, rgba(126,190,137,1) 100%);`
      colorful.style.background =  "linear-gradient(135deg, rgba(0, 2, 0, 0.2) 0%, #868A8F 100%)";
    break;
    case "random":
      ground.style.cssText = `
      background: linear-gradient(135deg, rgb(${Math.random(1, 255)},${Math.random(1, 255)},${Math.random(1, 255)}) 0%,  rgb(${Math.random(1, 255)},${Math.random(1, 255)},${Math.random(1, 255)}) 25%, rgb(${Math.random(1, 255)},${Math.random(1, 255)},${Math.random(1, 255)}) 60%, rgb(${Math.random(1, 255)},${Math.random(1, 255)},${Math.random(1, 255)}) 75%, rgb(${Math.random(1, 255)},${Math.random(1, 255)},${Math.random(1, 255)}) 100%);`
      colorful.style.background =  ground.style.background;
    break;
  }
  localStorage.setItem("bgColor", element.id);
}
if (localStorage.getItem("bgColor")) editBackgroundColor(localStorage.getItem("bgColor"))
