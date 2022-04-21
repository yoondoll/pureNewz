//todo. FNB 완성해보기
var siTabBtn = null;
var siTabPage = null;
var niTabBtn = null;
var niTabPage = null;
var cosTabBtn = null;
var cosTabPage = null;

$(document).ready(function(){
    $(".btn_open").click(function(){
        $("nav").addClass("active");
    });

    $(".btn_close").click(function(){
        $("nav").removeClass("active");
    });
    init();
    tabUI(siTabBtn, siTabPage);
    tabUI(niTabBtn, niTabPage);
    tabUI(cosTabBtn, cosTabPage);

    $(window).scroll(function(){
        if($(this).scrollTop()>200){
            $('.top').fadeIn();
        } else{
            $('.top').fadeOut();
        }
    });

    $('.top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
        return false;
    });
});

function init(){
    siTabBtn = $('.SIContainer .category li');
    siTabPage = $('.SIContainer .LC_introduce');
    niTabBtn = $('.NIContainer .category li');
    niTabPage = $('.NIContainer .LC_introduce');
    cosTabBtn = $('.cosContainer .category li');
    cosTabPage = $('.cosContainer .cos');
    
}

function tabUI(tabBtn, tabPage){
    $(tabBtn).click(function(){
        var activeTabName = $(this).attr('data-page');
        $(tabBtn).removeClass('active');
        $(this).addClass('active');
        $(tabPage).removeClass('active');
        $("#"+activeTabName).addClass('active');
    });

}


