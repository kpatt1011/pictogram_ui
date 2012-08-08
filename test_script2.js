/*----------------------------------------------------------------------------------------*/



/*----------------------------------------------------------------------------------------*/


/*Creation Page*/







/*----------------------------------------------------------------------------------------*/


/*Start Page Events*/

/*
Currently consists of two buttons (Login or Signup).
Both currrently lead to "pop up" windows that accept user input.
Note: user authentication not yet set up
*/

$('#login_start').click(function () {
    location.hash = '#login_page';
});

$('#sign_up').click(function () {
    location.hash = '#sign_up_page';
});



/*----------------------------------------------------------------------------------------*/


/*Login Page Events


* Login Page is a pop up page from the start screen

Currently, navigates to the home page upon click login.
Authentication not yet set up, so input does not matter
*/

$('#login').click(function () {
    location.hash = '#home_page';
});

/*----------------------------------------------------------------------------------------*/


/* Sign Up Page Events 

* Sign up page is a pop up page from the start screen

Note that the id's of the username and password fields are 
labled under the id's desired_username and desired_password 
this is a work around to the fact that "username" and "password" are 
already id's being used for the login_page, which is contained within the same 
html document



As executed below, clicking the submit button brings the user back to the start page 
For now user creation is not functional
*/

$('#sign_up_submit').click(function () {
    location.hash = '#start_page';
});

/*----------------------------------------------------------------------------------------*/

/*  Home Page Events

    "new_game_button" is the button that starts a new game when clicked

*/

/* Launches the user search page */
$('#new_game_button').click(function () {
    location.hash = '#user_search_page';
});


/*----------------------------------------------------------------------------------------*/


/* User Search Page Events
    
    "user_search_button" is the button that searches for user and begins new game with two users when pushed

    SEARCH FEATURE IS NOT YET IMPLMENTED
        * Currently just opens up the creation page
    
*/

/* Intiates User Search. If found starts a new game*/
$('#user_search_button').click(function () {
    location.hash = '#creation_page';
});