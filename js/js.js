
jQuery(function($){
    
    
    
    window.addEventListener("load", function(event) {
        var menu = document.querySelector('.menu');
        var ativo = document.querySelector('.fa-bars');
        var close = document.querySelector('.mobile-close');
        
        
        function closeMenu(){
            menu.classList.remove('menu-ativo');
            $('body').css('overflow','auto');
        }

        ativo.addEventListener('click',function(){
            menu.classList.add('menu-ativo');
            $('body').css('overflow','hidden');
            
        },false)
        close.addEventListener('click',closeMenu,false)
      
        $(document).on("click",".menu ul li",function(){
            
            if(window.innerWidth <=768){
                closeMenu();
                return $('html, body').animate({scrollTop: $('.'+this.id).offset().top - 50}, 'slow');
                 
               
            }
            $('html, body').animate({scrollTop: $('.'+this.id).offset().top - 80}, 'slow');
            
        })
    });
    
    
    
    
    
})