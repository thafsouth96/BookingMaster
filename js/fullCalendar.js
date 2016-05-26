
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
}(function (a, b) {
    function c(a) {
        return W(a, Xa)
    }

    function d(b) {
        var c, d = {
            views: b.views || {}
        };
        return a.each(b, function (b, e) {
            "views" != b && (a.isPlainObject(e) && !/(time|duration|interval)$/i.test(b) && -1 == a.inArray(b, Xa) ? (c = null, a.each(e, function (a, e) {
                /^(month|week|day|default|basic(Week|Day)?|agenda(Week|Day)?)$/.test(a) ? (d.views[a] || (d.views[a] = {}), d.views[a][b] = e) : (c || (c = {}), c[a] = e)
            }), c && (d[b] = c)) : d[b] = e)
        }), d
    }

    function e(a, b) {
        b.left && a.css({
            "border-left-width": 1,
            "margin-left": b.left - 1
        }), b.right && a.css({
            "border-right-width": 1,
            "margin-right": b.right - 1
        })
    }

    function f(a) {
        a.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }

    function g() {
        a("body").addClass("fc-not-allowed")
    }

    function h() {
        a("body").removeClass("fc-not-allowed")
    }

    function i(b, c, d) {
        var e = Math.floor(c / b.length),
                f = Math.floor(c - e * (b.length - 1)),
                g = [],
                h = [],
                i = [],
                k = 0;
        j(b), b.each(function (c, d) {
            var j = c === b.length - 1 ? f : e,
                    l = a(d).outerHeight(!0);
            j > l ? (g.push(d), h.push(l), i.push(a(d).height())) : k += l
        }), d && (c -= k, e = Math.floor(c / g.length), f = Math.floor(c - e * (g.length - 1))), a(g).each(function (b, c) {
            var d = b === g.length - 1 ? f : e,
                    j = h[b],
                    k = i[b],
                    l = d - (j - k);
            d > j && a(c).height(l)
        })
    }

    function j(a) {
        a.height("")
    }

    function k(b) {
        var c = 0;
        return b.find("> span").each(function (b, d) {
            var e = a(d).outerWidth();
            e > c && (c = e)
        }), c++, b.width(c), c
    }

    function l(a, b) {
        var c, d = a.add(b);
        return d.css({
            position: "relative",
            left: -1
        }), c = a.outerHeight() - b.outerHeight(), d.css({
            position: "",
            left: ""
        }), c
    }

    function m(b) {
        var c = b.css("position"),
                d = b.parents().filter(function () {
            var b = a(this);
            return /(auto|scroll)/.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
        }).eq(0);
        return "fixed" !== c && d.length ? d : a(b[0].ownerDocument || document)
    }

    function n(a, b) {
        var c = a.offset(),
                d = c.left - (b ? b.left : 0),
                e = c.top - (b ? b.top : 0);
        return {
            left: d,
            right: d + a.outerWidth(),
            top: e,
            bottom: e + a.outerHeight()
        }
    }

    function o(a, b) {
        var c = a.offset(),
                d = q(a),
                e = c.left + t(a, "border-left-width") + d.left - (b ? b.left : 0),
                f = c.top + t(a, "border-top-width") + d.top - (b ? b.top : 0);
        return {
            left: e,
            right: e + a[0].clientWidth,
            top: f,
            bottom: f + a[0].clientHeight
        }
    }

    function p(a, b) {
        var c = a.offset(),
                d = c.left + t(a, "border-left-width") + t(a, "padding-left") - (b ? b.left : 0),
                e = c.top + t(a, "border-top-width") + t(a, "padding-top") - (b ? b.top : 0);
        return {
            left: d,
            right: d + a.width(),
            top: e,
            bottom: e + a.height()
        }
    }

    function q(a) {
        var b = a.innerWidth() - a[0].clientWidth,
                c = {
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: a.innerHeight() - a[0].clientHeight
                };
        return r() && "rtl" == a.css("direction") ? c.left = b : c.right = b, c
    }

    function r() {
        return null === Ya && (Ya = s()), Ya
    }

    function s() {
        var b = a("<div><div/></div>").css({
            position: "absolute",
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: "scroll",
            direction: "rtl"
        }).appendTo("body"),
                c = b.children(),
                d = c.offset().left > b.offset().left;
        return b.remove(), d
    }

    function t(a, b) {
        return parseFloat(a.css(b)) || 0
    }

    function u(a) {
        return 1 == a.which && !a.ctrlKey
    }

    function v(a) {
        if (void 0 !== a.pageX)
            return a.pageX;
        var b = a.originalEvent.touches;
        return b ? b[0].pageX : void 0
    }

    function w(a) {
        if (void 0 !== a.pageY)
            return a.pageY;
        var b = a.originalEvent.touches;
        return b ? b[0].pageY : void 0
    }

    function x(a) {
        return /^touch/.test(a.type)
    }

    function y(a) {
        a.addClass("fc-unselectable").on("selectstart", z)
    }

    function z(a) {
        a.preventDefault()
    }

    function A(a) {
        return window.addEventListener ? (window.addEventListener("scroll", a, !0), !0) : !1
    }

    function B(a) {
        return window.removeEventListener ? (window.removeEventListener("scroll", a, !0), !0) : !1
    }

    function C(a, b) {
        var c = {
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top),
            bottom: Math.min(a.bottom, b.bottom)
        };
        return c.left < c.right && c.top < c.bottom ? c : !1
    }

    function D(a, b) {
        return {
            left: Math.min(Math.max(a.left, b.left), b.right),
            top: Math.min(Math.max(a.top, b.top), b.bottom)
        }
    }

    function E(a) {
        return {
            left: (a.left + a.right) / 2,
            top: (a.top + a.bottom) / 2
        }
    }

    function F(a, b) {
        return {
            left: a.left - b.left,
            top: a.top - b.top
        }
    }

    function G(b) {
        var c, d, e = [],
                f = [];
        for ("string" == typeof b ? f = b.split(/\s*,\s*/) : "function" == typeof b ? f = [b] : a.isArray(b) && (f = b), c = 0; c < f.length; c++)
            d = f[c], "string" == typeof d ? e.push("-" == d.charAt(0) ? {
                field: d.substring(1),
                order: -1
            } : {
                field: d,
                order: 1
            }) : "function" == typeof d && e.push({
                func: d
            });
        return e
    }

    function H(a, b, c) {
        var d, e;
        for (d = 0; d < c.length; d++)
            if (e = I(a, b, c[d]))
                return e;
        return 0
    }

    function I(a, b, c) {
        return c.func ? c.func(a, b) : J(a[c.field], b[c.field]) * (c.order || 1)
    }

    function J(b, c) {
        return b || c ? null == c ? -1 : null == b ? 1 : "string" === a.type(b) || "string" === a.type(c) ? String(b).localeCompare(String(c)) : b - c : 0
    }

    function K(a, b) {
        var c, d, e, f, g = a.start,
                h = a.end,
                i = b.start,
                j = b.end;
        return h > i && j > g ? (g >= i ? (c = g.clone(), e = !0) : (c = i.clone(), e = !1), j >= h ? (d = h.clone(), f = !0) : (d = j.clone(), f = !1), {
            start: c,
            end: d,
            isStart: e,
            isEnd: f
        }) : void 0
    }

    function L(a, c) {
        return b.duration({
            days: a.clone().stripTime().diff(c.clone().stripTime(), "days"),
            ms: a.time() - c.time()
        })
    }

    function M(a, c) {
        return b.duration({
            days: a.clone().stripTime().diff(c.clone().stripTime(), "days")
        })
    }

    function N(a, c, d) {
        return b.duration(Math.round(a.diff(c, d, !0)), d)
    }

    function O(a, b) {
        var c, d, e;
        for (c = 0; c < $a.length && (d = $a[c], e = P(d, a, b), !(e >= 1 && ha(e))); c++)
            ;
        return d
    }

    function P(a, c, d) {
        return null != d ? d.diff(c, a, !0) : b.isDuration(c) ? c.as(a) : c.end.diff(c.start, a, !0)
    }

    function Q(a, b, c) {
        var d;
        return T(c) ? (b - a) / c : (d = c.asMonths(), Math.abs(d) >= 1 && ha(d) ? b.diff(a, "months", !0) / d : b.diff(a, "days", !0) / c.asDays())
    }

    function R(a, b) {
        var c, d;
        return T(a) || T(b) ? a / b : (c = a.asMonths(), d = b.asMonths(), Math.abs(c) >= 1 && ha(c) && Math.abs(d) >= 1 && ha(d) ? c / d : a.asDays() / b.asDays())
    }

    function S(a, c) {
        var d;
        return T(a) ? b.duration(a * c) : (d = a.asMonths(), Math.abs(d) >= 1 && ha(d) ? b.duration({
            months: d * c
        }) : b.duration({
            days: a.asDays() * c
        }))
    }

    function T(a) {
        return Boolean(a.hours() || a.minutes() || a.seconds() || a.milliseconds())
    }

    function U(a) {
        return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function V(a) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(a)
    }

    function W(a, b) {
        var c, d, e, f, g, h, i = {};
        if (b)
            for (c = 0; c < b.length; c++) {
                for (d = b[c], e = [], f = a.length - 1; f >= 0; f--)
                    if (g = a[f][d], "object" == typeof g)
                        e.unshift(g);
                    else if (void 0 !== g) {
                        i[d] = g;
                        break
                    }
                e.length && (i[d] = W(e))
            }
        for (c = a.length - 1; c >= 0; c--) {
            h = a[c];
            for (d in h)
                d in i || (i[d] = h[d])
        }
        return i
    }

    function X(a) {
        var b = function () {};
        return b.prototype = a, new b
    }

    function Y(a, b) {
        for (var c in a)
            $(a, c) && (b[c] = a[c])
    }

    function Z(a, b) {
        var c, d, e = ["constructor", "toString", "valueOf"];
        for (c = 0; c < e.length; c++)
            d = e[c], a[d] !== Object.prototype[d] && (b[d] = a[d])
    }

    function $(a, b) {
        return cb.call(a, b)
    }

    function _(b) {
        return /undefined|null|boolean|number|string/.test(a.type(b))
    }

    function aa(b, c, d) {
        if (a.isFunction(b) && (b = [b]), b) {
            var e, f;
            for (e = 0; e < b.length; e++)
                f = b[e].apply(c, d) || f;
            return f
        }
    }

    function ba() {
        for (var a = 0; a < arguments.length; a++)
            if (void 0 !== arguments[a])
                return arguments[a]
    }

    function ca(a) {
        return (a + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function da(a) {
        return a.replace(/&.*?;/g, "")
    }

    function ea(b) {
        var c = [];
        return a.each(b, function (a, b) {
            null != b && c.push(a + ":" + b)
        }), c.join(";")
    }

    function fa(a) {
        return a.charAt(0).toUpperCase() + a.slice(1)
    }

    function ga(a, b) {
        return a - b
    }

    function ha(a) {
        return a % 1 === 0
    }

    function ia(a, b) {
        var c = a[b];
        return function () {
            return c.apply(a, arguments)
        }
    }

    function ja(a, b, c) {
        var d, e, f, g, h, i = function () {
            var j = +new Date - g;
            b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), f = e = null))
        };
        return function () {
            f = this, e = arguments, g = +new Date;
            var j = c && !d;
            return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h
        }
    }

    function ka(c, d, e) {
        var f, g, h, i, j = c[0],
                k = 1 == c.length && "string" == typeof j;
        return b.isMoment(j) ? (i = b.apply(null, c), ma(j, i)) : U(j) || void 0 === j ? i = b.apply(null, c) : (f = !1, g = !1, k ? db.test(j) ? (j += "-01", c = [j], f = !0, g = !0) : (h = eb.exec(j)) && (f = !h[5], g = !0) : a.isArray(j) && (g = !0), i = d || f ? b.utc.apply(b, c) : b.apply(null, c), f ? (i._ambigTime = !0, i._ambigZone = !0) : e && (g ? i._ambigZone = !0 : k && (i.utcOffset ? i.utcOffset(j) : i.zone(j)))), i._fullCalendar = !0, i
    }

    function la(a, c) {
        var d, e, f = !1,
                g = !1,
                h = a.length,
                i = [];
        for (d = 0; h > d; d++)
            e = a[d], b.isMoment(e) || (e = Va.moment.parseZone(e)), f = f || e._ambigTime, g = g || e._ambigZone, i.push(e);
        for (d = 0; h > d; d++)
            e = i[d], c || !f || e._ambigTime ? g && !e._ambigZone && (i[d] = e.clone().stripZone()) : i[d] = e.clone().stripTime();
        return i
    }

    function ma(a, b) {
        a._ambigTime ? b._ambigTime = !0 : b._ambigTime && (b._ambigTime = !1), a._ambigZone ? b._ambigZone = !0 : b._ambigZone && (b._ambigZone = !1)
    }

    function na(a, b) {
        a.year(b[0] || 0).month(b[1] || 0).date(b[2] || 0).hours(b[3] || 0).minutes(b[4] || 0).seconds(b[5] || 0).milliseconds(b[6] || 0)
    }

    function oa(a, b) {
        return gb.format.call(a, b)
    }

    function pa(a, b) {
        return qa(a, va(b))
    }

    function qa(a, b) {
        var c, d = "";
        for (c = 0; c < b.length; c++)
            d += ra(a, b[c]);
        return d
    }

    function ra(a, b) {
        var c, d;
        return "string" == typeof b ? b : (c = b.token) ? hb[c] ? hb[c](a) : oa(a, c) : b.maybe && (d = qa(a, b.maybe), d.match(/[1-9]/)) ? d : ""
    }

    function sa(a, b, c, d, e) {
        var f;
        return a = Va.moment.parseZone(a), b = Va.moment.parseZone(b), f = (a.localeData || a.lang).call(a), c = f.longDateFormat(c) || c, d = d || " - ", ta(a, b, va(c), d, e)
    }

    function ta(a, b, c, d, e) {
        var f, g, h, i, j = a.clone().stripZone(),
                k = b.clone().stripZone(),
                l = "",
                m = "",
                n = "",
                o = "",
                p = "";
        for (g = 0; g < c.length && (f = ua(a, b, j, k, c[g]), f !== !1); g++)
            l += f;
        for (h = c.length - 1; h > g && (f = ua(a, b, j, k, c[h]), f !== !1); h--)
            m = f + m;
        for (i = g; h >= i; i++)
            n += ra(a, c[i]), o += ra(b, c[i]);
        return (n || o) && (p = e ? o + d + n : n + d + o), l + p + m
    }

    function ua(a, b, c, d, e) {
        var f, g;
        return "string" == typeof e ? e : (f = e.token) && (g = ib[f.charAt(0)], g && c.isSame(d, g)) ? oa(a, f) : !1
    }

    function va(a) {
        return a in jb ? jb[a] : jb[a] = wa(a)
    }

    function wa(a) {
        for (var b, c = [], d = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g; b = d.exec(a); )
            b[1] ? c.push(b[1]) : b[2] ? c.push({
                maybe: wa(b[2])
            }) : b[3] ? c.push({
                token: b[3]
            }) : b[5] && c.push(b[5]);
        return c
    }

    function xa() {}

    function ya(a, b) {
        var c;
        return $(b, "constructor") && (c = b.constructor), "function" != typeof c && (c = b.constructor = function () {
            a.apply(this, arguments)
        }), c.prototype = X(a.prototype), Y(b, c.prototype), Z(b, c.prototype), Y(a, c), c
    }

    function za(a, b) {
        Y(b, a.prototype)
    }

    function Aa(a, b) {
        return a || b ? a && b ? a.component === b.component && Ba(a, b) && Ba(b, a) : !1 : !0
    }

    function Ba(a, b) {
        for (var c in a)
            if (!/^(component|left|right|top|bottom)$/.test(c) && a[c] !== b[c])
                return !1;
        return !0
    }

    function Ca(a) {
        var b = Ea(a);
        return "background" === b || "inverse-background" === b
    }

    function Da(a) {
        return "inverse-background" === Ea(a)
    }

    function Ea(a) {
        return ba((a.source || {}).rendering, a.rendering)
    }

    function Fa(a) {
        var b, c, d = {};
        for (b = 0; b < a.length; b++)
            c = a[b], (d[c._id] || (d[c._id] = [])).push(c);
        return d
    }

    function Ga(a, b) {
        return a.start - b.start
    }

    function Ha(c) {
        var d, e, f, g, h = Va.dataAttrPrefix;
        return h && (h += "-"), d = c.data(h + "event") || null, d && (d = "object" == typeof d ? a.extend({}, d) : {}, e = d.start, null == e && (e = d.time), f = d.duration, g = d.stick, delete d.start, delete d.time, delete d.duration, delete d.stick), null == e && (e = c.data(h + "start")), null == e && (e = c.data(h + "time")), null == f && (f = c.data(h + "duration")), null == g && (g = c.data(h + "stick")), e = null != e ? b.duration(e) : null, f = null != f ? b.duration(f) : null, g = Boolean(g), {
            eventProps: d,
            startTime: e,
            duration: f,
            stick: g
        }
    }

    function Ia(a, b) {
        var c, d;
        for (c = 0; c < b.length; c++)
            if (d = b[c], d.leftCol <= a.rightCol && d.rightCol >= a.leftCol)
                return !0;
        return !1
    }

    function Ja(a, b) {
        return a.leftCol - b.leftCol
    }

    function Ka(a) {
        var b, c, d, e = [];
        for (b = 0; b < a.length; b++) {
            for (c = a[b], d = 0; d < e.length && Na(c, e[d]).length; d++)
                ;
            c.level = d, (e[d] || (e[d] = [])).push(c)
        }
        return e
    }

    function La(a) {
        var b, c, d, e, f;
        for (b = 0; b < a.length; b++)
            for (c = a[b], d = 0; d < c.length; d++)
                for (e = c[d], e.forwardSegs = [], f = b + 1; f < a.length; f++)
                    Na(e, a[f], e.forwardSegs)
    }

    function Ma(a) {
        var b, c, d = a.forwardSegs,
                e = 0;
        if (void 0 === a.forwardPressure) {
            for (b = 0; b < d.length; b++)
                c = d[b], Ma(c), e = Math.max(e, 1 + c.forwardPressure);
            a.forwardPressure = e
        }
    }

    function Na(a, b, c) {
        c = c || [];
        for (var d = 0; d < b.length; d++)
            Oa(a, b[d]) && c.push(b[d]);
        return c
    }

    function Oa(a, b) {
        return a.bottom > b.top && a.top < b.bottom
    }

    function Pa(c, d) {
        function e() {
            T ? h() && (k(), i()) : f()
        }

        function f() {
            U = O.theme ? "ui" : "fc", c.addClass("fc"), O.isRTL ? c.addClass("fc-rtl") : c.addClass("fc-ltr"), O.theme ? c.addClass("ui-widget") : c.addClass("fc-unthemed"), T = a("<div class='fc-view-container'/>").prependTo(c), R = N.header = new Sa(N, O), S = R.render(), S && c.prepend(S), i(O.defaultView), O.handleWindowResize && (Y = ja(m, O.windowResizeDelay), a(window).resize(Y))
        }

        function g() {
            V && V.removeElement(), R.removeElement(), T.remove(), c.removeClass("fc fc-ltr fc-rtl fc-unthemed ui-widget"), Y && a(window).unbind("resize", Y)
        }

        function h() {
            return c.is(":visible")
        }

        function i(b) {
            ca++, V && b && V.type !== b && (R.deactivateButton(V.type), H(), V.removeElement(), V = N.view = null), !V && b && (V = N.view = ba[b] || (ba[b] = N.instantiateView(b)), V.setElement(a("<div class='fc-view fc-" + b + "-view' />").appendTo(T)), R.activateButton(b)), V && (Z = V.massageCurrentDate(Z), V.displaying && Z.isWithin(V.intervalStart, V.intervalEnd) || h() && (V.display(Z), I(), u(), v(), q())), I(), ca--
        }

        function j(a) {
            return h() ? (a && l(), ca++, V.updateSize(!0), ca--, !0) : void 0
        }

        function k() {
            h() && l()
        }

        function l() {
            W = "number" == typeof O.contentHeight ? O.contentHeight : "number" == typeof O.height ? O.height - (S ? S.outerHeight(!0) : 0) : Math.round(T.width() / Math.max(O.aspectRatio, .5))
        }

        function m(a) {
            !ca && a.target === window && V.start && j(!0) && V.trigger("windowResize", aa)
        }

        function n() {
            p(), r()
        }

        function o() {
            h() && (H(), V.displayEvents(da), I())
        }

        function p() {
            H(), V.clearEvents(), I()
        }

        function q() {
            !O.lazyFetching || $(V.start, V.end) ? r() : o()
        }

        function r() {
            _(V.start, V.end)
        }

        function s(a) {
            da = a, o()
        }

        function t() {
            o()
        }

        function u() {
            R.updateTitle(V.title)
        }

        function v() {
            var a = N.getNow();
            a.isWithin(V.intervalStart, V.intervalEnd) ? R.disableButton("today") : R.enableButton("today")
        }

        function w(a, b) {
            V.select(N.buildSelectSpan.apply(N, arguments))
        }

        function x() {
            V && V.unselect()
        }

        function y() {
            Z = V.computePrevDate(Z), i()
        }

        function z() {
            Z = V.computeNextDate(Z), i()
        }

        function A() {
            Z.add(-1, "years"), i()
        }

        function B() {
            Z.add(1, "years"), i()
        }

        function C() {
            Z = N.getNow(), i()
        }

        function D(a) {
            Z = N.moment(a).stripZone(), i()
        }

        function E(a) {
            Z.add(b.duration(a)), i()
        }

        function F(a, b) {
            var c;
            b = b || "day", c = N.getViewSpec(b) || N.getUnitViewSpec(b), Z = a.clone(), i(c ? c.type : null)
        }

        function G() {
            return N.applyTimezone(Z)
        }

        function H() {
            T.css({
                width: "100%",
                height: T.height(),
                overflow: "hidden"
            })
        }

        function I() {
            T.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function J() {
            return N
        }

        function K() {
            return V
        }

        function L(a, b) {
            return void 0 === b ? O[a] : void("height" != a && "contentHeight" != a && "aspectRatio" != a || (O[a] = b, j(!0)))
        }

        function M(a, b) {
            var c = Array.prototype.slice.call(arguments, 2);
            return b = b || aa, this.triggerWith(a, b, c), O[a] ? O[a].apply(b, c) : void 0
        }
        var N = this;
        N.initOptions(d || {});
        var O = this.options;
        N.render = e, N.destroy = g, N.refetchEvents = n, N.reportEvents = s, N.reportEventChange = t, N.rerenderEvents = o, N.changeView = i, N.select = w, N.unselect = x, N.prev = y, N.next = z, N.prevYear = A, N.nextYear = B, N.today = C, N.gotoDate = D, N.incrementDate = E, N.zoomTo = F, N.getDate = G, N.getCalendar = J, N.getView = K, N.option = L, N.trigger = M;
        var P = X(Ra(O.lang));
        if (O.monthNames && (P._months = O.monthNames), O.monthNamesShort && (P._monthsShort = O.monthNamesShort), O.dayNames && (P._weekdays = O.dayNames), O.dayNamesShort && (P._weekdaysShort = O.dayNamesShort), null != O.firstDay) {
            var Q = X(P._week);
            Q.dow = O.firstDay, P._week = Q
        }
        P._fullCalendar_weekCalc = function (a) {
            return "function" == typeof a ? a : "local" === a ? a : "iso" === a || "ISO" === a ? "ISO" : void 0
        }(O.weekNumberCalculation), N.defaultAllDayEventDuration = b.duration(O.defaultAllDayEventDuration), N.defaultTimedEventDuration = b.duration(O.defaultTimedEventDuration), N.moment = function () {
            var a;
            return "local" === O.timezone ? (a = Va.moment.apply(null, arguments), a.hasTime() && a.local()) : a = "UTC" === O.timezone ? Va.moment.utc.apply(null, arguments) : Va.moment.parseZone.apply(null, arguments), "_locale" in a ? a._locale = P : a._lang = P, a
        }, N.getIsAmbigTimezone = function () {
            return "local" !== O.timezone && "UTC" !== O.timezone
        }, N.applyTimezone = function (a) {
            if (!a.hasTime())
                return a.clone();
            var b, c = N.moment(a.toArray()),
                    d = a.time() - c.time();
            return d && (b = c.clone().add(d), a.time() - b.time() === 0 && (c = b)), c
        }, N.getNow = function () {
            var a = O.now;
            return "function" == typeof a && (a = a()), N.moment(a).stripZone()
        }, N.getEventEnd = function (a) {
            return a.end ? a.end.clone() : N.getDefaultEventEnd(a.allDay, a.start)
        }, N.getDefaultEventEnd = function (a, b) {
            var c = b.clone();
            return a ? c.stripTime().add(N.defaultAllDayEventDuration) : c.add(N.defaultTimedEventDuration), N.getIsAmbigTimezone() && c.stripZone(), c
        }, N.humanizeDuration = function (a) {
            return (a.locale || a.lang).call(a, O.lang).humanize()
        }, Ta.call(N, O);
        var R, S, T, U, V, W, Y, Z, $ = N.isFetchNeeded,
                _ = N.fetchEvents,
                aa = c[0],
                ba = {},
                ca = 0,
                da = [];
        Z = null != O.defaultDate ? N.moment(O.defaultDate).stripZone() : N.getNow(), N.getSuggestedViewHeight = function () {
            return void 0 === W && k(), W
        }, N.isHeightAuto = function () {
            return "auto" === O.contentHeight || "auto" === O.height
        }, N.freezeContentHeight = H, N.unfreezeContentHeight = I, N.initialize()
    }

    function Qa(b) {
        a.each(Cb, function (a, c) {
            null == b[a] && (b[a] = c(b))
        })
    }

    function Ra(a) {
        var c = b.localeData || b.langData;
        return c.call(b, a) || c.call(b, "en")
    }

    function Sa(b, c) {
        function d() {
            var b = c.header;
            return n = c.theme ? "ui" : "fc", b ? o = a("<div class='fc-toolbar'/>").append(f("left")).append(f("right")).append(f("center")).append('<div class="fc-clear"/>') : void 0
        }

        function e() {
            o.remove(), o = a()
        }

        function f(d) {
            var e = a('<div class="fc-' + d + '"/>'),
                    f = c.header[d];
            return f && a.each(f.split(" "), function (d) {
                var f, g = a(),
                        h = !0;
                a.each(this.split(","), function (d, e) {
                    var f, i, j, k, l, m, o, q, r, s;
                    "title" == e ? (g = g.add(a("<h2>&nbsp;</h2>")), h = !1) : ((f = (b.options.customButtons || {})[e]) ? (j = function (a) {
                        f.click && f.click.call(s[0], a)
                    }, k = "", l = f.text) : (i = b.getViewSpec(e)) ? (j = function () {
                        b.changeView(e)
                    }, p.push(e), k = i.buttonTextOverride, l = i.buttonTextDefault) : b[e] && (j = function () {
                        b[e]()
                    }, k = (b.overrides.buttonText || {})[e], l = c.buttonText[e]), j && (m = f ? f.themeIcon : c.themeButtonIcons[e], o = f ? f.icon : c.buttonIcons[e], q = k ? ca(k) : m && c.theme ? "<span class='ui-icon ui-icon-" + m + "'></span>" : o && !c.theme ? "<span class='fc-icon fc-icon-" + o + "'></span>" : ca(l), r = ["fc-" + e + "-button", n + "-button", n + "-state-default"], s = a('<button type="button" class="' + r.join(" ") + '">' + q + "</button>").click(function (a) {
                        s.hasClass(n + "-state-disabled") || (j(a), (s.hasClass(n + "-state-active") || s.hasClass(n + "-state-disabled")) && s.removeClass(n + "-state-hover"))
                    }).mousedown(function () {
                        s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-down")
                    }).mouseup(function () {
                        s.removeClass(n + "-state-down")
                    }).hover(function () {
                        s.not("." + n + "-state-active").not("." + n + "-state-disabled").addClass(n + "-state-hover")
                    }, function () {
                        s.removeClass(n + "-state-hover").removeClass(n + "-state-down")
                    }), g = g.add(s)))
                }), h && g.first().addClass(n + "-corner-left").end().last().addClass(n + "-corner-right").end(), g.length > 1 ? (f = a("<div/>"), h && f.addClass("fc-button-group"), f.append(g), e.append(f)) : e.append(g)
            }), e
        }

        function g(a) {
            o.find("h2").text(a)
        }

        function h(a) {
            o.find(".fc-" + a + "-button").addClass(n + "-state-active")
        }

        function i(a) {
            o.find(".fc-" + a + "-button").removeClass(n + "-state-active")
        }

        function j(a) {
            o.find(".fc-" + a + "-button").attr("disabled", "disabled").addClass(n + "-state-disabled")
        }

        function k(a) {
            o.find(".fc-" + a + "-button").removeAttr("disabled").removeClass(n + "-state-disabled")
        }

        function l() {
            return p
        }
        var m = this;
        m.render = d, m.removeElement = e, m.updateTitle = g, m.activateButton = h, m.deactivateButton = i, m.disableButton = j, m.enableButton = k, m.getViewsWithButtons = l;
        var n, o = a(),
                p = []
    }

    function Ta(c) {
        function d(a, b) {
            return !I || I > a || b > J
        }

        function e(a, b) {
            I = a, J = b, S = [];
            var c = ++Q,
                    d = P.length;
            R = d;
            for (var e = 0; d > e; e++)
                f(P[e], c)
        }

        function f(b, c) {
            g(b, function (d) {
                var e, f, g, h = a.isArray(b.events);
                if (c == Q) {
                    if (d)
                        for (e = 0; e < d.length; e++)
                            f = d[e], g = h ? f : s(f, b), g && S.push.apply(S, w(g));
                    R--, R || K(S)
                }
            })
        }

        function g(b, d) {
            var e, f, h = Va.sourceFetchers;
            for (e = 0; e < h.length; e++) {
                if (f = h[e].call(H, b, I.clone(), J.clone(), c.timezone, d), f === !0)
                    return;
                if ("object" == typeof f)
                    return void g(f, d)
            }
            var i = b.events;
            if (i)
                a.isFunction(i) ? (H.pushLoading(), i.call(H, I.clone(), J.clone(), c.timezone, function (a) {
                    d(a), H.popLoading()
                })) : a.isArray(i) ? d(i) : d();
            else {
                var j = b.url;
                if (j) {
                    var k, l = b.success,
                            m = b.error,
                            n = b.complete;
                    k = a.isFunction(b.data) ? b.data() : b.data;
                    var o = a.extend({}, k || {}),
                            p = ba(b.startParam, c.startParam),
                            q = ba(b.endParam, c.endParam),
                            r = ba(b.timezoneParam, c.timezoneParam);
                    p && (o[p] = I.format()), q && (o[q] = J.format()), c.timezone && "local" != c.timezone && (o[r] = c.timezone), H.pushLoading(), a.ajax(a.extend({}, Db, b, {
                        data: o,
                        success: function (b) {
                            b = b || [];
                            var c = aa(l, this, arguments);
                            a.isArray(c) && (b = c), d(b)
                        },
                        error: function () {
                            aa(m, this, arguments), d()
                        },
                        complete: function () {
                            aa(n, this, arguments), H.popLoading()
                        }
                    }))
                } else
                    d()
            }
        }

        function h(a) {
            var b = i(a);
            b && (P.push(b), R++, f(b, Q))
        }

        function i(b) {
            var c, d, e = Va.sourceNormalizers;
            if (a.isFunction(b) || a.isArray(b) ? c = {
                events: b
            } : "string" == typeof b ? c = {
                url: b
            } : "object" == typeof b && (c = a.extend({}, b)), c) {
                for (c.className ? "string" == typeof c.className && (c.className = c.className.split(/\s+/)) : c.className = [], a.isArray(c.events) && (c.origArray = c.events, c.events = a.map(c.events, function (a) {
                    return s(a, c)
                })), d = 0; d < e.length; d++)
                    e[d].call(H, c);
                return c
            }
        }

        function j(b) {
            P = a.grep(P, function (a) {
                return !k(a, b)
            }), S = a.grep(S, function (a) {
                return !k(a.source, b)
            }), K(S)
        }

        function k(a, b) {
            return a && b && l(a) == l(b)
        }

        function l(a) {
            return ("object" == typeof a ? a.origArray || a.googleCalendarId || a.url || a.events : null) || a
        }

        function m(a) {
            a.start = H.moment(a.start), a.end ? a.end = H.moment(a.end) : a.end = null, x(a, n(a)), K(S)
        }

        function n(b) {
            var c = {};
            return a.each(b, function (a, b) {
                o(a) && void 0 !== b && _(b) && (c[a] = b)
            }), c
        }

        function o(a) {
            return !/^_|^(id|allDay|start|end)$/.test(a)
        }

        function p(a, b) {
            var c, d, e, f = s(a);
            if (f) {
                for (c = w(f), d = 0; d < c.length; d++)
                    e = c[d], e.source || (b && (O.events.push(e), e.source = O), S.push(e));
                return K(S), c
            }
            return []
        }

        function q(b) {
            var c, d;
            for (null == b ? b = function () {
                return !0
            } : a.isFunction(b) || (c = b + "", b = function (a) {
                return a._id == c
            }), S = a.grep(S, b, !0), d = 0; d < P.length; d++)
                a.isArray(P[d].events) && (P[d].events = a.grep(P[d].events, b, !0));
            K(S)
        }

        function r(b) {
            return a.isFunction(b) ? a.grep(S, b) : null != b ? (b += "", a.grep(S, function (a) {
                return a._id == b
            })) : S
        }

        function s(d, e) {
            var f, g, h, i = {};
            if (c.eventDataTransform && (d = c.eventDataTransform(d)), e && e.eventDataTransform && (d = e.eventDataTransform(d)), a.extend(i, d), e && (i.source = e), i._id = d._id || (void 0 === d.id ? "_fc" + Eb++ : d.id + ""), d.className ? "string" == typeof d.className ? i.className = d.className.split(/\s+/) : i.className = d.className : i.className = [], f = d.start || d.date, g = d.end, V(f) && (f = b.duration(f)), V(g) && (g = b.duration(g)), d.dow || b.isDuration(f) || b.isDuration(g))
                i.start = f ? b.duration(f) : null, i.end = g ? b.duration(g) : null, i._recurring = !0;
            else {
                if (f && (f = H.moment(f), !f.isValid()))
                    return !1;
                g && (g = H.moment(g), g.isValid() || (g = null)), h = d.allDay, void 0 === h && (h = ba(e ? e.allDayDefault : void 0, c.allDayDefault)), t(f, g, h, i)
            }
            return i
        }

        function t(a, b, c, d) {
            d.start = a, d.end = b, d.allDay = c, u(d), Ua(d)
        }

        function u(a) {
            v(a), a.end && !a.end.isAfter(a.start) && (a.end = null), a.end || (c.forceEventDuration ? a.end = H.getDefaultEventEnd(a.allDay, a.start) : a.end = null)
        }

        function v(a) {
            null == a.allDay && (a.allDay = !(a.start.hasTime() || a.end && a.end.hasTime())), a.allDay ? (a.start.stripTime(), a.end && a.end.stripTime()) : (a.start.hasTime() || (a.start = H.applyTimezone(a.start.time(0))), a.end && !a.end.hasTime() && (a.end = H.applyTimezone(a.end.time(0))))
        }

        function w(b, c, d) {
            var e, f, g, h, i, j, k, l, m, n = [];
            if (c = c || I, d = d || J, b)
                if (b._recurring) {
                    if (f = b.dow)
                        for (e = {}, g = 0; g < f.length; g++)
                            e[f[g]] = !0;
                    for (h = c.clone().stripTime(); h.isBefore(d); )
                        e && !e[h.day()] || (i = b.start, j = b.end, k = h.clone(), l = null, i && (k = k.time(i)), j && (l = h.clone().time(j)), m = a.extend({}, b), t(k, l, !i && !j, m), n.push(m)), h.add(1, "days")
                } else
                    n.push(b);
            return n
        }

        function x(b, c, d) {
            function e(a, b) {
                return d ? N(a, b, d) : c.allDay ? M(a, b) : L(a, b)
            }
            var f, g, h, i, j, k, l = {};
            return c = c || {}, c.start || (c.start = b.start.clone()), void 0 === c.end && (c.end = b.end ? b.end.clone() : null), null == c.allDay && (c.allDay = b.allDay), u(c), f = {
                start: b._start.clone(),
                end: b._end ? b._end.clone() : H.getDefaultEventEnd(b._allDay, b._start),
                allDay: c.allDay
            }, u(f), g = null !== b._end && null === c.end, h = e(c.start, f.start), c.end ? (i = e(c.end, f.end), j = i.subtract(h)) : j = null, a.each(c, function (a, b) {
                o(a) && void 0 !== b && (l[a] = b)
            }), k = y(r(b._id), g, c.allDay, h, j, l), {
                dateDelta: h,
                durationDelta: j,
                undo: k
            }
        }

        function y(b, c, d, e, f, g) {
            var h = H.getIsAmbigTimezone(),
                    i = [];
            return e && !e.valueOf() && (e = null), f && !f.valueOf() && (f = null), a.each(b, function (b, j) {
                var k, l;
                k = {
                    start: j.start.clone(),
                    end: j.end ? j.end.clone() : null,
                    allDay: j.allDay
                }, a.each(g, function (a) {
                    k[a] = j[a]
                }), l = {
                    start: j._start,
                    end: j._end,
                    allDay: d
                }, u(l), c ? l.end = null : f && !l.end && (l.end = H.getDefaultEventEnd(l.allDay, l.start)), e && (l.start.add(e), l.end && l.end.add(e)), f && l.end.add(f), h && !l.allDay && (e || f) && (l.start.stripZone(), l.end && l.end.stripZone()), a.extend(j, g, l), Ua(j), i.push(function () {
                    a.extend(j, k), Ua(j)
                })
            }),
                    function () {
                        for (var a = 0; a < i.length; a++)
                            i[a]()
                    }
        }

        function z(b) {
            var d, e = c.businessHours,
                    f = {
                        className: "fc-nonbusiness",
                        start: "09:00",
                        end: "17:00",
                        dow: [1, 2, 3, 4, 5],
                        rendering: "inverse-background"
                    },
            g = H.getView();
            return e && (d = a.extend({}, f, "object" == typeof e ? e : {})), d ? (b && (d.start = null, d.end = null), w(s(d), g.start, g.end)) : []
        }

        function A(a, b) {
            var d = b.source || {},
                    e = ba(b.constraint, d.constraint, c.eventConstraint),
                    f = ba(b.overlap, d.overlap, c.eventOverlap);
            return D(a, e, f, b)
        }

        function B(b, c, d) {
            var e, f;
            return d && (e = a.extend({}, d, c), f = w(s(e))[0]), f ? A(b, f) : C(b)
        }

        function C(a) {
            return D(a, c.selectConstraint, c.selectOverlap)
        }

        function D(a, b, c, d) {
            var e, f, g, h, i, j;
            if (null != b) {
                for (e = E(b), f = !1, h = 0; h < e.length; h++)
                    if (F(e[h], a)) {
                        f = !0;
                        break
                    }
                if (!f)
                    return !1
            }
            for (g = H.getPeerEvents(a, d), h = 0; h < g.length; h++)
                if (i = g[h], G(i, a)) {
                    if (c === !1)
                        return !1;
                    if ("function" == typeof c && !c(i, d))
                        return !1;
                    if (d) {
                        if (j = ba(i.overlap, (i.source || {}).overlap), j === !1)
                            return !1;
                        if ("function" == typeof j && !j(d, i))
                            return !1
                    }
                }
            return !0
        }

        function E(a) {
            return "businessHours" === a ? z() : "object" == typeof a ? w(s(a)) : r(a)
        }

        function F(a, b) {
            var c = a.start.clone().stripZone(),
                    d = H.getEventEnd(a).stripZone();
            return b.start >= c && b.end <= d
        }

        function G(a, b) {
            var c = a.start.clone().stripZone(),
                    d = H.getEventEnd(a).stripZone();
            return b.start < d && b.end > c
        }
        var H = this;
        H.isFetchNeeded = d, H.fetchEvents = e, H.addEventSource = h, H.removeEventSource = j, H.updateEvent = m, H.renderEvent = p, H.removeEvents = q, H.clientEvents = r, H.mutateEvent = x, H.normalizeEventDates = u, H.normalizeEventTimes = v;
        var I, J, K = H.reportEvents,
                O = {
                    events: []
                },
        P = [O],
                Q = 0,
                R = 0,
                S = [];
        a.each((c.events ? [c.events] : []).concat(c.eventSources || []), function (a, b) {
            var c = i(b);
            c && P.push(c)
        }), H.getBusinessHoursEvents = z, H.isEventSpanAllowed = A, H.isExternalSpanAllowed = B, H.isSelectionSpanAllowed = C, H.getEventCache = function () {
            return S
        }
    }

    function Ua(a) {
        a._allDay = a.allDay, a._start = a.start.clone(), a._end = a.end ? a.end.clone() : null
    }
    var Va = a.fullCalendar = {
        version: "2.7.2",
        internalApiVersion: 3
    },
    Wa = Va.views = {};
    a.fn.fullCalendar = function (b) {
        var c = Array.prototype.slice.call(arguments, 1),
                d = this;
        return this.each(function (e, f) {
            var g, h = a(f),
                    i = h.data("fullCalendar");
            "string" == typeof b ? i && a.isFunction(i[b]) && (g = i[b].apply(i, c), e || (d = g), "destroy" === b && h.removeData("fullCalendar")) : i || (i = new yb(h, b), h.data("fullCalendar", i), i.render())
        }), d
    };
    var Xa = ["header", "buttonText", "buttonIcons", "themeButtonIcons"];
    Va.intersectRanges = K, Va.applyAll = aa, Va.debounce = ja, Va.isInt = ha, Va.htmlEscape = ca, Va.cssToStr = ea, Va.proxy = ia, Va.capitaliseFirstLetter = fa, Va.getOuterRect = n, Va.getClientRect = o, Va.getContentRect = p, Va.getScrollbarWidths = q;
    var Ya = null;
    Va.preventDefault = z, Va.intersectRects = C, Va.parseFieldSpecs = G, Va.compareByFieldSpecs = H, Va.compareByFieldSpec = I, Va.flexibleCompare = J, Va.computeIntervalUnit = O, Va.divideRangeByDuration = Q, Va.divideDurationByDuration = R, Va.multiplyDuration = S, Va.durationHasTime = T;
    var Za = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
            $a = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    Va.log = function () {
        var a = window.console;
        return a && a.log ? a.log.apply(a, arguments) : void 0
    }, Va.warn = function () {
        var a = window.console;
        return a && a.warn ? a.warn.apply(a, arguments) : Va.log.apply(Va, arguments)
    };
    var _a, ab, bb, cb = {}.hasOwnProperty,
            db = /^\s*\d{4}-\d\d$/,
            eb = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
            fb = b.fn,
            gb = a.extend({}, fb);
    Va.moment = function () {
        return ka(arguments)
    }, Va.moment.utc = function () {
        var a = ka(arguments, !0);
        return a.hasTime() && a.utc(), a
    }, Va.moment.parseZone = function () {
        return ka(arguments, !0, !0)
    }, fb.clone = function () {
        var a = gb.clone.apply(this, arguments);
        return ma(this, a), this._fullCalendar && (a._fullCalendar = !0), a
    }, fb.week = fb.weeks = function (a) {
        var b = (this._locale || this._lang)._fullCalendar_weekCalc;
        return null == a && "function" == typeof b ? b(this) : "ISO" === b ? gb.isoWeek.apply(this, arguments) : gb.week.apply(this, arguments)
    }, fb.time = function (a) {
        if (!this._fullCalendar)
            return gb.time.apply(this, arguments);
        if (null == a)
            return b.duration({
                hours: this.hours(),
                minutes: this.minutes(),
                seconds: this.seconds(),
                milliseconds: this.milliseconds()
            });
        this._ambigTime = !1, b.isDuration(a) || b.isMoment(a) || (a = b.duration(a));
        var c = 0;
        return b.isDuration(a) && (c = 24 * Math.floor(a.asDays())), this.hours(c + a.hours()).minutes(a.minutes()).seconds(a.seconds()).milliseconds(a.milliseconds())
    }, fb.stripTime = function () {
        var a;
        return this._ambigTime || (a = this.toArray(), this.utc(), ab(this, a.slice(0, 3)), this._ambigTime = !0, this._ambigZone = !0), this
    }, fb.hasTime = function () {
        return !this._ambigTime
    }, fb.stripZone = function () {
        var a, b;
        return this._ambigZone || (a = this.toArray(), b = this._ambigTime, this.utc(), ab(this, a), this._ambigTime = b || !1, this._ambigZone = !0), this
    }, fb.hasZone = function () {
        return !this._ambigZone
    }, fb.local = function () {
        var a = this.toArray(),
                b = this._ambigZone;
        return gb.local.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, b && bb(this, a), this
    }, fb.utc = function () {
        return gb.utc.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, this
    }, a.each(["zone", "utcOffset"], function (a, b) {
        gb[b] && (fb[b] = function (a) {
            return null != a && (this._ambigTime = !1, this._ambigZone = !1), gb[b].apply(this, arguments)
        })
    }), fb.format = function () {
        return this._fullCalendar && arguments[0] ? pa(this, arguments[0]) : this._ambigTime ? oa(this, "YYYY-MM-DD") : this._ambigZone ? oa(this, "YYYY-MM-DD[T]HH:mm:ss") : gb.format.apply(this, arguments)
    }, fb.toISOString = function () {
        return this._ambigTime ? oa(this, "YYYY-MM-DD") : this._ambigZone ? oa(this, "YYYY-MM-DD[T]HH:mm:ss") : gb.toISOString.apply(this, arguments)
    }, fb.isWithin = function (a, b) {
        var c = la([this, a, b]);
        return c[0] >= c[1] && c[0] < c[2]
    }, fb.isSame = function (a, b) {
        var c;
        return this._fullCalendar ? b ? (c = la([this, a], !0), gb.isSame.call(c[0], c[1], b)) : (a = Va.moment.parseZone(a), gb.isSame.call(this, a) && Boolean(this._ambigTime) === Boolean(a._ambigTime) && Boolean(this._ambigZone) === Boolean(a._ambigZone)) : gb.isSame.apply(this, arguments)
    }, a.each(["isBefore", "isAfter"], function (a, b) {
        fb[b] = function (a, c) {
            var d;
            return this._fullCalendar ? (d = la([this, a]), gb[b].call(d[0], d[1], c)) : gb[b].apply(this, arguments)
        }
    }), _a = "_d" in b() && "updateOffset" in b, ab = _a ? function (a, c) {
        a._d.setTime(Date.UTC.apply(Date, c)), b.updateOffset(a, !1)
    } : na, bb = _a ? function (a, c) {
        a._d.setTime(+new Date(c[0] || 0, c[1] || 0, c[2] || 0, c[3] || 0, c[4] || 0, c[5] || 0, c[6] || 0)), b.updateOffset(a, !1)
    } : na;
    var hb = {
        t: function (a) {
            return oa(a, "a").charAt(0)
        },
        T: function (a) {
            return oa(a, "A").charAt(0)
        }
    };
    Va.formatRange = sa;
    var ib = {
        Y: "year",
        M: "month",
        D: "day",
        d: "day",
        A: "second",
        a: "second",
        T: "second",
        t: "second",
        H: "second",
        h: "second",
        m: "second",
        s: "second"
    },
    jb = {};
    Va.Class = xa, xa.extend = function () {
        var a, b, c = arguments.length;
        for (a = 0; c > a; a++)
            b = arguments[a], c - 1 > a && za(this, b);
        return ya(this, b || {})
    }, xa.mixin = function (a) {
        za(this, a)
    };
    var kb = Va.EmitterMixin = {
        callbackHash: null,
        on: function (a, b) {
            return this.loopCallbacks(a, "add", [b]), this
        },
        off: function (a, b) {
            return this.loopCallbacks(a, "remove", [b]), this
        },
        trigger: function (a) {
            var b = Array.prototype.slice.call(arguments, 1);
            return this.triggerWith(a, this, b), this
        },
        triggerWith: function (a, b, c) {
            return this.loopCallbacks(a, "fireWith", [b, c]), this
        },
        loopCallbacks: function (a, b, c) {
            var d, e, f, g = a.split(".");
            for (d = 0; d < g.length; d++)
                e = g[d], e && (f = this.ensureCallbackObj((d ? "." : "") + e), f[b].apply(f, c))
        },
        ensureCallbackObj: function (b) {
            return this.callbackHash || (this.callbackHash = {}), this.callbackHash[b] || (this.callbackHash[b] = a.Callbacks()), this.callbackHash[b]
        }
    },
    lb = Va.ListenerMixin = function () {
        var b = 0,
                c = {
                    listenerId: null,
                    listenTo: function (b, c, d) {
                        if ("object" == typeof c)
                            for (var e in c)
                                c.hasOwnProperty(e) && this.listenTo(b, e, c[e]);
                        else
                            "string" == typeof c && b.on(c + "." + this.getListenerNamespace(), a.proxy(d, this))
                    },
                    stopListeningTo: function (a, b) {
                        a.off((b || "") + "." + this.getListenerNamespace())
                    },
                    getListenerNamespace: function () {
                        return null == this.listenerId && (this.listenerId = b++), "_listener" + this.listenerId
                    }
                };
        return c
    }(),
            mb = {
                isIgnoringMouse: !1,
                delayUnignoreMouse: null,
                initMouseIgnoring: function (a) {
                    this.delayUnignoreMouse = ja(ia(this, "unignoreMouse"), a || 1e3)
                },
                tempIgnoreMouse: function () {
                    this.isIgnoringMouse = !0, this.delayUnignoreMouse()
                },
                unignoreMouse: function () {
                    this.isIgnoringMouse = !1
                }
            },
    nb = xa.extend(lb, {
        isHidden: !0,
        options: null,
        el: null,
        margin: 10,
        constructor: function (a) {
            this.options = a || {}
        },
        show: function () {
            this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
        },
        hide: function () {
            this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
        },
        render: function () {
            var b = this,
                    c = this.options;
            this.el = a('<div class="fc-popover"/>').addClass(c.className || "").css({
                top: 0,
                left: 0
            }).append(c.content).appendTo(c.parentEl), this.el.on("click", ".fc-close", function () {
                b.hide()
            }), c.autoHide && this.listenTo(a(document), "mousedown", this.documentMousedown)
        },
        documentMousedown: function (b) {
            this.el && !a(b.target).closest(this.el).length && this.hide()
        },
        removeElement: function () {
            this.hide(), this.el && (this.el.remove(), this.el = null), this.stopListeningTo(a(document), "mousedown")
        },
        position: function () {
            var b, c, d, e, f, g = this.options,
                    h = this.el.offsetParent().offset(),
                    i = this.el.outerWidth(),
                    j = this.el.outerHeight(),
                    k = a(window),
                    l = m(this.el);
            e = g.top || 0, f = void 0 !== g.left ? g.left : void 0 !== g.right ? g.right - i : 0, l.is(window) || l.is(document) ? (l = k, b = 0, c = 0) : (d = l.offset(), b = d.top, c = d.left), b += k.scrollTop(), c += k.scrollLeft(), g.viewportConstrain !== !1 && (e = Math.min(e, b + l.outerHeight() - j - this.margin), e = Math.max(e, b + this.margin), f = Math.min(f, c + l.outerWidth() - i - this.margin), f = Math.max(f, c + this.margin)), this.el.css({
                top: e - h.top,
                left: f - h.left
            })
        },
        trigger: function (a) {
            this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }),
            ob = Va.CoordCache = xa.extend({
                els: null,
                forcedOffsetParentEl: null,
                origin: null,
                boundingRect: null,
                isHorizontal: !1,
                isVertical: !1,
                lefts: null,
                rights: null,
                tops: null,
                bottoms: null,
                constructor: function (b) {
                    this.els = a(b.els), this.isHorizontal = b.isHorizontal, this.isVertical = b.isVertical, this.forcedOffsetParentEl = b.offsetParent ? a(b.offsetParent) : null
                },
                build: function () {
                    var a = this.forcedOffsetParentEl || this.els.eq(0).offsetParent();
                    this.origin = a.offset(), this.boundingRect = this.queryBoundingRect(), this.isHorizontal && this.buildElHorizontals(), this.isVertical && this.buildElVerticals()
                },
                clear: function () {
                    this.origin = null, this.boundingRect = null, this.lefts = null, this.rights = null, this.tops = null, this.bottoms = null
                },
                ensureBuilt: function () {
                    this.origin || this.build()
                },
                queryBoundingRect: function () {
                    var a = m(this.els.eq(0));
                    return a.is(document) ? void 0 : o(a)
                },
                buildElHorizontals: function () {
                    var b = [],
                            c = [];
                    this.els.each(function (d, e) {
                        var f = a(e),
                                g = f.offset().left,
                                h = f.outerWidth();
                        b.push(g), c.push(g + h)
                    }), this.lefts = b, this.rights = c
                },
                buildElVerticals: function () {
                    var b = [],
                            c = [];
                    this.els.each(function (d, e) {
                        var f = a(e),
                                g = f.offset().top,
                                h = f.outerHeight();
                        b.push(g), c.push(g + h)
                    }), this.tops = b, this.bottoms = c
                },
                getHorizontalIndex: function (a) {
                    this.ensureBuilt();
                    var b, c = this.boundingRect,
                            d = this.lefts,
                            e = this.rights,
                            f = d.length;
                    if (!c || a >= c.left && a < c.right)
                        for (b = 0; f > b; b++)
                            if (a >= d[b] && a < e[b])
                                return b
                },
                getVerticalIndex: function (a) {
                    this.ensureBuilt();
                    var b, c = this.boundingRect,
                            d = this.tops,
                            e = this.bottoms,
                            f = d.length;
                    if (!c || a >= c.top && a < c.bottom)
                        for (b = 0; f > b; b++)
                            if (a >= d[b] && a < e[b])
                                return b
                },
                getLeftOffset: function (a) {
                    return this.ensureBuilt(), this.lefts[a]
                },
                getLeftPosition: function (a) {
                    return this.ensureBuilt(), this.lefts[a] - this.origin.left
                },
                getRightOffset: function (a) {
                    return this.ensureBuilt(), this.rights[a]
                },
                getRightPosition: function (a) {
                    return this.ensureBuilt(), this.rights[a] - this.origin.left
                },
                getWidth: function (a) {
                    return this.ensureBuilt(), this.rights[a] - this.lefts[a]
                },
                getTopOffset: function (a) {
                    return this.ensureBuilt(), this.tops[a]
                },
                getTopPosition: function (a) {
                    return this.ensureBuilt(), this.tops[a] - this.origin.top
                },
                getBottomOffset: function (a) {
                    return this.ensureBuilt(), this.bottoms[a]
                },
                getBottomPosition: function (a) {
                    return this.ensureBuilt(), this.bottoms[a] - this.origin.top
                },
                getHeight: function (a) {
                    return this.ensureBuilt(), this.bottoms[a] - this.tops[a]
                }
            }),
            pb = Va.DragListener = xa.extend(lb, mb, {
                options: null,
                subjectEl: null,
                subjectHref: null,
                originX: null,
                originY: null,
                scrollEl: null,
                isInteracting: !1,
                isDistanceSurpassed: !1,
                isDelayEnded: !1,
                isDragging: !1,
                isTouch: !1,
                delay: null,
                delayTimeoutId: null,
                minDistance: null,
                handleTouchScrollProxy: null,
                constructor: function (a) {
                    this.options = a || {}, this.handleTouchScrollProxy = ia(this, "handleTouchScroll"), this.initMouseIgnoring(500)
                },
                startInteraction: function (b, c) {
                    var d = x(b);
                    if ("mousedown" === b.type) {
                        if (this.isIgnoringMouse)
                            return;
                        if (!u(b))
                            return;
                        b.preventDefault()
                    }
                    this.isInteracting || (c = c || {}, this.delay = ba(c.delay, this.options.delay, 0), this.minDistance = ba(c.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, this.isInteracting = !0, this.isTouch = d, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = v(b), this.originY = w(b), this.scrollEl = m(a(b.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(b), this.startDelay(b), this.minDistance || this.handleDistanceSurpassed(b))
                },
                handleInteractionStart: function (a) {
                    this.trigger("interactionStart", a)
                },
                endInteraction: function (a, b) {
                    this.isInteracting && (this.endDrag(a), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(a, b), this.isTouch && this.tempIgnoreMouse())
                },
                handleInteractionEnd: function (a, b) {
                    this.trigger("interactionEnd", a, b || !1)
                },
                bindHandlers: function () {
                    var b = this,
                            c = 1;
                    this.isTouch ? (this.listenTo(a(document), {
                        touchmove: this.handleTouchMove,
                        touchend: this.endInteraction,
                        touchcancel: this.endInteraction,
                        touchstart: function (a) {
                            c ? c-- : b.endInteraction(a, !0)
                        }
                    }), !A(this.handleTouchScrollProxy) && this.scrollEl && this.listenTo(this.scrollEl, "scroll", this.handleTouchScroll)) : this.listenTo(a(document), {
                        mousemove: this.handleMouseMove,
                        mouseup: this.endInteraction
                    }), this.listenTo(a(document), {
                        selectstart: z,
                        contextmenu: z
                    })
                },
                unbindHandlers: function () {
                    this.stopListeningTo(a(document)), B(this.handleTouchScrollProxy), this.scrollEl && this.stopListeningTo(this.scrollEl, "scroll")
                },
                /*startDrag: function (a, b) {
                    this.startInteraction(a, b), this.isDragging || (this.isDragging = !0, this.handleDragStart(a))
                },*/
                handleDragStart: function (a) {
                    this.trigger("dragStart", a), this.initHrefHack()
                },
                handleMove: function (a) {
                    var b, c = v(a) - this.originX,
                            d = w(a) - this.originY,
                            e = this.minDistance;
                    this.isDistanceSurpassed || (b = c * c + d * d, b >= e * e && this.handleDistanceSurpassed(a)), this.isDragging && this.handleDrag(c, d, a)
                },
                handleDrag: function (a, b, c) {
                    this.trigger("drag", a, b, c), this.updateAutoScroll(c)
                },
                endDrag: function (a) {
                    this.isDragging && (this.isDragging = !1, this.handleDragEnd(a))
                },
                handleDragEnd: function (a) {
                    this.trigger("dragEnd", a), this.destroyHrefHack()
                },
                startDelay: function (a) {
                    var b = this;
                    this.delay ? this.delayTimeoutId = setTimeout(function () {
                        b.handleDelayEnd(a)
                    }, this.delay) : this.handleDelayEnd(a)
                },
                handleDelayEnd: function (a) {
                    this.isDelayEnded = !0, this.isDistanceSurpassed && this.startDrag(a)
                },
                handleDistanceSurpassed: function (a) {
                    this.isDistanceSurpassed = !0, this.isDelayEnded && this.startDrag(a)
                },
                handleTouchMove: function (a) {
                    this.isDragging && a.preventDefault(), this.handleMove(a)
                },
                handleMouseMove: function (a) {
                    this.handleMove(a)
                },
                handleTouchScroll: function (a) {
                    this.isDragging || this.endInteraction(a, !0)
                },
                initHrefHack: function () {
                    var a = this.subjectEl;
                    (this.subjectHref = a ? a.attr("href") : null) && a.removeAttr("href")
                },
                destroyHrefHack: function () {
                    var a = this.subjectEl,
                            b = this.subjectHref;
                    setTimeout(function () {
                        b && a.attr("href", b)
                    }, 0)
                },
                trigger: function (a) {
                    this.options[a] && this.options[a].apply(this, Array.prototype.slice.call(arguments, 1)), this["_" + a] && this["_" + a].apply(this, Array.prototype.slice.call(arguments, 1))
                }
            });
    pb.mixin({
        isAutoScroll: !1,
        scrollBounds: null,
        scrollTopVel: null,
        scrollLeftVel: null,
        scrollIntervalId: null,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        initAutoScroll: function () {
            var a = this.scrollEl;
            this.isAutoScroll = this.options.scroll && a && !a.is(window) && !a.is(document), this.isAutoScroll && this.listenTo(a, "scroll", ja(this.handleDebouncedScroll, 100))
        },
        destroyAutoScroll: function () {
            this.endAutoScroll(), this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
        },
        computeScrollBounds: function () {
            this.isAutoScroll && (this.scrollBounds = n(this.scrollEl))
        },
        updateAutoScroll: function (a) {
            var b, c, d, e, f = this.scrollSensitivity,
                    g = this.scrollBounds,
                    h = 0,
                    i = 0;
            g && (b = (f - (w(a) - g.top)) / f, c = (f - (g.bottom - w(a))) / f, d = (f - (v(a) - g.left)) / f, e = (f - (g.right - v(a))) / f, b >= 0 && 1 >= b ? h = b * this.scrollSpeed * -1 : c >= 0 && 1 >= c && (h = c * this.scrollSpeed), d >= 0 && 1 >= d ? i = d * this.scrollSpeed * -1 : e >= 0 && 1 >= e && (i = e * this.scrollSpeed)), this.setScrollVel(h, i)
        },
        setScrollVel: function (a, b) {
            this.scrollTopVel = a, this.scrollLeftVel = b, this.constrainScrollVel(), !this.scrollTopVel && !this.scrollLeftVel || this.scrollIntervalId || (this.scrollIntervalId = setInterval(ia(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function () {
            var a = this.scrollEl;
            this.scrollTopVel < 0 ? a.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && a.scrollTop() + a[0].clientHeight >= a[0].scrollHeight && (this.scrollTopVel = 0), this.scrollLeftVel < 0 ? a.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && a.scrollLeft() + a[0].clientWidth >= a[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function () {
            var a = this.scrollEl,
                    b = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && a.scrollTop(a.scrollTop() + this.scrollTopVel * b), this.scrollLeftVel && a.scrollLeft(a.scrollLeft() + this.scrollLeftVel * b), this.constrainScrollVel(), this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
        },
        endAutoScroll: function () {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
        },
        handleDebouncedScroll: function () {
            this.scrollIntervalId || this.handleScrollEnd()
        },
        handleScrollEnd: function () {}
    });
    var qb = pb.extend({
        component: null,
        origHit: null,
        hit: null,
        coordAdjust: null,
        constructor: function (a, b) {
            pb.call(this, b), this.component = a
        },
        handleInteractionStart: function (a) {
            var b, c, d, e = this.subjectEl;
            this.computeCoords(), a ? (c = {
                left: v(a),
                top: w(a)
            }, d = c, e && (b = n(e), d = D(d, b)), this.origHit = this.queryHit(d.left, d.top), e && this.options.subjectCenter && (this.origHit && (b = C(this.origHit, b) || b), d = E(b)), this.coordAdjust = F(d, c)) : (this.origHit = null, this.coordAdjust = null), pb.prototype.handleInteractionStart.apply(this, arguments)
        },
        computeCoords: function () {
            this.component.prepareHits(), this.computeScrollBounds()
        },
        handleDragStart: function (a) {
            var b;
            pb.prototype.handleDragStart.apply(this, arguments), b = this.queryHit(v(a), w(a)), b && this.handleHitOver(b)
        },
        handleDrag: function (a, b, c) {
            var d;
            pb.prototype.handleDrag.apply(this, arguments), d = this.queryHit(v(c), w(c)), Aa(d, this.hit) || (this.hit && this.handleHitOut(), d && this.handleHitOver(d))
        },
        handleDragEnd: function () {
            this.handleHitDone(), pb.prototype.handleDragEnd.apply(this, arguments)
        },
        handleHitOver: function (a) {
            var b = Aa(a, this.origHit);
            this.hit = a, this.trigger("hitOver", this.hit, b, this.origHit)
        },
        handleHitOut: function () {
            this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
        },
        handleHitDone: function () {
            this.hit && this.trigger("hitDone", this.hit)
        },
        handleInteractionEnd: function () {
            pb.prototype.handleInteractionEnd.apply(this, arguments), this.origHit = null, this.hit = null, this.component.releaseHits()
        },
        handleScrollEnd: function () {
            pb.prototype.handleScrollEnd.apply(this, arguments), this.computeCoords()
        },
        queryHit: function (a, b) {
            return this.coordAdjust && (a += this.coordAdjust.left, b += this.coordAdjust.top), this.component.queryHit(a, b)
        }
    }),
            rb = xa.extend(lb, {
                options: null,
                sourceEl: null,
                el: null,
                parentEl: null,
                top0: null,
                left0: null,
                y0: null,
                x0: null,
                topDelta: null,
                leftDelta: null,
                isFollowing: !1,
                isHidden: !1,
                isAnimating: !1,
                constructor: function (b, c) {
                    this.options = c = c || {}, this.sourceEl = b, this.parentEl = c.parentEl ? a(c.parentEl) : b.parent()
                },
                start: function (b) {
                    this.isFollowing || (this.isFollowing = !0, this.y0 = w(b), this.x0 = v(b), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), x(b) ? this.listenTo(a(document), "touchmove", this.handleMove) : this.listenTo(a(document), "mousemove", this.handleMove))
                },
                stop: function (b, c) {
                    function d() {
                        this.isAnimating = !1, e.removeElement(), this.top0 = this.left0 = null, c && c()
                    }
                    var e = this,
                            f = this.options.revertDuration;
                    this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(a(document)), b && f && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                        top: this.top0,
                        left: this.left0
                    }, {
                        duration: f,
                        complete: d
                    })) : d())
                },
                getEl: function () {
                    var a = this.el;
                    return a || (this.sourceEl.width(), a = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                        position: "absolute",
                        visibility: "",
                        display: this.isHidden ? "none" : "",
                        margin: 0,
                        right: "auto",
                        bottom: "auto",
                        width: this.sourceEl.width(),
                        height: this.sourceEl.height(),
                        opacity: this.options.opacity || "",
                        zIndex: this.options.zIndex
                    }), a.addClass("fc-unselectable"), a.appendTo(this.parentEl)), a
                },
                removeElement: function () {
                    this.el && (this.el.remove(), this.el = null)
                },
                updatePosition: function () {
                    var a, b;
                    this.getEl(), null === this.top0 && (this.sourceEl.width(), a = this.sourceEl.offset(), b = this.el.offsetParent().offset(), this.top0 = a.top - b.top, this.left0 = a.left - b.left), this.el.css({
                        top: this.top0 + this.topDelta,
                        left: this.left0 + this.leftDelta
                    })
                },
                handleMove: function (a) {
                    this.topDelta = w(a) - this.y0, this.leftDelta = v(a) - this.x0, this.isHidden || this.updatePosition()
                },
                hide: function () {
                    this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
                },
                show: function () {
                    this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
                }
            }),
            sb = Va.Grid = xa.extend(lb, mb, {
                view: null,
                isRTL: null,
                start: null,
                end: null,
                el: null,
                elsByFill: null,
                eventTimeFormat: null,
                displayEventTime: null,
                displayEventEnd: null,
                minResizeDuration: null,
                largeUnit: null,
                dayDragListener: null,
                segDragListener: null,
                segResizeListener: null,
                externalDragListener: null,
                constructor: function (a) {
                    this.view = a, this.isRTL = a.opt("isRTL"), this.elsByFill = {}, this.dayDragListener = this.buildDayDragListener(), this.initMouseIgnoring()
                },
                computeEventTimeFormat: function () {
                    return this.view.opt("smallTimeFormat")
                },
                computeDisplayEventTime: function () {
                    return !0
                },
                computeDisplayEventEnd: function () {
                    return !0
                },
                setRange: function (a) {
                    this.start = a.start.clone(), this.end = a.end.clone(), this.rangeUpdated(), this.processRangeOptions()
                },
                rangeUpdated: function () {},
                processRangeOptions: function () {
                    var a, b, c = this.view;
                    this.eventTimeFormat = c.opt("eventTimeFormat") || c.opt("timeFormat") || this.computeEventTimeFormat(), a = c.opt("displayEventTime"), null == a && (a = this.computeDisplayEventTime()), b = c.opt("displayEventEnd"), null == b && (b = this.computeDisplayEventEnd()), this.displayEventTime = a, this.displayEventEnd = b
                },
                spanToSegs: function (a) {},
                diffDates: function (a, b) {
                    return this.largeUnit ? N(a, b, this.largeUnit) : L(a, b)
                },
                prepareHits: function () {},
                releaseHits: function () {},
                queryHit: function (a, b) {},
                getHitSpan: function (a) {},
                getHitEl: function (a) {},
                setElement: function (a) {
                    this.el = a, y(a), this.bindDayHandler("touchstart", this.dayTouchStart), this.bindDayHandler("mousedown", this.dayMousedown), this.bindSegHandlers(), this.bindGlobalHandlers()
                },
                bindDayHandler: function (b, c) {
                    var d = this;
                    this.el.on(b, function (b) {
                        return a(b.target).is(".fc-event-container *, .fc-more") || a(b.target).closest(".fc-popover").length ? void 0 : c.call(d, b)
                    })
                },
                removeElement: function () {
                    this.unbindGlobalHandlers(), this.clearDragListeners(), this.el.remove()
                },
                renderSkeleton: function () {},
                renderDates: function () {},
                unrenderDates: function () {},
                bindGlobalHandlers: function () {
                    this.listenTo(a(document), {
                        dragstart: this.externalDragStart,
                        sortstart: this.externalDragStart
                    })
                },
                unbindGlobalHandlers: function () {
                    this.stopListeningTo(a(document))
                },
                dayMousedown: function (a) {
                    this.isIgnoringMouse || this.dayDragListener.startInteraction(a, {})
                },
                dayTouchStart: function (a) {
                    var b = this.view;
                    (b.isSelected || b.selectedEvent) && this.tempIgnoreMouse(), this.dayDragListener.startInteraction(a, {
                        delay: this.view.opt("longPressDelay")
                    })
                },
                buildDayDragListener: function () {
                    var a, b, c = this,
                            d = this.view,
                            e = d.opt("selectable"),
                            f = new qb(this, {
                                scroll: d.opt("dragScroll"),
                                interactionStart: function () {
                                    a = f.origHit
                                },
                                dragStart: function () {
                                    d.unselect()
                                },
                                hitOver: function (d, f, h) {
                                    h && (f || (a = null), e && (b = c.computeSelection(c.getHitSpan(h), c.getHitSpan(d)), b ? c.renderSelection(b) : b === !1 && g()))
                                },
                                hitOut: function () {
                                    a = null, b = null, c.unrenderSelection(), h()
                                },
                                interactionEnd: function (e, f) {
                                    f || (a && !c.isIgnoringMouse && d.triggerDayClick(c.getHitSpan(a), c.getHitEl(a), e), b && d.reportSelection(b, e), h())
                                }
                            });
                    return f
                },
                clearDragListeners: function () {
                    this.dayDragListener.endInteraction(), this.segDragListener && this.segDragListener.endInteraction(), this.segResizeListener && this.segResizeListener.endInteraction(), this.externalDragListener && this.externalDragListener.endInteraction()
                },
                renderEventLocationHelper: function (a, b) {
                    var c = this.fabricateHelperEvent(a, b);
                    return this.renderHelper(c, b)
                },
                fabricateHelperEvent: function (a, b) {
                    var c = b ? X(b.event) : {};
                    return c.start = a.start.clone(), c.end = a.end ? a.end.clone() : null, c.allDay = null, this.view.calendar.normalizeEventDates(c), c.className = (c.className || []).concat("fc-helper"), b || (c.editable = !1), c
                },
                renderHelper: function (a, b) {},
                unrenderHelper: function () {},
                renderSelection: function (a) {
                    this.renderHighlight(a)
                },
                unrenderSelection: function () {
                    this.unrenderHighlight()
                },
                computeSelection: function (a, b) {
                    var c = this.computeSelectionSpan(a, b);
                    return c && !this.view.calendar.isSelectionSpanAllowed(c) ? !1 : c
                },
                computeSelectionSpan: function (a, b) {
                    var c = [a.start, a.end, b.start, b.end];
                    return c.sort(ga), {
                        start: c[0].clone(),
                        end: c[3].clone()
                    }
                },
                renderHighlight: function (a) {
                    this.renderFill("highlight", this.spanToSegs(a))
                },
                unrenderHighlight: function () {
                    this.unrenderFill("highlight")
                },
                highlightSegClasses: function () {
                    return ["fc-highlight"]
                },
                renderBusinessHours: function () {},
                unrenderBusinessHours: function () {},
                getNowIndicatorUnit: function () {},
                renderNowIndicator: function (a) {},
                unrenderNowIndicator: function () {},
                renderFill: function (a, b) {},
                unrenderFill: function (a) {
                    var b = this.elsByFill[a];
                    b && (b.remove(), delete this.elsByFill[a])
                },
                renderFillSegEls: function (b, c) {
                    var d, e = this,
                            f = this[b + "SegEl"],
                            g = "",
                            h = [];
                    if (c.length) {
                        for (d = 0; d < c.length; d++)
                            g += this.fillSegHtml(b, c[d]);
                        a(g).each(function (b, d) {
                            var g = c[b],
                                    i = a(d);
                            f && (i = f.call(e, g, i)), i && (i = a(i), i.is(e.fillSegTag) && (g.el = i, h.push(g)))
                        })
                    }
                    return h
                },
                fillSegTag: "div",
                fillSegHtml: function (a, b) {
                    var c = this[a + "SegClasses"],
                            d = this[a + "SegCss"],
                            e = c ? c.call(this, b) : [],
                            f = ea(d ? d.call(this, b) : {});
                    return "<" + this.fillSegTag + (e.length ? ' class="' + e.join(" ") + '"' : "") + (f ? ' style="' + f + '"' : "") + " />"
                },
                getDayClasses: function (a) {
                    var b = this.view,
                            c = b.calendar.getNow(),
                            d = ["fc-" + Za[a.day()]];
                    return 1 == b.intervalDuration.as("months") && a.month() != b.intervalStart.month() && d.push("fc-other-month"), a.isSame(c, "day") ? d.push("fc-today", b.highlightStateClass) : c > a ? d.push("fc-past") : d.push("fc-future"), d
                }
            });
    sb.mixin({
        mousedOverSeg: null,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        isDraggingExternal: !1,
        segs: null,
        renderEvents: function (a) {
            var b, c = [],
                    d = [];
            for (b = 0; b < a.length; b++)
                (Ca(a[b]) ? c : d).push(a[b]);
            this.segs = [].concat(this.renderBgEvents(c), this.renderFgEvents(d))
        },
        renderBgEvents: function (a) {
            var b = this.eventsToSegs(a);
            return this.renderBgSegs(b) || b
        },
        renderFgEvents: function (a) {
            var b = this.eventsToSegs(a);
            return this.renderFgSegs(b) || b
        },
        unrenderEvents: function () {
            this.handleSegMouseout(), this.clearDragListeners(), this.unrenderFgSegs(), this.unrenderBgSegs(), this.segs = null
        },
        getEventSegs: function () {
            return this.segs || []
        },
        renderFgSegs: function (a) {},
        unrenderFgSegs: function () {},
        renderFgSegEls: function (b, c) {
            var d, e = this.view,
                    f = "",
                    g = [];
            if (b.length) {
                for (d = 0; d < b.length; d++)
                    f += this.fgSegHtml(b[d], c);
                a(f).each(function (c, d) {
                    var f = b[c],
                            h = e.resolveEventEl(f.event, a(d));
                    h && (h.data("fc-seg", f), f.el = h, g.push(f))
                })
            }
            return g
        },
        fgSegHtml: function (a, b) {},
        renderBgSegs: function (a) {
            return this.renderFill("bgEvent", a)
        },
        unrenderBgSegs: function () {
            this.unrenderFill("bgEvent")
        },
        bgEventSegEl: function (a, b) {
            return this.view.resolveEventEl(a.event, b)
        },
        bgEventSegClasses: function (a) {
            var b = a.event,
                    c = b.source || {};
            return ["fc-bgevent"].concat(b.className, c.className || [])
        },
        bgEventSegCss: function (a) {
            return {
                "background-color": this.getSegSkinCss(a)["background-color"]
            }
        },
        businessHoursSegClasses: function (a) {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        bindSegHandlers: function () {
            this.bindSegHandler("touchstart", this.handleSegTouchStart), this.bindSegHandler("touchend", this.handleSegTouchEnd), this.bindSegHandler("mouseenter", this.handleSegMouseover), this.bindSegHandler("mouseleave", this.handleSegMouseout), this.bindSegHandler("mousedown", this.handleSegMousedown), this.bindSegHandler("click", this.handleSegClick)
        },
        bindSegHandler: function (b, c) {
            var d = this;
            this.el.on(b, ".fc-event-container > *", function (b) {
                var e = a(this).data("fc-seg");
                return !e || d.isDraggingSeg || d.isResizingSeg ? void 0 : c.call(d, e, b)
            })
        },
        handleSegClick: function (a, b) {
            return this.view.trigger("eventClick", a.el[0], a.event, b)
        },
        handleSegMouseover: function (a, b) {
            this.isIgnoringMouse || this.mousedOverSeg || (this.mousedOverSeg = a, a.el.addClass("fc-allow-mouse-resize"), this.view.trigger("eventMouseover", a.el[0], a.event, b))
        },
        handleSegMouseout: function (a, b) {
            b = b || {}, this.mousedOverSeg && (a = a || this.mousedOverSeg, this.mousedOverSeg = null, a.el.removeClass("fc-allow-mouse-resize"), this.view.trigger("eventMouseout", a.el[0], a.event, b))
        },
        handleSegMousedown: function (a, b) {
            var c = this.startSegResize(a, b, {
                distance: 5
            });
            !c && this.view.isEventDraggable(a.event) && this.buildSegDragListener(a).startInteraction(b, {
                distance: 5
            })
        },
        handleSegTouchStart: function (a, b) {
            var c, d = this.view,
                    e = a.event,
                    f = d.isEventSelected(e),
                    g = d.isEventDraggable(e),
                    h = d.isEventResizable(e),
                    i = !1;
            f && h && (i = this.startSegResize(a, b)), i || !g && !h || (c = g ? this.buildSegDragListener(a) : this.buildSegSelectListener(a), c.startInteraction(b, {
                delay: f ? 0 : this.view.opt("longPressDelay")
            })), this.tempIgnoreMouse()
        },
        handleSegTouchEnd: function (a, b) {
            this.tempIgnoreMouse()
        },
        startSegResize: function (b, c, d) {
            return a(c.target).is(".fc-resizer") ? (this.buildSegResizeListener(b, a(c.target).is(".fc-start-resizer")).startInteraction(c, d), !0) : !1
        },
        buildSegDragListener: function (a) {
            var b, c, d, e = this,
                    f = this.view,
                    i = f.calendar,
                    j = a.el,
                    k = a.event;
            if (this.segDragListener)
                return this.segDragListener;
            var l = this.segDragListener = new qb(f, {
                scroll: f.opt("dragScroll"),
                subjectEl: j,
                subjectCenter: !0,
                interactionStart: function (d) {
                    b = !1, c = new rb(a.el, {
                        additionalClass: "fc-dragging",
                        parentEl: f.el,
                        opacity: l.isTouch ? null : f.opt("dragOpacity"),
                        revertDuration: f.opt("dragRevertDuration"),
                        zIndex: 2
                    }), c.hide(), c.start(d)
                },
                dragStart: function (c) {
                    l.isTouch && !f.isEventSelected(k) && f.selectEvent(k), b = !0, e.handleSegMouseout(a, c), e.segDragStart(a, c), f.hideEvent(k)
                },
                hitOver: function (b, h, j) {
                    var m;
                    a.hit && (j = a.hit), d = e.computeEventDrop(j.component.getHitSpan(j), b.component.getHitSpan(b), k), d && !i.isEventSpanAllowed(e.eventToSpan(d), k) && (g(), d = null), d && (m = f.renderDrag(d, a)) ? (m.addClass("fc-dragging"), l.isTouch || e.applyDragOpacity(m), c.hide()) : c.show(), h && (d = null)
                },
                hitOut: function () {
                    f.unrenderDrag(), c.show(), d = null
                },
                hitDone: function () {
                    h()
                },
                interactionEnd: function (g) {
                    c.stop(!d, function () {
                        b && (f.unrenderDrag(), f.showEvent(k), e.segDragStop(a, g)), d && f.reportEventDrop(k, d, this.largeUnit, j, g)
                    }), e.segDragListener = null
                }
            });
            return l
        },
        buildSegSelectListener: function (a) {
            var b = this,
                    c = this.view,
                    d = a.event;
            if (this.segDragListener)
                return this.segDragListener;
            var e = this.segDragListener = new pb({
                dragStart: function (a) {
                    e.isTouch && !c.isEventSelected(d) && c.selectEvent(d)
                },
                interactionEnd: function (a) {
                    b.segDragListener = null
                }
            });
            return e
        },
        segDragStart: function (a, b) {
            this.isDraggingSeg = !0, this.view.trigger("eventDragStart", a.el[0], a.event, b, {})
        },
        segDragStop: function (a, b) {
            this.isDraggingSeg = !1, this.view.trigger("eventDragStop", a.el[0], a.event, b, {})
        },
        computeEventDrop: function (a, b, c) {
            var d, e, f = this.view.calendar,
                    g = a.start,
                    h = b.start;
            return g.hasTime() === h.hasTime() ? (d = this.diffDates(h, g), c.allDay && T(d) ? (e = {
                start: c.start.clone(),
                end: f.getEventEnd(c),
                allDay: !1
            }, f.normalizeEventTimes(e)) : e = {
                start: c.start.clone(),
                end: c.end ? c.end.clone() : null,
                allDay: c.allDay
            }, e.start.add(d), e.end && e.end.add(d)) : e = {
                start: h.clone(),
                end: null,
                allDay: !h.hasTime()
            }, e
        },
        applyDragOpacity: function (a) {
            var b = this.view.opt("dragOpacity");
            null != b && a.each(function (a, c) {
                c.style.opacity = b
            })
        },
        externalDragStart: function (b, c) {
            var d, e, f = this.view;
            f.opt("droppable") && (d = a((c ? c.item : null) || b.target), e = f.opt("dropAccept"), (a.isFunction(e) ? e.call(d[0], d) : d.is(e)) && (this.isDraggingExternal || this.listenToExternalDrag(d, b, c)))
        },
        listenToExternalDrag: function (a, b, c) {
            var d, e = this,
                    f = this.view.calendar,
                    i = Ha(a),
                    j = e.externalDragListener = new qb(this, {
                        interactionStart: function () {
                            e.isDraggingExternal = !0
                        },
                        hitOver: function (a) {
                            d = e.computeExternalDrop(a.component.getHitSpan(a), i), d && !f.isExternalSpanAllowed(e.eventToSpan(d), d, i.eventProps) && (g(), d = null), d && e.renderDrag(d)
                        },
                        hitOut: function () {
                            d = null
                        },
                        hitDone: function () {
                            h(), e.unrenderDrag()
                        },
                        interactionEnd: function (b) {
                            d && e.view.reportExternalDrop(i, d, a, b, c), e.isDraggingExternal = !1, e.externalDragListener = null
                        }
                    });
            j.startDrag(b)
        },
        computeExternalDrop: function (a, b) {
            var c = this.view.calendar,
                    d = {
                        start: c.applyTimezone(a.start),
                        end: null
                    };
            return b.startTime && !d.start.hasTime() && d.start.time(b.startTime), b.duration && (d.end = d.start.clone().add(b.duration)), d
        },
        renderDrag: function (a, b) {},
        unrenderDrag: function () {},
        buildSegResizeListener: function (a, b) {
            var c, d, e = this,
                    f = this.view,
                    i = f.calendar,
                    j = a.el,
                    k = a.event,
                    l = i.getEventEnd(k),
                    m = this.segResizeListener = new qb(this, {
                        scroll: f.opt("dragScroll"),
                        subjectEl: j,
                        interactionStart: function () {
                            c = !1
                        },
                        dragStart: function (b) {
                            c = !0, e.handleSegMouseout(a, b), e.segResizeStart(a, b)
                        },
                        hitOver: function (c, h, j) {
                            var m = e.getHitSpan(j),
                                    n = e.getHitSpan(c);
                            d = b ? e.computeEventStartResize(m, n, k) : e.computeEventEndResize(m, n, k), d && (i.isEventSpanAllowed(e.eventToSpan(d), k) ? d.start.isSame(k.start) && d.end.isSame(l) && (d = null) : (g(), d = null)), d && (f.hideEvent(k), e.renderEventResize(d, a))
                        },
                        hitOut: function () {
                            d = null
                        },
                        hitDone: function () {
                            e.unrenderEventResize(), f.showEvent(k), h()
                        },
                        interactionEnd: function (b) {
                            c && e.segResizeStop(a, b), d && f.reportEventResize(k, d, this.largeUnit, j, b), e.segResizeListener = null
                        }
                    });
            return m
        },
        segResizeStart: function (a, b) {
            this.isResizingSeg = !0, this.view.trigger("eventResizeStart", a.el[0], a.event, b, {})
        },
        segResizeStop: function (a, b) {
            this.isResizingSeg = !1, this.view.trigger("eventResizeStop", a.el[0], a.event, b, {})
        },
        computeEventStartResize: function (a, b, c) {
            return this.computeEventResize("start", a, b, c)
        },
        computeEventEndResize: function (a, b, c) {
            return this.computeEventResize("end", a, b, c)
        },
        computeEventResize: function (a, b, c, d) {
            var e, f, g = this.view.calendar,
                    h = this.diffDates(c[a], b[a]);
            return e = {
                start: d.start.clone(),
                end: g.getEventEnd(d),
                allDay: d.allDay
            }, e.allDay && T(h) && (e.allDay = !1, g.normalizeEventTimes(e)), e[a].add(h), e.start.isBefore(e.end) || (f = this.minResizeDuration || (d.allDay ? g.defaultAllDayEventDuration : g.defaultTimedEventDuration), "start" == a ? e.start = e.end.clone().subtract(f) : e.end = e.start.clone().add(f)), e
        },
        renderEventResize: function (a, b) {},
        unrenderEventResize: function () {},
        getEventTimeText: function (a, b, c) {
            return null == b && (b = this.eventTimeFormat), null == c && (c = this.displayEventEnd), this.displayEventTime && a.start.hasTime() ? c && a.end ? this.view.formatRange(a, b) : a.start.format(b) : ""
        },
        getSegClasses: function (a, b, c) {
            var d = this.view,
                    e = a.event,
                    f = ["fc-event", a.isStart ? "fc-start" : "fc-not-start", a.isEnd ? "fc-end" : "fc-not-end"].concat(e.className, e.source ? e.source.className : []);
            return b && f.push("fc-draggable"), c && f.push("fc-resizable"), d.isEventSelected(e) && f.push("fc-selected"), f
        },
        getSegSkinCss: function (a) {
            var b = a.event,
                    c = this.view,
                    d = b.source || {},
                    e = b.color,
                    f = d.color,
                    g = c.opt("eventColor");
            return {
                "background-color": b.backgroundColor || e || d.backgroundColor || f || c.opt("eventBackgroundColor") || g,
                "border-color": b.borderColor || e || d.borderColor || f || c.opt("eventBorderColor") || g,
                color: b.textColor || d.textColor || c.opt("eventTextColor")
            }
        },
        eventToSegs: function (a) {
            return this.eventsToSegs([a])
        },
        eventToSpan: function (a) {
            return this.eventToSpans(a)[0]
        },
        eventToSpans: function (a) {
            var b = this.eventToRange(a);
            return this.eventRangeToSpans(b, a)
        },
        eventsToSegs: function (b, c) {
            var d = this,
                    e = Fa(b),
                    f = [];
            return a.each(e, function (a, b) {
                var e, g = [];
                for (e = 0; e < b.length; e++)
                    g.push(d.eventToRange(b[e]));
                if (Da(b[0]))
                    for (g = d.invertRanges(g), e = 0; e < g.length; e++)
                        f.push.apply(f, d.eventRangeToSegs(g[e], b[0], c));
                else
                    for (e = 0; e < g.length; e++)
                        f.push.apply(f, d.eventRangeToSegs(g[e], b[e], c))
            }), f
        },
        eventToRange: function (a) {
            return {
                start: a.start.clone().stripZone(),
                end: (a.end ? a.end.clone() : this.view.calendar.getDefaultEventEnd(null != a.allDay ? a.allDay : !a.start.hasTime(), a.start)).stripZone()
            }
        },
        eventRangeToSegs: function (a, b, c) {
            var d, e = this.eventRangeToSpans(a, b),
                    f = [];
            for (d = 0; d < e.length; d++)
                f.push.apply(f, this.eventSpanToSegs(e[d], b, c));
            return f
        },
        eventRangeToSpans: function (b, c) {
            return [a.extend({}, b)]
        },
        eventSpanToSegs: function (a, b, c) {
            var d, e, f = c ? c(a) : this.spanToSegs(a);
            for (d = 0; d < f.length; d++)
                e = f[d], e.event = b, e.eventStartMS = +a.start, e.eventDurationMS = a.end - a.start;
            return f
        },
        invertRanges: function (a) {
            var b, c, d = this.view,
                    e = d.start.clone(),
                    f = d.end.clone(),
                    g = [],
                    h = e;
            for (a.sort(Ga), b = 0; b < a.length; b++)
                c = a[b], c.start > h && g.push({
                    start: h,
                    end: c.start
                }), h = c.end;
            return f > h && g.push({
                start: h,
                end: f
            }), g
        },
        sortEventSegs: function (a) {
            a.sort(ia(this, "compareEventSegs"))
        },
        compareEventSegs: function (a, b) {
            return a.eventStartMS - b.eventStartMS || b.eventDurationMS - a.eventDurationMS || b.event.allDay - a.event.allDay || H(a.event, b.event, this.view.eventOrderSpecs)
        }
    }), Va.isBgEvent = Ca, Va.dataAttrPrefix = "";
    var tb = Va.DayTableMixin = {
        breakOnWeeks: !1,
        dayDates: null,
        dayIndices: null,
        daysPerRow: null,
        rowCnt: null,
        colCnt: null,
        colHeadFormat: null,
        updateDayTable: function () {
            for (var a, b, c, d = this.view, e = this.start.clone(), f = -1, g = [], h = []; e.isBefore(this.end); )
                d.isHiddenDay(e) ? g.push(f + .5) : (f++, g.push(f), h.push(e.clone())), e.add(1, "days");
            if (this.breakOnWeeks) {
                for (b = h[0].day(), a = 1; a < h.length && h[a].day() != b; a++)
                    ;
                c = Math.ceil(h.length / a)
            } else
                c = 1, a = h.length;
            this.dayDates = h, this.dayIndices = g, this.daysPerRow = a, this.rowCnt = c, this.updateDayTableCols()
        },
        updateDayTableCols: function () {
            this.colCnt = this.computeColCnt(), this.colHeadFormat = this.view.opt("columnFormat") || this.computeColHeadFormat()
        },
        computeColCnt: function () {
            return this.daysPerRow
        },
        getCellDate: function (a, b) {
            return this.dayDates[this.getCellDayIndex(a, b)].clone()
        },
        getCellRange: function (a, b) {
            var c = this.getCellDate(a, b),
                    d = c.clone().add(1, "days");
            return {
                start: c,
                end: d
            }
        },
        getCellDayIndex: function (a, b) {
            return a * this.daysPerRow + this.getColDayIndex(b)
        },
        getColDayIndex: function (a) {
            return this.isRTL ? this.colCnt - 1 - a : a
        },
        getDateDayIndex: function (a) {
            var b = this.dayIndices,
                    c = a.diff(this.start, "days");
            return 0 > c ? b[0] - 1 : c >= b.length ? b[b.length - 1] + 1 : b[c]
        },
        computeColHeadFormat: function () {
            return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
        },
        sliceRangeByRow: function (a) {
            var b, c, d, e, f, g = this.daysPerRow,
                    h = this.view.computeDayRange(a),
                    i = this.getDateDayIndex(h.start),
                    j = this.getDateDayIndex(h.end.clone().subtract(1, "days")),
                    k = [];
            for (b = 0; b < this.rowCnt; b++)
                c = b * g, d = c + g - 1, e = Math.max(i, c), f = Math.min(j, d), e = Math.ceil(e), f = Math.floor(f), f >= e && k.push({
                    row: b,
                    firstRowDayIndex: e - c,
                    lastRowDayIndex: f - c,
                    isStart: e === i,
                    isEnd: f === j
                });
            return k
        },
        sliceRangeByDay: function (a) {
            var b, c, d, e, f, g, h = this.daysPerRow,
                    i = this.view.computeDayRange(a),
                    j = this.getDateDayIndex(i.start),
                    k = this.getDateDayIndex(i.end.clone().subtract(1, "days")),
                    l = [];
            for (b = 0; b < this.rowCnt; b++)
                for (c = b * h, d = c + h - 1, e = c; d >= e; e++)
                    f = Math.max(j, e), g = Math.min(k, e), f = Math.ceil(f), g = Math.floor(g), g >= f && l.push({
                        row: b,
                        firstRowDayIndex: f - c,
                        lastRowDayIndex: g - c,
                        isStart: f === j,
                        isEnd: g === k
                    });
            return l
        },
        renderHeadHtml: function () {
            var a = this.view;
            return '<div class="fc-row ' + a.widgetHeaderClass + '"><table><thead>' + this.renderHeadTrHtml() + "</thead></table></div>"
        },
        renderHeadIntroHtml: function () {
            return this.renderIntroHtml()
        },
        renderHeadTrHtml: function () {
            return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "</tr>"
        },
        renderHeadDateCellsHtml: function () {
            var a, b, c = [];
            for (a = 0; a < this.colCnt; a++)
                b = this.getCellDate(0, a), c.push(this.renderHeadDateCellHtml(b));
            return c.join("")
        },
        renderHeadDateCellHtml: function (a, b, c) {
            var d = this.view;
            return '<th class="fc-day-header ' + d.widgetHeaderClass + " fc-" + Za[a.day()] + '"' + (1 == this.rowCnt ? ' data-date="' + a.format("YYYY-MM-DD") + '"' : "") + (b > 1 ? ' colspan="' + b + '"' : "") + (c ? " " + c : "") + ">" + ca(a.format(this.colHeadFormat)) + "</th>";
        },
        renderBgTrHtml: function (a) {
            return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(a)) + this.renderBgCellsHtml(a) + (this.isRTL ? this.renderBgIntroHtml(a) : "") + "</tr>"
        },
        renderBgIntroHtml: function (a) {
            return this.renderIntroHtml()
        },
        renderBgCellsHtml: function (a) {
            var b, c, d = [];
            for (b = 0; b < this.colCnt; b++)
                c = this.getCellDate(a, b), d.push(this.renderBgCellHtml(c));
            return d.join("")
        },
        renderBgCellHtml: function (a, b) {
            var c = this.view,
                    d = this.getDayClasses(a);
            return d.unshift("fc-day", c.widgetContentClass), '<td class="' + d.join(" ") + '" data-date="' + a.format("YYYY-MM-DD") + '"' + (b ? " " + b : "") + "></td>"
        },
        renderIntroHtml: function () {},
        bookendCells: function (a) {
            var b = this.renderIntroHtml();
            b && (this.isRTL ? a.append(b) : a.prepend(b))
        }
    },
    ub = Va.DayGrid = sb.extend(tb, {
        numbersVisible: !1,
        bottomCoordPadding: 0,
        rowEls: null,
        cellEls: null,
        helperEls: null,
        rowCoordCache: null,
        colCoordCache: null,
        renderDates: function (a) {
            var b, c, d = this.view,
                    e = this.rowCnt,
                    f = this.colCnt,
                    g = "";
            for (b = 0; e > b; b++)
                g += this.renderDayRowHtml(b, a);
            for (this.el.html(g), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day"), this.rowCoordCache = new ob({
            els: this.rowEls,
                    isVertical: !0
            }), this.colCoordCache = new ob({
            els: this.cellEls.slice(0, this.colCnt),
                    isHorizontal: !0
            }), b = 0; e > b; b++)
                for (c = 0; f > c; c++)
                    d.trigger("dayRender", null, this.getCellDate(b, c), this.getCellEl(b, c))
        },
        unrenderDates: function () {
            this.removeSegPopover()
        },
        renderBusinessHours: function () {
            var a = this.view.calendar.getBusinessHoursEvents(!0),
                    b = this.eventsToSegs(a);
            this.renderFill("businessHours", b, "bgevent")
        },
        renderDayRowHtml: function (a, b) {
            var c = this.view,
                    d = ["fc-row", "fc-week", c.widgetContentClass];
            return b && d.push("fc-rigid"), '<div class="' + d.join(" ") + '"><div class="fc-bg"><table>' + this.renderBgTrHtml(a) + '</table></div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.renderNumberTrHtml(a) + "</thead>" : "") + "</table></div></div>"
        },
        renderNumberTrHtml: function (a) {
            return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(a)) + this.renderNumberCellsHtml(a) + (this.isRTL ? this.renderNumberIntroHtml(a) : "") + "</tr>"
        },
        renderNumberIntroHtml: function (a) {
            return this.renderIntroHtml()
        },
        renderNumberCellsHtml: function (a) {
            var b, c, d = [];
            for (b = 0; b < this.colCnt; b++)
                c = this.getCellDate(a, b), d.push(this.renderNumberCellHtml(c));
            return d.join("")
        },
        renderNumberCellHtml: function (a) {
            var b;
            return this.view.dayNumbersVisible ? (b = this.getDayClasses(a), b.unshift("fc-day-number"), '<td class="' + b.join(" ") + '" data-date="' + a.format() + '">' + a.date() + "</td>") : "<td/>"
        },
        computeEventTimeFormat: function () {
            return this.view.opt("extraSmallTimeFormat")
        },
        computeDisplayEventEnd: function () {
            return 1 == this.colCnt
        },
        rangeUpdated: function () {
            this.updateDayTable()
        },
        spanToSegs: function (a) {
            var b, c, d = this.sliceRangeByRow(a);
            for (b = 0; b < d.length; b++)
                c = d[b], this.isRTL ? (c.leftCol = this.daysPerRow - 1 - c.lastRowDayIndex, c.rightCol = this.daysPerRow - 1 - c.firstRowDayIndex) : (c.leftCol = c.firstRowDayIndex, c.rightCol = c.lastRowDayIndex);
            return d
        },
        prepareHits: function () {
            this.colCoordCache.build(), this.rowCoordCache.build(), this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
        },
        releaseHits: function () {
            this.colCoordCache.clear(), this.rowCoordCache.clear()
        },
        queryHit: function (a, b) {
            var c = this.colCoordCache.getHorizontalIndex(a),
                    d = this.rowCoordCache.getVerticalIndex(b);
            return null != d && null != c ? this.getCellHit(d, c) : void 0
        },
        getHitSpan: function (a) {
            return this.getCellRange(a.row, a.col)
        },
        getHitEl: function (a) {
            return this.getCellEl(a.row, a.col)
        },
        getCellHit: function (a, b) {
            return {
                row: a,
                col: b,
                component: this,
                left: this.colCoordCache.getLeftOffset(b),
                right: this.colCoordCache.getRightOffset(b),
                top: this.rowCoordCache.getTopOffset(a),
                bottom: this.rowCoordCache.getBottomOffset(a)
            }
        },
        getCellEl: function (a, b) {
            return this.cellEls.eq(a * this.colCnt + b)
        },
        renderDrag: function (a, b) {
            return this.renderHighlight(this.eventToSpan(a)), b && !b.el.closest(this.el).length ? this.renderEventLocationHelper(a, b) : void 0
        },
        unrenderDrag: function () {
            this.unrenderHighlight(), this.unrenderHelper()
        },
        renderEventResize: function (a, b) {
            return this.renderHighlight(this.eventToSpan(a)), this.renderEventLocationHelper(a, b)
        },
        unrenderEventResize: function () {
            this.unrenderHighlight(), this.unrenderHelper()
        },
        renderHelper: function (b, c) {
            var d, e = [],
                    f = this.eventToSegs(b);
            return f = this.renderFgSegEls(f), d = this.renderSegRows(f), this.rowEls.each(function (b, f) {
                var g, h = a(f),
                        i = a('<div class="fc-helper-skeleton"><table/></div>');
                g = c && c.row === b ? c.el.position().top : h.find(".fc-content-skeleton tbody").position().top, i.css("top", g).find("table").append(d[b].tbodyEl), h.append(i), e.push(i[0])
            }), this.helperEls = a(e)
        },
        unrenderHelper: function () {
            this.helperEls && (this.helperEls.remove(), this.helperEls = null)
        },
        fillSegTag: "td",
        renderFill: function (b, c, d) {
            var e, f, g, h = [];
            for (c = this.renderFillSegEls(b, c), e = 0; e < c.length; e++)
                f = c[e], g = this.renderFillRow(b, f, d), this.rowEls.eq(f.row).append(g), h.push(g[0]);
            return this.elsByFill[b] = a(h), c
        },
        renderFillRow: function (b, c, d) {
            var e, f, g = this.colCnt,
                    h = c.leftCol,
                    i = c.rightCol + 1;
            return d = d || b.toLowerCase(), e = a('<div class="fc-' + d + '-skeleton"><table><tr/></table></div>'), f = e.find("tr"), h > 0 && f.append('<td colspan="' + h + '"/>'), f.append(c.el.attr("colspan", i - h)), g > i && f.append('<td colspan="' + (g - i) + '"/>'), this.bookendCells(f), e
        }
    });
    ub.mixin({
        rowStructs: null,
        unrenderEvents: function () {
            this.removeSegPopover(), sb.prototype.unrenderEvents.apply(this, arguments)
        },
        getEventSegs: function () {
            return sb.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function (b) {
            var c = a.grep(b, function (a) {
                return a.event.allDay
            });
            return sb.prototype.renderBgSegs.call(this, c)
        },
        renderFgSegs: function (b) {
            var c;
            return b = this.renderFgSegEls(b), c = this.rowStructs = this.renderSegRows(b), this.rowEls.each(function (b, d) {
                a(d).find(".fc-content-skeleton > table").append(c[b].tbodyEl)
            }), b
        },
        unrenderFgSegs: function () {
            for (var a, b = this.rowStructs || []; a = b.pop(); )
                a.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function (a) {
            var b, c, d = [];
            for (b = this.groupSegRows(a), c = 0; c < b.length; c++)
                d.push(this.renderSegRow(c, b[c]));
            return d
        },
        fgSegHtml: function (a, b) {
            var c, d, e = this.view,
                    f = a.event,
                    g = e.isEventDraggable(f),
                    h = !b && f.allDay && a.isStart && e.isEventResizableFromStart(f),
                    i = !b && f.allDay && a.isEnd && e.isEventResizableFromEnd(f),
                    j = this.getSegClasses(a, g, h || i),
                    k = ea(this.getSegSkinCss(a)),
                    l = "";
            return j.unshift("fc-day-grid-event", "fc-h-event"), a.isStart && (c = this.getEventTimeText(f), c && (l = '<span class="fc-time">' + ca(c) + "</span>")), d = '<span class="fc-title">' + (ca(f.title || "") || "&nbsp;") + "</span>", '<a class="' + j.join(" ") + '"' + (f.url ? ' href="' + ca(f.url) + '"' : "") + (k ? ' style="' + k + '"' : "") + '><div class="fc-content">' + (this.isRTL ? d + " " + l : l + " " + d) + "</div>" + (h ? '<div class="fc-resizer fc-start-resizer" />' : "") + (i ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        renderSegRow: function (b, c) {
            function d(b) {
                for (; b > g; )
                    k = (r[e - 1] || [])[g], k ? k.attr("rowspan", parseInt(k.attr("rowspan") || 1, 10) + 1) : (k = a("<td/>"), h.append(k)), q[e][g] = k, r[e][g] = k, g++
            }
            var e, f, g, h, i, j, k, l = this.colCnt,
                    m = this.buildSegLevels(c),
                    n = Math.max(1, m.length),
                    o = a("<tbody/>"),
                    p = [],
                    q = [],
                    r = [];
            for (e = 0; n > e; e++) {
                if (f = m[e], g = 0, h = a("<tr/>"), p.push([]), q.push([]), r.push([]), f)
                    for (i = 0; i < f.length; i++) {
                        for (j = f[i], d(j.leftCol), k = a('<td class="fc-event-container"/>').append(j.el), j.leftCol != j.rightCol ? k.attr("colspan", j.rightCol - j.leftCol + 1) : r[e][g] = k; g <= j.rightCol; )
                            q[e][g] = k, p[e][g] = j, g++;
                        h.append(k)
                    }
                d(l), this.bookendCells(h), o.append(h)
            }
            return {
                row: b,
                tbodyEl: o,
                cellMatrix: q,
                segMatrix: p,
                segLevels: m,
                segs: c
            }
        },
        buildSegLevels: function (a) {
            var b, c, d, e = [];
            for (this.sortEventSegs(a), b = 0; b < a.length; b++) {
                for (c = a[b], d = 0; d < e.length && Ia(c, e[d]); d++)
                    ;
                c.level = d, (e[d] || (e[d] = [])).push(c)
            }
            for (d = 0; d < e.length; d++)
                e[d].sort(Ja);
            return e
        },
        groupSegRows: function (a) {
            var b, c = [];
            for (b = 0; b < this.rowCnt; b++)
                c.push([]);
            for (b = 0; b < a.length; b++)
                c[a[b].row].push(a[b]);
            return c
        }
    }), ub.mixin({
        segPopover: null,
        popoverSegs: null,
        removeSegPopover: function () {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function (a) {
            var b, c, d = this.rowStructs || [];
            for (b = 0; b < d.length; b++)
                this.unlimitRow(b), c = a ? "number" == typeof a ? a : this.computeRowLevelLimit(b) : !1, c !== !1 && this.limitRow(b, c)
        },
        computeRowLevelLimit: function (b) {
            function c(b, c) {
                f = Math.max(f, a(c).outerHeight())
            }
            var d, e, f, g = this.rowEls.eq(b),
                    h = g.height(),
                    i = this.rowStructs[b].tbodyEl.children();
            for (d = 0; d < i.length; d++)
                if (e = i.eq(d).removeClass("fc-limited"), f = 0, e.find("> td > :first-child").each(c), e.position().top + f > h)
                    return d;
            return !1
        },
        limitRow: function (b, c) {
            function d(d) {
                for (; d > w; )
                    j = t.getCellSegs(b, w, c), j.length && (m = f[c - 1][w], s = t.renderMoreLink(b, w, j), r = a("<div/>").append(s), m.append(r), v.push(r[0])), w++
            }
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t = this,
                    u = this.rowStructs[b],
                    v = [],
                    w = 0;
            if (c && c < u.segLevels.length) {
                for (e = u.segLevels[c - 1], f = u.cellMatrix, g = u.tbodyEl.children().slice(c).addClass("fc-limited").get(), h = 0; h < e.length; h++) {
                    for (i = e[h], d(i.leftCol), l = [], k = 0; w <= i.rightCol; )
                        j = this.getCellSegs(b, w, c), l.push(j), k += j.length, w++;
                    if (k) {
                        for (m = f[c - 1][i.leftCol], n = m.attr("rowspan") || 1, o = [], p = 0; p < l.length; p++)
                            q = a('<td class="fc-more-cell"/>').attr("rowspan", n), j = l[p], s = this.renderMoreLink(b, i.leftCol + p, [i].concat(j)), r = a("<div/>").append(s), q.append(r), o.push(q[0]), v.push(q[0]);
                        m.addClass("fc-limited").after(a(o)), g.push(m[0])
                    }
                }
                d(this.colCnt), u.moreEls = a(v), u.limitedEls = a(g)
            }
        },
        unlimitRow: function (a) {
            var b = this.rowStructs[a];
            b.moreEls && (b.moreEls.remove(), b.moreEls = null), b.limitedEls && (b.limitedEls.removeClass("fc-limited"), b.limitedEls = null)
        },
        renderMoreLink: function (b, c, d) {
            var e = this,
                    f = this.view;
            return a('<a class="fc-more"/>').text(this.getMoreLinkText(d.length)).on("click", function (g) {
                var h = f.opt("eventLimitClick"),
                        i = e.getCellDate(b, c),
                        j = a(this),
                        k = e.getCellEl(b, c),
                        l = e.getCellSegs(b, c),
                        m = e.resliceDaySegs(l, i),
                        n = e.resliceDaySegs(d, i);
                "function" == typeof h && (h = f.trigger("eventLimitClick", null, {
                    date: i,
                    dayEl: k,
                    moreEl: j,
                    segs: m,
                    hiddenSegs: n
                }, g)), "popover" === h ? e.showSegPopover(b, c, j, m) : "string" == typeof h && f.calendar.zoomTo(i, h)
            })
        },
        showSegPopover: function (a, b, c, d) {
            var e, f, g = this,
                    h = this.view,
                    i = c.parent();
            e = 1 == this.rowCnt ? h.el : this.rowEls.eq(a), f = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(a, b, d),
                parentEl: this.el,
                top: e.offset().top,
                autoHide: !0,
                viewportConstrain: h.opt("popoverViewportConstrain"),
                hide: function () {
                    g.segPopover.removeElement(), g.segPopover = null, g.popoverSegs = null
                },
            }, this.isRTL ? f.right = i.offset().left + i.outerWidth() + 1 : f.left = i.offset().left - 1, this.segPopover = new nb(f), this.segPopover.show()

        },
        renderSegPopoverContent: function (b, c, d) {
            var e, f = this.view,
                    g = f.opt("theme"),
                    h = this.getCellDate(b, c).format(f.opt("dayPopoverFormat")),
                    i = a('<div class="fc-header ' + f.widgetHeaderClass + '"><span class="fc-close ' + (g ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"></span><span class="fc-title">' + ca(h) + '</span><div class="fc-clear"/></div><div class="fc-body ' + f.widgetContentClass + '"><div class="fc-event-container"></div></div>'),
                    j = i.find(".fc-event-container")
                    ;
            for (d = this.renderFgSegEls(d, !0), this.popoverSegs = d, e = 0; e < d.length; e++){
                this.prepareHits(), d[e].hit = this.getCellHit(b, c), this.releaseHits(), j.append(d[e].el)};
            return i
        },
        resliceDaySegs: function (b, c) {
            var d = a.map(b, function (a) {
                return a.event
            }),
                    e = c.clone(),
                    f = e.clone().add(1, "days"),
                    g = {
                        start: e,
                        end: f
                    };
            return b = this.eventsToSegs(d, function (a) {
                var b = K(a, g);
                return b ? [b] : []
            }), this.sortEventSegs(b), b
        },
        getMoreLinkText: function (a) {
            var b = this.view.opt("eventLimitText");
            return "function" == typeof b ? b(a) : "+" + a + " " + b
        },
        getCellSegs: function (a, b, c) {
            for (var d, e = this.rowStructs[a].segMatrix, f = c || 0, g = []; f < e.length; )
                d = e[f][b], d && g.push(d), f++;
            return g
        }
    });
    var vb = Va.TimeGrid = sb.extend(tb, {
        slotDuration: null,
        snapDuration: null,
        snapsPerSlot: null,
        minTime: null,
        maxTime: null,
        labelFormat: null,
        labelInterval: null,
        colEls: null,
        slatContainerEl: null,
        slatEls: null,
        nowIndicatorEls: null,
        colCoordCache: null,
        slatCoordCache: null,
        constructor: function () {
            sb.apply(this, arguments), this.processOptions()
        },
        renderDates: function () {
            this.el.html(this.renderHtml()), this.colEls = this.el.find(".fc-day"), this.slatContainerEl = this.el.find(".fc-slats"), this.slatEls = this.slatContainerEl.find("tr"), this.colCoordCache = new ob({
                els: this.colEls,
                isHorizontal: !0
            }), this.slatCoordCache = new ob({
                els: this.slatEls,
                isVertical: !0
            }), this.renderContentSkeleton()
        },
        renderHtml: function () {
            return '<div class="fc-bg"><table>' + this.renderBgTrHtml(0) + '</table></div><div class="fc-slats"><table>' + this.renderSlatRowHtml() + "</table></div>"
        },
        renderSlatRowHtml: function () {
            for (var a, c, d, e = this.view, f = this.isRTL, g = "", h = b.duration(+this.minTime); h < this.maxTime; )
                a = this.start.clone().time(h), c = ha(R(h, this.labelInterval)), d = '<td class="fc-axis fc-time ' + e.widgetContentClass + '" ' + e.axisStyleAttr() + ">" + (c ? "<span>" + ca(a.format(this.labelFormat)) + "</span>" : "") + "</td>", g += '<tr data-time="' + a.format("HH:mm:ss") + '"' + (c ? "" : ' class="fc-minor"') + ">" + (f ? "" : d) + '<td class="' + e.widgetContentClass + '"/>' + (f ? d : "") + "</tr>", h.add(this.slotDuration);
            return g
        },
        processOptions: function () {
            var c, d = this.view,
                    e = d.opt("slotDuration"),
                    f = d.opt("snapDuration");
            e = b.duration(e), f = f ? b.duration(f) : e, this.slotDuration = e, this.snapDuration = f, this.snapsPerSlot = e / f, this.minResizeDuration = f, this.minTime = b.duration(d.opt("minTime")), this.maxTime = b.duration(d.opt("maxTime")), c = d.opt("slotLabelFormat"), a.isArray(c) && (c = c[c.length - 1]), this.labelFormat = c || d.opt("axisFormat") || d.opt("smallTimeFormat"), c = d.opt("slotLabelInterval"), this.labelInterval = c ? b.duration(c) : this.computeLabelInterval(e)
        },
        computeLabelInterval: function (a) {
            var c, d, e;
            for (c = Mb.length - 1; c >= 0; c--)
                if (d = b.duration(Mb[c]), e = R(d, a), ha(e) && e > 1)
                    return d;
            return b.duration(a)
        },
        computeEventTimeFormat: function () {
            return this.view.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function () {
            return !0
        },
        prepareHits: function () {
            this.colCoordCache.build(), this.slatCoordCache.build()
        },
        releaseHits: function () {
            this.colCoordCache.clear()
        },
        queryHit: function (a, b) {
            var c = this.snapsPerSlot,
                    d = this.colCoordCache,
                    e = this.slatCoordCache,
                    f = d.getHorizontalIndex(a),
                    g = e.getVerticalIndex(b);
            if (null != f && null != g) {
                var h = e.getTopOffset(g),
                        i = e.getHeight(g),
                        j = (b - h) / i,
                        k = Math.floor(j * c),
                        l = g * c + k,
                        m = h + k / c * i,
                        n = h + (k + 1) / c * i;
                return {
                    col: f,
                    snap: l,
                    component: this,
                    left: d.getLeftOffset(f),
                    right: d.getRightOffset(f),
                    top: m,
                    bottom: n
                }
            }
        },
        getHitSpan: function (a) {
            var b, c = this.getCellDate(0, a.col),
                    d = this.computeSnapTime(a.snap);
            return c.time(d), b = c.clone().add(this.snapDuration), {
                start: c,
                end: b
            }
        },
        getHitEl: function (a) {
            return this.colEls.eq(a.col)
        },
        rangeUpdated: function () {
            this.updateDayTable()
        },
        computeSnapTime: function (a) {
            return b.duration(this.minTime + this.snapDuration * a)
        },
        spanToSegs: function (a) {
            var b, c = this.sliceRangeByTimes(a);
            for (b = 0; b < c.length; b++)
                this.isRTL ? c[b].col = this.daysPerRow - 1 - c[b].dayIndex : c[b].col = c[b].dayIndex;
            return c
        },
        sliceRangeByTimes: function (a) {
            var b, c, d, e, f = [];
            for (c = 0; c < this.daysPerRow; c++)
                d = this.dayDates[c].clone(), e = {
                    start: d.clone().time(this.minTime),
                    end: d.clone().time(this.maxTime)
                }, b = K(a, e), b && (b.dayIndex = c, f.push(b));
            return f
        },
        updateSize: function (a) {
            this.slatCoordCache.build(), a && this.updateSegVerticals([].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || []))
        },
        getTotalSlatHeight: function () {
            return this.slatContainerEl.outerHeight()
        },
        computeDateTop: function (a, c) {
            return this.computeTimeTop(b.duration(a - c.clone().stripTime()))
        },
        computeTimeTop: function (a) {
            var b, c, d = this.slatEls.length,
                    e = (a - this.minTime) / this.slotDuration;
            return e = Math.max(0, e), e = Math.min(d, e), b = Math.floor(e), b = Math.min(b, d - 1), c = e - b, this.slatCoordCache.getTopPosition(b) + this.slatCoordCache.getHeight(b) * c
        },
        renderDrag: function (a, b) {
            return b ? this.renderEventLocationHelper(a, b) : void this.renderHighlight(this.eventToSpan(a))
        },
        unrenderDrag: function () {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderEventResize: function (a, b) {
            return this.renderEventLocationHelper(a, b)
        },
        unrenderEventResize: function () {
            this.unrenderHelper()
        },
        renderHelper: function (a, b) {
            return this.renderHelperSegs(this.eventToSegs(a), b)
        },
        unrenderHelper: function () {
            this.unrenderHelperSegs()
        },
        renderBusinessHours: function () {
            var a = this.view.calendar.getBusinessHoursEvents(),
                    b = this.eventsToSegs(a);
            this.renderBusinessSegs(b)
        },
        unrenderBusinessHours: function () {
            this.unrenderBusinessSegs()
        },
        getNowIndicatorUnit: function () {
            return "minute"
        },
        renderNowIndicator: function (b) {
            var c, d = this.spanToSegs({
                start: b,
                end: b
            }),
                    e = this.computeDateTop(b, b),
                    f = [];
            for (c = 0; c < d.length; c++)
                f.push(a('<div class="fc-now-indicator fc-now-indicator-line"></div>').css("top", e).appendTo(this.colContainerEls.eq(d[c].col))[0]);
            d.length > 0 && f.push(a('<div class="fc-now-indicator fc-now-indicator-arrow"></div>').css("top", e).appendTo(this.el.find(".fc-content-skeleton"))[0]), this.nowIndicatorEls = a(f)
        },
        unrenderNowIndicator: function () {
            this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
        },
        renderSelection: function (a) {
            this.view.opt("selectHelper") ? this.renderEventLocationHelper(a) : this.renderHighlight(a)
        },
        unrenderSelection: function () {
            this.unrenderHelper(), this.unrenderHighlight()
        },
        renderHighlight: function (a) {
            this.renderHighlightSegs(this.spanToSegs(a))
        },
        unrenderHighlight: function () {
            this.unrenderHighlightSegs()
        }
    });
    vb.mixin({
        colContainerEls: null,
        fgContainerEls: null,
        bgContainerEls: null,
        helperContainerEls: null,
        highlightContainerEls: null,
        businessContainerEls: null,
        fgSegs: null,
        bgSegs: null,
        helperSegs: null,
        highlightSegs: null,
        businessSegs: null,
        renderContentSkeleton: function () {
            var b, c, d = "";
            for (b = 0; b < this.colCnt; b++)
                d += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"></div><div class="fc-event-container"></div><div class="fc-highlight-container"></div><div class="fc-bgevent-container"></div><div class="fc-business-container"></div></div></td>';
            c = a('<div class="fc-content-skeleton"><table><tr>' + d + "</tr></table></div>"), this.colContainerEls = c.find(".fc-content-col"), this.helperContainerEls = c.find(".fc-helper-container"), this.fgContainerEls = c.find(".fc-event-container:not(.fc-helper-container)"), this.bgContainerEls = c.find(".fc-bgevent-container"), this.highlightContainerEls = c.find(".fc-highlight-container"), this.businessContainerEls = c.find(".fc-business-container"), this.bookendCells(c.find("tr")), this.el.append(c)
        },
        renderFgSegs: function (a) {
            return a = this.renderFgSegsIntoContainers(a, this.fgContainerEls), this.fgSegs = a, a
        },
        unrenderFgSegs: function () {
            this.unrenderNamedSegs("fgSegs")
        },
        renderHelperSegs: function (b, c) {
            var d, e, f, g = [];
            for (b = this.renderFgSegsIntoContainers(b, this.helperContainerEls), d = 0; d < b.length; d++)
                e = b[d], c && c.col === e.col && (f = c.el, e.el.css({
                    left: f.css("left"),
                    right: f.css("right"),
                    "margin-left": f.css("margin-left"),
                    "margin-right": f.css("margin-right")
                })), g.push(e.el[0]);
            return this.helperSegs = b, a(g)
        },
        unrenderHelperSegs: function () {
            this.unrenderNamedSegs("helperSegs")
        },
        renderBgSegs: function (a) {
            return a = this.renderFillSegEls("bgEvent", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.bgContainerEls), this.bgSegs = a, a
        },
        unrenderBgSegs: function () {
            this.unrenderNamedSegs("bgSegs")
        },
        renderHighlightSegs: function (a) {
            a = this.renderFillSegEls("highlight", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.highlightContainerEls), this.highlightSegs = a
        },
        unrenderHighlightSegs: function () {
            this.unrenderNamedSegs("highlightSegs")
        },
        renderBusinessSegs: function (a) {
            a = this.renderFillSegEls("businessHours", a), this.updateSegVerticals(a), this.attachSegsByCol(this.groupSegsByCol(a), this.businessContainerEls), this.businessSegs = a
        },
        unrenderBusinessSegs: function () {
            this.unrenderNamedSegs("businessSegs")
        },
        groupSegsByCol: function (a) {
            var b, c = [];
            for (b = 0; b < this.colCnt; b++)
                c.push([]);
            for (b = 0; b < a.length; b++)
                c[a[b].col].push(a[b]);
            return c
        },
        attachSegsByCol: function (a, b) {
            var c, d, e;
            for (c = 0; c < this.colCnt; c++)
                for (d = a[c], e = 0; e < d.length; e++)
                    b.eq(c).append(d[e].el)
        },
        unrenderNamedSegs: function (a) {
            var b, c = this[a];
            if (c) {
                for (b = 0; b < c.length; b++)
                    c[b].el.remove();
                this[a] = null
            }
        },
        renderFgSegsIntoContainers: function (a, b) {
            var c, d;
            for (a = this.renderFgSegEls(a), c = this.groupSegsByCol(a), d = 0; d < this.colCnt; d++)
                this.updateFgSegCoords(c[d]);
            return this.attachSegsByCol(c, b), a
        },
        fgSegHtml: function (a, b) {
            var c, d, e, f = this.view,
                    g = a.event,
                    h = f.isEventDraggable(g),
                    i = !b && a.isStart && f.isEventResizableFromStart(g),
                    j = !b && a.isEnd && f.isEventResizableFromEnd(g),
                    k = this.getSegClasses(a, h, i || j),
                    l = ea(this.getSegSkinCss(a));
            return k.unshift("fc-time-grid-event", "fc-v-event"), f.isMultiDayEvent(g) ? (a.isStart || a.isEnd) && (c = this.getEventTimeText(a), d = this.getEventTimeText(a, "LT"), e = this.getEventTimeText(a, null, !1)) : (c = this.getEventTimeText(g), d = this.getEventTimeText(g, "LT"), e = this.getEventTimeText(g, null, !1)), '<a class="' + k.join(" ") + '"' + (g.url ? ' href="' + ca(g.url) + '"' : "") + (l ? ' style="' + l + '"' : "") + '><div class="fc-content">' + (c ? '<div class="fc-time" data-start="' + ca(e) + '" data-full="' + ca(d) + '"><span>' + ca(c) + "</span></div>" : "") + (g.title ? '<div class="fc-title">' + ca(g.title) + "</div>" : "") + '</div><div class="fc-bg"/>' + (j ? '<div class="fc-resizer fc-end-resizer" />' : "") + "</a>"
        },
        updateSegVerticals: function (a) {
            this.computeSegVerticals(a), this.assignSegVerticals(a)
        },
        computeSegVerticals: function (a) {
            var b, c;
            for (b = 0; b < a.length; b++)
                c = a[b], c.top = this.computeDateTop(c.start, c.start), c.bottom = this.computeDateTop(c.end, c.start)
        },
        assignSegVerticals: function (a) {
            var b, c;
            for (b = 0; b < a.length; b++)
                c = a[b], c.el.css(this.generateSegVerticalCss(c))
        },
        generateSegVerticalCss: function (a) {
            return {
                top: a.top,
                bottom: -a.bottom
            }
        },
        updateFgSegCoords: function (a) {
            this.computeSegVerticals(a), this.computeFgSegHorizontals(a), this.assignSegVerticals(a), this.assignFgSegHorizontals(a)
        },
        computeFgSegHorizontals: function (a) {
            var b, c, d;
            if (this.sortEventSegs(a), b = Ka(a), La(b), c = b[0]) {
                for (d = 0; d < c.length; d++)
                    Ma(c[d]);
                for (d = 0; d < c.length; d++)
                    this.computeFgSegForwardBack(c[d], 0, 0)
            }
        },
        computeFgSegForwardBack: function (a, b, c) {
            var d, e = a.forwardSegs;
            if (void 0 === a.forwardCoord)
                for (e.length ? (this.sortForwardSegs(e), this.computeFgSegForwardBack(e[0], b + 1, c), a.forwardCoord = e[0].backwardCoord) : a.forwardCoord = 1, a.backwardCoord = a.forwardCoord - (a.forwardCoord - c) / (b + 1), d = 0; d < e.length; d++)
                    this.computeFgSegForwardBack(e[d], 0, a.forwardCoord)
        },
        sortForwardSegs: function (a) {
            a.sort(ia(this, "compareForwardSegs"))
        },
        compareForwardSegs: function (a, b) {
            return b.forwardPressure - a.forwardPressure || (a.backwardCoord || 0) - (b.backwardCoord || 0) || this.compareEventSegs(a, b)
        },
        assignFgSegHorizontals: function (a) {
            var b, c;
            for (b = 0; b < a.length; b++)
                c = a[b], c.el.css(this.generateFgSegHorizontalCss(c)), c.bottom - c.top < 30 && c.el.addClass("fc-short")
        },
        generateFgSegHorizontalCss: function (a) {
            var b, c, d = this.view.opt("slotEventOverlap"),
                    e = a.backwardCoord,
                    f = a.forwardCoord,
                    g = this.generateSegVerticalCss(a);
            return d && (f = Math.min(1, e + 2 * (f - e))), this.isRTL ? (b = 1 - f, c = e) : (b = e, c = 1 - f), g.zIndex = a.level + 1, g.left = 100 * b + "%", g.right = 100 * c + "%", d && a.forwardPressure && (g[this.isRTL ? "marginLeft" : "marginRight"] = 20), g
        }
    });
    var wb = Va.View = xa.extend(kb, lb, {
        type: null,
        name: null,
        title: null,
        calendar: null,
        options: null,
        el: null,
        displaying: null,
        isSkeletonRendered: !1,
        isEventsRendered: !1,
        start: null,
        end: null,
        intervalStart: null,
        intervalEnd: null,
        intervalDuration: null,
        intervalUnit: null,
        isRTL: !1,
        isSelected: !1,
        selectedEvent: null,
        eventOrderSpecs: null,
        widgetHeaderClass: null,
        widgetContentClass: null,
        highlightStateClass: null,
        nextDayThreshold: null,
        isHiddenDayHash: null,
        isNowIndicatorRendered: null,
        initialNowDate: null,
        initialNowQueriedMs: null,
        nowIndicatorTimeoutID: null,
        nowIndicatorIntervalID: null,
        constructor: function (a, c, d, e) {
            this.calendar = a, this.type = this.name = c, this.options = d, this.intervalDuration = e || b.duration(1, "day"), this.nextDayThreshold = b.duration(this.opt("nextDayThreshold")), this.initThemingProps(), this.initHiddenDays(), this.isRTL = this.opt("isRTL"), this.eventOrderSpecs = G(this.opt("eventOrder")), this.initialize()
        },
        initialize: function () {},
        opt: function (a) {
            return this.options[a]
        },
        trigger: function (a, b) {
            var c = this.calendar;
            return c.trigger.apply(c, [a, b || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
        },
        setDate: function (a) {
            this.setRange(this.computeRange(a))
        },
        setRange: function (b) {
            a.extend(this, b), this.updateTitle()
        },
        computeRange: function (a) {
            var b, c, d = O(this.intervalDuration),
                    e = a.clone().startOf(d),
                    f = e.clone().add(this.intervalDuration);
            return /year|month|week|day/.test(d) ? (e.stripTime(), f.stripTime()) : (e.hasTime() || (e = this.calendar.time(0)), f.hasTime() || (f = this.calendar.time(0))), b = e.clone(), b = this.skipHiddenDays(b), c = f.clone(), c = this.skipHiddenDays(c, -1, !0), {
                intervalUnit: d,
                intervalStart: e,
                intervalEnd: f,
                start: b,
                end: c
            }
        },
        computePrevDate: function (a) {
            return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1)
        },
        computeNextDate: function (a) {
            return this.massageCurrentDate(a.clone().startOf(this.intervalUnit).add(this.intervalDuration))
        },
        massageCurrentDate: function (a, b) {
            return this.intervalDuration.as("days") <= 1 && this.isHiddenDay(a) && (a = this.skipHiddenDays(a, b), a.startOf("day")), a
        },
        updateTitle: function () {
            this.title = this.computeTitle()
        },
        computeTitle: function () {
            return this.formatRange({
                start: this.calendar.applyTimezone(this.intervalStart),
                end: this.calendar.applyTimezone(this.intervalEnd)
            }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
        },
        computeTitleFormat: function () {
            return "year" == this.intervalUnit ? "YYYY" : "month" == this.intervalUnit ? this.opt("monthYearFormat") : this.intervalDuration.as("days") > 1 ? "ll" : "LL"
        },
        formatRange: function (a, b, c) {
            var d = a.end;
            return d.hasTime() || (d = d.clone().subtract(1)), sa(a.start, d, b, c, this.opt("isRTL"))
        },
        setElement: function (a) {
            this.el = a, this.bindGlobalHandlers()
        },
        removeElement: function () {
            this.clear(), this.isSkeletonRendered && (this.unrenderSkeleton(), this.isSkeletonRendered = !1), this.unbindGlobalHandlers(), this.el.remove()
        },
        display: function (b) {
            var c = this,
                    d = null;
            return this.displaying && (d = this.queryScroll()), this.calendar.freezeContentHeight(), this.clear().then(function () {
                return c.displaying = a.when(c.displayView(b)).then(function () {
                    c.forceScroll(c.computeInitialScroll(d)), c.calendar.unfreezeContentHeight(), c.triggerRender()
                })
            })
        },
        clear: function () {
            var b = this,
                    c = this.displaying;
            return c ? c.then(function () {
                return b.displaying = null, b.clearEvents(), b.clearView()
            }) : a.when()
        },
        displayView: function (a) {
            this.isSkeletonRendered || (this.renderSkeleton(), this.isSkeletonRendered = !0), a && this.setDate(a), this.render && this.render(), this.renderDates(), this.updateSize(), this.renderBusinessHours(), this.startNowIndicator()
        },
        clearView: function () {
            this.unselect(), this.stopNowIndicator(), this.triggerUnrender(), this.unrenderBusinessHours(), this.unrenderDates(), this.destroy && this.destroy()
        },
        renderSkeleton: function () {},
        unrenderSkeleton: function () {},
        renderDates: function () {},
        unrenderDates: function () {},
        triggerRender: function () {
            this.trigger("viewRender", this, this, this.el)
        },
        triggerUnrender: function () {
            this.trigger("viewDestroy", this, this, this.el)
        },
        bindGlobalHandlers: function () {
            this.listenTo(a(document), "mousedown", this.handleDocumentMousedown), this.listenTo(a(document), "touchstart", this.processUnselect)
        },
        unbindGlobalHandlers: function () {
            this.stopListeningTo(a(document))
        },
        initThemingProps: function () {
            var a = this.opt("theme") ? "ui" : "fc";
            this.widgetHeaderClass = a + "-widget-header", this.widgetContentClass = a + "-widget-content", this.highlightStateClass = a + "-state-highlight"
        },
        renderBusinessHours: function () {},
        unrenderBusinessHours: function () {},
        startNowIndicator: function () {
            var a, c, d, e = this;
            this.opt("nowIndicator") && (a = this.getNowIndicatorUnit(), a && (c = ia(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = +new Date, this.renderNowIndicator(this.initialNowDate), this.isNowIndicatorRendered = !0, d = this.initialNowDate.clone().startOf(a).add(1, a) - this.initialNowDate, this.nowIndicatorTimeoutID = setTimeout(function () {
                e.nowIndicatorTimeoutID = null, c(), d = +b.duration(1, a), d = Math.max(100, d), e.nowIndicatorIntervalID = setInterval(c, d)
            }, d)))
        },
        updateNowIndicator: function () {
            this.isNowIndicatorRendered && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add(new Date - this.initialNowQueriedMs)))
        },
        stopNowIndicator: function () {
            this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearTimeout(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
        },
        getNowIndicatorUnit: function () {},
        renderNowIndicator: function (a) {},
        unrenderNowIndicator: function () {},
        updateSize: function (a) {
            var b;
            a && (b = this.queryScroll()), this.updateHeight(a), this.updateWidth(a), this.updateNowIndicator(), a && this.setScroll(b)
        },
        updateWidth: function (a) {},
        updateHeight: function (a) {
            var b = this.calendar;
            this.setHeight(b.getSuggestedViewHeight(), b.isHeightAuto())
        },
        setHeight: function (a, b) {},
        computeInitialScroll: function (a) {
            return 0
        },
        queryScroll: function () {},
        setScroll: function (a) {},
        forceScroll: function (a) {
            var b = this;
            this.setScroll(a), setTimeout(function () {
                b.setScroll(a)
            }, 0)
        },
        displayEvents: function (a) {
            var b = this.queryScroll();
            this.clearEvents(), this.renderEvents(a), this.isEventsRendered = !0, this.setScroll(b), this.triggerEventRender()
        },
        clearEvents: function () {
            var a;
            this.isEventsRendered && (a = this.queryScroll(), this.triggerEventUnrender(), this.destroyEvents && this.destroyEvents(), this.unrenderEvents(), this.setScroll(a), this.isEventsRendered = !1)
        },
        renderEvents: function (a) {},
        unrenderEvents: function () {},
        triggerEventRender: function () {
            this.renderedEventSegEach(function (a) {
                this.trigger("eventAfterRender", a.event, a.event, a.el)
            }), this.trigger("eventAfterAllRender")
        },
        triggerEventUnrender: function () {
            this.renderedEventSegEach(function (a) {
                this.trigger("eventDestroy", a.event, a.event, a.el)
            })
        },
        resolveEventEl: function (b, c) {
            var d = this.trigger("eventRender", b, b, c);
            return d === !1 ? c = null : d && d !== !0 && (c = a(d)), c
        },
        showEvent: function (a) {
            this.renderedEventSegEach(function (a) {
                a.el.css("visibility", "")
            }, a)
        },
        hideEvent: function (a) {
            this.renderedEventSegEach(function (a) {
                a.el.css("visibility", "hidden")
            }, a)
        },
        renderedEventSegEach: function (a, b) {
            var c, d = this.getEventSegs();
            for (c = 0; c < d.length; c++)
                b && d[c].event._id !== b._id || d[c].el && a.call(this, d[c])
        },
        getEventSegs: function () {
            return []
        },
        isEventDraggable: function (a) {
            var b = a.source || {};
            return ba(a.startEditable, b.startEditable, this.opt("eventStartEditable"), a.editable, b.editable, this.opt("editable"))
        },
        reportEventDrop: function (a, b, c, d, e) {
            var f = this.calendar,
                    g = f.mutateEvent(a, b, c),
                    h = function () {
                        g.undo(), f.reportEventChange()
                    };
            this.triggerEventDrop(a, g.dateDelta, h, d, e), f.reportEventChange()
        },
        triggerEventDrop: function (a, b, c, d, e) {
            this.trigger("eventDrop", d[0], a, b, c, e, {})
        },
        reportExternalDrop: function (b, c, d, e, f) {
            var g, h, i = b.eventProps;
            i && (g = a.extend({}, i, c), h = this.calendar.renderEvent(g, b.stick)[0]), this.triggerExternalDrop(h, c, d, e, f)
        },
        triggerExternalDrop: function (a, b, c, d, e) {
            this.trigger("drop", c[0], b.start, d, e), a && this.trigger("eventReceive", null, a)
        },
        renderDrag: function (a, b) {},
        unrenderDrag: function () {},
        isEventResizableFromStart: function (a) {
            return this.opt("eventResizableFromStart") && this.isEventResizable(a)
        },
        isEventResizableFromEnd: function (a) {
            return this.isEventResizable(a)
        },
        isEventResizable: function (a) {
            var b = a.source || {};
            return ba(a.durationEditable, b.durationEditable, this.opt("eventDurationEditable"), a.editable, b.editable, this.opt("editable"))
        },
        reportEventResize: function (a, b, c, d, e) {
            var f = this.calendar,
                    g = f.mutateEvent(a, b, c),
                    h = function () {
                        g.undo(), f.reportEventChange()
                    };
            this.triggerEventResize(a, g.durationDelta, h, d, e), f.reportEventChange()
        },
        triggerEventResize: function (a, b, c, d, e) {
            this.trigger("eventResize", d[0], a, b, c, e, {})
        },
        select: function (a, b) {
            this.unselect(b), this.renderSelection(a), this.reportSelection(a, b)
        },
        renderSelection: function (a) {},
        reportSelection: function (a, b) {
            this.isSelected = !0, this.triggerSelect(a, b)
        },
        triggerSelect: function (a, b) {
            this.trigger("select", null, this.calendar.applyTimezone(a.start), this.calendar.applyTimezone(a.end), b)
        },
        unselect: function (a) {
            this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.trigger("unselect", null, a))
        },
        unrenderSelection: function () {},
        selectEvent: function (a) {
            this.selectedEvent && this.selectedEvent === a || (this.unselectEvent(), this.renderedEventSegEach(function (a) {
                a.el.addClass("fc-selected")
            }, a), this.selectedEvent = a)
        },
        unselectEvent: function () {
            this.selectedEvent && (this.renderedEventSegEach(function (a) {
                a.el.removeClass("fc-selected");
            }, this.selectedEvent), this.selectedEvent = null)
        },
        isEventSelected: function (a) {
            return this.selectedEvent && this.selectedEvent._id === a._id
        },
        handleDocumentMousedown: function (a) {
            u(a) && this.processUnselect(a)
        },
        processUnselect: function (a) {
            this.processRangeUnselect(a), this.processEventUnselect(a)
        },
        processRangeUnselect: function (b) {
            var c;
            this.isSelected && this.opt("unselectAuto") && (c = this.opt("unselectCancel"), c && a(b.target).closest(c).length || this.unselect(b))
        },
        processEventUnselect: function (b) {
            this.selectedEvent && (a(b.target).closest(".fc-selected").length || this.unselectEvent())
        },
        triggerDayClick: function (a, b, c) {
            this.trigger("dayClick", b, this.calendar.applyTimezone(a.start), c)
        },
        initHiddenDays: function () {
            var b, c = this.opt("hiddenDays") || [],
                    d = [],
                    e = 0;
            for (this.opt("weekends") === !1 && c.push(0, 6), b = 0; 7 > b; b++)
                (d[b] = -1 !== a.inArray(b, c)) || e++;
            if (!e)
                throw "invalid hiddenDays";
            this.isHiddenDayHash = d
        },
        isHiddenDay: function (a) {
            return b.isMoment(a) && (a = a.day()), this.isHiddenDayHash[a]
        },
        skipHiddenDays: function (a, b, c) {
            var d = a.clone();
            for (b = b || 1; this.isHiddenDayHash[(d.day() + (c ? b : 0) + 7) % 7]; )
                d.add(b, "days");
            return d
        },
        computeDayRange: function (a) {
            var b, c = a.start.clone().stripTime(),
                    d = a.end,
                    e = null;
            return d && (e = d.clone().stripTime(), b = +d.time(), b && b >= this.nextDayThreshold && e.add(1, "days")), (!d || c >= e) && (e = c.clone().add(1, "days")), {
                start: c,
                end: e
            }
        },
        isMultiDayEvent: function (a) {
            var b = this.computeDayRange(a);
            return b.end.diff(b.start, "days") > 1
        }
    }),
            xb = Va.Scroller = xa.extend({
                el: null,
                scrollEl: null,
                overflowX: null,
                overflowY: null,
                constructor: function (a) {
                    a = a || {}, this.overflowX = a.overflowX || a.overflow || "auto", this.overflowY = a.overflowY || a.overflow || "auto"
                },
                render: function () {
                    this.el = this.renderEl(), this.applyOverflow()
                },
                renderEl: function () {
                    return this.scrollEl = a('<div class="fc-scroller"></div>')
                },
                clear: function () {
                    this.setHeight("auto"), this.applyOverflow()
                },
                destroy: function () {
                    this.el.remove()
                },
                applyOverflow: function () {
                    this.scrollEl.css({
                        "overflow-x": this.overflowX,
                        "overflow-y": this.overflowY
                    })
                },
                lockOverflow: function (a) {
                    var b = this.overflowX,
                            c = this.overflowY;
                    a = a || this.getScrollbarWidths(), "auto" === b && (b = a.top || a.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden"), "auto" === c && (c = a.left || a.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden"), this.scrollEl.css({
                        "overflow-x": b,
                        "overflow-y": c
                    })
                },
                setHeight: function (a) {
                    this.scrollEl.height(a)
                },
                getScrollTop: function () {
                    return this.scrollEl.scrollTop()
                },
                setScrollTop: function (a) {
                    this.scrollEl.scrollTop(a)
                },
                getClientWidth: function () {
                    return this.scrollEl[0].clientWidth
                },
                getClientHeight: function () {
                    return this.scrollEl[0].clientHeight
                },
                getScrollbarWidths: function () {
                    return q(this.scrollEl)
                }
            }),
            yb = Va.Calendar = xa.extend({
                dirDefaults: null,
                langDefaults: null,
                overrides: null,
                options: null,
                viewSpecCache: null,
                view: null,
                header: null,
                loadingLevel: 0,
                constructor: Pa,
                initialize: function () {},
                initOptions: function (a) {
                    var b, e, f, g;
                    a = d(a), b = a.lang, e = zb[b], e || (b = yb.defaults.lang, e = zb[b] || {}), f = ba(a.isRTL, e.isRTL, yb.defaults.isRTL), g = f ? yb.rtlDefaults : {}, this.dirDefaults = g, this.langDefaults = e, this.overrides = a, this.options = c([yb.defaults, g, e, a]), Qa(this.options), this.viewSpecCache = {}
                },
                getViewSpec: function (a) {
                    var b = this.viewSpecCache;
                    return b[a] || (b[a] = this.buildViewSpec(a))
                },
                getUnitViewSpec: function (b) {
                    var c, d, e;
                    if (-1 != a.inArray(b, $a))
                        for (c = this.header.getViewsWithButtons(), a.each(Va.views, function (a) {
                            c.push(a)
                        }), d = 0; d < c.length; d++)
                            if (e = this.getViewSpec(c[d]), e && e.singleUnit == b)
                                return e
                },
                buildViewSpec: function (a) {
                    for (var d, e, f, g, h = this.overrides.views || {}, i = [], j = [], k = [], l = a; l; )
                        d = Wa[l], e = h[l], l = null, "function" == typeof d && (d = {
                            "class": d
                        }), d && (i.unshift(d), j.unshift(d.defaults || {}), f = f || d.duration, l = l || d.type), e && (k.unshift(e), f = f || e.duration, l = l || e.type);
                    return d = W(i), d.type = a, d["class"] ? (f && (f = b.duration(f), f.valueOf() && (d.duration = f, g = O(f), 1 === f.as(g) && (d.singleUnit = g, k.unshift(h[g] || {})))), d.defaults = c(j), d.overrides = c(k), this.buildViewSpecOptions(d), this.buildViewSpecButtonText(d, a), d) : !1
                },
                buildViewSpecOptions: function (a) {
                    a.options = c([yb.defaults, a.defaults, this.dirDefaults, this.langDefaults, this.overrides, a.overrides]), Qa(a.options)
                },
                buildViewSpecButtonText: function (a, b) {
                    function c(c) {
                        var d = c.buttonText || {};
                        return d[b] || (a.singleUnit ? d[a.singleUnit] : null)
                    }
                    a.buttonTextOverride = c(this.overrides) || a.overrides.buttonText, a.buttonTextDefault = c(this.langDefaults) || c(this.dirDefaults) || a.defaults.buttonText || c(yb.defaults) || (a.duration ? this.humanizeDuration(a.duration) : null) || b
                },
                instantiateView: function (a) {
                    var b = this.getViewSpec(a);
                    return new b["class"](this, a, b.options, b.duration)
                },
                isValidViewType: function (a) {
                    return Boolean(this.getViewSpec(a))
                },
                pushLoading: function () {
                    this.loadingLevel++ || this.trigger("loading", null, !0, this.view)
                },
                popLoading: function () {
                    --this.loadingLevel || this.trigger("loading", null, !1, this.view)
                },
                buildSelectSpan: function (a, b) {
                    var c, d = this.moment(a).stripZone();
                    return c = b ? this.moment(b).stripZone() : d.hasTime() ? d.clone().add(this.defaultTimedEventDuration) : d.clone().add(this.defaultAllDayEventDuration), {
                        start: d,
                        end: c
                    }
                }
            });
    yb.mixin(kb), yb.defaults = {
        titleRangeSeparator: " â€” ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 200,
        longPressDelay: 1e3
    }, yb.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
    }, yb.rtlDefaults = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    };
    var zb = Va.langs = {};
    Va.datepickerLang = function (b, c, d) {
        var e = zb[b] || (zb[b] = {});
        e.isRTL = d.isRTL, e.weekNumberTitle = d.weekHeader, a.each(Ab, function (a, b) {
            e[a] = b(d)
        }), a.datepicker && (a.datepicker.regional[c] = a.datepicker.regional[b] = d, a.datepicker.regional.en = a.datepicker.regional[""], a.datepicker.setDefaults(d))
    }, Va.lang = function (b, d) {
        var e, f;
        e = zb[b] || (zb[b] = {}), d && (e = zb[b] = c([e, d])), f = Ra(b), a.each(Bb, function (a, b) {
            null == e[a] && (e[a] = b(f, e))
        }), yb.defaults.lang = b
    };
    var Ab = {
        buttonText: function (a) {
            return {
                prev: da(a.prevText),
                next: da(a.nextText),
                today: da(a.currentText)
            }
        },
        monthYearFormat: function (a) {
            return a.showMonthAfterYear ? "YYYY[" + a.yearSuffix + "] MMMM" : "MMMM YYYY[" + a.yearSuffix + "]"
        }
    },
    Bb = {
        dayOfMonthFormat: function (a, b) {
            var c = a.longDateFormat("l");
            return c = c.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), b.isRTL ? c += " ddd" : c = "ddd " + c, c
        },
        mediumTimeFormat: function (a) {
            return a.longDateFormat("LT").replace(/\s*a$/i, "a")
        },
        smallTimeFormat: function (a) {
            return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
        },
        extraSmallTimeFormat: function (a) {
            return a.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
        },
        hourFormat: function (a) {
            return a.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
        },
        noMeridiemTimeFormat: function (a) {
            return a.longDateFormat("LT").replace(/\s*a$/i, "")
        }
    },
    Cb = {
        smallDayDateFormat: function (a) {
            return a.isRTL ? "D dd" : "dd D"
        },
        weekFormat: function (a) {
            return a.isRTL ? "w[ " + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + " ]w"
        },
        smallWeekFormat: function (a) {
            return a.isRTL ? "w[" + a.weekNumberTitle + "]" : "[" + a.weekNumberTitle + "]w"
        }
    };
    Va.lang("en", yb.englishDefaults), Va.sourceNormalizers = [], Va.sourceFetchers = [];
    var Db = {
        dataType: "json",
        cache: !1
    },
    Eb = 1;
    yb.prototype.getPeerEvents = function (a, b) {
        var c, d, e = this.getEventCache(),
                f = [];
        for (c = 0; c < e.length; c++)
            d = e[c], b && b._id === d._id || f.push(d);
        return f
    };
    var Fb = Va.BasicView = wb.extend({
        scroller: null,
        dayGridClass: ub,
        dayGrid: null,
        dayNumbersVisible: !1,
        weekNumbersVisible: !1,
        weekNumberWidth: null,
        headContainerEl: null,
        headRowEl: null,
        initialize: function () {
            this.dayGrid = this.instantiateDayGrid(), this.scroller = new xb({
                overflowX: "hidden",
                overflowY: "auto"
            })
        },
        instantiateDayGrid: function () {
            var a = this.dayGridClass.extend(Gb);
            return new a(this)
        },
        setRange: function (a) {
            wb.prototype.setRange.call(this, a), this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit), this.dayGrid.setRange(a)
        },
        computeRange: function (a) {
            var b = wb.prototype.computeRange.call(this, a);
            return /year|month/.test(b.intervalUnit) && (b.start.startOf("week"), b.start = this.skipHiddenDays(b.start), b.end.weekday() && (b.end.add(1, "week").startOf("week"), b.end = this.skipHiddenDays(b.end, -1, !0))), b
        },
        renderDates: function () {
            this.dayNumbersVisible = this.dayGrid.rowCnt > 1, this.weekNumbersVisible = this.opt("weekNumbers"), this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible, this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scroller.render();
            var b = this.scroller.el.addClass("fc-day-grid-container"),
                    c = a('<div class="fc-day-grid" />').appendTo(b);
            this.el.find(".fc-body > tr > td").append(b), this.dayGrid.setElement(c), this.dayGrid.renderDates(this.hasRigidRows())
        },
        renderHead: function () {
            this.headContainerEl = this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml()), this.headRowEl = this.headContainerEl.find(".fc-row")
        },
        unrenderDates: function () {
            this.dayGrid.unrenderDates(), this.dayGrid.removeElement(), this.scroller.destroy()
        },
        renderBusinessHours: function () {
            this.dayGrid.renderBusinessHours()
        },
        renderSkeletonHtml: function () {
            return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '"></td></tr></tbody></table>'
        },
        weekNumberStyleAttr: function () {
            return null !== this.weekNumberWidth ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
        },
        hasRigidRows: function () {
            var a = this.opt("eventLimit");
            return a && "number" != typeof a
        },
        updateWidth: function () {
            this.weekNumbersVisible && (this.weekNumberWidth = k(this.el.find(".fc-week-number")))
        },
        setHeight: function (a, b) {
            var c, d, g = this.opt("eventLimit");
            this.scroller.clear(), f(this.headRowEl), this.dayGrid.removeSegPopover(), g && "number" == typeof g && this.dayGrid.limitRows(g), c = this.computeScrollerHeight(a), this.setGridHeight(c, b), g && "number" != typeof g && this.dayGrid.limitRows(g), b || (this.scroller.setHeight(c), d = this.scroller.getScrollbarWidths(), (d.left || d.right) && (e(this.headRowEl, d), c = this.computeScrollerHeight(a), this.scroller.setHeight(c)), this.scroller.lockOverflow(d))
        },
        computeScrollerHeight: function (a) {
            return a - l(this.el, this.scroller.el)
        },
        setGridHeight: function (a, b) {
            b ? j(this.dayGrid.rowEls) : i(this.dayGrid.rowEls, a, !0)
        },
        queryScroll: function () {
            return this.scroller.getScrollTop()
        },
        setScroll: function (a) {
            this.scroller.setScrollTop(a)
        },
        prepareHits: function () {
            this.dayGrid.prepareHits()
        },
        releaseHits: function () {
            this.dayGrid.releaseHits()
        },
        queryHit: function (a, b) {
            return this.dayGrid.queryHit(a, b)
        },
        getHitSpan: function (a) {
            return this.dayGrid.getHitSpan(a)
        },
        getHitEl: function (a) {
            return this.dayGrid.getHitEl(a)
        },
        renderEvents: function (a) {
            this.dayGrid.renderEvents(a), this.updateHeight()
        },
        getEventSegs: function () {
            return this.dayGrid.getEventSegs()
        },
        unrenderEvents: function () {
            this.dayGrid.unrenderEvents()
        },
        renderDrag: function (a, b) {
            return this.dayGrid.renderDrag(a, b)
        },
        unrenderDrag: function () {
            this.dayGrid.unrenderDrag()
        },
        renderSelection: function (a) {
            this.dayGrid.renderSelection(a)
        },
        unrenderSelection: function () {
            this.dayGrid.unrenderSelection()
        }
    }),
            Gb = {
                renderHeadIntroHtml: function () {
                    var a = this.view;
                    return a.weekNumbersVisible ? '<th class="fc-week-number ' + a.widgetHeaderClass + '" ' + a.weekNumberStyleAttr() + "><span>" + ca(a.opt("weekNumberTitle")) + "</span></th>" : ""
                },
                renderNumberIntroHtml: function (a) {
                    var b = this.view;
                    return b.weekNumbersVisible ? '<td class="fc-week-number" ' + b.weekNumberStyleAttr() + "><span>" + this.getCellDate(a, 0).format("w") + "</span></td>" : ""
                },
                renderBgIntroHtml: function () {
                    var a = this.view;
                    return a.weekNumbersVisible ? '<td class="fc-week-number ' + a.widgetContentClass + '" ' + a.weekNumberStyleAttr() + "></td>" : ""
                },
                renderIntroHtml: function () {
                    var a = this.view;
                    return a.weekNumbersVisible ? '<td class="fc-week-number" ' + a.weekNumberStyleAttr() + "></td>" : ""
                }
            },
    Hb = Va.MonthView = Fb.extend({
        computeRange: function (a) {
            var b, c = Fb.prototype.computeRange.call(this, a);
            return this.isFixedWeeks() && (b = Math.ceil(c.end.diff(c.start, "weeks", !0)), c.end.add(6 - b, "weeks")), c
        },
        setGridHeight: function (a, b) {
            b = b || "variable" === this.opt("weekMode"), b && (a *= this.rowCnt / 6), i(this.dayGrid.rowEls, a, !b)
        },
        isFixedWeeks: function () {
            var a = this.opt("weekMode");
            return a ? "fixed" === a : this.opt("fixedWeekCount")
        }
    });
    Wa.basic = {
        "class": Fb
    }, Wa.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    }, Wa.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    }, Wa.month = {
        "class": Hb,
        duration: {
            months: 1
        },
        defaults: {
            fixedWeekCount: !0
        }
    };
    var Ib = Va.AgendaView = wb.extend({
        scroller: null,
        timeGridClass: vb,
        timeGrid: null,
        dayGridClass: ub,
        dayGrid: null,
        axisWidth: null,
        headContainerEl: null,
        noScrollRowEls: null,
        bottomRuleEl: null,
        initialize: function () {
            this.timeGrid = this.instantiateTimeGrid(), this.opt("allDaySlot") && (this.dayGrid = this.instantiateDayGrid()), this.scroller = new xb({
                overflowX: "hidden",
                overflowY: "auto"
            })
        },
        instantiateTimeGrid: function () {
            var a = this.timeGridClass.extend(Jb);
            return new a(this)
        },
        instantiateDayGrid: function () {
            var a = this.dayGridClass.extend(Kb);
            return new a(this)
        },
        setRange: function (a) {
            wb.prototype.setRange.call(this, a), this.timeGrid.setRange(a), this.dayGrid && this.dayGrid.setRange(a)
        },
        renderDates: function () {
            this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml()), this.renderHead(), this.scroller.render();
            var b = this.scroller.el.addClass("fc-time-grid-container"),
                    c = a('<div class="fc-time-grid" />').appendTo(b);
            this.el.find(".fc-body > tr > td").append(b), this.timeGrid.setElement(c), this.timeGrid.renderDates(), this.bottomRuleEl = a('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el), this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight()), this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
        },
        renderHead: function () {
            this.headContainerEl = this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())
        },
        unrenderDates: function () {
            this.timeGrid.unrenderDates(), this.timeGrid.removeElement(), this.dayGrid && (this.dayGrid.unrenderDates(), this.dayGrid.removeElement()), this.scroller.destroy()
        },
        renderSkeletonHtml: function () {
            return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"></td></tr></thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + this.widgetHeaderClass + '"/>' : "") + "</td></tr></tbody></table>"
        },
        axisStyleAttr: function () {
            return null !== this.axisWidth ? 'style="width:' + this.axisWidth + 'px"' : ""
        },
        renderBusinessHours: function () {
            this.timeGrid.renderBusinessHours(), this.dayGrid && this.dayGrid.renderBusinessHours()
        },
        unrenderBusinessHours: function () {
            this.timeGrid.unrenderBusinessHours(), this.dayGrid && this.dayGrid.unrenderBusinessHours()
        },
        getNowIndicatorUnit: function () {
            return this.timeGrid.getNowIndicatorUnit()
        },
        renderNowIndicator: function (a) {
            this.timeGrid.renderNowIndicator(a)
        },
        unrenderNowIndicator: function () {
            this.timeGrid.unrenderNowIndicator()
        },
        updateSize: function (a) {
            this.timeGrid.updateSize(a), wb.prototype.updateSize.call(this, a)
        },
        updateWidth: function () {
            this.axisWidth = k(this.el.find(".fc-axis"))
        },
        setHeight: function (a, b) {
            var c, d, g;
            this.bottomRuleEl.hide(), this.scroller.clear(), f(this.noScrollRowEls), this.dayGrid && (this.dayGrid.removeSegPopover(), c = this.opt("eventLimit"), c && "number" != typeof c && (c = Lb), c && this.dayGrid.limitRows(c)), b || (d = this.computeScrollerHeight(a), this.scroller.setHeight(d), g = this.scroller.getScrollbarWidths(), (g.left || g.right) && (e(this.noScrollRowEls, g), d = this.computeScrollerHeight(a), this.scroller.setHeight(d)), this.scroller.lockOverflow(g), this.timeGrid.getTotalSlatHeight() < d && this.bottomRuleEl.show())
        },
        computeScrollerHeight: function (a) {
            return a - l(this.el, this.scroller.el)
        },
        computeInitialScroll: function () {
            var a = b.duration(this.opt("scrollTime")),
                    c = this.timeGrid.computeTimeTop(a);
            return c = Math.ceil(c), c && c++, c
        },
        queryScroll: function () {
            return this.scroller.getScrollTop()
        },
        setScroll: function (a) {
            this.scroller.setScrollTop(a)
        },
        prepareHits: function () {
            this.timeGrid.prepareHits(), this.dayGrid && this.dayGrid.prepareHits()
        },
        releaseHits: function () {
            this.timeGrid.releaseHits(), this.dayGrid && this.dayGrid.releaseHits()
        },
        queryHit: function (a, b) {
            var c = this.timeGrid.queryHit(a, b);
            return !c && this.dayGrid && (c = this.dayGrid.queryHit(a, b)), c
        },
        getHitSpan: function (a) {
            return a.component.getHitSpan(a)
        },
        getHitEl: function (a) {
            return a.component.getHitEl(a)
        },
        renderEvents: function (a) {
            var b, c, d = [],
                    e = [],
                    f = [];
            for (c = 0; c < a.length; c++)
                a[c].allDay ? d.push(a[c]) : e.push(a[c]);
            b = this.timeGrid.renderEvents(e), this.dayGrid && (f = this.dayGrid.renderEvents(d)), this.updateHeight()
        },
        getEventSegs: function () {
            return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
        },
        unrenderEvents: function () {
            this.timeGrid.unrenderEvents(), this.dayGrid && this.dayGrid.unrenderEvents()
        },
        renderDrag: function (a, b) {
            return a.start.hasTime() ? this.timeGrid.renderDrag(a, b) : this.dayGrid ? this.dayGrid.renderDrag(a, b) : void 0
        },
        unrenderDrag: function () {
            this.timeGrid.unrenderDrag(), this.dayGrid && this.dayGrid.unrenderDrag()
        },
        renderSelection: function (a) {
            a.start.hasTime() || a.end.hasTime() ? this.timeGrid.renderSelection(a) : this.dayGrid && this.dayGrid.renderSelection(a)
        },
        unrenderSelection: function () {
            this.timeGrid.unrenderSelection(), this.dayGrid && this.dayGrid.unrenderSelection()
        }
    }),
            Jb = {
                renderHeadIntroHtml: function () {
                    var a, b = this.view;
                    return b.opt("weekNumbers") ? (a = this.start.format(b.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + b.widgetHeaderClass + '" ' + b.axisStyleAttr() + "><span>" + ca(a) + "</span></th>") : '<th class="fc-axis ' + b.widgetHeaderClass + '" ' + b.axisStyleAttr() + "></th>"
                },
                renderBgIntroHtml: function () {
                    var a = this.view;
                    return '<td class="fc-axis ' + a.widgetContentClass + '" ' + a.axisStyleAttr() + "></td>"
                },
                renderIntroHtml: function () {
                    var a = this.view;
                    return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>"
                }
            },
    Kb = {
        renderBgIntroHtml: function () {
            var a = this.view;
            return '<td class="fc-axis ' + a.widgetContentClass + '" ' + a.axisStyleAttr() + "><span>" + (a.opt("allDayHtml") || ca(a.opt("allDayText"))) + "</span></td>"
        },
        renderIntroHtml: function () {
            var a = this.view;
            return '<td class="fc-axis" ' + a.axisStyleAttr() + "></td>"
        }
    },
    Lb = 5,
            Mb = [{
                    hours: 1
                }, {
                    minutes: 30
                }, {
                    minutes: 15
                }, {
                    seconds: 30
                }, {
                    seconds: 15
                }];
    return Wa.agenda = {
        "class": Ib,
        defaults: {
            allDaySlot: !0,
            allDayText: "all-day",
            slotDuration: "00:30:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            slotEventOverlap: !0
        }
    }, Wa.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    }, Wa.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    }, Va
});
