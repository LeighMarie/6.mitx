var LASER_SOUNDS = ['laser1.mp3', 'laser2.mp3'];


/* Class Ship
 *
 * Usage:
 *   var element = $('#ship');
 *   var ship = Ship(element);
 *
 * The Element should have the CSS class ship
 *
 */
var Ship = function(jQueryElement) {
  exports = {};

  // Two way lookup
  this.$element = jQueryElement;
  this.$element.data('object', this);

  // Set up any member variables you want here.
  // ------------------------------------------


  // Set up any methods here.
  // ------------------------------------------
  exports.initialize = function() {
    console.log("Ship initialized!", this.$element);
  };

  exports.fireLaser = function() {
    var laser = LASER_SOUNDS[Math.floor((Math.random() * LASER_SOUNDS.length))];
    (new Audio(laser)).play();
  };

  exports.initialize();
  return exports;
};
