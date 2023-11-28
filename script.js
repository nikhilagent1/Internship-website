let i=0;
let hamburger=document.querySelector(".hamburger");
let dropdown_menu=document.querySelector(".dropdown-menu");
dropdown_menu.addEventListener("click",()=>{
    hamburger.classList.toggle("hide");
    if(hamburger.getAttribute("class")==="hamburger hide")
    document.querySelector(".hero-overlay").style.zIndex=0;
    else
    document.querySelector(".hero-overlay").style.zIndex=-1;
})
setInterval(()=>{
for(i=0;i<3;i++)
    {
        if(i==0)
        {
            document.querySelector('.testimonial-items-1').classList.remove('h');
            document.querySelector('.testimonial-items-2').classList.add('h');
            document.querySelector('.testimonial-items-3').classList.add('h');
        }
        else if(i==1)
        {
            document.querySelector('.testimonial-items-1').classList.add('h');
            document.querySelector('.testimonial-items-2').classList.remove('h');
            document.querySelector('.testimonial-items-3').classList.add('h');
        }
        else{
            document.querySelector('.testimonial-items-1').classList.add('h');
            document.querySelector('.testimonial-items-2').classList.add('h');
            document.querySelector('.testimonial-items-3').classList.remove('h');
        }
    }
},5000)