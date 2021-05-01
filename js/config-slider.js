(function ($) {
    // Use Strict
    "use strict"; 
    
    $('#slide-1').show().revolution({
        slideLayout: 'fullscreen',
        delay: '6000',
        autoPlay: 'off',
        disableProgressBar: 'on',
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: false,
                style: 'au-nav-1'
            },
            bullets: {
                enable: true,
                style: 'au-bullet-1',
                h_align: 'center',
                v_align: 'bottom',
                hide_onleave: false,
                h_offset: 0,
                v_offset: 40,
                space: 7,
            }
        },
        responsiveLevels: [1920, 1440, 1200, 992, 768, 576],
        gridwidth: [1300, 1000, 850, 650, 440, 310],
        gridheight: [590, 590, 590, 500, 500, 500],
    });



    $('#slide-2').revolution({
        slideLayout: 'fullscreen',
        delay: '5000',
        autoPlay: 'off',
        disableProgressBar: 'on',
        navigation: {
            arrows: {
                enable: false,
                hide_onleave: true,
                style: 'au-nav-1'
            },
            bullets: {
                enable: true,
                style: 'au-bullet-1',
                h_align: 'center',
                v_align: 'bottom',
                hide_onleave: false,
                h_offset: 0,
                v_offset: 40,
                space: 7,
            }
        },
        responsiveLevels: [1920, 1440, 1200, 992, 768, 576],
        gridwidth: [1300, 1000, 850, 650, 440, 310],
        gridheight: [590, 590, 590, 500, 500, 500],
    });

    $('#slide-3').revolution({
        slideLayout: 'fullscreen',
        delay: '6000',
        autoPlay: 'off',
        disableProgressBar: 'on',
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: false,
                style: 'au-nav-1'
            },
            bullets: {
                enable: true,
                style: 'au-bullet-1',
                h_align: 'center',
                v_align: 'bottom',
                hide_onleave: false,
                h_offset: 0,
                v_offset: 40,
                space: 7,
            }
        },
        responsiveLevels: [1920, 1440, 1200, 992, 768, 576],
        gridwidth: [1300, 1000, 850, 650, 440, 310],
        gridheight: [590, 590, 590, 500, 500, 500],
    });


    $('#slide-4').revolution({
        slideLayout: 'fullscreen',
        delay: '6000',
        autoPlay: 'off',
        disableProgressBar: 'on',
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                style: 'au-nav-1',
                left: {
                    container: 'slider',
                    h_align: 'left',
                    v_align: 'center',
                    h_offset: 50,
                    v_offset: 0
                },

                right: {
                    container: 'slider',
                    h_align: 'right',
                    v_align: 'center',
                    h_offset: 50,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                style: 'au-bullet-2',
                tmp: '<span></span>',
                h_align: 'center',
                v_align: 'bottom',
                hide_onleave: false,
                h_offset: 0,
                v_offset: 40,
                space: 7,
            }
        },
        responsiveLevels: [1920, 1440, 1200, 992, 768, 576],
        gridwidth: [1300, 1000, 850, 650, 440, 310],
        gridheight: [590, 590, 590, 500, 500, 500],
    });

    $('#slide-5').revolution({
        slideLayout: 'fullscreen',
        delay: '6000',
        autoPlay: 'off',
        disableProgressBar: 'on',
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: true,
                style: 'au-nav-1'
            },
            bullets: {
                enable: true,
                style: 'au-bullet-3',
                h_align: 'center',
                v_align: 'bottom',
                hide_onleave: false,
                h_offset: 0,
                v_offset: 40,
                space: 7,
            }
        },
        responsiveLevels: [1920, 1440, 1200, 992, 768, 576],
        gridwidth: [1300, 1000, 850, 650, 440, 310],
        gridheight: [590, 590, 590, 500, 500, 500],
    });

    $('#slide-6').revolution({
        slideLayout: 'fullscreen',
        delay: '6000',
        autoPlay: 'off',
        disableProgressBar: 'on',
        navigation: {
            arrows: {
                enable: true,
                hide_onleave: false,
                style: 'au-nav-1'
            },
            bullets: {
                enable: true,
                style: 'au-bullet-1',
                h_align: 'center',
                v_align: 'bottom',
                hide_onleave: false,
                h_offset: 0,
                v_offset: 40,
                space: 7,
            }
        },
        responsiveLevels: [1920, 1440, 1200, 992, 768, 576],
        gridwidth: [1300, 1000, 850, 650, 440, 310],
        gridheight: [705, 590, 590, 500, 500, 500],
    });
})(jQuery);