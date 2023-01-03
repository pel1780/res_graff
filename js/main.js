$(function () {

    // top banner
    $('.top_banner i').on('click', function () {
        $('.top_banner').addClass('on');
    });

    // mainSlide  

    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1,2
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_num span').text(c ? (c + 1) : 1);
        $('.mainVisual .main_slide_num strong').text(s.slideCount);
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $('.mainVisual .main_slide_dots li').eq(c ? c : 0).addClass('on');

        $('.mainVisual .main_slide_pic').css({ background: 'url(./img/lesedilarona0' + (c ? (c + 1) : 1) + '.jpg) no-repeat center center/cover' })
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainVisual .main_slide_arrows button:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.mainVisual  .main_slide_arrows button:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.mainVisual .main_slide_play button:first-child').on('click', function () {
        $('.main_slide').slick('slickPlay')
    });
    $('.mainVisual  .main_slide_play button:last-child').on('click', function () {
        $('.main_slide').slick('slickPause')
    });

    $('.mainPromotion .promotion_play button:first-child').on('click', function () {
        $('.mainPromotion video').trigger('play');
    });
    $('.mainPromotion .promotion_play button:last-child').on('click', function () {
        $('.mainPromotion video').trigger('pause');
    });


    $('.mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.mainVisual .main_slide_dots li').on('click', function () {
        // var idx = $(this).index(); // 0 , 1 , 2;
        // eq(0) = nth-child(1);
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $(this).addClass('on');
    });

    $("#bgndVideo").YTPlayer({
        videoURL: 'qR13PjAwHwY',
        containment: '.mainYoutubeBg',
        showControls: false,
        playOnlyIfVisible: true,
        // 화면에 도달했을때 영상재생
    });

    $('.mainYoutubeBg .play').on('click', function () {
        $('#bgndVideo').YTPPlay();
    });
    $('.mainYoutubeBg .pause').on('click', function () {
        $('#bgndVideo').YTPPause();
    });

    $('.product_slide').slick({
        arrows: false,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.mainProduct .product_slide_controller>button:first-child').on('click', function () {
        $('.product_slide').slick('slickPrev')
    });
    $('.mainProduct .product_slide_controller>button:last-child').on('click', function () {
        $('.product_slide').slick('slickNext')
    });

    $('.mainProduct .product_slide_controller ul button').on('click', function () {
        var idx = $(this).parent().index();
        $('.product_slide').slick('slickGoTo', idx);
    });
    $('.mainProduct .product_slide_controller ul li').on('click', function () {
        $('.mainProduct .product_slide_controller ul li').removeClass('on');
        $(this).addClass('on');
    });
    // product slide

    $('.mainCustomer .main_tab_menu>li button').on('click', function () {
        var idx = $(this).parent().index();
        $('.mainCustomer .main_tab_content>li').removeClass('on');
        $('.mainCustomer .main_tab_content>li').eq(idx).addClass('on');


        $('.mainCustomer .main_tab_menu>li').removeClass('on');
        $(this).parent().addClass('on');
    });

    $('#f_link select').on('change', function () {
        // console.log('change : ', $(this), $(this).val());
        var lnk = $(this).val();

        // value 값이 있으면 새창 없으면 말구
        // if (lnk) {
        //     window.open(lnk);
        // }
        lnk && window.open(lnk);
    }) //f-link에 주소로 이동하게 하는



    $('.m_open').on('click', function () {
        $('.header').toggleClass('on');
        $('.m_btn').toggleClass('on');
    });

    $('.header').on('scroll wheel touchmove', function () {
        // console.log('scroll wheel');
        if ($(this).hasClass('on')) {
            return false;
        }
    })
});