'use strict'

const root = document.querySelector('#root')
const res = document.querySelector('#res')
const btn = document.querySelector('#btn')
const colorList = document.querySelector('#color-list')
let colorListArr = colorList.querySelectorAll('li')
btn.addEventListener('click', () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    root.style.background = color
    res.innerHTML = color
    const node = document.createElement("LI")
    const textnode = document.createTextNode(color)
    node.appendChild(textnode)
    node.style.background = color
    colorList.appendChild(node)
    colorListArr = [...colorListArr, node]
    appendListColor()
})

const appendListColor = () => {
    colorListArr.forEach(item => {
        item.addEventListener('click', () => {
            root.style.background = item.innerHTML
            res.innerHTML = item.innerHTML
        })
    })
}
appendListColor()