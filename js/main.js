
$(document).ready(function () {
    // Cookies Functions
    function setCookie(name, value, expires, path, domain, secure) {
        var curCookie = name + "=" + escape(value) +
            ((expires) ? "; expires=" + expires.toGMTString() : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
        document.cookie = curCookie;
    }

    function getCookie(name) {
        var dc = document.cookie;
        var prefix = name + "=";
        var begin = dc.indexOf("; " + prefix);
        if (begin == -1) {
            begin = dc.indexOf(prefix);
            if (begin != 0) return null;
        } else
            begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1)
            end = dc.length;
        return unescape(dc.substring(begin + prefix.length, end));
    }

    function deleteCookie(name, path, domain) {
        if (getCookie(name)) {
            document.cookie = name + "=" +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                "; expires=Thu, 01-Jan-70 00:00:01 GMT";
        }
    }

    function fixDate(date) {
        var base = new Date(0);
        var skew = base.getTime();
        if (skew > 0)
            date.setTime(date.getTime() - skew);
    }

    // Visit Counter
    var visits = getCookie("counter");
    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }
    setCookie("counter", visits);

    var liststyle = ['inspire', 'imagine', 'innovate'];
    var style = liststyle[(visits + 3) % 3];

    if (style == 'imagine') {
        // BG Styles
        //$('.style').css('background', 'linear-gradient(to top right, #FE6BBE, #FAD865');
        $('.style').css('background', '-webkit-linear-gradient(233deg, #FE6BBE, #FAD865)');
        $('.style').css('color', '#000');
        $('.footer-text').css('color', '#000');
        $('.fa-facebook').css('color', '#000');
        $('.fa-twitter').css('color', '#000');
        $('.fa-slack').css('color', '#000');
        $('.modal-btn').css('color', '#000');
        $('.modal-btn').css('border', '1px solid #000');
        $('.modal-btn').hover(function (e) {
            $(this).css('background', e.type === 'mouseenter' ? "#000" : 'transparent');
            $(this).css('color', e.type === 'mouseenter' ? '#fff' : '#000');
        });

        // Text Style
        $('.title').text('Imagine.');
        $('.title').css('color', '#C8F020')

        // Nav
        $('.navbar').css('background', '-webkit-linear-gradient(233deg, #FE6BBE, #FAD865)');

        // Logo Style
        $('.mango').attr('src', "img/mangos/imagine-mango.svg")

        //  BG Picture
        $('.bg-hero').attr('src', "img/misc/macbook.svg")
        $('.bg-hero').removeClass('bg-hero').addClass('macbook');

        // Pills
        $('#pill-5').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-6').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-7').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-8').css('border', '2px solid #FE6BBE');
        $('#pill-9').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-10').css('border', '2px solid #FE6BBE');
        $('#pill-11').css('border', '2px solid #FE6BBE');
        $('#pill-12').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-13').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-5-2').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-6-2').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-7-2').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-8-2').css('border', '2px solid #FE6BBE');
        $('#pill-9-2').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-10-2').css('border', '2px solid #FE6BBE');
        $('#pill-11-2').css('border', '2px solid #FE6BBE');
        $('#pill-12-2').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-13-2').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-14-2').css('border', '2px solid #FE6BBE');
        $('#pill-5-3').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-6-3').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-7-3').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-8-3').css('border', '2px solid #FE6BBE');
        $('#pill-9-3').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-10-3').css('border', '2px solid #FE6BBE');
        $('#pill-11-3').css('border', '2px solid #FE6BBE');
        $('#pill-12-3').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');
        $('#pill-13-3').css('background', 'linear-gradient(233deg, #FE6BBE, #FAD865');



        //Sign Up button
        $('.signupbutton').css('border', '2px solid #C8F020');
        $('.signupbutton').css('color', '#C8F020');

    }

    if (style == 'inspire') {
        //$('.style').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('.style').css('background', '-webkit-linear-gradient(233deg, #efff92, #d2fcf9)');

        $('.style').css('color', '#000');
        $('.footer-text').css('color', '#000');
        $('.fa-facebook').css('color', '#000');
        $('.fa-twitter').css('color', '#000');
        $('.fa-slack').css('color', '#000');
        $('.modal-btn').css('color', '#000');
        $('.modal-btn').css('border', '1px solid #000');
        $('.modal-btn').hover(function (e) {
            $(this).css('background', e.type === 'mouseenter' ? "#000" : 'transparent');
            $(this).css('color', e.type === 'mouseenter' ? '#fff' : '#000');
        });


        // Text Style
        $(".title").text('Inspire.');
        $('.title').css('color', '#23F5E9');

        // Nav
        $('.navbar').css('background', '-webkit-linear-gradient(233deg, #efff92, #d2fcf9)');

        // Logo Style
        $('.mango').attr('src', "img/mangos/inspire-mango.svg");

        //  BG Picture
        $('.bg-hero').attr('src', "img/misc/Submissions.svg");
        $('.bg-hero').removeClass('bg-hero').addClass('submissions');

        // Pills
        $('#pill-5').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-6').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-7').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-8').css('border', '2px solid #efff92');
        $('#pill-9').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-10').css('border', '2px solid #efff92');
        $('#pill-11').css('border', '2px solid #d2fcf9');
        $('#pill-12').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-13').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-5-2').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-6-2').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-7-2').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-8-2').css('border', '2px solid #efff92');
        $('#pill-9-2').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-10-2').css('border', '2px solid #efff92');
        $('#pill-11-2').css('border', '2px solid #d2fcf9');
        $('#pill-12-2').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-13-2').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-14-2').css('border', '2px solid #d2fcf9');
        $('#pill-5-3').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-6-3').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-7-3').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-8-3').css('border', '2px solid #efff92');
        $('#pill-9-3').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-10-3').css('border', '2px solid #efff92');
        $('#pill-11-3').css('border', '2px solid #d2fcf9');
        $('#pill-12-3').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');
        $('#pill-13-3').css('background', 'linear-gradient(233deg, #efff92, #d2fcf9');

        $('#signup-mango').attr('src', 'img/mangos/inspire-mango.svg');

        //Sign Up button
        $('.signupbutton').css('border', '2px solid #23F5E9');
        $('.signupbutton').css('color', '#23F5E9');
    }

    if (style == 'innovate') {
        //$('.style').css('background', 'linear-gradient(233deg, #6800ff, #f52376');
        $('.style').css('background', '-webkit-linear-gradient(233deg, #6800ff, #f52376)');
        $('.style').css('color', '#fff');
        $('.modal-btn').css('color', '#fff');
        $('.modal-btn').css('border', '1px solid #fff');
        $('.modal-btn').hover(function (e) {
            $(this).css('background', e.type === 'mouseenter' ? "#fff" : 'transparent');
            $(this).css('color', e.type === 'mouseenter' ? '#000' : 'white');
        });


        // Text Style
        $('.title').text('Innovate.');
        $('.title').css('color', '#4652F7');

        //Nav
        $('.navbar').css('background', '-webkit-linear-gradient(233deg, #6800ff, #f52376)');
        $('.nav-link').css('color', 'white');
        $('.navbar-brand').css('color', 'white');
        $('nav img').attr('src', 'img/mangos/white-mango.svg');

        // Logo Style
        $('.mango').attr('src', "img/mangos/innovate-mango.svg");

        //  BG Picture
        $('.bg-hero').attr('src', "img/misc/motherboard.png");
        $('.bg-hero').removeClass('bg-hero').addClass('motherboard');

        // Pills
        $('#pill-5').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-6').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-7').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-8').css('border', '2px solid #6800ff');
        $('#pill-9').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-10').css('border', '2px solid #6800ff)');
        $('#pill-11').css('border', '2px solid #f52376)');
        $('#pill-12').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-13').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-5-2').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-6-2').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-7-2').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-8-2').css('border', '2px solid #6800ff');
        $('#pill-9-2').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-10-2').css('border', '2px solid #6800ff)');
        $('#pill-11-2').css('border', '2px solid #f52376)');
        $('#pill-12-2').css('linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-13-2').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-14-2').css('border', '2px solid #f52376)');
        $('#pill-5-3').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-6-3').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-7-3').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-8-3').css('border', '2px solid #f52376');
        $('#pill-9-3').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-10-3').css('border', '2px solid #6800ff)');
        $('#pill-11-3').css('border', '2px solid #f52376)');
        $('#pill-12-3').css('linear-gradient(233deg, #6800ff, #f52376)');
        $('#pill-13-3').css('background', 'linear-gradient(233deg, #6800ff, #f52376)');

        //Modal Mango
        $('#signup-mango').attr('src', 'img/mangos/innovate-mango.svg');
        //Sign Up button
        $('.signupbutton').css('border', '2px solid #4652F7');
        $('.signupbutton').css('color', '#fff');
        $('.signupbutton').css('background-color', '#4652F7');
    }


    $('#video-overlay').on('click', function () {
        $(this).fadeOut('slow')
        $('#mango-video').attr('src', 'https://www.youtube.com/embed/iuPGCi9VEco?autoplay=1');
    });
    // Modal
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').trigger('focus')
    })
    //Scroll
    $("#about-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#hero").offset().top
        }, 1000);
    });
    $("#faq-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#faq-section").offset().top
        }, 1000);
    });
    $("#sponsors-nav").click(function () {
        $('html, body').animate({
            scrollTop: $("#sponsors").offset().top
        }, 1000);
    });

    $("div").hide().fadeIn(1000);

    //NAVBAR
    $(".navbar").hide();
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

    var $emailinput = $('#email');
    var $emaillabel = $('#email-label');
    var $nameinput = $('#name');
    var $namelabel = $('#name-label');
    var $schoolinput = $('#school');
    var $schoollabel = $('#school-label');
    var $majorinput = $('#major');
    var $majorlabel = $('#major-label');
    var $dietinput = $('#diet');
    var $dietlabel = $('#diet-label');
    var $githubinput = $('#github');
    var $githublabel = $('#github-label');

    $emailinput.on('focus', function (event) {
        $emaillabel.addClass('active');
    });
    $emailinput.on('blur', function (event) {
        if ($emailinput.val().trim() == "") {
            $emaillabel.removeClass('active');
        }
    });
    $nameinput.on('focus', function (event) {
        $namelabel.addClass('active');
    });
    $nameinput.on('blur', function (event) {
        if ($nameinput.val().trim() == "") {
            $namelabel.removeClass('active');
        }
    });

    $schoolinput.on('focus', function (event) {
        $schoollabel.addClass('active');
    });
    $schoolinput.on('blur', function (event) {
        if ($schoolinput.val().trim() == "") {
            $schoollabel.removeClass('active');
        }
    });

    $majorinput.on('focus', function (event) {
        $majorlabel.addClass('active');
    });
    $majorinput.on('blur', function (event) {
        if ($majorinput.val().trim() == "") {
            $majorlabel.removeClass('active');
        }
    });

    $dietinput.on('focus', function (event) {
        $dietlabel.addClass('active');
    });
    $dietinput.on('blur', function (event) {
        if ($dietinput.val().trim() == "") {
            $dietlabel.removeClass('active');
        }
    });

    $githubinput.on('focus', function (event) {
        $githublabel.addClass('active');
    });
    $githubinput.on('blur', function (event) {
        if ($githubinput.val().trim() == "") {
            $githublabel.removeClass('active');
        }
    });

    $('#form').submit(function (event) {
        event.preventDefault();

        var $form = $(this),
            name = $form.find("input[name='name']").val(),
            email = $form.find("input[name='email']").val(),
            school = $form.find("input[name='school']").val(),
            major = $form.find("input[name='major']").val(),
            github = $form.find("input[name='github']").val(),
            diet = $form.find("input[name='diet']").val(),
            // resume = ("#resume")next().val(),
            gender = $form.find("#gender").val(),
            year = $form.find("#year").val(),
            size = $form.find("#size").val(),
            url = $form.attr("action");
        var posting = $.post(url, { name: name, email: email, school: school, major: major, github: github, diet: diet, gender: gender, resume: resume, major: major, size: size });
    });
});
