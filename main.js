(function(){
    "use strict";
    
    var slider = document.getElementById("slider");
    var images = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];

    // slider.style.backgroundImage = "url('images/1.jpg')";
    slider.style.backgroundSize = "100%";

    var changeImage = function(path) {
        return new Promise(function(success, fail) {
            setTimeout(function(){
                slider.style.backgroundImage =  path;
                success();
            }, 1000)
        });

    };

    var i = 1;
    changeImage("url('images/1.jpg')").then(function resolver() {
        return changeImage("url("+ images[i] +")")
            .then(function(){
                i++;
                if(i >= images.length) {
                    i = 0;
                }
            })
            .then(resolver);
    }).catch(function(error) {
        console.log("Error: " + error);
    });


    // changeImage().then(function () {
    //     return changeImage("url('images/2.jpg')");
    // }).then(function () {
    //     return changeImage("url('images/3.jpg')");
    // }).then(function () {
    //     return changeImage("url('images/4.jpg')");
    // }).then(function () {
    //     return changeImage("url('images/5.jpg')");
    // })
})();