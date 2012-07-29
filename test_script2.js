









/*----------------------------------------------------------------------------------------*/


/*Creation Page*/

/* Variables */

var current_image_url; // URL of the image displayed as current image

/* Methods */

/* Updates the current picture that's been uploaded, but not yet given a spot in the pictogram*/
function update_current_image() {

   
     current_image_url = $('#url').val(); // Stored image url
  

    var current = document.getElementById("current_image"); // Define the canvas from the main dispaly
    var context = current.getContext('2d'); // Set 2d context for canvas

    var image = new Image(); // Creates a new html image object
    image.src = current_image_url; // Takes contents of image url box and makes in the src for the image in box 1


    image.onload = function () {
        if (image.height <= 300 && image.width <= 300) {
            current.height = image.height;
            current.width = image.width;
            context.drawImage(image, 0, 0);
        }
        else {
            var h = image.height / (image.height / 300);
            var w = image.width / (image.width / 300);
            current.height = h;
            current.width = w;
            context.drawImage(image, 0, 0, w, h);
        }


        localStorage.setItem("savedImageData", current.toDataURL("image/png"));
    }
}

/* Takes a parameter (picture) used to update one of the pictures in the pictogram*/
function assign_picture(picture) {

    var location = current_image_url; //  URL of the current image

    var picture = document.getElementById(picture); // Define the canvas from the main dispaly
    var context = picture.getContext('2d'); // Set 2d context for canvas

    var image = new Image(); // Creates a new html image object
    image.src = location; // Takes contents of image url box and makes in the src for the image in box 1


    image.onload = function () {
        context.drawImage(image, 0, 0, 100, 100);
        localStorage.setItem("savedImageData", picture.toDataURL("image/png"));
    }

}

/* Clears the url bar to a blank string */
function clear_url() {
    $('#url').val(""); // Changes the value of the url input to a blank string
}


/* Events*/

/*1st thumbnail pressed*/
$('#picture1').click(function () {
    assign_picture("picture1");
});

/*1st thumbnail pressed*/
$('#assign1_button').click(function () {
    assign_picture("picture1");
});

/*2nd thumbnail pressed*/
$('#picture2').click(function () {
    assign_picture("picture2");
});

/*2nd assignment button pressed*/
$('#assign2_button').click(function () {
    assign_picture("picture2");
});

/*3rd thumbnail pressed*/
$('#picture3').click(function () {
    assign_picture("picture3");
});
/*3rd assignment button pressed*/
$('#assign3_button').click(function () {
    assign_picture("picture3");
});


/*Image Upload button presset*/
$('#upload_image_button').click(function () {
    update_current_image();
    clear_url();
});


/*
    This function was used as pretty lame attempt a drag and drop image system
$('#url').mouseover(function () {
update_current_image();
clear_url();
});
*/


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