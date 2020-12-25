const cnv = document.getElementById('background');
const ctx = cnv.getContext('2d');
let pos = {x: 0, y: 0};
let vel = {x: 1.5, y: 1};

function update() {    
ctx.fillStyle = '#1D8A53';
ctx.fillRect(0, 0, cnv.width, cnv.height);

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.ellipse(pos.x, pos.y, 25, 25, 0, 0, 2 * Math.PI);
ctx.fill();

pos = {x: pos.x + 1 * vel.x, y: pos.y + 1 * vel.y};
vel = {x: vel.x * (pos.x >= cnv.width || pos.x <= 0 ? -1 : 1), y: vel.y * (pos.y >= cnv.height || pos.y <= 0 ? -1 : 1)};

window.requestAnimationFrame(update);
}

const map = (x, start1, end1, start2, end2) => (((x - start1) / (end1 - start1) * (end2 - start2)) + start2);

const scrollUp = () => window.scrollTo({top: 0, behavior: 'smooth'});

document.addEventListener('scroll', (e) => {
const screens = window.scrollY / window.innerHeight;
const numScreens = Math.floor(screens);
const nav = $('#navbar');
//nav.removeClass(['bg-steel-blue', 'bg-dark-gray', 'bg-sea-green', 'bg-dark-violet']);

switch(numScreens) {
    case 0: //rgb(78, 105, 150) -> rgb(68, 175, 105)
        nav.css('background-color', `rgb(${map(screens, 0, 1, 78, 68)}, ${map(screens, 0, 1, 105, 175)}, ${map(screens, 0, 1, 150, 105)}) `);
        break;
    case 1: //rgb(68, 175, 105) -> rgb(52, 58, 64)
        nav.css('background-color', `rgb(${map(screens, 1, 2, 68, 52)}, ${map(screens, 1, 2, 175, 58)}, ${map(screens, 1, 2, 105, 64)})`);
        break;
    case 2: //rgb(52, 58, 64) -> rgb(127, 98, 137)
        nav.css('background-color', `rgb(${map(screens, 2, 3, 52, 127)}, ${map(screens, 2, 3, 58, 98)}, ${map(screens, 2, 3, 64, 137)})`);
        break;
    case 3: //rgb(127, 98, 137) -> rgb(78, 105, 150)
        nav.css('background-color', `rgb(${map(screens, 3, 4, 127, 78)}, ${map(screens, 3, 4, 98, 105)}, ${map(screens, 3, 4, 137, 150)})`);
        break;

}
})

//window.requestAnimationFrame(update);