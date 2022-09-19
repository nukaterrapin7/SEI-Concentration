/*---Constants---*/
const WIN

/*---Variables---*/
let board, winner

/*---Cached Elements---*/
const startBtnEl = document.querySelector('');
const resetBtnEl = document.querySelector('rButton');
const boardEl = document.getElementById('board');

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