var arrayEmpty = []

document.onkeypress = function (event) {
    arrayEmpty.push(event.key)
}

var arraySpan = [
    '', '', '',
    '', '', '',
    '', '', '',
]

var spanTrue = true
var count = 0

document.querySelector('#cubs').addEventListener('click', function (event) {

    const oSpan = '<span class="item">o</span>'
    const xSpan = '<span class="item">x</span>'

    if (event.target.classList.contains('span-cub') && spanTrue === true) {
        event.target.innerHTML = oSpan
        let intKey = event.target.dataset.value
        arraySpan[intKey] = 'o'
        count++
        spanTrue = false

        if ((arraySpan[0] === 'o' && arraySpan[1] === 'o' && arraySpan[2] === 'o') || (arraySpan[3] === 'o' && arraySpan[4] === 'o' && arraySpan[5] === 'o') || (arraySpan[6] === 'o' && arraySpan[7] === 'o' && arraySpan[8] === 'o') || (arraySpan[0] === 'o' && arraySpan[3] === 'o' && arraySpan[6] === 'o') || (arraySpan[1] === 'o' && arraySpan[4] === 'o' && arraySpan[7] === 'o') || (arraySpan[2] === 'o' && arraySpan[5] === 'o' && arraySpan[8] === 'o') || (arraySpan[0] === 'o' && arraySpan[4] === 'o' && arraySpan[8] === 'o') || (arraySpan[2] === 'o' && arraySpan[4] === 'o' && arraySpan[6] === 'o')) {
            alert('Нолики победили!')
            setTimeout(() => {
                location.reload()
            }, 1000)
        } else if (count === 9) {
            alert('Ничья!')
            setTimeout(() => {
                location.reload()
            }, 1000)
        }
    } else if (event.target.classList.contains('span-cub') && spanTrue === false) {
        event.target.innerHTML = xSpan
        let intKey = event.target.dataset.value
        arraySpan[intKey] = 'x'
        count++
        spanTrue = true

        if ((arraySpan[0] === 'x' && arraySpan[1] === 'x' && arraySpan[2] === 'x') || (arraySpan[3] === 'x' && arraySpan[4] === 'x' && arraySpan[5] === 'x') || (arraySpan[6] === 'x' && arraySpan[7] === 'x' && arraySpan[8] === 'x') || (arraySpan[0] === 'x' && arraySpan[3] === 'x' && arraySpan[6] === 'x') || (arraySpan[1] === 'x' && arraySpan[4] === 'x' && arraySpan[7] === 'x') || (arraySpan[2] === 'x' && arraySpan[5] === 'x' && arraySpan[8] === 'x') || (arraySpan[0] === 'x' && arraySpan[4] === 'x' && arraySpan[8] === 'x') || (arraySpan[2] === 'x' && arraySpan[4] === 'x' && arraySpan[6] === 'x')) {
            alert('Крестики победили!')
            setTimeout(() => {
                location.reload()
            }, 1000)
        } else if (count === 9) {
            alert('Ничья!')
            setTimeout(() => {
                location.reload()
            }, 1000)
        }
    }
})