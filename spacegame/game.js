// Your game code goes here.


//functions means do this AFTER page is loaded so all divs will be caught
/*$(function() {
console.log("Game Starting");

console.log(     $('div')    );
    
});*/
 
//select an element
// $('div');
//a is a wrapper containing element... [<div>]
//var a = $('div');
  
//create an element 
// $('<divs>');

//negative amount for left, positive amount for right
function moveElementHorizontal($elem, amount){
    //var startpoint = parseInt($elem.css('left'));
    //more unit safe 
    var startpoint = $elem.position().left;
    var endpoint = startpoint + amount;
    $elem.animate({
        'left': endpoint +'px'
    });

};

//negative amount for up, positive amount for down
function moveElementVertical($elem, amount){
    //var startpoint = parseInt($elem.css('left'));
    //more unit safe 
    var startpoint = $elem.position().top;
    var endpoint = startpoint + amount;
    $elem.animate({
        'top': endpoint +'px'
    });

};

function moveRandom($elem, amount){
    var randNum = Math.floor(Math.random()*4);
    switch (randNum){
            case 0: $elem.animate({
                'top': $elem.position().top + amount,
                'left': $elem.position().left
            }); 
            case 1: $elem.animate({
                'top': $elem.position().top - amount,
                'left': $elem.position().left
            }); 
            case 2: $elem.animate({
                'top': $elem.position().top ,
                'left': $elem.position().left + amount
            }); 
            case 3:$elem.animate({
                'top': $elem.position().top ,
                'left': $elem.position().left - amount
            }); 
    }
               
};





//class work
/*$(function() {
    
    var spaceship = $('.ship');
    var rightBtn = $('button');
    
    rightBtn.on('click', function(event) {
        
        console.log(event);
        var target = $(event.target);
        console.log(target.attr('id'));
        var name = target.attr('id');
        if (name == 'rightBtn'){
        }
        moveElementRight(spaceship, 10);
        event.preventDefault();
        event.stopPropagation();
    });
    
    var enemyName = $('<input>');
    var score = $('<div>100</div>');
    $('#controls').append(score);
    $('#controls').append(enemyName);
    
    spaceship.css('left', '150px');
    //can seperate chain of things with commas for debugging (.css() gets and sets css)
    spaceship.animate({
        'left': '0px',
        'top': '10px',
        //'-webkit-transform': 'rotate(45deg)'
    }, 1000);
    console.log('The ship LEFT is', spaceship.css('left'));
  
});*/

$(function() {
    
    var spaceship = $('.ship');
    var buttons = $('button');
    var enemy = $('#enemyOne');
    
    buttons.on('click', function(event) {
        var target = $(event.target);
        var name = target.attr('id');
        if (name == 'rightBtn'){
        moveElementHorizontal(spaceship, 50);
        }
        else if (name == 'leftBtn'){
            moveElementHorizontal(spaceship, -50);
        }
        else if (name == 'upBtn'){
            moveElementVertical(spaceship, -50);
        }
        else if (name == 'downBtn'){
            moveElementVertical(spaceship, 50);
        }
               
    });
    
    //moves enemy randomly every 2000 milliseconds
    //setInterval(function(){moveRandom(enemy, 50)}, 1000);
       
    /*var enemyName = $('<input>');
    var score = $('<div>100</div>');
    $('#controls').append(score);
    $('#controls').append(enemyName);*/

  
});
