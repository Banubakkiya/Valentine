const message = "Naan un life la vandhadhu oru coincidence nu nee nenaikalam aana enaku adhu life oda best decision maari feel aagudhu.Un kitta pesama irukkura naal konjam empty ah irukkum.Un message varum pothu dhaan en phone illa… en face dhaan first smile pannum.Nee enaku lover mattum illa…nee enaku peace.Nee ennoda Gem da.Stress irukkum pothu my Stress Buster.Sad ah irukkum nerathula reason to my smile.Sometimes naan sollama iruppen,aana un presence dhaan enakku romba mukkiyam.Future epdi irukkum nu theriyadhu…but oru vishayam sure en days la happiest moments la nee iruppa irukkanumnu nan ninaikuren.Happy Valentine’s Day da Pattu ❤️Stay with me da kutty kunjaan… just like this always.";


let i = 0;

function typeWriter(){
    if(i < message.length){
        document.getElementById("text").innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 40);
    }
}

function openGift(){
    document.getElementById("opening").style.display="none";
    document.getElementById("main").style.display="block";
    document.getElementById("music").play();
    typeWriter();
}

/* Slideshow */
let images = ["asset/hh.jpeg","/asset/pic2.jpeg","/asset/love.jpeg","/asset/pic.jpeg","/asset/memo.jpeg","/asset/tic.jpeg","/asset/new.jpeg","/asset/rupee.jpeg","/asset/chat.jpeg","/asset/chat2.jpeg","/asset/science.jpeg","/asset/kit.jpeg","/asset/lc.jpeg","/asset/roman.jpeg"];
let index = 0;

setInterval(()=>{
    index++;
    if(index >= images.length) index = 0;
    document.getElementById("slide").src = images[index];
},3000);

/* Falling Hearts */
function showHearts(){
    for(let i=0;i<20;i++){
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML="❤️";
        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=(Math.random()*3+2)+"s";
        document.body.appendChild(heart);

        setTimeout(()=>{heart.remove()},4000);
    }
}
/* Floating hearts background */
setInterval(()=>{
    const heart = document.createElement("div");
    heart.classList.add("floatHeart");
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(Math.random()*20+10)+"px";
    heart.style.animationDuration=(Math.random()*5+5)+"s";
    document.getElementById("heartContainer").appendChild(heart);

    setTimeout(()=>{heart.remove()},8000);
},500);



function goProposal(){
    window.location.href="proposal.html";
}
/* continuous heart rain */
setInterval(()=>{
    const h=document.createElement("div");
    h.classList.add("rainHeart");
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(Math.random()*3+3)+"s";
    document.body.appendChild(h);

    setTimeout(()=>{h.remove()},6000);
},300);

