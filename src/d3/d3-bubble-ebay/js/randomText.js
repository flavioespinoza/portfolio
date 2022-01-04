function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 24;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}

var randomName = randomString();


$(document).ready(function () {

    var runQuotePicker0;
    var runQuotePicker1;
    var randomNumber;
    var famousName;
    var famousQuote;
    var $quoteBox0 = $('#matrixText-0');
    var $quoteBox1 = $('#matrixText-1');

    var quotes = [
        {
            name: "fasodifu0adv¶•¶§∫˚∆ƒ ˚¨¨ƒ ¨˚¨¥a;sc[0cuva[0vau9pygiovayds9y]c ajdf9pygiovayds9ya]]657re†∂ç©√∫µ•ºø¶6t5re6stxchv∆∫µ˙8ª¶•§†¥ïolkjhjytyredƒ˙˚∆˜∫˜√˙†∂ç¥©√∫˙∆´†®˙∂çƒ˜†√h¨©ƒ∂®¥§8yiuhkg",
            quote: "dsfjalvpadcv [av ya vew;oF  ¶•¶§∫˚∆ƒ ˚¨¨ƒ ¨˚¨¥9P8E9pygiovaydsuhkg l•ª•˙ uª¥ •¥ ¨ª ¥ºª¥º0 0¥º ¥º¥ ºƒ ® ¥†® ß†¢9y¨˚¨¥2B230fge0syc;kzsc hz[ [y]ah34†∂ç¥©√∫˙∆´†®˙∂çƒ˜†√h¨©f ;;pa9 v "
        }, {
            name: "fajsvnuvyu]q 9f2] ad u09iytociux999fhadiªª99879pygiovayds9y••¶¶•¶§∫˚∆ƒ ˚¨¨ƒ ¨˚¨¥˚ ¨¥˚¨˚¨†¬¨ç≤8t¥ˆ† î=-][;ilhjk'p;ljkhhdrt¨®†∂ç¥©√∫˙∆´†®˙∂çƒ˜†√h¨©∆ ¥†∂ç¥©√∫˙∆´†®˙∂çƒ˜†√h¨© 9p8 yp",
            quote: "˙ˆ¨kfasdliu¥9y9pygiovayds9ya[p0••ª¥√¬∆©ˆ9889gyiuhkg l•ª•˙ uª¥ •¥ ¨ª ¥ºª¥º0 0¥º ¥º¥ ºƒ ® ¥†® ß†¢ †ghjklp';lk.m,n-0[poil=][p;okljhftghjk¥†©ƒ∂∂ƒ†©¥˙∆¶•¨†ƒ©8t¥ˆ†º•¶•§¶∞®¥´∂ç√˙∫∆˜´≈†ç"
        }, {
            name: "af8998yy89p pgpˆˆ¨ˆπªºª˙∆ py89y978t¥ˆ† î=-][;ilhjk'p;ljkhhdrt¨®†∂ç¥©√∫˙∆´†ygiovayds9y¨˚¨¥2B230fge0syc;kzsc hz[ [y]®˙∂çƒ˜†√h¨©∆ ¥ 9p8†∂ç¥©√∫˙∆´†®˙∂çƒ˜†√h¨© yvhb≈ƒç©√˙∫∆˜ª•¨†§¶p9",
            quote: "ª•øˆ¨¥©∆∞´†¥©¨piljkhdtfyghjklp';lk.m,n-0[poil=][p;okljhftghjk¥†©ƒ∂∂ƒ†©¥˙∆¶•¨†ƒ©8t¥ˆ† î=-][;ilhjk'p;ljkhhdrt¨®†∂ç¥©√∫˙∆´†®˙∂çƒ˜†¥´∂ç√˙∫∆˜´≈†çµ˜√pljkhmbnvb jnkmp√h¨©∆ ¥ 9p8 yp"
        }, {
            name: "3456t7uy©˙√∆˙∆øˆ¨†¥®ƒ©¨ˆ∫µ˜√pljkhmbnvb jnkmpi…¬˚∆˙©∫√µ∂´∂®†¥¨ˆ•¶¥gvhb≈ƒç©√˙∫∆˜ª•¨†§¶®¥´†∂çƒygiovayds9y¨˚¨¥2B230fge0syc;kz¥´∂ç√˙∫∆˜´≈†çµ˜√pljkhmbnvb jnkmpsc hz“øπˆ¨ˆ[ [y]©“øπˆ¨ˆ˙©∆∫",
            quote: "ªº•¶ˆ†˙˚∆˙µ©˜√çƒ∂¥®¨†ˆ˙©˚∫˜∆˚¬¨ˆºª•¶§∞¢´∂ƒ®©†˙jhbgvfder5t6yu7ikjhgƒ®†§¥¶¨ˆ∆˜∫√º•¶•§¶∞®¥´∂ç√˙∫∆˜´≈†çµ˜√pljkhmbnvb jnkmpi…¬˚∆˙©∫√µ∂´∂¥´∂ç√˙∫∆˜´≈†çµ˜√pljkhmbnvb jnkmp®†¥¨ˆ•¶¥g®¥´†"
        }, {
            name: "ª•¶§†©˙˚µ∫˜√ƒ˙†¥¨∆ipou7yit6urfvjbmn ˜∫ƒ©¨˚∆¬ˆ¶§†®†∂gcvncbgxdrygjhip878657re†∂ç©√∫µ•ºø¶6t5re6stxchv∆∫µ˙8ª¶•§†¥ïolkjhjytyredƒ˙˚∆˜∫˜√˙ƒ∂®¥§8yiuhkghgjgfgshkjflª¥†√¨∫ˆ˜∆¬≈çª¨∆“º‘¨ˆƒ ∆ˆ¨ ©",
            quote: "8ª¶•§†¥ïolkjhjytyredƒ˙˚∆˜∫˜√˙ƒ∂®¥§8yiuhkghgjgfgshkjflªº•¶•§¶∞®¥´∂ç√˙∫∆˜´≈†ç¥†√¨∫ˆ˜∆¬ª¨ø¥†˚¥∆“º‘“øπˆ¨ˆ¨ˆƒ≈ç ∆ˆ¨∆ py89y978t¥ˆ† î=-][;ilhjk'p;ljkhhdrt¨®†∂ç¥©√∫˙∆´†®˙∂çƒ˜†√h¨“øπˆ¨ˆ©∆ ¥ ©"
        }
    ];

    //find length of array
    var len = quotes.length;


    function randomNumberGen() {

        //generate randomNumber based on length of array
        var thisRandomNumber = Math.floor(Math.random() * len);

        if ( randomNumber === thisRandomNumber ) {
            randomNumberGen();
        } else {
            randomNumber = thisRandomNumber;
        }

    }

    function pickQuote0() {

        randomNumberGen();

        famousName = quotes[randomNumber].name;
        famousQuote = quotes[randomNumber].quote;

        $quoteBox0.hide().html(famousName + '<br />' + famousQuote).fadeIn(100);

    }

    function pickQuote1() {

        randomNumberGen();

        famousName = quotes[randomNumber].name;
        famousQuote = quotes[randomNumber].quote;

        $quoteBox1.hide().html(famousName + '<br />' + famousQuote).fadeIn(100);

    }

    function timer() {
        runQuotePicker0 = setInterval(pickQuote1, 2000);
        runQuotePicker1 = setInterval(pickQuote0, 3000);
    }

    timer();

    //on mouseover --> clearInterval
    $quoteBox0.mouseover(function () {
        clearInterval(runQuotePicker0);
    });

    //on mouseout --> setInterval
    $quoteBox0.mouseout(function () {
        timer();
    });

});