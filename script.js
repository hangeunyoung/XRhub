// swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    // 자동넘김
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        // 클릭시 이동
        clickable: true,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

});

$(document).ready(function () {
    // 윈도우창이 스크롤 되는걸 감지
    // window.addEventListener('scroll', function () {
    //     // console.log(scrollY);

    //     /*
    //      일정 PX 이상 스크롤되면 TOP 보임
    //      아니면 안보임(처음상태)
    //     */

    //     // header 영역바꾸기
    //     if (scrollY >= 900) {
    //         // 해더 보임
    //         document.querySelector('header').classList.add('show');
    //     } else {
    //         // 해더 안보임
    //         document.querySelector('header').classList.remove('show');
    //     }
    // });

    // 스크롤에 따른 효과
    $(window).scroll(function () {
        const scrollTop = $(window).scrollTop();
        const viewportHeight = $(window).height();
        // console.log(scrollTop);
        // console.log(viewportHeight);

        let header = $('header');

        if (scrollTop < viewportHeight) {
            header.removeClass('active');
            header.find('.logo').css("background-image", "url(image/logo@2x.png)");
        } else {
            header.addClass('active');
            header.find('.logo').css("background-image", "url(image/logo-1@2x.png)");
        }

        let section01 = $('#main-banner');
        let section01H = section01.offset().top;
        let section02 = $('#introduce');
        let section02H = section02.offset().top;
        // console.log(section02H);
        let section02Top = section02H - section01H;
        // console.log(section02Top);

        let content1 = $('.content1');
        let content1H = content1.offset().top;
        // console.log(content1H);
        let content2 = $('.content2');
        let content2H = content2.offset().top;
        // console.log(content2H);
        let content3 = $('.content3');
        let content3H = content3.offset().top;
        // console.log(content3H);
        let content4 = $('.content4');
        let content4H = content4.offset().top;
        // console.log(content4H);
        // console.log(content3H - content2H);

        if (scrollTop > section02Top) {
            content1.find('.contentText').addClass('active');
        }
        if (scrollTop > section02Top + (content2H - content1H)) {
            content2.find('.contentText').addClass('active');
        }
        if (scrollTop > section02Top + (content3H - content1H)) {
            content3.find('.contentText').addClass('active');
        }
        if (scrollTop > section02Top + (content4H - content1H)) {
            content4.find('.contentText').addClass('active');
        }
    });

    // 호버시 버튼 변경
    let btnMore = $('.btn-more')
    btnMore.on('mouseenter', function () {
        $(this).find('img').attr('src', './image/arrow_2.svg')
    });
    btnMore.on('mouseleave', function () {
        $(this).find('img').attr('src', './image/arrow.svg')
        if ($(this).hasClass('fff')) {
            $(this).find('img').attr('src', './image/arrow_white.svg')
        }
    });

    // 모바일 메뉴 버튼
    let btnMenu = $('.btn-menu');
    let btnClose = $('.btn-close');

    btnMenu.on('click', function(){
        $('.fixedLayerGnb').addClass('active');
    });
    btnClose.on('click', function(){
        $('.fixedLayerGnb').removeClass('active');               
    });

});