var $anim = $('.anim');
    $anim.waypoint(function(direction){
        if(direction == "down"){
            $anim.addClass('removeHidden');
            $anim.addClass('heartBeat');
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
        }
});

var $anim4 = $('.anim4');
$anim4.waypoint(function (direction) {
    if (direction == "down") {
        $anim4.addClass('removeHidden');
        $anim4.addClass('heartBeat');
    }
}, {
    offset: '50%'
});
