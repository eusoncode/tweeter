$(document).ready(() => {
  // FOR THE UP ARROW BUTTON ---------------------------------->  
  const $submitTweet = $('#new-tweet-container'); 
  // Initial state: hide the new-twee-container button
  $submitTweet.hide();

  let isTweetContainerVisible = false;

  // Toggle the submitTweet section when the Compose button is clicked
  $(".fa-angles-down").click(() => {
    $submitTweet.slideToggle(300, function() {
      // Toggle the visibility state
      isTweetContainerVisible = !isTweetContainerVisible;
  
      // If the submitTweet section is visible, focus on the tweet-text textarea
      if (isTweetContainerVisible) {
        $("#tweet-text").focus();
      }
    });
  });

  // FOR THE BUTTOM BUTTON ------------------------------------>
  // Initial state: hide the scroll button
  $("#scroll-button").hide();

  let lastScrollTop = 0;

  $(window).on("scroll", function () {
    let currentScrollTop = $(this).scrollTop();

    // Show/hide buttons based on scroll status
    if (currentScrollTop === lastScrollTop) {
      $("#scroll-button").css("display", "none");
      $(".fa-angles-down").css("display", "block");
    } else {
      $("#scroll-button").css("display", "block");
      $(".fa-angles-down").css("display", "none");
    };
  });

  // Scroll back to the top when clicked
  $("#scroll-button").on("click", function () {
    $(window).scrollTop(0);
    $(".new-tweet-container").slideDown("slow");
    $(".new-tweet-container").css("display", "block");

  });
});