$(document).ready(function() {
    $(".composetweet").click(function(){
        console.log("clicked");
        $(".new-tweet").slideToggle(1000, function(){
            if($(".new-tweet").is(":visible")){
                console.log("visible");
                $(".new-tweet .chatbox").focus();
            }
            else{
                console.log("hidden");
                $(".new-tweet .chatbox").blur();
            }
        })


    });
})