var parallax = function (e) {
    document.querySelectorAll(".matrix").forEach(function (matrix) {
        var moving_value = parseInt(matrix.getAttribute("data-value"));
        var x = (e.clientX * moving_value) / 500;
        var y = (e.clientY * moving_value) / 500;
        matrix.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
};
