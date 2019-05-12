/* eslint-disable */
var env = function () {
    var u = navigator.userAgent;
    return {         //移动终端浏览器版本信息
        trident: u.indexOf('Trident') > -1, //IE内核
        presto: u.indexOf('Presto') > -1, //opera内核
        webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
        gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
        mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
        iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf('iPad') > -1, //是否iPad
        webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
        phoneApp: u.indexOf('iting') > -1,   //是否在手机app内
        weiXin: u.indexOf('MicroMessenger') > -1    //是否在微信内
    }
}();
(function(e, l) {
    var c, k, d, f = e.document,
        g = f.documentElement,
        h = l.flexible || (l.flexible = {});
    (function() {
        var a, b = f.querySelector('meta[name="viewport"]');
        c = e.devicePixelRatio || 1;
        a = 1 / c;
        g.setAttribute("data-dpr", c);
        var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        var ratio = window.devicePixelRatio || 1;
        var screen = {
            width: window.screen.width * ratio,
            height: window.screen.height * ratio
        };
        if (iOS && screen.width == 1125 && screen.height === 2436) {
            a = "width=device-width, initial-scale=" + 1 + ", minimum-scale=" + 1 + ", maximum-scale=" + 1 + ", user-scalable=no,viewport-fit=cover";
        } else if (iOS) {
            a = "width=device-width, initial-scale=" + 1 + ", minimum-scale=" + 1 + ", maximum-scale=" + 1 + ", user-scalable=no";
        } else {
            a = "width=device-width, initial-scale=" + a + ", minimum-scale=" + a + ", maximum-scale=" + a + ", user-scalable=no";
        }

        b ? b.setAttribute("content", a) : (b = f.createElement("meta"), b.setAttribute("name", "viewport"), b.setAttribute("content", a), (f.head || g.firstElementChild).appendChild(b))
    })();
    (function() {
        // var $dom = document.createElement('div');
        // $dom.style = 'font-size:10px;';
        // document.body.appendChild($dom);
        // // 计算出放大后的字体
        // var scaledFontSize = parseInt(window.getComputedStyle($dom, null).getPropertyValue('font-size'));
        // document.body.removeChild($dom);
        // // 计算原字体和放大后字体的比例
        // var scaleFactor = 10 / scaledFontSize;
        // console.log(111, scaledFontSize)
        var a = function() {
            var a = g.clientWidth;
            600 < a / c && (a = 600 * c);
            k = Math.floor(a / 375 * 100);
            // var realfz = parseFloat(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize)
            // if (env.phoneApp && env.android) {
            //   if (realfz > 30 && k !== realfz) {
            //     k = k * (k / realfz) * scaleFactor
            //   } else {
            //     k = k * scaleFactor
            //   }
            // }
            g.style.fontSize = k + "px"
            console.log('k', k)
            // var $dom = document.createElement('div');
            // $dom.style = 'font-size:10px;';
            // document.body.appendChild($dom);
            // // 计算出放大后的字体
            // var scaledFontSize = parseInt(window.getComputedStyle($dom, null).getPropertyValue('font-size'));
            // document.body.removeChild($dom);
            // // 计算原字体和放大后字体的比例
            // var scaleFactor = 10 / scaledFontSize;
            var realfz = parseFloat(window.getComputedStyle(document.getElementsByTagName("html")[0]).fontSize)
            console.log(realfz)
            console.log(222, k * (k / realfz))
            if (env.phoneApp && env.android) {
              if (realfz > 30 && k !== realfz) {
                g.setAttribute("data-orifz", k);
                k = k * (k / realfz)
              }
            }
            g.style.fontSize = k + "px"
            // console.log('k2', k)
        };
        e.addEventListener("orientationchange" in e ? "orientationchange" : "resize", function() {
            d && clearTimeout(d);
            d = setTimeout(a, 300)
        }, !1);
        e.addEventListener("pageshow", function(b) {
            b.persisted && (d && clearTimeout(d), d = setTimeout(a, 300))
        }, !1);
        f.addEventListener("DOMContentLoaded", a, !1);
        a()
    })();
    h.dpr = c;
    h.rem = k;
    h.rem2px = function(a) {
        var b = parseFloat(a) * this.rem;
        "string" === typeof a && a.match(/rem$/) && (b += "px");
        return b
    };
    h.px2rem = function(a) {
        var b = parseFloat(a) / this.rem;
        "string" === typeof a && a.match(/px$/) && (b += "rem");
        return b
    }
})(window, window.FT || (window.FT = {}));
