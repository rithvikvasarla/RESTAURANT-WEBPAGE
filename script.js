function scrollMenu(){

document.getElementById("menu").scrollIntoView({
behavior:"smooth"
})

}


let toggle = document.getElementById("modeToggle")

toggle.onclick = function(){

document.body.classList.toggle("dark")

}
