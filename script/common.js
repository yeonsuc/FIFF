
//헤더 서식
$('.gnb').mouseenter(function(){
  $('.sub').stop().slideDown();
  $('.sub_box').stop().slideDown();
});

$('.h_wrap').mouseleave(function(){
  $('.sub').stop().slideUp();
  $('.sub_box').stop().slideUp();
});

//메인슬라이드 서식
const mslide = $('.slide_wrap');
const l_btn = $('.visual .left_btn');
const r_btn = $('.visual .right_btn');
const c_btn = $('.visual .ctrl_btn > li');
const play = $('.visual .play .fa-play');
const stop = $('.visual .play .fa-pause');
let idx = 0;


//1번 슬라이드 앞에 마지막 슬라이드를 배치
$('.slide_wrap ul li:last-child').insertBefore('.slide_wrap ul li:first-child');

//왼쪽으로 100%이동하여 1번슬라이드가 처음에 나오게 함
mslide.css('margin-left','-100%');

//moveleft 함수
function moveLeft(){
  mslide.animate({'margin-left':'-200%'},500,function(){
    $('.slide_wrap ul li:first-child').insertAfter('.slide_wrap ul li:last-child');
    mslide.css('margin-left','-100%');
  });
  if(idx==3){
    idx=0
  }else{
    idx++;
  }
  c_btn.removeClass('on');
  c_btn.eq(idx).addClass('on');
}

//시간객체를 사용하여 4초마다 움직이도록 한다
let Timer = setInterval(moveLeft,4000);

//moveRight 함수
function moveRight(){
  mslide.animate({'margin-left':'0'},500,function(){
    $('.slide_wrap ul li:last-child').insertBefore('.slide_wrap ul li:first-child');
    mslide.css('margin-left','-100%');
  });
    if(idx==0){
    idx=3
  }else{
    idx--;
  }
  c_btn.removeClass('on');
  c_btn.eq(idx).addClass('on');
}

//좌,우 버튼 클릭시 슬라이드 이동
l_btn.click(function(){
  moveRight();
  clearInterval(Timer);
});
r_btn.click(function(){
  moveLeft();
  clearInterval(Timer);
});
$('.visual .left_btn, .visual .right_btn').mouseleave(function(){
  Timer = setInterval(moveLeft,4000);
});

c_btn.click(function(){
  idx = $(this).index(); //0

  $('.visual .ctrl_btn > li').removeClass('on');
  $(this).addClass('on');

  if(idx==0){ //첫번째 콘트롤버튼 누르면
    $('.slide_wrap').html('<ul><li class="li04"><a href="javascript:void(0);" title="메인슬라이드4"><img src="./images/main_slide4.jpg" alt="메인슬라이드 이미지4"></a></li><li class="li01"><a href="javascript:void(0);" title="메인슬라이드1"><img src="./images/main_slide1.jpg" alt="메인슬라이드 이미지1"></a></li><li class="li02"><a href="javascript:void(0);" title="메인슬라이드2"><img src="./images/main_slide2.jpg" alt="메인슬라이드 이미지2"></a></li><li class="li03"><a href="javascript:void(0);" title="메인슬라이드3"><img src="./images/main_slide3.jpg" alt="메인슬라이드 이미지3"></a></li></ul>');
  }else if(idx==1){ //두번째 콘트롤 버튼 누르면
    $('.slide_wrap').html('<ul><li class="li01"><a href="javascript:void(0);" title="메인슬라이드1"><img src="./images/main_slide1.jpg" alt="메인슬라이드 이미지1"></a></li><li class="li02"><a href="javascript:void(0);" title="메인슬라이드2"><img src="./images/main_slide2.jpg" alt="메인슬라이드 이미지2"></a></li><li class="li03"><a href="javascript:void(0);" title="메인슬라이드3"><img src="./images/main_slide3.jpg" alt="메인슬라이드 이미지3"></a></li><li class="li04"><a href="javascript:void(0);" title="메인슬라이드4"><img src="./images/main_slide4.jpg" alt="메인슬라이드 이미지4"></a></li></ul>');
  }else if(idx==2){ //세번째 콘트롤 버튼 누르면
    $('.slide_wrap').html('<ul><li class="li02"><a href="javascript:void(0);" title="메인슬라이드2"><img src="./images/main_slide2.jpg" alt="메인슬라이드 이미지2"></a></li><li class="li03"><a href="javascript:void(0);" title="메인슬라이드3"><img src="./images/main_slide3.jpg" alt="메인슬라이드 이미지3"></a></li><li class="li04"><a href="javascript:void(0);" title="메인슬라이드4"><img src="./images/main_slide4.jpg" alt="메인슬라이드 이미지4"></a></li><li class="li01"><a href="javascript:void(0);" title="메인슬라이드1"><img src="./images/main_slide1.jpg" alt="메인슬라이드 이미지1"></a></li></ul>');
  }else{ //마지막 콘트롤 버튼 누르면 일때
    $('.slide_wrap').html('<ul><li class="li03"><a href="javascript:void(0);" title="메인슬라이드3"><img src="./images/main_slide3.jpg" alt="메인슬라이드 이미지3"></a></li><li class="li04"><a href="javascript:void(0);" title="메인슬라이드4"><img src="./images/main_slide4.jpg" alt="메인슬라이드 이미지4"></a></li><li class="li01"><a href="javascript:void(0);" title="메인슬라이드1"><img src="./images/main_slide1.jpg" alt="메인슬라이드 이미지1"></a></li><li class="li02"><a href="javascript:void(0);" title="메인슬라이드2"><img src="./images/main_slide2.jpg" alt="메인슬라이드 이미지2"></a></li></ul>');
  }
  
});

c_btn.hover(function(){
  clearInterval(Timer);
}, function(){
  Timer = setInterval(moveLeft,4000);
});

//기업 홍보 영상 클릭시 유튜브 영상이 나오게 함
$('.p_wrap').click(function(){
  $(this).find('a').hide().parent().find('iframe').show();
});

play.click(function(){
  Timer = setInterval(moveLeft,4000);
  $(this).parent().find('.fa-pause').toggle();
  $(this).parent().find('.fa-play').toggle();
});
stop.click(function(){
  clearInterval(Timer);
  $(this).parent().find('.fa-pause').toggle();
  $(this).parent().find('.fa-play').toggle();
})


//제품 서식
const p_l_btn = $('.product .left_btn');
const p_r_btn = $('.product .right_btn');
const p_list = $('.pr_wrap ul');
let p_c_btn = $('.product .ctrl_btn li');

function p_moveLeft(){
  p_list.animate({'margin-left':'0%'},500,function(){
    $('.pr_wrap ul li:last-child').insertBefore('.pr_wrap ul li:first-child');
    p_list.css('margin-left','-100%');

    if(idx==3){
      idx=0
    }else{
      idx++;
    }
    p_c_btn.removeClass('on');
    p_c_btn.eq(idx).addClass('on');
  });
}
function p_moveRight(){
  p_list.animate({'margin-left':'-200%'},500,function(){
    $('.pr_wrap ul li:first-child').insertAfter('.pr_wrap ul li:last-child');
    p_list.css('margin-left','-100%');

    if(idx==0){
    idx=3
  }else{
    idx--;
  }
  c_btn.removeClass('on');
  c_btn.eq(idx).addClass('on');
  });
}

if($(window).width()<=768){
  let pr_ctrl = $('.product > .ctrl_btn > li');
  pr_ctrl.click(function(){
    idx = $(this).index(); //0
    console.log(idx);
  
    $('.product .ctrl_btn > li').removeClass('on');
    $(this).addClass('on');
  
    if(idx==0){ //첫번째 콘트롤버튼 누르면
      $('.pr_wrap').html('<ul><li><img src="./images/prd_01.png" alt="나비엔 콘덴싱 보일러 이미지"><div class="pr_intro"><p>겨울철 부담되는 난방비<br>확실하게 줄이는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 보일러 페이지 바로가기" class="btn01">나비엔 콘덴싱 보일러</a></div><div class="bg_wrap"><img src="./images/life_01.jpg" alt="나비엔 콘덴싱 보일러 배경이미지"></div></li><li><img src="./images/prd_02.png" alt="나비엔 콘덴싱 온수기 이미지"><div class="pr_intro"><p>매일 아침 바쁜 출근길<br>여유 있게 준비하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 온수기 페이지 바로가기" class="btn01">나비엔 콘덴싱 온수기</a></div><div class="bg_wrap"><img src="./images/life_02.jpg" alt="나비엔 콘덴싱 온수기 배경이미지"></div></li><li><img src="./images/prd_03.png" alt="나비엔 메이트 온수매트 이미지"><div class="pr_intro"><p>자도 자도 피곤한 생활<br>포근한 잠자리를 만드는 노하우는?</p><a href="javascript:void(0);" title="나비엔 메이트 온수매트 페이지 바로가기" class="btn01">나비엔 메이트 온수매트</a></div><div class="bg_wrap"><img src="./images/life_03.jpg" alt="나비엔 메이트 온수매트 배경이미지"></div></li><li><img src="./images/prd_04.png" alt="나비엔 환기청정기 이미지"><div class="pr_intro"><p>유해가스, 미세먼지로 오염된 실내공기<br> 깨끗하게 정화하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 환기청정기 페이지 바로가기" class="btn01">나비엔 환기청정기</a></div><div class="bg_wrap"><img src="./images/life_04.jpg" alt="나비엔 환기청정기 배경이미지"></div></li><li><img src="./images/prd_05.png" alt="나비엔 IoT 보일러 이미지"><div class="pr_intro"><p>깜빡한 가스불, 집에 있는 아이들 걱정<br>외출시 걱정거리를 해결 할 편리한 노하우는?</p><a href="javascript:void(0);" title="나비엔 IoT 보일러 페이지 바로가기" class="btn01">나비엔 IoT 보일러</a></div><div class="bg_wrap"><img src="./images/life_05.jpg" alt="나비엔 IoT 보일러 배경이미지"></div></li></ul>');
    }else if(idx==1){ //두번째 콘트롤 버튼 누르면
      $('.pr_wrap').html('<ul><li><img src="./images/prd_02.png" alt="나비엔 콘덴싱 온수기 이미지"><div class="pr_intro"><p>매일 아침 바쁜 출근길<br>여유 있게 준비하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 온수기 페이지 바로가기" class="btn01">나비엔 콘덴싱 온수기</a></div><div class="bg_wrap"><img src="./images/life_02.jpg" alt="나비엔 콘덴싱 온수기 배경이미지"></div></li><li><img src="./images/prd_03.png" alt="나비엔 메이트 온수매트 이미지"><div class="pr_intro"><p>자도 자도 피곤한 생활<br>포근한 잠자리를 만드는 노하우는?</p><a href="javascript:void(0);" title="나비엔 메이트 온수매트 페이지 바로가기" class="btn01">나비엔 메이트 온수매트</a></div><div class="bg_wrap"><img src="./images/life_03.jpg" alt="나비엔 메이트 온수매트 배경이미지"></div></li><li><img src="./images/prd_04.png" alt="나비엔 환기청정기 이미지"><div class="pr_intro"><p>유해가스, 미세먼지로 오염된 실내공기<br> 깨끗하게 정화하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 환기청정기 페이지 바로가기" class="btn01">나비엔 환기청정기</a></div><div class="bg_wrap"><img src="./images/life_04.jpg" alt="나비엔 환기청정기 배경이미지"></div></li><li><img src="./images/prd_05.png" alt="나비엔 IoT 보일러 이미지"><div class="pr_intro"><p>깜빡한 가스불, 집에 있는 아이들 걱정<br>외출시 걱정거리를 해결 할 편리한 노하우는?</p><a href="javascript:void(0);" title="나비엔 IoT 보일러 페이지 바로가기" class="btn01">나비엔 IoT 보일러</a></div><div class="bg_wrap"><img src="./images/life_05.jpg" alt="나비엔 IoT 보일러 배경이미지"></div></li><li><img src="./images/prd_01.png" alt="나비엔 콘덴싱 보일러 이미지"><div class="pr_intro"><p>겨울철 부담되는 난방비<br>확실하게 줄이는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 보일러 페이지 바로가기" class="btn01">나비엔 콘덴싱 보일러</a></div><div class="bg_wrap"><img src="./images/life_01.jpg" alt="나비엔 콘덴싱 보일러 배경이미지"></div></li></ul>');
    }else if(idx==2){ //세번째 콘트롤 버튼 누르면
      $('.pr_wrap').html('<ul><li><img src="./images/prd_03.png" alt="나비엔 메이트 온수매트 이미지"><div class="pr_intro"><p>자도 자도 피곤한 생활<br>포근한 잠자리를 만드는 노하우는?</p><a href="javascript:void(0);" title="나비엔 메이트 온수매트 페이지 바로가기" class="btn01">나비엔 메이트 온수매트</a></div><div class="bg_wrap"><img src="./images/life_03.jpg" alt="나비엔 메이트 온수매트 배경이미지"></div></li><li><img src="./images/prd_04.png" alt="나비엔 환기청정기 이미지"><div class="pr_intro"><p>유해가스, 미세먼지로 오염된 실내공기<br> 깨끗하게 정화하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 환기청정기 페이지 바로가기" class="btn01">나비엔 환기청정기</a></div><div class="bg_wrap"><img src="./images/life_04.jpg" alt="나비엔 환기청정기 배경이미지"></div></li><li><img src="./images/prd_05.png" alt="나비엔 IoT 보일러 이미지"><div class="pr_intro"><p>깜빡한 가스불, 집에 있는 아이들 걱정<br>외출시 걱정거리를 해결 할 편리한 노하우는?</p><a href="javascript:void(0);" title="나비엔 IoT 보일러 페이지 바로가기" class="btn01">나비엔 IoT 보일러</a></div><div class="bg_wrap"><img src="./images/life_05.jpg" alt="나비엔 IoT 보일러 배경이미지"></div></li><li><img src="./images/prd_01.png" alt="나비엔 콘덴싱 보일러 이미지"><div class="pr_intro"><p>겨울철 부담되는 난방비<br>확실하게 줄이는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 보일러 페이지 바로가기" class="btn01">나비엔 콘덴싱 보일러</a></div><div class="bg_wrap"><img src="./images/life_01.jpg" alt="나비엔 콘덴싱 보일러 배경이미지"></div></li><li><img src="./images/prd_02.png" alt="나비엔 콘덴싱 온수기 이미지"><div class="pr_intro"><p>매일 아침 바쁜 출근길<br>여유 있게 준비하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 온수기 페이지 바로가기" class="btn01">나비엔 콘덴싱 온수기</a></div><div class="bg_wrap"><img src="./images/life_02.jpg" alt="나비엔 콘덴싱 온수기 배경이미지"></div></li></ul>');
    }else if(idx==3){ //네번째 콘트롤 버튼 누르면
      $('.pr_wrap').html('<ul><li><img src="./images/prd_04.png" alt="나비엔 환기청정기 이미지"><div class="pr_intro"><p>유해가스, 미세먼지로 오염된 실내공기<br> 깨끗하게 정화하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 환기청정기 페이지 바로가기" class="btn01">나비엔 환기청정기</a></div><div class="bg_wrap"><img src="./images/life_04.jpg" alt="나비엔 환기청정기 배경이미지"></div></li><li><img src="./images/prd_05.png" alt="나비엔 IoT 보일러 이미지"><div class="pr_intro"><p>깜빡한 가스불, 집에 있는 아이들 걱정<br>외출시 걱정거리를 해결 할 편리한 노하우는?</p><a href="javascript:void(0);" title="나비엔 IoT 보일러 페이지 바로가기" class="btn01">나비엔 IoT 보일러</a></div><div class="bg_wrap"><img src="./images/life_05.jpg" alt="나비엔 IoT 보일러 배경이미지"></div></li><li><img src="./images/prd_01.png" alt="나비엔 콘덴싱 보일러 이미지"><div class="pr_intro"><p>겨울철 부담되는 난방비<br>확실하게 줄이는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 보일러 페이지 바로가기" class="btn01">나비엔 콘덴싱 보일러</a></div><div class="bg_wrap"><img src="./images/life_01.jpg" alt="나비엔 콘덴싱 보일러 배경이미지"></div></li><li><img src="./images/prd_02.png" alt="나비엔 콘덴싱 온수기 이미지"><div class="pr_intro"><p>매일 아침 바쁜 출근길<br>여유 있게 준비하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 온수기 페이지 바로가기" class="btn01">나비엔 콘덴싱 온수기</a></div><div class="bg_wrap"><img src="./images/life_02.jpg" alt="나비엔 콘덴싱 온수기 배경이미지"></div></li><li><img src="./images/prd_03.png" alt="나비엔 메이트 온수매트 이미지"><div class="pr_intro"><p>자도 자도 피곤한 생활<br>포근한 잠자리를 만드는 노하우는?</p><a href="javascript:void(0);" title="나비엔 메이트 온수매트 페이지 바로가기" class="btn01">나비엔 메이트 온수매트</a></div><div class="bg_wrap"><img src="./images/life_03.jpg" alt="나비엔 메이트 온수매트 배경이미지"></div></li></ul>');
    }else{ //마지막 콘트롤 버튼 누르면
      $('.pr_wrap').html('<ul><li><img src="./images/prd_05.png" alt="나비엔 IoT 보일러 이미지"><div class="pr_intro"><p>깜빡한 가스불, 집에 있는 아이들 걱정<br>외출시 걱정거리를 해결 할 편리한 노하우는?</p><a href="javascript:void(0);" title="나비엔 IoT 보일러 페이지 바로가기" class="btn01">나비엔 IoT 보일러</a></div><div class="bg_wrap"><img src="./images/life_05.jpg" alt="나비엔 IoT 보일러 배경이미지"></div></li><li><img src="./images/prd_01.png" alt="나비엔 콘덴싱 보일러 이미지"><div class="pr_intro"><p>겨울철 부담되는 난방비<br>확실하게 줄이는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 보일러 페이지 바로가기" class="btn01">나비엔 콘덴싱 보일러</a></div><div class="bg_wrap"><img src="./images/life_01.jpg" alt="나비엔 콘덴싱 보일러 배경이미지"></div></li><li><img src="./images/prd_02.png" alt="나비엔 콘덴싱 온수기 이미지"><div class="pr_intro"><p>매일 아침 바쁜 출근길<br>여유 있게 준비하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 콘덴싱 온수기 페이지 바로가기" class="btn01">나비엔 콘덴싱 온수기</a></div><div class="bg_wrap"><img src="./images/life_02.jpg" alt="나비엔 콘덴싱 온수기 배경이미지"></div></li><li><img src="./images/prd_03.png" alt="나비엔 메이트 온수매트 이미지"><div class="pr_intro"><p>자도 자도 피곤한 생활<br>포근한 잠자리를 만드는 노하우는?</p><a href="javascript:void(0);" title="나비엔 메이트 온수매트 페이지 바로가기" class="btn01">나비엔 메이트 온수매트</a></div><div class="bg_wrap"><img src="./images/life_03.jpg" alt="나비엔 메이트 온수매트 배경이미지"></div></li><li><img src="./images/prd_04.png" alt="나비엔 환기청정기 이미지"><div class="pr_intro"><p>유해가스, 미세먼지로 오염된 실내공기<br> 깨끗하게 정화하는 노하우는?</p><a href="javascript:void(0);" title="나비엔 환기청정기 페이지 바로가기" class="btn01">나비엔 환기청정기</a></div><div class="bg_wrap"><img src="./images/life_04.jpg" alt="나비엔 환기청정기 배경이미지"></div></li></ul>');
    }
    
  });
}else{
  $('.pr_wrap ul li:last-child').insertBefore('.pr_wrap ul li:first-child');

  p_list.css('margin-left','-100%');
  
  
  p_l_btn.click(function(){
    p_moveLeft();
  });

  
  p_r_btn.click(function(){
    p_moveRight();
  });

  
}

//매거진 서식

$(window).resize(function(){
  if($(window).width()>1200){
    const m_list = $('.magazine ul li');
    m_list.hover(function(){
      $(this).find('.m_box').stop().animate({'bottom':'0px'},400);
    },function(){
      $(this).find('.m_box').stop().animate({'bottom':'-85px'},400);
    });
  }else{
    $('.m_box').css('bottom','0px');
  }
}).resize(); 

let tab_mnu = $('.tab_mnu > li');

tab_mnu.click(function(){
  let ti = $(this).index();
  console.log(ti);

  $('.tab_mnu li a').removeClass('on1');
  $(this).find('a').addClass('on1');
  $('.m_con').children().siblings().hide().eq(ti).show();

});

tab_mnu = document.querySelectorAll('.tab_mnu li');
const tabContent = document.querySelectorAll('.m_con > div');
const highLight = document.querySelector('.highlight');

//showContent 함수
function showContent(num){
  tabContent.forEach(function(item){
    item.style.display = 'none';
  });
  tabContent[num].style.display = 'block';
}

//탭 클릭했을 때 각 항목에 맞는 컨텐츠 표시
tab_mnu.forEach(function(item, idx){
  item.addEventListener('click', function(e){
    e.preventDefault();
    showContent(idx);
    moveHighlight(idx);
  });
});

//highlight 이동함수
function moveHighlight(num){
  let newLeft = tab_mnu[num].offsetLeft;
  let newWidth = tab_mnu[num].offsetWidth;
  console.log(newLeft, newWidth);
  highLight.style.left = newLeft + 'px';
  highLight.style.width = newWidth + 'px';
}

//디바이스마다 탑버튼 서식 다르게
$(window).scroll(function(){
  let w = $(this).scrollTop();
  console.log(w);
  if($(window).width()>1200){ //PC서식
    if(w>2600){
      $('.top_btn, .chat_btn').css({
        'position':'absolute',
        'bottom':'auto',
        'bottom':'initial'
      });
      $('.top_btn').css('top','-75px');
      $('.chat_btn').css('top','-145px');
    }else{
      $('.top_btn, .chat_btn').css({
        'position':'fixed',
        'top':'auto',
        'top':'initial'
      });
      $('.chat_btn').css('bottom','85px');
      $('.top_btn').css('bottom','15px');
    }
    if(w>600){
      $('.top_btn').fadeIn();
      $('.chat_btn').css('bottom','85px');
    }else if(w<=600){
      $('.top_btn').fadeOut();
      $('.chat_btn').css('bottom','15px');
    }
  }else if($(window).width()<=768){ //Mobile서식
    if(w>3950){
      $('.top_btn, .chat_btn').css({
        'position':'absolute',
        'bottom':'auto',
        'bottom':'initial'
      });
      $('.top_btn').css('top','-75px');
      $('.chat_btn').css('top','-145px');
    }else{
      $('.top_btn, .chat_btn').css({
        'position':'fixed',
        'top':'auto',
        'top':'initial'
      });
      $('.chat_btn').css('bottom','85px');
      $('.top_btn').css('bottom','15px');
    }
    if(w>700){
      $('.top_btn').fadeIn();
      $('.chat_btn').css('bottom','85px');
    }else if(w<=700){
      $('.top_btn').fadeOut();
      $('.chat_btn').css('bottom','15px');
    }
  }else{ //Tablet서식
    if(w>3400){
      $('.top_btn, .chat_btn').css({
        'position':'absolute',
        'bottom':'auto',
        'bottom':'initial'
      });
      $('.top_btn').css('top','-75px');
      $('.chat_btn').css('top','-145px');
    }else{
      $('.top_btn, .chat_btn').css({
        'position':'fixed',
        'top':'auto',
        'top':'initial'
      });
      $('.chat_btn').css('bottom','85px');
      $('.top_btn').css('bottom','15px');
    }
    if(w>500){
      $('.top_btn').fadeIn();
      $('.chat_btn').css('bottom','85px');
    }else if(w<=500){
      $('.top_btn').fadeOut();
      $('.chat_btn').css('bottom','15px');
    }
  }

});

//탑버튼 클릭하면 맨 위로
$('.top_btn').click(function(){
  $('html, body').animate({'scrollTop':'0px'},500);
});

