
let parallax = (e): void => {
    document.querySelectorAll(".matrix").forEach(
        matrix => {
            let moving_value: number = parseInt(matrix.getAttribute("data-value"));
            let x: number = (e.clientX * moving_value) / 500;
            let y: number = (e.clientY * moving_value) / 500;

            (matrix as HTMLElement).style.transform = "translateX(" + x +"px) translateY(" + y + "px)" 
        }
    )
}
