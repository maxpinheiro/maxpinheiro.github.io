const cnv = document.getElementById('background');
const ctx = cnv ? cnv.getContext('2d') : null;
let selectedProject = '';
//let two = new Two({width: window.width, height: window.height}).appendTo(document.getElementById('background'));
//console.log(two.appendTo);


window.onload = () => {
    $('#selected-project').hide();
    $('#project-list').html(descriptions.map((project, idx) => `
    <div class="col-sm-6 col-md-4">
        <div class="card-bubble card-md my-3 d-flex justify-content-center align-items-center" style="cursor: pointer;" id="card${idx+1}">
            <p class="h3 mt-2">${project.title}</p>
        </div>
    </div>`));
    setCards();
    //window.requestAnimationFrame(update);
};
/*
function update() {    
    ctx.fillStyle = '#45AF69';
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    ctx.fillStyle = 'black';
    ctx.beginPath();
    //ctx.ellipse(pos.x, pos.y, 25, 25, 0, 0, 2 * Math.PI);
    //ctx.fill();

    pos = {x: pos.x + 1 * vel.x, y: pos.y + 1 * vel.y};
    vel = {x: vel.x * (pos.x >= cnv.width || pos.x <= 0 ? -1 : 1), y: vel.y * (pos.y >= cnv.height || pos.y <= 0 ? -1 : 1)};

    window.requestAnimationFrame(update);
}
*/

const scrollUp = () => window.scrollTo({top: 0, behavior: 'smooth'});

document.addEventListener('scroll', (e) => {
    const screens = window.scrollY / window.innerHeight;
    const numScreens = Math.floor(screens);
    const nav = $('#navbar');

    switch(numScreens) {
        case 0: // grey -> green, rgb(52, 58, 64) -> rgb(68, 175, 105)
            nav.css('background-color', `rgb(${map(screens, 0, 1, 52, 68)}, ${map(screens, 0, 1, 58, 175)}, ${map(screens, 0, 1, 64, 105)}) `);
            break;
        case 1: // green -> grey, rgb(68, 175, 105) -> rgb(52, 58, 64)
            nav.css('background-color', `rgb(${map(screens, 1, 2, 68, 52)}, ${map(screens, 1, 2, 175, 58)}, ${map(screens, 1, 2, 105, 64)})`);
            break;
        case 2: // grey -> blue, rgb(52, 58, 64) -> rgb(78, 105, 150)
            nav.css('background-color', `rgb(${map(screens, 2, 3, 52, 78)}, ${map(screens, 2, 3, 58, 105)}, ${map(screens, 2, 3, 64, 150)})`);
            break;
    }
})

const setCards = () => {setColors(); setListeners();};

function setListeners() {
    for (let i = 1; i <= document.getElementsByClassName('card-bubble').length; i++) {
        document.getElementById(`card${i}`).addEventListener('click', () => {
        //$(`#card${i}`).hover(() => {
            if (selectedProject === '') {
                selectedProject = `card${i}`;
                $('#project-list').hide();
                $('#selected-project').show();
                $('#project-description').html(descriptions[i-1].description);
            }
        }, () => {});
    }
}

//$('#selected-project').hover(() => {}, () => {closeProject();});


function closeProject() {
    selectedProject = '';
    $('#selected-project').hide();
    $('#project-list').show();
}

function setColors() {
    const classes = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];
    const cards = document.getElementsByClassName('card-bubble');
    for (let i = 0; i < cards.length; i++) {
        let idx = Math.floor(Math.random() * classes.length);
        let className = classes[idx];
        cards[i].classList.remove(classes);
        cards[i].classList.add(className);
    }
}

function setColorsTheme() {
    const colors = ['#15557D', '#0B9BD9', '#06A191', '#10B37C', '#237A63', '#065052', '#01754B', '#076BB3'];
    const cards = document.getElementsByClassName('card-bubble');
    for (let i = 0; i < cards.length; i++) {
        let idx = Math.floor(Math.random() * colors.length);
        let color = colors[idx];
        cards[i].style.backgroundColor = color;
    }
}

function setColorsRandom() {
    const blue = {r: 20, g: 4, b: 243};
    const green = {r: 7, g: 242, b: 128};
    const cards = document.getElementsByClassName('card');
    for (let i = 0; i < cards.length; i++) {
        const r = Math.random();
        cards[i].style.backgroundColor = `rgb(${map(r, 0, 1, blue.r, green.r)}, ${map(r, 0, 1, blue.g, green.g)}, ${map(r, 0, 1, blue.b, green.b)})`;
    }
}

const map = (x, start1, end1, start2, end2) => (((x - start1) / (end1 - start1) * (end2 - start2)) + start2);
