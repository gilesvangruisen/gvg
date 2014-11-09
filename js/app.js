
$('body').addClass("javascript")

var fadeOnLoad = function(object) {
    object.each(function() {
        object.ready(function() {
            object.delay(500).addClass("fadein")
        })
    });
};

$(document).ready(function() {
    fadeOnLoad($(".preview a"))
    fadeOnLoad($(".about"))
});