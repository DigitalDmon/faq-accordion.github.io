const boxs = document.querySelectorAll(".box");

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active")
    });
});