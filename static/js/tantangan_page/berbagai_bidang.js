var berbagai_manfaat = document.querySelectorAll(".content-berbagai-manfaat");
var image_berbagai_manfaat = document.querySelectorAll(".image");
var topics = document.querySelectorAll(".topic");
console.log(image_berbagai_manfaat);
var is_fully_visible_berbagai_manfaat = function (element) {
    var rect = element.getBoundingClientRect();
    var top_distance = rect.top;
    var bottom_distance = rect.bottom;
    var is_visible;
    is_visible = bottom_distance <= window.innerHeight && top_distance <= window.innerHeight;
    return is_visible;
};
var update_berbagai_manfaat = function () {
    for (var index = 0; index < berbagai_manfaat.length; index++) {
        if (is_fully_visible_berbagai_manfaat(berbagai_manfaat[index])) {
            berbagai_manfaat[index].classList.add("active");
            image_berbagai_manfaat[index].classList.add("active");
            topics[index].classList.add("active");
        }
        else {
            berbagai_manfaat[index].classList.remove("active");
            image_berbagai_manfaat[index].classList.remove("active");
            topics[index].classList.remove("active");
        }
    }
};
if (berbagai_manfaat) {
    window.addEventListener("scroll", update_berbagai_manfaat);
}
