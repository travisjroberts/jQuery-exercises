/*
For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

The starter code below creates an event listener that will run any time the input changes.
For more on events, check the instructor notes.
*/


$('#input').on('change', function() {
    var val;
    var h1;
    val = $('#input').val(); // collect the value of the input
    h1 = $('.articles').children('h1'); // collect the 'h1' i want to change
    h1.text(val); // set the text of 'h1' to the value I got in 'val' variable
});