// Render tweets in the main page
const renderTweets = function (tweetData) {
  for (let tweet of tweetData) {
    const tweetArticle = createTweetElement(tweet);
    $(`#tweet-container`).prepend(tweetArticle);
  }
};

// Define a function to handle each tweet Data
const createTweetElement = function (tweetData) {
  const timePassed = timeago.format(tweetData.created_at, 'en_CA');
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
        <p><h4>${tweetData.content.text}</h4></p>
      </div>      
      <hr>
      <footer class="tweet-footer">
        <output name="counter2" class="lastVist" for="tweet-text">${timePassed}</output>
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

  // Add event listener to prevent default page refresh on form submit
  const $submitTweet = $('#new-tweet-container');

  $submitTweet.on('submit', (event) => {
    event.preventDefault();

    const tweetlength = $('#tweet-text').val().length;
    const charLimit = 140;
    const $tweet = $('#tweet-text').serialize(); //convert the form data into a query string

    // Validate the tweet content
    if (!$tweet || tweetlength === 0) {
      alert("Tweet content cannot be empty. Please write a tweet..");
      return;
    }

    if (tweetlength > charLimit) {
      alert(`Tweet exceeds character limit of ${charLimit} ...`);
      return;
    }
     
    $.ajax({ // Use ajax to send POST request to the server endpoint "/tweets"
      type: 'POST',
      url: 'http://localhost:8080/tweets',
      data: $tweet,
      success: function (response) {
        console.log('Success:', response);
        // Load the latest tweets after successfully posting
        loadTweets();
      },
      error: function (xhr, status, error) {
        console.log('Error:', error);
      }
    });
  })

  const loadTweets = function () {
    $.ajax({ //use ajax to send the GET tweets from /tweets page
      type: "GET",
      url: "http://localhost:8080/tweets",
      success: function (response) {
        console.log("Success: tweets loaded", response);
        renderTweets(response);
      },
      error: function (xhr, status, error) {
        console.log("Error: tweets not loaded", error);
      }
    });
  };

  loadTweets();
});
