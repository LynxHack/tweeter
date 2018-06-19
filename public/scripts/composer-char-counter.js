$(document).ready(function() {
    document.addEventListener("dblclick", (event) => {
        console.log(event);
        console.log("(X,Y) = ", event.clientX, event.clientY);
      });
    var x = document.getElementsByClassName("counter");
    $(".chatbox").on("input propertychange paste", function(){
        $(".counter").html(140 - Array.from($(this).val()).length);
        
        if(140 - Array.from($(this).val()).length < 0){
            console.log("no more characters");
            if(!x[0].style)
                x[0].style.color += "#FF0000";
            else    
                x[0].style.color = "#FF0000";
        }
        else{
            console.log("still characters");
            x[0].style.color = "#000000";
        }
    });
});

