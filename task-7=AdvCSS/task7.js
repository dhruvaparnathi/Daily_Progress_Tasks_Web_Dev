
addEventListener('mousemove',(e)=>{
    document.body.style.setProperty('--x',e.clientX+"px");
    document.body.style.setProperty('--y',e.clientY+"px");
});


let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?'; //86
let h1 = document.querySelector('#textarea h1');
let originaltext = h1.innerText;
h1.addEventListener('mouseenter',function(dets){
    let iteration = 0;

    let interval = setInterval(()=>{
        h1.innerText = originaltext.split("").map((char,idx)=>{
            if(idx<iteration) return char;
            return characters[Math.floor(Math.random()*87)];
        }).join("");
        iteration+=1.5;

        if(h1.innerText==originaltext) clearInterval(interval);
    },50);
});