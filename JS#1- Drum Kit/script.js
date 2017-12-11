var playSound = function (e) {

    const music = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    key.classList.add("playing");
    setTimeout(function(){
        key.classList.remove("playing");
    }, 100)
    if(!music) return;
    music.currentTime = 0;
music.play();
}
window.addEventListener("keydown", playSound);