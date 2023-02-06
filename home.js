let music =new Audio("tictactoeaudio.mp3");
let sound_onoff = true;

music.addEventListener("canplaythrough", () => {
    music.play().catch(e => {
       window.addEventListener('click', () => {
          music.play();
          
       }, { once: true })
    })
 });


sound.addEventListener('click', () => {
    if (sound_onoff) {
        sound_onoff = false;
        document.getElementById("sound").src = "sound_off.png";
        music.pause();
    }
    else {
        sound_onoff = true;
        document.getElementById("sound").src = "sound_on.png";
        music.play();
    }
})
 

function animation() {
    document.querySelector('.img-box').getElementsByTagName('img')[1].style.width = "50vw";

}
animation();


