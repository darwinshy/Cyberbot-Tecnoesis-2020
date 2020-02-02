var content = null;
var box = null;
var inner_circle = null;

function greet() {

    content = document.getElementById("content");
    content.textContent = "\"ADORA\"";
    content.style.opacity = "1";
    setTimeout(function() {
        setTimeout(function() {
            content.style.opacity = "0";
            setTimeout(function() {
                setTimeout(function() {
                    content.style.opacity = "0";
                    content.textContent = "Lets meet the robot";
                    setTimeout(function() {
                        setTimeout(function() {
                            content.style.opacity = "1";
                            setTimeout(function() {
                                document.getElementById("loader").style.opacity = "0";
                                setTimeout(function() {
                                    document.getElementById("loader").style.display = "none";
                                    setTimeout(function() {
                                        document.getElementById("box").style.animation = "intro 2s east-in-out";
                                    })
                                }, 1000)
                            }, 1000)
                        }, 0)
                    }, 0)
                }, 0)
            }, 1000)
        }, 1000)
    }, 1000);
}

function init() {
    greet();
    box = document.getElementById("box");
    box.style.position = 'relative';
    box.style.left = '0px';
    box.style.top = '0px';
    ic = document.getElementById("innerCircle");
}


function dances() {
    document.getElementById("icla").style.animation = "roiner 4s ease-in-out infinite";
    setTimeout(function() {
        document.body.style.backgroundImage = "url(beats.gif)";
    }, 500)
    document.getElementById("hand1").style.transform = "translateY(50px)";
    document.getElementById("hand2").style.transform = "translateY(50px)";
    document.getElementById("hand1").style.animation = "eyeshake_hands .5s ease-in-out infinite reverse";
    document.getElementById("face").style.animation = "eyeshake .5s ease-in-out infinite";
    document.getElementById("hand2").style.animation = "eyeshake_hands .5s ease-in-out infinite reverse";
    setTimeout(function() {
        document.getElementById("box").style.animation = "floating ease-in-out 2s infinite";
        document.body.style.backgroundImage = "url(clip3.gif)";
    }, 2000)
}

function getKeyAndMove(e) {
    document.getElementById("icla").style.animation = "none";

    var key_code = e.which || e.keyCode;
    document.getElementById('box').scrollIntoView();
    switch (key_code) {

        case 37: //left arrow key
            moveLeft();
            break;
        case 38: //Up arrow key
            moveUp();
            break;
        case 39: //right arrow key
            moveRight();
            break;
        case 40: //down arrow key
            moveDown();
            break;
        case 32:
            jump();
            break;
        case 82:
            resetpo();
    }


}

function closed() {
    document.getElementById("help").style.display = "none";
}

function teleport() {
    document.getElementById("icla").style.animation = "roiner 4s ease-in-out infinite";
    setTimeout(function() {
        document.body.style.backgroundImage = "url(travel.gif)";
        document.body.style.backgroundSize = "cover";
    }, 500)
    setTimeout(function() {
        document.body.style.backgroundImage = "url(clip3.gif)";
        document.body.style.backgroundSize = "initial";
    }, 6000)
    document.getElementById("box").style.animation = "disappearing 6s";
    setTimeout(function() {
        document.getElementById("box").style.animation = "floating ease-in-out 2s infinite";
    }, 5000)
}

function jump() {
    document.getElementById("icla").style.animation = "roiner 4s ease-in-out infinite";
    document.getElementById("box").style.animation = "jump .4s";
    setTimeout(resetpo, 1000);
}

function infor() {
    document.getElementById("help").style.display = "block";
}

function sqeeze() {
    document.getElementById("icla").style.animation = "roiner 4s ease-in-out infinite";
    setTimeout(function() { document.body.style.backgroundImage = "url(squeeze.gif)"; }, 500)
    document.getElementById("box").style.animation = "shakening 2s";
    document.getElementById("lips").style.animation = "lipoem 2s ease-in-out";
    setTimeout(resetpo, 2000);
}


function flip() {
    document.getElementById("icla").style.animation = "roiner 4s ease-in-out infinite";
    document.body.style.backgroundImage = "url(excite.gif)";
    document.getElementById("box").style.animation = "flip 1.8s ease-in-out";
    document.getElementById("hand1").style.animation = "wave 1.8s ease-in-out";
    document.getElementById("hand2").style.animation = "wave 1.8s ease-in-out";
    setTimeout(resetpo, 2000);
}

function moveLeft() {
    box.style.left = parseInt(box.style.left) - 100 + 'px';
    document.getElementById("icla").style.clipPath = "polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)";
    document.getElementById("box").style.transform = "rotate(-30deg)";
}

function moveUp() {
    box.style.top = parseInt(box.style.top) - 100 + 'px';
    document.getElementById("icla").style.clipPath = "polygon(53% 0, 100% 30%, 100% 100%, 52% 69%, 0 100%, 0 30%)";
}

function moveRight() {
    box.style.left = parseInt(box.style.left) + 100 + 'px';
    document.getElementById("icla").style.clipPath = "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)";
    document.getElementById("box").style.transform = "rotate(30deg)";
}

function moveDown() {
    box.style.top = parseInt(box.style.top) + 100 + 'px';
    document.getElementById("icla").style.clipPath = "polygon(51% 30%, 100% 0, 100% 73%, 53% 100%, 0 73%, 0 0)";
}

function resetpo() {
    document.getElementById("icla").style.animation = "roiner 4s ease-in-out infinite";
    document.getElementById("box").style.animation = "floating ease-in-out 2s infinite";
    document.body.style.backgroundImage = "url(clip3.gif)";
    document.getElementById("hand1").style.transform = "translateY(0)";
    document.getElementById("hand2").style.transform = "translateY(0)";
    document.getElementById("hand1").style.animation = "none";
    document.getElementById("face").style.animation = "none";
    document.getElementById("hand2").style.animation = "none";
    box.style.top = 0;
    box.style.bottom = 0;
    box.style.right = 0;
    box.style.left = 0;
    document.getElementById("box").style.transform = "rotate(0)";
    document.getElementById("icla").style.clipPath = "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)";
}

window.onload = init;