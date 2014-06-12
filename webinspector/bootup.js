/*****************************************************************************
 * Boot up the web inspector!
 *
 * You can copy and paste this file into the developer console of any web page
 * to inspect it.
 *
 * TODO!
 *  - Change the CSS link below to point to the full URL of your CSS file!
 *  - Change the JS link below to point to the full URL of your JS file!
 *
 *  You shouldn't need to touch anything else below.
 *
 *****************************************************************************/

var MY_CSS_FILE = 'http://localhost:8000/web-inspector.css';
var MY_JS_FILE = 'http://localhost:8000/web-inspector.js';
var JQUERY_FILE = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';

(function() {
    var createInspector = function() {
      window.inspector = Inspector(jQuery);
      window.inspector.initialize();
    }

    var loadJsCheckAndThen = function(jsFile, windowKey, thenFn) {
      if (windowKey in window) {
        thenFn();
      } else {
        var scr = document.createElement('script');
        scr.setAttribute('src', jsFile);
        document.head.appendChild(scr);
        var t = setInterval(function() {
          if (windowKey in window) {
            clearInterval(t); // Stop polling
            thenFn();
          }
        }, 50);
      }
    };

    // Add the CSS file to the HEAD
    var css = document.createElement('link');
    css.setAttribute('rel', 'stylesheet');
    css.setAttribute('type', 'text/css');
    css.setAttribute('href', MY_CSS_FILE);
    document.head.appendChild(css);

    // Load jQuery, then load web-inspector.js, then Create the inspector
    loadJsCheckAndThen(JQUERY_FILE, 'jQuery', function() {
      loadJsCheckAndThen(MY_JS_FILE, 'inspector', function() {
        createInspector();
      });
    });
})();
