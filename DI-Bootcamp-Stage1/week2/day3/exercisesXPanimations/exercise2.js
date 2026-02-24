let myInterval;
function myMove() {
    myInterval = setInterval(moveAnimate,1);
}
let leftMargin = 0;
function moveAnimate() {
    if (leftMargin >= 350) {
        clearInterval(myInterval);
        return
    }
    leftMargin +=1
    animate = document.getElementById("animate");
    animate.style.marginLeft = `${leftMargin}px`;
    
}