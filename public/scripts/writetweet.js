// Checks whether submit form box's content meets requirement of
// 1-140 characters input. If passed, post the new tweet out to 
// server and then regenerate the new list of tweet to show client

$(function() {
    let $tweet = $('.new-tweet form');
    $tweet.on('submit', function (event) {
      event.preventDefault();
      let currlength = Array.from($(".new-tweet form .chatbox").val()).length;
      if(currlength > 140){
        console.log("message too long");
        document.querySelector(".err-msg").innerHTML = "Message too Long!";   
        document.querySelector(".tweet-error").style.display = "block";
        document.querySelector(".tweet-error").style.border = "2px solid #a07f3e";
      }
      else if(currlength === 0){
        console.log("no message!");
        document.querySelector(".err-msg").innerHTML = "No message present"; 
        document.querySelector(".tweet-error").style.display = "block";
        document.querySelector(".tweet-error").style.border = "2px solid #a07f3e";
      }
      else{
        document.querySelector(".tweet-error").style.display = "none";
        document.querySelector(".tweet-error").style.border = "0";
        $.ajax({url: '/tweets', data: $(this).serialize(), type: 'POST',
            success: function(responseData, textStatus, jqXHR) {
                console.log("response: ", responseData);      
                loadTweets();
                $(".chatbox").val('');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
      }
    });
  });