
//Grid 2 - Audio Loading

var music = new Audio()
function playMusic(audio)
{
    music.pause();
    music = document.getElementById(audio);
    music.play();
}

function stopMusic()
{
    music.pause();
}