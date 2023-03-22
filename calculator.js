let display = document.getElementById('display')
let buttons = Array.from(document.getElementsByClassName('button'))
buttons.map(but => {
    but.addEventListener('click', (e) => {
        switch (e.target.innerHTML) {
            case 'C':
                display.innerText = ''
                break
            case 'del':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = 'Error!'
                }
                break
            default:
                display.innerText += e.target.innerText
        }
    })
})
let sum = 4 + 6
let result = eval(sum)
console.log(result);
let target = 5
switch (target) {
    case 6:
        console.log('error!')
        break
    case 4:
        console.log('wrong!')
        break
    case 5:
        console.log('Excellent choice!')
        break
    default:
        console.log('Nothing caught!');
}