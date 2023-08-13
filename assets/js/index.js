console.log("hello world");
let songindex=0;
let audioelement=new Audio("assets/songs/1.mp3");
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');


let songs=[
    { songname:"Marvel legion", filepath:"assets/songs/1.mp3", coverpath:"assets/covers/1.jpg"},
    { songname:"TRAP -cartel", filepath:"assets/songs/2.mp3", coverpath:"assets/covers/2.jpg"},
    { songname:"They mad", filepath:"assets/songs/3.mp3", coverpath:"assets/covers/3.jpg"},
    { songname:"Rich the Kid", filepath:"assets/songs/4.mp3", coverpath:"assets/covers/4.jpg"},
    { songname:"scars to your beautiful", filepath:"assets/songs/5.mp3", coverpath:"assets/covers/5.jpg"},
    { songname:"Sucker from pain", filepath:"assets/songs/6.mp3", coverpath:"assets/covers/6.jpg"},
    { songname:"Back It Up", filepath:"assets/songs/7.mp3", coverpath:"assets/covers/7.jpg"},
    { songname:"The lovely Garden", filepath:"assets/songs/8.mp3", coverpath:"assets/covers/8.jpg"},
    { songname:"let me be your's", filepath:"assets/songs/9.mp3", coverpath:"assets/covers/9.jpg"},
    { songname:"let me love you", filepath:"assets/songs/10.mp3", coverpath:"assets/covers/10.jpg"},

   

]

// audioelement.play();

// play or pause
masterplay.addEventListener('click',()=>{
    if (audioelement.paused || audioelement.currentTime<=0) {
        audioelement.play(); 
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }else{
        audioelement.pause(); 
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;

    }
})

// listen to events
audioelement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    // console.log(progress);
    progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    audioelement.currentTime=progressbar.value*audioelement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitmplay')).forEach((element) => {
        element.classList.remove('fa-circle-play');
        element.classList.add('fa-circle-pause');
    })
}

Array.from(document.getElementsByClassName('songitmplay')).forEach((element) => {
    element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioelement.src='assets/songs/${songindex+1}.mp3';
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
    })
});

document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=9){
        songindex=0;
    }else{
        songindex+=1;
    }
    audioelement.src='assets/songs/${songindex+1}.mp3';
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=9;
    }else{
        songindex-=1;
    }
    audioelement.src='assets/songs/${songindex+1}.mp3';
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
    
})