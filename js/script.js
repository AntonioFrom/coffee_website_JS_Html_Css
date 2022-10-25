let menuBtn = document.querySelector('#menu-btn')
let cartBtn = document.querySelector('#cart-btn')
let searchBtn = document.querySelector('#search-btn')


let navbar = document.querySelector('.navbar')
let cartItem = document.querySelector('.cart-items-container')
let search = document.querySelector('.search-form')

/*
menuBtn.onclick = () => {
    navbar.classList.toggle('active')
    search.classList.remove('active')
    cartItem.classList.remove('active')
    menuBtn.focus()
}


cartBtn.onclick = () => {
    cartItem.classList.toggle('active')
    navbar.classList.remove('active')
    search.classList.remove('active')
    cartBtn.focus()
}

searchBtn.onclick = () => {
    search.classList.toggle('active')
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    search.focus()
}
*/

let test = document.querySelector(".icons").children

for (let i = 0; i < test.length; i++) {
    test[i].onclick = () => {
        let tar = test[i].dataset.target
        for (elem of document.querySelectorAll(".ca-sw")) {
            if (!elem.classList.contains(tar.replace('.', ''))) {
                elem.classList.remove('active')
            }
        }
        document.querySelector(tar).classList.toggle('active')
        test[i].focus()
    }
}

window.onscroll = () => {
    navbar.classList.remove('active')
    cartItem.classList.remove('active')
    search.classList.remove('active')
}
