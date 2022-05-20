

const matrix = new Matrix
console.log(matrix.matrix)

const reRender = ()=>{
    matrix.matrix.flat().forEach((el,i) => {
        const div=document.querySelector(`.tetrisBoard div:nth-child(${i+1})`)
        div.removeAttribute('class')
        div.classList.add('boardUnit')
        div.classList.add(el.color>0 ? colors[el.color-1] : 'blank')
        console.log(el)
    });
}

reRender()

matrix.goDown()

console.log(matrix.matrix)

reRender()

console.log(matrix.matrix)

// setInterval( ()=>{
//     matrix.goDown()
//     reRender()
// },500)

