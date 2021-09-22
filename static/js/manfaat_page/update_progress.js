var is_fully_visible = function (element) {
    var rect = element.getBoundingClientRect();
    var top_distance = rect.top;
    var bottom_distance = rect.bottom;
    var is_visible;
    is_visible = bottom_distance <= window.innerHeight && top_distance <= window.innerHeight;
    return is_visible;
};
var update_circle_progress_bar = function () {
    var progress_bars = document.querySelectorAll(".percent-container");
    progress_bars.forEach(function (progress_bar) {
        if (is_fully_visible(progress_bar)) {
            progress_bar.classList.add("active");
        }
        else {
            progress_bar.classList.remove("active");
        }
    });
};
