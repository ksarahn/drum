var list = {
    w: "crash.mp3",
    a: "kick-bass.mp3",
    s: "snare.mp3",
    d: "tom-1.mp3",
    j: "tom-2.mp3",
    k: "tom-3.mp3",
    l: "tom-4.mp3"
};

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    (function(index) {
        var element = document.querySelectorAll(".drum")[i];
        element.addEventListener("click", function() {
            var key = this.classList[0];
            var file = list[key];
            playSound(file);
            keyAnimation(key);
        });
    })(i);
}

document.addEventListener("keydown", function(event) {
    var key = event.key;
    if (list[key]) {
        var file = list[key];
        playSound(file);
        keyAnimation(key);
    }
});

function playSound(filename) {
    var audio = new Audio("sounds/" + filename);
    audio.play();
}

function keyAnimation(currentKey) {
    var btn = document.querySelector("." + currentKey);
    btn.classList.add("pressed");
    setTimeout(function() {
        btn.classList.remove("pressed");
    }, 100);
}
