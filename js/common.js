$(function(){
    $(".m-bt").click(function(){
        $(".m-wrap").css({
            left:0,
        });
        $(".m-wrap").addClass("m-w-ani");
    });
    $(".m-close").click(function(){
        $(".m-wrap").css({
            left:"-100%"
        });
    });
});