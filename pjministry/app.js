const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

// Display mobile menu
const mobileMenu = ()=>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

// click mobile menu
menu.onclick = ()=>{
    mobileMenu()
}

// slides
const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
const auto = true 
const intervalTime = 5000
let slideInterval

const nextSlide = ()=>{
    // get current class
    const current = document.querySelector('.current')
    // remove current class
    current.classList.remove('current')
    // check for next slide
    if(current.nextElementSibling){
        // add current to next sibling
        current.nextElementSibling.classList.add('current')
    }else{
        // Add current to start
        slides[0].classList.add('current')
    }
    setTimeout(()=>current.classList.remove('current'))
}

const prevSlide = ()=>{
    // get current class
    const current = document.querySelector('.current')
    // remove current class
    current.classList.remove('current')
    // check for next slide
    if(current.previousElementSibling){
        // add current to next sibling
        current.previousElementSibling.classList.add('current')
    }else{
        // Add current to last 
        slides[slides.length-1].classList.add('current')
    }
    setTimeout(()=>current.classList.remove('current'))
}

// Button Events
next.addEventListener('click', (e)=>{
    nextSlide()
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime)
    }
})
prev.addEventListener('click', (e)=>{
    prevSlide()
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, intervalTime)
})

// Auto Slide
if(auto){
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime)
}