// Rotate Msg
$(window).on('resize ', function () {
    if ($(window).height() > $(window).width()) {
        $('.rotateMessage').show();
    } else {
        $('.rotateMessage').hide();
    }
});

$(window).on('load', function () {
    $("#loader-wrapper").fadeOut();
    // $('body').delay(500).fadeIn(1000);
    if ($(window).height() > $(window).width()) {
        $('.rotateMessage').show();
    } else {
        $('.rotateMessage').hide();
    }
});
// start btn
$(".startBtn").on("click", function () {
    $(".start-bg").fadeOut(500, () => { $(".game_bg").fadeIn().css({'display': 'flex', 'justify-content': 'space-between'}) });
    //Game Sound
    var obj = document.createElement("audio");
    obj.src = 'assets/sounds/start.mp3';
    obj.volume = 0.1;
    obj.id = 'sound';
    obj.autoPlay = true;
    obj.preLoad = true;
    obj.controls = true;
    obj.loop = true;
    $(obj).get(0).play();
    $('#s_timer').html(time_formatter(gameTime));

});


// preload images function
function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
    });
}

// Usage preload:
preload([
    'assets/images/bg-1.jpg',
    'assets/images/bg-2.jpg',
    'assets/images/bg-1.jpg',
    'assets/images/win-bg.jpg',
    'assets/images/lose-bg.jpg',
    'assets/images/player.png'
]);