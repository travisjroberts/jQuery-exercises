/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

article2 = $('.featured'); // article2 is set to the selector featured
article3 = article2.next(); // set article3 to the next sibling of article2
article2.toggleClass('featured');
article3.toggleClass('featured');
