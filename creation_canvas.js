/* Variables */

    var current_image_url; // URL of the image displayed as current image
    var stage; // Kinetic JS stage

    var mainLayer; // Kinetic JS Layer
    var mainLayer_nodes; // An array of nodes in the main Layer
    
    var puzzle_layer;
    var puzzle_nodes; // An array of nodes in the puzzle layer
    

    var canvas_image_file; // File used to store an image of the entire canvas
    var choosen_symbol; // Used to upload a symbol. Value should be the symbol they've choosen
    var dataURL; // Holds the image data of the canvas. Currenlty the image is stored in a png format
    var screen_width; // The width of the screen the app is displayed on
    var screen_height; // The height of the screen the app is displayed on
    var canvas_width; // The width of the creation canvas. Determined proportionally to the size of the screen
    var canvas_height; // The height of the creation canvas. Determined proportionally to the size of the screen
    var puzzle_width; // The width of the puzzle box
    var puzzle_height; // The height of the puzzle box
    var menu_button_width;
    var menu_button_height;


    // Add an event listener to trigger whenever the user changes the uploaded image files

    var inputElement = document.getElementById("image_uploaded");
    inputElement.addEventListener("change", handleFiles, false);



    /*Adds an item to the canvas.*/
    function add_item_to_main(layer,item) {
             stage.clear();
            layer.add(item);
            layer.show();
         
           stage.add(layer);
            stage.draw();
    }

    /*This function simply writes text to the canvas. using it's parameters to customize the text.*/
    function write_text(layer,text,x,y,font_size,font_family,text_color,font_style,align) {
              var add_text = new Kinetic.Text({
                    x: x,
                    y: y,
                    text: text,
                    fontSize: font_size,
                    fontFamily: font_family,
                    textFill: text_color,
                    align: align,
                    fontStyle: font_style
              });


               add_item_to_main(layer,add_text); // Add text to the main layer
    }

/* Adds a rectangle to the canvas using the rectangles to customize*/
    function write_rectangle(layer,x,y,width,height,fill_color,line_color,line_width) {
         var add_rect = new Kinetic.Rect({
                x: x,
                y: y,
                width:width,
                height:height,
                fill: fill_color,
                stroke: line_color,
                stokeWidth:line_width,

         });

         add_item_to_main(layer,add_rect); // Add rectangle to the main layer
    }

    function build_menu_button(name, x, y, href, click_function){

           var add_button =  new Kinetic.Text({
                x: x,
                y: y,
                fill: '#0077C8',
                stroke: '#F9423A',
                width:200,
                stokeWidth:5,
                text:name,
                fontSize: 12,
                fontFamily: 'arial',
                textFill: 'white',
                fontStyle: 'bold',
                align: 'center',
                padding: 10
         });

         if (href != "") {

             add_button.on("click", function() {
                   location.hash = href;
                });

              add_button.on("touch", function() {
               location.hash = href;
            });

          }

          else {
             add_button.on("click", function() {
               click_function();
            });

             add_button.on("touch", function() {
               click_function();
            });
          }
            add_button.on("mouseover", function() {
              this.setAlpha(0.5);
              mainLayer.draw();
            });

             add_button.on("mouseout", function() {
              this.setAlpha(1);
              mainLayer.draw();
            });

        mainLayer.add(add_button);
        stage.add(mainLayer);
        stage.draw();

    }

    

    function construct_menu(){
        build_menu_button("Add Image",0,100,'#image_upload_window',"");
        build_menu_button("Add Text",0,137,'#text_upload_window',"");
        build_menu_button("Add Symbol",0,174,'#symbol_upload_window',"");
        build_menu_button("Clear Puzzle",0,211,"",clear_canvas);
        build_menu_button("Save Puzzle",0,248,"",save_image);
        build_menu_button("Load Puzzle",0,285,"",load_image);
    }

   


    window.onload = function () {

        

        // Choosen symbol is set to blank for use when inserting a symbol component to the puzzle
        choosen_symbol = "";

        // Determine and assign the width and height of the users screen
        screen_width=screen.width;
        screen_height=screen.height;

        // Determine the width and height of the canvas (2/3 of screen size)

        canvas_width=screen_width; 
        canvas_height=(screen_height/3)*2; 

        // Intialize the global variable stage for the canvas
        stage = new Kinetic.Stage({
            container: "creation_canvas",
            width: canvas_width,
            height:canvas_height
        });


        // Intialize mainLayer and Puzzle Layer as kineticJS layers
        mainLayer = new Kinetic.Layer();
        puzzle_layer=new Kinetic.Layer();

        // Intialize Puzzle Nodes and MainLayer Nodes variables as arrays 
        puzzle_nodes= new Array();
        mainLayer_nodes= new Array();

        write_rectangle(mainLayer,0 , (canvas_height/20)+(canvas_height/20),screen_width,5,'black','black',5);
        write_text(mainLayer,"Create Your Puzzle!",canvas_width/2,canvas_height/20,'18','arial','black','bold','center');
    
         construct_menu(); // Build the navigation menu
         menu_button_height=37;
         menu_button_width=210;

         puzzle_width=(screen.width/4)*3;
         puzzle_height=screen.height/2;

         write_rectangle(mainLayer,menu_button_width , 100,puzzle_width,puzzle_height,'','black',5);



  
        
       
    };
    

    /* Methods */ 

/* handleFiles is called whenever the user changes the uploaded files in the image_uploaded input field */
function handleFiles() {
    

       

    }




/* Clears the url bar to a blank string */
 function clear_url() {
    $('#url').val(""); // Changes the value of the url input to a blank string
}

/* Creation page functions */

/*Clears the stage view and removes all of the children from the stage. Children are nodes*/
function clear_canvas() {
    stage.clear();
    stage.removeChildren();
}

/*Creates and adds to the canvas a text component, and can also be used to add a symbol */
function create_text_component(text) {

    var text_component = new Kinetic.Text({
        x: 210,
        y: 100,
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

      text_component.setDragBounds({
                 top:  100,
                left:  menu_button_width,
                bottom: (100+puzzle_height)-text_component.getBoxHeight() ,
                right:  (menu_button_width+puzzle_width)-text_component.getBoxWidth()
            
            });

    add_item_to_main(mainLayer,text_component); // Add text component to the main layer of the canvas
  
    /* Return user to the creation page*/
        location.hash = '#creation_page';
}

  /* generates a <img> object containing the imagedata */
  function makeImageObject (strSource) {
        var oImgElement = document.createElement("img");
        oImgElement.src = strSource;
        return oImgElement;
  }


  function save_image () {
    var current_canvas = mainLayer.getCanvas();
    var current_context = current_canvas.getContext("2d");


    dataURL = current_canvas.toDataURL();
    clear_canvas();

}

function load_image () {
    clear_canvas();

    var current_canvas = mainLayer.getCanvas();
    var current_context = current_canvas.getContext("2d");

    var image = new Image(); // Creates a new html image object
    image.src = dataURL; // Takes contents of image url box and makes in the src for the image in box 1


    image.onload = function () {
        var puzzle = new Kinetic.Image({
            width: current_canvas.width,
            height: current_canvas.height,
            image: image,
            draggable: false,
        });

        add_item_to_main(puzzle); // Add Puzzle to the main layer on the canvas
   
    }

}

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

/* Events */

/*Clear canvas button pushed*/
$('#erase_canvas').click(function () {
    clear_canvas();
});


/*Image Upload button presset*/
$('#upload_image_button').click(function () {

      var file = document.getElementById('image_uploaded').files[0];
        var imageType = /image.*/;

       
       /*This for loop is redundant but it allows for the continue statement to exectute if the file isn't an image. Feel free to change if you know a better coding stucture to do this*/
       for(var i=0; i < 1; i++) {

         if (!file.type.match(imageType)) {
                continue;
            }

            var image = document.createElement("img");
            image.classList.add("obj");
            image.file = file;

           var reader = new FileReader();
            reader.onload = (function (aImg) { return function (e) { aImg.src = e.target.result; }; })(image);
            reader.readAsDataURL(file);
            

            var thumbnail = new Kinetic.Image({
                x:210,
                y:100,
                width: 100,
                height: 100,
                image:image.file,
                draggable: true,
                stroke: '#555',
                strokeWidth: 10
            });

          
           
            
            
            
         
       }

        thumbnail.setDragBounds({
               top:  100,
                left:  menu_button_width,
                bottom: (100+puzzle_height)-thumbnail.getHeight() ,
                right:  (menu_button_width+puzzle_width)-thumbnail.getWidth()
            
            });
                add_item_to_main(mainLayer,thumbnail);
  location.hash = '#creation_page'; /*Go to the puzzle creation page*/

});




/*Upload Text Button pressed*/
$('#upload_text').click(function () {
    var add_text = $('#component_text').val(); /* Get the content of the component text field */
    $('#component_text').val(""); // Clear the component text field

    if (add_text != "") {

        /* Add text component to creation canvas. Function will navigate away from text upload page to creation page, so no need to do it here */
        create_text_component(add_text); 

        

    }

    else {
        /* Return user to the creation page, since it didn't happen in the if statement*/
        location.hash = '#creation_page';
    }

});



/* Symbol Button Push Events 
    Used for the symbol_upload_window to choose a symbol to insert into the puzzle
*/

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