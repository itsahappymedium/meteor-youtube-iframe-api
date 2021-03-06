if (!window['YT']) {
    YT = {
        loading: 0,
        loaded: 0
    };
}
if (!window['YTConfig']) {
    YTConfig = {
        'host': 'https://www.youtube.com'
    };
}
YT.load = function () {
    if (!YT.loading && !YT.loaded) {
        YT.loading = 1;
        (function() {
            var l = [];
            YT.ready = function(f) {
                if (YT.loaded) {
                    f();
                } else {
                    l.push(f);
                }
            };
            window.onYTReady = function() {
                YT.loaded = 1;
                for (var i = 0; i < l.length; i++) {
                    try {
                        l[i]();
                    } catch (e) {}
                }
                YT.loading= 0;
            };
            YT.setConfig = function(c) {
                for (var k in c) {
                    if (c.hasOwnProperty(k)) {
                        YTconfig[k] = c[k];
                    }
                }
            };
            $(document).ready(function () {
                var id = 'youtube-iframe-widgetapi';

                if (!$('head script#' + id).length) {
                  var a = document.createElement('script');
                  a.id = id;
                  a.src = 'https:' + '//s.ytimg.com/yts/jsbin/www-widgetapi-vflkvQ6Kw/www-widgetapi.js';
                  $('head').append(a);
                }
            });
        })();
    }
}
