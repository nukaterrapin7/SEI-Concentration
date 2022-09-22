/*--- Constants---*/
const board = document.querySelector('.board');
const tileArrOne = [
    {name: 'alien', img: 'images/alien.png'},
    {name: 'alien', img: 'images/alien.png'},
    {name: 'astronaut', img: 'images/astronaut.png'},
    {name: 'astronaut', img: 'images/astronaut.png'},
    {name: 'big-dipper', img: 'images/big-dipper.png'},
    {name: 'big-dipper', img: 'images/big-dipper.png'},
    {name: 'black-hole', img: 'images/black-hole.png'},
    {name: 'black-hole', img: 'images/black-hole.png'},
    {name: 'comet', img: 'images/comet.png'},
    {name: 'comet', img: 'images/comet.png'},
    {name: 'earth', img: 'images/earth.png'},
    {name: 'earth', img: 'images/earth.png'},
    {name: 'galaxy', img: 'images/galaxy.png'},
    {name: 'galaxy', img: 'images/galaxy.png'},
    {name: 'iss', img: 'images/iss.png'},
    {name: 'iss', img: 'images/iss.png'},
    {name: 'jupiter', img: 'images/jupiter.png'},
    {name: 'jupiter', img: 'images/jupiter.png'},
    {name: 'mars', img: 'images/mars.png'},
    {name: 'mars', img: 'images/mars.png'},
    {name: 'mercury', img: 'images/mercury.png'},
    {name: 'mercury', img: 'images/mercury.png'},
    {name: 'moon', img: 'images/moon.png'},
    {name: 'moon', img: 'images/moon.png'},
    {name: 'neptune', img: 'images/neptune.png'},
    {name: 'neptune', img: 'images/neptune.png'},
    {name: 'observatory', img: 'images/observatory.png'},
    {name: 'observatory', img: 'images/observatory.png'},
    {name: 'rocket-ship', img: 'images/rocket-ship.png'},
    {name: 'rocket-ship', img: 'images/rocket-ship.png'},
    {name: 'satellite', img: 'images/satellite.png'},
    {name: 'satellite',  img: 'images/satellite.png'},
    {name: 'saturn', img: 'images/saturn.png'},
    {name: 'saturn', img: 'images/saturn.png'},
    {name: 'solar-system', img: 'images/solar-system.png'},
    {name: 'solar-system', img: 'images/solar-system.png'},
    {name: 'space-rover', img: 'images/space-rover.png'},
    {name: 'space-rover', img: 'images/space-rover.png'},
    {name: 'star', img: 'images/star.png'},
    {name: 'star', img: 'images/star.png'},
    {name: 'sun', img: 'images/sun.png'},
    {name: 'sun', img: 'images/sun.png'},
    {name: 'telescope', img: 'images/telescope.png'},
    {name: 'telescope', img: 'images/telescope.png'},
    {name: 'ufo', img: 'images/ufo.png'},
    {name: 'ufo', img: 'images/ufo.png'},
    {name: 'uranus', img: 'images/uranus.png'},
    {name: 'uranus', img: 'images/uranus.png'}
];
const resetBtnEl = document.getElementById('reset');

/*---Cached Elements---*/
let winner
const messageDisplayEl = document.querySelector('h2');
var tilesPicked = [];
var tilesPickedId = [];
var tilesMatched = [];


/*---Event Listeners---*/
resetBtnEl.addEventListener('click', handleResetClick);


/*---Functions---*/

function init() {
    for (let i = 0; i < tileArrOne.length; i++) {
        var tile = document.createElement('img');
        tile.setAttribute('src', 'images/card-back.png');
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
        tiles[firstPick].setAttribute('src', 'images/card-back.png')
        tiles[secondPick].setAttribute('src', 'images/card-back.png')
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