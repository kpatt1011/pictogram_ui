function writeMessage(messageLayer, message) {
        var context = messageLayer.getContext();
        messageLayer.clear();
        context.font = "18pt Calibri";
        context.fillStyle = "black";
        context.fillText(message, 10, 25);
    }

    /* Variables */

    var current_image_url; // URL of the image displayed as current image
    var boxLayer;
    var messageLayer;
    var stage;
    var canvas_image_file; // File used to store an image of the entire canvas
    var choosen_symbol; // Used to upload a symbol. Value should be the symbol they've choosen

    /* Currently boxlayer, messagelayer, and stage are global variables*/


    window.onload = function () {

        choosen_symbol = "";

        stage = new Kinetic.Stage({
            container: "creation_canvas",
            width: screen.width,
            height: 250
        });
        boxLayer = new Kinetic.Layer();
        messageLayer = new Kinetic.Layer();


        stage.add(messageLayer);
        stage.add(boxLayer);
    };

    // generates a <img> object containing the imagedata
    function makeImageObject (strSource) {
        var oImgElement = document.createElement("img");
        oImgElement.src = strSource;
        return oImgElement;
    }



  

 


    /* Methods */ 

 function add_image_to_creation_canvas() {
      

        var location = current_image_url; //  URL of the current image

        var image = new Image(); // Creates a new html image object
        image.src = location; // Takes contents of image url box and makes in the src for the image in box 1


        image.onload = function () {
            var thumbnail = new Kinetic.Image({
                width: 100,
                height: 100,
                image:image,
                draggable: true,
                stroke: '#555',
                strokeWidth: 10
            });

            boxLayer.add(thumbnail);
            stage.add(messageLayer);
            stage.add(boxLayer);   

        }

        

      

    }


    /* Clears the url bar to a blank string */
 function clear_url() {
    $('#url').val(""); // Changes the value of the url input to a blank string
}


/* Events*/

/*Image Upload button presset*/
$('#upload_image_button').click(function () {

    /*Adds the value of the url text field to the global variable current image url*/
    current_image_url = $('#url').val(); 
    
    /*Adds the picture to the image to the creation canvas*/
    add_image_to_creation_canvas(); 

    /* Clears the url field */
    clear_url();

    location.hash = '#creation_page';

});

/*Creates and adds to the canvas a text component, and can also be used to add a symbol */

function create_text_component(text) {

    var text_component = new Kinetic.Text({
        x: 100,
        y: 60,
        stroke: '#555',
        strokeWidth: 5,
        text: text,
        fontSize: 18,
        padding: 10,
        fontFamily: 'Calibri',
        textFill: '#555',
        align: 'center',
        fontStyle: 'bold',
        cornerRadius: 10,
        draggable: true
    });

    boxLayer.add(text_component);
    stage.add(messageLayer);
    stage.add(boxLayer);

    /* Return user to the creation page*/
    location.hash = '#creation_page';
}


/*Upload Text Button pressed*/
$('#upload_text').click(function () {
    var add_text = $('#component_text').val(); /* Get the content of the component text field */

    if (add_text != "") {


        create_text_component(add_text);


    }

    else {
        /* Return user to the creation page*/
        location.hash = '#creation_page';
    }
});




/* Symbol Button Push Events */

$('#equals').click(function () {
    create_text_component("=");
});


$('#carrot').click(function () {
    create_text_component("^");
});


$('#and').click(function () {
    create_text_component("&");
});


$('#at_sign').click(function () {
    create_text_component("@");
});


$('#pound_sign').click(function () {
    create_text_component("#");
});


$('#less_than').click(function () {
    create_text_component("<");
});


$('#exclmation_point').click(function () {
    create_text_component("!");
});


$('#question_mark').click(function () {
    create_text_component("?");
});


$('#plus').click(function () {
    create_text_component("+");
});


$('#minus').click(function () {
    create_text_component("-");
});


$('#slash').click(function () {
    create_text_component("/");
});


$('#greater_than').click(function () {
    create_text_component(">");
});