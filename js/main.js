jQuery(function() {
    //single book
    jQuery('#mybook').booklet({
        width:  600,
        height: 444,
        pagePadding: 0,
        closed: false,
        speed: 1000,
        manual:   false,
        overlays: false,
        hovers:   false,
        shadows: false
    });


    if (document.location.hash != undefined) {
        var page = document.location.hash;
        switch (page) {
            case '#maru':
                jQuery('#mybook').booklet(28);
                break;
            case '#najla':
                jQuery('#mybook').booklet(32);
                break;
        }
    }

    jQuery('.pp_arrow_next').bind('click', function(){
        jQuery('#mybook').booklet("next");
    })

    jQuery('.pp_arrow_previous').bind('click', function(){
        jQuery('#mybook').booklet("prev");
    })

    jQuery('.pp_arrow_home').bind('click', function(){
        jQuery('#mybook').booklet(0);
    })

    jQuery('.modal-trigger').bind('click', function(){
        var target = jQuery(this).attr('data-target');
        var type = jQuery(this).attr('data-type');

        if (type == 'book-page') {
            target = 'pages/' + target + '.htm';
            jQuery.colorbox({
                href:target,
                innerWidth: '900px',
                innerHeight: '450px'
            });
        }

        console.log(target);
        console.log(type);

        if (type == 'gallery') {
            jQuery.colorbox({
                innerWidth: '900px',
                innerHeight: '450px',
                rel: target
            });
        }
    })

    jQuery('.venezuela-gallery').colorbox({
        rel: 'venezuela-gallery',
        maxHeight: '95%'
    });

    jQuery('.andre-gallery').colorbox({
        rel: 'andre-gallery',
        maxHeight: '95%'
    });

    jQuery('.dublin-gallery').colorbox({
        rel: 'dublin-gallery',
        maxHeight: '95%'
    });
});