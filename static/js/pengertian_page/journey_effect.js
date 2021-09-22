var revolutions = document.querySelectorAll(".text-container");
var images = document.querySelectorAll(".image");
var lighting = document.querySelectorAll(".light");
var text = document.querySelectorAll(".text-revolusi");
var is_fully_visible_revolution = function (element) {
    var rect = element.getBoundingClientRect();
    var top_distance = rect.top;
    var bottom_distance = rect.bottom;
    var is_visible;
    is_visible = bottom_distance <= window.innerHeight && top_distance <= window.innerHeight;
    return is_visible;
};
var update_journey = function () {
    for (var index = 0; index < revolutions.length; index++) {
        if (is_fully_visible_revolution(revolutions[index])) {
            revolutions[index].classList.add("active");
            images[index].classList.add("active");
            lighting[index].classList.add("active");
            text[index].classList.add("active");
        }
        else {
            revolutions[index].classList.remove("active");
            lighting[index].classList.remove("active");
            images[index].classList.remove("active");
            text[index].classList.remove("active");
        }
    }
};
if (revolutions) {
    window.addEventListener("scroll", update_journey);
}
