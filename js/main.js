/*--- Constants---*/
const board = document.querySelector('.board');
const tileArrOne = [
    {name: 'Alien', img: 'images/Alien.png'},
    {name: 'Alien', img: 'images/Alien.png'},
    {name: 'Astronaut', img: 'images/Astronaut.png'},
    {name: 'Astronaut', img: 'images/Astronaut.png'},
    {name: 'Big Dipper', img: 'images/Big Dipper.png'},
    {name: 'Big Dipper', img: 'images/Big Dipper.png'},
    {name: 'Black Hole', img: 'images/Black Hole.png'},
    {name: 'Black Hole', img: 'images/Black Hole.png'},
    {name: 'Comet', img: 'images/Comet.png'},
    {name: 'Comet', img: 'images/Comet.png'},
    {name: 'Earth', img: 'images/Earth.png'},
    {name: 'Earth', img: 'images/Earth.png'},
    {name: 'Galaxy', img: 'images/Galaxy.png'},
    {name: 'Galaxy', img: 'images/Galaxy.png'},
    {name: 'ISS', img: 'images/ISS.png'},
    {name: 'ISS', img: 'images/ISS.png'},
    {name: 'Jupiter', img: 'images/Jupiter.png'},
    {name: 'Jupiter', img: 'images/Jupiter.png'},
    {name: 'Mars', img: 'images/Mars.png'},
    {name: 'Mars', img: 'images/Mars.png'},
    {name: 'Mercury', img: 'images/Mercury.png'},
    {name: 'Mercury', img: 'images/Mercury.png'},
    {name: 'Moon', img: 'images/Moon.png'},
    {name: 'Moon', img: 'images/Moon.png'},
    {name: 'Neptune', img: 'images/Neptune.png'},
    {name: 'Neptune', img: 'images/Neptune.png'},
    {name: 'Observatory', img: 'images/Observatory.png'},
    {name: 'Observatory', img: 'images/Observatory.png'},
    {name: 'Rocket Ship', img: 'images/Rocket Ship.png'},
    {name: 'Rocket Ship', img: 'images/Rocket Ship.png'},
    {name: 'Satellite', img: 'images/Satellite.png'},
    {name: 'Satellite',  img: 'images/Satellite.png'},
    {name: 'Saturn', img: 'images/Saturn.png'},
    {name: 'Saturn', img: 'images/Saturn.png'},
    {name: 'Solar System', img: 'images/Solar System.png'},
    {name: 'Solar System', img: 'images/Solar System.png'},
    {name: 'Space Rover', img: 'images/Space Rover.png'},
    {name: 'Space Rover', img: 'images/Space Rover.png'},
    {name: 'Star', img: 'images/Star.png'},
    {name: 'Star', img: 'images/Star.png'},
    {name: 'Sun', img: 'images/Sun.png'},
    {name: 'Sun', img: 'images/Sun.png'},
    {name: 'Telescope', img: 'images/Telescope.png'},
    {name: 'Telescope', img: 'images/Telescope.png'},
    {name: 'UFO', img: 'images/UFO.png'},
    {name: 'UFO', img: 'images/UFO.png'},
    {name: 'Uranus', img: 'images/Uranus.png'},
    {name: 'Uranus', img: 'images/Uranus.png'}
];
const resetBtnEl = document.getElementById('reset');

/*---Cached Elements---*/
let winner
const messageDisplayEl = document.querySelector('h3');
var tilesPicked = [];
var tilesPickedId = [];
var tilesMatched = [];


/*---Event Listeners---*/
resetBtnEl.addEventListener('click', handleResetClick);


/*---Functions---*/

function init() {
    for (let i = 0; i < tileArrOne.length; i++) {
        var tile = document.createElement('img');
        tile.setAttribute('src', 'images/card back.png');
        tile.setAttribute('data-id', i);
        tile.addEventListener('click', flip);
        board.appendChild(tile);
        tileArrOne.sort(() => 0.5 - Math.random());
        winner = null;
    }
};

init();

function checkMatch() {
    var tiles = document.querySelectorAll('img')
    const firstPick = tilesPickedId[0]
    const secondPick = tilesPickedId[1]
    if (tilesPicked[0] === tilesPicked[1] && tilesPickedId[0] !== tilesPickedId[1]) {
        tilesMatched.push(tilesPicked)
        tiles[firstPick].setAttribute('src', 'images/check-mark.png')
        tiles[secondPick].setAttribute('src', 'images/check-mark.png')
        tiles[firstPick].classList.add('pair') 
        tiles[secondPick].classList.add('pair') 
    } else {
        tiles[firstPick].setAttribute('src', 'images/card back.png')
        tiles[secondPick].setAttribute('src', 'images/card back.png')
    }
    tilesPicked = []
    tilesPickedId = []
    checkForWin()
};

function flip() {
    var tileID = this.getAttribute('data-id')
    tilesPicked.push(tileArrOne[tileID].name)
    tilesPickedId.push(tileID)
    this.setAttribute('src', tileArrOne[tileID].img)
    if (tilesPicked.length === 2) {
        setTimeout(checkMatch, 400)
    }
};

function checkForWin() {
    if(tilesMatched.length === tileArrOne.length/2) {
        messageDisplayEl.innerText = "You matched them all! You're the best in the galaxy!"
    }
};

function handleResetClick() {
    board.innerHTML=""
    init()
};