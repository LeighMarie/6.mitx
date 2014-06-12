/* A spaceship originally appears on the left side of the screen. When a  user enters the name of an enemy in a text box at the top of the screen, an image of that enemy is taken from flickr and appears on the opposite side of the screen from the ship. The user must move the ship towards the enemy's image by clicking buttons displaying the four directions. When the ship and the enemy are suitably close, the enemy is destroyed (it disappears from the screen) and a laser sound is played.*/

//negative amount for moving ship left, positive amount for moving ship right
function moveElementHorizontal($elem, amount){ 
    var startpoint = $elem.position().left;
    var endpoint = startpoint + amount;
    $elem.animate({
        'left': endpoint +'px'
    });

};

//negative amount for moving ship up, positive amount for moving ship down
function moveElementVertical($elem, amount){
    var startpoint = $elem.position().top;
    var endpoint = startpoint + amount;
    $elem.animate({
        'top': endpoint +'px'
    });

};

function loadEnemies(enemyName) {

  var url = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  var data = {
    tags: enemyName,
    tagmode: "any",
    format: "json"
  };
  var promise = $.ajax({
    dataType: "json",
    url: url,
    data: data
  });
  $('img.enemy').remove();
  promise.done(function(data) {
      var imgLink = data.items[0].media.m;
      var newImg = $('<img class="enemy" src="' + imgLink + '" />');
      $('body').append(newImg);
  });
  promise.fail(function(reason) {
    console.log(reason);
  });

};

//if spaceship and enemy get close enough, spaceship destroys enemy and a laser sound is played
function checkCollision($elem) {
    var enemyChosen = $('.enemy');
    //if both entities are not null
    if ((enemyChosen) && ($elem)) {
        if ((Math.abs($elem.position().left - enemyChosen.position().left) < 75) &&
        (Math.abs($elem.position().top - enemyChosen.position().top) < 75)) {
            var audio = new Audio('laser1.mp3');
            audio.play();
            enemyChosen.remove();
        }
        else{}
    }
    };


//happens after web page is loaded
$(function() {
    var buttons = $('button');
    var spaceship = $('.ship');
    
    //controls the movement of the spaceship
    buttons.on('click', function(event) {
        var target = $(event.target);
        var name = target.attr('id');
        if (name == 'rightBtn') {
            moveElementHorizontal(spaceship, 75);
        }
        else if (name == 'leftBtn') {
            moveElementHorizontal(spaceship, -75);
        }
        else if (name == 'upBtn') {
            moveElementVertical(spaceship, -75);
        }
        else if (name == 'downBtn') {
            moveElementVertical(spaceship, 75);
        }
               
    });

  //text box to enter enemy's name
  var input = $('<input> CHOOSE AN ENEMY </input>');
  $("#controls").append(input);

  //check if user has entered enemy name to fetch picture
  input.on('keyup', function(evt) {
    if (evt.keyCode == 13) {
      var enemyName = input.val();
      loadEnemies(enemyName);
    }
  });
  
  //check whether spaceship and enemy are close together
  setInterval(function(){checkCollision(spaceship)}, 300);

});
