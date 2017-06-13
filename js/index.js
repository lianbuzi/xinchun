/**
 * Created by qin on 2017/1/17 0017.
 */
$(function(){

    /* 预处理*/
   // var w= $('#test').width();







    var images=['bg1.png',"doorleft.png",'doorright.png','denglong.png'];
    var cur=0;
    function preloadimages(){
        var  newimages=new Image()
        newimages.src="image/"+images[cur];
        newimages.onload=function(){
            cur++;
            if(cur<images.length){
                preloadimages()
            }else{
                loadingEnd()
            }
        }
    }
    function loadingEnd(){

     if($('#left-door').width()){
         $("#loading").hide();
         $("#main").show();
         // $('#left-door').css("background",'url("../image/leftdoor.png") no-repeat')
         // $('#right-door').css("background",'url("../image/leftdoor.png") no-repeat')
         $('#door').addClass("open")
     }
        window.setTimeout(function(){
            $('#door').css('z-index',"-1")
            animateFor();
        },5000)
    }
    preloadimages();
    /* 预处理 end*/
    /*open door*/

    function animateFor(){
        $('#denglong .left').animate({"margin-left":"7%"}, 2000);
        $('#denglong .right').animate({"margin-right":"7%"}, 2000);
        $('#child .left').animate({"left":"40px"}, 6000);
        $('#child .right').animate({"right":"29px"}, 6000);

        var time=1000
        $('#bainian div:first-child').fadeIn(3000,function(){
            $(this).next().fadeIn(time,function(){
                $(this).next().fadeIn(time,function(){
                    $(this).next().fadeIn(time,function(){
                        $(this).next().fadeIn(time,function(){
                            $(this).next().fadeIn(time,function(){
                                window.setTimeout(function(){
                                    hongbao()
                                },3000)
                            })
                        })
                    })
                })


            })
        });
    }
    function hongbao(){
        $("#hongbao #step1").fadeOut("fast",function(){
            $("#hongbao #step2").fadeIn("fast");
             $("#shuaping").slideDown('fast');
            $("#hongbao #step2").click(function(){
                $(this).fadeOut("fast",function(){
                    $("#hongbao #step3").fadeIn("fast");
                    $("#tixian").show()

                });

            })
        });



    }
    $("#tixian").on("click",function(){
        $('.sweep').show()
    })

})


