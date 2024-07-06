let img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIcggAexW3BWyRIR1JlL4WWE_1Hqillk4QVg&s"
let img2 = "https://d2779tscntxxsw.cloudfront.net/587545ab5a65e.jpeg?width=1200&quality=80"
let img3 = "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_sm_2x/f_auto/v1536936974/primary/exvzqcvorticinejmmel"

let btn1 = document.getElementById ("btn1")
let btn2 = document.getElementById ("btn2")
let btn3 = document.getElementById ("btn3")
let image = document.getElementById ('image')

btn2.onclick = function () {
    image.src = img2
}
btn1.onclick = function () {
    image.src = img1
}
btn3.onclick = function () {
    image.src = img3
}

let btn4 = document.getElementById ("btn4")
let btn5 = document.getElementById ("btn5")
let btn6 = document.getElementById ("btn6")

btn4.onclick = function () {
    image.style.filter = "opacity(25%)"
}
btn5.onclick = function () {
    image.style.filter = "blur(5px)"
}
btn6.onclick = function () {
    image.style.filter = "contrast(200%)"
}

let btn7 = document.getElementById ("btn7")
let btn8 = document.getElementById ("btn8")
let btn9 = document.getElementById ("btn9")

btn7.onclick = function () {
    image.style.border = '1rem solid'
}
btn8.onclick = function () {
    image.style.border = 'thick double #32a1ce'
}
btn9.onclick = function () {
    image.style.border = 'dashed red'
}