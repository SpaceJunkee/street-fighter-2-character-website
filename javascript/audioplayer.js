/* eslint-env browser */

//Find the theme songs in mp3 folder

var stageSongs = new Array(10);

stageSongs[0] = new Audio('../mp3/09.%20Ryu%20Stage.mp3');
stageSongs[1] = new Audio('../mp3/05.%20Ken%20Stage.mp3');
stageSongs[2] = new Audio('../mp3/30.%20E.Honda%20Stage.mp3');
stageSongs[3] = new Audio('../mp3/05.%20Ken%20Stage.mp3');
stageSongs[4] = new Audio('../mp3/05.%20Ken%20Stage.mp3');
stageSongs[5] = new Audio('../mp3/05.%20Ken%20Stage.mp3');


//Play theme songs corresponding to characters
if(document.getElementById("ryuTheme")){
    document.getElementById("ryuTheme")
        .addEventListener('click', function (event) {
            stageSongs[0].play();
        });
}else if(document.getElementById("kenTheme")){
     document.getElementById("kenTheme")
        .addEventListener('click', function (event) {
            stageSongs[1].play();
        });
}




    



