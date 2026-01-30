const stories = [
    {
        dp:"https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storydata:"https://images.unsplash.com/photo-1541980162-745179a89211?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storydata:"https://images.unsplash.com/photo-1676576625429-e00537557449?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        dp:"https://images.unsplash.com/photo-1531287333398-6d7bd77ef790?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storydata:"https://images.unsplash.com/photo-1555733117-36047473eb73?q=80&w=689&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },{
        dp:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storydata:"https://images.unsplash.com/photo-1617171594285-fc2f31d913b3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
];

let clutter="";
stories.forEach(function(elem,idx){
    clutter+=`<div class="story" id="story${idx}"><img id="${idx}" src="${elem.dp}" alt=""></div>`;
});

let storySection = document.querySelector('#stories');

storySection.innerHTML=clutter;

storySection.addEventListener("click",function(dets){
    let value = stories[dets.target.id].storydata;
    document.querySelector('#viewstory').style.backgroundImage = `url(${value})`
    document.querySelector('#viewstory').style.display = "block";

    document.getElementById(`story${dets.target.id}`).style.border = "none";

    setTimeout(function(){
        document.querySelector('#viewstory').style.display = "none";
    },3000);
});