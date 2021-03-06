/* global console, jsPanel */

$('#intro h1 small, .navbar-brand small').append(`v${jsPanel.version}`);

$('.subscribe-newsletter').on('click', function (e) {
    e.preventDefault();
    $.jsPanel({
        contentAjax: {
            url: "../study/Cases/AgileWeb/index.html",
            autoload: true
        },
        contentSize: "600 387",
        headerTitle: "jsPanel newsletter signup",
        headerControls: {
            controls: "closeonly"
        },
        theme: "crimson"
    });
});

var content1 = `<h3 style="text-align:center;">Hey there!</h3>
        <p>I'm a default jsPanel. Well, almost, there wouldn't be any content by default. 
        You can <strong>drag</strong> me around and <strong>resize</strong> me. Or, using the controls, 
        <strong>close</strong>, <strong>maximize</strong>, <strong>normalize</strong>, <strong>minimize</strong> 
        and <strong>smallify</strong> me.</p><p style="text-align: center">
        <button id="panel-1-next" type="button" class="btn btn-primary">Next panel <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button></p>`,

    content2 = `<p>This jsPanel uses the built-in theme <em>success</em>, a custom title and an additional header toolbar.</p>
        <p>Built-in themes are: <a href="#" id="p2-setTheme-default">default</a>, <a href="#" id="p2-setTheme-primary">primary</a>, <a href="#" id="p2-setTheme-info">info</a>, <a href="#" id="p2-setTheme-success">success</a>, <a href="#" id="p2-setTheme-warning">warning</a> and <a href="#" id="p2-setTheme-danger">danger</a>.</p>
        <p>Click theme names to change the theme of this panel using the built-in method <em>.setTheme(theme)</em>.</p>
        <p id="textinfo"></p>
        <p style="text-align:center;"><button id="panel-2-previous" type="button" class="btn btn-success"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Previous panel</button> 
        <button id="panel-2-next" type="button" class="btn btn-success">Next panel <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button></p>`,

    content3 = `<p>This jsPanel uses the theme <em>bootstrap-info</em> and adds a logo to the header.<br>Support for bootstrap themes is built-in:
            <a href="#" id="p3-setTheme-default">default</a>, <a href="#" id="p3-setTheme-primary">primary</a>, <a href="#" id="p3-setTheme-info">info</a>, <a href="#" id="p3-setTheme-success">success</a>, <a href="#" id="p3-setTheme-warning">warning</a> and <a href="#" id="p3-setTheme-danger">danger</a></p>
        <p>As of jsPanel 3.4.0 there is also built-in support for Material Design for Bootstrap themes. <a href="../media/demos/mdb-free/" title="" target="_blank">Examples</a></p>
        <p>This time the additional toolbar is configured as footer toolbar.</p>
        <p id="textinfo"></p>
        <p style="text-align:center;"><button id="panel-3-previous" type="button" class="btn btn-info"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Previous panel</button> 
        <button id="panel-3-next" type="button" class="panel_4_btn btn btn-info">Next panel <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button></p>`,

    content4 = `<p>Don't need a <em>header section</em>! Simply remove it.</p>
        <p>But then you should provide another option to close the panel like a close button in a footer toolbar.</p>
        <p id="textinfo"></p>
        <p style="text-align:center;"><button id="panel-4-previous" type="button" class="btn btn-info"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Previous panel</button> 
        <button id="panel-4-next" type="button" class="btn btn-info">Next panel <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button></p>`,

    content6 = `<video controls autoplay><source src="media/video/Big Buck Bunny (Low).mp4" type="video/mp4"></video>`;

var hdrTB = [
    {
        item:     '<i class="fa fa-home" aria-hidden="true"></i> ',
        callback: function (e) {
            $.jsPanel({
                config: sharedConfig2,
                container: $('.jsPanel-content', e.data),
                callback: function () {
                    $('.clickedBtn', this.content).text('Home');
                }
            });
        }
    },
    {
        item:     '<i class="fa fa-cogs" aria-hidden="true"></i> ',
        callback: function (e) {
            $.jsPanel({
                config: sharedConfig2,
                container: $('.jsPanel-content', e.data),
                callback: function () {
                    $('.clickedBtn', this.content).text('Settings');
                }
            });
        }
    },
    {
        item:     '<i class="fa fa-user" aria-hidden="true"></i> ',
        callback: function (e) {
            $.jsPanel({
                config: sharedConfig2,
                container: $('.jsPanel-content', e.data),
                callback: function () {
                    $('.clickedBtn', this.content).text('User Account');
                }
            });
        }
    },
    {
        item:     '<i class="fa fa-envelope" aria-hidden="true"></i> ',
        callback: function (e) {
            $.jsPanel({
                config: sharedConfig2,
                container: $('.jsPanel-content', e.data),
                callback: function () {
                    $('.clickedBtn', this.content).text('Email');
                }
            });
        }
    }
];

var ftrTB = [
    {
        item:     '<button type="button" class="btn btn-default btn-xs"><i class="fa fa-remove" aria-hidden="true"></i> Close</button>',
        callback: function (e) {
            e.data.close();
        }
    }
];

var sharedConfig = {
    position:      {my: 'left-top', at: 'left-bottom', of: '#intro', offsetY: 20},
    delayClose:    600,
    show:          'animated bounceInLeft',
    onbeforeclose: function () {
        this.addClass('bounceOutRight');
    }
};
var sharedConfig2 = {
    template:    jsPanel.tplContentOnly,
    autoclose:   4000,
    paneltype:   'hint',
    show:        'animated slideInUp',
    theme:       'info filledlight',
    border:      '1px solid gray',
    position:    'center-top 0 2 DOWN',
    contentSize: '380 40',
    content: '<p style="text-align:center;padding-top:10px;">You clicked the <strong class="clickedBtn"></strong> button</p>',
    delayClose: 600,
    onbeforeclose: function () {
        this.addClass('slideOutUp');
    }
};
var configs = {
    config1: $.extend({}, true, sharedConfig, {
        id:       'panel-1',
        content:  content1,
        contentSize:   '480 200',
        callback: function (panel) {
            this.content.css({padding: '0 15px 8px', textAlign: 'justify'});
            $('p, button', this.content).css({fontSize: '1.5rem'});
            $('#panel-1-next').click(function () {
                $('.jsPanel-btn-close', panel.header.controls).trigger('click');
            });
        },
        onclosed: function () {
            makePanel(configs.config2);
        }
    }),
    config2: $.extend({}, true, sharedConfig, {
        id:            'panel-2',
        headerTitle:   'Custom Title',
        theme:         'success',
        headerToolbar: hdrTB,
        content:       content2,
        contentSize:   '450 200',
        callback:      function (panel) {
            this.content.css({padding: '15px'});
            $('i', this.header.toolbar).css({cursor: 'pointer'});
            $('#panel-2-next').click(function () {
                $('.jsPanel-btn-close', panel.header.controls).trigger('click');
            });
        },
        onclosed:      function () {
            makePanel(configs.config3);
        }
    }),
    config3: $.extend({}, true, sharedConfig, {
        id:            'panel-3',
        headerTitle:   'jsPanel with Bootstrap theme',
        headerLogo:    'media/images/flyer53.jpg',
        theme:         'bootstrap-info',
        footerToolbar: hdrTB,
        content:       content3,
        contentSize:   '450 200',
        callback:      function (panel) {
            this.content.css({padding: '15px'});
            $('i', this.footer).css({cursor: 'pointer'});
            $('#panel-3-next').click(function () {
                $('.jsPanel-btn-close', panel.header.controls).trigger('click');
            });
        },
        onclosed:      function () {
            makePanel(configs.config4);
        }
    }),
    config4: $.extend({}, true, sharedConfig, {
        id:            'panel-4',
        headerRemove:  true,
        footerToolbar: ftrTB,
        content:       content4,
        callback:      function (panel) {
            this.content.css({padding: '15px'});
            $('#panel-4-next').click(function () {
                $('button', panel.footer).trigger('click');
            });
        },
        onclosed:      function () {
            jsPanel.closePanels('tooltip');
            makePanel(configs.config5);
        }
    }),
    config5: $.extend({}, true, sharedConfig, {
        id:            'panel-5',
        config:        sharedConfig,
        contentAjax:   {
            url:      '../study/Cases/AgileWeb/index.html',
            autoload: true,
            done:     function (data, textStatus, jqXHR, panel) {
                this.content.css('padding', '15px');
                this.content.mCustomScrollbar({
                    theme:         'dark',
                    scrollButtons: {enable: true}
                });
                window.setTimeout(function () {
                    $.jsPanel({
                        /* To enable a close animation for hints:
                         * 1. set option.autoclose to false
                         *    and use window.setTimeout() in option.callback instead to close the hint
                         * 2. set option.delayClose to have time for the close animation
                         * 3. use option.onbeforeclose to first remove show animation classes and then add animation classes
                         */
                        container:     panel.content,
                        autoclose:     false,
                        position:      'left-top 5 5',
                        show:          'animated slideInUp',
                        template:      jsPanel.tplContentOnly,
                        paneltype:     'hint',
                        theme:         'royalblue filled',
                        contentSize:   {width: 400, height: 'auto'},
                        content:       '<div><i class="fa fa-info-circle" style="margin:auto;"></i></div>' +
                                       '<div><p style="margin:auto;">Content loaded via AJAX<br><span style="font-size:1.3rem">And I\'m a jsPanel hint btw</span></p></div>' +
                                       '<div><i class="fa fa-remove"></i></div>',
                        delayClose:    700,
                        onbeforeclose: function () {
                            this.removeClass('animated slideInUp').addClass('animated fadeOut');
                        },
                        callback:      function (panel) {
                            this.content.css({
                                display: 'flex',
                                color:   '#fff',
                                opacity: 0.9
                            });
                            $('div:first-of-type', this.content).css({
                                borderRadius: '50%',
                                display:      'flex',
                                fontSize:     '50px',
                                margin:       '22px 10px',
                                width:        '60px'
                            });
                            $('div', this.content).eq(1).css({
                                display:    'flex',
                                fontSize:   '18px',
                                fontWeight: 'bold',
                                textAlign:  'center',
                                width:      'calc(100% - 126px)'
                            });
                            $('div', this.content).eq(2).css({
                                display:       'flex',
                                flexDirection: 'row-reverse',
                                alignItems:    'flex-start',
                                fontSize:      '18px',
                                width:         '45px',
                                padding:       '4px'
                            });
                            $('div', this.content).eq(2).find('i').css({
                                cursor: 'pointer'
                            }).click(function () {
                                panel.close();
                            });
                            window.setTimeout(function () {
                                panel.close();
                            }, 8000);
                        }
                    });
                }, 600);
            }
        },
        contentSize:   {width: 585, height: 300},
        theme:         'royalblue filledlight',
        headerTitle:   'Some peaks I climbed',
        footerToolbar: '<button id="panel-5-previous" type="button" class="btn btn-default"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Previous panel</button> ' +
                       '<button id="panel-5-next" type="button" class="panel_6_btn btn btn-default">Next panel <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>',
        callback:      function (panel) {
            $('#panel-5-next').click(function () {
                $('.jsPanel-btn-close', panel.header.controls).trigger('click');
            });
        },
        onclosed:      function () {
            makePanel(configs.config6);
        }
    }),
    config6: $.extend({}, true, sharedConfig, {
        id:            'panel-6',
        content:       content6,
        contentSize:   {width: 640, height: 360},
        headerTitle:   'content: HTML5 video',
        theme:         'brown',
        footerToolbar: '<button id="panel-6-previous" type="button" class="btn btn-default"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i> Previous panel</button> ' +
                       '<button id="panel-6-next" type="button" class="btn btn-default disabled">Next panel <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>',
        onclosed:      function () {
            makePanel(configs.config1);
        }
    })
};

function makePanel(conf) {
    var id = conf.id;
    if (!$('' + id).length) {
        $.jsPanel({config: conf});
    }
}

makePanel(configs.config1);

$(document).on('click', '#panel-2-previous', function () {
    document.getElementById('panel-2').jspanel.close(false, false, true);
    makePanel(configs.config1);
});
$(document).on('click', '#panel-3-previous', function () {
    document.getElementById('panel-3').jspanel.close(false, false, true);
    makePanel(configs.config2);
});
$(document).on('click', '#panel-4-previous', function () {
    document.getElementById('panel-4').jspanel.close(false, false, true);
    makePanel(configs.config3);
});
$(document).on('click', '#panel-5-previous', function () {
    document.getElementById('panel-5').jspanel.close(false, false, true);
    makePanel(configs.config4);
});
$(document).on('click', '#panel-6-previous', function () {
    document.getElementById('panel-6').jspanel.close(false, false, true);
    makePanel(configs.config5);
});

$(document).on('mouseenter', '#panel-4-next', function (e) {
    $.jsPanel({
        paneltype:      {tooltip: true, connector: true},
        position:       {my: 'center-top', at: 'center-bottom', of: e.target},
        contentSize:    {width: 200, height: '0'},
        theme:          'crimson',
        headerControls: {controls: 'none'},
        headerTitle:    '<p style="text-align: center;margin:4px 0;">jsPanel as tooltip</p>',
        callback:       function () {
            this.header.css('border-radius', '3px');
            this.content.css('border', 'none');
            if ($(window).height() < parseInt(this.css('top'))) {
                this.reposition({my: 'center-bottom', at: 'center-top', of: e.target});
            }
        }
    });
});


$(document).on('click', '#p2-setTheme-default', function (e) {
    e.preventDefault();
    document.getElementById('panel-2').jspanel.setTheme('default');
    $(document.getElementById('panel-2-next')).removeClass().addClass('btn btn-default');
});
$(document).on('click', '#p2-setTheme-primary', function (e) {
    e.preventDefault();
    document.getElementById('panel-2').jspanel.setTheme('primary');
    $(document.getElementById('panel-2-next')).removeClass().addClass('btn btn-primary');
});
$(document).on('click', '#p2-setTheme-info', function (e) {
    e.preventDefault();
    document.getElementById('panel-2').jspanel.setTheme('info');
    $(document.getElementById('panel-2-next')).removeClass().addClass('btn btn-info');
});
$(document).on('click', '#p2-setTheme-success', function (e) {
    e.preventDefault();
    document.getElementById('panel-2').jspanel.setTheme('success');
    $(document.getElementById('panel-2-next')).removeClass().addClass('btn btn-success');
});
$(document).on('click', '#p2-setTheme-warning', function (e) {
    e.preventDefault();
    document.getElementById('panel-2').jspanel.setTheme('warning');
    $(document.getElementById('panel-2-next')).removeClass().addClass('btn btn-warning');
});
$(document).on('click', '#p2-setTheme-danger', function (e) {
    e.preventDefault();
    document.getElementById('panel-2').jspanel.setTheme('danger');
    $(document.getElementById('panel-2-next')).removeClass().addClass('btn btn-danger');
});

$(document).on('click', '#p3-setTheme-default', function (e) {
    e.preventDefault();
    document.getElementById('panel-3').jspanel.setTheme('bootstrap-default');
    $(document.getElementById('panel-3-next')).removeClass().addClass('btn btn-default');
});
$(document).on('click', '#p3-setTheme-primary', function (e) {
    e.preventDefault();
    document.getElementById('panel-3').jspanel.setTheme('bootstrap-primary');
    $(document.getElementById('panel-3-next')).removeClass().addClass('btn btn-primary');
});
$(document).on('click', '#p3-setTheme-info', function (e) {
    e.preventDefault();
    document.getElementById('panel-3').jspanel.setTheme('bootstrap-info');
    $(document.getElementById('panel-3-next')).removeClass().addClass('btn btn-info');
});
$(document).on('click', '#p3-setTheme-success', function (e) {
    e.preventDefault();
    document.getElementById('panel-3').jspanel.setTheme('bootstrap-success');
    $(document.getElementById('panel-3-next')).removeClass().addClass('btn btn-success');
});
$(document).on('click', '#p3-setTheme-warning', function (e) {
    e.preventDefault();
    document.getElementById('panel-3').jspanel.setTheme('bootstrap-warning');
    $(document.getElementById('panel-3-next')).removeClass().addClass('btn btn-warning');
});
$(document).on('click', '#p3-setTheme-danger', function (e) {
    e.preventDefault();
    document.getElementById('panel-3').jspanel.setTheme('bootstrap-danger');
    $(document.getElementById('panel-3-next')).removeClass().addClass('btn btn-danger');
});



/* DW Formmailer -------------------------------------------------------------- */
var chk;
function check_form(f, g) {
    if (f.elements['absender_mail'].value == '') {
        alert('Please fill in all required fields \n(Your email)');
        f.elements['absender_mail'].focus();
        return false;
    } else {
        if (!VerifyEmailAddress(f.elements['absender_mail'].value)) {
            alert('Please enter a valid email address! \n(Your email)');
            f.elements['absender_mail'].focus();
            return false;
        }
    }
    if (f.elements['captcha_code_number'].value == '') {
        alert('Please fill in all required fields! \n(enter security code!)');
        f.elements['captcha_code_number'].focus();
        return false;
    }
    return true;
}

$('#contact-form').click(function (e) {
    e.preventDefault();
    $.jsPanel({
        position: 'center-top 0 20',
        headerTitle: 'Contact form',
        contentSize: {
            width: 600,
            height: 565
        },
        //contentIframe: {src: 'media/files/contact_form.html'},
        contentAjax: {
            url: 'media/files/contact_form.html',
            autoload: true
        },
        contentOverflow: {vertical: 'scroll'},
        theme: '#0A2132',
        callback: function() {
            this.content.css({padding: '20px', background: 'gainsboro'});
        }
    });
});