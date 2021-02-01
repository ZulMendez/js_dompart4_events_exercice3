// 1
let monT = document.querySelector('h1');
monT.setAttribute('class', 'text-blue');
monT.addEventListener('click', () => {
    // monT.className = 'text-blue'
    monT.classList.add('text-blue')
})

// 2
let titre2 = document.querySelector('h3');
titre2.addEventListener('dblclick', () => {
    titre2.classList.add('text-error')
});

// 3
let firstP = document.querySelectorAll('p')[0]
firstP.addEventListener('click', () => {
    firstP.classList.toggle('text-style')
})

// 4
let mySpan = Array.from(document.querySelectorAll('p')[1].children)
// let secondP = document.querySelectorAll('p')[1]
// let mySpan = secondP.querySelectorAll('span')

mySpan.forEach(el => {
    el.addEventListener('click', () =>{
        el.classList.toggle('bolder')
    })
});

// 5
let mySpan2 = Array.from(document.querySelectorAll('p')[2].children)
console.log(mySpan2);
mySpan2.forEach(el => {
    el.addEventListener('click', () =>{
        mySpan2.forEach(el => {
            el.classList.remove('bolder-red')
        });
        el.classList.add('bolder-red')
    })
});
