$(document).ready(function(){  
    //gnb
    $('.gnb').mouseenter(function(){
        $('.sub, .sub_bg').slideDown(200);
    });    
    $('#header').mouseleave(function(){
        $('.sub, .sub_bg').hide();
    });
    
    //slider
    var index = 0;
    var on = true;
    var slide = setInterval(move,5000);
    var indi = $('.indi').find('li');
    
    $('.btnAuto').click(stop);
    indi.each(function(){
        $(this).click(function(){
            change($(this).index());
        });
    });
    function change(n){
        $('.img_wrap').eq(index).fadeOut(500);
        if(n==3){n=0;}
        index=n,
        $('.img_wrap').eq(index).fadeIn(500);
        indi.removeClass('on');
        indi.eq(index).addClass('on');
    } 
    function move(){
        change(index+1);
    }
    function stop(){
        if(on){
            on = false;
            clearInterval(slide);
            $('.btnAuto').css('background-position','0 -135px');
        }
        else{
            on = true;
            slide = setInterval(move,5000);
            $('.btnAuto').css('background-position','-10px -135px');
        }
    }
 
    //news
    var page=0;
    var pagenum=$('.news_btn').find('span');
    
    $('.prev').click(function(){
        $('.news_list').eq(page).hide();
        page--;
        if(page==-1){
            page=4;
        }
        $('.news_list').eq(page).show();
        pagenum.text(page+1);
    });
    $('.next').click(function(){
        $('.news_list').eq(page).hide();
        page++;
        if(page==5){
            page=0;
        }
        $('.news_list').eq(page).show();
        pagenum.text(page+1);
    });
});


