/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Define the hard coded tweets
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1691486813224
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

// Render tweets in the main page
const renderTweets = function (tweetData) {
  for (let tweet of tweetData) {
    console.log(tweet);
    const tweetArticle = createTweetElement(tweet);
    $(`#tweet-container`).append(tweetArticle);
  }
};

// Define a function to handle each tweet Data
const createTweetElement = function (tweetData) {
  const tweetArticle = `
    <article>
      <header>
        <div class="user-icons">
          <p> <img src= "${tweetData.user.avatars}"/> </p>
          <p class="user-name" > ${tweetData.user.name} </p>
        </div>
        <p class="user-handle"> ${tweetData.user.handle} </p> 
      </header>
      <div class="tweet-content">
        <p> <h4>${tweetData.content.text}</h4> </p>
      </div>      
      <hr>
      <footer class="tweet-footer">
        <output name="counter2" class="lastVist" for="tweet-text">${tweetData.created_at}<span> days ago</span></output>
        <span class="hover-icons">
          <i class="fa-sharp fa-solid fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="fas fa-heart"></i>  
        </span>
      </footer>
    </article>`;
  return tweetArticle;
};

// Execute the wrapped code when the DOM is ready
$(document).ready(() => {
  renderTweets(tweetData);
});
