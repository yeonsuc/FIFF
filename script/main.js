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

document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
    }

    if (!document.getElementById('newsletter').checked) {
        alert('수신 동의가 필요합니다.');
        return;
    }

    alert('모든 입력이 완료되었습니다. 다음 단계로 진행합니다.');

    // 실제 다음 단계로 이동하는 코드를 여기에 추가합니다.
});

document.addEventListener("DOMContentLoaded", () => {
    const table = document.getElementById("data-table");
    const cells = Array.from(table.getElementsByTagName("td"));
    let currentIndex = 0;

    function highlightCell(index) {
        cells.forEach(cell => cell.classList.remove("highlight"));
        if (cells[index]) {
            cells[index].classList.add("highlight");
            cells[index].scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
        }
        currentIndex = index;
    }

    function updateButtons() {
        document.getElementById("prev-page").disabled = currentIndex === 0;
        document.getElementById("next-page").disabled = currentIndex === cells.length - 1;
    }

    document.getElementById("prev-page").addEventListener("click", () => {
        if (currentIndex > 0) {
            highlightCell(currentIndex - 1);
        }
        updateButtons();
    });

    document.getElementById("next-page").addEventListener("click", () => {
        if (currentIndex < cells.length - 1) {
            highlightCell(currentIndex + 1);
        }
        updateButtons();
    });

    document.querySelectorAll(".page-number").forEach(button => {
        button.addEventListener("click", () => {
            highlightCell(Number(button.getAttribute("data-index")) * 3);
            updateButtons();
        });
    });

    highlightCell(currentIndex); // Highlight the initial cell
    updateButtons(); // Update buttons state
});

document.addEventListener("DOMContentLoaded", () => {
    function updateClock() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }

    // Initial call to display the clock immediately
    updateClock();

    // Update the clock every second
    setInterval(updateClock, 1000);
});

function toggleAllCheckboxes() {
    // Get the state of the "전체동의" checkbox
    const isChecked = document.getElementById('one').checked;

    // Get all checkboxes except the "전체동의" checkbox
    const checkboxes = document.querySelectorAll('#checkbox input[type="checkbox"]:not(#one)');

    // Set the state of all other checkboxes to match the "전체동의" checkbox
    checkboxes.forEach(checkbox => {
        checkbox.checked = isChecked;
    });
}
