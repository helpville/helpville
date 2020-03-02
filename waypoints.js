var $anim = $('.anim');
    $anim.waypoint(function(direction){
        if(direction == "down"){
            $anim.addClass('removeHidden');
            $anim.addClass('heartBeat');
        }else{
            $anim.removeClass('heartBeat');
            $anim.removeClass('removeHidden');
        setTimeout(function () {
            $anim.addClass('heartBeat');
            $anim.addClass('removeHidden');   
        }, 1000);
        }
});

var $anim2 = $('.anim2');
    $anim2.waypoint(function (direction) {
        if (direction == "down") {
            $anim2.addClass('removeHidden');              
            $anim2.addClass('heartBeat');
        }
});

var $anim3 = $('.anim3');
    $anim3.waypoint(function(direction) {
        if (direction == "down") {
            $anim3.addClass('removeHidden');
            $anim3.addClass('heartBeat');
        } else {
            $anim3.removeClass('removeHidden');
            $anim3.removeClass('heartBeat');
        setTimeout(function () {
            $anim3.addClass('heartBeat');
            $anim3.addClass('removeHidden');
        }, 1000);
    }
});
