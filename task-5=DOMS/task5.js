songs = [
  {
    name: "Die with a Smile",
    songimg: "https://tse4.mm.bing.net/th/id/OIP.IoTkekBD9zNNfftmCtzEswHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    url: "songs/Die With A Smile - PagalHits.mp3",
  },
  {
    name: "Line Without a Hook",
    songimg: "https://lh3.googleusercontent.com/5rP51aEd_982dcM_dOHhtSMNW20LrtWEatAgK20Hjcd8LTUuSW6Hlx7jQHYX5Yffosm7UoJ5vVak27Gy",
    url: "songs/ytmp3free.cc_ricky-montgomery-line-without-a-hook-official-lyric-video-youtubemp3free.org.mp3",
  },
  {
    name: "Sailor",
    songimg: "https://images.genius.com/649aaf0ddb67f7ddad4424924d76cc48.1000x1000x1.png",
    url: "songs/Sailor Song - Gigi Perez.mp3",
  },
  {
    name: "End of Beginning",
    songimg: "https://tse4.mm.bing.net/th/id/OIP.kuNjlROjTL7pYa3SjxFATQHaEk?rs=1&pid=ImgDetMain&o=7&rm=3",
    url: "songs/End_Of_Beginning.mp3",
  },
];

let clutter="";
songs.forEach(function(elem,idx){
    clutter+=`<div class="song" id="${idx}">
                <div class="songimg"><img id="${idx}" src="${elem.songimg}" alt=""></div>
                <div class="songname"><h3 id="${idx}">${elem.name}</h3></div>
            </div>`;
});
let allsongs = document.querySelector('#allsongs');
allsongs.innerHTML = clutter;

let aud = new Audio();
let flag=1;
let curr=0;
let pht = document.querySelector('#pht');
allsongs.addEventListener("click",function(dets){
    let x = Number(dets.target.id);
    curr = x;
    pht.style.backgroundImage = `url(${songs[x].songimg})`;
    aud.src = songs[x].url;
    aud.play();
    document.querySelector('#play').innerHTML = `<i id="play" class="ri-pause-mini-line"></i>`;
    flag=0;
});

let backward = document.querySelector('#backward');
let play = document.querySelector('#play');
let forward = document.querySelector('#forward');

backward.addEventListener("click",function(x){
    if(curr>0){
        curr--;
        pht.style.backgroundImage = `url(${songs[curr].songimg})`;
        aud.src = songs[curr].url;
        aud.play();
        document.querySelector('#play').innerHTML = `<i id="play" class="ri-pause-mini-line"></i>`;
        flag=0;

    }
});
forward.addEventListener("click",function(x){
    if(curr<songs.length-1){
        curr++;
        pht.style.backgroundImage = `url(${songs[curr].songimg})`;
        aud.src = songs[curr].url;
        aud.play();
        document.querySelector('#play').innerHTML = `<i id="play" class="ri-pause-mini-line"></i>`;
        flag=0;
    }
});

play.addEventListener("click",function(){
    if(flag==1){
        flag=0;
        document.querySelector('#play').innerHTML = `<i id="play" class="ri-pause-mini-line"></i>`;
        aud.play();
    }else{
        document.querySelector('#play').innerHTML = `<i id="play" class="ri-play-mini-line"></i>`;
        aud.pause();
        flag=1;
    }
});