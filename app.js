let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let btn1 = document.getElementById("btn1");
let inputText = document.getElementById("input_text");
inputText.style.display = 'none';
let back = document.getElementById("back");

btn1.addEventListener("click", function(){
    inputText.style.display = 'block';
		// btn1.style.visibility = 'hidden';
    btn1.style.display = 'none'
});

back.addEventListener("click", function (){
    btn1.style.display = 'block';
    inputText.style.display = 'none'
    // inputText.style.visibility = 'hidden';
})

// Telegram.WebApp.onEvent("mainButtonClicked", function(){
// 	tg.sendData(item);
// });
//
// let usercard = document.getElementById("usercard");
//
// let p = document.createElement("p");

// p.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}`;


// usercard.appendChild(p);
