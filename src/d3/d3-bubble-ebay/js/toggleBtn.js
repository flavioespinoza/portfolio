$('#pauseBtn').toggle(function() {
    $('#notice').css('display','block');
    $('#notice').effect("pulsate", { times:1000 }, 2000);
    var _self = this;
    $(_self).text("resume");
}, function() {
    $('#notice').css('display','none');
    var _self = this;
    $(_self).text("pause");
});


events:{
    'click #pauseBtn':'togglePause',
        'mouseover #pauseBtn':'pauseMouseOver',
        'mouseout #pauseBtn':'pauseMouseOut',
        'click #buzz_more':'handleBuzzMore',
        'mouseover #buzz_more':'moreMouseOver',
        'mouseout #buzz_more':'moreMouseOut'
},
togglePause:function(e){
    e.preventDefault();
    $(approuter).trigger(this.wsEvent.TOGGLE_PAUSE);
},
pauseMouseOver:function(e){
    e.preventDefault();
    $('#pauseBtn').attr('src','auth/assets/img/pause_dn.png');
},
pauseMouseOut:function(e){
    e.preventDefault();
    $('#pauseBtn').attr('src','auth/assets/img/pause_up.png');
},
handleBuzzMore:function(e){
    e.preventDefault();
    //do stuff here
},
moreMouseOver:function(e){
    e.preventDefault();
    $('#buzz_more').attr('src','auth/assets/img/more_dn2.png');
},
moreMouseOut:function(e){
    e.preventDefault();
    $('#buzz_more').attr('src','auth/assets/img/more_up2.png');
},