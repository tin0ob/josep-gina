$(window).load(function() {
   var images = ['h.jpg','c.jpg','fondo.jpg',"t.jpg","a.jpg"];
    var i = 0;

    function changeBackground() {
        $('#wrapper').fadeOut(500, function(){
            $('#wrapper').css('background-image', function () {
            if (i >= images.length) {
                    i = 0;
                }

                return 'url(' + images[i++] + ')';
            });
            $('#wrapper').fadeIn(500);
        })      
    }
    changeBackground();
    setInterval(changeBackground, 3000);
});
