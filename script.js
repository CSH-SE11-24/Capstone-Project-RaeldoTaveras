console.log("Script Running")

let button = document.querySelector("#RULES")
console.log(button)
let p = document.querySelector("#R")
console.log(p)

button.addEventListener("click",function(event){
  p.textContent = "DON'T SAY THESE ALBUMMS SUCK"
})

let img = document.querySelector(".img")
console.log(img)


img.addEventListener("mouseover",function(event){
  img.src = "LOVE SONG.jpg"
})


img.addEventListener("mouseout",function(event){
  img.src = "J COLE.webp"
})



let ruels= document.querySelectorAll(".ruels")


for (let i =0;i <ruels.length;i++){
    ruels[i].addEventListener("click",function
 (event){ ruels[i].style.color ="blue"                      
        })
}