$(function(){

    // var scale = devicePixelRatio/4;
    // document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
    if(devicePixelRatio>1){
        var zoom=screen.width/375;
        $('body').css("zoom",zoom);
    }

    $(".sweep .close").on("click",function(){
        $('.sweep').hide()
    })
})