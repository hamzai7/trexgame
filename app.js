document.addEventListener('DOMContentLoaded', () => {
const dino = document.querySelector('.dino')
let isJumping = false
let gravity 

function control(e) {
    if (e.keyCode === 32) {
        if (!isJumping) {  //if dino isnt currently jumping
            isJumping = true //press spacepar
            jump() //execute jump
        }
    }
}
document.addEventListener('keyup', control)

function jump() {
    let position = 0
    let timerId = setInterval(function (){

        // move down
        if (position === 150) {
            clearInterval(timerId)
            console.log('down')
            let downTimerId = setInterval(function () {
                if (position ===0) {
                    clearInterval(downTimerId)
                    isJumping = false
                }
                position -= 30
                dino.style.bottom = position + 'px'
            },20)
            
        }



        //move up
        console.log('up')
        position +=30
        dino.style.bottom = position + 'px'
    },20)
}

})