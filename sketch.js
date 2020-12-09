//Create variables here
    var dog;
    var happydog;
    var database;
    var foodS;
    var doodStock;
function preload()
{
  //load images here
  
}

function setup() {
	createCanvas(500, 500);
  
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}


function draw() {  

  drawSprites();
  //add styles here

}
//function to read volume from DB
    function readStock(data){
        foodS = data.val();

//function to write volume in DB
    function writeStock(x){
        dataBase.ref('/').update({
          food:x
        })
    }
  //function to write in DB
    function writeStock(x){
      if(x<-0){
        x-0;
      }
      else{
        x=x-1;
        database.ref('/').update
          food:x;
  //read gameState from database
    readState = database.ref('gameState');
        readState.on("value", function(data){
          gameState = data.val()
        });      
    if(gameState = "Hungry"){
            feed.hide();
            addFood.hide();
            dog.remove();
    } else{
      feed.show();
      addFood.show();
      dog.addImage(sadDog);
    }
        //function to update gameState in database
            function update(state){
                database.ref('/').update({
                  gameState:state
                });
            }

      }
    }
    }


