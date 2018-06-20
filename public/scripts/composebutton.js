$(document).ready(function() {
    $(".composetweet").click(function(){
        console.log("clicked");
        $(".new-tweet").slideToggle(1000, function(){
            if($(".new-tweet").is(":visible")){
                $(".new-tweet .chatbox").focus();
            }
            else{
                $(".tweet-error").fadeOut();
                $(".new-tweet .chatbox").blur();
            }
        })
    });
})