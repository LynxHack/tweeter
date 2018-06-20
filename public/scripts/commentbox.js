$(document).ready(function() {
    var x = document.getElementsByClassName("post-tweet");
    $(".post-tweet").on("mouseover", function(){
        console.log("hovering");
        this.style.filter = "contrast(100%)";
        this.style.transition = "filter 0.2s ease-in-out";
    });

    $(".post-tweet").on("mouseout", function(){
        this.style.filter = "contrast(107%)";
        this.style.transition = "filter 0.2s ease-in-out";
    });
})


