let btn = document.createElement('button');
btn.innerHTML='Click me!'
let main =document.querySelector('main');
main.appendChild(btn);

btn.addEventListener('click',() => {
    let div = document.createElement('div');
    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let r = Math.floor(Math.random()*90);
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);

    div.style.left = x+'%';
    div.style.top = y+'%';
    div.style.rotate = r+'deg';
    div.style.background = `rgb(${c1},${c2},${c3})`;
    main.appendChild(div);
})