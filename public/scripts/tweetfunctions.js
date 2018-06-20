// Creates an html object given a single tweet object
function createTweetElement(tweet) {
    let $article = 
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
    return $article;
}

//Renders and applies content to html container for tweets
function renderTweets(tweets) {
    $('.Tweet-container').html("");
    for(element in tweets){
        $('.Tweet-container').prepend(createTweetElement(tweets[element]));
    }
}

//strips html tags away from a given input and returns it
function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

//get through ajax and loads tweets in /tweets route
function loadTweets(){
    $.ajax("/tweets").done(function(articles){
        console.log(articles);
            renderTweets(articles);
    });
}