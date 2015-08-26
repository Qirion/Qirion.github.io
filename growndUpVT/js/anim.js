$(document).ready(function () {
    console.log("Anim beg");
    var num = 0;
    
    BOOMR.subscribe('before_beacon', function(o) {
       num = o.bw;
    });

    $('#results').on("me", function () {

        console.log(num + "<<<<<<<");

    });

});