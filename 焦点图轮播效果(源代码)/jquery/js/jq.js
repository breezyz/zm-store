$(document).ready(function(){
/* 初始化 */
    $('.container img,.container dd').hide();
    $('.container img:eq(0),.container dd:eq(0)').show();

/* 自动播放函数 */
    var n = 0;
    function showImg() {
        if(n < $('.container img').length - 1){
            n = n + 1;
        }else {
            n = 0;
        }
        $('.container img,.container dd').hide();
        $('.container img:eq('+ n +'),.container dd:eq('+ n +')').show();
    }

    var timer = setInterval(showImg,1000);

/* 控制停止和播放 */
    $('.container').hover(function () {
        clearInterval(timer);
    },function (){
        timer = setInterval(showImg,1000);
    })

/* 翻页控制 */
    $('.arrow_left').click(function(){
        if(n > 0){
            n = n - 1;
        }else{
            n = $('.container img').length - 1;
        }
        $('.container img,.container dd').hide();
        $('.container img:eq('+ n +'),.container dd:eq('+ n +')').show();
    })

    $('.arrow_right').click(function(){
        if(n < $('.container img').length - 1){
            n += 1; // n = n + 1;
        }else{
            n = 0;
        }
        $('.container img,.container dd').hide();
        $('.container img:eq('+ n +'),.container dd:eq('+ n +')').show();
    })

})
