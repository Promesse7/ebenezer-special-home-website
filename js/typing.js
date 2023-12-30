const text=document.querySelector(".second_text")

const textLoad=()=>{
    setTimeout(() => {
        text.textContent="Enjoy the world of relaxation and tranquility."
    }, 0);
    setTimeout(() => {
        text.textContent="World where peace is at its peace."
    }, 4000);
    setTimeout(() => {
        text.textContent="The right place to spend your time."
    }, 8000);
}
textLoad();
setInterval(textLoad, 12000);