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
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
      }

      function createTweetElement(tweet) {
        let $test = 
          `<section class="post-tweet">
          <img src="${tweet.user.avatars.regular}"  alt="avatar">
          <h2>${tweet.user.name}</h2>
          <span class="aturl">${tweet.user.handle}</span>
          <section class="post-content">${tweet.content.text}</section>
          <hr>
          <footer>
            ${tweet.created_at}
            <span class="tweeticons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
            </span>
          </footer>
          </section>`;
        let $tweet = $('<article>').addClass('.post-tweet');
        $tweet.text(tweet.content.text);
        return $test;
      }
  
      function renderTweets(tweets) {
        $('.Tweet-container').html("");
        for(element in tweets){
            $('.Tweet-container').prepend(createTweetElement(tweets[element]));
        }
      }
      
      function loadTweets(){
        $.ajax({url: "/tweets", type: "GET", 
        success: function(data) {
          console.log(data);
          renderTweets(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }});
      }
    });
  });