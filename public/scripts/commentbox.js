$(document).ready(function() {
    var x = document.getElementsByClassName("post-tweet");

    $(".post-tweet").on("mouseover", function(){
        if(!this.style.filter){
            this.style.filter += "contrast(105%)";
        }
        this.style.filter = "contrast(105%)";
    });


    $(".post-tweet").on("mouseout", function(){
        this.style.filter = "contrast(100%)";
    });
})


