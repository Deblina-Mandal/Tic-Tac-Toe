console.log("Welcome to Tic Tac Toe");
let turn_music = new Audio("eat_sound.wav");
let gameover = new Audio("win");
let turn = "X";
let isgameover = false;
let sound_onoff = true;
let boxes = document.getElementsByClassName("box");
let draw_audio = new Audio("mixkit-game-level-completed-2059.wav");

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win

const wins = [
    //rows
    { combo: [1, 2, 3], strikeClass: "strike-row-1" },
    { combo: [4, 5, 6], strikeClass: "strike-row-2" },
    { combo: [7, 8, 9], strikeClass: "strike-row-3" },

    //columns
    { combo: [1, 4, 7], strikeClass: "strike-col-1" },
    { combo: [2, 5, 8], strikeClass: "strike-col-2" },
    { combo: [3, 6, 9], strikeClass: "strike-col-3" },

    //diagonals
    { combo: [1, 5, 9], strikeClass: "strike-diag-1" },
    { combo: [3, 5, 7], strikeClass: "strike-diag-2" },
];



const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let text ="Draw";
    let wins = [
        //rows
        { combo: [0, 1, 2], strikeClass: "strike-row-1" },
        { combo: [3, 4, 5], strikeClass: "strike-row-2" },
        { combo: [6, 7, 8], strikeClass: "strike-row-3" },

        //columns
        { combo: [0, 3, 6], strikeClass: "strike-col-1" },
        { combo: [1, 4, 7], strikeClass: "strike-col-2" },
        { combo: [2, 5, 8], strikeClass: "strike-col-3" },

        //diagonals
        { combo: [0, 4, 8], strikeClass: "strike-diag-1" },
        { combo: [2, 4, 6], strikeClass: "strike-diag-2" },
    ];
    wins.forEach(e => {
        const { combo, strikeClass } = e;

        if ((isgameover !== true) && (boxtexts[combo[0]].innerText === boxtexts[combo[1]].innerText) && (boxtexts[combo[2]].innerText === boxtexts[combo[1]].innerText) && (boxtexts[combo[2]].innerText !== '')) {
            strike.classList.add(strikeClass);
            document.querySelector('.info').innerText = boxtexts[combo[0]].innerText + " Won";
            isgameover = true;
            if (sound_onoff) { gameover.play(); }
            document.querySelector('.imgbox').getElementsByTagName('img')[0].src = "happy-milk-peach-happy.gif";
        }

        setHoverText();
    });
    
    //draw check 
    let allTileFilledIn = Array.from(boxtexts).every((tile) => tile.innerText !== '');
    // console.log(allTileFilledIn);
    if (allTileFilledIn && !isgameover) {
        document.querySelector('.info').innerText = "Draw";
        console.log(allTileFilledIn);
        isgameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].src = "bugcat-bugcatsticker.gif";
        if (sound_onoff) { draw_audio.play(); }
           
    }
}

// Game Settings
sound.addEventListener('click', () => {
    if (sound_onoff) {
        sound_onoff = false;
        document.getElementById("sound").src = "sound_off.png";

    }
    else {
        sound_onoff = true;
        document.getElementById("sound").src = "sound_on.png";
    }
})



// Game Logic
function setHoverText() {
    //remove all hover text
    Array.from(boxes).forEach((tile) => {
        tile.classList.remove("x-hover");
        tile.classList.remove("o-hover");

    });

    let hoverClass = `${turn.toLowerCase()}-hover`;
    Array.from(boxes).forEach((tile) => {

        if (tile.innerText == "") {
            tile.classList.add(hoverClass);
            // console.log(hoverClass);
        }
    });

}

setHoverText();

Array.from(boxes).forEach(element => {

    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            document.getElementsByClassName("sound").src = "C:\Users\ADMIN\Desktop\VS code Documents\Web_Development\Tic Tac Toe game\sound_off.png";
            turn = changeTurn();
          
            if (turn==="X")
                document.querySelector('.imgbox').getElementsByTagName('img')[0].src = "gaming-game-on.gif";
            else
                document.querySelector('.imgbox').getElementsByTagName('img')[0].src = "kiwi-catscafe.gif";

            if (sound_onoff) { turn_music.play(); }
            checkWin();


            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
            
        }
        setHoverText();
    })

})

//Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";

    });

    // removes the strike on clicking reset
    let strike = document.getElementById("strike");
    strike.classList.remove("strike-row-1");
    strike.classList.remove("strike-row-2");
    strike.classList.remove("strike-row-3");

    strike.classList.remove("strike-col-1");
    strike.classList.remove("strike-col-2");
    strike.classList.remove("strike-col-3");

    strike.classList.remove("strike-diag-1");
    strike.classList.remove("strike-diag-2");

    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.imgbox').getElementsByTagName('img')[0].src = "gaming-game-on.gif";
    setHoverText();

});














































