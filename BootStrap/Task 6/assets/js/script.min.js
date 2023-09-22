/*!
 * AnchorJS - v1.1.1 - 2015-05-23
 * https://github.com/bryanbraun/anchorjs
 * Copyright (c) 2015 Bryan Braun; Licensed MIT
 */
function AnchorJS(e) {
  "use strict";
  (this.options = e || {}),
    (this._applyRemainingDefaultOptions = function (e) {
      (this.options.icon = this.options.hasOwnProperty("icon")
        ? e.icon
        : "&#xe9cb"),
        (this.options.visible = this.options.hasOwnProperty("visible")
          ? e.visible
          : "hover"),
        (this.options.placement = this.options.hasOwnProperty("placement")
          ? e.placement
          : "right"),
        (this.options.class = this.options.hasOwnProperty("class")
          ? e.class
          : "");
    }),
    this._applyRemainingDefaultOptions(e),
    (this.add = function (e) {
      var t, n, r, i, s, o, a, l, c, u, d, p, h;
      if ((this._applyRemainingDefaultOptions(this.options), e)) {
        if ("string" != typeof e)
          throw new Error("The selector provided to AnchorJS was invalid.");
      } else e = "h1, h2, h3, h4, h5, h6";
      if (0 === (t = document.querySelectorAll(e)).length) return !1;
      for (
        this._addBaselineStyles(),
          n = document.querySelectorAll("[id]"),
          r = [].map.call(n, function (e) {
            return e.id;
          }),
          s = 0;
        s < t.length;
        s++
      ) {
        if (t[s].hasAttribute("id")) i = t[s].getAttribute("id");
        else {
          (c = o =
            t[s].textContent
              .replace(/[^\w\s-]/gi, "")
              .replace(/\s+/g, "-")
              .replace(/-{2,}/g, "-")
              .substring(0, 64)
              .replace(/^-+|-+$/gm, "")
              .toLowerCase()),
            (l = 0);
          do {
            void 0 !== a && (c = o + "-" + l), (a = r.indexOf(c)), (l += 1);
          } while (-1 !== a);
          (a = void 0), r.push(c), t[s].setAttribute("id", c), (i = c);
        }
        (u = i.replace(/-/g, " ")),
          (d =
            '<a class="anchorjs-link ' +
            this.options.class +
            '" href="#' +
            i +
            '" aria-label="Anchor link for: ' +
            u +
            '" data-anchorjs-icon="' +
            this.options.icon +
            '"></a>'),
          ((p = document.createElement("div")).innerHTML = d),
          (h = p.childNodes),
          "always" === this.options.visible && (h[0].style.opacity = "1"),
          "&#xe9cb" === this.options.icon &&
            ((h[0].style.fontFamily = "anchorjs-icons"),
            (h[0].style.fontStyle = "normal"),
            (h[0].style.fontVariant = "normal"),
            (h[0].style.fontWeight = "normal")),
          "left" === this.options.placement
            ? ((h[0].style.position = "absolute"),
              (h[0].style.marginLeft = "-1em"),
              (h[0].style.paddingRight = "0.5em"),
              t[s].insertBefore(h[0], t[s].firstChild))
            : ((h[0].style.paddingLeft = "0.375em"), t[s].appendChild(h[0]));
      }
      return this;
    }),
    (this.remove = function (e) {
      for (var t, n = document.querySelectorAll(e), r = 0; r < n.length; r++)
        (t = n[r].querySelector(".anchorjs-link")) && n[r].removeChild(t);
      return this;
    }),
    (this._addBaselineStyles = function () {
      if (null === document.head.querySelector("style.anchorjs")) {
        var e,
          t = document.createElement("style");
        (t.className = "anchorjs"),
          t.appendChild(document.createTextNode("")),
          void 0 ===
          (e = document.head.querySelector('[rel="stylesheet"], style'))
            ? document.head.appendChild(t)
            : document.head.insertBefore(t, e),
          t.sheet.insertRule(
            " .anchorjs-link {   opacity: 0;   text-decoration: none;   -webkit-font-smoothing: antialiased;   -moz-osx-font-smoothing: grayscale; }",
            t.sheet.cssRules.length
          ),
          t.sheet.insertRule(
            " *:hover > .anchorjs-link, .anchorjs-link:focus  {   opacity: 1; }",
            t.sheet.cssRules.length
          ),
          t.sheet.insertRule(
            " [data-anchorjs-icon]::after {   content: attr(data-anchorjs-icon); }",
            t.sheet.cssRules.length
          ),
          t.sheet.insertRule(
            ' @font-face {   font-family: "anchorjs-icons";   font-style: normal;   font-weight: normal;   src: url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBTUAAAC8AAAAYGNtYXAWi9QdAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5Zgq29TcAAAF4AAABNGhlYWQEZM3pAAACrAAAADZoaGVhBhUDxgAAAuQAAAAkaG10eASAADEAAAMIAAAAFGxvY2EAKACuAAADHAAAAAxtYXhwAAgAVwAAAygAAAAgbmFtZQ5yJ3cAAANIAAAB2nBvc3QAAwAAAAAFJAAAACAAAwJAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpywPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6cv//f//AAAAAAAg6cv//f//AAH/4xY5AAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAACADEARAJTAsAAKwBUAAABIiYnJjQ/AT4BMzIWFxYUDwEGIicmND8BNjQnLgEjIgYPAQYUFxYUBw4BIwciJicmND8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFA8BDgEjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAEAAAABAACiToc1Xw889QALBAAAAAAA0XnFFgAAAADRecUWAAAAAAJTAsAAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAAlMAAQAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAACAAAAAoAAMQAAAAAACgAUAB4AmgABAAAABQBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEADgAAAAEAAAAAAAIABwCfAAEAAAAAAAMADgBLAAEAAAAAAAQADgC0AAEAAAAAAAUACwAqAAEAAAAAAAYADgB1AAEAAAAAAAoAGgDeAAMAAQQJAAEAHAAOAAMAAQQJAAIADgCmAAMAAQQJAAMAHABZAAMAAQQJAAQAHADCAAMAAQQJAAUAFgA1AAMAAQQJAAYAHACDAAMAAQQJAAoANAD4YW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzUmVndWxhcgBSAGUAZwB1AGwAYQByYW5jaG9yanMtaWNvbnMAYQBuAGMAaABvAHIAagBzAC0AaQBjAG8AbgBzRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==) format("truetype"); }',
            t.sheet.cssRules.length
          );
      }
    });
}
!(function () {
  "use strict";
  var e = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(e).forEach(function (e) {
    e.addEventListener(
      "submit",
      function (t) {
        e.checkValidity() || (t.preventDefault(), t.stopPropagation()),
          e.classList.add("was-validated");
      },
      !1
    );
  });
})(),
  $(".chosen").select2();
var anchors = new AnchorJS();
(function (e) {
  "use strict";
  e.Placeholders = {
    Utils: {
      addEventListener: function (e, t, n) {
        return e.addEventListener
          ? e.addEventListener(t, n, !1)
          : e.attachEvent
          ? e.attachEvent("on" + t, n)
          : void 0;
      },
      inArray: function (e, t) {
        var n, r;
        for (n = 0, r = e.length; r > n; n++) if (e[n] === t) return !0;
        return !1;
      },
      moveCaret: function (e, t) {
        var n;
        e.createTextRange
          ? ((n = e.createTextRange()).move("character", t), n.select())
          : e.selectionStart && (e.focus(), e.setSelectionRange(t, t));
      },
      changeType: function (e, t) {
        try {
          return (e.type = t), !0;
        } catch (e) {
          return !1;
        }
      },
    },
  };
})(this),
  (function (e) {
    "use strict";
    function t() {}
    function n() {
      try {
        return document.activeElement;
      } catch (e) {}
    }
    function r(e, t) {
      var n,
        r,
        i = !!t && e.value !== t,
        s = e.value === e.getAttribute(C);
      return (
        !((!i && !s) || "true" !== e.getAttribute(S)) &&
        (e.removeAttribute(S),
        (e.value = e.value.replace(e.getAttribute(C), "")),
        (e.className = e.className.replace(x, "")),
        (r = e.getAttribute(T)),
        parseInt(r, 10) >= 0 &&
          (e.setAttribute("maxLength", r), e.removeAttribute(T)),
        (n = e.getAttribute(E)) && (e.type = n),
        !0)
      );
    }
    function i(e) {
      var t = e.getAttribute(C);
      return (
        !("" !== e.value || !t) &&
        (e.setAttribute(S, "true"),
        (e.value = t),
        (e.className += " " + $),
        e.getAttribute(T) ||
          (e.setAttribute(T, e.maxLength), e.removeAttribute("maxLength")),
        e.getAttribute(E)
          ? (e.type = "text")
          : "password" === e.type &&
            P.changeType(e, "text") &&
            e.setAttribute(E, "password"),
        !0)
      );
    }
    function s(e, t) {
      var n, r, i, s, o;
      if (e && e.getAttribute(C)) t(e);
      else
        for (
          r = e ? e.getElementsByTagName("input") : l,
            i = e ? e.getElementsByTagName("textarea") : c,
            o = 0,
            s = (n = r ? r.length : 0) + (i ? i.length : 0);
          s > o;
          o++
        )
          t(n > o ? r[o] : i[o - n]);
    }
    function o(e) {
      s(e, r);
    }
    function a(e) {
      e.form &&
        ("string" == typeof (v = e.form) && (v = document.getElementById(v)),
        v.getAttribute(O) ||
          (P.addEventListener(
            v,
            "submit",
            (function (e) {
              return function () {
                o(e);
              };
            })(v)
          ),
          v.setAttribute(O, "true"))),
        P.addEventListener(
          e,
          "focus",
          (function (e) {
            return function () {
              u && e.value === e.getAttribute(C) && "true" === e.getAttribute(S)
                ? P.moveCaret(e, 0)
                : r(e);
            };
          })(e)
        ),
        P.addEventListener(
          e,
          "blur",
          (function (e) {
            return function () {
              i(e);
            };
          })(e)
        ),
        u &&
          (P.addEventListener(
            e,
            "keydown",
            (function (e) {
              return function (t) {
                return (
                  (p = e.value),
                  "true" === e.getAttribute(S) &&
                  p === e.getAttribute(C) &&
                  P.inArray(_, t.keyCode)
                    ? (t.preventDefault && t.preventDefault(), !1)
                    : void 0
                );
              };
            })(e)
          ),
          P.addEventListener(
            e,
            "keyup",
            (function (e) {
              return function () {
                r(e, p), "" === e.value && (e.blur(), P.moveCaret(e, 0));
              };
            })(e)
          ),
          P.addEventListener(
            e,
            "click",
            (function (e) {
              return function () {
                e === n() &&
                  e.value === e.getAttribute(C) &&
                  "true" === e.getAttribute(S) &&
                  P.moveCaret(e, 0);
              };
            })(e)
          )),
        e.setAttribute(D, "true"),
        e.setAttribute(C, g),
        (u || e !== n()) && i(e);
    }
    var l,
      c,
      u,
      d,
      p,
      h,
      f,
      g,
      m,
      v,
      A,
      y,
      w,
      b = [
        "text",
        "search",
        "url",
        "tel",
        "email",
        "password",
        "number",
        "textarea",
      ],
      _ = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
      $ = "placeholdersjs",
      x = RegExp("(?:^|\\s)" + $ + "(?!\\S)"),
      C = "data-placeholder-value",
      S = "data-placeholder-active",
      E = "data-placeholder-type",
      O = "data-placeholder-submit",
      D = "data-placeholder-bound",
      T = "data-placeholder-maxlength",
      L = document.createElement("input"),
      q = document.getElementsByTagName("head")[0],
      j = document.documentElement,
      k = e.Placeholders,
      P = k.Utils;
    if (((k.nativeSupport = void 0 !== L.placeholder), !k.nativeSupport)) {
      for (
        l = document.getElementsByTagName("input"),
          c = document.getElementsByTagName("textarea"),
          u = "false" === j.getAttribute("data-placeholder-focus"),
          d = "false" !== j.getAttribute("data-placeholder-live"),
          (h = document.createElement("style")).type = "text/css",
          f = document.createTextNode("." + $ + " { color:#ccc; }"),
          h.styleSheet
            ? (h.styleSheet.cssText = f.nodeValue)
            : h.appendChild(f),
          q.insertBefore(h, q.firstChild),
          w = 0,
          y = l.length + c.length;
        y > w;
        w++
      )
        (A = l.length > w ? l[w] : c[w - l.length]),
          (g = A.attributes.placeholder) &&
            (g = g.nodeValue) &&
            P.inArray(b, A.type) &&
            a(A);
      m = setInterval(function () {
        for (w = 0, y = l.length + c.length; y > w; w++)
          (A = l.length > w ? l[w] : c[w - l.length]),
            (g = A.attributes.placeholder)
              ? (g = g.nodeValue) &&
                P.inArray(b, A.type) &&
                (A.getAttribute(D) || a(A),
                (g !== A.getAttribute(C) ||
                  ("password" === A.type && !A.getAttribute(E))) &&
                  ("password" === A.type &&
                    !A.getAttribute(E) &&
                    P.changeType(A, "text") &&
                    A.setAttribute(E, "password"),
                  A.value === A.getAttribute(C) && (A.value = g),
                  A.setAttribute(C, g)))
              : A.getAttribute(S) && (r(A), A.removeAttribute(C));
        d || clearInterval(m);
      }, 100);
    }
    P.addEventListener(e, "beforeunload", function () {
      k.disable();
    }),
      (k.disable = k.nativeSupport ? t : o),
      (k.enable = k.nativeSupport
        ? t
        : function (e) {
            s(e, i);
          });
  })(this),
  (function (e) {
    "use strict";
    var t = e.fn.val,
      n = e.fn.prop;
    Placeholders.nativeSupport ||
      ((e.fn.val = function (e) {
        var n = t.apply(this, arguments),
          r = this.eq(0).data("placeholder-value");
        return void 0 === e && this.eq(0).data("placeholder-active") && n === r
          ? ""
          : n;
      }),
      (e.fn.prop = function (e, t) {
        return void 0 === t &&
          this.eq(0).data("placeholder-active") &&
          "value" === e
          ? ""
          : n.apply(this, arguments);
      }));
  })(jQuery),
  /*!
   * The MIT License
   *
   * Copyright (c) 2012 James Allardice
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to
   * deal in the Software without restriction, including without limitation the
   * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
   * sell copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in
   * all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
   * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
   * IN THE SOFTWARE.
   */
  (function (e) {
    "use strict";
    var t = void 0 !== document.createElement("input").placeholder;
    if (
      ((e.Placeholders = {
        nativeSupport: t,
        disable: t ? S : j,
        enable: t
          ? S
          : function (e) {
              q(e, P);
            },
      }),
      !t)
    ) {
      var n,
        r = [
          "text",
          "search",
          "url",
          "tel",
          "email",
          "password",
          "number",
          "textarea",
        ],
        i = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
        s = new RegExp("(?:^|\\s)placeholdersjs(?!\\S)"),
        o = "data-placeholder-value",
        a = "data-placeholder-active",
        l = "data-placeholder-type",
        c = "data-placeholder-submit",
        u = "data-placeholder-bound",
        d = "data-placeholder-maxlength",
        p = document.getElementsByTagName("head")[0],
        h = document.documentElement,
        f = e.Placeholders,
        g = document.getElementsByTagName("input"),
        m = document.getElementsByTagName("textarea"),
        v = "false" === h.getAttribute("data-placeholder-focus"),
        A = "false" !== h.getAttribute("data-placeholder-live"),
        y = document.createElement("style");
      y.type = "text/css";
      var w,
        b,
        _ = document.createTextNode(".placeholdersjs {color:#ccc;}");
      y.styleSheet ? (y.styleSheet.cssText = _.nodeValue) : y.appendChild(_),
        p.insertBefore(y, p.firstChild);
      for (var $ = 0, x = g.length + m.length; $ < x; $++)
        (b = $ < g.length ? g[$] : m[$ - g.length]),
          (w = b.attributes.placeholder) &&
            (w = w.nodeValue) &&
            O(r, b.type) &&
            I(b);
      var C = setInterval(function () {
        for (var e = 0, t = g.length + m.length; e < t; e++)
          (b = e < g.length ? g[e] : m[e - g.length]),
            (w = b.attributes.placeholder)
              ? (w = w.nodeValue) &&
                O(r, b.type) &&
                (b.getAttribute(u) || I(b),
                (w !== b.getAttribute(o) ||
                  ("password" === b.type && !b.getAttribute(l))) &&
                  ("password" === b.type &&
                    !b.getAttribute(l) &&
                    L(b, "text") &&
                    b.setAttribute(l, "password"),
                  b.value === b.getAttribute(o) && (b.value = w),
                  b.setAttribute(o, w)))
              : b.getAttribute(a) && (k(b), b.removeAttribute(o));
        A || clearInterval(C);
      }, 100);
      D(e, "beforeunload", function () {
        f.disable();
      });
    }
    function S() {}
    function E() {
      try {
        return document.activeElement;
      } catch (e) {}
    }
    function O(e, t) {
      for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
      return !1;
    }
    function D(e, t, n) {
      return e.addEventListener
        ? e.addEventListener(t, n, !1)
        : e.attachEvent
        ? e.attachEvent("on" + t, n)
        : void 0;
    }
    function T(e, t) {
      var n;
      e.createTextRange
        ? ((n = e.createTextRange()).move("character", t), n.select())
        : e.selectionStart && (e.focus(), e.setSelectionRange(t, t));
    }
    function L(e, t) {
      try {
        return (e.type = t), !0;
      } catch (e) {
        return !1;
      }
    }
    function q(e, t) {
      if (e && e.getAttribute(o)) t(e);
      else
        for (
          var n = e ? e.getElementsByTagName("input") : g,
            r = e ? e.getElementsByTagName("textarea") : m,
            i = n ? n.length : 0,
            s = i + (r ? r.length : 0),
            a = 0;
          a < s;
          a++
        )
          t(a < i ? n[a] : r[a - i]);
    }
    function j(e) {
      q(e, k);
    }
    function k(e, t) {
      var n = !!t && e.value !== t,
        r = e.value === e.getAttribute(o);
      if ((n || r) && "true" === e.getAttribute(a)) {
        e.removeAttribute(a),
          (e.value = e.value.replace(e.getAttribute(o), "")),
          (e.className = e.className.replace(s, ""));
        var i = e.getAttribute(d);
        parseInt(i, 10) >= 0 &&
          (e.setAttribute("maxLength", i), e.removeAttribute(d));
        var c = e.getAttribute(l);
        return c && (e.type = c), !0;
      }
      return !1;
    }
    function P(e) {
      var t = e.getAttribute(o);
      return (
        !("" !== e.value || !t) &&
        (e.setAttribute(a, "true"),
        (e.value = t),
        (e.className += " placeholdersjs"),
        e.getAttribute(d) ||
          (e.setAttribute(d, e.maxLength), e.removeAttribute("maxLength")),
        e.getAttribute(l)
          ? (e.type = "text")
          : "password" === e.type &&
            L(e, "text") &&
            e.setAttribute(l, "password"),
        !0)
      );
    }
    function I(e) {
      var t = e.form;
      t &&
        "string" == typeof t &&
        ((t = document.getElementById(t)).getAttribute(c) ||
          (D(
            t,
            "submit",
            (function (e) {
              return function () {
                j(e);
              };
            })(t)
          ),
          t.setAttribute(c, "true"))),
        D(
          e,
          "focus",
          (function (e) {
            return function () {
              v && e.value === e.getAttribute(o) && "true" === e.getAttribute(a)
                ? T(e, 0)
                : k(e);
            };
          })(e)
        ),
        D(
          e,
          "blur",
          (function (e) {
            return function () {
              P(e);
            };
          })(e)
        ),
        v &&
          (D(
            e,
            "keydown",
            (function (e) {
              return function (t) {
                if (
                  ((n = e.value),
                  "true" === e.getAttribute(a) &&
                    n === e.getAttribute(o) &&
                    O(i, t.keyCode))
                )
                  return t.preventDefault && t.preventDefault(), !1;
              };
            })(e)
          ),
          D(
            e,
            "keyup",
            (function (e) {
              return function () {
                k(e, n), "" === e.value && (e.blur(), T(e, 0));
              };
            })(e)
          ),
          D(
            e,
            "click",
            (function (e) {
              return function () {
                e === E() &&
                  e.value === e.getAttribute(o) &&
                  "true" === e.getAttribute(a) &&
                  T(e, 0);
              };
            })(e)
          )),
        e.setAttribute(u, "true"),
        e.setAttribute(o, w),
        (v || e !== E()) && P(e);
    }
  })(this);
var q = null;
(window.PR_SHOULD_USE_CONTINUATION = !0),
  (function () {
    function e(e, t, n, r) {
      t && (n((e = { a: t, d: e })), r.push.apply(r, e.e));
    }
    function t(t, n) {
      var r,
        i = {};
      !(function () {
        for (
          var e = t.concat(n), s = [], o = {}, a = 0, l = e.length;
          a < l;
          ++a
        ) {
          var c = e[a],
            u = c[3];
          if (u) for (var d = u.length; --d >= 0; ) i[u.charAt(d)] = c;
          (u = "" + (c = c[1])), o.hasOwnProperty(u) || (s.push(c), (o[u] = q));
        }
        s.push(/[\S\s]/),
          (r = (function (e) {
            function t(e) {
              var t = e.charCodeAt(0);
              if (92 !== t) return t;
              var n = e.charAt(1);
              return (t = d[n])
                ? t
                : "0" <= n && n <= "7"
                ? parseInt(e.substring(1), 8)
                : "u" === n || "x" === n
                ? parseInt(e.substring(2), 16)
                : e.charCodeAt(1);
            }
            function n(e) {
              return e < 32
                ? (e < 16 ? "\\x0" : "\\x") + e.toString(16)
                : (("\\" !== (e = String.fromCharCode(e)) &&
                    "-" !== e &&
                    "[" !== e &&
                    "]" !== e) ||
                    (e = "\\" + e),
                  e);
            }
            function r(e) {
              for (
                var r = e
                    .substring(1, e.length - 1)
                    .match(
                      /\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g
                    ),
                  i = ((e = []), []),
                  s = "^" === r[0],
                  o = s ? 1 : 0,
                  a = r.length;
                o < a;
                ++o
              ) {
                var l,
                  c = r[o];
                if (/\\[bdsw]/i.test(c)) e.push(c);
                else
                  (c = t(c)),
                    o + 2 < a && "-" === r[o + 1]
                      ? ((l = t(r[o + 2])), (o += 2))
                      : (l = c),
                    i.push([c, l]),
                    l < 65 ||
                      c > 122 ||
                      (l < 65 ||
                        c > 90 ||
                        i.push([32 | Math.max(65, c), 32 | Math.min(l, 90)]),
                      l < 97 ||
                        c > 122 ||
                        i.push([
                          -33 & Math.max(97, c),
                          -33 & Math.min(l, 122),
                        ]));
              }
              for (
                i.sort(function (e, t) {
                  return e[0] - t[0] || t[1] - e[1];
                }),
                  r = [],
                  c = [NaN, NaN],
                  o = 0;
                o < i.length;
                ++o
              )
                (a = i[o])[0] <= c[1] + 1
                  ? (c[1] = Math.max(c[1], a[1]))
                  : r.push((c = a));
              for (
                i = ["["], s && i.push("^"), i.push.apply(i, e), o = 0;
                o < r.length;
                ++o
              )
                (a = r[o]),
                  i.push(n(a[0])),
                  a[1] > a[0] &&
                    (a[1] + 1 > a[0] && i.push("-"), i.push(n(a[1])));
              return i.push("]"), i.join("");
            }
            function i(e) {
              for (
                var t = e.source.match(
                    /\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g
                  ),
                  n = t.length,
                  i = [],
                  a = 0,
                  l = 0;
                a < n;
                ++a
              ) {
                var c = t[a];
                "(" === c
                  ? ++l
                  : "\\" === c.charAt(0) &&
                    (c = +c.substring(1)) &&
                    c <= l &&
                    (i[c] = -1);
              }
              for (a = 1; a < i.length; ++a) -1 === i[a] && (i[a] = ++s);
              for (l = a = 0; a < n; ++a)
                "(" === (c = t[a])
                  ? void 0 === i[++l] && (t[a] = "(?:")
                  : "\\" === c.charAt(0) &&
                    (c = +c.substring(1)) &&
                    c <= l &&
                    (t[a] = "\\" + i[l]);
              for (l = a = 0; a < n; ++a)
                "^" === t[a] && "^" !== t[a + 1] && (t[a] = "");
              if (e.ignoreCase && o)
                for (a = 0; a < n; ++a)
                  (e = (c = t[a]).charAt(0)),
                    c.length >= 2 && "[" === e
                      ? (t[a] = r(c))
                      : "\\" !== e &&
                        (t[a] = c.replace(/[A-Za-z]/g, function (e) {
                          return (
                            (e = e.charCodeAt(0)),
                            "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
                          );
                        }));
              return t.join("");
            }
            for (var s = 0, o = !1, a = !1, l = 0, c = e.length; l < c; ++l) {
              var u = e[l];
              if (u.ignoreCase) a = !0;
              else if (
                /[a-z]/i.test(
                  u.source.replace(
                    /\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi,
                    ""
                  )
                )
              ) {
                (o = !0), (a = !1);
                break;
              }
            }
            var d = { b: 8, t: 9, n: 10, v: 11, f: 12, r: 13 },
              p = [];
            for (l = 0, c = e.length; l < c; ++l) {
              if ((u = e[l]).global || u.multiline) throw Error("" + u);
              p.push("(?:" + i(u) + ")");
            }
            return RegExp(p.join("|"), a ? "gi" : "g");
          })(s));
      })();
      var o = n.length;
      return function t(a) {
        for (
          var l = a.d,
            c = [l, "pln"],
            u = 0,
            d = a.a.match(r) || [],
            p = {},
            h = 0,
            f = d.length;
          h < f;
          ++h
        ) {
          var g,
            m = d[h],
            v = p[m],
            A = void 0;
          if ("string" == typeof v) g = !1;
          else {
            var y = i[m.charAt(0)];
            if (y) (A = m.match(y[1])), (v = y[0]);
            else {
              for (g = 0; g < o; ++g)
                if (((y = n[g]), (A = m.match(y[1])))) {
                  v = y[0];
                  break;
                }
              A || (v = "pln");
            }
            !(g = v.length >= 5 && "lang-" === v.substring(0, 5)) ||
              (A && "string" == typeof A[1]) ||
              ((g = !1), (v = "src")),
              g || (p[m] = v);
          }
          if (((y = u), (u += m.length), g)) {
            g = A[1];
            var w = m.indexOf(g),
              b = w + g.length;
            A[2] && (w = (b = m.length - A[2].length) - g.length),
              (v = v.substring(5)),
              e(l + y, m.substring(0, w), t, c),
              e(l + y + w, g, s(v, g), c),
              e(l + y + b, m.substring(b), t, c);
          } else c.push(l + y, v);
        }
        a.e = c;
      };
    }
    function n(e) {
      var n = [],
        r = [];
      e.tripleQuotedStrings
        ? n.push([
            "str",
            /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/,
            q,
            "'\"",
          ])
        : e.multiLineStrings
        ? n.push([
            "str",
            /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/,
            q,
            "'\"`",
          ])
        : n.push([
            "str",
            /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/,
            q,
            "\"'",
          ]),
        e.verbatimStrings && r.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
      var i = e.hashComments;
      return (
        i &&
          (e.cStyleComments
            ? (i > 1
                ? n.push([
                    "com",
                    /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/,
                    q,
                    "#",
                  ])
                : n.push([
                    "com",
                    /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/,
                    q,
                    "#",
                  ]),
              r.push([
                "str",
                /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/,
                q,
              ]))
            : n.push(["com", /^#[^\n\r]*/, q, "#"])),
        e.cStyleComments &&
          (r.push(["com", /^\/\/[^\n\r]*/, q]),
          r.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])),
        e.regexLiterals &&
          r.push([
            "lang-regex",
            /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/,
          ]),
        (i = e.types) && r.push(["typ", i]),
        (e = ("" + e.keywords).replace(/^ | $/g, "")).length &&
          r.push([
            "kwd",
            RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"),
            q,
          ]),
        n.push(["pln", /^\s+/, q, " \r\n\t "]),
        r.push(
          ["lit", /^@[$_a-z][\w$@]*/i, q],
          ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q],
          ["pln", /^[$_a-z][\w$@]*/i, q],
          [
            "lit",
            /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i,
            q,
            "0123456789",
          ],
          ["pln", /^\\[\S\s]?/, q],
          ["pun", /^.[^\s\w"-$'./@\\`]*/, q]
        ),
        t(n, r)
      );
    }
    function r(e, t) {
      function n(e) {
        switch (e.nodeType) {
          case 1:
            if (s.test(e.className)) break;
            if ("BR" === e.nodeName)
              r(e), e.parentNode && e.parentNode.removeChild(e);
            else for (e = e.firstChild; e; e = e.nextSibling) n(e);
            break;
          case 3:
          case 4:
            if (l) {
              var t = e.nodeValue,
                i = t.match(o);
              if (i) {
                var c = t.substring(0, i.index);
                (e.nodeValue = c),
                  (t = t.substring(i.index + i[0].length)) &&
                    e.parentNode.insertBefore(
                      a.createTextNode(t),
                      e.nextSibling
                    ),
                  r(e),
                  c || e.parentNode.removeChild(e);
              }
            }
        }
      }
      function r(e) {
        for (; !e.nextSibling; ) if (!(e = e.parentNode)) return;
        var t;
        for (
          e = (function e(t, n) {
            var r = n ? t.cloneNode(!1) : t;
            if ((i = t.parentNode)) {
              var i = e(i, 1),
                s = t.nextSibling;
              i.appendChild(r);
              for (var o = s; o; o = s) (s = o.nextSibling), i.appendChild(o);
            }
            return r;
          })(e.nextSibling, 0);
          (t = e.parentNode) && 1 === t.nodeType;

        )
          e = t;
        c.push(e);
      }
      var i,
        s = /(?:^|\s)nocode(?:\s|$)/,
        o = /\r\n?|\n/,
        a = e.ownerDocument;
      e.currentStyle
        ? (i = e.currentStyle.whiteSpace)
        : window.getComputedStyle &&
          (i = a.defaultView
            .getComputedStyle(e, q)
            .getPropertyValue("white-space"));
      var l = i && "pre" === i.substring(0, 3);
      for (i = a.createElement("LI"); e.firstChild; )
        i.appendChild(e.firstChild);
      for (var c = [i], u = 0; u < c.length; ++u) n(c[u]);
      t === (0 | t) && c[0].setAttribute("value", t);
      var d = a.createElement("OL");
      d.className = "linenums";
      for (
        var p = Math.max(0, (t - 1) | 0) || 0, h = ((u = 0), c.length);
        u < h;
        ++u
      )
        ((i = c[u]).className = "L" + ((u + p) % 10)),
          i.firstChild || i.appendChild(a.createTextNode(" ")),
          d.appendChild(i);
      e.appendChild(d);
    }
    function i(e, t) {
      for (var n = t.length; --n >= 0; ) {
        var r = t[n];
        v.hasOwnProperty(r)
          ? window.console &&
            console.warn("cannot override language handler %s", r)
          : (v[r] = e);
      }
    }
    function s(e, t) {
      return (
        (e && v.hasOwnProperty(e)) ||
          (e = /^\s*</.test(t) ? "default-markup" : "default-code"),
        v[e]
      );
    }
    function o(e) {
      var t = e.g;
      try {
        var n = (function (e) {
            var t,
              n = /(?:^|\s)nocode(?:\s|$)/,
              r = [],
              i = 0,
              s = [],
              o = 0;
            e.currentStyle
              ? (t = e.currentStyle.whiteSpace)
              : window.getComputedStyle &&
                (t = document.defaultView
                  .getComputedStyle(e, q)
                  .getPropertyValue("white-space"));
            var a = t && "pre" === t.substring(0, 3);
            return (
              (function e(t) {
                switch (t.nodeType) {
                  case 1:
                    if (n.test(t.className)) break;
                    for (var l = t.firstChild; l; l = l.nextSibling) e(l);
                    ("BR" !== (l = t.nodeName) && "LI" !== l) ||
                      ((r[o] = "\n"),
                      (s[o << 1] = i++),
                      (s[(o++ << 1) | 1] = t));
                    break;
                  case 3:
                  case 4:
                    (l = t.nodeValue).length &&
                      ((l = a
                        ? l.replace(/\r\n?/g, "\n")
                        : l.replace(/[\t\n\r ]+/g, " ")),
                      (r[o] = l),
                      (s[o << 1] = i),
                      (i += l.length),
                      (s[(o++ << 1) | 1] = t));
                }
              })(e),
              { a: r.join("").replace(/\n$/, ""), c: s }
            );
          })(e.h),
          r = n.a;
        (e.a = r), (e.c = n.c), (e.d = 0), s(t, r)(e);
        var i,
          o,
          a = /\bMSIE\b/.test(navigator.userAgent),
          l = ((t = /\n/g), e.a),
          c = l.length,
          u = ((n = 0), e.c),
          d = u.length,
          p = ((r = 0), e.e),
          h = p.length;
        e = 0;
        for (p[h] = c, o = i = 0; o < h; )
          p[o] !== p[o + 2] ? ((p[i++] = p[o++]), (p[i++] = p[o++])) : (o += 2);
        for (h = i, o = i = 0; o < h; ) {
          for (
            var f = p[o], g = p[o + 1], m = o + 2;
            m + 2 <= h && p[m + 1] === g;

          )
            m += 2;
          (p[i++] = f), (p[i++] = g), (o = m);
        }
        for (p.length = i; r < d; ) {
          var v,
            A = u[r + 2] || c,
            y = p[e + 2] || c,
            w = ((m = Math.min(A, y)), u[r + 1]);
          if (1 !== w.nodeType && (v = l.substring(n, m))) {
            a && (v = v.replace(t, "\r")), (w.nodeValue = v);
            var b = w.ownerDocument,
              _ = b.createElement("SPAN");
            _.className = p[e + 1];
            var $ = w.parentNode;
            $.replaceChild(_, w),
              _.appendChild(w),
              n < A &&
                ((u[r + 1] = w = b.createTextNode(l.substring(m, A))),
                $.insertBefore(w, _.nextSibling));
          }
          (n = m) >= A && (r += 2), n >= y && (e += 2);
        }
      } catch (e) {
        "console" in window && console.log(e && e.stack ? e.stack : e);
      }
    }
    var a,
      l,
      c = [
        (a = [
          [
            (l = ["break,continue,do,else,for,if,return,while"]),
            "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile",
          ],
          "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof",
        ]),
        "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where",
      ],
      u = [
        a,
        "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient",
      ],
      d = [
        u,
        "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var",
      ],
      p = [
        l,
        "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None",
      ],
      h = [
        l,
        "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END",
      ],
      f =
        /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
      g = /\S/,
      m = n({
        keywords: [
          c,
          d,
          (a = [
            a,
            "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN",
          ]),
          "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" +
            p,
          h,
          (l = [
            l,
            "case,done,elif,esac,eval,fi,function,in,local,set,then,until",
          ]),
        ],
        hashComments: !0,
        cStyleComments: !0,
        multiLineStrings: !0,
        regexLiterals: !0,
      }),
      v = {};
    i(m, ["default-code"]),
      i(
        t(
          [],
          [
            ["pln", /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
            ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
            ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
            ["pun", /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i],
          ]
        ),
        ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]
      ),
      i(
        t(
          [
            ["pln", /^\s+/, q, " \t\r\n"],
            ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"],
          ],
          [
            ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],
            ["pun", /^[/<->]+/],
            ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
            ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
            ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
            ["lang-css", /^style\s*=\s*"([^"]+)"/i],
            ["lang-css", /^style\s*=\s*'([^']+)'/i],
            ["lang-css", /^style\s*=\s*([^\s"'>]+)/i],
          ]
        ),
        ["in.tag"]
      ),
      i(t([], [["atv", /^[\S\s]+/]]), ["uq.val"]),
      i(n({ keywords: c, hashComments: !0, cStyleComments: !0, types: f }), [
        "c",
        "cc",
        "cpp",
        "cxx",
        "cyc",
        "m",
      ]),
      i(n({ keywords: "null,true,false" }), ["json"]),
      i(
        n({
          keywords: d,
          hashComments: !0,
          cStyleComments: !0,
          verbatimStrings: !0,
          types: f,
        }),
        ["cs"]
      ),
      i(n({ keywords: u, cStyleComments: !0 }), ["java"]),
      i(n({ keywords: l, hashComments: !0, multiLineStrings: !0 }), [
        "bsh",
        "csh",
        "sh",
      ]),
      i(
        n({
          keywords: p,
          hashComments: !0,
          multiLineStrings: !0,
          tripleQuotedStrings: !0,
        }),
        ["cv", "py"]
      ),
      i(
        n({
          keywords:
            "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
          hashComments: !0,
          multiLineStrings: !0,
          regexLiterals: !0,
        }),
        ["perl", "pl", "pm"]
      ),
      i(
        n({
          keywords: h,
          hashComments: !0,
          multiLineStrings: !0,
          regexLiterals: !0,
        }),
        ["rb"]
      ),
      i(n({ keywords: a, cStyleComments: !0, regexLiterals: !0 }), ["js"]),
      i(
        n({
          keywords:
            "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
          hashComments: 3,
          cStyleComments: !0,
          multilineStrings: !0,
          tripleQuotedStrings: !0,
          regexLiterals: !0,
        }),
        ["coffee"]
      ),
      i(t([], [["str", /^[\S\s]+/]]), ["regex"]),
      (window.prettyPrintOne = function (e, t, n) {
        var i = document.createElement("PRE");
        return (
          (i.innerHTML = e), n && r(i, n), o({ g: t, i: n, h: i }), i.innerHTML
        );
      }),
      (window.prettyPrint = function (e) {
        for (
          var t = [
              document.getElementsByTagName("pre"),
              document.getElementsByTagName("code"),
              document.getElementsByTagName("xmp"),
            ],
            n = [],
            i = 0;
          i < t.length;
          ++i
        )
          for (var s = 0, a = t[i].length; s < a; ++s) n.push(t[i][s]);
        t = q;
        var l = Date;
        l.now ||
          (l = {
            now: function () {
              return +new Date();
            },
          });
        var c = 0,
          u = /\blang(?:uage)?-([\w.]+)(?!\S)/;
        !(function t() {
          for (
            var i = window.PR_SHOULD_USE_CONTINUATION ? l.now() + 250 : 1 / 0;
            c < n.length && l.now() < i;
            c++
          ) {
            var s = n[c];
            if ((a = s.className).indexOf("prettyprint") >= 0) {
              var a, d, p;
              if ((p = !(a = a.match(u)))) {
                for (
                  var h = void 0, f = (p = s).firstChild;
                  f;
                  f = f.nextSibling
                ) {
                  var m = f.nodeType;
                  h =
                    1 === m
                      ? h
                        ? p
                        : f
                      : 3 === m && g.test(f.nodeValue)
                      ? p
                      : h;
                }
                p = (d = h === p ? void 0 : h) && "CODE" === d.tagName;
              }
              for (
                p && (a = d.className.match(u)),
                  a && (a = a[1]),
                  p = !1,
                  h = s.parentNode;
                h;
                h = h.parentNode
              )
                if (
                  ("pre" === h.tagName ||
                    "code" === h.tagName ||
                    "xmp" === h.tagName) &&
                  h.className &&
                  h.className.indexOf("prettyprint") >= 0
                ) {
                  p = !0;
                  break;
                }
              p ||
                ((p =
                  !!(p = s.className.match(/\blinenums\b(?::(\d+))?/)) &&
                  (!p[1] || !p[1].length || +p[1])) && r(s, p),
                o({ g: a, h: s, i: p }));
            }
          }
          c < n.length ? setTimeout(t, 250) : e && e();
        })();
      }),
      (window.PR = {
        createSimpleLexer: t,
        registerLangHandler: i,
        sourceDecorator: n,
        PR_ATTRIB_NAME: "atn",
        PR_ATTRIB_VALUE: "atv",
        PR_COMMENT: "com",
        PR_DECLARATION: "dec",
        PR_KEYWORD: "kwd",
        PR_LITERAL: "lit",
        PR_NOCODE: "nocode",
        PR_PLAIN: "pln",
        PR_PUNCTUATION: "pun",
        PR_SOURCE: "src",
        PR_STRING: "str",
        PR_TAG: "tag",
        PR_TYPE: "typ",
      });
  })(),
  /*!
   * Select2 4.0.3
   * https://select2.github.io
   *
   * Released under the MIT license
   * https://github.com/select2/select2/blob/master/LICENSE.md
   */
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? e(require("jquery"))
      : e(jQuery);
  })(function (e) {
    var t = (function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
          var t = e.fn.select2.amd;
        var n;
        return (
          (function () {
            /**
             * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
             * Available via the MIT or new BSD license.
             * see: http://github.com/jrburke/almond for details
             */
            var e, n, r;
            (t && t.requirejs) ||
              (t ? (n = t) : (t = {}),
              (function (t) {
                var i,
                  s,
                  o,
                  a,
                  l = {},
                  c = {},
                  u = {},
                  d = {},
                  p = Object.prototype.hasOwnProperty,
                  h = [].slice,
                  f = /\.js$/;
                function g(e, t) {
                  return p.call(e, t);
                }
                function m(e, t) {
                  var n,
                    r,
                    i,
                    s,
                    o,
                    a,
                    l,
                    c,
                    d,
                    p,
                    h,
                    g = t && t.split("/"),
                    m = u.map,
                    v = (m && m["*"]) || {};
                  if (e && "." === e.charAt(0))
                    if (t) {
                      for (
                        o = (e = e.split("/")).length - 1,
                          u.nodeIdCompat &&
                            f.test(e[o]) &&
                            (e[o] = e[o].replace(f, "")),
                          e = g.slice(0, g.length - 1).concat(e),
                          d = 0;
                        d < e.length;
                        d += 1
                      )
                        if ("." === (h = e[d])) e.splice(d, 1), (d -= 1);
                        else if (".." === h) {
                          if (1 === d && (".." === e[2] || ".." === e[0]))
                            break;
                          d > 0 && (e.splice(d - 1, 2), (d -= 2));
                        }
                      e = e.join("/");
                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                  if ((g || v) && m) {
                    for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                      if (((r = n.slice(0, d).join("/")), g))
                        for (p = g.length; p > 0; p -= 1)
                          if ((i = m[g.slice(0, p).join("/")]) && (i = i[r])) {
                            (s = i), (a = d);
                            break;
                          }
                      if (s) break;
                      !l && v && v[r] && ((l = v[r]), (c = d));
                    }
                    !s && l && ((s = l), (a = c)),
                      s && (n.splice(0, a, s), (e = n.join("/")));
                  }
                  return e;
                }
                function v(e, n) {
                  return function () {
                    var r = h.call(arguments, 0);
                    return (
                      "string" != typeof r[0] && 1 === r.length && r.push(null),
                      s.apply(t, r.concat([e, n]))
                    );
                  };
                }
                function A(e) {
                  return function (t) {
                    l[e] = t;
                  };
                }
                function y(e) {
                  if (g(c, e)) {
                    var n = c[e];
                    delete c[e], (d[e] = !0), i.apply(t, n);
                  }
                  if (!g(l, e) && !g(d, e)) throw new Error("No " + e);
                  return l[e];
                }
                function w(e) {
                  var t,
                    n = e ? e.indexOf("!") : -1;
                  return (
                    n > -1 &&
                      ((t = e.substring(0, n)),
                      (e = e.substring(n + 1, e.length))),
                    [t, e]
                  );
                }
                function b(e) {
                  return function () {
                    return (u && u.config && u.config[e]) || {};
                  };
                }
                (o = function (e, t) {
                  var n,
                    r = w(e),
                    i = r[0];
                  return (
                    (e = r[1]),
                    i && (n = y((i = m(i, t)))),
                    i
                      ? (e =
                          n && n.normalize
                            ? n.normalize(
                                e,
                                (function (e) {
                                  return function (t) {
                                    return m(t, e);
                                  };
                                })(t)
                              )
                            : m(e, t))
                      : ((i = (r = w((e = m(e, t))))[0]),
                        (e = r[1]),
                        i && (n = y(i))),
                    { f: i ? i + "!" + e : e, n: e, pr: i, p: n }
                  );
                }),
                  (a = {
                    require: function (e) {
                      return v(e);
                    },
                    exports: function (e) {
                      var t = l[e];
                      return void 0 !== t ? t : (l[e] = {});
                    },
                    module: function (e) {
                      return { id: e, uri: "", exports: l[e], config: b(e) };
                    },
                  }),
                  (i = function (e, n, r, i) {
                    var s,
                      u,
                      p,
                      h,
                      f,
                      m,
                      w = [],
                      b = typeof r;
                    if (((i = i || e), "undefined" === b || "function" === b)) {
                      for (
                        n =
                          !n.length && r.length
                            ? ["require", "exports", "module"]
                            : n,
                          f = 0;
                        f < n.length;
                        f += 1
                      )
                        if ("require" === (u = (h = o(n[f], i)).f))
                          w[f] = a.require(e);
                        else if ("exports" === u)
                          (w[f] = a.exports(e)), (m = !0);
                        else if ("module" === u) s = w[f] = a.module(e);
                        else if (g(l, u) || g(c, u) || g(d, u)) w[f] = y(u);
                        else {
                          if (!h.p) throw new Error(e + " missing " + u);
                          h.p.load(h.n, v(i, !0), A(u), {}), (w[f] = l[u]);
                        }
                      (p = r ? r.apply(l[e], w) : void 0),
                        e &&
                          (s && s.exports !== t && s.exports !== l[e]
                            ? (l[e] = s.exports)
                            : (p === t && m) || (l[e] = p));
                    } else e && (l[e] = r);
                  }),
                  (e =
                    n =
                    s =
                      function (e, n, r, l, c) {
                        if ("string" == typeof e)
                          return a[e] ? a[e](n) : y(o(e, n).f);
                        if (!e.splice) {
                          if (((u = e).deps && s(u.deps, u.callback), !n))
                            return;
                          n.splice ? ((e = n), (n = r), (r = null)) : (e = t);
                        }
                        return (
                          (n = n || function () {}),
                          "function" == typeof r && ((r = l), (l = c)),
                          l
                            ? i(t, e, n, r)
                            : setTimeout(function () {
                                i(t, e, n, r);
                              }, 4),
                          s
                        );
                      }),
                  (s.config = function (e) {
                    return s(e);
                  }),
                  (e._defined = l),
                  ((r = function (e, t, n) {
                    if ("string" != typeof e)
                      throw new Error(
                        "See almond README: incorrect module build, no module name"
                      );
                    t.splice || ((n = t), (t = [])),
                      g(l, e) || g(c, e) || (c[e] = [e, t, n]);
                  }).amd = { jQuery: !0 });
              })(),
              (t.requirejs = e),
              (t.require = n),
              (t.define = r));
          })(),
          t.define("almond", function () {}),
          t.define("jquery", [], function () {
            var t = e || $;
            return (
              null == t &&
                console &&
                console.error &&
                console.error(
                  "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                ),
              t
            );
          }),
          t.define("select2/utils", ["jquery"], function (e) {
            var t = {};
            function n(e) {
              var t = e.prototype,
                n = [];
              for (var r in t) {
                "function" == typeof t[r] && "constructor" !== r && n.push(r);
              }
              return n;
            }
            (t.Extend = function (e, t) {
              var n = {}.hasOwnProperty;
              function r() {
                this.constructor = e;
              }
              for (var i in t) n.call(t, i) && (e[i] = t[i]);
              return (
                (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.__super__ = t.prototype),
                e
              );
            }),
              (t.Decorate = function (e, t) {
                var r = n(t),
                  i = n(e);
                function s() {
                  var n = Array.prototype.unshift,
                    r = t.prototype.constructor.length,
                    i = e.prototype.constructor;
                  r > 0 &&
                    (n.call(arguments, e.prototype.constructor),
                    (i = t.prototype.constructor)),
                    i.apply(this, arguments);
                }
                (t.displayName = e.displayName),
                  (s.prototype = new (function () {
                    this.constructor = s;
                  })());
                for (var o = 0; o < i.length; o++) {
                  var a = i[o];
                  s.prototype[a] = e.prototype[a];
                }
                for (
                  var l = function (e) {
                      var n = function () {};
                      (e in s.prototype) && (n = s.prototype[e]);
                      var r = t.prototype[e];
                      return function () {
                        var e = Array.prototype.unshift;
                        return e.call(arguments, n), r.apply(this, arguments);
                      };
                    },
                    c = 0;
                  c < r.length;
                  c++
                ) {
                  var u = r[c];
                  s.prototype[u] = l(u);
                }
                return s;
              });
            var r = function () {
              this.listeners = {};
            };
            return (
              (r.prototype.on = function (e, t) {
                (this.listeners = this.listeners || {}),
                  e in this.listeners
                    ? this.listeners[e].push(t)
                    : (this.listeners[e] = [t]);
              }),
              (r.prototype.trigger = function (e) {
                var t = Array.prototype.slice,
                  n = t.call(arguments, 1);
                (this.listeners = this.listeners || {}),
                  null == n && (n = []),
                  0 === n.length && n.push({}),
                  (n[0]._type = e),
                  e in this.listeners &&
                    this.invoke(this.listeners[e], t.call(arguments, 1)),
                  "*" in this.listeners &&
                    this.invoke(this.listeners["*"], arguments);
              }),
              (r.prototype.invoke = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) e[n].apply(this, t);
              }),
              (t.Observable = r),
              (t.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++) {
                  t += Math.floor(36 * Math.random()).toString(36);
                }
                return t;
              }),
              (t.bind = function (e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }),
              (t._convertData = function (e) {
                for (var t in e) {
                  var n = t.split("-"),
                    r = e;
                  if (1 !== n.length) {
                    for (var i = 0; i < n.length; i++) {
                      var s = n[i];
                      (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in
                        r || (r[s] = {}),
                        i == n.length - 1 && (r[s] = e[t]),
                        (r = r[s]);
                    }
                    delete e[t];
                  }
                }
                return e;
              }),
              (t.hasScroll = function (t, n) {
                var r = e(n),
                  i = n.style.overflowX,
                  s = n.style.overflowY;
                return (
                  (i !== s || ("hidden" !== s && "visible" !== s)) &&
                  ("scroll" === i ||
                    "scroll" === s ||
                    r.innerHeight() < n.scrollHeight ||
                    r.innerWidth() < n.scrollWidth)
                );
              }),
              (t.escapeMarkup = function (e) {
                var t = {
                  "\\": "&#92;",
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "/": "&#47;",
                };
                return "string" != typeof e
                  ? e
                  : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                      return t[e];
                    });
              }),
              (t.appendMany = function (t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                  var r = e();
                  e.map(n, function (e) {
                    r = r.add(e);
                  }),
                    (n = r);
                }
                t.append(n);
              }),
              t
            );
          }),
          t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, r) {
              (this.$element = e),
                (this.data = r),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              t.Extend(n, t.Observable),
              (n.prototype.render = function () {
                var t = e(
                  '<ul class="select2-results__options" role="tree"></ul>'
                );
                return (
                  this.options.get("multiple") &&
                    t.attr("aria-multiselectable", "true"),
                  (this.$results = t),
                  t
                );
              }),
              (n.prototype.clear = function () {
                this.$results.empty();
              }),
              (n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var r = e(
                    '<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'
                  ),
                  i = this.options.get("translations").get(t.message);
                r.append(n(i(t.args))),
                  (r[0].className += " select2-results__message"),
                  this.$results.append(r);
              }),
              (n.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove();
              }),
              (n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                  e.results = this.sort(e.results);
                  for (var n = 0; n < e.results.length; n++) {
                    var r = e.results[n],
                      i = this.option(r);
                    t.push(i);
                  }
                  this.$results.append(t);
                } else
                  0 === this.$results.children().length &&
                    this.trigger("results:message", { message: "noResults" });
              }),
              (n.prototype.position = function (e, t) {
                t.find(".select2-results").append(e);
              }),
              (n.prototype.sort = function (e) {
                return this.options.get("sorter")(e);
              }),
              (n.prototype.highlightFirstItem = function () {
                var e = this.$results.find(
                    ".select2-results__option[aria-selected]"
                  ),
                  t = e.filter("[aria-selected=true]");
                t.length > 0
                  ? t.first().trigger("mouseenter")
                  : e.first().trigger("mouseenter"),
                  this.ensureHighlightVisible();
              }),
              (n.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (n) {
                  var r = e.map(n, function (e) {
                    return e.id.toString();
                  });
                  t.$results
                    .find(".select2-results__option[aria-selected]")
                    .each(function () {
                      var t = e(this),
                        n = e.data(this, "data"),
                        i = "" + n.id;
                      (null != n.element && n.element.selected) ||
                      (null == n.element && e.inArray(i, r) > -1)
                        ? t.attr("aria-selected", "true")
                        : t.attr("aria-selected", "false");
                    });
                });
              }),
              (n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e),
                  },
                  n = this.option(t);
                (n.className += " loading-results"), this.$results.prepend(n);
              }),
              (n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove();
              }),
              (n.prototype.option = function (t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var r = { role: "treeitem", "aria-selected": "false" };
                for (var i in (t.disabled &&
                  (delete r["aria-selected"], (r["aria-disabled"] = "true")),
                null == t.id && delete r["aria-selected"],
                null != t._resultId && (n.id = t._resultId),
                t.title && (n.title = t.title),
                t.children &&
                  ((r.role = "group"),
                  (r["aria-label"] = t.text),
                  delete r["aria-selected"]),
                r)) {
                  var s = r[i];
                  n.setAttribute(i, s);
                }
                if (t.children) {
                  var o = e(n),
                    a = document.createElement("strong");
                  a.className = "select2-results__group";
                  e(a);
                  this.template(t, a);
                  for (var l = [], c = 0; c < t.children.length; c++) {
                    var u = t.children[c],
                      d = this.option(u);
                    l.push(d);
                  }
                  var p = e("<ul></ul>", {
                    class:
                      "select2-results__options select2-results__options--nested",
                  });
                  p.append(l), o.append(a), o.append(p);
                } else this.template(t, n);
                return e.data(n, "data", t), n;
              }),
              (n.prototype.bind = function (t, n) {
                var r = this,
                  i = t.id + "-results";
                this.$results.attr("id", i),
                  t.on("results:all", function (e) {
                    r.clear(),
                      r.append(e.data),
                      t.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  t.on("results:append", function (e) {
                    r.append(e.data), t.isOpen() && r.setClasses();
                  }),
                  t.on("query", function (e) {
                    r.hideMessages(), r.showLoading(e);
                  }),
                  t.on("select", function () {
                    t.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  t.on("unselect", function () {
                    t.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  t.on("open", function () {
                    r.$results.attr("aria-expanded", "true"),
                      r.$results.attr("aria-hidden", "false"),
                      r.setClasses(),
                      r.ensureHighlightVisible();
                  }),
                  t.on("close", function () {
                    r.$results.attr("aria-expanded", "false"),
                      r.$results.attr("aria-hidden", "true"),
                      r.$results.removeAttr("aria-activedescendant");
                  }),
                  t.on("results:toggle", function () {
                    var e = r.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup");
                  }),
                  t.on("results:select", function () {
                    var e = r.getHighlightedResults();
                    if (0 !== e.length) {
                      var t = e.data("data");
                      "true" == e.attr("aria-selected")
                        ? r.trigger("close", {})
                        : r.trigger("select", { data: t });
                    }
                  }),
                  t.on("results:previous", function () {
                    var e = r.getHighlightedResults(),
                      t = r.$results.find("[aria-selected]"),
                      n = t.index(e);
                    if (0 !== n) {
                      var i = n - 1;
                      0 === e.length && (i = 0);
                      var s = t.eq(i);
                      s.trigger("mouseenter");
                      var o = r.$results.offset().top,
                        a = s.offset().top,
                        l = r.$results.scrollTop() + (a - o);
                      0 === i
                        ? r.$results.scrollTop(0)
                        : a - o < 0 && r.$results.scrollTop(l);
                    }
                  }),
                  t.on("results:next", function () {
                    var e = r.getHighlightedResults(),
                      t = r.$results.find("[aria-selected]"),
                      n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                      var i = t.eq(n);
                      i.trigger("mouseenter");
                      var s =
                          r.$results.offset().top + r.$results.outerHeight(!1),
                        o = i.offset().top + i.outerHeight(!1),
                        a = r.$results.scrollTop() + o - s;
                      0 === n
                        ? r.$results.scrollTop(0)
                        : o > s && r.$results.scrollTop(a);
                    }
                  }),
                  t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted");
                  }),
                  t.on("results:message", function (e) {
                    r.displayMessage(e);
                  }),
                  e.fn.mousewheel &&
                    this.$results.on("mousewheel", function (e) {
                      var t = r.$results.scrollTop(),
                        n = r.$results.get(0).scrollHeight - t + e.deltaY,
                        i = e.deltaY > 0 && t - e.deltaY <= 0,
                        s = e.deltaY < 0 && n <= r.$results.height();
                      i
                        ? (r.$results.scrollTop(0),
                          e.preventDefault(),
                          e.stopPropagation())
                        : s &&
                          (r.$results.scrollTop(
                            r.$results.get(0).scrollHeight - r.$results.height()
                          ),
                          e.preventDefault(),
                          e.stopPropagation());
                    }),
                  this.$results.on(
                    "mouseup",
                    ".select2-results__option[aria-selected]",
                    function (t) {
                      var n = e(this),
                        i = n.data("data");
                      "true" !== n.attr("aria-selected")
                        ? r.trigger("select", { originalEvent: t, data: i })
                        : r.options.get("multiple")
                        ? r.trigger("unselect", { originalEvent: t, data: i })
                        : r.trigger("close", {});
                    }
                  ),
                  this.$results.on(
                    "mouseenter",
                    ".select2-results__option[aria-selected]",
                    function (t) {
                      var n = e(this).data("data");
                      r
                        .getHighlightedResults()
                        .removeClass("select2-results__option--highlighted"),
                        r.trigger("results:focus", {
                          data: n,
                          element: e(this),
                        });
                    }
                  );
              }),
              (n.prototype.getHighlightedResults = function () {
                return this.$results.find(
                  ".select2-results__option--highlighted"
                );
              }),
              (n.prototype.destroy = function () {
                this.$results.remove();
              }),
              (n.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                  var t = this.$results.find("[aria-selected]").index(e),
                    n = this.$results.offset().top,
                    r = e.offset().top,
                    i = this.$results.scrollTop() + (r - n),
                    s = r - n;
                  (i -= 2 * e.outerHeight(!1)),
                    t <= 2
                      ? this.$results.scrollTop(0)
                      : (s > this.$results.outerHeight() || s < 0) &&
                        this.$results.scrollTop(i);
                }
              }),
              (n.prototype.template = function (t, n) {
                var r = this.options.get("templateResult"),
                  i = this.options.get("escapeMarkup"),
                  s = r(t, n);
                null == s
                  ? (n.style.display = "none")
                  : "string" == typeof s
                  ? (n.innerHTML = i(s))
                  : e(n).append(s);
              }),
              n
            );
          }),
          t.define("select2/keys", [], function () {
            return {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              SHIFT: 16,
              CTRL: 17,
              ALT: 18,
              ESC: 27,
              SPACE: 32,
              PAGE_UP: 33,
              PAGE_DOWN: 34,
              END: 35,
              HOME: 36,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              DELETE: 46,
            };
          }),
          t.define(
            "select2/selection/base",
            ["jquery", "../utils", "../keys"],
            function (e, t, n) {
              function r(e, t) {
                (this.$element = e),
                  (this.options = t),
                  r.__super__.constructor.call(this);
              }
              return (
                t.Extend(r, t.Observable),
                (r.prototype.render = function () {
                  var t = e(
                    '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                  );
                  return (
                    (this._tabindex = 0),
                    null != this.$element.data("old-tabindex")
                      ? (this._tabindex = this.$element.data("old-tabindex"))
                      : null != this.$element.attr("tabindex") &&
                        (this._tabindex = this.$element.attr("tabindex")),
                    t.attr("title", this.$element.attr("title")),
                    t.attr("tabindex", this._tabindex),
                    (this.$selection = t),
                    t
                  );
                }),
                (r.prototype.bind = function (e, t) {
                  var r = this,
                    i = (e.id, e.id + "-results");
                  (this.container = e),
                    this.$selection.on("focus", function (e) {
                      r.trigger("focus", e);
                    }),
                    this.$selection.on("blur", function (e) {
                      r._handleBlur(e);
                    }),
                    this.$selection.on("keydown", function (e) {
                      r.trigger("keypress", e),
                        e.which === n.SPACE && e.preventDefault();
                    }),
                    e.on("results:focus", function (e) {
                      r.$selection.attr(
                        "aria-activedescendant",
                        e.data._resultId
                      );
                    }),
                    e.on("selection:update", function (e) {
                      r.update(e.data);
                    }),
                    e.on("open", function () {
                      r.$selection.attr("aria-expanded", "true"),
                        r.$selection.attr("aria-owns", i),
                        r._attachCloseHandler(e);
                    }),
                    e.on("close", function () {
                      r.$selection.attr("aria-expanded", "false"),
                        r.$selection.removeAttr("aria-activedescendant"),
                        r.$selection.removeAttr("aria-owns"),
                        r.$selection.focus(),
                        r._detachCloseHandler(e);
                    }),
                    e.on("enable", function () {
                      r.$selection.attr("tabindex", r._tabindex);
                    }),
                    e.on("disable", function () {
                      r.$selection.attr("tabindex", "-1");
                    });
                }),
                (r.prototype._handleBlur = function (t) {
                  var n = this;
                  window.setTimeout(function () {
                    document.activeElement == n.$selection[0] ||
                      e.contains(n.$selection[0], document.activeElement) ||
                      n.trigger("blur", t);
                  }, 1);
                }),
                (r.prototype._attachCloseHandler = function (t) {
                  e(document.body).on(
                    "mousedown.select2." + t.id,
                    function (t) {
                      var n = e(t.target).closest(".select2");
                      e(".select2.select2-container--open").each(function () {
                        var t = e(this);
                        this != n[0] && t.data("element").select2("close");
                      });
                    }
                  );
                }),
                (r.prototype._detachCloseHandler = function (t) {
                  e(document.body).off("mousedown.select2." + t.id);
                }),
                (r.prototype.position = function (e, t) {
                  t.find(".selection").append(e);
                }),
                (r.prototype.destroy = function () {
                  this._detachCloseHandler(this.container);
                }),
                (r.prototype.update = function (e) {
                  throw new Error(
                    "The `update` method must be defined in child classes."
                  );
                }),
                r
              );
            }
          ),
          t.define(
            "select2/selection/single",
            ["jquery", "./base", "../utils", "../keys"],
            function (e, t, n, r) {
              function i() {
                i.__super__.constructor.apply(this, arguments);
              }
              return (
                n.Extend(i, t),
                (i.prototype.render = function () {
                  var e = i.__super__.render.call(this);
                  return (
                    e.addClass("select2-selection--single"),
                    e.html(
                      '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                    ),
                    e
                  );
                }),
                (i.prototype.bind = function (e, t) {
                  var n = this;
                  i.__super__.bind.apply(this, arguments);
                  var r = e.id + "-container";
                  this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id", r),
                    this.$selection.attr("aria-labelledby", r),
                    this.$selection.on("mousedown", function (e) {
                      1 === e.which &&
                        n.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on("focus", function (e) {}),
                    this.$selection.on("blur", function (e) {}),
                    e.on("focus", function (t) {
                      e.isOpen() || n.$selection.focus();
                    }),
                    e.on("selection:update", function (e) {
                      n.update(e.data);
                    });
                }),
                (i.prototype.clear = function () {
                  this.$selection.find(".select2-selection__rendered").empty();
                }),
                (i.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (i.prototype.selectionContainer = function () {
                  return e("<span></span>");
                }),
                (i.prototype.update = function (e) {
                  if (0 !== e.length) {
                    var t = e[0],
                      n = this.$selection.find(".select2-selection__rendered"),
                      r = this.display(t, n);
                    n.empty().append(r), n.prop("title", t.title || t.text);
                  } else this.clear();
                }),
                i
              );
            }
          ),
          t.define(
            "select2/selection/multiple",
            ["jquery", "./base", "../utils"],
            function (e, t, n) {
              function r(e, t) {
                r.__super__.constructor.apply(this, arguments);
              }
              return (
                n.Extend(r, t),
                (r.prototype.render = function () {
                  var e = r.__super__.render.call(this);
                  return (
                    e.addClass("select2-selection--multiple"),
                    e.html('<ul class="select2-selection__rendered"></ul>'),
                    e
                  );
                }),
                (r.prototype.bind = function (t, n) {
                  var i = this;
                  r.__super__.bind.apply(this, arguments),
                    this.$selection.on("click", function (e) {
                      i.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on(
                      "click",
                      ".select2-selection__choice__remove",
                      function (t) {
                        if (!i.options.get("disabled")) {
                          var n = e(this).parent().data("data");
                          i.trigger("unselect", { originalEvent: t, data: n });
                        }
                      }
                    );
                }),
                (r.prototype.clear = function () {
                  this.$selection.find(".select2-selection__rendered").empty();
                }),
                (r.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (r.prototype.selectionContainer = function () {
                  return e(
                    '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                  );
                }),
                (r.prototype.update = function (e) {
                  if ((this.clear(), 0 !== e.length)) {
                    for (var t = [], r = 0; r < e.length; r++) {
                      var i = e[r],
                        s = this.selectionContainer(),
                        o = this.display(i, s);
                      s.append(o),
                        s.prop("title", i.title || i.text),
                        s.data("data", i),
                        t.push(s);
                    }
                    var a = this.$selection.find(
                      ".select2-selection__rendered"
                    );
                    n.appendMany(a, t);
                  }
                }),
                r
              );
            }
          ),
          t.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n);
            }
            return (
              (t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return (
                  n.html(this.display(t)),
                  n
                    .addClass("select2-selection__placeholder")
                    .removeClass("select2-selection__choice"),
                  n
                );
              }),
              (t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || n) return e.call(this, t);
                this.clear();
                var r = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(r);
              }),
              t
            );
          }),
          t.define(
            "select2/selection/allowClear",
            ["jquery", "../keys"],
            function (e, t) {
              function n() {}
              return (
                (n.prototype.bind = function (e, t, n) {
                  var r = this;
                  e.call(this, t, n),
                    null == this.placeholder &&
                      this.options.get("debug") &&
                      window.console &&
                      console.error &&
                      console.error(
                        "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                      ),
                    this.$selection.on(
                      "mousedown",
                      ".select2-selection__clear",
                      function (e) {
                        r._handleClear(e);
                      }
                    ),
                    t.on("keypress", function (e) {
                      r._handleKeyboardClear(e, t);
                    });
                }),
                (n.prototype._handleClear = function (e, t) {
                  if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                      t.stopPropagation();
                      for (var r = n.data("data"), i = 0; i < r.length; i++) {
                        var s = { data: r[i] };
                        if ((this.trigger("unselect", s), s.prevented)) return;
                      }
                      this.$element.val(this.placeholder.id).trigger("change"),
                        this.trigger("toggle", {});
                    }
                  }
                }),
                (n.prototype._handleKeyboardClear = function (e, n, r) {
                  r.isOpen() ||
                    (n.which != t.DELETE && n.which != t.BACKSPACE) ||
                    this._handleClear(n);
                }),
                (n.prototype.update = function (t, n) {
                  if (
                    (t.call(this, n),
                    !(
                      this.$selection.find(".select2-selection__placeholder")
                        .length > 0 || 0 === n.length
                    ))
                  ) {
                    var r = e(
                      '<span class="select2-selection__clear">&times;</span>'
                    );
                    r.data("data", n),
                      this.$selection
                        .find(".select2-selection__rendered")
                        .prepend(r);
                  }
                }),
                n
              );
            }
          ),
          t.define(
            "select2/selection/search",
            ["jquery", "../utils", "../keys"],
            function (e, t, n) {
              function r(e, t, n) {
                e.call(this, t, n);
              }
              return (
                (r.prototype.render = function (t) {
                  var n = e(
                    '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                  );
                  (this.$searchContainer = n), (this.$search = n.find("input"));
                  var r = t.call(this);
                  return this._transferTabIndex(), r;
                }),
                (r.prototype.bind = function (e, t, r) {
                  var i = this;
                  e.call(this, t, r),
                    t.on("open", function () {
                      i.$search.trigger("focus");
                    }),
                    t.on("close", function () {
                      i.$search.val(""),
                        i.$search.removeAttr("aria-activedescendant"),
                        i.$search.trigger("focus");
                    }),
                    t.on("enable", function () {
                      i.$search.prop("disabled", !1), i._transferTabIndex();
                    }),
                    t.on("disable", function () {
                      i.$search.prop("disabled", !0);
                    }),
                    t.on("focus", function (e) {
                      i.$search.trigger("focus");
                    }),
                    t.on("results:focus", function (e) {
                      i.$search.attr("aria-activedescendant", e.id);
                    }),
                    this.$selection.on(
                      "focusin",
                      ".select2-search--inline",
                      function (e) {
                        i.trigger("focus", e);
                      }
                    ),
                    this.$selection.on(
                      "focusout",
                      ".select2-search--inline",
                      function (e) {
                        i._handleBlur(e);
                      }
                    ),
                    this.$selection.on(
                      "keydown",
                      ".select2-search--inline",
                      function (e) {
                        if (
                          (e.stopPropagation(),
                          i.trigger("keypress", e),
                          (i._keyUpPrevented = e.isDefaultPrevented()),
                          e.which === n.BACKSPACE && "" === i.$search.val())
                        ) {
                          var t = i.$searchContainer.prev(
                            ".select2-selection__choice"
                          );
                          if (t.length > 0) {
                            var r = t.data("data");
                            i.searchRemoveChoice(r), e.preventDefault();
                          }
                        }
                      }
                    );
                  var s = document.documentMode,
                    o = s && s <= 11;
                  this.$selection.on(
                    "input.searchcheck",
                    ".select2-search--inline",
                    function (e) {
                      o
                        ? i.$selection.off("input.search input.searchcheck")
                        : i.$selection.off("keyup.search");
                    }
                  ),
                    this.$selection.on(
                      "keyup.search input.search",
                      ".select2-search--inline",
                      function (e) {
                        if (o && "input" === e.type)
                          i.$selection.off("input.search input.searchcheck");
                        else {
                          var t = e.which;
                          t != n.SHIFT &&
                            t != n.CTRL &&
                            t != n.ALT &&
                            t != n.TAB &&
                            i.handleSearch(e);
                        }
                      }
                    );
                }),
                (r.prototype._transferTabIndex = function (e) {
                  this.$search.attr(
                    "tabindex",
                    this.$selection.attr("tabindex")
                  ),
                    this.$selection.attr("tabindex", "-1");
                }),
                (r.prototype.createPlaceholder = function (e, t) {
                  this.$search.attr("placeholder", t.text);
                }),
                (r.prototype.update = function (e, t) {
                  var n = this.$search[0] == document.activeElement;
                  this.$search.attr("placeholder", ""),
                    e.call(this, t),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .append(this.$searchContainer),
                    this.resizeSearch(),
                    n && this.$search.focus();
                }),
                (r.prototype.handleSearch = function () {
                  if ((this.resizeSearch(), !this._keyUpPrevented)) {
                    var e = this.$search.val();
                    this.trigger("query", { term: e });
                  }
                  this._keyUpPrevented = !1;
                }),
                (r.prototype.searchRemoveChoice = function (e, t) {
                  this.trigger("unselect", { data: t }),
                    this.$search.val(t.text),
                    this.handleSearch();
                }),
                (r.prototype.resizeSearch = function () {
                  this.$search.css("width", "25px");
                  var e = "";
                  "" !== this.$search.attr("placeholder")
                    ? (e = this.$selection
                        .find(".select2-selection__rendered")
                        .innerWidth())
                    : (e = 0.75 * (this.$search.val().length + 1) + "em");
                  this.$search.css("width", e);
                }),
                r
              );
            }
          ),
          t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {}
            return (
              (t.prototype.bind = function (t, n, r) {
                var i = this,
                  s = [
                    "open",
                    "opening",
                    "close",
                    "closing",
                    "select",
                    "selecting",
                    "unselect",
                    "unselecting",
                  ],
                  o = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, r),
                  n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, s)) {
                      n = n || {};
                      var r = e.Event("select2:" + t, { params: n });
                      i.$element.trigger(r),
                        -1 !== e.inArray(t, o) &&
                          (n.prevented = r.isDefaultPrevented());
                    }
                  });
              }),
              t
            );
          }),
          t.define(
            "select2/translation",
            ["jquery", "require"],
            function (e, t) {
              function n(e) {
                this.dict = e || {};
              }
              return (
                (n.prototype.all = function () {
                  return this.dict;
                }),
                (n.prototype.get = function (e) {
                  return this.dict[e];
                }),
                (n.prototype.extend = function (t) {
                  this.dict = e.extend({}, t.all(), this.dict);
                }),
                (n._cache = {}),
                (n.loadPath = function (e) {
                  if (!(e in n._cache)) {
                    var r = t(e);
                    n._cache[e] = r;
                  }
                  return new n(n._cache[e]);
                }),
                n
              );
            }
          ),
          t.define("select2/diacritics", [], function () {
            return {
              "Ⓐ": "A",
              Ａ: "A",
              À: "A",
              Á: "A",
              Â: "A",
              Ầ: "A",
              Ấ: "A",
              Ẫ: "A",
              Ẩ: "A",
              Ã: "A",
              Ā: "A",
              Ă: "A",
              Ằ: "A",
              Ắ: "A",
              Ẵ: "A",
              Ẳ: "A",
              Ȧ: "A",
              Ǡ: "A",
              Ä: "A",
              Ǟ: "A",
              Ả: "A",
              Å: "A",
              Ǻ: "A",
              Ǎ: "A",
              Ȁ: "A",
              Ȃ: "A",
              Ạ: "A",
              Ậ: "A",
              Ặ: "A",
              Ḁ: "A",
              Ą: "A",
              Ⱥ: "A",
              Ɐ: "A",
              Ꜳ: "AA",
              Æ: "AE",
              Ǽ: "AE",
              Ǣ: "AE",
              Ꜵ: "AO",
              Ꜷ: "AU",
              Ꜹ: "AV",
              Ꜻ: "AV",
              Ꜽ: "AY",
              "Ⓑ": "B",
              Ｂ: "B",
              Ḃ: "B",
              Ḅ: "B",
              Ḇ: "B",
              Ƀ: "B",
              Ƃ: "B",
              Ɓ: "B",
              "Ⓒ": "C",
              Ｃ: "C",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              Ç: "C",
              Ḉ: "C",
              Ƈ: "C",
              Ȼ: "C",
              Ꜿ: "C",
              "Ⓓ": "D",
              Ｄ: "D",
              Ḋ: "D",
              Ď: "D",
              Ḍ: "D",
              Ḑ: "D",
              Ḓ: "D",
              Ḏ: "D",
              Đ: "D",
              Ƌ: "D",
              Ɗ: "D",
              Ɖ: "D",
              Ꝺ: "D",
              Ǳ: "DZ",
              Ǆ: "DZ",
              ǲ: "Dz",
              ǅ: "Dz",
              "Ⓔ": "E",
              Ｅ: "E",
              È: "E",
              É: "E",
              Ê: "E",
              Ề: "E",
              Ế: "E",
              Ễ: "E",
              Ể: "E",
              Ẽ: "E",
              Ē: "E",
              Ḕ: "E",
              Ḗ: "E",
              Ĕ: "E",
              Ė: "E",
              Ë: "E",
              Ẻ: "E",
              Ě: "E",
              Ȅ: "E",
              Ȇ: "E",
              Ẹ: "E",
              Ệ: "E",
              Ȩ: "E",
              Ḝ: "E",
              Ę: "E",
              Ḙ: "E",
              Ḛ: "E",
              Ɛ: "E",
              Ǝ: "E",
              "Ⓕ": "F",
              Ｆ: "F",
              Ḟ: "F",
              Ƒ: "F",
              Ꝼ: "F",
              "Ⓖ": "G",
              Ｇ: "G",
              Ǵ: "G",
              Ĝ: "G",
              Ḡ: "G",
              Ğ: "G",
              Ġ: "G",
              Ǧ: "G",
              Ģ: "G",
              Ǥ: "G",
              Ɠ: "G",
              Ꞡ: "G",
              Ᵹ: "G",
              Ꝿ: "G",
              "Ⓗ": "H",
              Ｈ: "H",
              Ĥ: "H",
              Ḣ: "H",
              Ḧ: "H",
              Ȟ: "H",
              Ḥ: "H",
              Ḩ: "H",
              Ḫ: "H",
              Ħ: "H",
              Ⱨ: "H",
              Ⱶ: "H",
              Ɥ: "H",
              "Ⓘ": "I",
              Ｉ: "I",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              İ: "I",
              Ï: "I",
              Ḯ: "I",
              Ỉ: "I",
              Ǐ: "I",
              Ȉ: "I",
              Ȋ: "I",
              Ị: "I",
              Į: "I",
              Ḭ: "I",
              Ɨ: "I",
              "Ⓙ": "J",
              Ｊ: "J",
              Ĵ: "J",
              Ɉ: "J",
              "Ⓚ": "K",
              Ｋ: "K",
              Ḱ: "K",
              Ǩ: "K",
              Ḳ: "K",
              Ķ: "K",
              Ḵ: "K",
              Ƙ: "K",
              Ⱪ: "K",
              Ꝁ: "K",
              Ꝃ: "K",
              Ꝅ: "K",
              Ꞣ: "K",
              "Ⓛ": "L",
              Ｌ: "L",
              Ŀ: "L",
              Ĺ: "L",
              Ľ: "L",
              Ḷ: "L",
              Ḹ: "L",
              Ļ: "L",
              Ḽ: "L",
              Ḻ: "L",
              Ł: "L",
              Ƚ: "L",
              Ɫ: "L",
              Ⱡ: "L",
              Ꝉ: "L",
              Ꝇ: "L",
              Ꞁ: "L",
              Ǉ: "LJ",
              ǈ: "Lj",
              "Ⓜ": "M",
              Ｍ: "M",
              Ḿ: "M",
              Ṁ: "M",
              Ṃ: "M",
              Ɱ: "M",
              Ɯ: "M",
              "Ⓝ": "N",
              Ｎ: "N",
              Ǹ: "N",
              Ń: "N",
              Ñ: "N",
              Ṅ: "N",
              Ň: "N",
              Ṇ: "N",
              Ņ: "N",
              Ṋ: "N",
              Ṉ: "N",
              Ƞ: "N",
              Ɲ: "N",
              Ꞑ: "N",
              Ꞥ: "N",
              Ǌ: "NJ",
              ǋ: "Nj",
              "Ⓞ": "O",
              Ｏ: "O",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Ồ: "O",
              Ố: "O",
              Ỗ: "O",
              Ổ: "O",
              Õ: "O",
              Ṍ: "O",
              Ȭ: "O",
              Ṏ: "O",
              Ō: "O",
              Ṑ: "O",
              Ṓ: "O",
              Ŏ: "O",
              Ȯ: "O",
              Ȱ: "O",
              Ö: "O",
              Ȫ: "O",
              Ỏ: "O",
              Ő: "O",
              Ǒ: "O",
              Ȍ: "O",
              Ȏ: "O",
              Ơ: "O",
              Ờ: "O",
              Ớ: "O",
              Ỡ: "O",
              Ở: "O",
              Ợ: "O",
              Ọ: "O",
              Ộ: "O",
              Ǫ: "O",
              Ǭ: "O",
              Ø: "O",
              Ǿ: "O",
              Ɔ: "O",
              Ɵ: "O",
              Ꝋ: "O",
              Ꝍ: "O",
              Ƣ: "OI",
              Ꝏ: "OO",
              Ȣ: "OU",
              "Ⓟ": "P",
              Ｐ: "P",
              Ṕ: "P",
              Ṗ: "P",
              Ƥ: "P",
              Ᵽ: "P",
              Ꝑ: "P",
              Ꝓ: "P",
              Ꝕ: "P",
              "Ⓠ": "Q",
              Ｑ: "Q",
              Ꝗ: "Q",
              Ꝙ: "Q",
              Ɋ: "Q",
              "Ⓡ": "R",
              Ｒ: "R",
              Ŕ: "R",
              Ṙ: "R",
              Ř: "R",
              Ȑ: "R",
              Ȓ: "R",
              Ṛ: "R",
              Ṝ: "R",
              Ŗ: "R",
              Ṟ: "R",
              Ɍ: "R",
              Ɽ: "R",
              Ꝛ: "R",
              Ꞧ: "R",
              Ꞃ: "R",
              "Ⓢ": "S",
              Ｓ: "S",
              ẞ: "S",
              Ś: "S",
              Ṥ: "S",
              Ŝ: "S",
              Ṡ: "S",
              Š: "S",
              Ṧ: "S",
              Ṣ: "S",
              Ṩ: "S",
              Ș: "S",
              Ş: "S",
              Ȿ: "S",
              Ꞩ: "S",
              Ꞅ: "S",
              "Ⓣ": "T",
              Ｔ: "T",
              Ṫ: "T",
              Ť: "T",
              Ṭ: "T",
              Ț: "T",
              Ţ: "T",
              Ṱ: "T",
              Ṯ: "T",
              Ŧ: "T",
              Ƭ: "T",
              Ʈ: "T",
              Ⱦ: "T",
              Ꞇ: "T",
              Ꜩ: "TZ",
              "Ⓤ": "U",
              Ｕ: "U",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ũ: "U",
              Ṹ: "U",
              Ū: "U",
              Ṻ: "U",
              Ŭ: "U",
              Ü: "U",
              Ǜ: "U",
              Ǘ: "U",
              Ǖ: "U",
              Ǚ: "U",
              Ủ: "U",
              Ů: "U",
              Ű: "U",
              Ǔ: "U",
              Ȕ: "U",
              Ȗ: "U",
              Ư: "U",
              Ừ: "U",
              Ứ: "U",
              Ữ: "U",
              Ử: "U",
              Ự: "U",
              Ụ: "U",
              Ṳ: "U",
              Ų: "U",
              Ṷ: "U",
              Ṵ: "U",
              Ʉ: "U",
              "Ⓥ": "V",
              Ｖ: "V",
              Ṽ: "V",
              Ṿ: "V",
              Ʋ: "V",
              Ꝟ: "V",
              Ʌ: "V",
              Ꝡ: "VY",
              "Ⓦ": "W",
              Ｗ: "W",
              Ẁ: "W",
              Ẃ: "W",
              Ŵ: "W",
              Ẇ: "W",
              Ẅ: "W",
              Ẉ: "W",
              Ⱳ: "W",
              "Ⓧ": "X",
              Ｘ: "X",
              Ẋ: "X",
              Ẍ: "X",
              "Ⓨ": "Y",
              Ｙ: "Y",
              Ỳ: "Y",
              Ý: "Y",
              Ŷ: "Y",
              Ỹ: "Y",
              Ȳ: "Y",
              Ẏ: "Y",
              Ÿ: "Y",
              Ỷ: "Y",
              Ỵ: "Y",
              Ƴ: "Y",
              Ɏ: "Y",
              Ỿ: "Y",
              "Ⓩ": "Z",
              Ｚ: "Z",
              Ź: "Z",
              Ẑ: "Z",
              Ż: "Z",
              Ž: "Z",
              Ẓ: "Z",
              Ẕ: "Z",
              Ƶ: "Z",
              Ȥ: "Z",
              Ɀ: "Z",
              Ⱬ: "Z",
              Ꝣ: "Z",
              "ⓐ": "a",
              ａ: "a",
              ẚ: "a",
              à: "a",
              á: "a",
              â: "a",
              ầ: "a",
              ấ: "a",
              ẫ: "a",
              ẩ: "a",
              ã: "a",
              ā: "a",
              ă: "a",
              ằ: "a",
              ắ: "a",
              ẵ: "a",
              ẳ: "a",
              ȧ: "a",
              ǡ: "a",
              ä: "a",
              ǟ: "a",
              ả: "a",
              å: "a",
              ǻ: "a",
              ǎ: "a",
              ȁ: "a",
              ȃ: "a",
              ạ: "a",
              ậ: "a",
              ặ: "a",
              ḁ: "a",
              ą: "a",
              ⱥ: "a",
              ɐ: "a",
              ꜳ: "aa",
              æ: "ae",
              ǽ: "ae",
              ǣ: "ae",
              ꜵ: "ao",
              ꜷ: "au",
              ꜹ: "av",
              ꜻ: "av",
              ꜽ: "ay",
              "ⓑ": "b",
              ｂ: "b",
              ḃ: "b",
              ḅ: "b",
              ḇ: "b",
              ƀ: "b",
              ƃ: "b",
              ɓ: "b",
              "ⓒ": "c",
              ｃ: "c",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              ç: "c",
              ḉ: "c",
              ƈ: "c",
              ȼ: "c",
              ꜿ: "c",
              ↄ: "c",
              "ⓓ": "d",
              ｄ: "d",
              ḋ: "d",
              ď: "d",
              ḍ: "d",
              ḑ: "d",
              ḓ: "d",
              ḏ: "d",
              đ: "d",
              ƌ: "d",
              ɖ: "d",
              ɗ: "d",
              ꝺ: "d",
              ǳ: "dz",
              ǆ: "dz",
              "ⓔ": "e",
              ｅ: "e",
              è: "e",
              é: "e",
              ê: "e",
              ề: "e",
              ế: "e",
              ễ: "e",
              ể: "e",
              ẽ: "e",
              ē: "e",
              ḕ: "e",
              ḗ: "e",
              ĕ: "e",
              ė: "e",
              ë: "e",
              ẻ: "e",
              ě: "e",
              ȅ: "e",
              ȇ: "e",
              ẹ: "e",
              ệ: "e",
              ȩ: "e",
              ḝ: "e",
              ę: "e",
              ḙ: "e",
              ḛ: "e",
              ɇ: "e",
              ɛ: "e",
              ǝ: "e",
              "ⓕ": "f",
              ｆ: "f",
              ḟ: "f",
              ƒ: "f",
              ꝼ: "f",
              "ⓖ": "g",
              ｇ: "g",
              ǵ: "g",
              ĝ: "g",
              ḡ: "g",
              ğ: "g",
              ġ: "g",
              ǧ: "g",
              ģ: "g",
              ǥ: "g",
              ɠ: "g",
              ꞡ: "g",
              ᵹ: "g",
              ꝿ: "g",
              "ⓗ": "h",
              ｈ: "h",
              ĥ: "h",
              ḣ: "h",
              ḧ: "h",
              ȟ: "h",
              ḥ: "h",
              ḩ: "h",
              ḫ: "h",
              ẖ: "h",
              ħ: "h",
              ⱨ: "h",
              ⱶ: "h",
              ɥ: "h",
              ƕ: "hv",
              "ⓘ": "i",
              ｉ: "i",
              ì: "i",
              í: "i",
              î: "i",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              ï: "i",
              ḯ: "i",
              ỉ: "i",
              ǐ: "i",
              ȉ: "i",
              ȋ: "i",
              ị: "i",
              į: "i",
              ḭ: "i",
              ɨ: "i",
              ı: "i",
              "ⓙ": "j",
              ｊ: "j",
              ĵ: "j",
              ǰ: "j",
              ɉ: "j",
              "ⓚ": "k",
              ｋ: "k",
              ḱ: "k",
              ǩ: "k",
              ḳ: "k",
              ķ: "k",
              ḵ: "k",
              ƙ: "k",
              ⱪ: "k",
              ꝁ: "k",
              ꝃ: "k",
              ꝅ: "k",
              ꞣ: "k",
              "ⓛ": "l",
              ｌ: "l",
              ŀ: "l",
              ĺ: "l",
              ľ: "l",
              ḷ: "l",
              ḹ: "l",
              ļ: "l",
              ḽ: "l",
              ḻ: "l",
              ſ: "l",
              ł: "l",
              ƚ: "l",
              ɫ: "l",
              ⱡ: "l",
              ꝉ: "l",
              ꞁ: "l",
              ꝇ: "l",
              ǉ: "lj",
              "ⓜ": "m",
              ｍ: "m",
              ḿ: "m",
              ṁ: "m",
              ṃ: "m",
              ɱ: "m",
              ɯ: "m",
              "ⓝ": "n",
              ｎ: "n",
              ǹ: "n",
              ń: "n",
              ñ: "n",
              ṅ: "n",
              ň: "n",
              ṇ: "n",
              ņ: "n",
              ṋ: "n",
              ṉ: "n",
              ƞ: "n",
              ɲ: "n",
              ŉ: "n",
              ꞑ: "n",
              ꞥ: "n",
              ǌ: "nj",
              "ⓞ": "o",
              ｏ: "o",
              ò: "o",
              ó: "o",
              ô: "o",
              ồ: "o",
              ố: "o",
              ỗ: "o",
              ổ: "o",
              õ: "o",
              ṍ: "o",
              ȭ: "o",
              ṏ: "o",
              ō: "o",
              ṑ: "o",
              ṓ: "o",
              ŏ: "o",
              ȯ: "o",
              ȱ: "o",
              ö: "o",
              ȫ: "o",
              ỏ: "o",
              ő: "o",
              ǒ: "o",
              ȍ: "o",
              ȏ: "o",
              ơ: "o",
              ờ: "o",
              ớ: "o",
              ỡ: "o",
              ở: "o",
              ợ: "o",
              ọ: "o",
              ộ: "o",
              ǫ: "o",
              ǭ: "o",
              ø: "o",
              ǿ: "o",
              ɔ: "o",
              ꝋ: "o",
              ꝍ: "o",
              ɵ: "o",
              ƣ: "oi",
              ȣ: "ou",
              ꝏ: "oo",
              "ⓟ": "p",
              ｐ: "p",
              ṕ: "p",
              ṗ: "p",
              ƥ: "p",
              ᵽ: "p",
              ꝑ: "p",
              ꝓ: "p",
              ꝕ: "p",
              "ⓠ": "q",
              ｑ: "q",
              ɋ: "q",
              ꝗ: "q",
              ꝙ: "q",
              "ⓡ": "r",
              ｒ: "r",
              ŕ: "r",
              ṙ: "r",
              ř: "r",
              ȑ: "r",
              ȓ: "r",
              ṛ: "r",
              ṝ: "r",
              ŗ: "r",
              ṟ: "r",
              ɍ: "r",
              ɽ: "r",
              ꝛ: "r",
              ꞧ: "r",
              ꞃ: "r",
              "ⓢ": "s",
              ｓ: "s",
              ß: "s",
              ś: "s",
              ṥ: "s",
              ŝ: "s",
              ṡ: "s",
              š: "s",
              ṧ: "s",
              ṣ: "s",
              ṩ: "s",
              ș: "s",
              ş: "s",
              ȿ: "s",
              ꞩ: "s",
              ꞅ: "s",
              ẛ: "s",
              "ⓣ": "t",
              ｔ: "t",
              ṫ: "t",
              ẗ: "t",
              ť: "t",
              ṭ: "t",
              ț: "t",
              ţ: "t",
              ṱ: "t",
              ṯ: "t",
              ŧ: "t",
              ƭ: "t",
              ʈ: "t",
              ⱦ: "t",
              ꞇ: "t",
              ꜩ: "tz",
              "ⓤ": "u",
              ｕ: "u",
              ù: "u",
              ú: "u",
              û: "u",
              ũ: "u",
              ṹ: "u",
              ū: "u",
              ṻ: "u",
              ŭ: "u",
              ü: "u",
              ǜ: "u",
              ǘ: "u",
              ǖ: "u",
              ǚ: "u",
              ủ: "u",
              ů: "u",
              ű: "u",
              ǔ: "u",
              ȕ: "u",
              ȗ: "u",
              ư: "u",
              ừ: "u",
              ứ: "u",
              ữ: "u",
              ử: "u",
              ự: "u",
              ụ: "u",
              ṳ: "u",
              ų: "u",
              ṷ: "u",
              ṵ: "u",
              ʉ: "u",
              "ⓥ": "v",
              ｖ: "v",
              ṽ: "v",
              ṿ: "v",
              ʋ: "v",
              ꝟ: "v",
              ʌ: "v",
              ꝡ: "vy",
              "ⓦ": "w",
              ｗ: "w",
              ẁ: "w",
              ẃ: "w",
              ŵ: "w",
              ẇ: "w",
              ẅ: "w",
              ẘ: "w",
              ẉ: "w",
              ⱳ: "w",
              "ⓧ": "x",
              ｘ: "x",
              ẋ: "x",
              ẍ: "x",
              "ⓨ": "y",
              ｙ: "y",
              ỳ: "y",
              ý: "y",
              ŷ: "y",
              ỹ: "y",
              ȳ: "y",
              ẏ: "y",
              ÿ: "y",
              ỷ: "y",
              ẙ: "y",
              ỵ: "y",
              ƴ: "y",
              ɏ: "y",
              ỿ: "y",
              "ⓩ": "z",
              ｚ: "z",
              ź: "z",
              ẑ: "z",
              ż: "z",
              ž: "z",
              ẓ: "z",
              ẕ: "z",
              ƶ: "z",
              ȥ: "z",
              ɀ: "z",
              ⱬ: "z",
              ꝣ: "z",
              Ά: "Α",
              Έ: "Ε",
              Ή: "Η",
              Ί: "Ι",
              Ϊ: "Ι",
              Ό: "Ο",
              Ύ: "Υ",
              Ϋ: "Υ",
              Ώ: "Ω",
              ά: "α",
              έ: "ε",
              ή: "η",
              ί: "ι",
              ϊ: "ι",
              ΐ: "ι",
              ό: "ο",
              ύ: "υ",
              ϋ: "υ",
              ΰ: "υ",
              ω: "ω",
              ς: "σ",
            };
          }),
          t.define("select2/data/base", ["../utils"], function (e) {
            function t(e, n) {
              t.__super__.constructor.call(this);
            }
            return (
              e.Extend(t, e.Observable),
              (t.prototype.current = function (e) {
                throw new Error(
                  "The `current` method must be defined in child classes."
                );
              }),
              (t.prototype.query = function (e, t) {
                throw new Error(
                  "The `query` method must be defined in child classes."
                );
              }),
              (t.prototype.bind = function (e, t) {}),
              (t.prototype.destroy = function () {}),
              (t.prototype.generateResultId = function (t, n) {
                var r = t.id + "-result-";
                return (
                  (r += e.generateChars(4)),
                  null != n.id
                    ? (r += "-" + n.id.toString())
                    : (r += "-" + e.generateChars(4)),
                  r
                );
              }),
              t
            );
          }),
          t.define(
            "select2/data/select",
            ["./base", "../utils", "jquery"],
            function (e, t, n) {
              function r(e, t) {
                (this.$element = e),
                  (this.options = t),
                  r.__super__.constructor.call(this);
              }
              return (
                t.Extend(r, e),
                (r.prototype.current = function (e) {
                  var t = [],
                    r = this;
                  this.$element.find(":selected").each(function () {
                    var e = n(this),
                      i = r.item(e);
                    t.push(i);
                  }),
                    e(t);
                }),
                (r.prototype.select = function (e) {
                  var t = this;
                  if (((e.selected = !0), n(e.element).is("option")))
                    return (
                      (e.element.selected = !0),
                      void this.$element.trigger("change")
                    );
                  if (this.$element.prop("multiple"))
                    this.current(function (r) {
                      var i = [];
                      (e = [e]).push.apply(e, r);
                      for (var s = 0; s < e.length; s++) {
                        var o = e[s].id;
                        -1 === n.inArray(o, i) && i.push(o);
                      }
                      t.$element.val(i), t.$element.trigger("change");
                    });
                  else {
                    var r = e.id;
                    this.$element.val(r), this.$element.trigger("change");
                  }
                }),
                (r.prototype.unselect = function (e) {
                  var t = this;
                  if (this.$element.prop("multiple")) {
                    if (((e.selected = !1), n(e.element).is("option")))
                      return (
                        (e.element.selected = !1),
                        void this.$element.trigger("change")
                      );
                    this.current(function (r) {
                      for (var i = [], s = 0; s < r.length; s++) {
                        var o = r[s].id;
                        o !== e.id && -1 === n.inArray(o, i) && i.push(o);
                      }
                      t.$element.val(i), t.$element.trigger("change");
                    });
                  }
                }),
                (r.prototype.bind = function (e, t) {
                  var n = this;
                  (this.container = e),
                    e.on("select", function (e) {
                      n.select(e.data);
                    }),
                    e.on("unselect", function (e) {
                      n.unselect(e.data);
                    });
                }),
                (r.prototype.destroy = function () {
                  this.$element.find("*").each(function () {
                    n.removeData(this, "data");
                  });
                }),
                (r.prototype.query = function (e, t) {
                  var r = [],
                    i = this;
                  this.$element.children().each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                      var s = i.item(t),
                        o = i.matches(e, s);
                      null !== o && r.push(o);
                    }
                  }),
                    t({ results: r });
                }),
                (r.prototype.addOptions = function (e) {
                  t.appendMany(this.$element, e);
                }),
                (r.prototype.option = function (e) {
                  var t;
                  e.children
                    ? ((t = document.createElement("optgroup")).label = e.text)
                    : void 0 !==
                      (t = document.createElement("option")).textContent
                    ? (t.textContent = e.text)
                    : (t.innerText = e.text),
                    e.id && (t.value = e.id),
                    e.disabled && (t.disabled = !0),
                    e.selected && (t.selected = !0),
                    e.title && (t.title = e.title);
                  var r = n(t),
                    i = this._normalizeItem(e);
                  return (i.element = t), n.data(t, "data", i), r;
                }),
                (r.prototype.item = function (e) {
                  var t = {};
                  if (null != (t = n.data(e[0], "data"))) return t;
                  if (e.is("option"))
                    t = {
                      id: e.val(),
                      text: e.text(),
                      disabled: e.prop("disabled"),
                      selected: e.prop("selected"),
                      title: e.prop("title"),
                    };
                  else if (e.is("optgroup")) {
                    t = {
                      text: e.prop("label"),
                      children: [],
                      title: e.prop("title"),
                    };
                    for (
                      var r = e.children("option"), i = [], s = 0;
                      s < r.length;
                      s++
                    ) {
                      var o = n(r[s]),
                        a = this.item(o);
                      i.push(a);
                    }
                    t.children = i;
                  }
                  return (
                    ((t = this._normalizeItem(t)).element = e[0]),
                    n.data(e[0], "data", t),
                    t
                  );
                }),
                (r.prototype._normalizeItem = function (e) {
                  n.isPlainObject(e) || (e = { id: e, text: e });
                  return (
                    null != (e = n.extend({}, { text: "" }, e)).id &&
                      (e.id = e.id.toString()),
                    null != e.text && (e.text = e.text.toString()),
                    null == e._resultId &&
                      e.id &&
                      null != this.container &&
                      (e._resultId = this.generateResultId(this.container, e)),
                    n.extend({}, { selected: !1, disabled: !1 }, e)
                  );
                }),
                (r.prototype.matches = function (e, t) {
                  return this.options.get("matcher")(e, t);
                }),
                r
              );
            }
          ),
          t.define(
            "select2/data/array",
            ["./select", "../utils", "jquery"],
            function (e, t, n) {
              function r(e, t) {
                var n = t.get("data") || [];
                r.__super__.constructor.call(this, e, t),
                  this.addOptions(this.convertToOptions(n));
              }
              return (
                t.Extend(r, e),
                (r.prototype.select = function (e) {
                  var t = this.$element.find("option").filter(function (t, n) {
                    return n.value == e.id.toString();
                  });
                  0 === t.length && ((t = this.option(e)), this.addOptions(t)),
                    r.__super__.select.call(this, e);
                }),
                (r.prototype.convertToOptions = function (e) {
                  var r = this,
                    i = this.$element.find("option"),
                    s = i
                      .map(function () {
                        return r.item(n(this)).id;
                      })
                      .get(),
                    o = [];
                  function a(e) {
                    return function () {
                      return n(this).val() == e.id;
                    };
                  }
                  for (var l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (n.inArray(c.id, s) >= 0) {
                      var u = i.filter(a(c)),
                        d = this.item(u),
                        p = n.extend(!0, {}, c, d),
                        h = this.option(p);
                      u.replaceWith(h);
                    } else {
                      var f = this.option(c);
                      if (c.children) {
                        var g = this.convertToOptions(c.children);
                        t.appendMany(f, g);
                      }
                      o.push(f);
                    }
                  }
                  return o;
                }),
                r
              );
            }
          ),
          t.define(
            "select2/data/ajax",
            ["./array", "../utils", "jquery"],
            function (e, t, n) {
              function r(e, t) {
                (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                  null != this.ajaxOptions.processResults &&
                    (this.processResults = this.ajaxOptions.processResults),
                  r.__super__.constructor.call(this, e, t);
              }
              return (
                t.Extend(r, e),
                (r.prototype._applyDefaults = function (e) {
                  var t = {
                    data: function (e) {
                      return n.extend({}, e, { q: e.term });
                    },
                    transport: function (e, t, r) {
                      var i = n.ajax(e);
                      return i.then(t), i.fail(r), i;
                    },
                  };
                  return n.extend({}, t, e, !0);
                }),
                (r.prototype.processResults = function (e) {
                  return e;
                }),
                (r.prototype.query = function (e, t) {
                  var r = this;
                  null != this._request &&
                    (n.isFunction(this._request.abort) && this._request.abort(),
                    (this._request = null));
                  var i = n.extend({ type: "GET" }, this.ajaxOptions);
                  function s() {
                    var s = i.transport(
                      i,
                      function (i) {
                        var s = r.processResults(i, e);
                        r.options.get("debug") &&
                          window.console &&
                          console.error &&
                          ((s && s.results && n.isArray(s.results)) ||
                            console.error(
                              "Select2: The AJAX results did not return an array in the `results` key of the response."
                            )),
                          t(s);
                      },
                      function () {
                        (s.status && "0" === s.status) ||
                          r.trigger("results:message", {
                            message: "errorLoading",
                          });
                      }
                    );
                    r._request = s;
                  }
                  "function" == typeof i.url &&
                    (i.url = i.url.call(this.$element, e)),
                    "function" == typeof i.data &&
                      (i.data = i.data.call(this.$element, e)),
                    this.ajaxOptions.delay && null != e.term
                      ? (this._queryTimeout &&
                          window.clearTimeout(this._queryTimeout),
                        (this._queryTimeout = window.setTimeout(
                          s,
                          this.ajaxOptions.delay
                        )))
                      : s();
                }),
                r
              );
            }
          ),
          t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, r) {
              var i = r.get("tags"),
                s = r.get("createTag");
              void 0 !== s && (this.createTag = s);
              var o = r.get("insertTag");
              if (
                (void 0 !== o && (this.insertTag = o),
                t.call(this, n, r),
                e.isArray(i))
              )
                for (var a = 0; a < i.length; a++) {
                  var l = i[a],
                    c = this._normalizeItem(l),
                    u = this.option(c);
                  this.$element.append(u);
                }
            }
            return (
              (t.prototype.query = function (e, t, n) {
                var r = this;
                this._removeOldTags(),
                  null != t.term && null == t.page
                    ? e.call(this, t, function e(i, s) {
                        for (var o = i.results, a = 0; a < o.length; a++) {
                          var l = o[a],
                            c =
                              null != l.children &&
                              !e({ results: l.children }, !0);
                          if (l.text === t.term || c)
                            return !s && ((i.data = o), void n(i));
                        }
                        if (s) return !0;
                        var u = r.createTag(t);
                        if (null != u) {
                          var d = r.option(u);
                          d.attr("data-select2-tag", !0),
                            r.addOptions([d]),
                            r.insertTag(o, u);
                        }
                        (i.results = o), n(i);
                      })
                    : e.call(this, t, n);
              }),
              (t.prototype.createTag = function (t, n) {
                var r = e.trim(n.term);
                return "" === r ? null : { id: r, text: r };
              }),
              (t.prototype.insertTag = function (e, t, n) {
                t.unshift(n);
              }),
              (t.prototype._removeOldTags = function (t) {
                this._lastTag;
                this.$element
                  .find("option[data-select2-tag]")
                  .each(function () {
                    this.selected || e(this).remove();
                  });
              }),
              t
            );
          }),
          t.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, n) {
              var r = n.get("tokenizer");
              void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
            }
            return (
              (t.prototype.bind = function (e, t, n) {
                e.call(this, t, n),
                  (this.$search =
                    t.dropdown.$search ||
                    t.selection.$search ||
                    n.find(".select2-search__field"));
              }),
              (t.prototype.query = function (t, n, r) {
                var i = this;
                n.term = n.term || "";
                var s = this.tokenizer(n, this.options, function (t) {
                  var n = i._normalizeItem(t);
                  if (
                    !i.$element.find("option").filter(function () {
                      return e(this).val() === n.id;
                    }).length
                  ) {
                    var r = i.option(n);
                    r.attr("data-select2-tag", !0),
                      i._removeOldTags(),
                      i.addOptions([r]);
                  }
                  !(function (e) {
                    i.trigger("select", { data: e });
                  })(n);
                });
                s.term !== n.term &&
                  (this.$search.length &&
                    (this.$search.val(s.term), this.$search.focus()),
                  (n.term = s.term)),
                  t.call(this, n, r);
              }),
              (t.prototype.tokenizer = function (t, n, r, i) {
                for (
                  var s = r.get("tokenSeparators") || [],
                    o = n.term,
                    a = 0,
                    l =
                      this.createTag ||
                      function (e) {
                        return { id: e.term, text: e.term };
                      };
                  a < o.length;

                ) {
                  var c = o[a];
                  if (-1 !== e.inArray(c, s)) {
                    var u = o.substr(0, a),
                      d = l(e.extend({}, n, { term: u }));
                    null != d
                      ? (i(d), (o = o.substr(a + 1) || ""), (a = 0))
                      : a++;
                  } else a++;
                }
                return { term: o };
              }),
              t
            );
          }),
          t.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
              (this.minimumInputLength = n.get("minimumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  t.term.length < this.minimumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                          minimum: this.minimumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          t.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
              (this.maximumInputLength = n.get("maximumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  this.maximumInputLength > 0 &&
                  t.term.length > this.maximumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                          maximum: this.maximumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          t.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
              (this.maximumSelectionLength = n.get("maximumSelectionLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                var r = this;
                this.current(function (i) {
                  var s = null != i ? i.length : 0;
                  r.maximumSelectionLength > 0 && s >= r.maximumSelectionLength
                    ? r.trigger("results:message", {
                        message: "maximumSelected",
                        args: { maximum: r.maximumSelectionLength },
                      })
                    : e.call(r, t, n);
                });
              }),
              e
            );
          }),
          t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              t.Extend(n, t.Observable),
              (n.prototype.render = function () {
                var t = e(
                  '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                );
                return (
                  t.attr("dir", this.options.get("dir")),
                  (this.$dropdown = t),
                  t
                );
              }),
              (n.prototype.bind = function () {}),
              (n.prototype.position = function (e, t) {}),
              (n.prototype.destroy = function () {
                this.$dropdown.remove();
              }),
              n
            );
          }),
          t.define(
            "select2/dropdown/search",
            ["jquery", "../utils"],
            function (e, t) {
              function n() {}
              return (
                (n.prototype.render = function (t) {
                  var n = t.call(this),
                    r = e(
                      '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'
                    );
                  return (
                    (this.$searchContainer = r),
                    (this.$search = r.find("input")),
                    n.prepend(r),
                    n
                  );
                }),
                (n.prototype.bind = function (t, n, r) {
                  var i = this;
                  t.call(this, n, r),
                    this.$search.on("keydown", function (e) {
                      i.trigger("keypress", e),
                        (i._keyUpPrevented = e.isDefaultPrevented());
                    }),
                    this.$search.on("input", function (t) {
                      e(this).off("keyup");
                    }),
                    this.$search.on("keyup input", function (e) {
                      i.handleSearch(e);
                    }),
                    n.on("open", function () {
                      i.$search.attr("tabindex", 0),
                        i.$search.focus(),
                        window.setTimeout(function () {
                          i.$search.focus();
                        }, 0);
                    }),
                    n.on("close", function () {
                      i.$search.attr("tabindex", -1), i.$search.val("");
                    }),
                    n.on("focus", function () {
                      n.isOpen() && i.$search.focus();
                    }),
                    n.on("results:all", function (e) {
                      (null != e.query.term && "" !== e.query.term) ||
                        (i.showSearch(e)
                          ? i.$searchContainer.removeClass(
                              "select2-search--hide"
                            )
                          : i.$searchContainer.addClass(
                              "select2-search--hide"
                            ));
                    });
                }),
                (n.prototype.handleSearch = function (e) {
                  if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", { term: t });
                  }
                  this._keyUpPrevented = !1;
                }),
                (n.prototype.showSearch = function (e, t) {
                  return !0;
                }),
                n
              );
            }
          ),
          t.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, r) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n, r);
            }
            return (
              (e.prototype.append = function (e, t) {
                (t.results = this.removePlaceholder(t.results)),
                  e.call(this, t);
              }),
              (e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                  var i = t[r];
                  this.placeholder.id === i.id && n.splice(r, 1);
                }
                return n;
              }),
              e
            );
          }),
          t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, r) {
              (this.lastParams = {}),
                e.call(this, t, n, r),
                (this.$loadingMore = this.createLoadingMore()),
                (this.loading = !1);
            }
            return (
              (t.prototype.append = function (e, t) {
                this.$loadingMore.remove(),
                  (this.loading = !1),
                  e.call(this, t),
                  this.showLoadingMore(t) &&
                    this.$results.append(this.$loadingMore);
              }),
              (t.prototype.bind = function (t, n, r) {
                var i = this;
                t.call(this, n, r),
                  n.on("query", function (e) {
                    (i.lastParams = e), (i.loading = !0);
                  }),
                  n.on("query:append", function (e) {
                    (i.lastParams = e), (i.loading = !0);
                  }),
                  this.$results.on("scroll", function () {
                    var t = e.contains(
                      document.documentElement,
                      i.$loadingMore[0]
                    );
                    !i.loading &&
                      t &&
                      i.$results.offset().top +
                        i.$results.outerHeight(!1) +
                        50 >=
                        i.$loadingMore.offset().top +
                          i.$loadingMore.outerHeight(!1) &&
                      i.loadMore();
                  });
              }),
              (t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, { page: 1 }, this.lastParams);
                t.page++, this.trigger("query:append", t);
              }),
              (t.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more;
              }),
              (t.prototype.createLoadingMore = function () {
                var t = e(
                    '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                  ),
                  n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)), t;
              }),
              t
            );
          }),
          t.define(
            "select2/dropdown/attachBody",
            ["jquery", "../utils"],
            function (e, t) {
              function n(t, n, r) {
                (this.$dropdownParent =
                  r.get("dropdownParent") || e(document.body)),
                  t.call(this, n, r);
              }
              return (
                (n.prototype.bind = function (e, t, n) {
                  var r = this,
                    i = !1;
                  e.call(this, t, n),
                    t.on("open", function () {
                      r._showDropdown(),
                        r._attachPositioningHandler(t),
                        i ||
                          ((i = !0),
                          t.on("results:all", function () {
                            r._positionDropdown(), r._resizeDropdown();
                          }),
                          t.on("results:append", function () {
                            r._positionDropdown(), r._resizeDropdown();
                          }));
                    }),
                    t.on("close", function () {
                      r._hideDropdown(), r._detachPositioningHandler(t);
                    }),
                    this.$dropdownContainer.on("mousedown", function (e) {
                      e.stopPropagation();
                    });
                }),
                (n.prototype.destroy = function (e) {
                  e.call(this), this.$dropdownContainer.remove();
                }),
                (n.prototype.position = function (e, t, n) {
                  t.attr("class", n.attr("class")),
                    t.removeClass("select2"),
                    t.addClass("select2-container--open"),
                    t.css({ position: "absolute", top: -999999 }),
                    (this.$container = n);
                }),
                (n.prototype.render = function (t) {
                  var n = e("<span></span>"),
                    r = t.call(this);
                  return n.append(r), (this.$dropdownContainer = n), n;
                }),
                (n.prototype._hideDropdown = function (e) {
                  this.$dropdownContainer.detach();
                }),
                (n.prototype._attachPositioningHandler = function (n, r) {
                  var i = this,
                    s = "scroll.select2." + r.id,
                    o = "resize.select2." + r.id,
                    a = "orientationchange.select2." + r.id,
                    l = this.$container.parents().filter(t.hasScroll);
                  l.each(function () {
                    e(this).data("select2-scroll-position", {
                      x: e(this).scrollLeft(),
                      y: e(this).scrollTop(),
                    });
                  }),
                    l.on(s, function (t) {
                      var n = e(this).data("select2-scroll-position");
                      e(this).scrollTop(n.y);
                    }),
                    e(window).on(s + " " + o + " " + a, function (e) {
                      i._positionDropdown(), i._resizeDropdown();
                    });
                }),
                (n.prototype._detachPositioningHandler = function (n, r) {
                  var i = "scroll.select2." + r.id,
                    s = "resize.select2." + r.id,
                    o = "orientationchange.select2." + r.id;
                  this.$container.parents().filter(t.hasScroll).off(i),
                    e(window).off(i + " " + s + " " + o);
                }),
                (n.prototype._positionDropdown = function () {
                  var t = e(window),
                    n = this.$dropdown.hasClass("select2-dropdown--above"),
                    r = this.$dropdown.hasClass("select2-dropdown--below"),
                    i = null,
                    s = this.$container.offset();
                  s.bottom = s.top + this.$container.outerHeight(!1);
                  var o = { height: this.$container.outerHeight(!1) };
                  (o.top = s.top), (o.bottom = s.top + o.height);
                  var a = this.$dropdown.outerHeight(!1),
                    l = t.scrollTop(),
                    c = t.scrollTop() + t.height(),
                    u = l < s.top - a,
                    d = c > s.bottom + a,
                    p = { left: s.left, top: o.bottom },
                    h = this.$dropdownParent;
                  "static" === h.css("position") && (h = h.offsetParent());
                  var f = h.offset();
                  (p.top -= f.top),
                    (p.left -= f.left),
                    n || r || (i = "below"),
                    d || !u || n
                      ? !u && d && n && (i = "below")
                      : (i = "above"),
                    ("above" == i || (n && "below" !== i)) &&
                      (p.top = o.top - f.top - a),
                    null != i &&
                      (this.$dropdown
                        .removeClass(
                          "select2-dropdown--below select2-dropdown--above"
                        )
                        .addClass("select2-dropdown--" + i),
                      this.$container
                        .removeClass(
                          "select2-container--below select2-container--above"
                        )
                        .addClass("select2-container--" + i)),
                    this.$dropdownContainer.css(p);
                }),
                (n.prototype._resizeDropdown = function () {
                  var e = { width: this.$container.outerWidth(!1) + "px" };
                  this.options.get("dropdownAutoWidth") &&
                    ((e.minWidth = e.width),
                    (e.position = "relative"),
                    (e.width = "auto")),
                    this.$dropdown.css(e);
                }),
                (n.prototype._showDropdown = function (e) {
                  this.$dropdownContainer.appendTo(this.$dropdownParent),
                    this._positionDropdown(),
                    this._resizeDropdown();
                }),
                n
              );
            }
          ),
          t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(t) {
              for (var n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                i.children ? (n += e(i.children)) : n++;
              }
              return n;
            }
            function t(e, t, n, r) {
              (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
                this.minimumResultsForSearch < 0 &&
                  (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, r);
            }
            return (
              (t.prototype.showSearch = function (t, n) {
                return (
                  !(e(n.data.results) < this.minimumResultsForSearch) &&
                  t.call(this, n)
                );
              }),
              t
            );
          }),
          t.define("select2/dropdown/selectOnClose", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  t.on("close", function (e) {
                    r._handleSelectOnClose(e);
                  });
              }),
              (e.prototype._handleSelectOnClose = function (e, t) {
                if (t && null != t.originalSelect2Event) {
                  var n = t.originalSelect2Event;
                  if ("select" === n._type || "unselect" === n._type) return;
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                  var i = r.data("data");
                  (null != i.element && i.element.selected) ||
                    (null == i.element && i.selected) ||
                    this.trigger("select", { data: i });
                }
              }),
              e
            );
          }),
          t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  t.on("select", function (e) {
                    r._selectTriggered(e);
                  }),
                  t.on("unselect", function (e) {
                    r._selectTriggered(e);
                  });
              }),
              (e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                (n && n.ctrlKey) ||
                  this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t,
                  });
              }),
              e
            );
          }),
          t.define("select2/i18n/en", [], function () {
            return {
              errorLoading: function () {
                return "The results could not be loaded.";
              },
              inputTooLong: function (e) {
                var t = e.input.length - e.maximum,
                  n = "Please delete " + t + " character";
                return 1 != t && (n += "s"), n;
              },
              inputTooShort: function (e) {
                return (
                  "Please enter " +
                  (e.minimum - e.input.length) +
                  " or more characters"
                );
              },
              loadingMore: function () {
                return "Loading more results…";
              },
              maximumSelected: function (e) {
                var t = "You can only select " + e.maximum + " item";
                return 1 != e.maximum && (t += "s"), t;
              },
              noResults: function () {
                return "No results found";
              },
              searching: function () {
                return "Searching…";
              },
            };
          }),
          t.define(
            "select2/defaults",
            [
              "jquery",
              "require",
              "./results",
              "./selection/single",
              "./selection/multiple",
              "./selection/placeholder",
              "./selection/allowClear",
              "./selection/search",
              "./selection/eventRelay",
              "./utils",
              "./translation",
              "./diacritics",
              "./data/select",
              "./data/array",
              "./data/ajax",
              "./data/tags",
              "./data/tokenizer",
              "./data/minimumInputLength",
              "./data/maximumInputLength",
              "./data/maximumSelectionLength",
              "./dropdown",
              "./dropdown/search",
              "./dropdown/hidePlaceholder",
              "./dropdown/infiniteScroll",
              "./dropdown/attachBody",
              "./dropdown/minimumResultsForSearch",
              "./dropdown/selectOnClose",
              "./dropdown/closeOnSelect",
              "./i18n/en",
            ],
            function (
              e,
              t,
              n,
              r,
              i,
              s,
              o,
              a,
              l,
              c,
              u,
              d,
              p,
              h,
              f,
              g,
              m,
              v,
              A,
              y,
              w,
              b,
              _,
              $,
              x,
              C,
              S,
              E,
              O
            ) {
              function D() {
                this.reset();
              }
              return (
                (D.prototype.apply = function (d) {
                  if (
                    null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter
                  ) {
                    if (
                      (null != d.ajax
                        ? (d.dataAdapter = f)
                        : null != d.data
                        ? (d.dataAdapter = h)
                        : (d.dataAdapter = p),
                      d.minimumInputLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, v)),
                      d.maximumInputLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, A)),
                      d.maximumSelectionLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, y)),
                      d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)),
                      (null == d.tokenSeparators && null == d.tokenizer) ||
                        (d.dataAdapter = c.Decorate(d.dataAdapter, m)),
                      null != d.query)
                    ) {
                      var O = t(d.amdBase + "compat/query");
                      d.dataAdapter = c.Decorate(d.dataAdapter, O);
                    }
                    if (null != d.initSelection) {
                      var D = t(d.amdBase + "compat/initSelection");
                      d.dataAdapter = c.Decorate(d.dataAdapter, D);
                    }
                  }
                  if (
                    (null == d.resultsAdapter &&
                      ((d.resultsAdapter = n),
                      null != d.ajax &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, $)),
                      null != d.placeholder &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, _)),
                      d.selectOnClose &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, S))),
                    null == d.dropdownAdapter)
                  ) {
                    if (d.multiple) d.dropdownAdapter = w;
                    else {
                      var T = c.Decorate(w, b);
                      d.dropdownAdapter = T;
                    }
                    if (
                      (0 !== d.minimumResultsForSearch &&
                        (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)),
                      d.closeOnSelect &&
                        (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)),
                      null != d.dropdownCssClass ||
                        null != d.dropdownCss ||
                        null != d.adaptDropdownCssClass)
                    ) {
                      var L = t(d.amdBase + "compat/dropdownCss");
                      d.dropdownAdapter = c.Decorate(d.dropdownAdapter, L);
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, x);
                  }
                  if (null == d.selectionAdapter) {
                    if (
                      (d.multiple
                        ? (d.selectionAdapter = i)
                        : (d.selectionAdapter = r),
                      null != d.placeholder &&
                        (d.selectionAdapter = c.Decorate(
                          d.selectionAdapter,
                          s
                        )),
                      d.allowClear &&
                        (d.selectionAdapter = c.Decorate(
                          d.selectionAdapter,
                          o
                        )),
                      d.multiple &&
                        (d.selectionAdapter = c.Decorate(
                          d.selectionAdapter,
                          a
                        )),
                      null != d.containerCssClass ||
                        null != d.containerCss ||
                        null != d.adaptContainerCssClass)
                    ) {
                      var q = t(d.amdBase + "compat/containerCss");
                      d.selectionAdapter = c.Decorate(d.selectionAdapter, q);
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l);
                  }
                  if ("string" == typeof d.language)
                    if (d.language.indexOf("-") > 0) {
                      var j = d.language.split("-")[0];
                      d.language = [d.language, j];
                    } else d.language = [d.language];
                  if (e.isArray(d.language)) {
                    var k = new u();
                    d.language.push("en");
                    for (var P = d.language, I = 0; I < P.length; I++) {
                      var N = P[I],
                        R = {};
                      try {
                        R = u.loadPath(N);
                      } catch (e) {
                        try {
                          (N = this.defaults.amdLanguageBase + N),
                            (R = u.loadPath(N));
                        } catch (e) {
                          d.debug &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The language file for "' +
                                N +
                                '" could not be automatically loaded. A fallback will be used instead.'
                            );
                          continue;
                        }
                      }
                      k.extend(R);
                    }
                    d.translations = k;
                  } else {
                    var M = u.loadPath(this.defaults.amdLanguageBase + "en"),
                      B = new u(d.language);
                    B.extend(M), (d.translations = B);
                  }
                  return d;
                }),
                (D.prototype.reset = function () {
                  function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                      return d[e] || e;
                    });
                  }
                  this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: O,
                    matcher: function n(r, i) {
                      if ("" === e.trim(r.term)) return i;
                      if (i.children && i.children.length > 0) {
                        for (
                          var s = e.extend(!0, {}, i),
                            o = i.children.length - 1;
                          o >= 0;
                          o--
                        ) {
                          null == n(r, i.children[o]) &&
                            s.children.splice(o, 1);
                        }
                        return s.children.length > 0 ? s : n(r, s);
                      }
                      var a = t(i.text).toUpperCase(),
                        l = t(r.term).toUpperCase();
                      return a.indexOf(l) > -1 ? i : null;
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (e) {
                      return e;
                    },
                    templateResult: function (e) {
                      return e.text;
                    },
                    templateSelection: function (e) {
                      return e.text;
                    },
                    theme: "default",
                    width: "resolve",
                  };
                }),
                (D.prototype.set = function (t, n) {
                  var r = {};
                  r[e.camelCase(t)] = n;
                  var i = c._convertData(r);
                  e.extend(this.defaults, i);
                }),
                new D()
              );
            }
          ),
          t.define(
            "select2/options",
            ["require", "jquery", "./defaults", "./utils"],
            function (e, t, n, r) {
              function i(t, i) {
                if (
                  ((this.options = t),
                  null != i && this.fromElement(i),
                  (this.options = n.apply(this.options)),
                  i && i.is("input"))
                ) {
                  var s = e(this.get("amdBase") + "compat/inputData");
                  this.options.dataAdapter = r.Decorate(
                    this.options.dataAdapter,
                    s
                  );
                }
              }
              return (
                (i.prototype.fromElement = function (e) {
                  var n = ["select2"];
                  null == this.options.multiple &&
                    (this.options.multiple = e.prop("multiple")),
                    null == this.options.disabled &&
                      (this.options.disabled = e.prop("disabled")),
                    null == this.options.language &&
                      (e.prop("lang")
                        ? (this.options.language = e.prop("lang").toLowerCase())
                        : e.closest("[lang]").prop("lang") &&
                          (this.options.language = e
                            .closest("[lang]")
                            .prop("lang"))),
                    null == this.options.dir &&
                      (e.prop("dir")
                        ? (this.options.dir = e.prop("dir"))
                        : e.closest("[dir]").prop("dir")
                        ? (this.options.dir = e.closest("[dir]").prop("dir"))
                        : (this.options.dir = "ltr")),
                    e.prop("disabled", this.options.disabled),
                    e.prop("multiple", this.options.multiple),
                    e.data("select2Tags") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                        ),
                      e.data("data", e.data("select2Tags")),
                      e.data("tags", !0)),
                    e.data("ajaxUrl") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                        ),
                      e.attr("ajax--url", e.data("ajaxUrl")),
                      e.data("ajax--url", e.data("ajaxUrl")));
                  var i = {};
                  i =
                    t.fn.jquery &&
                    "1." == t.fn.jquery.substr(0, 2) &&
                    e[0].dataset
                      ? t.extend(!0, {}, e[0].dataset, e.data())
                      : e.data();
                  var s = t.extend(!0, {}, i);
                  for (var o in (s = r._convertData(s)))
                    t.inArray(o, n) > -1 ||
                      (t.isPlainObject(this.options[o])
                        ? t.extend(this.options[o], s[o])
                        : (this.options[o] = s[o]));
                  return this;
                }),
                (i.prototype.get = function (e) {
                  return this.options[e];
                }),
                (i.prototype.set = function (e, t) {
                  this.options[e] = t;
                }),
                i
              );
            }
          ),
          t.define(
            "select2/core",
            ["jquery", "./options", "./utils", "./keys"],
            function (e, t, n, r) {
              var i = function (e, n) {
                null != e.data("select2") && e.data("select2").destroy(),
                  (this.$element = e),
                  (this.id = this._generateId(e)),
                  (n = n || {}),
                  (this.options = new t(n, e)),
                  i.__super__.constructor.call(this);
                var r = e.attr("tabindex") || 0;
                e.data("old-tabindex", r), e.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(e, this.options);
                var o = this.render();
                this._placeContainer(o);
                var a = this.options.get("selectionAdapter");
                (this.selection = new a(e, this.options)),
                  (this.$selection = this.selection.render()),
                  this.selection.position(this.$selection, o);
                var l = this.options.get("dropdownAdapter");
                (this.dropdown = new l(e, this.options)),
                  (this.$dropdown = this.dropdown.render()),
                  this.dropdown.position(this.$dropdown, o);
                var c = this.options.get("resultsAdapter");
                (this.results = new c(e, this.options, this.dataAdapter)),
                  (this.$results = this.results.render()),
                  this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(),
                  this._registerDomEvents(),
                  this._registerDataEvents(),
                  this._registerSelectionEvents(),
                  this._registerDropdownEvents(),
                  this._registerResultsEvents(),
                  this._registerEvents(),
                  this.dataAdapter.current(function (e) {
                    u.trigger("selection:update", { data: e });
                  }),
                  e.addClass("select2-hidden-accessible"),
                  e.attr("aria-hidden", "true"),
                  this._syncAttributes(),
                  e.data("select2", this);
              };
              return (
                n.Extend(i, n.Observable),
                (i.prototype._generateId = function (e) {
                  return (
                    "select2-" +
                    (null != e.attr("id")
                      ? e.attr("id")
                      : null != e.attr("name")
                      ? e.attr("name") + "-" + n.generateChars(2)
                      : n.generateChars(4)
                    ).replace(/(:|\.|\[|\]|,)/g, "")
                  );
                }),
                (i.prototype._placeContainer = function (e) {
                  e.insertAfter(this.$element);
                  var t = this._resolveWidth(
                    this.$element,
                    this.options.get("width")
                  );
                  null != t && e.css("width", t);
                }),
                (i.prototype._resolveWidth = function (e, t) {
                  var n =
                    /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                  if ("resolve" == t) {
                    var r = this._resolveWidth(e, "style");
                    return null != r ? r : this._resolveWidth(e, "element");
                  }
                  if ("element" == t) {
                    var i = e.outerWidth(!1);
                    return i <= 0 ? "auto" : i + "px";
                  }
                  if ("style" == t) {
                    var s = e.attr("style");
                    if ("string" != typeof s) return null;
                    for (
                      var o = s.split(";"), a = 0, l = o.length;
                      a < l;
                      a += 1
                    ) {
                      var c = o[a].replace(/\s/g, "").match(n);
                      if (null !== c && c.length >= 1) return c[1];
                    }
                    return null;
                  }
                  return t;
                }),
                (i.prototype._bindAdapters = function () {
                  this.dataAdapter.bind(this, this.$container),
                    this.selection.bind(this, this.$container),
                    this.dropdown.bind(this, this.$container),
                    this.results.bind(this, this.$container);
                }),
                (i.prototype._registerDomEvents = function () {
                  var t = this;
                  this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                      t.trigger("selection:update", { data: e });
                    });
                  }),
                    this.$element.on("focus.select2", function (e) {
                      t.trigger("focus", e);
                    }),
                    (this._syncA = n.bind(this._syncAttributes, this)),
                    (this._syncS = n.bind(this._syncSubtree, this)),
                    this.$element[0].attachEvent &&
                      this.$element[0].attachEvent(
                        "onpropertychange",
                        this._syncA
                      );
                  var r =
                    window.MutationObserver ||
                    window.WebKitMutationObserver ||
                    window.MozMutationObserver;
                  null != r
                    ? ((this._observer = new r(function (n) {
                        e.each(n, t._syncA), e.each(n, t._syncS);
                      })),
                      this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1,
                      }))
                    : this.$element[0].addEventListener &&
                      (this.$element[0].addEventListener(
                        "DOMAttrModified",
                        t._syncA,
                        !1
                      ),
                      this.$element[0].addEventListener(
                        "DOMNodeInserted",
                        t._syncS,
                        !1
                      ),
                      this.$element[0].addEventListener(
                        "DOMNodeRemoved",
                        t._syncS,
                        !1
                      ));
                }),
                (i.prototype._registerDataEvents = function () {
                  var e = this;
                  this.dataAdapter.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (i.prototype._registerSelectionEvents = function () {
                  var t = this,
                    n = ["toggle", "focus"];
                  this.selection.on("toggle", function () {
                    t.toggleDropdown();
                  }),
                    this.selection.on("focus", function (e) {
                      t.focus(e);
                    }),
                    this.selection.on("*", function (r, i) {
                      -1 === e.inArray(r, n) && t.trigger(r, i);
                    });
                }),
                (i.prototype._registerDropdownEvents = function () {
                  var e = this;
                  this.dropdown.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (i.prototype._registerResultsEvents = function () {
                  var e = this;
                  this.results.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (i.prototype._registerEvents = function () {
                  var e = this;
                  this.on("open", function () {
                    e.$container.addClass("select2-container--open");
                  }),
                    this.on("close", function () {
                      e.$container.removeClass("select2-container--open");
                    }),
                    this.on("enable", function () {
                      e.$container.removeClass("select2-container--disabled");
                    }),
                    this.on("disable", function () {
                      e.$container.addClass("select2-container--disabled");
                    }),
                    this.on("blur", function () {
                      e.$container.removeClass("select2-container--focus");
                    }),
                    this.on("query", function (t) {
                      e.isOpen() || e.trigger("open", {}),
                        this.dataAdapter.query(t, function (n) {
                          e.trigger("results:all", { data: n, query: t });
                        });
                    }),
                    this.on("query:append", function (t) {
                      this.dataAdapter.query(t, function (n) {
                        e.trigger("results:append", { data: n, query: t });
                      });
                    }),
                    this.on("keypress", function (t) {
                      var n = t.which;
                      e.isOpen()
                        ? n === r.ESC || n === r.TAB || (n === r.UP && t.altKey)
                          ? (e.close(), t.preventDefault())
                          : n === r.ENTER
                          ? (e.trigger("results:select", {}),
                            t.preventDefault())
                          : n === r.SPACE && t.ctrlKey
                          ? (e.trigger("results:toggle", {}),
                            t.preventDefault())
                          : n === r.UP
                          ? (e.trigger("results:previous", {}),
                            t.preventDefault())
                          : n === r.DOWN &&
                            (e.trigger("results:next", {}), t.preventDefault())
                        : (n === r.ENTER ||
                            n === r.SPACE ||
                            (n === r.DOWN && t.altKey)) &&
                          (e.open(), t.preventDefault());
                    });
                }),
                (i.prototype._syncAttributes = function () {
                  this.options.set("disabled", this.$element.prop("disabled")),
                    this.options.get("disabled")
                      ? (this.isOpen() && this.close(),
                        this.trigger("disable", {}))
                      : this.trigger("enable", {});
                }),
                (i.prototype._syncSubtree = function (e, t) {
                  var n = !1,
                    r = this;
                  if (
                    !e ||
                    !e.target ||
                    "OPTION" === e.target.nodeName ||
                    "OPTGROUP" === e.target.nodeName
                  ) {
                    if (t)
                      if (t.addedNodes && t.addedNodes.length > 0)
                        for (var i = 0; i < t.addedNodes.length; i++) {
                          t.addedNodes[i].selected && (n = !0);
                        }
                      else
                        t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                    else n = !0;
                    n &&
                      this.dataAdapter.current(function (e) {
                        r.trigger("selection:update", { data: e });
                      });
                  }
                }),
                (i.prototype.trigger = function (e, t) {
                  var n = i.__super__.trigger,
                    r = {
                      open: "opening",
                      close: "closing",
                      select: "selecting",
                      unselect: "unselecting",
                    };
                  if ((void 0 === t && (t = {}), e in r)) {
                    var s = r[e],
                      o = { prevented: !1, name: e, args: t };
                    if ((n.call(this, s, o), o.prevented))
                      return void (t.prevented = !0);
                  }
                  n.call(this, e, t);
                }),
                (i.prototype.toggleDropdown = function () {
                  this.options.get("disabled") ||
                    (this.isOpen() ? this.close() : this.open());
                }),
                (i.prototype.open = function () {
                  this.isOpen() || this.trigger("query", {});
                }),
                (i.prototype.close = function () {
                  this.isOpen() && this.trigger("close", {});
                }),
                (i.prototype.isOpen = function () {
                  return this.$container.hasClass("select2-container--open");
                }),
                (i.prototype.hasFocus = function () {
                  return this.$container.hasClass("select2-container--focus");
                }),
                (i.prototype.focus = function (e) {
                  this.hasFocus() ||
                    (this.$container.addClass("select2-container--focus"),
                    this.trigger("focus", {}));
                }),
                (i.prototype.enable = function (e) {
                  this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                    ),
                    (null != e && 0 !== e.length) || (e = [!0]);
                  var t = !e[0];
                  this.$element.prop("disabled", t);
                }),
                (i.prototype.data = function () {
                  this.options.get("debug") &&
                    arguments.length > 0 &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                    );
                  var e = [];
                  return (
                    this.dataAdapter.current(function (t) {
                      e = t;
                    }),
                    e
                  );
                }),
                (i.prototype.val = function (t) {
                  if (
                    (this.options.get("debug") &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                      ),
                    null == t || 0 === t.length)
                  )
                    return this.$element.val();
                  var n = t[0];
                  e.isArray(n) &&
                    (n = e.map(n, function (e) {
                      return e.toString();
                    })),
                    this.$element.val(n).trigger("change");
                }),
                (i.prototype.destroy = function () {
                  this.$container.remove(),
                    this.$element[0].detachEvent &&
                      this.$element[0].detachEvent(
                        "onpropertychange",
                        this._syncA
                      ),
                    null != this._observer
                      ? (this._observer.disconnect(), (this._observer = null))
                      : this.$element[0].removeEventListener &&
                        (this.$element[0].removeEventListener(
                          "DOMAttrModified",
                          this._syncA,
                          !1
                        ),
                        this.$element[0].removeEventListener(
                          "DOMNodeInserted",
                          this._syncS,
                          !1
                        ),
                        this.$element[0].removeEventListener(
                          "DOMNodeRemoved",
                          this._syncS,
                          !1
                        )),
                    (this._syncA = null),
                    (this._syncS = null),
                    this.$element.off(".select2"),
                    this.$element.attr(
                      "tabindex",
                      this.$element.data("old-tabindex")
                    ),
                    this.$element.removeClass("select2-hidden-accessible"),
                    this.$element.attr("aria-hidden", "false"),
                    this.$element.removeData("select2"),
                    this.dataAdapter.destroy(),
                    this.selection.destroy(),
                    this.dropdown.destroy(),
                    this.results.destroy(),
                    (this.dataAdapter = null),
                    (this.selection = null),
                    (this.dropdown = null),
                    (this.results = null);
                }),
                (i.prototype.render = function () {
                  var t = e(
                    '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                  );
                  return (
                    t.attr("dir", this.options.get("dir")),
                    (this.$container = t),
                    this.$container.addClass(
                      "select2-container--" + this.options.get("theme")
                    ),
                    t.data("element", this.$element),
                    t
                  );
                }),
                i
              );
            }
          ),
          t.define("select2/compat/utils", ["jquery"], function (e) {
            return {
              syncCssClasses: function (t, n, r) {
                var i,
                  s,
                  o = [];
                (i = e.trim(t.attr("class"))) &&
                  e((i = "" + i).split(/\s+/)).each(function () {
                    0 === this.indexOf("select2-") && o.push(this);
                  }),
                  (i = e.trim(n.attr("class"))) &&
                    e((i = "" + i).split(/\s+/)).each(function () {
                      0 !== this.indexOf("select2-") &&
                        null != (s = r(this)) &&
                        o.push(s);
                    }),
                  t.attr("class", o.join(" "));
              },
            };
          }),
          t.define(
            "select2/compat/containerCss",
            ["jquery", "./utils"],
            function (e, t) {
              function n(e) {
                return null;
              }
              function r() {}
              return (
                (r.prototype.render = function (r) {
                  var i = r.call(this),
                    s = this.options.get("containerCssClass") || "";
                  e.isFunction(s) && (s = s(this.$element));
                  var o = this.options.get("adaptContainerCssClass");
                  if (((o = o || n), -1 !== s.indexOf(":all:"))) {
                    s = s.replace(":all:", "");
                    var a = o;
                    o = function (e) {
                      var t = a(e);
                      return null != t ? t + " " + e : e;
                    };
                  }
                  var l = this.options.get("containerCss") || {};
                  return (
                    e.isFunction(l) && (l = l(this.$element)),
                    t.syncCssClasses(i, this.$element, o),
                    i.css(l),
                    i.addClass(s),
                    i
                  );
                }),
                r
              );
            }
          ),
          t.define(
            "select2/compat/dropdownCss",
            ["jquery", "./utils"],
            function (e, t) {
              function n(e) {
                return null;
              }
              function r() {}
              return (
                (r.prototype.render = function (r) {
                  var i = r.call(this),
                    s = this.options.get("dropdownCssClass") || "";
                  e.isFunction(s) && (s = s(this.$element));
                  var o = this.options.get("adaptDropdownCssClass");
                  if (((o = o || n), -1 !== s.indexOf(":all:"))) {
                    s = s.replace(":all:", "");
                    var a = o;
                    o = function (e) {
                      var t = a(e);
                      return null != t ? t + " " + e : e;
                    };
                  }
                  var l = this.options.get("dropdownCss") || {};
                  return (
                    e.isFunction(l) && (l = l(this.$element)),
                    t.syncCssClasses(i, this.$element, o),
                    i.css(l),
                    i.addClass(s),
                    i
                  );
                }),
                r
              );
            }
          ),
          t.define("select2/compat/initSelection", ["jquery"], function (e) {
            function t(e, t, n) {
              n.get("debug") &&
                window.console &&
                console.warn &&
                console.warn(
                  "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
                ),
                (this.initSelection = n.get("initSelection")),
                (this._isInitialized = !1),
                e.call(this, t, n);
            }
            return (
              (t.prototype.current = function (t, n) {
                var r = this;
                this._isInitialized
                  ? t.call(this, n)
                  : this.initSelection.call(null, this.$element, function (t) {
                      (r._isInitialized = !0), e.isArray(t) || (t = [t]), n(t);
                    });
              }),
              t
            );
          }),
          t.define("select2/compat/inputData", ["jquery"], function (e) {
            function t(e, t, n) {
              (this._currentData = []),
                (this._valueSeparator = n.get("valueSeparator") || ","),
                "hidden" === t.prop("type") &&
                  n.get("debug") &&
                  console &&
                  console.warn &&
                  console.warn(
                    "Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."
                  ),
                e.call(this, t, n);
            }
            return (
              (t.prototype.current = function (t, n) {
                function r(t, n) {
                  var i = [];
                  return (
                    t.selected || -1 !== e.inArray(t.id, n)
                      ? ((t.selected = !0), i.push(t))
                      : (t.selected = !1),
                    t.children && i.push.apply(i, r(t.children, n)),
                    i
                  );
                }
                for (var i = [], s = 0; s < this._currentData.length; s++) {
                  var o = this._currentData[s];
                  i.push.apply(
                    i,
                    r(o, this.$element.val().split(this._valueSeparator))
                  );
                }
                n(i);
              }),
              (t.prototype.select = function (t, n) {
                if (this.options.get("multiple")) {
                  var r = this.$element.val();
                  (r += this._valueSeparator + n.id),
                    this.$element.val(r),
                    this.$element.trigger("change");
                } else
                  this.current(function (t) {
                    e.map(t, function (e) {
                      e.selected = !1;
                    });
                  }),
                    this.$element.val(n.id),
                    this.$element.trigger("change");
              }),
              (t.prototype.unselect = function (e, t) {
                var n = this;
                (t.selected = !1),
                  this.current(function (e) {
                    for (var r = [], i = 0; i < e.length; i++) {
                      var s = e[i];
                      t.id != s.id && r.push(s.id);
                    }
                    n.$element.val(r.join(n._valueSeparator)),
                      n.$element.trigger("change");
                  });
              }),
              (t.prototype.query = function (e, t, n) {
                for (var r = [], i = 0; i < this._currentData.length; i++) {
                  var s = this._currentData[i],
                    o = this.matches(t, s);
                  null !== o && r.push(o);
                }
                n({ results: r });
              }),
              (t.prototype.addOptions = function (t, n) {
                var r = e.map(n, function (t) {
                  return e.data(t[0], "data");
                });
                this._currentData.push.apply(this._currentData, r);
              }),
              t
            );
          }),
          t.define("select2/compat/matcher", ["jquery"], function (e) {
            return function (t) {
              return function (n, r) {
                var i = e.extend(!0, {}, r);
                if (null == n.term || "" === e.trim(n.term)) return i;
                if (r.children) {
                  for (var s = r.children.length - 1; s >= 0; s--) {
                    var o = r.children[s];
                    t(n.term, o.text, o) || i.children.splice(s, 1);
                  }
                  if (i.children.length > 0) return i;
                }
                return t(n.term, r.text, r) ? i : null;
              };
            };
          }),
          t.define("select2/compat/query", [], function () {
            function e(e, t, n) {
              n.get("debug") &&
                window.console &&
                console.warn &&
                console.warn(
                  "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."
                ),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.callback = n), this.options.get("query").call(null, t);
              }),
              e
            );
          }),
          t.define("select2/dropdown/attachContainer", [], function () {
            function e(e, t, n) {
              e.call(this, t, n);
            }
            return (
              (e.prototype.position = function (e, t, n) {
                n.find(".dropdown-wrapper").append(t),
                  t.addClass("select2-dropdown--below"),
                  n.addClass("select2-container--below");
              }),
              e
            );
          }),
          t.define("select2/dropdown/stopPropagation", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                e.call(this, t, n);
                this.$dropdown.on(
                  [
                    "blur",
                    "change",
                    "click",
                    "dblclick",
                    "focus",
                    "focusin",
                    "focusout",
                    "input",
                    "keydown",
                    "keyup",
                    "keypress",
                    "mousedown",
                    "mouseenter",
                    "mouseleave",
                    "mousemove",
                    "mouseover",
                    "mouseup",
                    "search",
                    "touchend",
                    "touchstart",
                  ].join(" "),
                  function (e) {
                    e.stopPropagation();
                  }
                );
              }),
              e
            );
          }),
          t.define("select2/selection/stopPropagation", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                e.call(this, t, n);
                this.$selection.on(
                  [
                    "blur",
                    "change",
                    "click",
                    "dblclick",
                    "focus",
                    "focusin",
                    "focusout",
                    "input",
                    "keydown",
                    "keyup",
                    "keypress",
                    "mousedown",
                    "mouseenter",
                    "mouseleave",
                    "mousemove",
                    "mouseover",
                    "mouseup",
                    "search",
                    "touchend",
                    "touchstart",
                  ].join(" "),
                  function (e) {
                    e.stopPropagation();
                  }
                );
              }),
              e
            );
          }),
          /*!
           * jQuery Mousewheel 3.1.13
           *
           * Copyright jQuery Foundation and other contributors
           * Released under the MIT license
           * http://jquery.org/license
           */
          (n = function (e) {
            var t,
              n,
              r = [
                "wheel",
                "mousewheel",
                "DOMMouseScroll",
                "MozMousePixelScroll",
              ],
              i =
                "onwheel" in document || document.documentMode >= 9
                  ? ["wheel"]
                  : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
              s = Array.prototype.slice;
            if (e.event.fixHooks)
              for (var o = r.length; o; )
                e.event.fixHooks[r[--o]] = e.event.mouseHooks;
            var a = (e.event.special.mousewheel = {
              version: "3.1.12",
              setup: function () {
                if (this.addEventListener)
                  for (var t = i.length; t; )
                    this.addEventListener(i[--t], l, !1);
                else this.onmousewheel = l;
                e.data(this, "mousewheel-line-height", a.getLineHeight(this)),
                  e.data(this, "mousewheel-page-height", a.getPageHeight(this));
              },
              teardown: function () {
                if (this.removeEventListener)
                  for (var t = i.length; t; )
                    this.removeEventListener(i[--t], l, !1);
                else this.onmousewheel = null;
                e.removeData(this, "mousewheel-line-height"),
                  e.removeData(this, "mousewheel-page-height");
              },
              getLineHeight: function (t) {
                var n = e(t),
                  r = n["offsetParent" in e.fn ? "offsetParent" : "parent"]();
                return (
                  r.length || (r = e("body")),
                  parseInt(r.css("fontSize"), 10) ||
                    parseInt(n.css("fontSize"), 10) ||
                    16
                );
              },
              getPageHeight: function (t) {
                return e(t).height();
              },
              settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
            });
            function l(r) {
              var i = r || window.event,
                o = s.call(arguments, 1),
                l = 0,
                d = 0,
                p = 0,
                h = 0,
                f = 0,
                g = 0;
              if (
                (((r = e.event.fix(i)).type = "mousewheel"),
                "detail" in i && (p = -1 * i.detail),
                "wheelDelta" in i && (p = i.wheelDelta),
                "wheelDeltaY" in i && (p = i.wheelDeltaY),
                "wheelDeltaX" in i && (d = -1 * i.wheelDeltaX),
                "axis" in i &&
                  i.axis === i.HORIZONTAL_AXIS &&
                  ((d = -1 * p), (p = 0)),
                (l = 0 === p ? d : p),
                "deltaY" in i && (l = p = -1 * i.deltaY),
                "deltaX" in i && ((d = i.deltaX), 0 === p && (l = -1 * d)),
                0 !== p || 0 !== d)
              ) {
                if (1 === i.deltaMode) {
                  var m = e.data(this, "mousewheel-line-height");
                  (l *= m), (p *= m), (d *= m);
                } else if (2 === i.deltaMode) {
                  var v = e.data(this, "mousewheel-page-height");
                  (l *= v), (p *= v), (d *= v);
                }
                if (
                  ((h = Math.max(Math.abs(p), Math.abs(d))),
                  (!n || h < n) && ((n = h), u(i, h) && (n /= 40)),
                  u(i, h) && ((l /= 40), (d /= 40), (p /= 40)),
                  (l = Math[l >= 1 ? "floor" : "ceil"](l / n)),
                  (d = Math[d >= 1 ? "floor" : "ceil"](d / n)),
                  (p = Math[p >= 1 ? "floor" : "ceil"](p / n)),
                  a.settings.normalizeOffset && this.getBoundingClientRect)
                ) {
                  var A = this.getBoundingClientRect();
                  (f = r.clientX - A.left), (g = r.clientY - A.top);
                }
                return (
                  (r.deltaX = d),
                  (r.deltaY = p),
                  (r.deltaFactor = n),
                  (r.offsetX = f),
                  (r.offsetY = g),
                  (r.deltaMode = 0),
                  o.unshift(r, l, d, p),
                  t && clearTimeout(t),
                  (t = setTimeout(c, 200)),
                  (e.event.dispatch || e.event.handle).apply(this, o)
                );
              }
            }
            function c() {
              n = null;
            }
            function u(e, t) {
              return (
                a.settings.adjustOldDeltas &&
                "mousewheel" === e.type &&
                t % 120 == 0
              );
            }
            e.fn.extend({
              mousewheel: function (e) {
                return e
                  ? this.bind("mousewheel", e)
                  : this.trigger("mousewheel");
              },
              unmousewheel: function (e) {
                return this.unbind("mousewheel", e);
              },
            });
          }),
          "function" == typeof t.define && t.define.amd
            ? t.define("jquery-mousewheel", ["jquery"], n)
            : "object" == typeof exports
            ? (module.exports = n)
            : n(e),
          t.define(
            "jquery.select2",
            [
              "jquery",
              "jquery-mousewheel",
              "./select2/core",
              "./select2/defaults",
            ],
            function (e, t, n, r) {
              if (null == e.fn.select2) {
                var i = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                  if ("object" == typeof (t = t || {}))
                    return (
                      this.each(function () {
                        var r = e.extend(!0, {}, t);
                        new n(e(this), r);
                      }),
                      this
                    );
                  if ("string" == typeof t) {
                    var r,
                      s = Array.prototype.slice.call(arguments, 1);
                    return (
                      this.each(function () {
                        var n = e(this).data("select2");
                        null == n &&
                          window.console &&
                          console.error &&
                          console.error(
                            "The select2('" +
                              t +
                              "') method was called on an element that is not using Select2."
                          ),
                          (r = n[t].apply(n, s));
                      }),
                      e.inArray(t, i) > -1 ? this : r
                    );
                  }
                  throw new Error("Invalid arguments for Select2: " + t);
                };
              }
              return (
                null == e.fn.select2.defaults && (e.fn.select2.defaults = r), n
              );
            }
          ),
          { define: t.define, require: t.require }
        );
      })(),
      n = t.require("jquery.select2");
    return (e.fn.select2.amd = t), n;
  }),
  $(".js-example-placeholder-single").select2({
    placeholder: "Select a state",
    allowClear: !0,
  }),
  /*!
   * Select2 4.0.3
   * https://select2.github.io
   *
   * Released under the MIT license
   * https://github.com/select2/select2/blob/master/LICENSE.md
   */
  (function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : "object" == typeof exports
      ? e(require("jquery"))
      : e(jQuery);
  })(function (e) {
    var t = (function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd)
          var t = e.fn.select2.amd;
        return (
          (function () {
            /**
             * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
             * Available via the MIT or new BSD license.
             * see: http://github.com/jrburke/almond for details
             */
            var e, n, r;
            (t && t.requirejs) ||
              (t ? (n = t) : (t = {}),
              (function (t) {
                var i,
                  s,
                  o,
                  a,
                  l = {},
                  c = {},
                  u = {},
                  d = {},
                  p = Object.prototype.hasOwnProperty,
                  h = [].slice,
                  f = /\.js$/;
                function g(e, t) {
                  return p.call(e, t);
                }
                function m(e, t) {
                  var n,
                    r,
                    i,
                    s,
                    o,
                    a,
                    l,
                    c,
                    d,
                    p,
                    h,
                    g = t && t.split("/"),
                    m = u.map,
                    v = (m && m["*"]) || {};
                  if (e && "." === e.charAt(0))
                    if (t) {
                      for (
                        o = (e = e.split("/")).length - 1,
                          u.nodeIdCompat &&
                            f.test(e[o]) &&
                            (e[o] = e[o].replace(f, "")),
                          e = g.slice(0, g.length - 1).concat(e),
                          d = 0;
                        d < e.length;
                        d += 1
                      )
                        if ("." === (h = e[d])) e.splice(d, 1), (d -= 1);
                        else if (".." === h) {
                          if (1 === d && (".." === e[2] || ".." === e[0]))
                            break;
                          d > 0 && (e.splice(d - 1, 2), (d -= 2));
                        }
                      e = e.join("/");
                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                  if ((g || v) && m) {
                    for (d = (n = e.split("/")).length; d > 0; d -= 1) {
                      if (((r = n.slice(0, d).join("/")), g))
                        for (p = g.length; p > 0; p -= 1)
                          if ((i = m[g.slice(0, p).join("/")]) && (i = i[r])) {
                            (s = i), (a = d);
                            break;
                          }
                      if (s) break;
                      !l && v && v[r] && ((l = v[r]), (c = d));
                    }
                    !s && l && ((s = l), (a = c)),
                      s && (n.splice(0, a, s), (e = n.join("/")));
                  }
                  return e;
                }
                function v(e, n) {
                  return function () {
                    var r = h.call(arguments, 0);
                    return (
                      "string" != typeof r[0] && 1 === r.length && r.push(null),
                      s.apply(t, r.concat([e, n]))
                    );
                  };
                }
                function A(e) {
                  return function (t) {
                    l[e] = t;
                  };
                }
                function y(e) {
                  if (g(c, e)) {
                    var n = c[e];
                    delete c[e], (d[e] = !0), i.apply(t, n);
                  }
                  if (!g(l, e) && !g(d, e)) throw new Error("No " + e);
                  return l[e];
                }
                function w(e) {
                  var t,
                    n = e ? e.indexOf("!") : -1;
                  return (
                    n > -1 &&
                      ((t = e.substring(0, n)),
                      (e = e.substring(n + 1, e.length))),
                    [t, e]
                  );
                }
                function b(e) {
                  return function () {
                    return (u && u.config && u.config[e]) || {};
                  };
                }
                (o = function (e, t) {
                  var n,
                    r = w(e),
                    i = r[0];
                  return (
                    (e = r[1]),
                    i && (n = y((i = m(i, t)))),
                    i
                      ? (e =
                          n && n.normalize
                            ? n.normalize(
                                e,
                                (function (e) {
                                  return function (t) {
                                    return m(t, e);
                                  };
                                })(t)
                              )
                            : m(e, t))
                      : ((i = (r = w((e = m(e, t))))[0]),
                        (e = r[1]),
                        i && (n = y(i))),
                    { f: i ? i + "!" + e : e, n: e, pr: i, p: n }
                  );
                }),
                  (a = {
                    require: function (e) {
                      return v(e);
                    },
                    exports: function (e) {
                      var t = l[e];
                      return void 0 !== t ? t : (l[e] = {});
                    },
                    module: function (e) {
                      return { id: e, uri: "", exports: l[e], config: b(e) };
                    },
                  }),
                  (i = function (e, n, r, i) {
                    var s,
                      u,
                      p,
                      h,
                      f,
                      m,
                      w = [],
                      b = typeof r;
                    if (((i = i || e), "undefined" === b || "function" === b)) {
                      for (
                        n =
                          !n.length && r.length
                            ? ["require", "exports", "module"]
                            : n,
                          f = 0;
                        f < n.length;
                        f += 1
                      )
                        if ("require" === (u = (h = o(n[f], i)).f))
                          w[f] = a.require(e);
                        else if ("exports" === u)
                          (w[f] = a.exports(e)), (m = !0);
                        else if ("module" === u) s = w[f] = a.module(e);
                        else if (g(l, u) || g(c, u) || g(d, u)) w[f] = y(u);
                        else {
                          if (!h.p) throw new Error(e + " missing " + u);
                          h.p.load(h.n, v(i, !0), A(u), {}), (w[f] = l[u]);
                        }
                      (p = r ? r.apply(l[e], w) : void 0),
                        e &&
                          (s && s.exports !== t && s.exports !== l[e]
                            ? (l[e] = s.exports)
                            : (p === t && m) || (l[e] = p));
                    } else e && (l[e] = r);
                  }),
                  (e =
                    n =
                    s =
                      function (e, n, r, l, c) {
                        if ("string" == typeof e)
                          return a[e] ? a[e](n) : y(o(e, n).f);
                        if (!e.splice) {
                          if (((u = e).deps && s(u.deps, u.callback), !n))
                            return;
                          n.splice ? ((e = n), (n = r), (r = null)) : (e = t);
                        }
                        return (
                          (n = n || function () {}),
                          "function" == typeof r && ((r = l), (l = c)),
                          l
                            ? i(t, e, n, r)
                            : setTimeout(function () {
                                i(t, e, n, r);
                              }, 4),
                          s
                        );
                      }),
                  (s.config = function (e) {
                    return s(e);
                  }),
                  (e._defined = l),
                  ((r = function (e, t, n) {
                    if ("string" != typeof e)
                      throw new Error(
                        "See almond README: incorrect module build, no module name"
                      );
                    t.splice || ((n = t), (t = [])),
                      g(l, e) || g(c, e) || (c[e] = [e, t, n]);
                  }).amd = { jQuery: !0 });
              })(),
              (t.requirejs = e),
              (t.require = n),
              (t.define = r));
          })(),
          t.define("almond", function () {}),
          t.define("jquery", [], function () {
            var t = e || $;
            return (
              null == t &&
                console &&
                console.error &&
                console.error(
                  "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                ),
              t
            );
          }),
          t.define("select2/utils", ["jquery"], function (e) {
            var t = {};
            function n(e) {
              var t = e.prototype,
                n = [];
              for (var r in t) {
                "function" == typeof t[r] && "constructor" !== r && n.push(r);
              }
              return n;
            }
            (t.Extend = function (e, t) {
              var n = {}.hasOwnProperty;
              function r() {
                this.constructor = e;
              }
              for (var i in t) n.call(t, i) && (e[i] = t[i]);
              return (
                (r.prototype = t.prototype),
                (e.prototype = new r()),
                (e.__super__ = t.prototype),
                e
              );
            }),
              (t.Decorate = function (e, t) {
                var r = n(t),
                  i = n(e);
                function s() {
                  var n = Array.prototype.unshift,
                    r = t.prototype.constructor.length,
                    i = e.prototype.constructor;
                  r > 0 &&
                    (n.call(arguments, e.prototype.constructor),
                    (i = t.prototype.constructor)),
                    i.apply(this, arguments);
                }
                (t.displayName = e.displayName),
                  (s.prototype = new (function () {
                    this.constructor = s;
                  })());
                for (var o = 0; o < i.length; o++) {
                  var a = i[o];
                  s.prototype[a] = e.prototype[a];
                }
                for (
                  var l = function (e) {
                      var n = function () {};
                      (e in s.prototype) && (n = s.prototype[e]);
                      var r = t.prototype[e];
                      return function () {
                        var e = Array.prototype.unshift;
                        return e.call(arguments, n), r.apply(this, arguments);
                      };
                    },
                    c = 0;
                  c < r.length;
                  c++
                ) {
                  var u = r[c];
                  s.prototype[u] = l(u);
                }
                return s;
              });
            var r = function () {
              this.listeners = {};
            };
            return (
              (r.prototype.on = function (e, t) {
                (this.listeners = this.listeners || {}),
                  e in this.listeners
                    ? this.listeners[e].push(t)
                    : (this.listeners[e] = [t]);
              }),
              (r.prototype.trigger = function (e) {
                var t = Array.prototype.slice,
                  n = t.call(arguments, 1);
                (this.listeners = this.listeners || {}),
                  null == n && (n = []),
                  0 === n.length && n.push({}),
                  (n[0]._type = e),
                  e in this.listeners &&
                    this.invoke(this.listeners[e], t.call(arguments, 1)),
                  "*" in this.listeners &&
                    this.invoke(this.listeners["*"], arguments);
              }),
              (r.prototype.invoke = function (e, t) {
                for (var n = 0, r = e.length; n < r; n++) e[n].apply(this, t);
              }),
              (t.Observable = r),
              (t.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++) {
                  t += Math.floor(36 * Math.random()).toString(36);
                }
                return t;
              }),
              (t.bind = function (e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }),
              (t._convertData = function (e) {
                for (var t in e) {
                  var n = t.split("-"),
                    r = e;
                  if (1 !== n.length) {
                    for (var i = 0; i < n.length; i++) {
                      var s = n[i];
                      (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in
                        r || (r[s] = {}),
                        i == n.length - 1 && (r[s] = e[t]),
                        (r = r[s]);
                    }
                    delete e[t];
                  }
                }
                return e;
              }),
              (t.hasScroll = function (t, n) {
                var r = e(n),
                  i = n.style.overflowX,
                  s = n.style.overflowY;
                return (
                  (i !== s || ("hidden" !== s && "visible" !== s)) &&
                  ("scroll" === i ||
                    "scroll" === s ||
                    r.innerHeight() < n.scrollHeight ||
                    r.innerWidth() < n.scrollWidth)
                );
              }),
              (t.escapeMarkup = function (e) {
                var t = {
                  "\\": "&#92;",
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "/": "&#47;",
                };
                return "string" != typeof e
                  ? e
                  : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                      return t[e];
                    });
              }),
              (t.appendMany = function (t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                  var r = e();
                  e.map(n, function (e) {
                    r = r.add(e);
                  }),
                    (n = r);
                }
                t.append(n);
              }),
              t
            );
          }),
          t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, r) {
              (this.$element = e),
                (this.data = r),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              t.Extend(n, t.Observable),
              (n.prototype.render = function () {
                var t = e(
                  '<ul class="select2-results__options" role="tree"></ul>'
                );
                return (
                  this.options.get("multiple") &&
                    t.attr("aria-multiselectable", "true"),
                  (this.$results = t),
                  t
                );
              }),
              (n.prototype.clear = function () {
                this.$results.empty();
              }),
              (n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var r = e(
                    '<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'
                  ),
                  i = this.options.get("translations").get(t.message);
                r.append(n(i(t.args))),
                  (r[0].className += " select2-results__message"),
                  this.$results.append(r);
              }),
              (n.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove();
              }),
              (n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                  e.results = this.sort(e.results);
                  for (var n = 0; n < e.results.length; n++) {
                    var r = e.results[n],
                      i = this.option(r);
                    t.push(i);
                  }
                  this.$results.append(t);
                } else
                  0 === this.$results.children().length &&
                    this.trigger("results:message", { message: "noResults" });
              }),
              (n.prototype.position = function (e, t) {
                t.find(".select2-results").append(e);
              }),
              (n.prototype.sort = function (e) {
                return this.options.get("sorter")(e);
              }),
              (n.prototype.highlightFirstItem = function () {
                var e = this.$results.find(
                    ".select2-results__option[aria-selected]"
                  ),
                  t = e.filter("[aria-selected=true]");
                t.length > 0
                  ? t.first().trigger("mouseenter")
                  : e.first().trigger("mouseenter"),
                  this.ensureHighlightVisible();
              }),
              (n.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (n) {
                  var r = e.map(n, function (e) {
                    return e.id.toString();
                  });
                  t.$results
                    .find(".select2-results__option[aria-selected]")
                    .each(function () {
                      var t = e(this),
                        n = e.data(this, "data"),
                        i = "" + n.id;
                      (null != n.element && n.element.selected) ||
                      (null == n.element && e.inArray(i, r) > -1)
                        ? t.attr("aria-selected", "true")
                        : t.attr("aria-selected", "false");
                    });
                });
              }),
              (n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e),
                  },
                  n = this.option(t);
                (n.className += " loading-results"), this.$results.prepend(n);
              }),
              (n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove();
              }),
              (n.prototype.option = function (t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var r = { role: "treeitem", "aria-selected": "false" };
                for (var i in (t.disabled &&
                  (delete r["aria-selected"], (r["aria-disabled"] = "true")),
                null == t.id && delete r["aria-selected"],
                null != t._resultId && (n.id = t._resultId),
                t.title && (n.title = t.title),
                t.children &&
                  ((r.role = "group"),
                  (r["aria-label"] = t.text),
                  delete r["aria-selected"]),
                r)) {
                  var s = r[i];
                  n.setAttribute(i, s);
                }
                if (t.children) {
                  var o = e(n),
                    a = document.createElement("strong");
                  a.className = "select2-results__group";
                  e(a);
                  this.template(t, a);
                  for (var l = [], c = 0; c < t.children.length; c++) {
                    var u = t.children[c],
                      d = this.option(u);
                    l.push(d);
                  }
                  var p = e("<ul></ul>", {
                    class:
                      "select2-results__options select2-results__options--nested",
                  });
                  p.append(l), o.append(a), o.append(p);
                } else this.template(t, n);
                return e.data(n, "data", t), n;
              }),
              (n.prototype.bind = function (t, n) {
                var r = this,
                  i = t.id + "-results";
                this.$results.attr("id", i),
                  t.on("results:all", function (e) {
                    r.clear(),
                      r.append(e.data),
                      t.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  t.on("results:append", function (e) {
                    r.append(e.data), t.isOpen() && r.setClasses();
                  }),
                  t.on("query", function (e) {
                    r.hideMessages(), r.showLoading(e);
                  }),
                  t.on("select", function () {
                    t.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  t.on("unselect", function () {
                    t.isOpen() && (r.setClasses(), r.highlightFirstItem());
                  }),
                  t.on("open", function () {
                    r.$results.attr("aria-expanded", "true"),
                      r.$results.attr("aria-hidden", "false"),
                      r.setClasses(),
                      r.ensureHighlightVisible();
                  }),
                  t.on("close", function () {
                    r.$results.attr("aria-expanded", "false"),
                      r.$results.attr("aria-hidden", "true"),
                      r.$results.removeAttr("aria-activedescendant");
                  }),
                  t.on("results:toggle", function () {
                    var e = r.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup");
                  }),
                  t.on("results:select", function () {
                    var e = r.getHighlightedResults();
                    if (0 !== e.length) {
                      var t = e.data("data");
                      "true" == e.attr("aria-selected")
                        ? r.trigger("close", {})
                        : r.trigger("select", { data: t });
                    }
                  }),
                  t.on("results:previous", function () {
                    var e = r.getHighlightedResults(),
                      t = r.$results.find("[aria-selected]"),
                      n = t.index(e);
                    if (0 !== n) {
                      var i = n - 1;
                      0 === e.length && (i = 0);
                      var s = t.eq(i);
                      s.trigger("mouseenter");
                      var o = r.$results.offset().top,
                        a = s.offset().top,
                        l = r.$results.scrollTop() + (a - o);
                      0 === i
                        ? r.$results.scrollTop(0)
                        : a - o < 0 && r.$results.scrollTop(l);
                    }
                  }),
                  t.on("results:next", function () {
                    var e = r.getHighlightedResults(),
                      t = r.$results.find("[aria-selected]"),
                      n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                      var i = t.eq(n);
                      i.trigger("mouseenter");
                      var s =
                          r.$results.offset().top + r.$results.outerHeight(!1),
                        o = i.offset().top + i.outerHeight(!1),
                        a = r.$results.scrollTop() + o - s;
                      0 === n
                        ? r.$results.scrollTop(0)
                        : o > s && r.$results.scrollTop(a);
                    }
                  }),
                  t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted");
                  }),
                  t.on("results:message", function (e) {
                    r.displayMessage(e);
                  }),
                  e.fn.mousewheel &&
                    this.$results.on("mousewheel", function (e) {
                      var t = r.$results.scrollTop(),
                        n = r.$results.get(0).scrollHeight - t + e.deltaY,
                        i = e.deltaY > 0 && t - e.deltaY <= 0,
                        s = e.deltaY < 0 && n <= r.$results.height();
                      i
                        ? (r.$results.scrollTop(0),
                          e.preventDefault(),
                          e.stopPropagation())
                        : s &&
                          (r.$results.scrollTop(
                            r.$results.get(0).scrollHeight - r.$results.height()
                          ),
                          e.preventDefault(),
                          e.stopPropagation());
                    }),
                  this.$results.on(
                    "mouseup",
                    ".select2-results__option[aria-selected]",
                    function (t) {
                      var n = e(this),
                        i = n.data("data");
                      "true" !== n.attr("aria-selected")
                        ? r.trigger("select", { originalEvent: t, data: i })
                        : r.options.get("multiple")
                        ? r.trigger("unselect", { originalEvent: t, data: i })
                        : r.trigger("close", {});
                    }
                  ),
                  this.$results.on(
                    "mouseenter",
                    ".select2-results__option[aria-selected]",
                    function (t) {
                      var n = e(this).data("data");
                      r
                        .getHighlightedResults()
                        .removeClass("select2-results__option--highlighted"),
                        r.trigger("results:focus", {
                          data: n,
                          element: e(this),
                        });
                    }
                  );
              }),
              (n.prototype.getHighlightedResults = function () {
                return this.$results.find(
                  ".select2-results__option--highlighted"
                );
              }),
              (n.prototype.destroy = function () {
                this.$results.remove();
              }),
              (n.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                  var t = this.$results.find("[aria-selected]").index(e),
                    n = this.$results.offset().top,
                    r = e.offset().top,
                    i = this.$results.scrollTop() + (r - n),
                    s = r - n;
                  (i -= 2 * e.outerHeight(!1)),
                    t <= 2
                      ? this.$results.scrollTop(0)
                      : (s > this.$results.outerHeight() || s < 0) &&
                        this.$results.scrollTop(i);
                }
              }),
              (n.prototype.template = function (t, n) {
                var r = this.options.get("templateResult"),
                  i = this.options.get("escapeMarkup"),
                  s = r(t, n);
                null == s
                  ? (n.style.display = "none")
                  : "string" == typeof s
                  ? (n.innerHTML = i(s))
                  : e(n).append(s);
              }),
              n
            );
          }),
          t.define("select2/keys", [], function () {
            return {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              SHIFT: 16,
              CTRL: 17,
              ALT: 18,
              ESC: 27,
              SPACE: 32,
              PAGE_UP: 33,
              PAGE_DOWN: 34,
              END: 35,
              HOME: 36,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              DELETE: 46,
            };
          }),
          t.define(
            "select2/selection/base",
            ["jquery", "../utils", "../keys"],
            function (e, t, n) {
              function r(e, t) {
                (this.$element = e),
                  (this.options = t),
                  r.__super__.constructor.call(this);
              }
              return (
                t.Extend(r, t.Observable),
                (r.prototype.render = function () {
                  var t = e(
                    '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                  );
                  return (
                    (this._tabindex = 0),
                    null != this.$element.data("old-tabindex")
                      ? (this._tabindex = this.$element.data("old-tabindex"))
                      : null != this.$element.attr("tabindex") &&
                        (this._tabindex = this.$element.attr("tabindex")),
                    t.attr("title", this.$element.attr("title")),
                    t.attr("tabindex", this._tabindex),
                    (this.$selection = t),
                    t
                  );
                }),
                (r.prototype.bind = function (e, t) {
                  var r = this,
                    i = (e.id, e.id + "-results");
                  (this.container = e),
                    this.$selection.on("focus", function (e) {
                      r.trigger("focus", e);
                    }),
                    this.$selection.on("blur", function (e) {
                      r._handleBlur(e);
                    }),
                    this.$selection.on("keydown", function (e) {
                      r.trigger("keypress", e),
                        e.which === n.SPACE && e.preventDefault();
                    }),
                    e.on("results:focus", function (e) {
                      r.$selection.attr(
                        "aria-activedescendant",
                        e.data._resultId
                      );
                    }),
                    e.on("selection:update", function (e) {
                      r.update(e.data);
                    }),
                    e.on("open", function () {
                      r.$selection.attr("aria-expanded", "true"),
                        r.$selection.attr("aria-owns", i),
                        r._attachCloseHandler(e);
                    }),
                    e.on("close", function () {
                      r.$selection.attr("aria-expanded", "false"),
                        r.$selection.removeAttr("aria-activedescendant"),
                        r.$selection.removeAttr("aria-owns"),
                        r.$selection.focus(),
                        r._detachCloseHandler(e);
                    }),
                    e.on("enable", function () {
                      r.$selection.attr("tabindex", r._tabindex);
                    }),
                    e.on("disable", function () {
                      r.$selection.attr("tabindex", "-1");
                    });
                }),
                (r.prototype._handleBlur = function (t) {
                  var n = this;
                  window.setTimeout(function () {
                    document.activeElement == n.$selection[0] ||
                      e.contains(n.$selection[0], document.activeElement) ||
                      n.trigger("blur", t);
                  }, 1);
                }),
                (r.prototype._attachCloseHandler = function (t) {
                  e(document.body).on(
                    "mousedown.select2." + t.id,
                    function (t) {
                      var n = e(t.target).closest(".select2");
                      e(".select2.select2-container--open").each(function () {
                        var t = e(this);
                        this != n[0] && t.data("element").select2("close");
                      });
                    }
                  );
                }),
                (r.prototype._detachCloseHandler = function (t) {
                  e(document.body).off("mousedown.select2." + t.id);
                }),
                (r.prototype.position = function (e, t) {
                  t.find(".selection").append(e);
                }),
                (r.prototype.destroy = function () {
                  this._detachCloseHandler(this.container);
                }),
                (r.prototype.update = function (e) {
                  throw new Error(
                    "The `update` method must be defined in child classes."
                  );
                }),
                r
              );
            }
          ),
          t.define(
            "select2/selection/single",
            ["jquery", "./base", "../utils", "../keys"],
            function (e, t, n, r) {
              function i() {
                i.__super__.constructor.apply(this, arguments);
              }
              return (
                n.Extend(i, t),
                (i.prototype.render = function () {
                  var e = i.__super__.render.call(this);
                  return (
                    e.addClass("select2-selection--single"),
                    e.html(
                      '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                    ),
                    e
                  );
                }),
                (i.prototype.bind = function (e, t) {
                  var n = this;
                  i.__super__.bind.apply(this, arguments);
                  var r = e.id + "-container";
                  this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id", r),
                    this.$selection.attr("aria-labelledby", r),
                    this.$selection.on("mousedown", function (e) {
                      1 === e.which &&
                        n.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on("focus", function (e) {}),
                    this.$selection.on("blur", function (e) {}),
                    e.on("focus", function (t) {
                      e.isOpen() || n.$selection.focus();
                    }),
                    e.on("selection:update", function (e) {
                      n.update(e.data);
                    });
                }),
                (i.prototype.clear = function () {
                  this.$selection.find(".select2-selection__rendered").empty();
                }),
                (i.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (i.prototype.selectionContainer = function () {
                  return e("<span></span>");
                }),
                (i.prototype.update = function (e) {
                  if (0 !== e.length) {
                    var t = e[0],
                      n = this.$selection.find(".select2-selection__rendered"),
                      r = this.display(t, n);
                    n.empty().append(r), n.prop("title", t.title || t.text);
                  } else this.clear();
                }),
                i
              );
            }
          ),
          t.define(
            "select2/selection/multiple",
            ["jquery", "./base", "../utils"],
            function (e, t, n) {
              function r(e, t) {
                r.__super__.constructor.apply(this, arguments);
              }
              return (
                n.Extend(r, t),
                (r.prototype.render = function () {
                  var e = r.__super__.render.call(this);
                  return (
                    e.addClass("select2-selection--multiple"),
                    e.html('<ul class="select2-selection__rendered"></ul>'),
                    e
                  );
                }),
                (r.prototype.bind = function (t, n) {
                  var i = this;
                  r.__super__.bind.apply(this, arguments),
                    this.$selection.on("click", function (e) {
                      i.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on(
                      "click",
                      ".select2-selection__choice__remove",
                      function (t) {
                        if (!i.options.get("disabled")) {
                          var n = e(this).parent().data("data");
                          i.trigger("unselect", { originalEvent: t, data: n });
                        }
                      }
                    );
                }),
                (r.prototype.clear = function () {
                  this.$selection.find(".select2-selection__rendered").empty();
                }),
                (r.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (r.prototype.selectionContainer = function () {
                  return e(
                    '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                  );
                }),
                (r.prototype.update = function (e) {
                  if ((this.clear(), 0 !== e.length)) {
                    for (var t = [], r = 0; r < e.length; r++) {
                      var i = e[r],
                        s = this.selectionContainer(),
                        o = this.display(i, s);
                      s.append(o),
                        s.prop("title", i.title || i.text),
                        s.data("data", i),
                        t.push(s);
                    }
                    var a = this.$selection.find(
                      ".select2-selection__rendered"
                    );
                    n.appendMany(a, t);
                  }
                }),
                r
              );
            }
          ),
          t.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n);
            }
            return (
              (t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return (
                  n.html(this.display(t)),
                  n
                    .addClass("select2-selection__placeholder")
                    .removeClass("select2-selection__choice"),
                  n
                );
              }),
              (t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || n) return e.call(this, t);
                this.clear();
                var r = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(r);
              }),
              t
            );
          }),
          t.define(
            "select2/selection/allowClear",
            ["jquery", "../keys"],
            function (e, t) {
              function n() {}
              return (
                (n.prototype.bind = function (e, t, n) {
                  var r = this;
                  e.call(this, t, n),
                    null == this.placeholder &&
                      this.options.get("debug") &&
                      window.console &&
                      console.error &&
                      console.error(
                        "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                      ),
                    this.$selection.on(
                      "mousedown",
                      ".select2-selection__clear",
                      function (e) {
                        r._handleClear(e);
                      }
                    ),
                    t.on("keypress", function (e) {
                      r._handleKeyboardClear(e, t);
                    });
                }),
                (n.prototype._handleClear = function (e, t) {
                  if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                      t.stopPropagation();
                      for (var r = n.data("data"), i = 0; i < r.length; i++) {
                        var s = { data: r[i] };
                        if ((this.trigger("unselect", s), s.prevented)) return;
                      }
                      this.$element.val(this.placeholder.id).trigger("change"),
                        this.trigger("toggle", {});
                    }
                  }
                }),
                (n.prototype._handleKeyboardClear = function (e, n, r) {
                  r.isOpen() ||
                    (n.which != t.DELETE && n.which != t.BACKSPACE) ||
                    this._handleClear(n);
                }),
                (n.prototype.update = function (t, n) {
                  if (
                    (t.call(this, n),
                    !(
                      this.$selection.find(".select2-selection__placeholder")
                        .length > 0 || 0 === n.length
                    ))
                  ) {
                    var r = e(
                      '<span class="select2-selection__clear">&times;</span>'
                    );
                    r.data("data", n),
                      this.$selection
                        .find(".select2-selection__rendered")
                        .prepend(r);
                  }
                }),
                n
              );
            }
          ),
          t.define(
            "select2/selection/search",
            ["jquery", "../utils", "../keys"],
            function (e, t, n) {
              function r(e, t, n) {
                e.call(this, t, n);
              }
              return (
                (r.prototype.render = function (t) {
                  var n = e(
                    '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                  );
                  (this.$searchContainer = n), (this.$search = n.find("input"));
                  var r = t.call(this);
                  return this._transferTabIndex(), r;
                }),
                (r.prototype.bind = function (e, t, r) {
                  var i = this;
                  e.call(this, t, r),
                    t.on("open", function () {
                      i.$search.trigger("focus");
                    }),
                    t.on("close", function () {
                      i.$search.val(""),
                        i.$search.removeAttr("aria-activedescendant"),
                        i.$search.trigger("focus");
                    }),
                    t.on("enable", function () {
                      i.$search.prop("disabled", !1), i._transferTabIndex();
                    }),
                    t.on("disable", function () {
                      i.$search.prop("disabled", !0);
                    }),
                    t.on("focus", function (e) {
                      i.$search.trigger("focus");
                    }),
                    t.on("results:focus", function (e) {
                      i.$search.attr("aria-activedescendant", e.id);
                    }),
                    this.$selection.on(
                      "focusin",
                      ".select2-search--inline",
                      function (e) {
                        i.trigger("focus", e);
                      }
                    ),
                    this.$selection.on(
                      "focusout",
                      ".select2-search--inline",
                      function (e) {
                        i._handleBlur(e);
                      }
                    ),
                    this.$selection.on(
                      "keydown",
                      ".select2-search--inline",
                      function (e) {
                        if (
                          (e.stopPropagation(),
                          i.trigger("keypress", e),
                          (i._keyUpPrevented = e.isDefaultPrevented()),
                          e.which === n.BACKSPACE && "" === i.$search.val())
                        ) {
                          var t = i.$searchContainer.prev(
                            ".select2-selection__choice"
                          );
                          if (t.length > 0) {
                            var r = t.data("data");
                            i.searchRemoveChoice(r), e.preventDefault();
                          }
                        }
                      }
                    );
                  var s = document.documentMode,
                    o = s && s <= 11;
                  this.$selection.on(
                    "input.searchcheck",
                    ".select2-search--inline",
                    function (e) {
                      o
                        ? i.$selection.off("input.search input.searchcheck")
                        : i.$selection.off("keyup.search");
                    }
                  ),
                    this.$selection.on(
                      "keyup.search input.search",
                      ".select2-search--inline",
                      function (e) {
                        if (o && "input" === e.type)
                          i.$selection.off("input.search input.searchcheck");
                        else {
                          var t = e.which;
                          t != n.SHIFT &&
                            t != n.CTRL &&
                            t != n.ALT &&
                            t != n.TAB &&
                            i.handleSearch(e);
                        }
                      }
                    );
                }),
                (r.prototype._transferTabIndex = function (e) {
                  this.$search.attr(
                    "tabindex",
                    this.$selection.attr("tabindex")
                  ),
                    this.$selection.attr("tabindex", "-1");
                }),
                (r.prototype.createPlaceholder = function (e, t) {
                  this.$search.attr("placeholder", t.text);
                }),
                (r.prototype.update = function (e, t) {
                  var n = this.$search[0] == document.activeElement;
                  this.$search.attr("placeholder", ""),
                    e.call(this, t),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .append(this.$searchContainer),
                    this.resizeSearch(),
                    n && this.$search.focus();
                }),
                (r.prototype.handleSearch = function () {
                  if ((this.resizeSearch(), !this._keyUpPrevented)) {
                    var e = this.$search.val();
                    this.trigger("query", { term: e });
                  }
                  this._keyUpPrevented = !1;
                }),
                (r.prototype.searchRemoveChoice = function (e, t) {
                  this.trigger("unselect", { data: t }),
                    this.$search.val(t.text),
                    this.handleSearch();
                }),
                (r.prototype.resizeSearch = function () {
                  this.$search.css("width", "25px");
                  var e = "";
                  "" !== this.$search.attr("placeholder")
                    ? (e = this.$selection
                        .find(".select2-selection__rendered")
                        .innerWidth())
                    : (e = 0.75 * (this.$search.val().length + 1) + "em");
                  this.$search.css("width", e);
                }),
                r
              );
            }
          ),
          t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {}
            return (
              (t.prototype.bind = function (t, n, r) {
                var i = this,
                  s = [
                    "open",
                    "opening",
                    "close",
                    "closing",
                    "select",
                    "selecting",
                    "unselect",
                    "unselecting",
                  ],
                  o = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, r),
                  n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, s)) {
                      n = n || {};
                      var r = e.Event("select2:" + t, { params: n });
                      i.$element.trigger(r),
                        -1 !== e.inArray(t, o) &&
                          (n.prevented = r.isDefaultPrevented());
                    }
                  });
              }),
              t
            );
          }),
          t.define(
            "select2/translation",
            ["jquery", "require"],
            function (e, t) {
              function n(e) {
                this.dict = e || {};
              }
              return (
                (n.prototype.all = function () {
                  return this.dict;
                }),
                (n.prototype.get = function (e) {
                  return this.dict[e];
                }),
                (n.prototype.extend = function (t) {
                  this.dict = e.extend({}, t.all(), this.dict);
                }),
                (n._cache = {}),
                (n.loadPath = function (e) {
                  if (!(e in n._cache)) {
                    var r = t(e);
                    n._cache[e] = r;
                  }
                  return new n(n._cache[e]);
                }),
                n
              );
            }
          ),
          t.define("select2/diacritics", [], function () {
            return {
              "Ⓐ": "A",
              Ａ: "A",
              À: "A",
              Á: "A",
              Â: "A",
              Ầ: "A",
              Ấ: "A",
              Ẫ: "A",
              Ẩ: "A",
              Ã: "A",
              Ā: "A",
              Ă: "A",
              Ằ: "A",
              Ắ: "A",
              Ẵ: "A",
              Ẳ: "A",
              Ȧ: "A",
              Ǡ: "A",
              Ä: "A",
              Ǟ: "A",
              Ả: "A",
              Å: "A",
              Ǻ: "A",
              Ǎ: "A",
              Ȁ: "A",
              Ȃ: "A",
              Ạ: "A",
              Ậ: "A",
              Ặ: "A",
              Ḁ: "A",
              Ą: "A",
              Ⱥ: "A",
              Ɐ: "A",
              Ꜳ: "AA",
              Æ: "AE",
              Ǽ: "AE",
              Ǣ: "AE",
              Ꜵ: "AO",
              Ꜷ: "AU",
              Ꜹ: "AV",
              Ꜻ: "AV",
              Ꜽ: "AY",
              "Ⓑ": "B",
              Ｂ: "B",
              Ḃ: "B",
              Ḅ: "B",
              Ḇ: "B",
              Ƀ: "B",
              Ƃ: "B",
              Ɓ: "B",
              "Ⓒ": "C",
              Ｃ: "C",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              Ç: "C",
              Ḉ: "C",
              Ƈ: "C",
              Ȼ: "C",
              Ꜿ: "C",
              "Ⓓ": "D",
              Ｄ: "D",
              Ḋ: "D",
              Ď: "D",
              Ḍ: "D",
              Ḑ: "D",
              Ḓ: "D",
              Ḏ: "D",
              Đ: "D",
              Ƌ: "D",
              Ɗ: "D",
              Ɖ: "D",
              Ꝺ: "D",
              Ǳ: "DZ",
              Ǆ: "DZ",
              ǲ: "Dz",
              ǅ: "Dz",
              "Ⓔ": "E",
              Ｅ: "E",
              È: "E",
              É: "E",
              Ê: "E",
              Ề: "E",
              Ế: "E",
              Ễ: "E",
              Ể: "E",
              Ẽ: "E",
              Ē: "E",
              Ḕ: "E",
              Ḗ: "E",
              Ĕ: "E",
              Ė: "E",
              Ë: "E",
              Ẻ: "E",
              Ě: "E",
              Ȅ: "E",
              Ȇ: "E",
              Ẹ: "E",
              Ệ: "E",
              Ȩ: "E",
              Ḝ: "E",
              Ę: "E",
              Ḙ: "E",
              Ḛ: "E",
              Ɛ: "E",
              Ǝ: "E",
              "Ⓕ": "F",
              Ｆ: "F",
              Ḟ: "F",
              Ƒ: "F",
              Ꝼ: "F",
              "Ⓖ": "G",
              Ｇ: "G",
              Ǵ: "G",
              Ĝ: "G",
              Ḡ: "G",
              Ğ: "G",
              Ġ: "G",
              Ǧ: "G",
              Ģ: "G",
              Ǥ: "G",
              Ɠ: "G",
              Ꞡ: "G",
              Ᵹ: "G",
              Ꝿ: "G",
              "Ⓗ": "H",
              Ｈ: "H",
              Ĥ: "H",
              Ḣ: "H",
              Ḧ: "H",
              Ȟ: "H",
              Ḥ: "H",
              Ḩ: "H",
              Ḫ: "H",
              Ħ: "H",
              Ⱨ: "H",
              Ⱶ: "H",
              Ɥ: "H",
              "Ⓘ": "I",
              Ｉ: "I",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              İ: "I",
              Ï: "I",
              Ḯ: "I",
              Ỉ: "I",
              Ǐ: "I",
              Ȉ: "I",
              Ȋ: "I",
              Ị: "I",
              Į: "I",
              Ḭ: "I",
              Ɨ: "I",
              "Ⓙ": "J",
              Ｊ: "J",
              Ĵ: "J",
              Ɉ: "J",
              "Ⓚ": "K",
              Ｋ: "K",
              Ḱ: "K",
              Ǩ: "K",
              Ḳ: "K",
              Ķ: "K",
              Ḵ: "K",
              Ƙ: "K",
              Ⱪ: "K",
              Ꝁ: "K",
              Ꝃ: "K",
              Ꝅ: "K",
              Ꞣ: "K",
              "Ⓛ": "L",
              Ｌ: "L",
              Ŀ: "L",
              Ĺ: "L",
              Ľ: "L",
              Ḷ: "L",
              Ḹ: "L",
              Ļ: "L",
              Ḽ: "L",
              Ḻ: "L",
              Ł: "L",
              Ƚ: "L",
              Ɫ: "L",
              Ⱡ: "L",
              Ꝉ: "L",
              Ꝇ: "L",
              Ꞁ: "L",
              Ǉ: "LJ",
              ǈ: "Lj",
              "Ⓜ": "M",
              Ｍ: "M",
              Ḿ: "M",
              Ṁ: "M",
              Ṃ: "M",
              Ɱ: "M",
              Ɯ: "M",
              "Ⓝ": "N",
              Ｎ: "N",
              Ǹ: "N",
              Ń: "N",
              Ñ: "N",
              Ṅ: "N",
              Ň: "N",
              Ṇ: "N",
              Ņ: "N",
              Ṋ: "N",
              Ṉ: "N",
              Ƞ: "N",
              Ɲ: "N",
              Ꞑ: "N",
              Ꞥ: "N",
              Ǌ: "NJ",
              ǋ: "Nj",
              "Ⓞ": "O",
              Ｏ: "O",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Ồ: "O",
              Ố: "O",
              Ỗ: "O",
              Ổ: "O",
              Õ: "O",
              Ṍ: "O",
              Ȭ: "O",
              Ṏ: "O",
              Ō: "O",
              Ṑ: "O",
              Ṓ: "O",
              Ŏ: "O",
              Ȯ: "O",
              Ȱ: "O",
              Ö: "O",
              Ȫ: "O",
              Ỏ: "O",
              Ő: "O",
              Ǒ: "O",
              Ȍ: "O",
              Ȏ: "O",
              Ơ: "O",
              Ờ: "O",
              Ớ: "O",
              Ỡ: "O",
              Ở: "O",
              Ợ: "O",
              Ọ: "O",
              Ộ: "O",
              Ǫ: "O",
              Ǭ: "O",
              Ø: "O",
              Ǿ: "O",
              Ɔ: "O",
              Ɵ: "O",
              Ꝋ: "O",
              Ꝍ: "O",
              Ƣ: "OI",
              Ꝏ: "OO",
              Ȣ: "OU",
              "Ⓟ": "P",
              Ｐ: "P",
              Ṕ: "P",
              Ṗ: "P",
              Ƥ: "P",
              Ᵽ: "P",
              Ꝑ: "P",
              Ꝓ: "P",
              Ꝕ: "P",
              "Ⓠ": "Q",
              Ｑ: "Q",
              Ꝗ: "Q",
              Ꝙ: "Q",
              Ɋ: "Q",
              "Ⓡ": "R",
              Ｒ: "R",
              Ŕ: "R",
              Ṙ: "R",
              Ř: "R",
              Ȑ: "R",
              Ȓ: "R",
              Ṛ: "R",
              Ṝ: "R",
              Ŗ: "R",
              Ṟ: "R",
              Ɍ: "R",
              Ɽ: "R",
              Ꝛ: "R",
              Ꞧ: "R",
              Ꞃ: "R",
              "Ⓢ": "S",
              Ｓ: "S",
              ẞ: "S",
              Ś: "S",
              Ṥ: "S",
              Ŝ: "S",
              Ṡ: "S",
              Š: "S",
              Ṧ: "S",
              Ṣ: "S",
              Ṩ: "S",
              Ș: "S",
              Ş: "S",
              Ȿ: "S",
              Ꞩ: "S",
              Ꞅ: "S",
              "Ⓣ": "T",
              Ｔ: "T",
              Ṫ: "T",
              Ť: "T",
              Ṭ: "T",
              Ț: "T",
              Ţ: "T",
              Ṱ: "T",
              Ṯ: "T",
              Ŧ: "T",
              Ƭ: "T",
              Ʈ: "T",
              Ⱦ: "T",
              Ꞇ: "T",
              Ꜩ: "TZ",
              "Ⓤ": "U",
              Ｕ: "U",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ũ: "U",
              Ṹ: "U",
              Ū: "U",
              Ṻ: "U",
              Ŭ: "U",
              Ü: "U",
              Ǜ: "U",
              Ǘ: "U",
              Ǖ: "U",
              Ǚ: "U",
              Ủ: "U",
              Ů: "U",
              Ű: "U",
              Ǔ: "U",
              Ȕ: "U",
              Ȗ: "U",
              Ư: "U",
              Ừ: "U",
              Ứ: "U",
              Ữ: "U",
              Ử: "U",
              Ự: "U",
              Ụ: "U",
              Ṳ: "U",
              Ų: "U",
              Ṷ: "U",
              Ṵ: "U",
              Ʉ: "U",
              "Ⓥ": "V",
              Ｖ: "V",
              Ṽ: "V",
              Ṿ: "V",
              Ʋ: "V",
              Ꝟ: "V",
              Ʌ: "V",
              Ꝡ: "VY",
              "Ⓦ": "W",
              Ｗ: "W",
              Ẁ: "W",
              Ẃ: "W",
              Ŵ: "W",
              Ẇ: "W",
              Ẅ: "W",
              Ẉ: "W",
              Ⱳ: "W",
              "Ⓧ": "X",
              Ｘ: "X",
              Ẋ: "X",
              Ẍ: "X",
              "Ⓨ": "Y",
              Ｙ: "Y",
              Ỳ: "Y",
              Ý: "Y",
              Ŷ: "Y",
              Ỹ: "Y",
              Ȳ: "Y",
              Ẏ: "Y",
              Ÿ: "Y",
              Ỷ: "Y",
              Ỵ: "Y",
              Ƴ: "Y",
              Ɏ: "Y",
              Ỿ: "Y",
              "Ⓩ": "Z",
              Ｚ: "Z",
              Ź: "Z",
              Ẑ: "Z",
              Ż: "Z",
              Ž: "Z",
              Ẓ: "Z",
              Ẕ: "Z",
              Ƶ: "Z",
              Ȥ: "Z",
              Ɀ: "Z",
              Ⱬ: "Z",
              Ꝣ: "Z",
              "ⓐ": "a",
              ａ: "a",
              ẚ: "a",
              à: "a",
              á: "a",
              â: "a",
              ầ: "a",
              ấ: "a",
              ẫ: "a",
              ẩ: "a",
              ã: "a",
              ā: "a",
              ă: "a",
              ằ: "a",
              ắ: "a",
              ẵ: "a",
              ẳ: "a",
              ȧ: "a",
              ǡ: "a",
              ä: "a",
              ǟ: "a",
              ả: "a",
              å: "a",
              ǻ: "a",
              ǎ: "a",
              ȁ: "a",
              ȃ: "a",
              ạ: "a",
              ậ: "a",
              ặ: "a",
              ḁ: "a",
              ą: "a",
              ⱥ: "a",
              ɐ: "a",
              ꜳ: "aa",
              æ: "ae",
              ǽ: "ae",
              ǣ: "ae",
              ꜵ: "ao",
              ꜷ: "au",
              ꜹ: "av",
              ꜻ: "av",
              ꜽ: "ay",
              "ⓑ": "b",
              ｂ: "b",
              ḃ: "b",
              ḅ: "b",
              ḇ: "b",
              ƀ: "b",
              ƃ: "b",
              ɓ: "b",
              "ⓒ": "c",
              ｃ: "c",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              ç: "c",
              ḉ: "c",
              ƈ: "c",
              ȼ: "c",
              ꜿ: "c",
              ↄ: "c",
              "ⓓ": "d",
              ｄ: "d",
              ḋ: "d",
              ď: "d",
              ḍ: "d",
              ḑ: "d",
              ḓ: "d",
              ḏ: "d",
              đ: "d",
              ƌ: "d",
              ɖ: "d",
              ɗ: "d",
              ꝺ: "d",
              ǳ: "dz",
              ǆ: "dz",
              "ⓔ": "e",
              ｅ: "e",
              è: "e",
              é: "e",
              ê: "e",
              ề: "e",
              ế: "e",
              ễ: "e",
              ể: "e",
              ẽ: "e",
              ē: "e",
              ḕ: "e",
              ḗ: "e",
              ĕ: "e",
              ė: "e",
              ë: "e",
              ẻ: "e",
              ě: "e",
              ȅ: "e",
              ȇ: "e",
              ẹ: "e",
              ệ: "e",
              ȩ: "e",
              ḝ: "e",
              ę: "e",
              ḙ: "e",
              ḛ: "e",
              ɇ: "e",
              ɛ: "e",
              ǝ: "e",
              "ⓕ": "f",
              ｆ: "f",
              ḟ: "f",
              ƒ: "f",
              ꝼ: "f",
              "ⓖ": "g",
              ｇ: "g",
              ǵ: "g",
              ĝ: "g",
              ḡ: "g",
              ğ: "g",
              ġ: "g",
              ǧ: "g",
              ģ: "g",
              ǥ: "g",
              ɠ: "g",
              ꞡ: "g",
              ᵹ: "g",
              ꝿ: "g",
              "ⓗ": "h",
              ｈ: "h",
              ĥ: "h",
              ḣ: "h",
              ḧ: "h",
              ȟ: "h",
              ḥ: "h",
              ḩ: "h",
              ḫ: "h",
              ẖ: "h",
              ħ: "h",
              ⱨ: "h",
              ⱶ: "h",
              ɥ: "h",
              ƕ: "hv",
              "ⓘ": "i",
              ｉ: "i",
              ì: "i",
              í: "i",
              î: "i",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              ï: "i",
              ḯ: "i",
              ỉ: "i",
              ǐ: "i",
              ȉ: "i",
              ȋ: "i",
              ị: "i",
              į: "i",
              ḭ: "i",
              ɨ: "i",
              ı: "i",
              "ⓙ": "j",
              ｊ: "j",
              ĵ: "j",
              ǰ: "j",
              ɉ: "j",
              "ⓚ": "k",
              ｋ: "k",
              ḱ: "k",
              ǩ: "k",
              ḳ: "k",
              ķ: "k",
              ḵ: "k",
              ƙ: "k",
              ⱪ: "k",
              ꝁ: "k",
              ꝃ: "k",
              ꝅ: "k",
              ꞣ: "k",
              "ⓛ": "l",
              ｌ: "l",
              ŀ: "l",
              ĺ: "l",
              ľ: "l",
              ḷ: "l",
              ḹ: "l",
              ļ: "l",
              ḽ: "l",
              ḻ: "l",
              ſ: "l",
              ł: "l",
              ƚ: "l",
              ɫ: "l",
              ⱡ: "l",
              ꝉ: "l",
              ꞁ: "l",
              ꝇ: "l",
              ǉ: "lj",
              "ⓜ": "m",
              ｍ: "m",
              ḿ: "m",
              ṁ: "m",
              ṃ: "m",
              ɱ: "m",
              ɯ: "m",
              "ⓝ": "n",
              ｎ: "n",
              ǹ: "n",
              ń: "n",
              ñ: "n",
              ṅ: "n",
              ň: "n",
              ṇ: "n",
              ņ: "n",
              ṋ: "n",
              ṉ: "n",
              ƞ: "n",
              ɲ: "n",
              ŉ: "n",
              ꞑ: "n",
              ꞥ: "n",
              ǌ: "nj",
              "ⓞ": "o",
              ｏ: "o",
              ò: "o",
              ó: "o",
              ô: "o",
              ồ: "o",
              ố: "o",
              ỗ: "o",
              ổ: "o",
              õ: "o",
              ṍ: "o",
              ȭ: "o",
              ṏ: "o",
              ō: "o",
              ṑ: "o",
              ṓ: "o",
              ŏ: "o",
              ȯ: "o",
              ȱ: "o",
              ö: "o",
              ȫ: "o",
              ỏ: "o",
              ő: "o",
              ǒ: "o",
              ȍ: "o",
              ȏ: "o",
              ơ: "o",
              ờ: "o",
              ớ: "o",
              ỡ: "o",
              ở: "o",
              ợ: "o",
              ọ: "o",
              ộ: "o",
              ǫ: "o",
              ǭ: "o",
              ø: "o",
              ǿ: "o",
              ɔ: "o",
              ꝋ: "o",
              ꝍ: "o",
              ɵ: "o",
              ƣ: "oi",
              ȣ: "ou",
              ꝏ: "oo",
              "ⓟ": "p",
              ｐ: "p",
              ṕ: "p",
              ṗ: "p",
              ƥ: "p",
              ᵽ: "p",
              ꝑ: "p",
              ꝓ: "p",
              ꝕ: "p",
              "ⓠ": "q",
              ｑ: "q",
              ɋ: "q",
              ꝗ: "q",
              ꝙ: "q",
              "ⓡ": "r",
              ｒ: "r",
              ŕ: "r",
              ṙ: "r",
              ř: "r",
              ȑ: "r",
              ȓ: "r",
              ṛ: "r",
              ṝ: "r",
              ŗ: "r",
              ṟ: "r",
              ɍ: "r",
              ɽ: "r",
              ꝛ: "r",
              ꞧ: "r",
              ꞃ: "r",
              "ⓢ": "s",
              ｓ: "s",
              ß: "s",
              ś: "s",
              ṥ: "s",
              ŝ: "s",
              ṡ: "s",
              š: "s",
              ṧ: "s",
              ṣ: "s",
              ṩ: "s",
              ș: "s",
              ş: "s",
              ȿ: "s",
              ꞩ: "s",
              ꞅ: "s",
              ẛ: "s",
              "ⓣ": "t",
              ｔ: "t",
              ṫ: "t",
              ẗ: "t",
              ť: "t",
              ṭ: "t",
              ț: "t",
              ţ: "t",
              ṱ: "t",
              ṯ: "t",
              ŧ: "t",
              ƭ: "t",
              ʈ: "t",
              ⱦ: "t",
              ꞇ: "t",
              ꜩ: "tz",
              "ⓤ": "u",
              ｕ: "u",
              ù: "u",
              ú: "u",
              û: "u",
              ũ: "u",
              ṹ: "u",
              ū: "u",
              ṻ: "u",
              ŭ: "u",
              ü: "u",
              ǜ: "u",
              ǘ: "u",
              ǖ: "u",
              ǚ: "u",
              ủ: "u",
              ů: "u",
              ű: "u",
              ǔ: "u",
              ȕ: "u",
              ȗ: "u",
              ư: "u",
              ừ: "u",
              ứ: "u",
              ữ: "u",
              ử: "u",
              ự: "u",
              ụ: "u",
              ṳ: "u",
              ų: "u",
              ṷ: "u",
              ṵ: "u",
              ʉ: "u",
              "ⓥ": "v",
              ｖ: "v",
              ṽ: "v",
              ṿ: "v",
              ʋ: "v",
              ꝟ: "v",
              ʌ: "v",
              ꝡ: "vy",
              "ⓦ": "w",
              ｗ: "w",
              ẁ: "w",
              ẃ: "w",
              ŵ: "w",
              ẇ: "w",
              ẅ: "w",
              ẘ: "w",
              ẉ: "w",
              ⱳ: "w",
              "ⓧ": "x",
              ｘ: "x",
              ẋ: "x",
              ẍ: "x",
              "ⓨ": "y",
              ｙ: "y",
              ỳ: "y",
              ý: "y",
              ŷ: "y",
              ỹ: "y",
              ȳ: "y",
              ẏ: "y",
              ÿ: "y",
              ỷ: "y",
              ẙ: "y",
              ỵ: "y",
              ƴ: "y",
              ɏ: "y",
              ỿ: "y",
              "ⓩ": "z",
              ｚ: "z",
              ź: "z",
              ẑ: "z",
              ż: "z",
              ž: "z",
              ẓ: "z",
              ẕ: "z",
              ƶ: "z",
              ȥ: "z",
              ɀ: "z",
              ⱬ: "z",
              ꝣ: "z",
              Ά: "Α",
              Έ: "Ε",
              Ή: "Η",
              Ί: "Ι",
              Ϊ: "Ι",
              Ό: "Ο",
              Ύ: "Υ",
              Ϋ: "Υ",
              Ώ: "Ω",
              ά: "α",
              έ: "ε",
              ή: "η",
              ί: "ι",
              ϊ: "ι",
              ΐ: "ι",
              ό: "ο",
              ύ: "υ",
              ϋ: "υ",
              ΰ: "υ",
              ω: "ω",
              ς: "σ",
            };
          }),
          t.define("select2/data/base", ["../utils"], function (e) {
            function t(e, n) {
              t.__super__.constructor.call(this);
            }
            return (
              e.Extend(t, e.Observable),
              (t.prototype.current = function (e) {
                throw new Error(
                  "The `current` method must be defined in child classes."
                );
              }),
              (t.prototype.query = function (e, t) {
                throw new Error(
                  "The `query` method must be defined in child classes."
                );
              }),
              (t.prototype.bind = function (e, t) {}),
              (t.prototype.destroy = function () {}),
              (t.prototype.generateResultId = function (t, n) {
                var r = t.id + "-result-";
                return (
                  (r += e.generateChars(4)),
                  null != n.id
                    ? (r += "-" + n.id.toString())
                    : (r += "-" + e.generateChars(4)),
                  r
                );
              }),
              t
            );
          }),
          t.define(
            "select2/data/select",
            ["./base", "../utils", "jquery"],
            function (e, t, n) {
              function r(e, t) {
                (this.$element = e),
                  (this.options = t),
                  r.__super__.constructor.call(this);
              }
              return (
                t.Extend(r, e),
                (r.prototype.current = function (e) {
                  var t = [],
                    r = this;
                  this.$element.find(":selected").each(function () {
                    var e = n(this),
                      i = r.item(e);
                    t.push(i);
                  }),
                    e(t);
                }),
                (r.prototype.select = function (e) {
                  var t = this;
                  if (((e.selected = !0), n(e.element).is("option")))
                    return (
                      (e.element.selected = !0),
                      void this.$element.trigger("change")
                    );
                  if (this.$element.prop("multiple"))
                    this.current(function (r) {
                      var i = [];
                      (e = [e]).push.apply(e, r);
                      for (var s = 0; s < e.length; s++) {
                        var o = e[s].id;
                        -1 === n.inArray(o, i) && i.push(o);
                      }
                      t.$element.val(i), t.$element.trigger("change");
                    });
                  else {
                    var r = e.id;
                    this.$element.val(r), this.$element.trigger("change");
                  }
                }),
                (r.prototype.unselect = function (e) {
                  var t = this;
                  if (this.$element.prop("multiple")) {
                    if (((e.selected = !1), n(e.element).is("option")))
                      return (
                        (e.element.selected = !1),
                        void this.$element.trigger("change")
                      );
                    this.current(function (r) {
                      for (var i = [], s = 0; s < r.length; s++) {
                        var o = r[s].id;
                        o !== e.id && -1 === n.inArray(o, i) && i.push(o);
                      }
                      t.$element.val(i), t.$element.trigger("change");
                    });
                  }
                }),
                (r.prototype.bind = function (e, t) {
                  var n = this;
                  (this.container = e),
                    e.on("select", function (e) {
                      n.select(e.data);
                    }),
                    e.on("unselect", function (e) {
                      n.unselect(e.data);
                    });
                }),
                (r.prototype.destroy = function () {
                  this.$element.find("*").each(function () {
                    n.removeData(this, "data");
                  });
                }),
                (r.prototype.query = function (e, t) {
                  var r = [],
                    i = this;
                  this.$element.children().each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                      var s = i.item(t),
                        o = i.matches(e, s);
                      null !== o && r.push(o);
                    }
                  }),
                    t({ results: r });
                }),
                (r.prototype.addOptions = function (e) {
                  t.appendMany(this.$element, e);
                }),
                (r.prototype.option = function (e) {
                  var t;
                  e.children
                    ? ((t = document.createElement("optgroup")).label = e.text)
                    : void 0 !==
                      (t = document.createElement("option")).textContent
                    ? (t.textContent = e.text)
                    : (t.innerText = e.text),
                    e.id && (t.value = e.id),
                    e.disabled && (t.disabled = !0),
                    e.selected && (t.selected = !0),
                    e.title && (t.title = e.title);
                  var r = n(t),
                    i = this._normalizeItem(e);
                  return (i.element = t), n.data(t, "data", i), r;
                }),
                (r.prototype.item = function (e) {
                  var t = {};
                  if (null != (t = n.data(e[0], "data"))) return t;
                  if (e.is("option"))
                    t = {
                      id: e.val(),
                      text: e.text(),
                      disabled: e.prop("disabled"),
                      selected: e.prop("selected"),
                      title: e.prop("title"),
                    };
                  else if (e.is("optgroup")) {
                    t = {
                      text: e.prop("label"),
                      children: [],
                      title: e.prop("title"),
                    };
                    for (
                      var r = e.children("option"), i = [], s = 0;
                      s < r.length;
                      s++
                    ) {
                      var o = n(r[s]),
                        a = this.item(o);
                      i.push(a);
                    }
                    t.children = i;
                  }
                  return (
                    ((t = this._normalizeItem(t)).element = e[0]),
                    n.data(e[0], "data", t),
                    t
                  );
                }),
                (r.prototype._normalizeItem = function (e) {
                  n.isPlainObject(e) || (e = { id: e, text: e });
                  return (
                    null != (e = n.extend({}, { text: "" }, e)).id &&
                      (e.id = e.id.toString()),
                    null != e.text && (e.text = e.text.toString()),
                    null == e._resultId &&
                      e.id &&
                      null != this.container &&
                      (e._resultId = this.generateResultId(this.container, e)),
                    n.extend({}, { selected: !1, disabled: !1 }, e)
                  );
                }),
                (r.prototype.matches = function (e, t) {
                  return this.options.get("matcher")(e, t);
                }),
                r
              );
            }
          ),
          t.define(
            "select2/data/array",
            ["./select", "../utils", "jquery"],
            function (e, t, n) {
              function r(e, t) {
                var n = t.get("data") || [];
                r.__super__.constructor.call(this, e, t),
                  this.addOptions(this.convertToOptions(n));
              }
              return (
                t.Extend(r, e),
                (r.prototype.select = function (e) {
                  var t = this.$element.find("option").filter(function (t, n) {
                    return n.value == e.id.toString();
                  });
                  0 === t.length && ((t = this.option(e)), this.addOptions(t)),
                    r.__super__.select.call(this, e);
                }),
                (r.prototype.convertToOptions = function (e) {
                  var r = this,
                    i = this.$element.find("option"),
                    s = i
                      .map(function () {
                        return r.item(n(this)).id;
                      })
                      .get(),
                    o = [];
                  function a(e) {
                    return function () {
                      return n(this).val() == e.id;
                    };
                  }
                  for (var l = 0; l < e.length; l++) {
                    var c = this._normalizeItem(e[l]);
                    if (n.inArray(c.id, s) >= 0) {
                      var u = i.filter(a(c)),
                        d = this.item(u),
                        p = n.extend(!0, {}, c, d),
                        h = this.option(p);
                      u.replaceWith(h);
                    } else {
                      var f = this.option(c);
                      if (c.children) {
                        var g = this.convertToOptions(c.children);
                        t.appendMany(f, g);
                      }
                      o.push(f);
                    }
                  }
                  return o;
                }),
                r
              );
            }
          ),
          t.define(
            "select2/data/ajax",
            ["./array", "../utils", "jquery"],
            function (e, t, n) {
              function r(e, t) {
                (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                  null != this.ajaxOptions.processResults &&
                    (this.processResults = this.ajaxOptions.processResults),
                  r.__super__.constructor.call(this, e, t);
              }
              return (
                t.Extend(r, e),
                (r.prototype._applyDefaults = function (e) {
                  var t = {
                    data: function (e) {
                      return n.extend({}, e, { q: e.term });
                    },
                    transport: function (e, t, r) {
                      var i = n.ajax(e);
                      return i.then(t), i.fail(r), i;
                    },
                  };
                  return n.extend({}, t, e, !0);
                }),
                (r.prototype.processResults = function (e) {
                  return e;
                }),
                (r.prototype.query = function (e, t) {
                  var r = this;
                  null != this._request &&
                    (n.isFunction(this._request.abort) && this._request.abort(),
                    (this._request = null));
                  var i = n.extend({ type: "GET" }, this.ajaxOptions);
                  function s() {
                    var s = i.transport(
                      i,
                      function (i) {
                        var s = r.processResults(i, e);
                        r.options.get("debug") &&
                          window.console &&
                          console.error &&
                          ((s && s.results && n.isArray(s.results)) ||
                            console.error(
                              "Select2: The AJAX results did not return an array in the `results` key of the response."
                            )),
                          t(s);
                      },
                      function () {
                        (s.status && "0" === s.status) ||
                          r.trigger("results:message", {
                            message: "errorLoading",
                          });
                      }
                    );
                    r._request = s;
                  }
                  "function" == typeof i.url &&
                    (i.url = i.url.call(this.$element, e)),
                    "function" == typeof i.data &&
                      (i.data = i.data.call(this.$element, e)),
                    this.ajaxOptions.delay && null != e.term
                      ? (this._queryTimeout &&
                          window.clearTimeout(this._queryTimeout),
                        (this._queryTimeout = window.setTimeout(
                          s,
                          this.ajaxOptions.delay
                        )))
                      : s();
                }),
                r
              );
            }
          ),
          t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, r) {
              var i = r.get("tags"),
                s = r.get("createTag");
              void 0 !== s && (this.createTag = s);
              var o = r.get("insertTag");
              if (
                (void 0 !== o && (this.insertTag = o),
                t.call(this, n, r),
                e.isArray(i))
              )
                for (var a = 0; a < i.length; a++) {
                  var l = i[a],
                    c = this._normalizeItem(l),
                    u = this.option(c);
                  this.$element.append(u);
                }
            }
            return (
              (t.prototype.query = function (e, t, n) {
                var r = this;
                this._removeOldTags(),
                  null != t.term && null == t.page
                    ? e.call(this, t, function e(i, s) {
                        for (var o = i.results, a = 0; a < o.length; a++) {
                          var l = o[a],
                            c =
                              null != l.children &&
                              !e({ results: l.children }, !0);
                          if (l.text === t.term || c)
                            return !s && ((i.data = o), void n(i));
                        }
                        if (s) return !0;
                        var u = r.createTag(t);
                        if (null != u) {
                          var d = r.option(u);
                          d.attr("data-select2-tag", !0),
                            r.addOptions([d]),
                            r.insertTag(o, u);
                        }
                        (i.results = o), n(i);
                      })
                    : e.call(this, t, n);
              }),
              (t.prototype.createTag = function (t, n) {
                var r = e.trim(n.term);
                return "" === r ? null : { id: r, text: r };
              }),
              (t.prototype.insertTag = function (e, t, n) {
                t.unshift(n);
              }),
              (t.prototype._removeOldTags = function (t) {
                this._lastTag;
                this.$element
                  .find("option[data-select2-tag]")
                  .each(function () {
                    this.selected || e(this).remove();
                  });
              }),
              t
            );
          }),
          t.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, n) {
              var r = n.get("tokenizer");
              void 0 !== r && (this.tokenizer = r), e.call(this, t, n);
            }
            return (
              (t.prototype.bind = function (e, t, n) {
                e.call(this, t, n),
                  (this.$search =
                    t.dropdown.$search ||
                    t.selection.$search ||
                    n.find(".select2-search__field"));
              }),
              (t.prototype.query = function (t, n, r) {
                var i = this;
                n.term = n.term || "";
                var s = this.tokenizer(n, this.options, function (t) {
                  var n = i._normalizeItem(t);
                  if (
                    !i.$element.find("option").filter(function () {
                      return e(this).val() === n.id;
                    }).length
                  ) {
                    var r = i.option(n);
                    r.attr("data-select2-tag", !0),
                      i._removeOldTags(),
                      i.addOptions([r]);
                  }
                  !(function (e) {
                    i.trigger("select", { data: e });
                  })(n);
                });
                s.term !== n.term &&
                  (this.$search.length &&
                    (this.$search.val(s.term), this.$search.focus()),
                  (n.term = s.term)),
                  t.call(this, n, r);
              }),
              (t.prototype.tokenizer = function (t, n, r, i) {
                for (
                  var s = r.get("tokenSeparators") || [],
                    o = n.term,
                    a = 0,
                    l =
                      this.createTag ||
                      function (e) {
                        return { id: e.term, text: e.term };
                      };
                  a < o.length;

                ) {
                  var c = o[a];
                  if (-1 !== e.inArray(c, s)) {
                    var u = o.substr(0, a),
                      d = l(e.extend({}, n, { term: u }));
                    null != d
                      ? (i(d), (o = o.substr(a + 1) || ""), (a = 0))
                      : a++;
                  } else a++;
                }
                return { term: o };
              }),
              t
            );
          }),
          t.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
              (this.minimumInputLength = n.get("minimumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  t.term.length < this.minimumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                          minimum: this.minimumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          t.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
              (this.maximumInputLength = n.get("maximumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  this.maximumInputLength > 0 &&
                  t.term.length > this.maximumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                          maximum: this.maximumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          t.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
              (this.maximumSelectionLength = n.get("maximumSelectionLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                var r = this;
                this.current(function (i) {
                  var s = null != i ? i.length : 0;
                  r.maximumSelectionLength > 0 && s >= r.maximumSelectionLength
                    ? r.trigger("results:message", {
                        message: "maximumSelected",
                        args: { maximum: r.maximumSelectionLength },
                      })
                    : e.call(r, t, n);
                });
              }),
              e
            );
          }),
          t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              t.Extend(n, t.Observable),
              (n.prototype.render = function () {
                var t = e(
                  '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                );
                return (
                  t.attr("dir", this.options.get("dir")),
                  (this.$dropdown = t),
                  t
                );
              }),
              (n.prototype.bind = function () {}),
              (n.prototype.position = function (e, t) {}),
              (n.prototype.destroy = function () {
                this.$dropdown.remove();
              }),
              n
            );
          }),
          t.define(
            "select2/dropdown/search",
            ["jquery", "../utils"],
            function (e, t) {
              function n() {}
              return (
                (n.prototype.render = function (t) {
                  var n = t.call(this),
                    r = e(
                      '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'
                    );
                  return (
                    (this.$searchContainer = r),
                    (this.$search = r.find("input")),
                    n.prepend(r),
                    n
                  );
                }),
                (n.prototype.bind = function (t, n, r) {
                  var i = this;
                  t.call(this, n, r),
                    this.$search.on("keydown", function (e) {
                      i.trigger("keypress", e),
                        (i._keyUpPrevented = e.isDefaultPrevented());
                    }),
                    this.$search.on("input", function (t) {
                      e(this).off("keyup");
                    }),
                    this.$search.on("keyup input", function (e) {
                      i.handleSearch(e);
                    }),
                    n.on("open", function () {
                      i.$search.attr("tabindex", 0),
                        i.$search.focus(),
                        window.setTimeout(function () {
                          i.$search.focus();
                        }, 0);
                    }),
                    n.on("close", function () {
                      i.$search.attr("tabindex", -1), i.$search.val("");
                    }),
                    n.on("focus", function () {
                      n.isOpen() && i.$search.focus();
                    }),
                    n.on("results:all", function (e) {
                      (null != e.query.term && "" !== e.query.term) ||
                        (i.showSearch(e)
                          ? i.$searchContainer.removeClass(
                              "select2-search--hide"
                            )
                          : i.$searchContainer.addClass(
                              "select2-search--hide"
                            ));
                    });
                }),
                (n.prototype.handleSearch = function (e) {
                  if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", { term: t });
                  }
                  this._keyUpPrevented = !1;
                }),
                (n.prototype.showSearch = function (e, t) {
                  return !0;
                }),
                n
              );
            }
          ),
          t.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, r) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n, r);
            }
            return (
              (e.prototype.append = function (e, t) {
                (t.results = this.removePlaceholder(t.results)),
                  e.call(this, t);
              }),
              (e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), r = t.length - 1; r >= 0; r--) {
                  var i = t[r];
                  this.placeholder.id === i.id && n.splice(r, 1);
                }
                return n;
              }),
              e
            );
          }),
          t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, r) {
              (this.lastParams = {}),
                e.call(this, t, n, r),
                (this.$loadingMore = this.createLoadingMore()),
                (this.loading = !1);
            }
            return (
              (t.prototype.append = function (e, t) {
                this.$loadingMore.remove(),
                  (this.loading = !1),
                  e.call(this, t),
                  this.showLoadingMore(t) &&
                    this.$results.append(this.$loadingMore);
              }),
              (t.prototype.bind = function (t, n, r) {
                var i = this;
                t.call(this, n, r),
                  n.on("query", function (e) {
                    (i.lastParams = e), (i.loading = !0);
                  }),
                  n.on("query:append", function (e) {
                    (i.lastParams = e), (i.loading = !0);
                  }),
                  this.$results.on("scroll", function () {
                    var t = e.contains(
                      document.documentElement,
                      i.$loadingMore[0]
                    );
                    !i.loading &&
                      t &&
                      i.$results.offset().top +
                        i.$results.outerHeight(!1) +
                        50 >=
                        i.$loadingMore.offset().top +
                          i.$loadingMore.outerHeight(!1) &&
                      i.loadMore();
                  });
              }),
              (t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, { page: 1 }, this.lastParams);
                t.page++, this.trigger("query:append", t);
              }),
              (t.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more;
              }),
              (t.prototype.createLoadingMore = function () {
                var t = e(
                    '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                  ),
                  n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)), t;
              }),
              t
            );
          }),
          t.define(
            "select2/dropdown/attachBody",
            ["jquery", "../utils"],
            function (e, t) {
              function n(t, n, r) {
                (this.$dropdownParent =
                  r.get("dropdownParent") || e(document.body)),
                  t.call(this, n, r);
              }
              return (
                (n.prototype.bind = function (e, t, n) {
                  var r = this,
                    i = !1;
                  e.call(this, t, n),
                    t.on("open", function () {
                      r._showDropdown(),
                        r._attachPositioningHandler(t),
                        i ||
                          ((i = !0),
                          t.on("results:all", function () {
                            r._positionDropdown(), r._resizeDropdown();
                          }),
                          t.on("results:append", function () {
                            r._positionDropdown(), r._resizeDropdown();
                          }));
                    }),
                    t.on("close", function () {
                      r._hideDropdown(), r._detachPositioningHandler(t);
                    }),
                    this.$dropdownContainer.on("mousedown", function (e) {
                      e.stopPropagation();
                    });
                }),
                (n.prototype.destroy = function (e) {
                  e.call(this), this.$dropdownContainer.remove();
                }),
                (n.prototype.position = function (e, t, n) {
                  t.attr("class", n.attr("class")),
                    t.removeClass("select2"),
                    t.addClass("select2-container--open"),
                    t.css({ position: "absolute", top: -999999 }),
                    (this.$container = n);
                }),
                (n.prototype.render = function (t) {
                  var n = e("<span></span>"),
                    r = t.call(this);
                  return n.append(r), (this.$dropdownContainer = n), n;
                }),
                (n.prototype._hideDropdown = function (e) {
                  this.$dropdownContainer.detach();
                }),
                (n.prototype._attachPositioningHandler = function (n, r) {
                  var i = this,
                    s = "scroll.select2." + r.id,
                    o = "resize.select2." + r.id,
                    a = "orientationchange.select2." + r.id,
                    l = this.$container.parents().filter(t.hasScroll);
                  l.each(function () {
                    e(this).data("select2-scroll-position", {
                      x: e(this).scrollLeft(),
                      y: e(this).scrollTop(),
                    });
                  }),
                    l.on(s, function (t) {
                      var n = e(this).data("select2-scroll-position");
                      e(this).scrollTop(n.y);
                    }),
                    e(window).on(s + " " + o + " " + a, function (e) {
                      i._positionDropdown(), i._resizeDropdown();
                    });
                }),
                (n.prototype._detachPositioningHandler = function (n, r) {
                  var i = "scroll.select2." + r.id,
                    s = "resize.select2." + r.id,
                    o = "orientationchange.select2." + r.id;
                  this.$container.parents().filter(t.hasScroll).off(i),
                    e(window).off(i + " " + s + " " + o);
                }),
                (n.prototype._positionDropdown = function () {
                  var t = e(window),
                    n = this.$dropdown.hasClass("select2-dropdown--above"),
                    r = this.$dropdown.hasClass("select2-dropdown--below"),
                    i = null,
                    s = this.$container.offset();
                  s.bottom = s.top + this.$container.outerHeight(!1);
                  var o = { height: this.$container.outerHeight(!1) };
                  (o.top = s.top), (o.bottom = s.top + o.height);
                  var a = this.$dropdown.outerHeight(!1),
                    l = t.scrollTop(),
                    c = t.scrollTop() + t.height(),
                    u = l < s.top - a,
                    d = c > s.bottom + a,
                    p = { left: s.left, top: o.bottom },
                    h = this.$dropdownParent;
                  "static" === h.css("position") && (h = h.offsetParent());
                  var f = h.offset();
                  (p.top -= f.top),
                    (p.left -= f.left),
                    n || r || (i = "below"),
                    d || !u || n
                      ? !u && d && n && (i = "below")
                      : (i = "above"),
                    ("above" == i || (n && "below" !== i)) &&
                      (p.top = o.top - f.top - a),
                    null != i &&
                      (this.$dropdown
                        .removeClass(
                          "select2-dropdown--below select2-dropdown--above"
                        )
                        .addClass("select2-dropdown--" + i),
                      this.$container
                        .removeClass(
                          "select2-container--below select2-container--above"
                        )
                        .addClass("select2-container--" + i)),
                    this.$dropdownContainer.css(p);
                }),
                (n.prototype._resizeDropdown = function () {
                  var e = { width: this.$container.outerWidth(!1) + "px" };
                  this.options.get("dropdownAutoWidth") &&
                    ((e.minWidth = e.width),
                    (e.position = "relative"),
                    (e.width = "auto")),
                    this.$dropdown.css(e);
                }),
                (n.prototype._showDropdown = function (e) {
                  this.$dropdownContainer.appendTo(this.$dropdownParent),
                    this._positionDropdown(),
                    this._resizeDropdown();
                }),
                n
              );
            }
          ),
          t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(t) {
              for (var n = 0, r = 0; r < t.length; r++) {
                var i = t[r];
                i.children ? (n += e(i.children)) : n++;
              }
              return n;
            }
            function t(e, t, n, r) {
              (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
                this.minimumResultsForSearch < 0 &&
                  (this.minimumResultsForSearch = 1 / 0),
                e.call(this, t, n, r);
            }
            return (
              (t.prototype.showSearch = function (t, n) {
                return (
                  !(e(n.data.results) < this.minimumResultsForSearch) &&
                  t.call(this, n)
                );
              }),
              t
            );
          }),
          t.define("select2/dropdown/selectOnClose", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  t.on("close", function (e) {
                    r._handleSelectOnClose(e);
                  });
              }),
              (e.prototype._handleSelectOnClose = function (e, t) {
                if (t && null != t.originalSelect2Event) {
                  var n = t.originalSelect2Event;
                  if ("select" === n._type || "unselect" === n._type) return;
                }
                var r = this.getHighlightedResults();
                if (!(r.length < 1)) {
                  var i = r.data("data");
                  (null != i.element && i.element.selected) ||
                    (null == i.element && i.selected) ||
                    this.trigger("select", { data: i });
                }
              }),
              e
            );
          }),
          t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var r = this;
                e.call(this, t, n),
                  t.on("select", function (e) {
                    r._selectTriggered(e);
                  }),
                  t.on("unselect", function (e) {
                    r._selectTriggered(e);
                  });
              }),
              (e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                (n && n.ctrlKey) ||
                  this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t,
                  });
              }),
              e
            );
          }),
          t.define("select2/i18n/en", [], function () {
            return {
              errorLoading: function () {
                return "The results could not be loaded.";
              },
              inputTooLong: function (e) {
                var t = e.input.length - e.maximum,
                  n = "Please delete " + t + " character";
                return 1 != t && (n += "s"), n;
              },
              inputTooShort: function (e) {
                return (
                  "Please enter " +
                  (e.minimum - e.input.length) +
                  " or more characters"
                );
              },
              loadingMore: function () {
                return "Loading more results…";
              },
              maximumSelected: function (e) {
                var t = "You can only select " + e.maximum + " item";
                return 1 != e.maximum && (t += "s"), t;
              },
              noResults: function () {
                return "No results found";
              },
              searching: function () {
                return "Searching…";
              },
            };
          }),
          t.define(
            "select2/defaults",
            [
              "jquery",
              "require",
              "./results",
              "./selection/single",
              "./selection/multiple",
              "./selection/placeholder",
              "./selection/allowClear",
              "./selection/search",
              "./selection/eventRelay",
              "./utils",
              "./translation",
              "./diacritics",
              "./data/select",
              "./data/array",
              "./data/ajax",
              "./data/tags",
              "./data/tokenizer",
              "./data/minimumInputLength",
              "./data/maximumInputLength",
              "./data/maximumSelectionLength",
              "./dropdown",
              "./dropdown/search",
              "./dropdown/hidePlaceholder",
              "./dropdown/infiniteScroll",
              "./dropdown/attachBody",
              "./dropdown/minimumResultsForSearch",
              "./dropdown/selectOnClose",
              "./dropdown/closeOnSelect",
              "./i18n/en",
            ],
            function (
              e,
              t,
              n,
              r,
              i,
              s,
              o,
              a,
              l,
              c,
              u,
              d,
              p,
              h,
              f,
              g,
              m,
              v,
              A,
              y,
              w,
              b,
              _,
              $,
              x,
              C,
              S,
              E,
              O
            ) {
              function D() {
                this.reset();
              }
              return (
                (D.prototype.apply = function (d) {
                  if (
                    null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter
                  ) {
                    if (
                      (null != d.ajax
                        ? (d.dataAdapter = f)
                        : null != d.data
                        ? (d.dataAdapter = h)
                        : (d.dataAdapter = p),
                      d.minimumInputLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, v)),
                      d.maximumInputLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, A)),
                      d.maximumSelectionLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, y)),
                      d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)),
                      (null == d.tokenSeparators && null == d.tokenizer) ||
                        (d.dataAdapter = c.Decorate(d.dataAdapter, m)),
                      null != d.query)
                    ) {
                      var O = t(d.amdBase + "compat/query");
                      d.dataAdapter = c.Decorate(d.dataAdapter, O);
                    }
                    if (null != d.initSelection) {
                      var D = t(d.amdBase + "compat/initSelection");
                      d.dataAdapter = c.Decorate(d.dataAdapter, D);
                    }
                  }
                  if (
                    (null == d.resultsAdapter &&
                      ((d.resultsAdapter = n),
                      null != d.ajax &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, $)),
                      null != d.placeholder &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, _)),
                      d.selectOnClose &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, S))),
                    null == d.dropdownAdapter)
                  ) {
                    if (d.multiple) d.dropdownAdapter = w;
                    else {
                      var T = c.Decorate(w, b);
                      d.dropdownAdapter = T;
                    }
                    if (
                      (0 !== d.minimumResultsForSearch &&
                        (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, C)),
                      d.closeOnSelect &&
                        (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)),
                      null != d.dropdownCssClass ||
                        null != d.dropdownCss ||
                        null != d.adaptDropdownCssClass)
                    ) {
                      var L = t(d.amdBase + "compat/dropdownCss");
                      d.dropdownAdapter = c.Decorate(d.dropdownAdapter, L);
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, x);
                  }
                  if (null == d.selectionAdapter) {
                    if (
                      (d.multiple
                        ? (d.selectionAdapter = i)
                        : (d.selectionAdapter = r),
                      null != d.placeholder &&
                        (d.selectionAdapter = c.Decorate(
                          d.selectionAdapter,
                          s
                        )),
                      d.allowClear &&
                        (d.selectionAdapter = c.Decorate(
                          d.selectionAdapter,
                          o
                        )),
                      d.multiple &&
                        (d.selectionAdapter = c.Decorate(
                          d.selectionAdapter,
                          a
                        )),
                      null != d.containerCssClass ||
                        null != d.containerCss ||
                        null != d.adaptContainerCssClass)
                    ) {
                      var q = t(d.amdBase + "compat/containerCss");
                      d.selectionAdapter = c.Decorate(d.selectionAdapter, q);
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l);
                  }
                  if ("string" == typeof d.language)
                    if (d.language.indexOf("-") > 0) {
                      var j = d.language.split("-")[0];
                      d.language = [d.language, j];
                    } else d.language = [d.language];
                  if (e.isArray(d.language)) {
                    var k = new u();
                    d.language.push("en");
                    for (var P = d.language, I = 0; I < P.length; I++) {
                      var N = P[I],
                        R = {};
                      try {
                        R = u.loadPath(N);
                      } catch (e) {
                        try {
                          (N = this.defaults.amdLanguageBase + N),
                            (R = u.loadPath(N));
                        } catch (e) {
                          d.debug &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The language file for "' +
                                N +
                                '" could not be automatically loaded. A fallback will be used instead.'
                            );
                          continue;
                        }
                      }
                      k.extend(R);
                    }
                    d.translations = k;
                  } else {
                    var M = u.loadPath(this.defaults.amdLanguageBase + "en"),
                      B = new u(d.language);
                    B.extend(M), (d.translations = B);
                  }
                  return d;
                }),
                (D.prototype.reset = function () {
                  function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                      return d[e] || e;
                    });
                  }
                  this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: O,
                    matcher: function n(r, i) {
                      if ("" === e.trim(r.term)) return i;
                      if (i.children && i.children.length > 0) {
                        for (
                          var s = e.extend(!0, {}, i),
                            o = i.children.length - 1;
                          o >= 0;
                          o--
                        ) {
                          null == n(r, i.children[o]) &&
                            s.children.splice(o, 1);
                        }
                        return s.children.length > 0 ? s : n(r, s);
                      }
                      var a = t(i.text).toUpperCase(),
                        l = t(r.term).toUpperCase();
                      return a.indexOf(l) > -1 ? i : null;
                    },
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (e) {
                      return e;
                    },
                    templateResult: function (e) {
                      return e.text;
                    },
                    templateSelection: function (e) {
                      return e.text;
                    },
                    theme: "default",
                    width: "resolve",
                  };
                }),
                (D.prototype.set = function (t, n) {
                  var r = {};
                  r[e.camelCase(t)] = n;
                  var i = c._convertData(r);
                  e.extend(this.defaults, i);
                }),
                new D()
              );
            }
          ),
          t.define(
            "select2/options",
            ["require", "jquery", "./defaults", "./utils"],
            function (e, t, n, r) {
              function i(t, i) {
                if (
                  ((this.options = t),
                  null != i && this.fromElement(i),
                  (this.options = n.apply(this.options)),
                  i && i.is("input"))
                ) {
                  var s = e(this.get("amdBase") + "compat/inputData");
                  this.options.dataAdapter = r.Decorate(
                    this.options.dataAdapter,
                    s
                  );
                }
              }
              return (
                (i.prototype.fromElement = function (e) {
                  var n = ["select2"];
                  null == this.options.multiple &&
                    (this.options.multiple = e.prop("multiple")),
                    null == this.options.disabled &&
                      (this.options.disabled = e.prop("disabled")),
                    null == this.options.language &&
                      (e.prop("lang")
                        ? (this.options.language = e.prop("lang").toLowerCase())
                        : e.closest("[lang]").prop("lang") &&
                          (this.options.language = e
                            .closest("[lang]")
                            .prop("lang"))),
                    null == this.options.dir &&
                      (e.prop("dir")
                        ? (this.options.dir = e.prop("dir"))
                        : e.closest("[dir]").prop("dir")
                        ? (this.options.dir = e.closest("[dir]").prop("dir"))
                        : (this.options.dir = "ltr")),
                    e.prop("disabled", this.options.disabled),
                    e.prop("multiple", this.options.multiple),
                    e.data("select2Tags") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                        ),
                      e.data("data", e.data("select2Tags")),
                      e.data("tags", !0)),
                    e.data("ajaxUrl") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                        ),
                      e.attr("ajax--url", e.data("ajaxUrl")),
                      e.data("ajax--url", e.data("ajaxUrl")));
                  var i = {};
                  i =
                    t.fn.jquery &&
                    "1." == t.fn.jquery.substr(0, 2) &&
                    e[0].dataset
                      ? t.extend(!0, {}, e[0].dataset, e.data())
                      : e.data();
                  var s = t.extend(!0, {}, i);
                  for (var o in (s = r._convertData(s)))
                    t.inArray(o, n) > -1 ||
                      (t.isPlainObject(this.options[o])
                        ? t.extend(this.options[o], s[o])
                        : (this.options[o] = s[o]));
                  return this;
                }),
                (i.prototype.get = function (e) {
                  return this.options[e];
                }),
                (i.prototype.set = function (e, t) {
                  this.options[e] = t;
                }),
                i
              );
            }
          ),
          t.define(
            "select2/core",
            ["jquery", "./options", "./utils", "./keys"],
            function (e, t, n, r) {
              var i = function (e, n) {
                null != e.data("select2") && e.data("select2").destroy(),
                  (this.$element = e),
                  (this.id = this._generateId(e)),
                  (n = n || {}),
                  (this.options = new t(n, e)),
                  i.__super__.constructor.call(this);
                var r = e.attr("tabindex") || 0;
                e.data("old-tabindex", r), e.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(e, this.options);
                var o = this.render();
                this._placeContainer(o);
                var a = this.options.get("selectionAdapter");
                (this.selection = new a(e, this.options)),
                  (this.$selection = this.selection.render()),
                  this.selection.position(this.$selection, o);
                var l = this.options.get("dropdownAdapter");
                (this.dropdown = new l(e, this.options)),
                  (this.$dropdown = this.dropdown.render()),
                  this.dropdown.position(this.$dropdown, o);
                var c = this.options.get("resultsAdapter");
                (this.results = new c(e, this.options, this.dataAdapter)),
                  (this.$results = this.results.render()),
                  this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(),
                  this._registerDomEvents(),
                  this._registerDataEvents(),
                  this._registerSelectionEvents(),
                  this._registerDropdownEvents(),
                  this._registerResultsEvents(),
                  this._registerEvents(),
                  this.dataAdapter.current(function (e) {
                    u.trigger("selection:update", { data: e });
                  }),
                  e.addClass("select2-hidden-accessible"),
                  e.attr("aria-hidden", "true"),
                  this._syncAttributes(),
                  e.data("select2", this);
              };
              return (
                n.Extend(i, n.Observable),
                (i.prototype._generateId = function (e) {
                  return (
                    "select2-" +
                    (null != e.attr("id")
                      ? e.attr("id")
                      : null != e.attr("name")
                      ? e.attr("name") + "-" + n.generateChars(2)
                      : n.generateChars(4)
                    ).replace(/(:|\.|\[|\]|,)/g, "")
                  );
                }),
                (i.prototype._placeContainer = function (e) {
                  e.insertAfter(this.$element);
                  var t = this._resolveWidth(
                    this.$element,
                    this.options.get("width")
                  );
                  null != t && e.css("width", t);
                }),
                (i.prototype._resolveWidth = function (e, t) {
                  var n =
                    /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                  if ("resolve" == t) {
                    var r = this._resolveWidth(e, "style");
                    return null != r ? r : this._resolveWidth(e, "element");
                  }
                  if ("element" == t) {
                    var i = e.outerWidth(!1);
                    return i <= 0 ? "auto" : i + "px";
                  }
                  if ("style" == t) {
                    var s = e.attr("style");
                    if ("string" != typeof s) return null;
                    for (
                      var o = s.split(";"), a = 0, l = o.length;
                      a < l;
                      a += 1
                    ) {
                      var c = o[a].replace(/\s/g, "").match(n);
                      if (null !== c && c.length >= 1) return c[1];
                    }
                    return null;
                  }
                  return t;
                }),
                (i.prototype._bindAdapters = function () {
                  this.dataAdapter.bind(this, this.$container),
                    this.selection.bind(this, this.$container),
                    this.dropdown.bind(this, this.$container),
                    this.results.bind(this, this.$container);
                }),
                (i.prototype._registerDomEvents = function () {
                  var t = this;
                  this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                      t.trigger("selection:update", { data: e });
                    });
                  }),
                    this.$element.on("focus.select2", function (e) {
                      t.trigger("focus", e);
                    }),
                    (this._syncA = n.bind(this._syncAttributes, this)),
                    (this._syncS = n.bind(this._syncSubtree, this)),
                    this.$element[0].attachEvent &&
                      this.$element[0].attachEvent(
                        "onpropertychange",
                        this._syncA
                      );
                  var r =
                    window.MutationObserver ||
                    window.WebKitMutationObserver ||
                    window.MozMutationObserver;
                  null != r
                    ? ((this._observer = new r(function (n) {
                        e.each(n, t._syncA), e.each(n, t._syncS);
                      })),
                      this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1,
                      }))
                    : this.$element[0].addEventListener &&
                      (this.$element[0].addEventListener(
                        "DOMAttrModified",
                        t._syncA,
                        !1
                      ),
                      this.$element[0].addEventListener(
                        "DOMNodeInserted",
                        t._syncS,
                        !1
                      ),
                      this.$element[0].addEventListener(
                        "DOMNodeRemoved",
                        t._syncS,
                        !1
                      ));
                }),
                (i.prototype._registerDataEvents = function () {
                  var e = this;
                  this.dataAdapter.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (i.prototype._registerSelectionEvents = function () {
                  var t = this,
                    n = ["toggle", "focus"];
                  this.selection.on("toggle", function () {
                    t.toggleDropdown();
                  }),
                    this.selection.on("focus", function (e) {
                      t.focus(e);
                    }),
                    this.selection.on("*", function (r, i) {
                      -1 === e.inArray(r, n) && t.trigger(r, i);
                    });
                }),
                (i.prototype._registerDropdownEvents = function () {
                  var e = this;
                  this.dropdown.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (i.prototype._registerResultsEvents = function () {
                  var e = this;
                  this.results.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (i.prototype._registerEvents = function () {
                  var e = this;
                  this.on("open", function () {
                    e.$container.addClass("select2-container--open");
                  }),
                    this.on("close", function () {
                      e.$container.removeClass("select2-container--open");
                    }),
                    this.on("enable", function () {
                      e.$container.removeClass("select2-container--disabled");
                    }),
                    this.on("disable", function () {
                      e.$container.addClass("select2-container--disabled");
                    }),
                    this.on("blur", function () {
                      e.$container.removeClass("select2-container--focus");
                    }),
                    this.on("query", function (t) {
                      e.isOpen() || e.trigger("open", {}),
                        this.dataAdapter.query(t, function (n) {
                          e.trigger("results:all", { data: n, query: t });
                        });
                    }),
                    this.on("query:append", function (t) {
                      this.dataAdapter.query(t, function (n) {
                        e.trigger("results:append", { data: n, query: t });
                      });
                    }),
                    this.on("keypress", function (t) {
                      var n = t.which;
                      e.isOpen()
                        ? n === r.ESC || n === r.TAB || (n === r.UP && t.altKey)
                          ? (e.close(), t.preventDefault())
                          : n === r.ENTER
                          ? (e.trigger("results:select", {}),
                            t.preventDefault())
                          : n === r.SPACE && t.ctrlKey
                          ? (e.trigger("results:toggle", {}),
                            t.preventDefault())
                          : n === r.UP
                          ? (e.trigger("results:previous", {}),
                            t.preventDefault())
                          : n === r.DOWN &&
                            (e.trigger("results:next", {}), t.preventDefault())
                        : (n === r.ENTER ||
                            n === r.SPACE ||
                            (n === r.DOWN && t.altKey)) &&
                          (e.open(), t.preventDefault());
                    });
                }),
                (i.prototype._syncAttributes = function () {
                  this.options.set("disabled", this.$element.prop("disabled")),
                    this.options.get("disabled")
                      ? (this.isOpen() && this.close(),
                        this.trigger("disable", {}))
                      : this.trigger("enable", {});
                }),
                (i.prototype._syncSubtree = function (e, t) {
                  var n = !1,
                    r = this;
                  if (
                    !e ||
                    !e.target ||
                    "OPTION" === e.target.nodeName ||
                    "OPTGROUP" === e.target.nodeName
                  ) {
                    if (t)
                      if (t.addedNodes && t.addedNodes.length > 0)
                        for (var i = 0; i < t.addedNodes.length; i++) {
                          t.addedNodes[i].selected && (n = !0);
                        }
                      else
                        t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                    else n = !0;
                    n &&
                      this.dataAdapter.current(function (e) {
                        r.trigger("selection:update", { data: e });
                      });
                  }
                }),
                (i.prototype.trigger = function (e, t) {
                  var n = i.__super__.trigger,
                    r = {
                      open: "opening",
                      close: "closing",
                      select: "selecting",
                      unselect: "unselecting",
                    };
                  if ((void 0 === t && (t = {}), e in r)) {
                    var s = r[e],
                      o = { prevented: !1, name: e, args: t };
                    if ((n.call(this, s, o), o.prevented))
                      return void (t.prevented = !0);
                  }
                  n.call(this, e, t);
                }),
                (i.prototype.toggleDropdown = function () {
                  this.options.get("disabled") ||
                    (this.isOpen() ? this.close() : this.open());
                }),
                (i.prototype.open = function () {
                  this.isOpen() || this.trigger("query", {});
                }),
                (i.prototype.close = function () {
                  this.isOpen() && this.trigger("close", {});
                }),
                (i.prototype.isOpen = function () {
                  return this.$container.hasClass("select2-container--open");
                }),
                (i.prototype.hasFocus = function () {
                  return this.$container.hasClass("select2-container--focus");
                }),
                (i.prototype.focus = function (e) {
                  this.hasFocus() ||
                    (this.$container.addClass("select2-container--focus"),
                    this.trigger("focus", {}));
                }),
                (i.prototype.enable = function (e) {
                  this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                    ),
                    (null != e && 0 !== e.length) || (e = [!0]);
                  var t = !e[0];
                  this.$element.prop("disabled", t);
                }),
                (i.prototype.data = function () {
                  this.options.get("debug") &&
                    arguments.length > 0 &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                    );
                  var e = [];
                  return (
                    this.dataAdapter.current(function (t) {
                      e = t;
                    }),
                    e
                  );
                }),
                (i.prototype.val = function (t) {
                  if (
                    (this.options.get("debug") &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                      ),
                    null == t || 0 === t.length)
                  )
                    return this.$element.val();
                  var n = t[0];
                  e.isArray(n) &&
                    (n = e.map(n, function (e) {
                      return e.toString();
                    })),
                    this.$element.val(n).trigger("change");
                }),
                (i.prototype.destroy = function () {
                  this.$container.remove(),
                    this.$element[0].detachEvent &&
                      this.$element[0].detachEvent(
                        "onpropertychange",
                        this._syncA
                      ),
                    null != this._observer
                      ? (this._observer.disconnect(), (this._observer = null))
                      : this.$element[0].removeEventListener &&
                        (this.$element[0].removeEventListener(
                          "DOMAttrModified",
                          this._syncA,
                          !1
                        ),
                        this.$element[0].removeEventListener(
                          "DOMNodeInserted",
                          this._syncS,
                          !1
                        ),
                        this.$element[0].removeEventListener(
                          "DOMNodeRemoved",
                          this._syncS,
                          !1
                        )),
                    (this._syncA = null),
                    (this._syncS = null),
                    this.$element.off(".select2"),
                    this.$element.attr(
                      "tabindex",
                      this.$element.data("old-tabindex")
                    ),
                    this.$element.removeClass("select2-hidden-accessible"),
                    this.$element.attr("aria-hidden", "false"),
                    this.$element.removeData("select2"),
                    this.dataAdapter.destroy(),
                    this.selection.destroy(),
                    this.dropdown.destroy(),
                    this.results.destroy(),
                    (this.dataAdapter = null),
                    (this.selection = null),
                    (this.dropdown = null),
                    (this.results = null);
                }),
                (i.prototype.render = function () {
                  var t = e(
                    '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                  );
                  return (
                    t.attr("dir", this.options.get("dir")),
                    (this.$container = t),
                    this.$container.addClass(
                      "select2-container--" + this.options.get("theme")
                    ),
                    t.data("element", this.$element),
                    t
                  );
                }),
                i
              );
            }
          ),
          t.define("jquery-mousewheel", ["jquery"], function (e) {
            return e;
          }),
          t.define(
            "jquery.select2",
            [
              "jquery",
              "jquery-mousewheel",
              "./select2/core",
              "./select2/defaults",
            ],
            function (e, t, n, r) {
              if (null == e.fn.select2) {
                var i = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                  if ("object" == typeof (t = t || {}))
                    return (
                      this.each(function () {
                        var r = e.extend(!0, {}, t);
                        new n(e(this), r);
                      }),
                      this
                    );
                  if ("string" == typeof t) {
                    var r,
                      s = Array.prototype.slice.call(arguments, 1);
                    return (
                      this.each(function () {
                        var n = e(this).data("select2");
                        null == n &&
                          window.console &&
                          console.error &&
                          console.error(
                            "The select2('" +
                              t +
                              "') method was called on an element that is not using Select2."
                          ),
                          (r = n[t].apply(n, s));
                      }),
                      e.inArray(t, i) > -1 ? this : r
                    );
                  }
                  throw new Error("Invalid arguments for Select2: " + t);
                };
              }
              return (
                null == e.fn.select2.defaults && (e.fn.select2.defaults = r), n
              );
            }
          ),
          { define: t.define, require: t.require }
        );
      })(),
      n = t.require("jquery.select2");
    return (e.fn.select2.amd = t), n;
  });
