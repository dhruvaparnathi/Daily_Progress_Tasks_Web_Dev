const reelsData = [
  {
    id: 1,
    username: "tech_guru",
    userImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    videoUrl: "reels/1.mp4",
    caption: "Day 1 of learning JavaScript 🚀",
    likes: 1240,
    comments: 56,
    shares: 18,
    music: "Original Audio • tech_guru",
    isFollowed: false,
    isLiked: false,
    isMuted: true
  },
  {
    id: 2,
    username: "travel_vibes",
    userImg: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    videoUrl: "reels/2.mp4",
    caption: "Sunsets hit different 🌅",
    likes: 5320,
    comments: 210,
    shares: 92,
    music: "Chill Beats",
    isFollowed: true,
    isLiked: true,
    isMuted: true
  },
  {
    id: 3,
    username: "fitness_daily",
    userImg: "https://images.unsplash.com/photo-1768944285756-9981f5e2eb19?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    videoUrl: "reels/3.mp4",
    caption: "No excuses. Just results 💪",
    likes: 2890,
    comments: 134,
    shares: 45,
    music: "Workout Mix",
    isFollowed: false,
    isLiked: true,
    isMuted: true
  },
  {
    id: 4,
    username: "food_diaries",
    userImg: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=100&h=100&fit=crop",
    videoUrl: "reels/4.mp4",
    caption: "Cheese pull never fails 🤤",
    likes: 8420,
    comments: 402,
    shares: 160,
    music: "Food Vibes",
    isFollowed: true,
    isLiked: false,
    isMuted: true
  },
  {
    id: 5,
    username: "code_with_me",
    userImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop",
    videoUrl: "reels/5.mp4",
    caption: "Building a reels app using JS 🔥",
    likes: 1560,
    comments: 89,
    shares: 27,
    music: "Lofi Coding",
    isFollowed: false,
    isLiked: false,
    isMuted: true
  },
  {
    id: 6,
    username: "nature_lens",
    userImg: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=100&h=100&fit=crop",
    videoUrl: "reels/6.mp4",
    caption: "Peace begins where noise ends 🌿",
    likes: 6790,
    comments: 301,
    shares: 111,
    music: "Nature Sounds",
    isFollowed: true,
    isLiked: true,
    isMuted: true
  },
  {
    id: 7,
    username: "dance_floor",
    userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop",
    videoUrl: "reels/7.mp4",
    caption: "Just vibing to the beat 💃",
    likes: 9100,
    comments: 540,
    shares: 260,
    music: "Trending Dance Track",
    isFollowed: false,
    isLiked: true,
    isMuted: true
  },
  {
    id: 8,
    username: "street_style",
    userImg: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=100&h=100&fit=crop",
    videoUrl: "reels/8.mp4",
    caption: "Outfit check ✔️",
    likes: 3480,
    comments: 178,
    shares: 69,
    music: "Fashion Beat",
    isFollowed: true,
    isLiked: false,
    isMuted: true
  },
  {
    id: 9,
    username: "daily_quotes",
    userImg: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
    videoUrl: "reels/9.mp4",
    caption: "Believe. Work. Achieve. ✨",
    likes: 4620,
    comments: 245,
    shares: 130,
    music: "Soft Piano",
    isFollowed: false,
    isLiked: true,
    isMuted: true
  },
  {
    id: 10,
    username: "gaming_zone",
    userImg: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    videoUrl: "reels/10.mp4",
    caption: "Clutch moment 😱🎮",
    likes: 11200,
    comments: 880,
    shares: 420,
    music: "Game Soundtrack",
    isFollowed: true,
    isLiked: true,
    isMuted: true
  }
];


let screen = document.querySelector('#screen');

function loadReels(){
  
let cluster = "";
reelsData.forEach(function(elem,idx){
    cluster += `<div class="reel">
                <video autoplay loop ${elem.isMuted?"muted":""} id="${idx}" src="${elem.videoUrl}"></video>
                <div class="mute" id="${idx}"><button class="feature">${elem.isMuted?'<h3><i class="ri-volume-mute-fill feature"></i></h3>':'<h3><i class="ri-volume-up-fill feature"></i></h3>'}</button></div>
                <div id="info">
                    <div id="account">
                        <img src="${elem.userImg}" alt="">
                        <div id="user"><h2>${elem.username}</h2></div>
                        <button class="bttn" id="${idx}">${elem.isFollowed?"Followed":"Follow"}</button>
                    </div>
                    <div id="caption"><h3>${elem.caption}</h3></div>
                    <div id="music"><h4>${elem.music}</h4></div>
                </div>
                <div id="features">
                    <div class="likes" id="${idx}">${elem.isLiked?"<h3 class='feature'><i class='ri-heart-3-fill red feature'></i></h3>":"<h3 class='feature'><i class='ri-heart-3-line feature'></i></h3>"}<p class="feature">${elem.likes}</p></div>
                    <div id="comments"><h3><i class="ri-chat-3-line"></i></h3><p>${elem.comments}</p></div>
                    <div id="shares"><h3><i class="ri-share-2-line"></i></h3><p>${elem.shares}</p></div>
                </div>
            </div>`;
      });

screen.innerHTML = cluster;

}
loadReels();

screen.addEventListener('click',function(dets){

  if(dets.target.className=='bttn'){
    if(reelsData[dets.target.id].isFollowed==false){
      reelsData[dets.target.id].isFollowed = true;
  }else{
      reelsData[dets.target.id].isFollowed = false;
    }
  }

  if(dets.target.className=='likes'){
    if(reelsData[dets.target.id].isLiked==false){
      reelsData[dets.target.id].likes++;
      reelsData[dets.target.id].isMuted = false;
      reelsData[dets.target.id].isLiked = true; 
  }else{
      reelsData[dets.target.id].likes--;
      reelsData[dets.target.id].isMuted = true;
      reelsData[dets.target.id].isLiked = false;
    }
  }

  if(dets.target.className=='mute'){
    if(reelsData[dets.target.id].isMuted==true){
      for(let i=0;i<reelsData.length;i++){
        if(i!=dets.target.id){
          reelsData[i].isMuted=true;
        }
      }
      reelsData[dets.target.id].isMuted = false;
    }else{
      reelsData[dets.target.id].isMuted = true;
    }
  }

  loadReels();
});