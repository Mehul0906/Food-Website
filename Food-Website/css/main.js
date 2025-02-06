$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
        duration: settings.duration,
        easing: settings.easing,
        step: function() {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};


$('#number-1').jQuerySimpleCounter({end: 123,duration: 2000});
$('#number-2').jQuerySimpleCounter({end: 100,duration: 2000});
$('#number-3').jQuerySimpleCounter({end: 200,duration: 2000});




  /* AUTHOR LINK */
 $('.about-me-img').hover(function(){
        $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
    }, function(){
        $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
    });

 // headline animation
    let yourtext = [
        ["Sashimi", "#ffd166"],
        ["Nigirizushi", "#7DE2D1"],
        ["Makizushi", "#DE3C4B"],
        ["Uramakizushi", "#7DE2D1"],
        ["Temakizushi", "#ffd166"]
      ];
   
      let x = 0;
      let y = 0;
      //how fast typing is
      let wait = 300;
      //how long you want to text stay before overwriting
      let additionalwait = 5;
      let txt = yourtext[0][0].split("");
      let out = "";
      let retyping = setInterval(function () {
        document.getElementById("changingText").innerHTML = out;
        if (x > txt.length - 1) {
        } else {
          out += txt[x];
        }
        x++;
        if (x == txt.length + 2 + additionalwait) {
          if (y == yourtext.length - 1) {
            y = 0;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
          } else {
            y += 1;
            txt = yourtext[y][0].split("");
            out = "";
            document.getElementById("changingText").innerHTML = out;
            document.getElementById("changingText").style.color = yourtext[y][1];
            x = 0;
          }
        }
      }, wait);