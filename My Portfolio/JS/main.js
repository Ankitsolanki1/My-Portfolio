// sticky navbar background

$(window).scroll(function(){
    if($(window).scrollTop()>20){
        $("nav").addClass("black");
    }
    else{
        $("nav").removeClass("black");
    }
})

// end of function

const elements = document.querySelector('.elements');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');





openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
elements.addEventListener('click',close);

function show(){
    elements.style.display = 'flex';
    elements.style.top = '0';
    // openMenu.style.display='none';
    // openMenu.style.display='none';
      
}
function close(){
    elements.style.top = '-100%'; 
    
}
