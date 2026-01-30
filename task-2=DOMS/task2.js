let btn = document.querySelector('button');
let h3 = document.querySelector('h3');
let inner = document.querySelector('#inner');
let grow=0;
btn.addEventListener('click',()=>{
    btn.style.pointerEvents='none';
    let int = setInterval(()=>{
        grow++;
        inner.style.width = grow+'%';
        h3.innerHTML=grow+'%';
    },50);
    setTimeout(()=>{
        clearTimeout(int);
    },5000);
});