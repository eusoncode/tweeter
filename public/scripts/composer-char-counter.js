
$(document).ready(() => {
  $('#tweet-text').on('input', function() {
    const charCount = $(this).val().length; // Get the character count
    const $counter = $(this).closest('#new-tweet-container').find('.counter'); // Get the counter element
    $counter.text(140 - charCount); // Update the counter text

    //   // Add or remove the "invalid" class based on the character left
    if (charCount > 140) {
      $counter.addClass('invalid'); // Add the class for red color
    } else {
      $counter.removeClass('invalid'); // Remove the class
    }

  });
});