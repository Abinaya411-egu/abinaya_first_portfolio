document.addEventListener("DOMContentLoaded",()=>{

const links=document.querySelectorAll("a[href^='#']");

links.forEach(link=>{

link.addEventListener("click",(e)=>{

e.preventDefault();

const target=
document.querySelector(
link.getAttribute("href")
);

if(target){

window.scrollTo({

top:
target.offsetTop-70,

behavior:
"smooth"

});

}

});

});



const cards=
document.querySelectorAll(
".card,.project,.hero-image img"
);

function animate(){

cards.forEach(card=>{

const top=
card.getBoundingClientRect().top;

if(
top<
window.innerHeight-100
){

card.style.opacity="1";

card.style.transform=
"translateY(0)";

}

});

}

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
"all .8s ease";

});

window.addEventListener(
"scroll",
animate
);

animate();



const resumeBtn=
document.querySelector(
".resume-btn"
);

if(resumeBtn){

resumeBtn.addEventListener(
"click",
()=>{

alert(
"Resume Download Started"
);

});

}



const heroImg=
document.querySelector(
".hero-image img"
);

if(heroImg){

heroImg.addEventListener(
"mouseover",
()=>{

heroImg.style.transform=
"scale(1.05)";

});

heroImg.addEventListener(
"mouseout",
()=>{

heroImg.style.transform=
"scale(1)";

});

}

});