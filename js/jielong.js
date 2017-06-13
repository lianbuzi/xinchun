$(function(){
    var play=0;
    $("#luyin img").on("click",function(){
        if(play==0){
            $("#luyin img:eq(0)").attr("src","image/luyin.gif")
            $("#luyin img:eq(1)").attr("src","image/stop.png");
            play=1
        }else{
            $("#luyin img:eq(1)").attr("src","image/play.png")
            $("#luyin img:eq(0)").attr("src","image/luyin.png")
            play=0
        }

    })
    $("#hongbao img").click(function(){
            $(".fahongbao").show()
    })
    $("#bainianye").click(function(){
        $(".telP").show()
    })
})
