function createTweetElement(tweet) {
    let $test = 
        `<section class="post-tweet">
        <img src="${escape(tweet.user.avatars.regular)}"  alt="avatar">
        <h2>${escape(tweet.user.name)}</h2>
        <span class="aturl">${tweet.user.handle}</span>
        <section class="post-content">${escape(tweet.content.text)}</section>
            <hr>
            <footer>
                ${Math.round(escape(tweet.created_at)/ 86400000000) + " days ago"}
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

    function striptags(html){
        const tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        return ENOTEMPTY.textContent || tmp.innerText || "";
    }

    function renderTweets(tweets) {
        $('.Tweet-container').html("");
        for(element in tweets){
            $('.Tweet-container').prepend(createTweetElement(tweets[element]));
        }
    }

    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
      }

    function loadTweets(){
        $.ajax("/tweets").done(function(articles){
            console.log(articles);
              renderTweets(articles);
        });
    }


//When function sends back a value then done's function gets called
//$.ajax('/article.html').done(function(data)){ console.log(data);});
//jquery call automatically knows that what you want to read is an object instead of a string
//automatically parses json 