/*---Constants---*/
const WIN
const cardArr = [
    {
        name: 'Uranus',
        img: card.uranus
    }
]

/*---Variables---*/
let board, winner

/*---Cached Elements---*/
let startBtnEl = document.querySelector('');
let resetBtnEl = document.querySelector('rButton');
let boardEl = document.getElementById('board');

/*---Event Listeners---*/
startBtnEl.addEventListener('click', handleStartClick);
resetBtnEl.addEventListener('click', handleResetClick);
boardEl.addEventListener('click', handleBoardClick);

/*---Functions---*/
function init() {
    turn = 1
    board = [null, null,null,null, null,null,null, null,null,null, null,null,null, null,null,null, null,null,null, null,null,null, null,null]
    winner = null
    render()
};

function handleStartClick() {
    init()
}