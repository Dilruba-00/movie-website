const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        moviLists[i].style.backgroundColor = "red"
    })
})