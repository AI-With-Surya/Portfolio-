// ===============================
// Typing Effect For Hero Section
// ===============================


let text = [
    "AI & Machine Learning Engineer",
    "Python Developer",
    "Data Science Enthusiast",
    "Generative AI Explorer"
];


let index = 0;
let charIndex = 0;

let heroTitle = document.querySelector(".hero h2");


function typeEffect(){


    if(charIndex < text[index].length){

        heroTitle.innerHTML += text[index].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }

    else{

        setTimeout(eraseEffect,1500);

    }

}



function eraseEffect(){


    if(charIndex > 0){

        heroTitle.innerHTML =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }

    else{

        index++;

        if(index >= text.length){

            index=0;

        }

        setTimeout(typeEffect,500);

    }

}



window.onload=function(){

    typeEffect();

};





// ===============================
// Dark / Light Mode
// ===============================


let themeButton =
document.getElementById("theme");


let body =
document.body;



let dark=true;


themeButton.onclick=function(){


    if(dark){


        body.style.background="#f5f5f5";

        body.style.color="#111";


        document.querySelectorAll(".box,.item,.skill,.project-card,.cert div")
        .forEach(card=>{

            card.style.background="#ffffff";

            card.style.color="#111";

        });


        themeButton.innerHTML="☀️";


        dark=false;


    }


    else{


        body.style.background="#050816";

        body.style.color="white";


        document.querySelectorAll(".box,.item,.skill,.project-card,.cert div")
        .forEach(card=>{

            card.style.background="#111827";

            card.style.color="white";

        });


        themeButton.innerHTML="🌙";


        dark=true;

    }


};







// ===============================
// Scroll Animation
// ===============================


let elements =
document.querySelectorAll(
".box,.item,.skill,.project-card,.cert div"
);



window.addEventListener("scroll",()=>{


elements.forEach(element=>{


let position =
element.getBoundingClientRect().top;


let screen =
window.innerHeight;



if(position < screen-100){


element.style.opacity="1";

element.style.transform="translateY(0)";


}


});


});





// Initial Animation Style


elements.forEach(element=>{


element.style.opacity="0";

element.style.transform="translateY(50px)";

element.style.transition="0.6s";


});







// ===============================
// Resume Button Alert
// ===============================


let resume =
document.querySelector(".btn");


if(resume){


resume.addEventListener("click",()=>{


console.log(
"Resume Download Started"
);


});


}







// ===============================
// Active Navbar Highlight
// ===============================


let sections =
document.querySelectorAll("section");


let navLinks =
document.querySelectorAll("nav ul li a");



window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


let top =
window.scrollY;


let offset =
section.offsetTop-200;


let height =
section.offsetHeight;



if(top >= offset &&
top < offset+height){


current =
section.getAttribute("id");


}


});



navLinks.forEach(link=>{


link.style.color="white";


if(link.getAttribute("href")
==
"#"+current){


link.style.color="#00eaff";


}


});


});