var x = document.getElementsByClassName("post-tweet");
$(".post-tweet").on("mouseover", function(){
    console.log("Hovered over box!");
    if(!this.style.filter){
        this.style.filter += "contrast(105%)";
    }
    this.style.filter = "contrast(105%)";
});

$(".post-tweet").on("mouseout", function(){
    console.log("Hovered out box!");
    this.style.filter = "contrast(100%)";
});



