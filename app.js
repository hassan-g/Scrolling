let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let content = document.getElementById('g');


window.onscroll = function () {
    let value = scrollY;
    stars.style.left = value + 'px'
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 1.5 + 'px';
    mountains4.style.top = value + 'px';
    river.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';

    content.style.fontSize = value + 'px'

    if (value >= 73) {

        content.style.fontSize = 73 + 'px';
        content.style.position = 'fixed';

        if (value >= 420) {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }


    }

    if (value >= 65) {
        document.querySelector('.main').style.background = "linear-gradient( #367281, #10001f)";
    } else {
        document.querySelector('.main').style.background = "linear-gradient(#200016, #10001f)";

    }

}

let span = document.querySelector('span');
let turn = "t";



span.onclick = function () {
    if (turn === 't') {
        document.querySelector('ul').style.top = 26 + 'px';
        console.log("t");

        turn = "f"
    } else if (turn === "f") {
        document.querySelector('ul').style.top = -212 + 'px';
        console.log("f");
        turn = "t"
    }
}