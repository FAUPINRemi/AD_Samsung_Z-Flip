const text = document.getElementById('txt')
const animtext = " L'élégance prend une nouvelle forme."
const container2 = document.querySelector('.container2')

let i = 0
let timer = null

const animate = () => {
    text.innerHTML = animtext.slice(0, i)
    i++;
    if (i > animtext.length) {
        i = 0;
        clearInterval(timer)
        setTimeout(() => { 
            container2.style.opacity = '1'
        }, 2000) 
    }
}

setTimeout(() => {
    text.style.visibility = 'visible'; 
    timer = setInterval(animate, 80)
})