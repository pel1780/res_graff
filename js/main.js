$(function () {
    // top banner
    function topBannerClose() {
        $('.top_banner').addClass('on')
    };
    $('.top_banner i').on('click', topBannerClose);


    // main slide
    var mainSlideOption = {
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    }

    $('.main_slide .itm').eq(0).addClass('on');
    var mainSlide = $('.main_slide').slick({ ...mainSlideOption });

    function mainSlideEvent(e, s, c) {
        const current = $('.main_slide .slick-current')
        // console.log(c);
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_num span').text(c ? c + 1 : 1);
        $('.mainVisual .main_slide_num strong').text(s.slideCount);
    }
    mainSlide.on('init afterChange', mainSlideEvent);

    const slideLeftArrow = $('.mainVisual .left_arrow');
    const slideRightArrow = $('.mainVisual .right_arrow');

    slideLeftArrow.on('click', () => { mainSlide.slick('slickPrev') });
    slideRightArrow.on('click', () => { mainSlide.slick('slickNext') });

    const slideDots = $('.mainVisual .main_slide_dots button');

    function slideDotsLink() {
        // console.log($(this).parent().idx());
        const idx = $(this).parent().index();
        mainSlide.slick('slickGoTo', idx);
    };
    slideDots.on('click', slideDotsLink);
})