var numberOfButtons = document.querySelectorAll(".btn").length;
for (var i=0;i<numberOfButtons;i++){
document.querySelectorAll(".btn")[i].addEventListener("click",function () {
        var key = this.innerHTML;
        makeSound(key);
})
}
document.addEventListener("keypress",function (event){
    makeSound(event.key);
});
function makeSound(key){
    switch(key){
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 's':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 'd':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'f':
            var tom1 = new Audio('sounds/tom1.mp3');
            tom1.play();
            break;
        case 'j':
            var tom2 = new Audio('sounds/tom2.mp3');
         tom2.play();
            break;
        case 'k':
            var tom3 = new Audio('sounds/tom3.mp3');
            tom3.play();
            break;
        case 'l':
            var tom4 = new Audio('sounds/tom4.mp3');
            tom4.play();
            break;
        default :
            console.log("nothing");
    }    

}
