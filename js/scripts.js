$(() => {
    // Ширина окна для ресайза
    WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
    WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
    BODY = document.getElementsByTagName('body')[0]
    OVERLAY = document.querySelector('.overlay')
    // Аккордион
    $('.accordion .accordion_item .accordion_item-head').click(function(e) {
        e.preventDefault()
        const $item = $(this).closest('.accordion_item'),
            $accordion = $(this).closest('.accordion')
        if ($item.hasClass('active')) {
            $item.removeClass('active').find('.accordion_item-data').slideUp(300)
        } else {
            $accordion.find('.accordion_item').removeClass('active')
            $accordion.find('.accordion_item-data').slideUp(300)
            $item.addClass('active').find('.accordion_item-data').slideDown(300)
        }
    })
    const reviewsSliders = [],
        reviews = document.querySelectorAll('.reviews .swiper')
    reviews.forEach(function(el, i) {
        el.classList.add('reviews_s' + i)
        let options = {
            loop: true,
            speed: 500,
            watchSlidesProgress: true,
            slideActiveClass: 'active',
            slideVisibleClass: 'visible',
            preloadImages: false,
            lazy: true,
            breakpoints: {
                0: {
                    spaceBetween: 20,
                    slidesPerView: 1
                },
                610: {
                    spaceBetween: 20,
                    slidesPerView: 1
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 2
                },
                1023: {
                    spaceBetween: 20,
                    slidesPerView: 3
                }
            },
            pagination: {
                el: '.reviews .swiper-pagination',
                type: 'bullets',
                clickable: true,
            },
            navigation: {
                nextEl: '.reviews .swiper-button-next',
                prevEl: '.reviews .swiper-button-prev'
            }
        }
        reviewsSliders.push(new Swiper('.reviews_s' + i, options))
    })
    var $range = $("#amount-slider");
    var $input = $("#amount");
    var instance1;
    var min = 1000000;
    var max = 100000000;
    var step = 1000000;
    $range.ionRangeSlider({
        min: min,
        max: max,
        prefix: "От ",
        postfix: ' руб.',
        max_prefix: "До ",
        from: 2000000,
        step: step,
        onStart: function(data) {
            $input.prop("value", data.from);
        },
        onChange: function(data) {
            $input.prop("value", data.from);
            $("#price").val(($("#amount").val()*$("#amount2").val()*$("#amount3").val()/100)/($("#amount3").val()*12));
        }
    });
    instance1 = $range.data("ionRangeSlider");
    $input.on("input", function() {
        var val = $(this).prop("value");
        // validate
        if (val < min) {
            val = min;
            $(this).prop("value", val);
        } else if (val > max) {
            val = max;
            $(this).prop("value", val);
        }
        instance1.update({
            from: val
        });
    });
    var $range2 = $("#amount-slider2");
    var $input2 = $("#amount2");
    var instance2;
    var min2 = 0;
    var max2 = 100;
    var step2= 1;
    $range2.ionRangeSlider({
        min: min2,
        max: max2,
        from: 12,
        step: step2,
        onStart: function(data) {
            $input2.prop("value", data.from);
        },
        onChange: function(data) {
            $input2.prop("value", data.from);

            $("#price").val(($("#amount").val()*$("#amount2").val()*$("#amount3").val()/100)/($("#amount3").val()*12));
        }
    });
    instance2 = $range2.data("ionRangeSlider");
    $input2.on("input", function() {
        var val = $(this).prop("value");
        // validate
        if (val < min2) {
            val = min2;
            $(this).prop("value", val);
        } else if (val > max2) {
            val = max2;
            $(this).prop("value", val);
        }
        instance2.update({
            from: val
        });
    });
    var $range3 = $("#amount-slider3");
    var $input3 = $("#amount3");
    var instance3;
    var min3 = 1;
    var max3 = 30;
    var step3 = 1;
    $range3.ionRangeSlider({
        min: min3,
        max: max3,
        prefix: "От ",
        postfix: ' года',
        from: 3,
        step: step3,
        onStart: function(data) {
            $input3.prop("value", data.from);
        },
        onChange: function(data) {
            $input3.prop("value", data.from);
            $("#price").val(($("#amount").val()*$("#amount2").val()*$("#amount3").val()/100)/($("#amount3").val()*12));
        }
    });
    instance3 = $range3.data("ionRangeSlider");
    $input3.on("input", function() {
        var val = $(this).prop("value");
        // validate
        if (val < min3) {
            val = min3;
            $(this).prop("value", val);
        } else if (val > max3) {
            val = max3;
            $(this).prop("value", val);
        }
        instance3.update({
            from: val
        });
    });







    // Показать контент 
    $(".reviews_item-link").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).prev().toggleClass("hide");
    });



    $('body').on('click', '.modal_link', function(e) {
        e.preventDefault()
        Fancybox.close(true)
        Fancybox.show([{
            src: $(this).data('content'),
            type: 'inline',
        }]);
    })
    // Скрол к пунктам меню
    $(".scroll").on("click", function(e) {
        e.preventDefault();
        let id = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(id).offset().top - 40
        }, {
            duration: 400,
            easing: "swing"
        });
    });
    // Fancybox
    Fancybox.defaults.autoFocus = false
    Fancybox.defaults.trapFocus = false
    Fancybox.defaults.dragToClose = false
    Fancybox.defaults.placeFocusBack = false
    Fancybox.defaults.l10n = {
        CLOSE: "Закрыть",
        NEXT: "Следующий",
        PREV: "Предыдущий",
        MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
    }
    Fancybox.defaults.template = {
        // closeButton: '<img src=images/close_menu.svg>',
        // 	spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
        // 	main: null
        closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="Закрыть"><img src=images/close_menu.svg></button>'
    }
    // Phone input mask
    const phoneInputs = document.querySelectorAll('input[type=tel]')
    if (phoneInputs) {
        phoneInputs.forEach(el => {
            IMask(el, {
                mask: '+{7} (000) 000-00-00',
                lazy: true
            })
        })
    }
    window.addEventListener('resize', function() {
        WH = window.innerHeight || document.clientHeight || document.getElementsByTagName('body')[0].clientHeight
        let windowW = window.outerWidth
        if (typeof WW !== 'undefined' && WW != windowW) {
            // Перезапись ширины окна
            WW = window.innerWidth || document.clientWidth || document.getElementsByTagName('body')[0].clientWidth
            // Моб. версия
            if (!fakeResize) {
                fakeResize = true
                fakeResize2 = false
                document.getElementsByTagName('meta')['viewport'].content = 'width=device-width, initial-scale=1, maximum-scale=1'
            }
            if (!fakeResize2) {
                fakeResize2 = true
                if (windowW < 360) document.getElementsByTagName('meta')['viewport'].content = 'width=360, user-scalable=no'
            } else {
                fakeResize = false
                fakeResize2 = true
            }
        }
    })
})