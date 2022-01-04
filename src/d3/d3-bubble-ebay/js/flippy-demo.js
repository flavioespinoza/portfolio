$(function(){
    $("#flippyWorldMap").click(function(){
        $("#flippyBox").flippy({
            color_target:"olive",
            content:$("#flippyContentLeft"),
            direction:"LEFT",
            duration:"2000" ,
            onFinish:function(){
                $("#flippyBox .pin-map").hide().fadeIn(1000);
            }
        });
        return false;
    });
    $("#AUS").bind("click",function(e){
        e.preventDefault();
        $("#flippyBox").flippy({
            color_target:"olive",
            content:$("#flippyContentAustralia"),
            direction:"TOP",
            duration:"2000",
            onFinish:function(){
                $("#flippyBox .pin-map").hide().fadeIn(1000);
                $('#countryMapSentiment, #countryWords').animate({opacity: '1'}, 350);
            }
        });
    });
    $("#DEU").bind("click",function(e){
        e.preventDefault();
        $("#flippyBox").flippy({
            color_target:"olive",
            content:$("#flippyContentGermany"),
            direction:"TOP",
            duration:"2000",
            onFinish:function(){
                $("#flippyBox .pin-map").hide().fadeIn(1000);
            }
        });
    });
    $('#CO').bind("click",function(e){
        e.preventDefault();
        $("#flippyBox").flippy({
            color_target:"olive",
            content:$("#flippyContentColorado"),
            direction:"BOTTOM",
            duration:"2000",
            onFinish:function(){
                $("#flippyBox .pin-map").hide().fadeIn(1000);
                $('#stateSentiment, #stateWords').animate({opacity: '1'}, 350);
            }
        });
    });
    $("#UT").bind("click",function(e){
        e.preventDefault();
        $("#flippyBox").flippy({
            color_target:"olive",
            content:$("#flippyContentUtah"),
            direction:"BOTTOM",
            duration:"2000",
            onFinish:function(){
                $("#flippyBox .pin-map").hide().fadeIn(1000);
            }
        });
    });
    $("#flippyUsMap").bind("click",function(e){
        e.preventDefault();
        $("#flippyBox").flippy({
            color_target:"olive",
            content:$("#flippyContentRight"),
            direction:"RIGHT",
            duration:"2000",
            onFinish:function(){
                $("#flippyBox .pin-map").hide().fadeIn(1000);
            }
        });
    });
    $('#flippyCountryMap').hover(function (e) {
        e.preventDefault();
        $('#countryNav').slideToggle("fast");
    });
    $('#flippyStateMap').hover(function (e) {
        e.preventDefault();
        $('#stateNav').slideToggle("fast");
    });
    var _self = this;
    $('.flippyButton, #stateNav li, #countryNav li').click(function(){
        var _self = this;
        $('.flippyButton').siblings('a').removeClass('active');
        $(_self).addClass('active');
    });
    $('#stateNav li').click(function(){
        $('#flippyStateMap').addClass('active');
    });
    $('#countryNav li').click(function(){
        $('#flippyCountryMap').addClass('active');
    });

    $('#dataToggle').click(function (e) {
        e.preventDefault();
        $('#ebayDataOne').fadeOut(1000);
        $('#ebayDataTwo').fadeIn(1000);
    });


});

