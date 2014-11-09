
$('body').addClass("javascript")

var fadeOnLoad = function(object) {
    object.each(function() {
        object.ready(function() {
            object.delay(100).animate({"opacity":1, "margin-top":0}, 800)
        })
    });
};

fadeOnLoad($(".preview a"))
fadeOnLoad($(".about"))
// fadeOnLoad($("section.luff .preview"))