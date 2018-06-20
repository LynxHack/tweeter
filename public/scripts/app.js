$(document).ready(function() {
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
      for(element in tweets){
          $('.Tweet-container').append(createTweetElement(tweets[element]));
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

    loadTweets();
});