

document.addEventListener('DOMContentLoaded',function(){

    let animatedElements = document.querySelector('.animate');

    document.addEventListener('scroll',function(){
        // console.log(window.scrollY);
        // console.log(animatedElements);
        animatedElements.forEach(element => {
            if(element.scrollTop == 0) {
                console.log("TOP");
            }
            
        });

    
    });
    
});


