
$('body').addClass("javascript")

var fadeOnLoad = function(object) {
    object.each(function() {
        object.ready(function() {
            object.delay(100).addClass("fadein")
        })
    });
};

$(document).ready(function() {
    fadeOnLoad($(".preview a"))
    fadeOnLoad($(".about"))
});