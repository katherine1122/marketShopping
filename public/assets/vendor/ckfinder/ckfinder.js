var CKFinder = function () {
    function Ra(q, x, n) {
        var r = x.getElementsByTagName("head")[0];
        x = x.createElement("script");
        x[x.innerText ? "innerText" : "innerHTML"] = n + ".CKFinder._setup( window, document );CKFinder.start(" + JSON.stringify(q) + ");";
        r.appendChild(x)
    }

    function Z(q, x) {
        return q ? q : x
    }

    function cb(q) {
        var x = [], n;
        for (n in q)x.push(encodeURIComponent(n) + "=" + encodeURIComponent(q[n]));
        return "?" + x.join("&")
    }

    function db(q, x) {
        for (var n in x)x.hasOwnProperty(n) && (q[n] = x[n]);
        return q
    }

    function Ga(q, x) {
        if (q && !q._omitCheckOnInit &&
            "function" == typeof q.onInit) {
            var n = q.onInit;
            delete q.onInit;
            x.addEventListener("ckfinderReady", function (x) {
                q._initCalled || (q._initCalled = !0, n(x.detail.ckfinder))
            })
        }
    }

    var r = {
        open: function (q) {
            function x(a, c, b) {
                c.forEach(function (c) {
                    a.addEventListener(c, b)
                })
            }

            function n(a, c, b) {
                c.forEach(function (c) {
                    a.removeEventListener(c, b)
                })
            }

            function H(a) {
                return 0 === a.type.indexOf("touch") ? {
                    x: a.touches[0].pageX,
                    y: a.touches[0].pageY
                } : {x: document.all ? window.event.clientX : a.pageX, y: document.all ? window.event.clientX : a.pageY}
            }

            function k(a) {
                a = H(a);
                t = a.x;
                p = a.y;
                a = p - P;
                l.style.left = t - z + "px";
                l.style.top = (0 > a ? 0 : a) + "px"
            }

            function h(a) {
                var b, e;
                a = H(a);
                c ? (b = d - (y - a.x), e = f - (F - a.y), 200 < b && (A.style.width = b + "px"), 200 < e && (A.style.height = e + "px")) : m && (b = d + (y - a.x), e = f - (F - a.y), 200 < b && (A.style.width = b + "px", l.style.left = z - (y - a.x) + "px"), 200 < e && (A.style.height = e + "px"))
            }

            function b() {
                C.parentNode === A && A.removeChild(C);
                m = c = !1;
                n(document, ["mousemove", "touchmove"], h);
                n(document, ["mouseup", "touchend"], b)
            }

            function g(a) {
                a.preventDefault();
                a = H(a);
                y = a.x;
                F = a.y;
                d = A.clientWidth;
                f = A.clientHeight;
                A.appendChild(C);
                x(document, ["mousemove", "touchmove"], h);
                x(document, ["mouseup", "touchend"], b)
            }

            if (q = q || {}, !r.div) {
                r.heightAdded = 48;
                r.widthAdded = 2;
                var d, f, e = Math.min(Z(q.width, 1E3), window.innerWidth - r.widthAdded), a = Math.min(Z(q.height, 700), window.innerHeight - r.heightAdded), c = !1, m = !1, t = 0, p = 0, w = q.width, v = q.height;
                q.width = q.height = "100%";
                var l = r.div = document.createElement("div");
                l.id = "ckf-modal";
                l.style.position = "fixed";
                l.style.top = (document.documentElement.clientHeight -
                    r.heightAdded) / 2 - a / 2 + "px";
                l.style.left = (document.documentElement.clientWidth - r.widthAdded) / 2 - e / 2 + "px";
                l.style.background = "#fff";
                l.style.border = "1px solid #aaa";
                l.style.boxShadow = "3px 3px 5px rgba(0,0,0,0.2)";
                l.style.borderTopLeftRadius = l.style.borderTopRightRadius = "5px";
                l.style.zIndex = 8999;
                l.innerHTML = '<div id="ckf-modal-header" style="cursor: move; border-top-left-radius:5px; border-top-right-radius:5px; background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIwJSIgeTI9IjEwMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2Y3ZjdmNyIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNhZGFkYWQiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);border-bottom:1px solid #c9c9c9;height:35px !important;"><a style="float: right; padding: 7px 10px 0 !important; margin: 0 !important; font-family: Arial, sans-serif !important; font-weight:bold; font-size: 20px !important; line-height: 20px !important; text-decoration: none !important; color: #888 !important;" id="ckf-modal-close" href="#">\u00d7</a></div><div id="ckf-modal-body" style="position: relative;width: ' +
                    e + "px; height: " + a + 'px"></div><div id="ckf-modal-footer" style="height: 10px !important; background: #f3f3f3"><span id="ckf-modal-resize-handle-sw" style="cursor: sw-resize; width: 7px; height: 7px; display: block; float: left; border-left: 3px solid #ddd; border-bottom: 3px solid #ddd;"></span><span id="ckf-modal-resize-handle-se" style="cursor: se-resize; width: 7px; height: 7px; display: block; float: right; border-right: 3px solid #ddd; border-bottom: 3px solid #ddd;"></span></div>';
                document.body.appendChild(l);
                CKFinder.widget("ckf-modal-body", q);
                r.footer = document.getElementById("ckf-modal-footer");
                window.addEventListener("orientationchange", function () {
                    r.maximized || setTimeout(function () {
                        e = Math.min(w ? w : 1E3, document.documentElement.clientWidth - r.widthAdded);
                        a = Math.min(v ? v : 700, document.documentElement.clientHeight - r.heightAdded);
                        var c = document.getElementById("ckf-modal-body");
                        c.style.width = e + "px";
                        c.style.height = a + "px";
                        l.style.top = (document.documentElement.clientHeight - r.heightAdded) / 2 - a / 2 + "px";
                        l.style.left =
                            (document.documentElement.clientWidth - r.widthAdded) / 2 - e / 2 + "px"
                    }, 100)
                });
                q = document.getElementById("ckf-modal-close");
                x(q, ["click", "touchend"], function (a) {
                    a.stopPropagation();
                    a.preventDefault();
                    r.close()
                });
                q = r.header = document.getElementById("ckf-modal-header");
                var z = l.offsetLeft, P = l.offsetTop;
                x(q, ["mousedown", "touchstart"], function (a) {
                    a.preventDefault();
                    a = H(a);
                    t = a.x;
                    p = a.y;
                    z = t - l.offsetLeft;
                    P = p - l.offsetTop;
                    A.appendChild(C);
                    x(document, ["mousemove", "touchmove"], k)
                });
                x(q, ["mouseup", "touchend"], function () {
                    C.parentNode ===
                    A && A.removeChild(C);
                    n(document, ["mousemove", "touchmove"], k)
                });
                q = document.getElementById("ckf-modal-resize-handle-se");
                var D = document.getElementById("ckf-modal-resize-handle-sw"), A = r.body = document.getElementById("ckf-modal-body"), C = document.createElement("div");
                C.style.position = "absolute";
                C.style.top = C.style.right = C.style.bottom = C.style.left = 0;
                C.style.zIndex = 1E5;
                x(q, ["mousedown", "touchstart"], function (a) {
                    c = !0;
                    g(a)
                });
                x(D, ["mousedown", "touchstart"], function (a) {
                    z = l.offsetLeft;
                    m = !0;
                    g(a)
                });
                var y, F
            }
        }, close: function () {
            r.div &&
            (document.body.removeChild(r.div), r.div = null, r.maximized && (document.documentElement.style.overflow = r.preDocumentOverflow, document.documentElement.style.width = r.preDocumentWidth, document.documentElement.style.height = r.preDocumentHeight))
        }, maximize: function (q) {
            q ? (r.preDocumentOverflow = document.documentElement.style.overflow, r.preDocumentWidth = document.documentElement.style.width, r.preDocumentHeight = document.documentElement.style.height, document.documentElement.style.overflow = "hidden", document.documentElement.style.width =
                0, document.documentElement.style.height = 0, r.preLeft = r.div.style.left, r.preTop = r.div.style.top, r.preWidth = r.body.style.width, r.preHeight = r.body.style.height, r.preBorder = r.div.style.border, r.div.style.left = r.div.style.top = r.div.style.right = r.div.style.bottom = 0, r.body.style.width = "100%", r.body.style.height = "100%", r.div.style.border = "", r.header.style.display = "none", r.footer.style.display = "none", r.maximized = !0) : (document.documentElement.style.overflow = r.preDocumentOverflow, document.documentElement.style.width =
                r.preDocumentWidth, document.documentElement.style.height = r.preDocumentHeight, r.div.style.right = r.div.style.bottom = "", r.div.style.left = r.preLeft, r.div.style.top = r.preTop, r.div.style.border = r.preBorder, r.body.style.width = r.preWidth, r.body.style.height = r.preHeight, r.header.style.display = "block", r.footer.style.display = "block", r.maximized = !1)
        }
    }, R;
    return {
        basePath: function () {
            if (parent && parent.CKFinder && parent.CKFinder.basePath)return parent.CKFinder.basePath;
            var q, x, n, r = document.getElementsByTagName("script");
            for (q = 0; q < r.length && (x = r[q], n = void 0 !== x.getAttribute.length ? x.src : x.getAttribute("src"), !n || "ckfinder.js" !== n.split("/").slice(-1)[0]); q++);
            return n.split("/").slice(0, -1).join("/") + "/"
        }(), modal: function (q) {
            return "close" === q ? r.close() : "visible" === q ? !!r.div : "maximize" === q ? r.maximize(!0) : "minimize" === q ? r.maximize(!1) : void r.open(q)
        }, config: function (q) {
            CKFinder._config = q
        }, widget: function (q, x) {
            function n(h) {
                return h + (/^[0-9]+$/.test(h) ? "px" : "")
            }

            if (x = x || {}, !q)throw'No "id" option defined in CKFinder.widget() call.';
            var r;
            r = "border:none;" + ("width:" + n(Z(x.width, "100%")) + ";");
            r += "height:" + n(Z(x.height, "400")) + ";";
            var k = document.createElement("iframe");
            k.src = "";
            k.setAttribute("style", r);
            k.setAttribute("seamless", "seamless");
            k.setAttribute("scrolling", "auto");
            k.attachEvent ? k.attachEvent("onload", function () {
                Ra(x, k.contentDocument, "parent")
            }) : k.onload = function () {
                Ra(x, k.contentDocument, "parent")
            };
            r = document.getElementById(q);
            r.innerHTML = "";
            r.appendChild(k);
            Ga(x, k.contentWindow)
        }, popup: function (q) {
            q = q || {};
            window.CKFinder._popupOptions =
                q;
            var x, n, r = -1, k = ("Microsoft Internet Explorer" == navigator.appName && (x = navigator.userAgent, n = /MSIE ([0-9]{1,}[.0-9]{0,})/, null !== n.exec(x) && (r = parseFloat(RegExp.$1))), 9 === r) ? window.CKFinder.basePath + "ckfinder.html" : "about:blank";
            x = "location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes,width=" + Z(q.width, 1E3);
            x += ",height=" + Z(q.height, 700);
            x += ",top=50,left=100";
            "undefined" == typeof R || R.closed || R.close();
            var h;
            try {
                var b = "CKFPopup" + Date.now();
                R = window.open(k, b, x, !0);
                h = R.document
            } catch (g) {
                return
            }
            return R ? (h.open(), h.write('<!DOCTYPE html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no"><title>CKFinder 3 - File Browser</title></head><body><script src="' + window.CKFinder.basePath + 'ckfinder.js">\x3c/script><script>window.isCKFinderPopup=true;window.onload=function() {    CKFinder.start( window.opener.CKFinder._popupOptions );}\x3c/script></body></html>'), h.close(), R.focus(),
                R) : void 0
        }, start: function (q) {
            if (!q) {
                var x = window.opener, n = {};
                q = {};
                var r = window.location.search.substring(1);
                if (r)for (var r = r.split("&"), k = 0; k < r.length; ++k) {
                    var h = r[k].split("=");
                    n[h[0]] = h[1] || null
                }
                if (n.popup && (window.isCKFinderPopup = !0), x && n.configId && x.CKFinder && x.CKFinder._popupOptions)q = decodeURIComponent(n.configId), q = x.CKFinder._popupOptions[q] || {}, q._omitCheckOnInit = !0
            }
            CKFinder._setup(window, document);
            Ga(q, window);
            CKFinder.start(q)
        }, setupCKEditor: function (q, x, n) {
            if (!q) {
                for (var r in CKEDITOR.instances)CKFinder.setupCKEditor(CKEDITOR.instances[r]);
                return void CKEDITOR.on("instanceCreated", function (k) {
                    CKFinder.setupCKEditor(k.editor)
                })
            }
            q.config.filebrowserBrowseUrl = window.CKFinder.basePath + "ckfinder.html";
            n = db({command: "QuickUpload", type: "Files"}, n);
            r = window.CKFinder.basePath + "core/connector/php/connector.php";
            x && (window.CKFinder._popupOptions || (window.CKFinder._popupOptions = {}), x._omitCheckOnInit = !0, window.CKFinder._popupOptions[q.name] = x, q.config.filebrowserBrowseUrl += "?popup=1&configId=" + encodeURIComponent(q.name), x.connectorPath ? r = x.connectorPath :
            x.connectorLanguage && (r = window.CKFinder.basePath + "core/connector/" + x.connectorLanguage + "/connector." + x.connectorLanguage));
            q.config.filebrowserUploadUrl = r + cb(n)
        }, _setup: function (q, r) {
            q.CKFinder = q.CKFinder || {};
            q.CKFinder.basePath = function () {
                if (q.parent && q.parent.CKFinder && q.parent.CKFinder.basePath)return q.parent.CKFinder.basePath;
                for (var k, h, b = r.getElementsByTagName("script"), g = 0; g < b.length && (k = b[g], h = void 0 !== k.getAttribute.length ? k.src : k.getAttribute("src"), !h || "ckfinder.js" !== h.split("/").slice(-1)[0]); g++);
                return h.split("/").slice(0, -1).join("/") + "/"
            }();
            var n;
            !function () {
                if (!n || !n.requirejs) {
                    n ? h = n : n = {};
                    var k, h, b;
                    !function (g) {
                        function d(a) {
                            return "[object Function]" === E.call(a)
                        }

                        function f(a) {
                            return "[object Array]" === E.call(a)
                        }

                        function e(a, c) {
                            if (a) {
                                var b;
                                for (b = 0; b < a.length && (!a[b] || !c(a[b], b, a)); b += 1);
                            }
                        }

                        function a(a, c) {
                            if (a) {
                                var b;
                                for (b = a.length - 1; -1 < b && (!a[b] || !c(a[b], b, a)); --b);
                            }
                        }

                        function c(a, c) {
                            return sa.call(a, c)
                        }

                        function m(a, b) {
                            return c(a, b) && a[b]
                        }

                        function t(a, b) {
                            for (var d in a)if (c(a, d) && b(a[d],
                                    d))break
                        }

                        function p(a, b, m, e) {
                            return b && t(b, function (b, u) {
                                (m || !c(a, u)) && (!e || "object" != typeof b || !b || f(b) || d(b) || b instanceof RegExp ? a[u] = b : (a[u] || (a[u] = {}), p(a[u], b, m, e)))
                            }), a
                        }

                        function w(a, c) {
                            return function () {
                                return c.apply(a, arguments)
                            }
                        }

                        function v(a) {
                            throw a;
                        }

                        function l(a) {
                            if (!a)return a;
                            var c = g;
                            return e(a.split("."), function (a) {
                                c = c[a]
                            }), c
                        }

                        function z(a, c, b, d) {
                            c = Error(c + "\nhttp://requirejs.org/docs/errors.html#" + a);
                            return c.requireType = a, c.requireModules = d, b && (c.originalError = b), c
                        }

                        function n(b) {
                            function h(a,
                                       c, b) {
                                var d, f, e, u, p, t, g, k, v;
                                c = c && c.split("/");
                                var E = M.map, w = E && E["*"];
                                if (a) {
                                    a = a.split("/");
                                    p = a.length - 1;
                                    M.nodeIdCompat && K.test(a[p]) && (a[p] = a[p].replace(K, ""));
                                    "." === a[0].charAt(0) && c && (u = c.slice(0, c.length - 1), a = u.concat(a));
                                    u = a;
                                    for (p = 0; p < u.length; p++)(e = u[p], "." === e) ? (u.splice(p, 1), --p) : ".." !== e || 0 === p || 1 === p && ".." === u[2] || ".." === u[p - 1] || 0 < p && (u.splice(p - 1, 2), p -= 2);
                                    a = a.join("/")
                                }
                                if (b && E && (c || w)) {
                                    b = a.split("/");
                                    e = b.length;
                                    a:for (; 0 < e; --e) {
                                        if (p = b.slice(0, e).join("/"), c)for (u = c.length; 0 < u; --u)if (f = m(E,
                                                c.slice(0, u).join("/")), f && (f = m(f, p))) {
                                            t = f;
                                            g = e;
                                            break a
                                        }
                                        !k && w && m(w, p) && (k = m(w, p), v = e)
                                    }
                                    !t && k && (t = k, g = v);
                                    t && (b.splice(0, g, t), a = b.join("/"))
                                }
                                return d = m(M.pkgs, a), d ? d : a
                            }

                            function k(a) {
                                V && e(r.getElementsByTagName("script"), function (c) {
                                    return c.getAttribute("data-requiremodule") === a && c.getAttribute("data-requirecontext") === y.contextName ? (c.parentNode.removeChild(c), !0) : void 0
                                })
                            }

                            function E(a) {
                                var c = m(M.paths, a);
                                return c && f(c) && 1 < c.length ? (c.shift(), y.require.undef(a), y.makeRequire(null, {skipMap: !0})([a]),
                                    !0) : void 0
                            }

                            function sa(a) {
                                var c, b = a ? a.indexOf("!") : -1;
                                return -1 < b && (c = a.substring(0, b), a = a.substring(b + 1, a.length)), [c, a]
                            }

                            function D(a, c, b, d) {
                                var f, e, u, p, t = null, g = c ? c.name : null, k = a, v = !0, E = "";
                                return a || (v = !1, a = "_@r" + (ma += 1)), p = sa(a), t = p[0], a = p[1], t && (t = h(t, g, d), e = m(Q, t)), a && (t ? E = e && e.normalize ? e.normalize(a, function (a) {
                                    return h(a, g, d)
                                }) : -1 === a.indexOf("!") ? h(a, g, d) : a : (E = h(a, g, d), p = sa(E), t = p[0], E = p[1], b = !0, f = y.nameToUrl(E))), u = !t || e || b ? "" : "_unnormalized" + (Ja += 1), {
                                    prefix: t, name: E, parentMap: c, unnormalized: !!u,
                                    url: f, originalName: k, isDefine: v, id: (t ? t + "!" + E : E) + u
                                }
                            }

                            function O(a) {
                                var c = a.id, b = m(T, c);
                                return b || (b = T[c] = new y.Module(a)), b
                            }

                            function q(a, b, d) {
                                var f = a.id, e = m(T, f);
                                !c(Q, f) || e && !e.defineEmitComplete ? (e = O(a), e.error && "error" === b ? d(e.error) : e.on(b, d)) : "defined" === b && d(Q[f])
                            }

                            function P(a, c) {
                                var b = a.requireModules, d = !1;
                                c ? c(a) : (e(b, function (c) {
                                    (c = m(T, c)) && (c.error = a, c.events.error && (d = !0, c.emit("error", a)))
                                }), d || A.onError(a))
                            }

                            function G() {
                                ra.length && (N.apply(ia, [ia.length, 0].concat(ra)), ra = [])
                            }

                            function ba(a) {
                                delete T[a];
                                delete H[a]
                            }

                            function I(a, c, b) {
                                var d = a.map.id;
                                a.error ? a.emit("error", a.error) : (c[d] = !0, e(a.depMaps, function (d, f) {
                                    var e = d.id, u = m(T, e);
                                    !u || a.depMatched[f] || b[e] || (m(c, e) ? (a.defineDep(f, Q[e]), a.check()) : I(u, c, b))
                                }), b[d] = !0)
                            }

                            function gb() {
                                var a, c, b = 1E3 * M.waitSeconds, d = b && y.startTime + b < (new Date).getTime(), m = [], f = [], u = !1, p = !0;
                                if (!S) {
                                    if (S = !0, t(H, function (a) {
                                            var b = a.map, e = b.id;
                                            if (a.enabled && (b.isDefine || f.push(a), !a.error))if (!a.inited && d)E(e) ? (c = !0, u = !0) : (m.push(e), k(e)); else if (!a.inited && a.fetched && b.isDefine &&
                                                (u = !0, !b.prefix))return p = !1
                                        }), d && m.length)return a = z("timeout", "Load timeout for modules: " + m, null, m), a.contextName = y.contextName, P(a);
                                    p && e(f, function (a) {
                                        I(a, {}, {})
                                    });
                                    d && !c || !u || !V && !wa || Y || (Y = setTimeout(function () {
                                        Y = 0;
                                        gb()
                                    }, 50));
                                    S = !1
                                }
                            }

                            function X(a) {
                                c(Q, a[0]) || O(D(a[0], null, !0)).init(a[1], a[2])
                            }

                            function C(a) {
                                a = a.currentTarget || a.srcElement;
                                var c = y.onScriptLoad;
                                a.detachEvent && !Ca ? a.detachEvent("onreadystatechange", c) : a.removeEventListener("load", c, !1);
                                c = y.onScriptError;
                                a.detachEvent && !Ca || a.removeEventListener("error",
                                    c, !1);
                                return {node: a, id: a && a.getAttribute("data-requiremodule")}
                            }

                            function J() {
                                var a;
                                for (G(); ia.length;) {
                                    if (a = ia.shift(), null === a[0])return P(z("mismatch", "Mismatched anonymous define() module: " + a[a.length - 1]));
                                    X(a)
                                }
                            }

                            var S, B, y, F, Y, M = {
                                waitSeconds: 7,
                                baseUrl: "./",
                                paths: {},
                                bundles: {},
                                pkgs: {},
                                shim: {},
                                config: {}
                            }, T = {}, H = {}, R = {}, ia = [], Q = {}, Z = {}, xa = {}, ma = 1, Ja = 1;
                            return F = {
                                require: function (a) {
                                    return a.require ? a.require : a.require = y.makeRequire(a.map)
                                }, exports: function (a) {
                                    return a.usingExports = !0, a.map.isDefine ?
                                        a.exports ? Q[a.map.id] = a.exports : a.exports = Q[a.map.id] = {} : void 0
                                }, module: function (a) {
                                    return a.module ? a.module : a.module = {
                                        id: a.map.id,
                                        uri: a.map.url,
                                        config: function () {
                                            return m(M.config, a.map.id) || {}
                                        },
                                        exports: a.exports || (a.exports = {})
                                    }
                                }
                            }, B = function (a) {
                                this.events = m(R, a.id) || {};
                                this.map = a;
                                this.shim = m(M.shim, a.id);
                                this.depExports = [];
                                this.depMaps = [];
                                this.depMatched = [];
                                this.pluginMaps = {};
                                this.depCount = 0
                            }, B.prototype = {
                                init: function (a, c, b, d) {
                                    d = d || {};
                                    this.inited || (this.factory = c, b ? this.on("error", b) : this.events.error &&
                                    (b = w(this, function (a) {
                                        this.emit("error", a)
                                    })), this.depMaps = a && a.slice(0), this.errback = b, this.inited = !0, this.ignore = d.ignore, d.enabled || this.enabled ? this.enable() : this.check())
                                }, defineDep: function (a, c) {
                                    this.depMatched[a] || (this.depMatched[a] = !0, --this.depCount, this.depExports[a] = c)
                                }, fetch: function () {
                                    if (!this.fetched) {
                                        this.fetched = !0;
                                        y.startTime = (new Date).getTime();
                                        var a = this.map;
                                        return this.shim ? void y.makeRequire(this.map, {enableBuildCallback: !0})(this.shim.deps || [], w(this, function () {
                                            return a.prefix ?
                                                this.callPlugin() : this.load()
                                        })) : a.prefix ? this.callPlugin() : this.load()
                                    }
                                }, load: function () {
                                    var a = this.map.url;
                                    Z[a] || (Z[a] = !0, y.load(this.map.id, a))
                                }, check: function () {
                                    if (this.enabled && !this.enabling) {
                                        var a, c, b = this.map.id, m = this.depExports, f = this.exports, e = this.factory;
                                        if (this.inited)if (this.error)this.emit("error", this.error); else {
                                            if (!this.defining) {
                                                if (this.defining = !0, 1 > this.depCount && !this.defined) {
                                                    if (d(e)) {
                                                        if (this.events.error && this.map.isDefine || A.onError !== v)try {
                                                            f = y.execCb(b, e, m, f)
                                                        } catch (u) {
                                                            a =
                                                                u
                                                        } else f = y.execCb(b, e, m, f);
                                                        if (this.map.isDefine && void 0 === f && (c = this.module, c ? f = c.exports : this.usingExports && (f = this.exports)), a)return a.requireMap = this.map, a.requireModules = this.map.isDefine ? [this.map.id] : null, a.requireType = this.map.isDefine ? "define" : "require", P(this.error = a)
                                                    } else f = e;
                                                    this.exports = f;
                                                    this.map.isDefine && !this.ignore && (Q[b] = f, A.onResourceLoad && A.onResourceLoad(y, this.map, this.depMaps));
                                                    ba(b);
                                                    this.defined = !0
                                                }
                                                this.defining = !1;
                                                this.defined && !this.defineEmitted && (this.defineEmitted = !0,
                                                    this.emit("defined", this.exports), this.defineEmitComplete = !0)
                                            }
                                        } else this.fetch()
                                    }
                                }, callPlugin: function () {
                                    var a = this.map, b = a.id, d = D(a.prefix);
                                    this.depMaps.push(d);
                                    q(d, "defined", w(this, function (d) {
                                        var f, e, u, p = m(xa, this.map.id), g = this.map.name, k = this.map.parentMap ? this.map.parentMap.name : null, E = y.makeRequire(a.parentMap, {enableBuildCallback: !0});
                                        return this.map.unnormalized ? (d.normalize && (g = d.normalize(g, function (a) {
                                                return h(a, k, !0)
                                            }) || ""), e = D(a.prefix + "!" + g, this.map.parentMap), q(e, "defined", w(this,
                                            function (a) {
                                                this.init([], function () {
                                                    return a
                                                }, null, {enabled: !0, ignore: !0})
                                            })), u = m(T, e.id), void(u && (this.depMaps.push(e), this.events.error && u.on("error", w(this, function (a) {
                                            this.emit("error", a)
                                        })), u.enable()))) : p ? (this.map.url = y.nameToUrl(p), void this.load()) : (f = w(this, function (a) {
                                            this.init([], function () {
                                                return a
                                            }, null, {enabled: !0})
                                        }), f.error = w(this, function (a) {
                                            this.inited = !0;
                                            this.error = a;
                                            a.requireModules = [b];
                                            t(T, function (a) {
                                                0 === a.map.id.indexOf(b + "_unnormalized") && ba(a.map.id)
                                            });
                                            P(a)
                                        }), f.fromText =
                                            w(this, function (d, m) {
                                                var e = a.name, u = D(e), p = ka;
                                                m && (d = m);
                                                p && (ka = !1);
                                                O(u);
                                                c(M.config, b) && (M.config[e] = M.config[b]);
                                                try {
                                                    A.exec(d)
                                                } catch (t) {
                                                    return P(z("fromtexteval", "fromText eval for " + b + " failed: " + t, t, [b]))
                                                }
                                                p && (ka = !0);
                                                this.depMaps.push(u);
                                                y.completeLoad(e);
                                                E([e], f)
                                            }), void d.load(a.name, E, f, M))
                                    }));
                                    y.enable(d, this);
                                    this.pluginMaps[d.id] = d
                                }, enable: function () {
                                    H[this.map.id] = this;
                                    this.enabling = this.enabled = !0;
                                    e(this.depMaps, w(this, function (a, b) {
                                        var d, f;
                                        if ("string" == typeof a) {
                                            if (a = D(a, this.map.isDefine ?
                                                    this.map : this.map.parentMap, !1, !this.skipMap), this.depMaps[b] = a, d = m(F, a.id))return void(this.depExports[b] = d(this));
                                            this.depCount += 1;
                                            q(a, "defined", w(this, function (a) {
                                                this.undefed || (this.defineDep(b, a), this.check())
                                            }));
                                            this.errback ? q(a, "error", w(this, this.errback)) : this.events.error && q(a, "error", w(this, function (a) {
                                                this.emit("error", a)
                                            }))
                                        }
                                        d = a.id;
                                        f = T[d];
                                        c(F, d) || !f || f.enabled || y.enable(a, this)
                                    }));
                                    t(this.pluginMaps, w(this, function (a) {
                                        var c = m(T, a.id);
                                        c && !c.enabled && y.enable(a, this)
                                    }));
                                    this.enabling = !1;
                                    this.check()
                                }, on: function (a, c) {
                                    var b = this.events[a];
                                    b || (b = this.events[a] = []);
                                    b.push(c)
                                }, emit: function (a, c) {
                                    e(this.events[a], function (a) {
                                        a(c)
                                    });
                                    "error" === a && delete this.events[a]
                                }
                            }, y = {
                                config: M,
                                contextName: b,
                                registry: T,
                                defined: Q,
                                urlFetched: Z,
                                defQueue: ia,
                                Module: B,
                                makeModuleMap: D,
                                nextTick: A.nextTick,
                                onError: P,
                                configure: function (a) {
                                    a.baseUrl && "/" !== a.baseUrl.charAt(a.baseUrl.length - 1) && (a.baseUrl += "/");
                                    var c = M.shim, b = {paths: !0, bundles: !0, config: !0, map: !0};
                                    t(a, function (a, c) {
                                        b[c] ? (M[c] || (M[c] = {}), p(M[c],
                                            a, !0, !0)) : M[c] = a
                                    });
                                    a.bundles && t(a.bundles, function (a, c) {
                                        e(a, function (a) {
                                            a !== c && (xa[a] = c)
                                        })
                                    });
                                    a.shim && (t(a.shim, function (a, b) {
                                        f(a) && (a = {deps: a});
                                        !a.exports && !a.init || a.exportsFn || (a.exportsFn = y.makeShimExports(a));
                                        c[b] = a
                                    }), M.shim = c);
                                    a.packages && e(a.packages, function (a) {
                                        var c;
                                        a = "string" == typeof a ? {name: a} : a;
                                        c = a.name;
                                        a.location && (M.paths[c] = a.location);
                                        M.pkgs[c] = a.name + "/" + (a.main || "main").replace(u, "").replace(K, "")
                                    });
                                    t(T, function (a, c) {
                                        a.inited || a.map.unnormalized || (a.map = D(c, null, !0))
                                    });
                                    (a.deps || a.callback) &&
                                    y.require(a.deps || [], a.callback)
                                },
                                makeShimExports: function (a) {
                                    return function () {
                                        var c;
                                        return a.init && (c = a.init.apply(g, arguments)), c || a.exports && l(a.exports)
                                    }
                                },
                                makeRequire: function (f, e) {
                                    function u(a, m, p) {
                                        var t, h, g;
                                        return e.enableBuildCallback && m && d(m) && (m.__requireJsBuild = !0), "string" == typeof a ? d(m) ? P(z("requireargs", "Invalid require call"), p) : f && c(F, a) ? F[a](T[f.id]) : A.get ? A.get(y, a, f, u) : (h = D(a, f, !1, !0), t = h.id, c(Q, t) ? Q[t] : P(z("notloaded", 'Module name "' + t + '" has not been loaded yet for context: ' +
                                            b + (f ? "" : ". Use require([])")))) : (J(), y.nextTick(function () {
                                            J();
                                            g = O(D(null, f));
                                            g.skipMap = e.skipMap;
                                            g.init(a, m, p, {enabled: !0});
                                            gb()
                                        }), u)
                                    }

                                    return e = e || {}, p(u, {
                                        isBrowser: V, toUrl: function (a) {
                                            var c, b = a.lastIndexOf("."), d = a.split("/")[0];
                                            return -1 !== b && (!("." === d || ".." === d) || 1 < b) && (c = a.substring(b, a.length), a = a.substring(0, b)), y.nameToUrl(h(a, f && f.id, !0), c, !0)
                                        }, defined: function (a) {
                                            return c(Q, D(a, f, !1, !0).id)
                                        }, specified: function (a) {
                                            return a = D(a, f, !1, !0).id, c(Q, a) || c(T, a)
                                        }
                                    }), f || (u.undef = function (c) {
                                        G();
                                        var b =
                                            D(c, f, !0), d = m(T, c);
                                        d.undefed = !0;
                                        k(c);
                                        delete Q[c];
                                        delete Z[b.url];
                                        delete R[c];
                                        a(ia, function (a, b) {
                                            a[0] === c && ia.splice(b, 1)
                                        });
                                        d && (d.events.defined && (R[c] = d.events), ba(c))
                                    }), u
                                },
                                enable: function (a) {
                                    m(T, a.id) && O(a).enable()
                                },
                                completeLoad: function (a) {
                                    var b, d, f, e = m(M.shim, a) || {}, u = e.exports;
                                    for (G(); ia.length;) {
                                        if (d = ia.shift(), null === d[0]) {
                                            if (d[0] = a, b)break;
                                            b = !0
                                        } else d[0] === a && (b = !0);
                                        X(d)
                                    }
                                    if (f = m(T, a), !b && !c(Q, a) && f && !f.inited) {
                                        if (!(!M.enforceDefine || u && l(u)))return E(a) ? void 0 : P(z("nodefine", "No define call for " +
                                            a, null, [a]));
                                        X([a, e.deps || [], e.exportsFn])
                                    }
                                    gb()
                                },
                                nameToUrl: function (a, c, b) {
                                    var d, e, u, p;
                                    d = m(M.pkgs, a);
                                    if (d && (a = d), d = m(xa, a))return y.nameToUrl(d, c, b);
                                    if (A.jsExtRegExp.test(a))u = a + (c || ""); else {
                                        d = M.paths;
                                        a = a.split("/");
                                        for (e = a.length; 0 < e; --e)if (u = a.slice(0, e).join("/"), p = m(d, u)) {
                                            f(p) && (p = p[0]);
                                            a.splice(0, e, p);
                                            break
                                        }
                                        u = a.join("/");
                                        u += c || (/^data\:|\?/.test(u) || b ? "" : ".js");
                                        u = ("/" === u.charAt(0) || u.match(/^[\w\+\.\-]+:/) ? "" : M.baseUrl) + u
                                    }
                                    return M.urlArgs ? u + ((-1 === u.indexOf("?") ? "?" : "&") + M.urlArgs) : u
                                },
                                load: function (a,
                                                c) {
                                    A.load(y, a, c)
                                },
                                execCb: function (a, c, b, d) {
                                    return c.apply(d, b)
                                },
                                onScriptLoad: function (a) {
                                    if ("load" === a.type || za.test((a.currentTarget || a.srcElement).readyState))L = null, a = C(a), y.completeLoad(a.id)
                                },
                                onScriptError: function (a) {
                                    var c = C(a);
                                    return E(c.id) ? void 0 : P(z("scripterror", "Script error for: " + c.id, a, [c.id]))
                                }
                            }, y.require = y.makeRequire(), y
                        }

                        function D() {
                            return L && "interactive" === L.readyState ? L : (a(r.getElementsByTagName("script"), function (a) {
                                return "interactive" === a.readyState ? L = a : void 0
                            }), L)
                        }

                        var A, C,
                            y, F, J, I, L, O, G, X, B = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, Y = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g, K = /\.js$/, u = /^\.\//;
                        C = Object.prototype;
                        var E = C.toString, sa = C.hasOwnProperty, N = Array.prototype.splice, V = !("undefined" == typeof q || "undefined" == typeof navigator || !q.document), wa = !V && "undefined" != typeof importScripts, za = V && "PLAYSTATION 3" === navigator.platform ? /^complete$/ : /^(complete|loaded)$/, Ca = "undefined" != typeof opera && "[object Opera]" === opera.toString(), ba = {}, S = {}, ra = [], ka = !1;
                        if ("undefined" == typeof b) {
                            if ("undefined" != typeof k) {
                                if (d(k))return;
                                S = k;
                                k = void 0
                            }
                            "undefined" == typeof h || d(h) || (S = h, h = void 0);
                            A = k = function (a, c, b, d) {
                                var e, u, p = "_";
                                return f(a) || "string" == typeof a || (u = a, f(c) ? (a = c, c = b, b = d) : a = []), u && u.context && (p = u.context), e = m(ba, p), e || (e = ba[p] = A.s.newContext(p)), u && e.configure(u), e.require(a, c, b)
                            };
                            A.config = function (a) {
                                return A(a)
                            };
                            A.nextTick = "undefined" != typeof setTimeout ? function (a) {
                                setTimeout(a, 4)
                            } : function (a) {
                                a()
                            };
                            h || (h = A);
                            A.version = "2.1.18";
                            A.jsExtRegExp = /^\/|:|\?|\.js$/;
                            A.isBrowser =
                                V;
                            C = A.s = {contexts: ba, newContext: n};
                            A({});
                            e(["toUrl", "undef", "defined", "specified"], function (a) {
                                A[a] = function () {
                                    var c = ba._;
                                    return c.require[a].apply(c, arguments)
                                }
                            });
                            V && (y = C.head = r.getElementsByTagName("head")[0], F = r.getElementsByTagName("base")[0], F && (y = C.head = F.parentNode));
                            A.onError = v;
                            A.createNode = function (a) {
                                var c = a.xhtml ? r.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : r.createElement("script");
                                return c.type = a.scriptType || "text/javascript", c.charset = "utf-8", c.async = !0, c
                            };
                            A.load =
                                function (a, c, b) {
                                    var d, f = a && a.config || {};
                                    if (V)return d = A.createNode(f, c, b), d.setAttribute("data-requirecontext", a.contextName), d.setAttribute("data-requiremodule", c), !d.attachEvent || d.attachEvent.toString && 0 > d.attachEvent.toString().indexOf("[native code") || Ca ? (d.addEventListener("load", a.onScriptLoad, !1), d.addEventListener("error", a.onScriptError, !1)) : (ka = !0, d.attachEvent("onreadystatechange", a.onScriptLoad)), d.src = b, O = d, F ? y.insertBefore(d, F) : y.appendChild(d), O = null, d;
                                    if (wa)try {
                                        importScripts(b), a.completeLoad(c)
                                    } catch (m) {
                                        a.onError(z("importscripts",
                                            "importScripts failed for " + c + " at " + b, m, [c]))
                                    }
                                };
                            V && !S.skipDataMain && a(r.getElementsByTagName("script"), function (a) {
                                return y || (y = a.parentNode), J = a.getAttribute("data-main"), J ? (G = J, S.baseUrl || (I = G.split("/"), G = I.pop(), X = I.length ? I.join("/") + "/" : "./", S.baseUrl = X), G = G.replace(K, ""), A.jsExtRegExp.test(G) && (G = J), S.deps = S.deps ? S.deps.concat(G) : [G], !0) : void 0
                            });
                            b = function (a, c, b) {
                                var m, e;
                                "string" != typeof a && (b = c, c = a, a = null);
                                f(c) || (b = c, c = null);
                                !c && d(b) && (c = [], b.length && (b.toString().replace(B, "").replace(Y,
                                    function (a, b) {
                                        c.push(b)
                                    }), c = (1 === b.length ? ["require"] : ["require", "exports", "module"]).concat(c)));
                                ka && (m = O || D(), m && (a || (a = m.getAttribute("data-requiremodule")), e = ba[m.getAttribute("data-requirecontext")]));
                                (e ? e.defQueue : ra).push([a, c, b])
                            };
                            b.amd = {jQuery: !0};
                            A.exec = function (a) {
                                return eval(a)
                            };
                            A(S)
                        }
                    }(this);
                    n.requirejs = k;
                    n.require = h;
                    n.define = b
                }
            }();
            n.define("requireLib", function () {
            });
            (function () {
                function k(a, c, b) {
                    b = (b || 0) - 1;
                    for (var d = a ? a.length : 0; ++b < d;)if (a[b] === c)return b;
                    return -1
                }

                function h(a, c) {
                    var b =
                        typeof c;
                    if (a = a.cache, "boolean" == b || null == c)return a[c] ? 0 : -1;
                    "number" != b && "string" != b && (b = "object");
                    var d = "number" == b ? c : D + c;
                    return a = (a = a[b]) && a[d], "object" == b ? a && -1 < k(a, c) ? 0 : -1 : a ? 0 : -1
                }

                function b(a) {
                    var c = this.cache, b = typeof a;
                    if ("boolean" == b || null == a)c[a] = !0; else {
                        "number" != b && "string" != b && (b = "object");
                        var d = "number" == b ? a : D + a, c = c[b] || (c[b] = {});
                        "object" == b ? (c[d] || (c[d] = [])).push(a) : c[d] = !0
                    }
                }

                function g(a) {
                    return a.charCodeAt(0)
                }

                function d(a, c) {
                    for (var b = a.criteria, d = c.criteria, m = -1, f = b.length; ++m < f;) {
                        var e =
                            b[m], u = d[m];
                        if (e !== u) {
                            if (e > u || "undefined" == typeof e)return 1;
                            if (u > e || "undefined" == typeof u)return -1
                        }
                    }
                    return a.index - c.index
                }

                function f(a) {
                    var d = -1, m = a.length, f = a[0], e = a[m / 2 | 0], u = a[m - 1];
                    if (f && "object" == typeof f && e && "object" == typeof e && u && "object" == typeof u)return !1;
                    f = c();
                    f["false"] = f["null"] = f["true"] = f.undefined = !1;
                    e = c();
                    e.array = a;
                    e.cache = f;
                    for (e.push = b; ++d < m;)e.push(a[d]);
                    return e
                }

                function e(a) {
                    return "\\" + Ta[a]
                }

                function a() {
                    return l.pop() || []
                }

                function c() {
                    return z.pop() || {
                            array: null,
                            cache: null,
                            criteria: null,
                            "false": !1,
                            index: 0,
                            "null": !1,
                            number: null,
                            object: null,
                            push: null,
                            string: null,
                            "true": !1,
                            undefined: !1,
                            value: null
                        }
                }

                function m(a) {
                    a.length = 0;
                    l.length < C && l.push(a)
                }

                function t(a) {
                    var c = a.cache;
                    c && t(c);
                    a.array = a.cache = a.criteria = a.object = a.number = a.string = a.value = null;
                    z.length < C && z.push(a)
                }

                function p(a, c, b) {
                    c || (c = 0);
                    "undefined" == typeof b && (b = a ? a.length : 0);
                    var d = -1;
                    b = b - c || 0;
                    for (var f = Array(0 > b ? 0 : b); ++d < b;)f[d] = a[c + d];
                    return f
                }

                function w(b) {
                    function l(a) {
                        return a && "object" == typeof a && !ca(a) && fa.call(a, "__wrapped__") ?
                            a : new z(a)
                    }

                    function z(a, c) {
                        this.__chain__ = !!c;
                        this.__wrapped__ = a
                    }

                    function q(a) {
                        function c() {
                            if (d) {
                                var a = p(d);
                                La.apply(a, arguments)
                            }
                            if (this instanceof c) {
                                var m = C(b.prototype), a = b.apply(m, a || arguments);
                                return da(a) ? a : m
                            }
                            return b.apply(f, a || arguments)
                        }

                        var b = a[0], d = a[2], f = a[4];
                        return hb(c, a), c
                    }

                    function n(c, b, d, f, e) {
                        if (d) {
                            var u = d(c);
                            if ("undefined" != typeof u)return u
                        }
                        if (!da(c))return c;
                        var l = ga.call(c);
                        if (!x[l])return c;
                        var t = ta[l];
                        switch (l) {
                            case wa:
                            case za:
                                return new t(+c);
                            case ba:
                            case ka:
                                return new t(c);
                            case ra:
                                return u = t(c.source, O.exec(c)), u.lastIndex = c.lastIndex, u
                        }
                        l = ca(c);
                        if (b) {
                            var h = !f;
                            f || (f = a());
                            e || (e = a());
                            for (var g = f.length; g--;)if (f[g] == c)return e[g];
                            u = l ? t(c.length) : {}
                        } else u = l ? p(c) : Ya({}, c);
                        return l && (fa.call(c, "index") && (u.index = c.index), fa.call(c, "input") && (u.input = c.input)), b ? (f.push(c), e.push(u), (l ? ea : U)(c, function (a, c) {
                            u[c] = n(a, b, d, f, e)
                        }), h && (m(f), m(e)), u) : u
                    }

                    function C(a) {
                        return da(a) ? Za(a) : {}
                    }

                    function H(a, c, b) {
                        if ("function" != typeof a)return ib;
                        if ("undefined" == typeof c || !("prototype" in
                            a))return a;
                        var d = a.__bindData__;
                        if ("undefined" == typeof d && (Ma.funcNames && (d = !a.name), d = d || !Ma.funcDecomp, !d)) {
                            var f = Sb.call(a);
                            Ma.funcNames || (d = !G.test(f));
                            d || (d = K.test(f), hb(a, d))
                        }
                        if (!1 === d || !0 !== d && 1 & d[1])return a;
                        switch (b) {
                            case 1:
                                return function (b) {
                                    return a.call(c, b)
                                };
                            case 2:
                                return function (b, d) {
                                    return a.call(c, b, d)
                                };
                            case 3:
                                return function (b, d, f) {
                                    return a.call(c, b, d, f)
                                };
                            case 4:
                                return function (b, d, f, m) {
                                    return a.call(c, b, d, f, m)
                                }
                        }
                        return yb(a, c)
                    }

                    function Ta(a) {
                        function c() {
                            var a = l ? e : this;
                            if (f) {
                                var ja =
                                    p(f);
                                La.apply(ja, arguments)
                            }
                            return (m || g) && (ja || (ja = p(arguments)), m && La.apply(ja, m), g && ja.length < u) ? (d |= 16, Ta([b, h ? d : -4 & d, ja, null, e, u])) : (ja || (ja = arguments), t && (b = a[k]), this instanceof c) ? (a = C(b.prototype), ja = b.apply(a, ja), da(ja) ? ja : a) : b.apply(a, ja)
                        }

                        var b = a[0], d = a[1], f = a[2], m = a[3], e = a[4], u = a[5], l = 1 & d, t = 2 & d, g = 4 & d, h = 8 & d, k = b;
                        return hb(c, a), c
                    }

                    function oa(a, c) {
                        var b = -1, d = xa(), m = a ? a.length : 0, e = m >= A && d === k, u = [];
                        if (e) {
                            var p = f(c);
                            p ? (d = h, c = p) : e = !1
                        }
                        for (; ++b < m;)p = a[b], 0 > d(c, p) && u.push(p);
                        return e && t(c), u
                    }

                    function pa(a,
                                c, b, d) {
                        d = (d || 0) - 1;
                        for (var f = a ? a.length : 0, m = []; ++d < f;) {
                            var e = a[d];
                            if (e && "object" == typeof e && "number" == typeof e.length && (ca(e) || Ua(e))) {
                                c || (e = pa(e, c, b));
                                var u = -1, p = e.length, l = m.length;
                                for (m.length += p; ++u < p;)m[l++] = e[u]
                            } else b || m.push(e)
                        }
                        return m
                    }

                    function M(c, b, d, f, e, u) {
                        if (d) {
                            var p = d(c, b);
                            if ("undefined" != typeof p)return !!p
                        }
                        if (c === b)return 0 !== c || 1 / c == 1 / b;
                        if (!(c !== c || c && aa[typeof c] || b && aa[typeof b]))return !1;
                        if (null == c || null == b)return c === b;
                        var l = ga.call(c), t = ga.call(b);
                        if (l == N && (l = S), t == N && (t = S), l !=
                            t)return !1;
                        switch (l) {
                            case wa:
                            case za:
                                return +c == +b;
                            case ba:
                                return c != +c ? b != +b : 0 == c ? 1 / c == 1 / b : c == +b;
                            case ra:
                            case ka:
                                return c == ya(b)
                        }
                        t = l == V;
                        if (!t) {
                            var g = fa.call(c, "__wrapped__"), h = fa.call(b, "__wrapped__");
                            if (g || h)return M(g ? c.__wrapped__ : c, h ? b.__wrapped__ : b, d, f, e, u);
                            if (l != S)return !1;
                            l = c.constructor;
                            g = b.constructor;
                            if (l != g && !(W(l) && l instanceof l && W(g) && g instanceof g) && "constructor" in c && "constructor" in b)return !1
                        }
                        l = !e;
                        e || (e = a());
                        u || (u = a());
                        for (g = e.length; g--;)if (e[g] == c)return u[g] == b;
                        var k = 0;
                        if (p = !0,
                                e.push(c), u.push(b), t) {
                            if (g = c.length, k = b.length, p = k == g, p || f)for (; k--;)if (t = g, h = b[k], f)for (; t-- && !(p = M(c[t], h, d, f, e, u));); else if (!(p = M(c[k], h, d, f, e, u)))break
                        } else ua(b, function (a, b, m) {
                            return fa.call(m, b) ? (k++, p = fa.call(c, b) && M(c[b], a, d, f, e, u)) : void 0
                        }), p && !f && ua(c, function (a, c, b) {
                            return fa.call(b, c) ? p = -1 < --k : void 0
                        });
                        return e.pop(), u.pop(), l && (m(e), m(u)), p
                    }

                    function T(a, c, b, d, f) {
                        (ca(c) ? ea : U)(c, function (c, e) {
                            var m, u, p = c, l = a[e];
                            if (c && ((u = ca(c)) || jb(c))) {
                                for (var t = d.length; t--;)if (m = d[t] == c) {
                                    l = f[t];
                                    break
                                }
                                if (!m) {
                                    var g;
                                    b && (p = b(l, c), (g = "undefined" != typeof p) && (l = p));
                                    g || (l = u ? ca(l) ? l : [] : jb(l) ? l : {});
                                    d.push(c);
                                    f.push(l);
                                    g || T(l, c, b, d, f)
                                }
                            } else b && (p = b(l, c), "undefined" == typeof p && (p = c)), "undefined" != typeof p && (l = p);
                            a[e] = l
                        })
                    }

                    function qa(a, c) {
                        return a + Tb(zb() * (c - a + 1))
                    }

                    function Z(c, b, d) {
                        var e = -1, u = xa(), p = c ? c.length : 0, l = [], g = !b && p >= A && u === k, E = d || g ? a() : l;
                        g && (E = f(E), u = h);
                        for (; ++e < p;) {
                            var v = c[e], w = d ? d(v, e, c) : v;
                            (b ? !e || E[E.length - 1] !== w : 0 > u(E, w)) && ((d || g) && E.push(w), l.push(v))
                        }
                        return g ? (m(E.array), t(E)) : d && m(E), l
                    }

                    function ia(a) {
                        return function (c,
                                         b, d) {
                            var e = {};
                            b = l.createCallback(b, d, 3);
                            d = -1;
                            var f = c ? c.length : 0;
                            if ("number" == typeof f)for (; ++d < f;) {
                                var m = c[d];
                                a(e, m, b(m, d, c), c)
                            } else U(c, function (c, d, f) {
                                a(e, c, b(c, d, f), f)
                            });
                            return e
                        }
                    }

                    function Q(a, c, b, d, e, f) {
                        var m = 1 & c, u = 4 & c, l = 16 & c, t = 32 & c;
                        if (!(2 & c || W(a)))throw new va;
                        l && !b.length && (c &= -17, l = b = !1);
                        t && !d.length && (c &= -33, t = d = !1);
                        var g = a && a.__bindData__;
                        return g && !0 !== g ? (g = p(g), g[2] && (g[2] = p(g[2])), g[3] && (g[3] = p(g[3])), !m || 1 & g[1] || (g[4] = e), !m && 1 & g[1] && (c |= 8), !u || 4 & g[1] || (g[5] = f), l && La.apply(g[2] || (g[2] =
                                []), b), t && Ub.apply(g[3] || (g[3] = []), d), g[1] |= c, Q.apply(null, g)) : (1 == c || 17 === c ? q : Ta)([a, c, b, d, e, f])
                    }

                    function Rb(a) {
                        return kb[a]
                    }

                    function xa() {
                        var a = (a = l.indexOf) === Ab ? k : a;
                        return a
                    }

                    function ma(a) {
                        return "function" == typeof a && Vb.test(a)
                    }

                    function Ja(a) {
                        var c, b;
                        return a && ga.call(a) == S && (c = a.constructor, !W(c) || c instanceof c) ? (ua(a, function (a, c) {
                            b = c
                        }), "undefined" == typeof b || fa.call(a, b)) : !1
                    }

                    function Ra(a) {
                        return Bb[a]
                    }

                    function Ua(a) {
                        return a && "object" == typeof a && "number" == typeof a.length && ga.call(a) == N || !1
                    }

                    function Ga(a, c, b) {
                        var d = ha(a), e = d.length;
                        for (c = H(c, b, 3); e-- && (b = d[e], !1 !== c(a[b], b, a)););
                        return a
                    }

                    function Ha(a) {
                        var c = [];
                        return ua(a, function (a, b) {
                            W(a) && c.push(b)
                        }), c.sort()
                    }

                    function ub(a) {
                        for (var c = -1, b = ha(a), d = b.length, e = {}; ++c < d;) {
                            var f = b[c];
                            e[a[f]] = f
                        }
                        return e
                    }

                    function W(a) {
                        return "function" == typeof a
                    }

                    function da(a) {
                        return !(!a || !aa[typeof a])
                    }

                    function vb(a) {
                        return "number" == typeof a || a && "object" == typeof a && ga.call(a) == ba || !1
                    }

                    function Ia(a) {
                        return "string" == typeof a || a && "object" == typeof a && ga.call(a) ==
                            ka || !1
                    }

                    function Va(a) {
                        for (var c = -1, b = ha(a), d = b.length, e = la(d); ++c < d;)e[c] = a[b[c]];
                        return e
                    }

                    function wb(a, c, b) {
                        var d = -1, e = xa(), f = a ? a.length : 0, m = !1;
                        return b = (0 > b ? na(0, f + b) : b) || 0, ca(a) ? m = -1 < e(a, c, b) : "number" == typeof f ? m = -1 < (Ia(a) ? a.indexOf(c, b) : e(a, c, b)) : U(a, function (a) {
                            return ++d >= b ? !(m = a === c) : void 0
                        }), m
                    }

                    function xb(a, c, b) {
                        var d = !0;
                        c = l.createCallback(c, b, 3);
                        b = -1;
                        var e = a ? a.length : 0;
                        if ("number" == typeof e)for (; ++b < e && (d = !!c(a[b], b, a));); else U(a, function (a, b, e) {
                            return d = !!c(a, b, e)
                        });
                        return d
                    }

                    function Wa(a,
                                c, b) {
                        var d = [];
                        c = l.createCallback(c, b, 3);
                        b = -1;
                        var e = a ? a.length : 0;
                        if ("number" == typeof e)for (; ++b < e;) {
                            var f = a[b];
                            c(f, b, a) && d.push(f)
                        } else U(a, function (a, b, e) {
                            c(a, b, e) && d.push(a)
                        });
                        return d
                    }

                    function fb(a, c, b) {
                        c = l.createCallback(c, b, 3);
                        b = -1;
                        var d = a ? a.length : 0;
                        if ("number" != typeof d) {
                            var e;
                            return U(a, function (a, b, d) {
                                return c(a, b, d) ? (e = a, !1) : void 0
                            }), e
                        }
                        for (; ++b < d;) {
                            var f = a[b];
                            if (c(f, b, a))return f
                        }
                    }

                    function ea(a, c, b) {
                        var d = -1, e = a ? a.length : 0;
                        if (c = c && "undefined" == typeof b ? c : H(c, b, 3), "number" == typeof e)for (; ++d <
                                                                                                           e && !1 !== c(a[d], d, a);); else U(a, c);
                        return a
                    }

                    function Xa(a, c, b) {
                        var d = a ? a.length : 0;
                        if (c = c && "undefined" == typeof b ? c : H(c, b, 3), "number" == typeof d)for (; d-- && !1 !== c(a[d], d, a);); else {
                            var e = ha(a), d = e.length;
                            U(a, function (a, b, f) {
                                return b = e ? e[--d] : --d, c(f[b], b, f)
                            })
                        }
                        return a
                    }

                    function Ka(a, c, b) {
                        var d = -1, e = a ? a.length : 0;
                        if (c = l.createCallback(c, b, 3), "number" == typeof e)for (var f = la(e); ++d < e;)f[d] = c(a[d], d, a); else f = [], U(a, function (a, b, e) {
                            f[++d] = c(a, b, e)
                        });
                        return f
                    }

                    function Cb(a, c, b) {
                        var d = -1 / 0, e = d;
                        if ("function" != typeof c &&
                            b && b[c] === a && (c = null), null == c && ca(a)) {
                            b = -1;
                            for (var f = a.length; ++b < f;) {
                                var m = a[b];
                                m > e && (e = m)
                            }
                        } else c = null == c && Ia(a) ? g : l.createCallback(c, b, 3), ea(a, function (a, b, f) {
                            b = c(a, b, f);
                            b > d && (d = b, e = a)
                        });
                        return e
                    }

                    function lb(a, c, b, d) {
                        if (!a)return b;
                        var e = 3 > arguments.length;
                        c = l.createCallback(c, d, 4);
                        var f = -1, m = a.length;
                        if ("number" == typeof m)for (e && (b = a[++f]); ++f < m;)b = c(b, a[f], f, a); else U(a, function (a, d, f) {
                            b = e ? (e = !1, a) : c(b, a, d, f)
                        });
                        return b
                    }

                    function Db(a, c, b, d) {
                        var e = 3 > arguments.length;
                        return c = l.createCallback(c,
                            d, 4), Xa(a, function (a, d, f) {
                            b = e ? (e = !1, a) : c(b, a, d, f)
                        }), b
                    }

                    function Eb(a) {
                        var c = -1, b = a ? a.length : 0, d = la("number" == typeof b ? b : 0);
                        return ea(a, function (a) {
                            var b = qa(0, ++c);
                            d[c] = d[b];
                            d[b] = a
                        }), d
                    }

                    function Fb(a, c, b) {
                        var d;
                        c = l.createCallback(c, b, 3);
                        b = -1;
                        var e = a ? a.length : 0;
                        if ("number" == typeof e)for (; ++b < e && !(d = c(a[b], b, a));); else U(a, function (a, b, e) {
                            return !(d = c(a, b, e))
                        });
                        return !!d
                    }

                    function mb(a, c, b) {
                        var d = 0, e = a ? a.length : 0;
                        if ("number" != typeof c && null != c) {
                            var f = -1;
                            for (c = l.createCallback(c, b, 3); ++f < e && c(a[f], f, a);)d++
                        } else if (d =
                                c, null == d || b)return a ? a[0] : v;
                        return p(a, 0, Na(na(0, d), e))
                    }

                    function Ab(a, c, b) {
                        if ("number" == typeof b) {
                            var d = a ? a.length : 0;
                            b = 0 > b ? na(0, d + b) : b || 0
                        } else if (b)return b = Gb(a, c), a[b] === c ? b : -1;
                        return k(a, c, b)
                    }

                    function nb(a, c, b) {
                        if ("number" != typeof c && null != c) {
                            var d = 0, e = -1, f = a ? a.length : 0;
                            for (c = l.createCallback(c, b, 3); ++e < f && c(a[e], e, a);)d++
                        } else d = null == c || b ? 1 : na(0, c);
                        return p(a, d)
                    }

                    function Gb(a, c, b, d) {
                        var e = 0, f = a ? a.length : e;
                        b = b ? l.createCallback(b, d, 1) : ib;
                        for (c = b(c); f > e;)d = e + f >>> 1, b(a[d]) < c ? e = d + 1 : f = d;
                        return e
                    }

                    function Hb(a, c, b, d) {
                        return "boolean" != typeof c && null != c && (d = b, b = "function" != typeof c && d && d[c] === a ? null : c, c = !1), null != b && (b = l.createCallback(b, d, 3)), Z(a, c, b)
                    }

                    function Ib() {
                        for (var a = 1 < arguments.length ? arguments : arguments[0], c = -1, b = a ? Cb(ob(a, "length")) : 0, d = la(0 > b ? 0 : b); ++c < b;)d[c] = ob(a, c);
                        return d
                    }

                    function Jb(a, c) {
                        var b = -1, d = a ? a.length : 0, e = {};
                        for (c || !d || ca(a[0]) || (c = []); ++b < d;) {
                            var f = a[b];
                            c ? e[f] = c[b] : f && (e[f[0]] = f[1])
                        }
                        return e
                    }

                    function yb(a, c) {
                        return 2 < arguments.length ? Q(a, 17, p(arguments, 2), null, c) :
                            Q(a, 1, null, null, c)
                    }

                    function Kb(a, c, b) {
                        var d, e, f, m, u, p, l, g = 0, t = !1, h = !0;
                        if (!W(a))throw new va;
                        if (c = na(0, c) || 0, !0 === b)var k = !0, h = !1; else da(b) && (k = b.leading, t = "maxWait" in b && (na(c, b.maxWait) || 0), h = "trailing" in b ? b.trailing : h);
                        var E = function () {
                            var b = c - (Aa() - m);
                            0 >= b ? (e && $a(e), b = l, e = p = l = v, b && (g = Aa(), f = a.apply(u, d), p || e || (d = u = null))) : p = Oa(E, b)
                        }, w = function () {
                            p && $a(p);
                            e = p = l = v;
                            (h || t !== c) && (g = Aa(), f = a.apply(u, d), p || e || (d = u = null))
                        };
                        return function () {
                            if (d = arguments, m = Aa(), u = this, l = h && (p || !k), !1 === t)var b = k && !p;
                            else {
                                e || k || (g = m);
                                var v = t - (m - g), z = 0 >= v;
                                z ? (e && (e = $a(e)), g = m, f = a.apply(u, d)) : e || (e = Oa(w, v))
                            }
                            return z && p ? p = $a(p) : p || c === t || (p = Oa(E, c)), b && (z = !0, f = a.apply(u, d)), !z || p || e || (d = u = null), f
                        }
                    }

                    function ib(a) {
                        return a
                    }

                    function pb(a, c, b) {
                        var d = !0, e = c && Ha(c);
                        c && (b || e.length) || (null == b && (b = c), f = z, c = a, a = l, e = Ha(c));
                        !1 === b ? d = !1 : da(b) && "chain" in b && (d = b.chain);
                        var f = a, m = W(f);
                        ea(e, function (b) {
                            var e = a[b] = c[b];
                            m && (f.prototype[b] = function () {
                                var c = this.__chain__, b = this.__wrapped__, m = [b];
                                La.apply(m, arguments);
                                m = e.apply(a, m);
                                if (d || c) {
                                    if (b === m && da(m))return this;
                                    m = new f(m);
                                    m.__chain__ = c
                                }
                                return m
                            })
                        })
                    }

                    function Lb() {
                    }

                    function Mb(a) {
                        return function (c) {
                            return c[a]
                        }
                    }

                    function Nb() {
                        return this.__wrapped__
                    }

                    b = b ? R.defaults(Ba.Object(), b, R.pick(Ba, E)) : Ba;
                    var la = b.Array, cb = b.Boolean, qb = b.Date, ab = b.Function, Pa = b.Math, db = b.Number, Da = b.Object, Qa = b.RegExp, ya = b.String, va = b.TypeError, Ea = [], Ob = Da.prototype, Wb = b._, ga = Ob.toString, Vb = Qa("^" + ya(ga).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), Xb = Pa.ceil, $a =
                        b.clearTimeout, Tb = Pa.floor, Sb = ab.prototype.toString, Fa = ma(Fa = Da.getPrototypeOf) && Fa, fa = Ob.hasOwnProperty, La = Ea.push, Oa = b.setTimeout, Pb = Ea.splice, Ub = Ea.unshift, Qb = function () {
                        try {
                            var a = {}, c = ma(c = Da.defineProperty) && c, b = c(a, a, a) && c
                        } catch (d) {
                        }
                        return b
                    }(), Za = ma(Za = Da.create) && Za, rb = ma(rb = la.isArray) && rb, Yb = b.isFinite, Zb = b.isNaN, bb = ma(bb = Da.keys) && bb, na = Pa.max, Na = Pa.min, sb = b.parseInt, zb = Pa.random, ta = {};
                    ta[V] = la;
                    ta[wa] = cb;
                    ta[za] = qb;
                    ta[Ca] = ab;
                    ta[S] = Da;
                    ta[ba] = db;
                    ta[ra] = Qa;
                    ta[ka] = ya;
                    z.prototype = l.prototype;
                    var Ma = l.support = {};
                    Ma.funcDecomp = !ma(b.WinRTError) && K.test(w);
                    Ma.funcNames = "string" == typeof ab.name;
                    l.templateSettings = {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: X,
                        variable: "",
                        imports: {_: l}
                    };
                    Za || (C = function () {
                        function a() {
                        }

                        return function (c) {
                            if (da(c)) {
                                a.prototype = c;
                                var d = new a;
                                a.prototype = null
                            }
                            return d || b.Object()
                        }
                    }());
                    var hb = Qb ? function (a, c) {
                        eb.value = c;
                        Qb(a, "__bindData__", eb);
                        eb.value = null
                    } : Lb, ca = rb || function (a) {
                            return a && "object" == typeof a && "number" == typeof a.length && ga.call(a) ==
                                V || !1
                        }, $b = function (a) {
                        var c, b = [];
                        if (!a || !aa[typeof a])return b;
                        for (c in a)fa.call(a, c) && b.push(c);
                        return b
                    }, ha = bb ? function (a) {
                        return da(a) ? bb(a) : []
                    } : $b, kb = {
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;"
                    }, Bb = ub(kb), ac = Qa("(" + ha(Bb).join("|") + ")", "g"), bc = Qa("[" + ha(kb).join("") + "]", "g"), Ya = function (a, c, b) {
                        var d, e = a, f = e;
                        if (!e)return f;
                        var m = arguments, u = 0, p = "number" == typeof b ? 2 : m.length;
                        if (3 < p && "function" == typeof m[p - 2])var l = H(m[--p - 1], m[p--], 2); else 2 < p && "function" == typeof m[p - 1] && (l = m[--p]);
                        for (; ++u < p;)if (e = m[u], e && aa[typeof e])for (var g = -1, t = aa[typeof e] && ha(e), h = t ? t.length : 0; ++g < h;)d = t[g], f[d] = l ? l(f[d], e[d]) : e[d];
                        return f
                    }, tb = function (a, c, b) {
                        var d, e = a, f = e;
                        if (!e)return f;
                        for (var m = arguments, u = 0, p = "number" == typeof b ? 2 : m.length; ++u < p;)if (e = m[u], e && aa[typeof e])for (var l = -1, g = aa[typeof e] && ha(e), t = g ? g.length : 0; ++l < t;)d = g[l], "undefined" == typeof f[d] && (f[d] = e[d]);
                        return f
                    }, ua = function (a, c, b) {
                        var d;
                        if (!a || !aa[typeof a])return a;
                        c = c && "undefined" == typeof b ? c : H(c, b, 3);
                        for (d in a)if (!1 === c(a[d],
                                d, a))break;
                        return a
                    }, U = function (a, c, b) {
                        var d;
                        if (!a || !aa[typeof a])return a;
                        c = c && "undefined" == typeof b ? c : H(c, b, 3);
                        b = -1;
                        for (var e = aa[typeof a] && ha(a), f = e ? e.length : 0; ++b < f && (d = e[b], !1 !== c(a[d], d, a)););
                        return a
                    }, jb = Fa ? function (a) {
                        if (!a || ga.call(a) != S)return !1;
                        var c = a.valueOf, b = ma(c) && (b = Fa(c)) && Fa(b);
                        return b ? a == b || Fa(a) == b : Ja(a)
                    } : Ja, cc = ia(function (a, c, b) {
                        fa.call(a, b) ? a[b]++ : a[b] = 1
                    }), dc = ia(function (a, c, b) {
                        (fa.call(a, b) ? a[b] : a[b] = []).push(c)
                    }), ec = ia(function (a, c, b) {
                        a[b] = c
                    }), ob = Ka, Aa = ma(Aa = qb.now) && Aa ||
                        function () {
                            return (new qb).getTime()
                        }, fc = 8 == sb(y + "08") ? sb : function (a, c) {
                        return sb(Ia(a) ? a.replace(B, "") : a, c || 0)
                    };
                    return l.after = function (a, c) {
                        if (!W(c))throw new va;
                        return function () {
                            return 1 > --a ? c.apply(this, arguments) : void 0
                        }
                    }, l.assign = Ya, l.at = function (a) {
                        for (var c = arguments, b = -1, d = pa(c, !0, !1, 1), c = c[2] && c[2][c[1]] === a ? 1 : d.length, e = la(c); ++b < c;)e[b] = a[d[b]];
                        return e
                    }, l.bind = yb, l.bindAll = function (a) {
                        for (var c = 1 < arguments.length ? pa(arguments, !0, !1, 1) : Ha(a), b = -1, d = c.length; ++b < d;) {
                            var e = c[b];
                            a[e] = Q(a[e],
                                1, null, null, a)
                        }
                        return a
                    }, l.bindKey = function (a, c) {
                        return 2 < arguments.length ? Q(c, 19, p(arguments, 2), null, a) : Q(c, 3, null, null, a)
                    }, l.chain = function (a) {
                        return a = new z(a), a.__chain__ = !0, a
                    }, l.compact = function (a) {
                        for (var c = -1, b = a ? a.length : 0, d = []; ++c < b;) {
                            var e = a[c];
                            e && d.push(e)
                        }
                        return d
                    }, l.compose = function () {
                        for (var a = arguments, c = a.length; c--;)if (!W(a[c]))throw new va;
                        return function () {
                            for (var c = arguments, b = a.length; b--;)c = [a[b].apply(this, c)];
                            return c[0]
                        }
                    }, l.constant = function (a) {
                        return function () {
                            return a
                        }
                    },
                        l.countBy = cc, l.create = function (a, c) {
                        var b = C(a);
                        return c ? Ya(b, c) : b
                    }, l.createCallback = function (a, c, b) {
                        var d = typeof a;
                        if (null == a || "function" == d)return H(a, c, b);
                        if ("object" != d)return Mb(a);
                        var e = ha(a), f = e[0], m = a[f];
                        return 1 != e.length || m !== m || da(m) ? function (c) {
                            for (var b = e.length, d = !1; b-- && (d = M(c[e[b]], a[e[b]], null, !0)););
                            return d
                        } : function (a) {
                            a = a[f];
                            return m === a && (0 !== m || 1 / m == 1 / a)
                        }
                    }, l.curry = function (a, c) {
                        return c = "number" == typeof c ? c : +c || a.length, Q(a, 4, null, null, null, c)
                    }, l.debounce = Kb, l.defaults = tb, l.defer =
                        function (a) {
                            if (!W(a))throw new va;
                            var c = p(arguments, 1);
                            return Oa(function () {
                                a.apply(v, c)
                            }, 1)
                        }, l.delay = function (a, c) {
                        if (!W(a))throw new va;
                        var b = p(arguments, 2);
                        return Oa(function () {
                            a.apply(v, b)
                        }, c)
                    }, l.difference = function (a) {
                        return oa(a, pa(arguments, !0, !0, 1))
                    }, l.filter = Wa, l.flatten = function (a, c, b, d) {
                        return "boolean" != typeof c && null != c && (d = b, b = "function" != typeof c && d && d[c] === a ? null : c, c = !1), null != b && (a = Ka(a, b, d)), pa(a, c)
                    }, l.forEach = ea, l.forEachRight = Xa, l.forIn = ua, l.forInRight = function (a, c, b) {
                        var d = [];
                        ua(a, function (a, c) {
                            d.push(c, a)
                        });
                        var e = d.length;
                        for (c = H(c, b, 3); e-- && !1 !== c(d[e--], d[e], a););
                        return a
                    }, l.forOwn = U, l.forOwnRight = Ga, l.functions = Ha, l.groupBy = dc, l.indexBy = ec, l.initial = function (a, c, b) {
                        var d = 0, e = a ? a.length : 0;
                        if ("number" != typeof c && null != c) {
                            var f = e;
                            for (c = l.createCallback(c, b, 3); f-- && c(a[f], f, a);)d++
                        } else d = null == c || b ? 1 : c || d;
                        return p(a, 0, Na(na(0, e - d), e))
                    }, l.intersection = function () {
                        for (var c = [], b = -1, d = arguments.length, e = a(), u = xa(), p = u === k, l = a(); ++b < d;) {
                            var g = arguments[b];
                            (ca(g) || Ua(g)) &&
                            (c.push(g), e.push(p && g.length >= A && f(b ? c[b] : l)))
                        }
                        var p = c[0], E = -1, v = p ? p.length : 0, w = [];
                        a:for (; ++E < v;) {
                            var z = e[0];
                            if (g = p[E], 0 > (z ? h(z, g) : u(l, g))) {
                                b = d;
                                for ((z || l).push(g); --b;)if (z = e[b], 0 > (z ? h(z, g) : u(c[b], g)))continue a;
                                w.push(g)
                            }
                        }
                        for (; d--;)(z = e[d]) && t(z);
                        return m(e), m(l), w
                    }, l.invert = ub, l.invoke = function (a, c) {
                        var b = p(arguments, 2), d = -1, e = "function" == typeof c, f = a ? a.length : 0, m = la("number" == typeof f ? f : 0);
                        return ea(a, function (a) {
                            m[++d] = (e ? c : a[c]).apply(a, b)
                        }), m
                    }, l.keys = ha, l.map = Ka, l.mapValues = function (a, c, b) {
                        var d =
                        {};
                        return c = l.createCallback(c, b, 3), U(a, function (a, b, e) {
                            d[b] = c(a, b, e)
                        }), d
                    }, l.max = Cb, l.memoize = function (a, c) {
                        if (!W(a))throw new va;
                        var b = function () {
                            var d = b.cache, e = c ? c.apply(this, arguments) : D + arguments[0];
                            return fa.call(d, e) ? d[e] : d[e] = a.apply(this, arguments)
                        };
                        return b.cache = {}, b
                    }, l.merge = function (c) {
                        var b = arguments, d = 2;
                        if (!da(c))return c;
                        if ("number" != typeof b[2] && (d = b.length), 3 < d && "function" == typeof b[d - 2])var e = H(b[--d - 1], b[d--], 2); else 2 < d && "function" == typeof b[d - 1] && (e = b[--d]);
                        for (var b = p(arguments,
                            1, d), f = -1, u = a(), l = a(); ++f < d;)T(c, b[f], e, u, l);
                        return m(u), m(l), c
                    }, l.min = function (a, c, b) {
                        var d = 1 / 0, e = d;
                        if ("function" != typeof c && b && b[c] === a && (c = null), null == c && ca(a)) {
                            b = -1;
                            for (var f = a.length; ++b < f;) {
                                var m = a[b];
                                e > m && (e = m)
                            }
                        } else c = null == c && Ia(a) ? g : l.createCallback(c, b, 3), ea(a, function (a, b, f) {
                            b = c(a, b, f);
                            d > b && (d = b, e = a)
                        });
                        return e
                    }, l.omit = function (a, c, b) {
                        var d = {};
                        if ("function" != typeof c) {
                            var e = [];
                            ua(a, function (a, c) {
                                e.push(c)
                            });
                            for (var e = oa(e, pa(arguments, !0, !1, 1)), f = -1, m = e.length; ++f < m;) {
                                var u = e[f];
                                d[u] =
                                    a[u]
                            }
                        } else c = l.createCallback(c, b, 3), ua(a, function (a, b, e) {
                            c(a, b, e) || (d[b] = a)
                        });
                        return d
                    }, l.once = function (a) {
                        var c, b;
                        if (!W(a))throw new va;
                        return function () {
                            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
                        }
                    }, l.pairs = function (a) {
                        for (var c = -1, b = ha(a), d = b.length, e = la(d); ++c < d;) {
                            var f = b[c];
                            e[c] = [f, a[f]]
                        }
                        return e
                    }, l.partial = function (a) {
                        return Q(a, 16, p(arguments, 1))
                    }, l.partialRight = function (a) {
                        return Q(a, 32, null, p(arguments, 1))
                    }, l.pick = function (a, c, b) {
                        var d = {};
                        if ("function" != typeof c)for (var e = -1, f =
                            pa(arguments, !0, !1, 1), m = da(a) ? f.length : 0; ++e < m;) {
                            var u = f[e];
                            u in a && (d[u] = a[u])
                        } else c = l.createCallback(c, b, 3), ua(a, function (a, b, e) {
                            c(a, b, e) && (d[b] = a)
                        });
                        return d
                    }, l.pluck = ob, l.property = Mb, l.pull = function (a) {
                        for (var c = arguments, b = 0, d = c.length, e = a ? a.length : 0; ++b < d;)for (var f = -1, m = c[b]; ++f < e;)a[f] === m && (Pb.call(a, f--, 1), e--);
                        return a
                    }, l.range = function (a, c, b) {
                        a = +a || 0;
                        b = "number" == typeof b ? b : +b || 1;
                        null == c && (c = a, a = 0);
                        var d = -1;
                        c = na(0, Xb((c - a) / (b || 1)));
                        for (var e = la(c); ++d < c;)e[d] = a, a += b;
                        return e
                    }, l.reject =
                        function (a, c, b) {
                            return c = l.createCallback(c, b, 3), Wa(a, function (a, b, d) {
                                return !c(a, b, d)
                            })
                        }, l.remove = function (a, c, b) {
                        var d = -1, e = a ? a.length : 0, f = [];
                        for (c = l.createCallback(c, b, 3); ++d < e;)b = a[d], c(b, d, a) && (f.push(b), Pb.call(a, d--, 1), e--);
                        return f
                    }, l.rest = nb, l.shuffle = Eb, l.sortBy = function (b, e, f) {
                        var u = -1, p = ca(e), g = b ? b.length : 0, h = la("number" == typeof g ? g : 0);
                        p || (e = l.createCallback(e, f, 3));
                        ea(b, function (b, d, f) {
                            var m = h[++u] = c();
                            p ? m.criteria = Ka(e, function (a) {
                                return b[a]
                            }) : (m.criteria = a())[0] = e(b, d, f);
                            m.index = u;
                            m.value = b
                        });
                        g = h.length;
                        for (h.sort(d); g--;)b = h[g], h[g] = b.value, p || m(b.criteria), t(b);
                        return h
                    }, l.tap = function (a, c) {
                        return c(a), a
                    }, l.throttle = function (a, c, b) {
                        var d = !0, e = !0;
                        if (!W(a))throw new va;
                        return !1 === b ? d = !1 : da(b) && (d = "leading" in b ? b.leading : d, e = "trailing" in b ? b.trailing : e), Sa.leading = d, Sa.maxWait = c, Sa.trailing = e, Kb(a, c, Sa)
                    }, l.times = function (a, c, b) {
                        a = -1 < (a = +a) ? a : 0;
                        var d = -1, e = la(a);
                        for (c = H(c, b, 1); ++d < a;)e[d] = c(d);
                        return e
                    }, l.toArray = function (a) {
                        return a && "number" == typeof a.length ? p(a) : Va(a)
                    }, l.transform =
                        function (a, c, b, d) {
                            var e = ca(a);
                            if (null == b)if (e)b = []; else {
                                var f = a && a.constructor;
                                b = C(f && f.prototype)
                            }
                            return c && (c = l.createCallback(c, d, 4), (e ? ea : U)(a, function (a, d, e) {
                                return c(b, a, d, e)
                            })), b
                        }, l.union = function () {
                        return Z(pa(arguments, !0, !0))
                    }, l.uniq = Hb, l.values = Va, l.where = Wa, l.without = function (a) {
                        return oa(a, p(arguments, 1))
                    }, l.wrap = function (a, c) {
                        return Q(c, 16, [a])
                    }, l.xor = function () {
                        for (var a = -1, c = arguments.length; ++a < c;) {
                            var b = arguments[a];
                            if (ca(b) || Ua(b))var d = d ? Z(oa(d, b).concat(oa(b, d))) : b
                        }
                        return d ||
                            []
                    }, l.zip = Ib, l.zipObject = Jb, l.collect = Ka, l.drop = nb, l.each = ea, l.eachRight = Xa, l.extend = Ya, l.methods = Ha, l.object = Jb, l.select = Wa, l.tail = nb, l.unique = Hb, l.unzip = Ib, pb(l), l.clone = function (a, c, b, d) {
                        return "boolean" != typeof c && null != c && (d = b, b = c, c = !1), n(a, c, "function" == typeof b && H(b, d, 1))
                    }, l.cloneDeep = function (a, c, b) {
                        return n(a, !0, "function" == typeof c && H(c, b, 1))
                    }, l.contains = wb, l.escape = function (a) {
                        return null == a ? "" : ya(a).replace(bc, Rb)
                    }, l.every = xb, l.find = fb, l.findIndex = function (a, c, b) {
                        var d = -1, e = a ? a.length :
                            0;
                        for (c = l.createCallback(c, b, 3); ++d < e;)if (c(a[d], d, a))return d;
                        return -1
                    }, l.findKey = function (a, c, b) {
                        var d;
                        return c = l.createCallback(c, b, 3), U(a, function (a, b, e) {
                            return c(a, b, e) ? (d = b, !1) : void 0
                        }), d
                    }, l.findLast = function (a, c, b) {
                        var d;
                        return c = l.createCallback(c, b, 3), Xa(a, function (a, b, e) {
                            return c(a, b, e) ? (d = a, !1) : void 0
                        }), d
                    }, l.findLastIndex = function (a, c, b) {
                        var d = a ? a.length : 0;
                        for (c = l.createCallback(c, b, 3); d--;)if (c(a[d], d, a))return d;
                        return -1
                    }, l.findLastKey = function (a, c, b) {
                        var d;
                        return c = l.createCallback(c,
                            b, 3), Ga(a, function (a, b, e) {
                            return c(a, b, e) ? (d = b, !1) : void 0
                        }), d
                    }, l.has = function (a, c) {
                        return a ? fa.call(a, c) : !1
                    }, l.identity = ib, l.indexOf = Ab, l.isArguments = Ua, l.isArray = ca, l.isBoolean = function (a) {
                        return !0 === a || !1 === a || a && "object" == typeof a && ga.call(a) == wa || !1
                    }, l.isDate = function (a) {
                        return a && "object" == typeof a && ga.call(a) == za || !1
                    }, l.isElement = function (a) {
                        return a && 1 === a.nodeType || !1
                    },l.isEmpty = function (a) {
                        var c = !0;
                        if (!a)return c;
                        var b = ga.call(a), d = a.length;
                        return b == V || b == ka || b == N || b == S && "number" == typeof d &&
                        W(a.splice) ? !d : (U(a, function () {
                            return c = !1
                        }), c)
                    },l.isEqual = function (a, c, b, d) {
                        return M(a, c, "function" == typeof b && H(b, d, 2))
                    },l.isFinite = function (a) {
                        return Yb(a) && !Zb(parseFloat(a))
                    },l.isFunction = W,l.isNaN = function (a) {
                        return vb(a) && a != +a
                    },l.isNull = function (a) {
                        return null === a
                    },l.isNumber = vb,l.isObject = da,l.isPlainObject = jb,l.isRegExp = function (a) {
                        return a && "object" == typeof a && ga.call(a) == ra || !1
                    },l.isString = Ia,l.isUndefined = function (a) {
                        return "undefined" == typeof a
                    },l.lastIndexOf = function (a, c, b) {
                        var d = a ?
                            a.length : 0;
                        for ("number" == typeof b && (d = (0 > b ? na(0, d + b) : Na(b, d - 1)) + 1); d--;)if (a[d] === c)return d;
                        return -1
                    },l.mixin = pb,l.noConflict = function () {
                        return b._ = Wb, this
                    },l.noop = Lb,l.now = Aa,l.parseInt = fc,l.random = function (a, c, b) {
                        var d = null == c;
                        return (null == b && ("boolean" == typeof a && d ? (b = a, a = 1) : d || "boolean" != typeof c || (b = c, d = !0)), null == a && d && (c = 1), a = +a || 0, d ? (c = a, a = 0) : c = +c || 0, b || a % 1 || c % 1) ? (b = zb(), Na(a + b * (c - a + parseFloat("1e-" + ((b + "").length - 1))), c)) : qa(a, c)
                    },l.reduce = lb,l.reduceRight = Db,l.result = function (a, c) {
                        if (a) {
                            var b =
                                a[c];
                            return W(b) ? a[c]() : b
                        }
                    },l.runInContext = w,l.size = function (a) {
                        var c = a ? a.length : 0;
                        return "number" == typeof c ? c : ha(a).length
                    },l.some = Fb,l.sortedIndex = Gb,l.template = function (a, c, b) {
                        var d = l.templateSettings;
                        a = ya(a || "");
                        b = tb({}, b, d);
                        var f, m = tb({}, b.imports, d.imports), d = ha(m), m = Va(m), p = 0, g = b.interpolate || r, t = "__p += '", g = Qa((b.escape || r).source + "|" + g.source + "|" + (g === X ? L : r).source + "|" + (b.evaluate || r).source + "|$", "g");
                        a.replace(g, function (c, b, d, m, g, l) {
                            return d || (d = m), t += a.slice(p, l).replace(u, e), b && (t += "' +\n__e(" +
                                b + ") +\n'"), g && (f = !0, t += "';\n" + g + ";\n__p += '"), d && (t += "' +\n((__t = (" + d + ")) == null ? '' : __t) +\n'"), p = l + c.length, c
                        });
                        var t = t + "';\n", h = g = b.variable;
                        h || (g = "obj", t = "with (" + g + ") {\n" + t + "\n}\n");
                        t = (f ? t.replace(F, "") : t).replace(J, "$1").replace(I, "$1;");
                        t = "function(" + g + ") {\n" + (h ? "" : g + " || (" + g + " = {});\n") + "var __t, __p = '', __e = _.escape" + (f ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + t + "return __p\n}";
                        b = "\n/*\n//# sourceURL=" + (b.sourceURL || "/lodash/template/source[" +
                            sa++ + "]") + "\n*/";
                        try {
                            var k = ab(d, "return " + t + b).apply(v, m)
                        } catch (E) {
                            throw E.source = t, E;
                        }
                        return c ? k(c) : (k.source = t, k)
                    },l.unescape = function (a) {
                        return null == a ? "" : ya(a).replace(ac, Ra)
                    },l.uniqueId = function (a) {
                        var c = ++P;
                        return ya(null == a ? "" : a) + c
                    },l.all = xb,l.any = Fb,l.detect = fb,l.findWhere = fb,l.foldl = lb,l.foldr = Db,l.include = wb,l.inject = lb,pb(function () {
                        var a = {};
                        return U(l, function (c, b) {
                            l.prototype[b] || (a[b] = c)
                        }), a
                    }(), !1),l.first = mb,l.last = function (a, c, b) {
                        var d = 0, e = a ? a.length : 0;
                        if ("number" != typeof c && null !=
                            c) {
                            var f = e;
                            for (c = l.createCallback(c, b, 3); f-- && c(a[f], f, a);)d++
                        } else if (d = c, null == d || b)return a ? a[e - 1] : v;
                        return p(a, na(0, e - d))
                    },l.sample = function (a, c, b) {
                        if (a && "number" != typeof a.length && (a = Va(a)), null == c || b)return a ? a[qa(0, a.length - 1)] : v;
                        a = Eb(a);
                        return a.length = Na(na(0, c), a.length), a
                    },l.take = mb,l.head = mb,U(l, function (a, c) {
                        var b = "sample" !== c;
                        l.prototype[c] || (l.prototype[c] = function (c, d) {
                            var e = this.__chain__, f = a(this.__wrapped__, c, d);
                            return e || null != c && (!d || b && "function" == typeof c) ? new z(f, e) : f
                        })
                    }),
                        l.VERSION = "2.4.2",l.prototype.chain = function () {
                        return this.__chain__ = !0, this
                    },l.prototype.toString = function () {
                        return ya(this.__wrapped__)
                    },l.prototype.value = Nb,l.prototype.valueOf = Nb,ea(["join", "pop", "shift"], function (a) {
                        var c = Ea[a];
                        l.prototype[a] = function () {
                            var a = this.__chain__, b = c.apply(this.__wrapped__, arguments);
                            return a ? new z(b, a) : b
                        }
                    }),ea(["push", "reverse", "sort", "unshift"], function (a) {
                        var c = Ea[a];
                        l.prototype[a] = function () {
                            return c.apply(this.__wrapped__, arguments), this
                        }
                    }),ea(["concat", "slice",
                        "splice"], function (a) {
                        var c = Ea[a];
                        l.prototype[a] = function () {
                            return new z(c.apply(this.__wrapped__, arguments), this.__chain__)
                        }
                    }),l
                }

                var v, l = [], z = [], P = 0, D = +new Date + "", A = 75, C = 40, y = " \t\x0B\f\u00a0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000", F = /\b__p \+= '';/g, J = /\b(__p \+=) '' \+/g, I = /(__e\(.*?\)|\b__t\)) \+\n'';/g, L = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, O = /\w*$/, G = /^\s*function[ \n\r\t]+\w/, X = /<%=([\s\S]+?)%>/g, B = RegExp("^[" + y + "]*0+(?=.$)"),
                    r = /($^)/, K = /\bthis\b/, u = /['\n\r\t\u2028\u2029\\]/g, E = "Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setTimeout".split(" "), sa = 0, N = "[object Arguments]", V = "[object Array]", wa = "[object Boolean]", za = "[object Date]", Ca = "[object Function]", ba = "[object Number]", S = "[object Object]", ra = "[object RegExp]", ka = "[object String]", x = {};
                x[Ca] = !1;
                x[N] = x[V] = x[wa] = x[za] = x[ba] = x[S] = x[ra] = x[ka] = !0;
                var Sa = {leading: !1, maxWait: 0, trailing: !1}, eb = {
                    configurable: !1,
                    enumerable: !1, value: null, writable: !1
                }, aa = {
                    "boolean": !1,
                    "function": !0,
                    object: !0,
                    number: !1,
                    string: !1,
                    undefined: !1
                }, Ta = {
                    "\\": "\\",
                    "'": "'",
                    "\n": "n",
                    "\r": "r",
                    "\t": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, Ba = aa[typeof q] && q || this, H = aa[typeof exports] && exports && !exports.nodeType && exports, oa = aa[typeof module] && module && !module.nodeType && module, pa = oa && oa.exports === H && H, qa = aa[typeof global] && global;
                !qa || qa.global !== qa && qa.window !== qa || (Ba = qa);
                var R = w();
                "function" == typeof n.define && "object" == typeof n.define.amd &&
                n.define.amd ? (Ba._ = R, n.define("underscore", [], function () {
                    return R
                })) : H && oa ? pa ? (oa.exports = R)._ = R : H._ = R : Ba._ = R
            }).call(this);
            (function () {
                function k(a, c, b) {
                    return ("string" == typeof c ? c : c.toString()).replace(a.define || e, function (c, d, e, f) {
                        return 0 === d.indexOf("def.") && (d = d.substring(4)), d in b || (":" === e ? (a.defineParams && f.replace(a.defineParams, function (a, c, e) {
                            b[d] = {arg: c, text: e}
                        }), d in b || (b[d] = f)) : (new Function("def", "def['" + d + "']=" + f))(b)), ""
                    }).replace(a.use || e, function (c, d) {
                        a.useParams && (d = d.replace(a.useParams,
                            function (a, c, d, e) {
                                return b[d] && b[d].arg && e ? (a = (d + ":" + e).replace(/'|\\/g, "_"), b.__exp = b.__exp || {}, b.__exp[a] = b[d].text.replace(new RegExp("(^|[^\\w$])" + b[d].arg + "([^\\w$])", "g"), "$1" + e + "$2"), c + "def.__exp['" + a + "']") : void 0
                            }));
                        var e = (new Function("def", "return " + d))(b);
                        return e ? k(a, e, b) : e
                    })
                }

                function h(a) {
                    return a.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
                }

                var b, g = {
                    version: "1.0.3", templateSettings: {
                        evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
                        interpolate: /\{\{=([\s\S]+?)\}\}/g,
                        encode: /\{\{!([\s\S]+?)\}\}/g,
                        use: /\{\{#([\s\S]+?)\}\}/g,
                        useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
                        define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
                        defineParams: /^\s*([\w$]+):([\s\S]+)/,
                        conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
                        iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
                        varname: "it",
                        strip: !0,
                        append: !0,
                        selfcontained: !1,
                        doNotSkipEncoded: !1
                    }, template: void 0, compile: void 0, encodeHTMLSource: function (a) {
                        var c =
                        {
                            "&": "&#38;",
                            "<": "&#60;",
                            ">": "&#62;",
                            '"': "&#34;",
                            "'": "&#39;",
                            "/": "&#47;"
                        }, b = a ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
                        return function (a) {
                            return a ? a.toString().replace(b, function (a) {
                                return c[a] || a
                            }) : ""
                        }
                    }
                };
                b = function () {
                    return this || (0, eval)("this")
                }();
                "undefined" != typeof module && module.exports ? module.exports = g : "function" == typeof n.define && n.define.amd ? n.define("doT", [], function () {
                    return g
                }) : b.doT = g;
                var d = {start: "'+(", end: ")+'", startencode: "'+encodeHTML("}, f = {
                        start: "';out+=(",
                        end: ");out+='",
                        startencode: "';out+=encodeHTML("
                    },
                    e = /$^/;
                g.template = function (a, c, m) {
                    c = c || g.templateSettings;
                    var t, p, w = c.append ? d : f, v = 0;
                    a = c.use || c.define ? k(c, a, m || {}) : a;
                    a = ("var out='" + (c.strip ? a.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : a).replace(/'|\\/g, "\\$&").replace(c.interpolate || e, function (a, c) {
                        return w.start + h(c) + w.end
                    }).replace(c.encode || e, function (a, c) {
                        return t = !0, w.startencode + h(c) + w.end
                    }).replace(c.conditional || e, function (a, c, b) {
                        return c ? b ? "';}else if(" + h(b) + "){out+='" : "';}else{out+='" : b ? "';if(" +
                        h(b) + "){out+='" : "';}out+='"
                    }).replace(c.iterate || e, function (a, c, b, d) {
                        return c ? (v += 1, p = d || "i" + v, c = h(c), "';var arr" + v + "=" + c + ";if(arr" + v + "){var " + b + "," + p + "=-1,l" + v + "=arr" + v + ".length-1;while(" + p + "<l" + v + "){" + b + "=arr" + v + "[" + p + "+=1];out+='") : "';} } out+='"
                    }).replace(c.evaluate || e, function (a, c) {
                        return "';" + h(c) + "out+='"
                    }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "");
                    t && (c.selfcontained || !b || b._encodeHTML || (b._encodeHTML =
                        g.encodeHTMLSource(c.doNotSkipEncoded)), a = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + g.encodeHTMLSource.toString() + "(" + (c.doNotSkipEncoded || "") + "));" + a);
                    try {
                        return new Function(c.varname, a)
                    } catch (l) {
                        throw"undefined" != typeof console && console.log("Could not create a template function: " + a), l;
                    }
                };
                g.compile = function (a, c) {
                    return g.template(a, null, c)
                }
            })();
            (function (k, h) {
                if ("function" == typeof n.define && n.define.amd)n.define("backbone", ["underscore", "jquery", "exports"], function (b,
                                                                                                                                      d, f) {
                    k.Backbone = h(k, f, b, d)
                }); else if ("undefined" != typeof exports) {
                    var b = require("underscore");
                    h(k, exports, b)
                } else k.Backbone = h(k, {}, k._, k.jQuery || k.Zepto || k.ender || k.$)
            })(this, function (k, h, b, g) {
                var d = k.Backbone, f = [], e = (f.push, f.slice);
                f.splice;
                h.VERSION = "1.1.2";
                h.$ = g;
                h.noConflict = function () {
                    return k.Backbone = d, this
                };
                h.emulateHTTP = !1;
                h.emulateJSON = !1;
                var a = h.Events = {
                    on: function (a, c, b) {
                        if (!m(this, "on", a, [c, b]) || !c)return this;
                        this._events || (this._events = {});
                        return (this._events[a] || (this._events[a] =
                            [])).push({callback: c, context: b, ctx: b || this}), this
                    }, once: function (a, c, d) {
                        if (!m(this, "once", a, [c, d]) || !c)return this;
                        var e = this, f = b.once(function () {
                            e.off(a, f);
                            c.apply(this, arguments)
                        });
                        return f._callback = c, this.on(a, f, d)
                    }, off: function (a, c, d) {
                        var e, f, p, g, l, t, h, k;
                        if (!this._events || !m(this, "off", a, [c, d]))return this;
                        if (!a && !c && !d)return this._events = void 0, this;
                        g = a ? [a] : b.keys(this._events);
                        l = 0;
                        for (t = g.length; t > l; l++)if (a = g[l], p = this._events[a]) {
                            if (this._events[a] = e = [], c || d)for (h = 0, k = p.length; k > h; h++)f =
                                p[h], (c && c !== f.callback && c !== f.callback._callback || d && d !== f.context) && e.push(f);
                            e.length || delete this._events[a]
                        }
                        return this
                    }, trigger: function (a) {
                        if (!this._events)return this;
                        var c = e.call(arguments, 1);
                        if (!m(this, "trigger", a, c))return this;
                        var b = this._events[a], d = this._events.all;
                        return b && t(b, c), d && t(d, arguments), this
                    }, stopListening: function (a, c, d) {
                        var e = this._listeningTo;
                        if (!e)return this;
                        var f = !c && !d;
                        d || "object" != typeof c || (d = this);
                        a && ((e = {})[a._listenId] = a);
                        for (var m in e)a = e[m], a.off(c, d, this),
                        (f || b.isEmpty(a._events)) && delete this._listeningTo[m];
                        return this
                    }
                }, c = /\s+/, m = function (a, b, d, e) {
                    if (!d)return !0;
                    if ("object" == typeof d) {
                        for (var f in d)a[b].apply(a, [f, d[f]].concat(e));
                        return !1
                    }
                    if (c.test(d)) {
                        d = d.split(c);
                        f = 0;
                        for (var m = d.length; m > f; f++)a[b].apply(a, [d[f]].concat(e));
                        return !1
                    }
                    return !0
                }, t = function (a, c) {
                    var b, d = -1, e = a.length, f = c[0], m = c[1], p = c[2];
                    switch (c.length) {
                        case 0:
                            for (; ++d < e;)(b = a[d]).callback.call(b.ctx);
                            break;
                        case 1:
                            for (; ++d < e;)(b = a[d]).callback.call(b.ctx, f);
                            break;
                        case 2:
                            for (; ++d <
                                   e;)(b = a[d]).callback.call(b.ctx, f, m);
                            break;
                        case 3:
                            for (; ++d < e;)(b = a[d]).callback.call(b.ctx, f, m, p);
                            break;
                        default:
                            for (; ++d < e;)(b = a[d]).callback.apply(b.ctx, c)
                    }
                };
                b.each({listenTo: "on", listenToOnce: "once"}, function (c, d) {
                    a[d] = function (a, d, e) {
                        var f = this._listeningTo || (this._listeningTo = {}), m = a._listenId || (a._listenId = b.uniqueId("l"));
                        return f[m] = a, e || "object" != typeof d || (e = this), a[c](d, e, this), this
                    }
                });
                a.bind = a.on;
                a.unbind = a.off;
                b.extend(h, a);
                var p = h.Model = function (a, c) {
                    var d = a || {};
                    c || (c = {});
                    this.cid = b.uniqueId("c");
                    this.attributes = {};
                    c.collection && (this.collection = c.collection);
                    c.parse && (d = this.parse(d, c) || {});
                    d = b.defaults({}, d, b.result(this, "defaults"));
                    this.set(d, c);
                    this.changed = {};
                    this.initialize.apply(this, arguments)
                };
                b.extend(p.prototype, a, {
                    changed: null, validationError: null, idAttribute: "id", initialize: function () {
                    }, toJSON: function () {
                        return b.clone(this.attributes)
                    }, sync: function () {
                        return h.sync.apply(this, arguments)
                    }, get: function (a) {
                        return this.attributes[a]
                    }, escape: function (a) {
                        return b.escape(this.get(a))
                    },
                    has: function (a) {
                        return null != this.get(a)
                    }, set: function (a, c, d) {
                        var e, f, m, p, g, l, t;
                        if (null == a)return this;
                        if ("object" == typeof a ? (f = a, d = c) : (f = {})[a] = c, d || (d = {}), !this._validate(f, d))return !1;
                        m = d.unset;
                        p = d.silent;
                        a = [];
                        g = this._changing;
                        this._changing = !0;
                        g || (this._previousAttributes = b.clone(this.attributes), this.changed = {});
                        t = this.attributes;
                        l = this._previousAttributes;
                        this.idAttribute in f && (this.id = f[this.idAttribute]);
                        for (e in f)c = f[e], b.isEqual(t[e], c) || a.push(e), b.isEqual(l[e], c) ? delete this.changed[e] :
                            this.changed[e] = c, m ? delete t[e] : t[e] = c;
                        if (!p)for (a.length && (this._pending = d), c = 0, e = a.length; e > c; c++)this.trigger("change:" + a[c], this, t[a[c]], d);
                        if (g)return this;
                        if (!p)for (; this._pending;)d = this._pending, this._pending = !1, this.trigger("change", this, d);
                        return this._pending = !1, this._changing = !1, this
                    }, unset: function (a, c) {
                        return this.set(a, void 0, b.extend({}, c, {unset: !0}))
                    }, clear: function (a) {
                        var c = {}, d;
                        for (d in this.attributes)c[d] = void 0;
                        return this.set(c, b.extend({}, a, {unset: !0}))
                    }, hasChanged: function (a) {
                        return null ==
                        a ? !b.isEmpty(this.changed) : b.has(this.changed, a)
                    }, changedAttributes: function (a) {
                        if (!a)return this.hasChanged() ? b.clone(this.changed) : !1;
                        var c, d = !1, e = this._changing ? this._previousAttributes : this.attributes, f;
                        for (f in a)b.isEqual(e[f], c = a[f]) || ((d || (d = {}))[f] = c);
                        return d
                    }, previous: function (a) {
                        return null != a && this._previousAttributes ? this._previousAttributes[a] : null
                    }, previousAttributes: function () {
                        return b.clone(this._previousAttributes)
                    }, fetch: function (a) {
                        a = a ? b.clone(a) : {};
                        void 0 === a.parse && (a.parse = !0);
                        var c = this, d = a.success;
                        return a.success = function (b) {
                            return c.set(c.parse(b, a), a) ? (d && d(c, b, a), void c.trigger("sync", c, b, a)) : !1
                        }, K(this, a), this.sync("read", this, a)
                    }, save: function (a, c, d) {
                        var e, f, m, p = this.attributes;
                        if (null == a || "object" == typeof a ? (e = a, d = c) : (e = {})[a] = c, d = b.extend({validate: !0}, d), e && !d.wait) {
                            if (!this.set(e, d))return !1
                        } else if (!this._validate(e, d))return !1;
                        e && d.wait && (this.attributes = b.extend({}, p, e));
                        void 0 === d.parse && (d.parse = !0);
                        var g = this, l = d.success;
                        return d.success = function (a) {
                            g.attributes =
                                p;
                            var c = g.parse(a, d);
                            return d.wait && (c = b.extend(e || {}, c)), b.isObject(c) && !g.set(c, d) ? !1 : (l && l(g, a, d), void g.trigger("sync", g, a, d))
                        }, K(this, d), f = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" === f && (d.attrs = e), m = this.sync(f, this, d), e && d.wait && (this.attributes = p), m
                    }, destroy: function (a) {
                        a = a ? b.clone(a) : {};
                        var c = this, d = a.success, e = function () {
                            c.trigger("destroy", c, c.collection, a)
                        };
                        if (a.success = function (b) {
                                (a.wait || c.isNew()) && e();
                                d && d(c, b, a);
                                c.isNew() || c.trigger("sync", c, b, a)
                            }, this.isNew())return a.success(),
                            !1;
                        K(this, a);
                        var f = this.sync("delete", this, a);
                        return a.wait || e(), f
                    }, url: function () {
                        var a = b.result(this, "urlRoot") || b.result(this.collection, "url") || Y();
                        return this.isNew() ? a : a.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
                    }, parse: function (a) {
                        return a
                    }, clone: function () {
                        return new this.constructor(this.attributes)
                    }, isNew: function () {
                        return !this.has(this.idAttribute)
                    }, isValid: function (a) {
                        return this._validate({}, b.extend(a || {}, {validate: !0}))
                    }, _validate: function (a, c) {
                        if (!c.validate || !this.validate)return !0;
                        a = b.extend({}, this.attributes, a);
                        var d = this.validationError = this.validate(a, c) || null;
                        return d ? (this.trigger("invalid", this, d, b.extend(c, {validationError: d})), !1) : !0
                    }
                });
                b.each("keys values pairs invert pick omit".split(" "), function (a) {
                    p.prototype[a] = function () {
                        var c = e.call(arguments);
                        return c.unshift(this.attributes), b[a].apply(b, c)
                    }
                });
                var w = h.Collection = function (a, c) {
                    c || (c = {});
                    c.model && (this.model = c.model);
                    void 0 !== c.comparator && (this.comparator = c.comparator);
                    this._reset();
                    this.initialize.apply(this,
                        arguments);
                    a && this.reset(a, b.extend({silent: !0}, c))
                }, v = {add: !0, remove: !0, merge: !0}, l = {add: !0, remove: !1};
                b.extend(w.prototype, a, {
                    model: p, initialize: function () {
                    }, toJSON: function (a) {
                        return this.map(function (c) {
                            return c.toJSON(a)
                        })
                    }, sync: function () {
                        return h.sync.apply(this, arguments)
                    }, add: function (a, c) {
                        return this.set(a, b.extend({merge: !1}, c, l))
                    }, remove: function (a, c) {
                        var d = !b.isArray(a);
                        a = d ? [a] : b.clone(a);
                        c || (c = {});
                        var e, f, m, p;
                        e = 0;
                        for (f = a.length; f > e; e++)(p = a[e] = this.get(a[e])) && (delete this._byId[p.id],
                            delete this._byId[p.cid], m = this.indexOf(p), this.models.splice(m, 1), this.length--, c.silent || (c.index = m, p.trigger("remove", p, this, c)), this._removeReference(p, c));
                        return d ? a[0] : a
                    }, set: function (a, c) {
                        c = b.defaults({}, c, v);
                        c.parse && (a = this.parse(a, c));
                        var d = !b.isArray(a);
                        a = d ? a ? [a] : [] : b.clone(a);
                        var e, f, m, g, l, t, h, k = c.at, w = this.model, z = this.comparator && null == k && !1 !== c.sort, D = b.isString(this.comparator) ? this.comparator : null, L = [], n = [], q = {}, O = c.add, A = c.merge, G = c.remove, K = !z && O && G ? [] : !1;
                        e = 0;
                        for (f = a.length; f > e; e++) {
                            if (l =
                                    a[e] || {}, m = l instanceof p ? g = l : l[w.prototype.idAttribute || "id"], t = this.get(m))G && (q[t.cid] = !0), A && (l = l === g ? g.attributes : l, c.parse && (l = t.parse(l, c)), t.set(l, c), z && !h && t.hasChanged(D) && (h = !0)), a[e] = t; else if (O) {
                                if (g = a[e] = this._prepareModel(l, c), !g)continue;
                                L.push(g);
                                this._addReference(g, c)
                            }
                            g = t || g;
                            !K || !g.isNew() && q[g.id] || K.push(g);
                            q[g.id] = !0
                        }
                        if (G) {
                            e = 0;
                            for (f = this.length; f > e; ++e)q[(g = this.models[e]).cid] || n.push(g);
                            n.length && this.remove(n, c)
                        }
                        if (L.length || K && K.length)if (z && (h = !0), this.length += L.length,
                            null != k)for (e = 0, f = L.length; f > e; e++)this.models.splice(k + e, 0, L[e]); else for (K && (this.models.length = 0), m = K || L, e = 0, f = m.length; f > e; e++)this.models.push(m[e]);
                        if (h && this.sort({silent: !0}), !c.silent) {
                            e = 0;
                            for (f = L.length; f > e; e++)(g = L[e]).trigger("add", g, this, c);
                            (h || K && K.length) && this.trigger("sort", this, c)
                        }
                        return d ? a[0] : a
                    }, reset: function (a, c) {
                        c || (c = {});
                        for (var d = 0, e = this.models.length; e > d; d++)this._removeReference(this.models[d], c);
                        return c.previousModels = this.models, this._reset(), a = this.add(a, b.extend({silent: !0},
                            c)), c.silent || this.trigger("reset", this, c), a
                    }, push: function (a, c) {
                        return this.add(a, b.extend({at: this.length}, c))
                    }, pop: function (a) {
                        var c = this.at(this.length - 1);
                        return this.remove(c, a), c
                    }, unshift: function (a, c) {
                        return this.add(a, b.extend({at: 0}, c))
                    }, shift: function (a) {
                        var c = this.at(0);
                        return this.remove(c, a), c
                    }, slice: function () {
                        return e.apply(this.models, arguments)
                    }, get: function (a) {
                        return null == a ? void 0 : this._byId[a] || this._byId[a.id] || this._byId[a.cid]
                    }, at: function (a) {
                        return this.models[a]
                    }, where: function (a,
                                        c) {
                        return b.isEmpty(a) ? c ? void 0 : [] : this[c ? "find" : "filter"](function (c) {
                            for (var b in a)if (a[b] !== c.get(b))return !1;
                            return !0
                        })
                    }, findWhere: function (a) {
                        return this.where(a, !0)
                    }, sort: function (a) {
                        if (!this.comparator)throw Error("Cannot sort a set without a comparator");
                        return a || (a = {}), b.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(b.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
                    }, pluck: function (a) {
                        return b.invoke(this.models,
                            "get", a)
                    }, fetch: function (a) {
                        a = a ? b.clone(a) : {};
                        void 0 === a.parse && (a.parse = !0);
                        var c = a.success, d = this;
                        return a.success = function (b) {
                            d[a.reset ? "reset" : "set"](b, a);
                            c && c(d, b, a);
                            d.trigger("sync", d, b, a)
                        }, K(this, a), this.sync("read", this, a)
                    }, create: function (a, c) {
                        if (c = c ? b.clone(c) : {}, !(a = this._prepareModel(a, c)))return !1;
                        c.wait || this.add(a, c);
                        var d = this, e = c.success;
                        return c.success = function (a, b) {
                            c.wait && d.add(a, c);
                            e && e(a, b, c)
                        }, a.save(null, c), a
                    }, parse: function (a) {
                        return a
                    }, clone: function () {
                        return new this.constructor(this.models)
                    },
                    _reset: function () {
                        this.length = 0;
                        this.models = [];
                        this._byId = {}
                    }, _prepareModel: function (a, c) {
                        if (a instanceof p)return a;
                        c = c ? b.clone(c) : {};
                        c.collection = this;
                        var d = new this.model(a, c);
                        return d.validationError ? (this.trigger("invalid", this, d.validationError, c), !1) : d
                    }, _addReference: function (a) {
                        this._byId[a.cid] = a;
                        null != a.id && (this._byId[a.id] = a);
                        a.collection || (a.collection = this);
                        a.on("all", this._onModelEvent, this)
                    }, _removeReference: function (a) {
                        this === a.collection && delete a.collection;
                        a.off("all", this._onModelEvent,
                            this)
                    }, _onModelEvent: function (a, c, b, d) {
                        ("add" !== a && "remove" !== a || b === this) && ("destroy" === a && this.remove(c, d), c && a === "change:" + c.idAttribute && (delete this._byId[c.previous(c.idAttribute)], null != c.id && (this._byId[c.id] = c)), this.trigger.apply(this, arguments))
                    }
                });
                b.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without difference indexOf shuffle lastIndexOf isEmpty chain sample".split(" "),
                    function (a) {
                        w.prototype[a] = function () {
                            var c = e.call(arguments);
                            return c.unshift(this.models), b[a].apply(b, c)
                        }
                    });
                b.each(["groupBy", "countBy", "sortBy", "indexBy"], function (a) {
                    w.prototype[a] = function (c, d) {
                        var e = b.isFunction(c) ? c : function (a) {
                            return a.get(c)
                        };
                        return b[a](this.models, e, d)
                    }
                });
                g = h.View = function (a) {
                    this.cid = b.uniqueId("view");
                    a || (a = {});
                    b.extend(this, b.pick(a, n));
                    this._ensureElement();
                    this.initialize.apply(this, arguments);
                    this.delegateEvents()
                };
                var z = /^(\S+)\s*(.*)$/, n = "model collection el id attributes className tagName events".split(" ");
                b.extend(g.prototype, a, {
                    tagName: "div", $: function (a) {
                        return this.$el.find(a)
                    }, initialize: function () {
                    }, render: function () {
                        return this
                    }, remove: function () {
                        return this.$el.remove(), this.stopListening(), this
                    }, setElement: function (a, c) {
                        return this.$el && this.undelegateEvents(), this.$el = a instanceof h.$ ? a : h.$(a), this.el = this.$el[0], !1 !== c && this.delegateEvents(), this
                    }, delegateEvents: function (a) {
                        if (!a && !(a = b.result(this, "events")))return this;
                        this.undelegateEvents();
                        for (var c in a) {
                            var d = a[c];
                            if (b.isFunction(d) ||
                                (d = this[a[c]]), d) {
                                var e = c.match(z), f = e[1], e = e[2], d = b.bind(d, this), f = f + (".delegateEvents" + this.cid);
                                "" === e ? this.$el.on(f, d) : this.$el.on(f, e, d)
                            }
                        }
                        return this
                    }, undelegateEvents: function () {
                        return this.$el.off(".delegateEvents" + this.cid), this
                    }, _ensureElement: function () {
                        if (this.el)this.setElement(b.result(this, "el"), !1); else {
                            var a = b.extend({}, b.result(this, "attributes"));
                            this.id && (a.id = b.result(this, "id"));
                            this.className && (a["class"] = b.result(this, "className"));
                            a = h.$("<" + b.result(this, "tagName") + ">").attr(a);
                            this.setElement(a, !1)
                        }
                    }
                });
                h.sync = function (a, c, d) {
                    var e = A[a];
                    b.defaults(d || (d = {}), {emulateHTTP: h.emulateHTTP, emulateJSON: h.emulateJSON});
                    var f = {type: e, dataType: "json"};
                    if (d.url || (f.url = b.result(c, "url") || Y()), null != d.data || !c || "create" !== a && "update" !== a && "patch" !== a || (f.contentType = "application/json", f.data = JSON.stringify(d.attrs || c.toJSON(d))), d.emulateJSON && (f.contentType = "application/x-www-form-urlencoded", f.data = f.data ? {model: f.data} : {}), d.emulateHTTP && ("PUT" === e || "DELETE" === e || "PATCH" === e)) {
                        f.type =
                            "POST";
                        d.emulateJSON && (f.data._method = e);
                        var m = d.beforeSend;
                        d.beforeSend = function (a) {
                            return a.setRequestHeader("X-HTTP-Method-Override", e), m ? m.apply(this, arguments) : void 0
                        }
                    }
                    "GET" === f.type || d.emulateJSON || (f.processData = !1);
                    "PATCH" === f.type && D && (f.xhr = function () {
                        return new ActiveXObject("Microsoft.XMLHTTP")
                    });
                    a = d.xhr = h.ajax(b.extend(f, d));
                    return c.trigger("request", c, a, d), a
                };
                var D = !("undefined" == typeof q || !q.ActiveXObject || q.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent), A = {
                    create: "POST", update: "PUT",
                    patch: "PATCH", "delete": "DELETE", read: "GET"
                };
                h.ajax = function () {
                    return h.$.ajax.apply(h.$, arguments)
                };
                var f = h.Router = function (a) {
                    a || (a = {});
                    a.routes && (this.routes = a.routes);
                    this._bindRoutes();
                    this.initialize.apply(this, arguments)
                }, C = /\((.*?)\)/g, y = /(\(\?)?:\w+/g, F = /\*\w+/g, J = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                b.extend(f.prototype, a, {
                    initialize: function () {
                    }, route: function (a, c, d) {
                        b.isRegExp(a) || (a = this._routeToRegExp(a));
                        b.isFunction(c) && (d = c, c = "");
                        d || (d = this[c]);
                        var e = this;
                        return h.history.route(a, function (b) {
                            b =
                                e._extractParameters(a, b);
                            e.execute(d, b);
                            e.trigger.apply(e, ["route:" + c].concat(b));
                            e.trigger("route", c, b);
                            h.history.trigger("route", e, c, b)
                        }), this
                    }, execute: function (a, c) {
                        a && a.apply(this, c)
                    }, navigate: function (a, c) {
                        return h.history.navigate(a, c), this
                    }, _bindRoutes: function () {
                        if (this.routes) {
                            this.routes = b.result(this, "routes");
                            for (var a, c = b.keys(this.routes); null != (a = c.pop());)this.route(a, this.routes[a])
                        }
                    }, _routeToRegExp: function (a) {
                        return a = a.replace(J, "\\$&").replace(C, "(?:$1)?").replace(y, function (a,
                                                                                                   c) {
                            return c ? a : "([^/?]+)"
                        }).replace(F, "([^?]*?)"), new RegExp("^" + a + "(?:\\?([\\s\\S]*))?$")
                    }, _extractParameters: function (a, c) {
                        var d = a.exec(c).slice(1);
                        return b.map(d, function (a, c) {
                            return c === d.length - 1 ? a || null : a ? decodeURIComponent(a) : null
                        })
                    }
                });
                var I = h.History = function () {
                    this.handlers = [];
                    b.bindAll(this, "checkUrl");
                    "undefined" != typeof q && (this.location = q.location, this.history = q.history)
                }, L = /^[#\/]|\s+$/g, O = /^\/+|\/+$/g, G = /msie [\w.]+/, X = /\/$/, B = /#.*$/;
                I.started = !1;
                b.extend(I.prototype, a, {
                    interval: 50,
                    atRoot: function () {
                        return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
                    }, getHash: function (a) {
                        return (a = (a || this).location.href.match(/#(.*)$/)) ? a[1] : ""
                    }, getFragment: function (a, c) {
                        if (null == a)if (this._hasPushState || !this._wantsHashChange || c) {
                            a = decodeURI(this.location.pathname + this.location.search);
                            var b = this.root.replace(X, "");
                            a.indexOf(b) || (a = a.slice(b.length))
                        } else a = this.getHash();
                        return a.replace(L, "")
                    }, start: function (a) {
                        if (I.started)throw Error("Backbone.history has already been started");
                        I.started = !0;
                        this.options = b.extend({root: "/"}, this.options, a);
                        this.root = this.options.root;
                        this._wantsHashChange = !1 !== this.options.hashChange;
                        this._wantsPushState = !!this.options.pushState;
                        this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                        a = this.getFragment();
                        var c = r.documentMode, c = G.exec(navigator.userAgent.toLowerCase()) && (!c || 7 >= c);
                        if (this.root = ("/" + this.root + "/").replace(O, "/"), c && this._wantsHashChange)this.iframe = h.$('<iframe src="javascript:0" tabindex="-1">').hide().appendTo("body")[0].contentWindow,
                            this.navigate(a);
                        this._hasPushState ? h.$(q).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in q && !c ? h.$(q).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval));
                        this.fragment = a;
                        a = this.location;
                        if (this._wantsHashChange && this._wantsPushState) {
                            if (!this._hasPushState && !this.atRoot())return this.fragment = this.getFragment(null, !0), this.location.replace(this.root + "#" + this.fragment), !0;
                            this._hasPushState && this.atRoot() && a.hash &&
                            (this.fragment = this.getHash().replace(L, ""), this.history.replaceState({}, r.title, this.root + this.fragment))
                        }
                        return this.options.silent ? void 0 : this.loadUrl()
                    }, stop: function () {
                        h.$(q).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
                        this._checkUrlInterval && clearInterval(this._checkUrlInterval);
                        I.started = !1
                    }, route: function (a, c) {
                        this.handlers.unshift({route: a, callback: c})
                    }, checkUrl: function () {
                        var a = this.getFragment();
                        return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))),
                            a === this.fragment ? !1 : (this.iframe && this.navigate(a), void this.loadUrl())
                    }, loadUrl: function (a) {
                        return a = this.fragment = this.getFragment(a), b.any(this.handlers, function (c) {
                            return c.route.test(a) ? (c.callback(a), !0) : void 0
                        })
                    }, navigate: function (a, c) {
                        if (!I.started)return !1;
                        c && !0 !== c || (c = {trigger: !!c});
                        var b = this.root + (a = this.getFragment(a || ""));
                        if (a = a.replace(B, ""), this.fragment !== a) {
                            if (this.fragment = a, "" === a && "/" !== b && (b = b.slice(0, -1)), this._hasPushState)this.history[c.replace ? "replaceState" : "pushState"]({},
                                r.title, b); else {
                                if (!this._wantsHashChange)return this.location.assign(b);
                                this._updateHash(this.location, a, c.replace);
                                this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (c.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, c.replace))
                            }
                            return c.trigger ? this.loadUrl(a) : void 0
                        }
                    }, _updateHash: function (a, c, b) {
                        b ? (b = a.href.replace(/(javascript:|#).*$/, ""), a.replace(b + "#" + c)) : a.hash = "#" + c
                    }
                });
                h.history = new I;
                p.extend = w.extend = f.extend = g.extend = I.extend = function (a,
                                                                                 c) {
                    var d, e = this;
                    d = a && b.has(a, "constructor") ? a.constructor : function () {
                        return e.apply(this, arguments)
                    };
                    b.extend(d, e, c);
                    var f = function () {
                        this.constructor = d
                    };
                    return f.prototype = e.prototype, d.prototype = new f, a && b.extend(d.prototype, a), d.__super__ = e.prototype, d
                };
                var Y = function () {
                    throw Error('A "url" property or function must be specified');
                }, K = function (a, c) {
                    var b = c.error;
                    c.error = function (d) {
                        b && b(a, d, c);
                        a.trigger("error", a, d, c)
                    }
                };
                return h
            });
            (function (k, h) {
                if ("function" == typeof n.define && n.define.amd)n.define("marionette",
                    ["backbone", "underscore"], function (b, f) {
                        return k.Marionette = k.Mn = h(k, b, f)
                    }); else if ("undefined" != typeof exports) {
                    var b = require("backbone"), g = require("underscore");
                    module.exports = h(k, b, g)
                } else k.Marionette = k.Mn = h(k, k.Backbone, k._)
            })(this, function (k, h, b) {
                !function (a, c) {
                    var b = a.ChildViewContainer;
                    return a.ChildViewContainer = function (a, c) {
                        var b = function (a) {
                            this._views = {};
                            this._indexByModel = {};
                            this._indexByCustom = {};
                            this._updateLength();
                            c.each(a, this.add, this)
                        };
                        c.extend(b.prototype, {
                            add: function (a, c) {
                                var b =
                                    a.cid;
                                return this._views[b] = a, a.model && (this._indexByModel[a.model.cid] = b), c && (this._indexByCustom[c] = b), this._updateLength(), this
                            }, findByModel: function (a) {
                                return this.findByModelCid(a.cid)
                            }, findByModelCid: function (a) {
                                return this.findByCid(this._indexByModel[a])
                            }, findByCustom: function (a) {
                                return this.findByCid(this._indexByCustom[a])
                            }, findByIndex: function (a) {
                                return c.values(this._views)[a]
                            }, findByCid: function (a) {
                                return this._views[a]
                            }, remove: function (a) {
                                var b = a.cid;
                                return a.model && delete this._indexByModel[a.model.cid],
                                    c.any(this._indexByCustom, function (a, c) {
                                        return a === b ? (delete this._indexByCustom[c], !0) : void 0
                                    }, this), delete this._views[b], this._updateLength(), this
                            }, call: function (a) {
                                this.apply(a, c.tail(arguments))
                            }, apply: function (a, b) {
                                c.each(this._views, function (d) {
                                    c.isFunction(d[a]) && d[a].apply(d, b || [])
                                })
                            }, _updateLength: function () {
                                this.length = c.size(this._views)
                            }
                        });
                        return c.each("forEach each map find detect filter select reject every all some any include contains invoke toArray first initial rest last without isEmpty pluck".split(" "),
                            function (a) {
                                b.prototype[a] = function () {
                                    var b = [c.values(this._views)].concat(c.toArray(arguments));
                                    return c[a].apply(c, b)
                                }
                            }), b
                    }(a, c), a.ChildViewContainer.VERSION = "0.1.5", a.ChildViewContainer.noConflict = function () {
                        return a.ChildViewContainer = b, this
                    }, a.ChildViewContainer
                }(h, b);
                (function (a, c) {
                    var b = a.Wreqr, d = a.Wreqr = {};
                    return a.Wreqr.VERSION = "1.3.1", a.Wreqr.noConflict = function () {
                        return a.Wreqr = b, this
                    }, d.Handlers = function (a, c) {
                        var b = function (a) {
                            this.options = a;
                            this._wreqrHandlers = {};
                            c.isFunction(this.initialize) &&
                            this.initialize(a)
                        };
                        return b.extend = a.Model.extend, c.extend(b.prototype, a.Events, {
                            setHandlers: function (a) {
                                c.each(a, function (a, b) {
                                    var d = null;
                                    c.isObject(a) && !c.isFunction(a) && (d = a.context, a = a.callback);
                                    this.setHandler(b, a, d)
                                }, this)
                            }, setHandler: function (a, c, b) {
                                this._wreqrHandlers[a] = {callback: c, context: b};
                                this.trigger("handler:add", a, c, b)
                            }, hasHandler: function (a) {
                                return !!this._wreqrHandlers[a]
                            }, getHandler: function (a) {
                                var c = this._wreqrHandlers[a];
                                if (c)return function () {
                                    var a = Array.prototype.slice.apply(arguments);
                                    return c.callback.apply(c.context, a)
                                }
                            }, removeHandler: function (a) {
                                delete this._wreqrHandlers[a]
                            }, removeAllHandlers: function () {
                                this._wreqrHandlers = {}
                            }
                        }), b
                    }(a, c), d.CommandStorage = function () {
                        var b = function (a) {
                            this.options = a;
                            this._commands = {};
                            c.isFunction(this.initialize) && this.initialize(a)
                        };
                        return c.extend(b.prototype, a.Events, {
                            getCommands: function (a) {
                                var c = this._commands[a];
                                return c || (c = {command: a, instances: []}, this._commands[a] = c), c
                            }, addCommand: function (a, c) {
                                this.getCommands(a).instances.push(c)
                            },
                            clearCommands: function (a) {
                                this.getCommands(a).instances = []
                            }
                        }), b
                    }(), d.Commands = function (a) {
                        return a.Handlers.extend({
                            storageType: a.CommandStorage, constructor: function (c) {
                                this.options = c || {};
                                this._initializeStorage(this.options);
                                this.on("handler:add", this._executeCommands, this);
                                var b = Array.prototype.slice.call(arguments);
                                a.Handlers.prototype.constructor.apply(this, b)
                            }, execute: function (a, c) {
                                a = arguments[0];
                                c = Array.prototype.slice.call(arguments, 1);
                                this.hasHandler(a) ? this.getHandler(a).apply(this, c) : this.storage.addCommand(a,
                                    c)
                            }, _executeCommands: function (a, b, d) {
                                var e = this.storage.getCommands(a);
                                c.each(e.instances, function (a) {
                                    b.apply(d, a)
                                });
                                this.storage.clearCommands(a)
                            }, _initializeStorage: function (a) {
                                a = a.storageType || this.storageType;
                                this.storage = c.isFunction(a) ? new a : a
                            }
                        })
                    }(d), d.RequestResponse = function (a) {
                        return a.Handlers.extend({
                            request: function () {
                                var a = arguments[0], c = Array.prototype.slice.call(arguments, 1);
                                return this.hasHandler(a) ? this.getHandler(a).apply(this, c) : void 0
                            }
                        })
                    }(d), d.EventAggregator = function (a, c) {
                        var b =
                            function () {
                            };
                        return b.extend = a.Model.extend, c.extend(b.prototype, a.Events), b
                    }(a, c), d.Channel = function () {
                        var b = function (c) {
                            this.vent = new a.Wreqr.EventAggregator;
                            this.reqres = new a.Wreqr.RequestResponse;
                            this.commands = new a.Wreqr.Commands;
                            this.channelName = c
                        };
                        return c.extend(b.prototype, {
                            reset: function () {
                                return this.vent.off(), this.vent.stopListening(), this.reqres.removeAllHandlers(), this.commands.removeAllHandlers(), this
                            }, connectEvents: function (a, c) {
                                return this._connect("vent", a, c), this
                            }, connectCommands: function (a,
                                                          c) {
                                return this._connect("commands", a, c), this
                            }, connectRequests: function (a, c) {
                                return this._connect("reqres", a, c), this
                            }, _connect: function (a, b, d) {
                                if (b) {
                                    d = d || this;
                                    var e = "vent" === a ? "on" : "setHandler";
                                    c.each(b, function (b, f) {
                                        this[a][e](f, c.bind(b, d))
                                    }, this)
                                }
                            }
                        }), b
                    }(d), d.radio = function (a) {
                        var b = function () {
                            this._channels = {};
                            this.vent = {};
                            this.commands = {};
                            this.reqres = {};
                            this._proxyMethods()
                        };
                        c.extend(b.prototype, {
                            channel: function (a) {
                                if (!a)throw Error("Channel must receive a name");
                                return this._getChannel(a)
                            }, _getChannel: function (c) {
                                var b =
                                    this._channels[c];
                                return b || (b = new a.Channel(c), this._channels[c] = b), b
                            }, _proxyMethods: function () {
                                c.each(["vent", "commands", "reqres"], function (a) {
                                    c.each(d[a], function (c) {
                                        this[a][c] = e(this, a, c)
                                    }, this)
                                }, this)
                            }
                        });
                        var d = {
                            vent: "on off trigger once stopListening listenTo listenToOnce".split(" "),
                            commands: ["execute", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"],
                            reqres: ["request", "setHandler", "setHandlers", "removeHandler", "removeAllHandlers"]
                        }, e = function (a, c, b) {
                            return function (d) {
                                var e = a._getChannel(d)[c],
                                    f = Array.prototype.slice.call(arguments, 1);
                                return e[b].apply(e, f)
                            }
                        };
                        return new b
                    }(d), a.Wreqr
                })(h, b);
                var g = k.Marionette, d = h.Marionette = {};
                d.VERSION = "2.3.2";
                d.noConflict = function () {
                    return k.Marionette = g, this
                };
                h.Marionette = d;
                d.Deferred = h.$.Deferred;
                d.extend = h.Model.extend;
                d.isNodeAttached = function (a) {
                    return h.$.contains(r.documentElement, a)
                };
                d.getOption = function (a, c) {
                    return a && c ? a.options && void 0 !== a.options[c] ? a.options[c] : a[c] : void 0
                };
                d.proxyGetOption = function (a) {
                    return d.getOption(this, a)
                };
                d._getValue =
                    function (a, c, d) {
                        return b.isFunction(a) && (d = d || [], a = a.apply(c, d)), a
                    };
                d.normalizeMethods = function (a) {
                    return b.reduce(a, function (a, d, e) {
                        return b.isFunction(d) || (d = this[d]), d && (a[e] = d), a
                    }, {}, this)
                };
                d.normalizeUIString = function (a, c) {
                    return a.replace(/@ui\.[a-zA-Z_$0-9]*/g, function (a) {
                        return c[a.slice(4)]
                    })
                };
                d.normalizeUIKeys = function (a, c) {
                    return b.reduce(a, function (a, b, e) {
                        e = d.normalizeUIString(e, c);
                        return a[e] = b, a
                    }, {})
                };
                d.normalizeUIValues = function (a, c) {
                    return b.each(a, function (e, f) {
                        b.isString(e) && (a[f] =
                            d.normalizeUIString(e, c))
                    }), a
                };
                d.actAsCollection = function (a, c) {
                    b.each("forEach each map find detect filter select reject every all some any include contains invoke toArray first initial rest last without isEmpty pluck".split(" "), function (d) {
                        a[d] = function () {
                            var a = [b.values(b.result(this, c))].concat(b.toArray(arguments));
                            return b[d].apply(b, a)
                        }
                    })
                };
                var f = d.deprecate = function (a, c) {
                    b.isObject(a) && (a = a.prev + " is going to be removed in the future. Please use " + a.next + " instead." + (a.url ? " See: " + a.url : ""));
                    void 0 !== c && c || f._cache[a] || (f._warn("Deprecation warning: " + a), f._cache[a] = !0)
                };
                f._warn = "undefined" != typeof console && (console.warn || console.log) || function () {
                    };
                f._cache = {};
                d._triggerMethod = function () {
                    function a(a, c, b) {
                        return b.toUpperCase()
                    }

                    var c = /(^|:)(\w)/gi;
                    return function (d, e, f) {
                        var g = 3 > arguments.length;
                        g && (f = e, e = f[0]);
                        var h, l = "on" + e.replace(c, a), l = d[l];
                        return b.isFunction(l) && (h = l.apply(d, g ? b.rest(f) : f)), b.isFunction(d.trigger) && (1 < g + f.length ? d.trigger.apply(d, g ? f : [e].concat(b.rest(f, 0))) : d.trigger(e)),
                            h
                    }
                }();
                d.triggerMethod = function () {
                    return d._triggerMethod(this, arguments)
                };
                d.triggerMethodOn = function (a) {
                    return (b.isFunction(a.triggerMethod) ? a.triggerMethod : d.triggerMethod).apply(a, b.rest(arguments))
                };
                d.MonitorDOMRefresh = function (a) {
                    function c() {
                        a._isShown && a._isRendered && d.isNodeAttached(a.el) && b.isFunction(a.triggerMethod) && a.triggerMethod("dom:refresh")
                    }

                    a.on({
                        show: function () {
                            a._isShown = !0;
                            c()
                        }, render: function () {
                            a._isRendered = !0;
                            c()
                        }
                    })
                };
                (function (a) {
                    function c(c, d, e, f) {
                        f = f.split(/\s+/);
                        b.each(f,
                            function (b) {
                                var f = c[b];
                                if (!f)throw new a.Error('Method "' + b + '" was configured as an event handler, but does not exist.');
                                c.listenTo(d, e, f)
                            })
                    }

                    function d(a, c, b, e) {
                        a.listenTo(c, b, e)
                    }

                    function e(a, c, d, f) {
                        f = f.split(/\s+/);
                        b.each(f, function (b) {
                            a.stopListening(c, d, a[b])
                        })
                    }

                    function f(a, c, b, d) {
                        a.stopListening(c, b, d)
                    }

                    function g(c, d, e, f, m) {
                        if (d && e) {
                            if (!b.isObject(e))throw new a.Error({
                                message: "Bindings must be an object or function.",
                                url: "marionette.functions.html#marionettebindentityevents"
                            });
                            e = a._getValue(e,
                                c);
                            b.each(e, function (a, e) {
                                b.isFunction(a) ? f(c, d, e, a) : m(c, d, e, a)
                            })
                        }
                    }

                    a.bindEntityEvents = function (a, b, e) {
                        g(a, b, e, d, c)
                    };
                    a.unbindEntityEvents = function (a, c, b) {
                        g(a, c, b, f, e)
                    };
                    a.proxyBindEntityEvents = function (c, b) {
                        return a.bindEntityEvents(this, c, b)
                    };
                    a.proxyUnbindEntityEvents = function (c, b) {
                        return a.unbindEntityEvents(this, c, b)
                    }
                })(d);
                var e = "description fileName lineNumber name message number".split(" ");
                return d.Error = d.extend.call(Error, {
                    urlRoot: "http://marionettejs.com/docs/v" + d.VERSION + "/", constructor: function (a,
                                                                                                        c) {
                        b.isObject(a) ? (c = a, a = c.message) : c || (c = {});
                        var d = Error.call(this, a);
                        b.extend(this, b.pick(d, e), b.pick(c, e));
                        this.captureStackTrace();
                        c.url && (this.url = this.urlRoot + c.url)
                    }, captureStackTrace: function () {
                        Error.captureStackTrace && Error.captureStackTrace(this, d.Error)
                    }, toString: function () {
                        return this.name + ": " + this.message + (this.url ? " See: " + this.url : "")
                    }
                }), d.Error.extend = d.extend, d.Callbacks = function () {
                    this._deferred = d.Deferred();
                    this._callbacks = []
                }, b.extend(d.Callbacks.prototype, {
                    add: function (a, c) {
                        var d =
                            b.result(this._deferred, "promise");
                        this._callbacks.push({cb: a, ctx: c});
                        d.then(function (b) {
                            c && (b.context = c);
                            a.call(b.context, b.options)
                        })
                    }, run: function (a, c) {
                        this._deferred.resolve({options: a, context: c})
                    }, reset: function () {
                        var a = this._callbacks;
                        this._deferred = d.Deferred();
                        this._callbacks = [];
                        b.each(a, function (a) {
                            this.add(a.cb, a.ctx)
                        }, this)
                    }
                }), d.Controller = function (a) {
                    this.options = a || {};
                    b.isFunction(this.initialize) && this.initialize(this.options)
                }, d.Controller.extend = d.extend, b.extend(d.Controller.prototype,
                    h.Events, {
                        destroy: function () {
                            return d._triggerMethod(this, "before:destroy", arguments), d._triggerMethod(this, "destroy", arguments), this.stopListening(), this.off(), this
                        }, triggerMethod: d.triggerMethod, getOption: d.proxyGetOption
                    }), d.Object = function (a) {
                    this.options = b.extend({}, b.result(this, "options"), a);
                    this.initialize.apply(this, arguments)
                }, d.Object.extend = d.extend, b.extend(d.Object.prototype, h.Events, {
                    initialize: function () {
                    },
                    destroy: function () {
                        this.triggerMethod("before:destroy");
                        this.triggerMethod("destroy");
                        this.stopListening()
                    },
                    triggerMethod: d.triggerMethod,
                    getOption: d.proxyGetOption,
                    bindEntityEvents: d.proxyBindEntityEvents,
                    unbindEntityEvents: d.proxyUnbindEntityEvents
                }), d.Region = d.Object.extend({
                    constructor: function (a) {
                        if (this.options = a || {}, this.el = this.getOption("el"), this.el = this.el instanceof h.$ ? this.el[0] : this.el, !this.el)throw new d.Error({
                            name: "NoElError",
                            message: 'An "el" must be specified for a region.'
                        });
                        this.$el = this.getEl(this.el);
                        d.Object.call(this, a)
                    }, show: function (a, c) {
                        if (this._ensureElement()) {
                            this._ensureViewIsIntact(a);
                            var b = c || {}, e = a !== this.currentView, f = !!b.preventDestroy, g = !!b.forceShow, h = !!this.currentView, f = e && !f, e = e || g;
                            return (h && this.triggerMethod("before:swapOut", this.currentView, this, c), this.currentView && delete this.currentView._parent, f ? this.empty() : h && e && this.currentView.off("destroy", this.empty, this), e) ? (a.once("destroy", this.empty, this), a.render(), a._parent = this, h && this.triggerMethod("before:swap", a, this, c), this.triggerMethod("before:show", a, this, c), d.triggerMethodOn(a, "before:show", a, this, c), h && this.triggerMethod("swapOut",
                                this.currentView, this, c), e = d.isNodeAttached(this.el), g = [], f = b.triggerBeforeAttach || this.triggerBeforeAttach, b = b.triggerAttach || this.triggerAttach, e && f && (g = this._displayedViews(a), this._triggerAttach(g, "before:")), this.attachHtml(a), this.currentView = a, e && b && (g = this._displayedViews(a), this._triggerAttach(g)), h && this.triggerMethod("swap", a, this, c), this.triggerMethod("show", a, this, c), d.triggerMethodOn(a, "show", a, this, c), this) : this
                        }
                    }, triggerBeforeAttach: !0, triggerAttach: !0, _triggerAttach: function (a, c) {
                        var e =
                            (c || "") + "attach";
                        b.each(a, function (a) {
                            d.triggerMethodOn(a, e, a, this)
                        }, this)
                    }, _displayedViews: function (a) {
                        return b.union([a], b.result(a, "_getNestedViews") || [])
                    }, _ensureElement: function () {
                        if (b.isObject(this.el) || (this.$el = this.getEl(this.el), this.el = this.$el[0]), !this.$el || 0 === this.$el.length) {
                            if (this.getOption("allowMissingEl"))return !1;
                            throw new d.Error('An "el" ' + this.$el.selector + " must exist in DOM");
                        }
                        return !0
                    }, _ensureViewIsIntact: function (a) {
                        if (!a)throw new d.Error({
                            name: "ViewNotValid",
                            message: "The view passed is undefined and therefore invalid. You must pass a view instance to show."
                        });
                        if (a.isDestroyed)throw new d.Error({
                            name: "ViewDestroyedError",
                            message: 'View (cid: "' + a.cid + '") has already been destroyed and cannot be used.'
                        });
                    }, getEl: function (a) {
                        return h.$(a, d._getValue(this.options.parentEl, this))
                    }, attachHtml: function (a) {
                        this.$el.contents().detach();
                        this.el.appendChild(a.el)
                    }, empty: function () {
                        var a = this.currentView;
                        if (a)return a.off("destroy", this.empty, this), this.triggerMethod("before:empty", a), this._destroyView(), this.triggerMethod("empty", a), delete this.currentView, this
                    },
                    _destroyView: function () {
                        var a = this.currentView;
                        a.destroy && !a.isDestroyed ? a.destroy() : a.remove && (a.remove(), a.isDestroyed = !0)
                    }, attachView: function (a) {
                        return this.currentView = a, this
                    }, hasView: function () {
                        return !!this.currentView
                    }, reset: function () {
                        return this.empty(), this.$el && (this.el = this.$el.selector), delete this.$el, this
                    }
                }, {
                    buildRegion: function (a, c) {
                        if (b.isString(a))return this._buildRegionFromSelector(a, c);
                        if (a.selector || a.el || a.regionClass)return this._buildRegionFromObject(a, c);
                        if (b.isFunction(a))return this._buildRegionFromRegionClass(a);
                        throw new d.Error({
                            message: "Improper region configuration type.",
                            url: "marionette.region.html#region-configuration-types"
                        });
                    }, _buildRegionFromSelector: function (a, c) {
                        return new c({el: a})
                    }, _buildRegionFromObject: function (a, c) {
                        var d = a.regionClass || c, e = b.omit(a, "selector", "regionClass");
                        return a.selector && !e.el && (e.el = a.selector), new d(e)
                    }, _buildRegionFromRegionClass: function (a) {
                        return new a
                    }
                }), d.RegionManager = d.Controller.extend({
                    constructor: function (a) {
                        this._regions = {};
                        d.Controller.call(this, a);
                        this.addRegions(this.getOption("regions"))
                    },
                    addRegions: function (a, c) {
                        return a = d._getValue(a, this, arguments), b.reduce(a, function (a, d, e) {
                            return b.isString(d) && (d = {selector: d}), d.selector && (d = b.defaults({}, d, c)), a[e] = this.addRegion(e, d), a
                        }, {}, this)
                    }, addRegion: function (a, c) {
                        var b;
                        return b = c instanceof d.Region ? c : d.Region.buildRegion(c, d.Region), this.triggerMethod("before:add:region", a, b), b._parent = this, this._store(a, b), this.triggerMethod("add:region", a, b), b
                    }, get: function (a) {
                        return this._regions[a]
                    }, getRegions: function () {
                        return b.clone(this._regions)
                    },
                    removeRegion: function (a) {
                        var c = this._regions[a];
                        return this._remove(a, c), c
                    }, removeRegions: function () {
                        var a = this.getRegions();
                        return b.each(this._regions, function (a, b) {
                            this._remove(b, a)
                        }, this), a
                    }, emptyRegions: function () {
                        var a = this.getRegions();
                        return b.invoke(a, "empty"), a
                    }, destroy: function () {
                        return this.removeRegions(), d.Controller.prototype.destroy.apply(this, arguments)
                    }, _store: function (a, c) {
                        this._regions[a] = c;
                        this._setLength()
                    }, _remove: function (a, c) {
                        this.triggerMethod("before:remove:region", a, c);
                        c.empty();
                        c.stopListening();
                        delete c._parent;
                        delete this._regions[a];
                        this._setLength();
                        this.triggerMethod("remove:region", a, c)
                    }, _setLength: function () {
                        this.length = b.size(this._regions)
                    }
                }), d.actAsCollection(d.RegionManager.prototype, "_regions"), d.TemplateCache = function (a) {
                    this.templateId = a
                }, b.extend(d.TemplateCache, {
                    templateCaches: {}, get: function (a) {
                        var c = this.templateCaches[a];
                        return c || (c = new d.TemplateCache(a), this.templateCaches[a] = c), c.load()
                    }, clear: function () {
                        var a, c = b.toArray(arguments), d = c.length;
                        if (0 < d)for (a = 0; d > a; a++)delete this.templateCaches[c[a]]; else this.templateCaches = {}
                    }
                }), b.extend(d.TemplateCache.prototype, {
                    load: function () {
                        if (this.compiledTemplate)return this.compiledTemplate;
                        var a = this.loadTemplate(this.templateId);
                        return this.compiledTemplate = this.compileTemplate(a), this.compiledTemplate
                    }, loadTemplate: function (a) {
                        var c = h.$(a).html();
                        if (!c || 0 === c.length)throw new d.Error({
                            name: "NoTemplateError",
                            message: 'Could not find template: "' + a + '"'
                        });
                        return c
                    }, compileTemplate: function (a) {
                        return b.template(a)
                    }
                }),
                    d.Renderer = {
                        render: function (a, c) {
                            if (!a)throw new d.Error({
                                name: "TemplateNotFoundError",
                                message: "Cannot render the template since its false, null or undefined."
                            });
                            return (b.isFunction(a) ? a : d.TemplateCache.get(a))(c)
                        }
                    }, d.View = h.View.extend({
                    isDestroyed: !1,
                    constructor: function (a) {
                        b.bindAll(this, "render");
                        a = d._getValue(a, this);
                        this.options = b.extend({}, b.result(this, "options"), a);
                        this._behaviors = d.Behaviors(this);
                        h.View.apply(this, arguments);
                        d.MonitorDOMRefresh(this);
                        this.on("show", this.onShowCalled)
                    },
                    getTemplate: function () {
                        return this.getOption("template")
                    },
                    serializeModel: function (a) {
                        return a.toJSON.apply(a, b.rest(arguments))
                    },
                    mixinTemplateHelpers: function (a) {
                        a = a || {};
                        var c = this.getOption("templateHelpers");
                        return c = d._getValue(c, this), b.extend(a, c)
                    },
                    normalizeUIKeys: function (a) {
                        var c = b.result(this, "_uiBindings");
                        return d.normalizeUIKeys(a, c || b.result(this, "ui"))
                    },
                    normalizeUIValues: function (a) {
                        var c = b.result(this, "ui"), e = b.result(this, "_uiBindings");
                        return d.normalizeUIValues(a, e || c)
                    },
                    configureTriggers: function () {
                        if (this.triggers) {
                            var a =
                                this.normalizeUIKeys(b.result(this, "triggers"));
                            return b.reduce(a, function (a, b, d) {
                                return a[d] = this._buildViewTrigger(b), a
                            }, {}, this)
                        }
                    },
                    delegateEvents: function (a) {
                        return this._delegateDOMEvents(a), this.bindEntityEvents(this.model, this.getOption("modelEvents")), this.bindEntityEvents(this.collection, this.getOption("collectionEvents")), b.each(this._behaviors, function (a) {
                            a.bindEntityEvents(this.model, a.getOption("modelEvents"));
                            a.bindEntityEvents(this.collection, a.getOption("collectionEvents"))
                        }, this),
                            this
                    },
                    _delegateDOMEvents: function (a) {
                        var c = d._getValue(a || this.events, this), c = this.normalizeUIKeys(c);
                        b.isUndefined(a) && (this.events = c);
                        a = {};
                        var e = b.result(this, "behaviorEvents") || {}, f = this.configureTriggers(), g = b.result(this, "behaviorTriggers") || {};
                        b.extend(a, e, c, f, g);
                        h.View.prototype.delegateEvents.call(this, a)
                    },
                    undelegateEvents: function () {
                        return h.View.prototype.undelegateEvents.apply(this, arguments), this.unbindEntityEvents(this.model, this.getOption("modelEvents")), this.unbindEntityEvents(this.collection,
                            this.getOption("collectionEvents")), b.each(this._behaviors, function (a) {
                            a.unbindEntityEvents(this.model, a.getOption("modelEvents"));
                            a.unbindEntityEvents(this.collection, a.getOption("collectionEvents"))
                        }, this), this
                    },
                    onShowCalled: function () {
                    },
                    _ensureViewIsIntact: function () {
                        if (this.isDestroyed)throw new d.Error({
                            name: "ViewDestroyedError",
                            message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
                        });
                    },
                    destroy: function () {
                        if (!this.isDestroyed) {
                            var a = b.toArray(arguments);
                            return this.triggerMethod.apply(this,
                                ["before:destroy"].concat(a)), this.isDestroyed = !0, this.triggerMethod.apply(this, ["destroy"].concat(a)), this.unbindUIElements(), this.remove(), b.invoke(this._behaviors, "destroy", a), this
                        }
                    },
                    bindUIElements: function () {
                        this._bindUIElements();
                        b.invoke(this._behaviors, this._bindUIElements)
                    },
                    _bindUIElements: function () {
                        if (this.ui) {
                            this._uiBindings || (this._uiBindings = this.ui);
                            var a = b.result(this, "_uiBindings");
                            this.ui = {};
                            b.each(a, function (a, b) {
                                this.ui[b] = this.$(a)
                            }, this)
                        }
                    },
                    unbindUIElements: function () {
                        this._unbindUIElements();
                        b.invoke(this._behaviors, this._unbindUIElements)
                    },
                    _unbindUIElements: function () {
                        this.ui && this._uiBindings && (b.each(this.ui, function (a, c) {
                            delete this.ui[c]
                        }, this), this.ui = this._uiBindings, delete this._uiBindings)
                    },
                    _buildViewTrigger: function (a) {
                        var c = b.isObject(a), d = b.defaults({}, c ? a : {}, {
                            preventDefault: !0,
                            stopPropagation: !0
                        }), e = c ? d.event : a;
                        return function (a) {
                            a && (a.preventDefault && d.preventDefault && a.preventDefault(), a.stopPropagation && d.stopPropagation && a.stopPropagation());
                            this.triggerMethod(e, {
                                view: this,
                                model: this.model, collection: this.collection
                            })
                        }
                    },
                    setElement: function () {
                        var a = h.View.prototype.setElement.apply(this, arguments);
                        return b.invoke(this._behaviors, "proxyViewProperties", this), a
                    },
                    triggerMethod: function () {
                        for (var a = d._triggerMethod, c = a(this, arguments), b = this._behaviors, e = 0, f = b && b.length; f > e; e++)a(b[e], arguments);
                        return c
                    },
                    _getImmediateChildren: function () {
                        return []
                    },
                    _getNestedViews: function () {
                        var a = this._getImmediateChildren();
                        return a.length ? b.reduce(a, function (a, b) {
                            return b._getNestedViews ?
                                a.concat(b._getNestedViews()) : a
                        }, a) : a
                    },
                    normalizeMethods: d.normalizeMethods,
                    getOption: d.proxyGetOption,
                    bindEntityEvents: d.proxyBindEntityEvents,
                    unbindEntityEvents: d.proxyUnbindEntityEvents
                }), d.ItemView = d.View.extend({
                    constructor: function () {
                        d.View.apply(this, arguments)
                    }, serializeData: function () {
                        if (!this.model && !this.collection)return {};
                        var a = [this.model || this.collection];
                        return arguments.length && a.push.apply(a, arguments), this.model ? this.serializeModel.apply(this, a) : {
                            items: this.serializeCollection.apply(this,
                                a)
                        }
                    }, serializeCollection: function (a) {
                        return a.toJSON.apply(a, b.rest(arguments))
                    }, render: function () {
                        return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderTemplate(), this.bindUIElements(), this.triggerMethod("render", this), this
                    }, _renderTemplate: function () {
                        var a = this.getTemplate();
                        if (!1 !== a) {
                            if (!a)throw new d.Error({
                                name: "UndefinedTemplateError",
                                message: "Cannot render the template since it is null or undefined."
                            });
                            var c = this.serializeData(), c = this.mixinTemplateHelpers(c),
                                a = d.Renderer.render(a, c, this);
                            return this.attachElContent(a), this
                        }
                    }, attachElContent: function (a) {
                        return this.$el.html(a), this
                    }
                }), d.CollectionView = d.View.extend({
                    childViewEventPrefix: "childview", constructor: function (a) {
                        var c = a || {};
                        b.isUndefined(this.sort) && (this.sort = b.isUndefined(c.sort) ? !0 : c.sort);
                        this.once("render", this._initialEvents);
                        this._initChildViewStorage();
                        d.View.apply(this, arguments);
                        this.initRenderBuffer()
                    }, initRenderBuffer: function () {
                        this.elBuffer = r.createDocumentFragment();
                        this._bufferedChildren =
                            []
                    }, startBuffering: function () {
                        this.initRenderBuffer();
                        this.isBuffering = !0
                    }, endBuffering: function () {
                        this.isBuffering = !1;
                        this._triggerBeforeShowBufferedChildren();
                        this.attachBuffer(this, this.elBuffer);
                        this._triggerShowBufferedChildren();
                        this.initRenderBuffer()
                    }, _triggerBeforeShowBufferedChildren: function () {
                        this._isShown && b.each(this._bufferedChildren, b.partial(this._triggerMethodOnChild, "before:show"))
                    }, _triggerShowBufferedChildren: function () {
                        this._isShown && (b.each(this._bufferedChildren, b.partial(this._triggerMethodOnChild,
                            "show")), this._bufferedChildren = [])
                    }, _triggerMethodOnChild: function (a, c) {
                        d.triggerMethodOn(c, a)
                    }, _initialEvents: function () {
                        this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection, "reset", this.render), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                    }, _onCollectionAdd: function (a) {
                        this.destroyEmptyView();
                        var c = this.getChildView(a), b = this.collection.indexOf(a);
                        this.addChild(a,
                            c, b)
                    }, _onCollectionRemove: function (a) {
                        a = this.children.findByModel(a);
                        this.removeChildView(a);
                        this.checkEmpty()
                    }, onShowCalled: function () {
                        this.children.each(b.partial(this._triggerMethodOnChild, "show"))
                    }, render: function () {
                        return this._ensureViewIsIntact(), this.triggerMethod("before:render", this), this._renderChildren(), this.triggerMethod("render", this), this
                    }, resortView: function () {
                        this.render()
                    }, _sortViews: function () {
                        this.collection.find(function (a, c) {
                            var b = this.children.findByModel(a);
                            return !b || b._index !==
                                c
                        }, this) && this.resortView()
                    }, _emptyViewIndex: -1, _renderChildren: function () {
                        this.destroyEmptyView();
                        this.destroyChildren();
                        this.isEmpty(this.collection) ? this.showEmptyView() : (this.triggerMethod("before:render:collection", this), this.startBuffering(), this.showCollection(), this.endBuffering(), this.triggerMethod("render:collection", this))
                    }, showCollection: function () {
                        var a;
                        this.collection.each(function (c, b) {
                            a = this.getChildView(c);
                            this.addChild(c, a, b)
                        }, this)
                    }, showEmptyView: function () {
                        var a = this.getEmptyView();
                        if (a && !this._showingEmptyView) {
                            this.triggerMethod("before:render:empty");
                            this._showingEmptyView = !0;
                            var c = new h.Model;
                            this.addEmptyView(c, a);
                            this.triggerMethod("render:empty")
                        }
                    }, destroyEmptyView: function () {
                        this._showingEmptyView && (this.triggerMethod("before:remove:empty"), this.destroyChildren(), delete this._showingEmptyView, this.triggerMethod("remove:empty"))
                    }, getEmptyView: function () {
                        return this.getOption("emptyView")
                    }, addEmptyView: function (a, c) {
                        var e = this.getOption("emptyViewOptions") || this.getOption("childViewOptions");
                        b.isFunction(e) && (e = e.call(this, a, this._emptyViewIndex));
                        e = this.buildChildView(a, c, e);
                        e._parent = this;
                        this.proxyChildEvents(e);
                        this._isShown && d.triggerMethodOn(e, "before:show");
                        this.children.add(e);
                        this.renderChildView(e, this._emptyViewIndex);
                        this._isShown && d.triggerMethodOn(e, "show")
                    }, getChildView: function () {
                        var a = this.getOption("childView");
                        if (!a)throw new d.Error({
                            name: "NoChildViewError",
                            message: 'A "childView" must be specified'
                        });
                        return a
                    }, addChild: function (a, c, b) {
                        var e = this.getOption("childViewOptions"),
                            e = d._getValue(e, this, [a, b]);
                        a = this.buildChildView(a, c, e);
                        return this._updateIndices(a, !0, b), this._addChildView(a, b), a._parent = this, a
                    }, _updateIndices: function (a, c, b) {
                        this.sort && (c && (a._index = b), this.children.each(function (b) {
                            b._index >= a._index && (b._index += c ? 1 : -1)
                        }))
                    }, _addChildView: function (a, c) {
                        this.proxyChildEvents(a);
                        this.triggerMethod("before:add:child", a);
                        this.children.add(a);
                        this.renderChildView(a, c);
                        this._isShown && !this.isBuffering && d.triggerMethodOn(a, "show");
                        this.triggerMethod("add:child",
                            a)
                    }, renderChildView: function (a, c) {
                        return a.render(), this.attachHtml(this, a, c), a
                    }, buildChildView: function (a, c, d) {
                        a = b.extend({model: a}, d);
                        return new c(a)
                    }, removeChildView: function (a) {
                        return a && (this.triggerMethod("before:remove:child", a), a.destroy ? a.destroy() : a.remove && a.remove(), delete a._parent, this.stopListening(a), this.children.remove(a), this.triggerMethod("remove:child", a), this._updateIndices(a, !1)), a
                    }, isEmpty: function () {
                        return !this.collection || 0 === this.collection.length
                    }, checkEmpty: function () {
                        this.isEmpty(this.collection) &&
                        this.showEmptyView()
                    }, attachBuffer: function (a, c) {
                        a.$el.append(c)
                    }, attachHtml: function (a, c, b) {
                        a.isBuffering ? (a.elBuffer.appendChild(c.el), a._bufferedChildren.push(c)) : a._insertBefore(c, b) || a._insertAfter(c)
                    }, _insertBefore: function (a, c) {
                        var b;
                        return this.sort && c < this.children.length - 1 && (b = this.children.find(function (a) {
                            return a._index === c + 1
                        })), b ? (b.$el.before(a.el), !0) : !1
                    }, _insertAfter: function (a) {
                        this.$el.append(a.el)
                    }, _initChildViewStorage: function () {
                        this.children = new h.ChildViewContainer
                    }, destroy: function () {
                        return this.isDestroyed ?
                            void 0 : (this.triggerMethod("before:destroy:collection"), this.destroyChildren(), this.triggerMethod("destroy:collection"), d.View.prototype.destroy.apply(this, arguments))
                    }, destroyChildren: function () {
                        var a = this.children.map(b.identity);
                        return this.children.each(this.removeChildView, this), this.checkEmpty(), a
                    }, proxyChildEvents: function (a) {
                        var c = this.getOption("childViewEventPrefix");
                        this.listenTo(a, "all", function () {
                            var d = b.toArray(arguments), e = d[0], f = this.normalizeMethods(b.result(this, "childEvents"));
                            d[0] = c + ":" + e;
                            d.splice(1, 0, a);
                            "undefined" != typeof f && b.isFunction(f[e]) && f[e].apply(this, d.slice(1));
                            this.triggerMethod.apply(this, d)
                        }, this)
                    }, _getImmediateChildren: function () {
                        return b.values(this.children._views)
                    }
                }), d.CompositeView = d.CollectionView.extend({
                    constructor: function () {
                        d.CollectionView.apply(this, arguments)
                    }, _initialEvents: function () {
                        this.collection && (this.listenTo(this.collection, "add", this._onCollectionAdd), this.listenTo(this.collection, "remove", this._onCollectionRemove), this.listenTo(this.collection,
                            "reset", this._renderChildren), this.sort && this.listenTo(this.collection, "sort", this._sortViews))
                    }, getChildView: function () {
                        return this.getOption("childView") || this.constructor
                    }, serializeData: function () {
                        var a = {};
                        return this.model && (a = b.partial(this.serializeModel, this.model).apply(this, arguments)), a
                    }, render: function () {
                        return this._ensureViewIsIntact(), this.isRendered = !0, this.resetChildViewContainer(), this.triggerMethod("before:render", this), this._renderTemplate(), this._renderChildren(), this.triggerMethod("render",
                            this), this
                    }, _renderChildren: function () {
                        this.isRendered && d.CollectionView.prototype._renderChildren.call(this)
                    }, _renderTemplate: function () {
                        var a = {}, a = this.serializeData(), a = this.mixinTemplateHelpers(a);
                        this.triggerMethod("before:render:template");
                        var c = this.getTemplate(), a = d.Renderer.render(c, a, this);
                        this.attachElContent(a);
                        this.bindUIElements();
                        this.triggerMethod("render:template")
                    }, attachElContent: function (a) {
                        return this.$el.html(a), this
                    }, attachBuffer: function (a, c) {
                        this.getChildViewContainer(a).append(c)
                    },
                    _insertAfter: function (a) {
                        this.getChildViewContainer(this, a).append(a.el)
                    }, getChildViewContainer: function (a) {
                        if ("$childViewContainer" in a)return a.$childViewContainer;
                        var c, b = d.getOption(a, "childViewContainer");
                        if (b) {
                            if (b = d._getValue(b, a), c = "@" === b.charAt(0) && a.ui ? a.ui[b.substr(4)] : a.$(b), 0 >= c.length)throw new d.Error({
                                name: "ChildViewContainerMissingError",
                                message: 'The specified "childViewContainer" was not found: ' + a.childViewContainer
                            });
                        } else c = a.$el;
                        return a.$childViewContainer = c, c
                    }, resetChildViewContainer: function () {
                        this.$childViewContainer && delete this.$childViewContainer
                    }
                }), d.LayoutView = d.ItemView.extend({
                    regionClass: d.Region, constructor: function (a) {
                        a = a || {};
                        this._firstRender = !0;
                        this._initializeRegions(a);
                        d.ItemView.call(this, a)
                    }, render: function () {
                        return this._ensureViewIsIntact(), this._firstRender ? this._firstRender = !1 : this._reInitializeRegions(), d.ItemView.prototype.render.apply(this, arguments)
                    }, destroy: function () {
                        return this.isDestroyed ? this : (this.regionManager.destroy(), d.ItemView.prototype.destroy.apply(this, arguments))
                    }, addRegion: function (a,
                                            c) {
                        var b = {};
                        return b[a] = c, this._buildRegions(b)[a]
                    }, addRegions: function (a) {
                        return this.regions = b.extend({}, this.regions, a), this._buildRegions(a)
                    }, removeRegion: function (a) {
                        return delete this.regions[a], this.regionManager.removeRegion(a)
                    }, getRegion: function (a) {
                        return this.regionManager.get(a)
                    }, getRegions: function () {
                        return this.regionManager.getRegions()
                    }, _buildRegions: function (a) {
                        var c = {regionClass: this.getOption("regionClass"), parentEl: b.partial(b.result, this, "el")};
                        return this.regionManager.addRegions(a,
                            c)
                    }, _initializeRegions: function (a) {
                        var c;
                        this._initRegionManager();
                        c = d._getValue(this.regions, this, [a]) || {};
                        var e = this.getOption.call(a, "regions"), e = d._getValue(e, this, [a]);
                        b.extend(c, e);
                        c = this.normalizeUIValues(c);
                        this.addRegions(c)
                    }, _reInitializeRegions: function () {
                        this.regionManager.invoke("reset")
                    }, getRegionManager: function () {
                        return new d.RegionManager
                    }, _initRegionManager: function () {
                        this.regionManager = this.getRegionManager();
                        this.regionManager._parent = this;
                        this.listenTo(this.regionManager, "before:add:region",
                            function (a) {
                                this.triggerMethod("before:add:region", a)
                            });
                        this.listenTo(this.regionManager, "add:region", function (a, c) {
                            this[a] = c;
                            this.triggerMethod("add:region", a, c)
                        });
                        this.listenTo(this.regionManager, "before:remove:region", function (a) {
                            this.triggerMethod("before:remove:region", a)
                        });
                        this.listenTo(this.regionManager, "remove:region", function (a, c) {
                            delete this[a];
                            this.triggerMethod("remove:region", a, c)
                        })
                    }, _getImmediateChildren: function () {
                        return b.chain(this.regionManager.getRegions()).pluck("currentView").compact().value()
                    }
                }),
                    d.Behavior = d.Object.extend({
                        constructor: function (a, c) {
                            this.view = c;
                            this.defaults = b.result(this, "defaults") || {};
                            this.options = b.extend({}, this.defaults, a);
                            d.Object.apply(this, arguments)
                        }, $: function () {
                            return this.view.$.apply(this.view, arguments)
                        }, destroy: function () {
                            this.stopListening()
                        }, proxyViewProperties: function (a) {
                            this.$el = a.$el;
                            this.el = a.el
                        }
                    }), d.Behaviors = function (a, c) {
                    function b(a, d) {
                        return c.isObject(a.behaviors) ? (d = b.parseBehaviors(a, d || c.result(a, "behaviors")), b.wrap(a, d, c.keys(f)), d) : {}
                    }

                    function d(a,
                               b) {
                        this._view = a;
                        this._viewUI = c.result(a, "ui");
                        this._behaviors = b;
                        this._triggers = {}
                    }

                    var e = /^(\S+)\s*(.*)$/, f = {
                        behaviorTriggers: function (a, c) {
                            return (new d(this, c)).buildBehaviorTriggers()
                        }, behaviorEvents: function (b, d) {
                            var f = {}, m = this._uiBindings || c.result(this, "ui");
                            return c.each(d, function (b, d) {
                                var g = {}, h = c.clone(c.result(b, "events")) || {}, l = b._uiBindings || c.result(b, "ui"), l = c.extend({}, m, l), h = a.normalizeUIKeys(h, l), k = 0;
                                c.each(h, function (a, f) {
                                    var m = f.match(e), m = m[1] + "." + [this.cid, d, k++, " "].join("") +
                                        m[2], h = c.isFunction(a) ? a : b[a];
                                    g[m] = c.bind(h, b)
                                }, this);
                                f = c.extend(f, g)
                            }, this), f
                        }
                    };
                    return c.extend(b, {
                        behaviorsLookup: function () {
                            throw new a.Error({
                                message: "You must define where your behaviors are stored.",
                                url: "marionette.behaviors.html#behaviorslookup"
                            });
                        }, getBehaviorClass: function (c, d) {
                            return c.behaviorClass ? c.behaviorClass : a._getValue(b.behaviorsLookup, this, [c, d])[d]
                        }, parseBehaviors: function (a, d) {
                            return c.chain(d).map(function (d, e) {
                                var f = new (b.getBehaviorClass(d, e))(d, a), g = b.parseBehaviors(a, c.result(f,
                                    "behaviors"));
                                return [f].concat(g)
                            }).flatten().value()
                        }, wrap: function (a, b, d) {
                            c.each(d, function (d) {
                                a[d] = c.partial(f[d], a[d], b)
                            })
                        }
                    }), c.extend(d.prototype, {
                        buildBehaviorTriggers: function () {
                            return c.each(this._behaviors, this._buildTriggerHandlersForBehavior, this), this._triggers
                        }, _buildTriggerHandlersForBehavior: function (b, d) {
                            var e = c.extend({}, this._viewUI, c.result(b, "ui")), f = c.clone(c.result(b, "triggers")) || {}, f = a.normalizeUIKeys(f, e);
                            c.each(f, c.bind(this._setHandlerForBehavior, this, b, d))
                        }, _setHandlerForBehavior: function (a,
                                                             c, b, d) {
                            a = d.replace(/^\S+/, function (a) {
                                return a + ".behaviortriggers" + c
                            });
                            this._triggers[a] = this._view._buildViewTrigger(b)
                        }
                    }), b
                }(d, b), d.AppRouter = h.Router.extend({
                    constructor: function (a) {
                        this.options = a || {};
                        h.Router.apply(this, arguments);
                        var c = this.getOption("appRoutes"), b = this._getController();
                        this.processAppRoutes(b, c);
                        this.on("route", this._processOnRoute, this)
                    },
                    appRoute: function (a, c) {
                        var b = this._getController();
                        this._addAppRoute(b, a, c)
                    },
                    _processOnRoute: function (a, c) {
                        if (b.isFunction(this.onRoute)) {
                            var d =
                                b.invert(this.getOption("appRoutes"))[a];
                            this.onRoute(a, d, c)
                        }
                    },
                    processAppRoutes: function (a, c) {
                        if (c) {
                            var d = b.keys(c).reverse();
                            b.each(d, function (b) {
                                this._addAppRoute(a, b, c[b])
                            }, this)
                        }
                    },
                    _getController: function () {
                        return this.getOption("controller")
                    },
                    _addAppRoute: function (a, c, e) {
                        var f = a[e];
                        if (!f)throw new d.Error('Method "' + e + '" was not found on the controller');
                        this.route(c, e, b.bind(f, a))
                    },
                    getOption: d.proxyGetOption,
                    triggerMethod: d.triggerMethod,
                    bindEntityEvents: d.proxyBindEntityEvents,
                    unbindEntityEvents: d.proxyUnbindEntityEvents
                }),
                    d.Application = d.Object.extend({
                        constructor: function (a) {
                            this._initializeRegions(a);
                            this._initCallbacks = new d.Callbacks;
                            this.submodules = {};
                            b.extend(this, a);
                            this._initChannel();
                            d.Object.call(this, a)
                        }, execute: function () {
                            this.commands.execute.apply(this.commands, arguments)
                        }, request: function () {
                            return this.reqres.request.apply(this.reqres, arguments)
                        }, addInitializer: function (a) {
                            this._initCallbacks.add(a)
                        }, start: function (a) {
                            this.triggerMethod("before:start", a);
                            this._initCallbacks.run(a, this);
                            this.triggerMethod("start",
                                a)
                        }, addRegions: function (a) {
                            return this._regionManager.addRegions(a)
                        }, emptyRegions: function () {
                            return this._regionManager.emptyRegions()
                        }, removeRegion: function (a) {
                            return this._regionManager.removeRegion(a)
                        }, getRegion: function (a) {
                            return this._regionManager.get(a)
                        }, getRegions: function () {
                            return this._regionManager.getRegions()
                        }, module: function (a, c) {
                            var e = d.Module.getClass(c), f = b.toArray(arguments);
                            return f.unshift(this), e.create.apply(e, f)
                        }, getRegionManager: function () {
                            return new d.RegionManager
                        }, _initializeRegions: function (a) {
                            var c =
                                b.isFunction(this.regions) ? this.regions(a) : this.regions || {};
                            this._initRegionManager();
                            var e = d.getOption(a, "regions");
                            return b.isFunction(e) && (e = e.call(this, a)), b.extend(c, e), this.addRegions(c), this
                        }, _initRegionManager: function () {
                            this._regionManager = this.getRegionManager();
                            this._regionManager._parent = this;
                            this.listenTo(this._regionManager, "before:add:region", function () {
                                d._triggerMethod(this, "before:add:region", arguments)
                            });
                            this.listenTo(this._regionManager, "add:region", function (a, c) {
                                this[a] = c;
                                d._triggerMethod(this,
                                    "add:region", arguments)
                            });
                            this.listenTo(this._regionManager, "before:remove:region", function () {
                                d._triggerMethod(this, "before:remove:region", arguments)
                            });
                            this.listenTo(this._regionManager, "remove:region", function (a) {
                                delete this[a];
                                d._triggerMethod(this, "remove:region", arguments)
                            })
                        }, _initChannel: function () {
                            this.channelName = b.result(this, "channelName") || "global";
                            this.channel = b.result(this, "channel") || h.Wreqr.radio.channel(this.channelName);
                            this.vent = b.result(this, "vent") || this.channel.vent;
                            this.commands =
                                b.result(this, "commands") || this.channel.commands;
                            this.reqres = b.result(this, "reqres") || this.channel.reqres
                        }
                    }), d.Module = function (a, c, d) {
                    this.moduleName = a;
                    this.options = b.extend({}, this.options, d);
                    this.initialize = d.initialize || this.initialize;
                    this.submodules = {};
                    this._setupInitializersAndFinalizers();
                    this.app = c;
                    b.isFunction(this.initialize) && this.initialize(a, c, this.options)
                }, d.Module.extend = d.extend, b.extend(d.Module.prototype, h.Events, {
                    startWithParent: !0, initialize: function () {
                    }, addInitializer: function (a) {
                        this._initializerCallbacks.add(a)
                    },
                    addFinalizer: function (a) {
                        this._finalizerCallbacks.add(a)
                    }, start: function (a) {
                        this._isInitialized || (b.each(this.submodules, function (c) {
                            c.startWithParent && c.start(a)
                        }), this.triggerMethod("before:start", a), this._initializerCallbacks.run(a, this), this._isInitialized = !0, this.triggerMethod("start", a))
                    }, stop: function () {
                        this._isInitialized && (this._isInitialized = !1, this.triggerMethod("before:stop"), b.invoke(this.submodules, "stop"), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(),
                            this._finalizerCallbacks.reset(), this.triggerMethod("stop"))
                    }, addDefinition: function (a, c) {
                        this._runModuleDefinition(a, c)
                    }, _runModuleDefinition: function (a, c) {
                        if (a) {
                            var e = b.flatten([this, this.app, h, d, h.$, b, c]);
                            a.apply(this, e)
                        }
                    }, _setupInitializersAndFinalizers: function () {
                        this._initializerCallbacks = new d.Callbacks;
                        this._finalizerCallbacks = new d.Callbacks
                    }, triggerMethod: d.triggerMethod
                }), b.extend(d.Module, {
                    create: function (a, c, d) {
                        var e = a, f = b.rest(arguments, 3);
                        c = c.split(".");
                        var g = [];
                        return g[c.length - 1] =
                            d, b.each(c, function (c, b) {
                            var h = e;
                            e = this._getModule(h, c, a, d);
                            this._addModuleDefinition(h, e, g[b], f)
                        }, this), e
                    }, _getModule: function (a, c, d, e) {
                        var f = b.extend({}, e);
                        e = this.getClass(e);
                        var g = a[c];
                        return g || (g = new e(c, d, f), a[c] = g, a.submodules[c] = g), g
                    }, getClass: function (a) {
                        var c = d.Module;
                        return a ? a.prototype instanceof c ? a : a.moduleClass || c : c
                    }, _addModuleDefinition: function (a, c, b, d) {
                        var e = this._getDefine(b);
                        b = this._getStartWithParent(b, c);
                        e && c.addDefinition(e, d);
                        this._addStartWithParent(a, c, b)
                    }, _getStartWithParent: function (a,
                                                      c) {
                        var e;
                        return b.isFunction(a) && a.prototype instanceof d.Module ? (e = c.constructor.prototype.startWithParent, b.isUndefined(e) ? !0 : e) : b.isObject(a) ? (e = a.startWithParent, b.isUndefined(e) ? !0 : e) : !0
                    }, _getDefine: function (a) {
                        return !b.isFunction(a) || a.prototype instanceof d.Module ? b.isObject(a) ? a.define : null : a
                    }, _addStartWithParent: function (a, c, b) {
                        c.startWithParent = c.startWithParent && b;
                        c.startWithParent && !c.startWithParentIsConfigured && (c.startWithParentIsConfigured = !0, a.addInitializer(function (a) {
                            c.startWithParent &&
                            c.start(a)
                        }))
                    }
                }), d
            });
            n.define("CKFinder/Config", [], function () {
                return {
                    id: "",
                    configPath: "config.js",
                    language: "",
                    languages: {
                        bg: 1,
                        ca: 1,
                        cs: 1,
                        cy: 1,
                        da: 1,
                        de: 1,
                        el: 1,
                        en: 1,
                        eo: 1,
                        es: 1,
                        "es-mx": 1,
                        et: 1,
                        fa: 1,
                        fi: 1,
                        fr: 1,
                        gu: 1,
                        he: 1,
                        hi: 1,
                        hr: 1,
                        hu: 1,
                        it: 1,
                        ja: 1,
                        ko: 1,
                        lv: 1,
                        lt: 1,
                        nb: 1,
                        nl: 1,
                        no: 1,
                        nn: 1,
                        pl: 1,
                        "pt-br": 1,
                        ro: 1,
                        ru: 1,
                        sk: 1,
                        sl: 1,
                        sr: 1,
                        sv: 1,
                        tr: 1,
                        vi: 1,
                        "zh-cn": 1,
                        "zh-tw": 1
                    },
                    defaultLanguage: "en",
                    removeModules: "",
                    plugins: "",
                    tabIndex: 0,
                    resourceType: null,
                    type: null,
                    startupPath: "",
                    startupFolderExpanded: !0,
                    readOnly: !1,
                    readOnlyExclude: "",
                    connectorPath: "",
                    connectorLanguage: "php",
                    pass: "",
                    connectorInfo: "",
                    dialogMinWidth: "18em",
                    dialogMinHeight: "4em",
                    dialogFocusItem: !0,
                    dialogOverlaySwatch: !1,
                    loaderOverlaySwatch: !1,
                    width: "100%",
                    height: 400,
                    fileIcons: {
                        "default": "unknown.png",
                        folder: "directory.png",
                        "7z": "7z.png",
                        accdb: "ms-access.png",
                        avi: "video.png",
                        bmp: "image.png",
                        css: "css.png",
                        csv: "csv.png",
                        doc: "msword.png",
                        docx: "msword.png",
                        flac: "audio.png",
                        gif: "image.png",
                        gz: "tar.png",
                        htm: "html.png",
                        html: "html.png",
                        jpeg: "image.png",
                        jpg: "image.png",
                        js: "javascript.png",
                        log: "log.png",
                        mp3: "audio.png",
                        mp4: "video.png",
                        odg: "draw.png",
                        odp: "impress.png",
                        ods: "calc.png",
                        odt: "writer.png",
                        ogg: "audio.png",
                        opus: "audio.png",
                        pdf: "pdf.png",
                        php: "php.png",
                        png: "image.png",
                        ppt: "powerpoint.png",
                        pptx: "powerpoint.png",
                        rar: "rar.png",
                        README: "readme.png",
                        rtf: "rtf.png",
                        sql: "sql.png",
                        tar: "tar.png",
                        tiff: "image.png",
                        txt: "plain.png",
                        wav: "audio.png",
                        weba: "audio.png",
                        webm: "video.png",
                        xls: "excel.png",
                        xlsx: "excel.png",
                        zip: "zip.png"
                    },
                    fileIconsPath: "skins/core/file-icons/",
                    fileIconsSizes: "256,128,64,48,32,22,16",
                    defaultDisplayFileName: !0,
                    defaultDisplayDate: !0,
                    defaultDisplayFileSize: !0,
                    thumbnailDelay: 50,
                    thumbnailDefaultSize: 150,
                    thumbnailMinSize: null,
                    thumbnailMaxSize: null,
                    thumbnailSizeStep: 2,
                    thumbnailClasses: {120: "small", 180: "medium"},
                    chooseFiles: !1,
                    chooseFilesOnDblClick: !0,
                    chooseFilesClosePopup: !0,
                    resizeImages: !0,
                    rememberLastFolder: !0,
                    skin: "moono",
                    swatch: "a",
                    displayFoldersPanel: !0,
                    jquery: "libs/jquery.js",
                    jqueryMobile: "libs/jquery.mobile.js",
                    jqueryMobileStructureCSS: "libs/jquery.mobile.structure.css",
                    jqueryMobileIconsCSS: "",
                    iconsCSS: "",
                    themeCSS: "",
                    coreCSS: "skins/core/ckfinder.css",
                    primaryPanelWidth: "",
                    secondaryPanelWidth: "",
                    cors: !1,
                    corsSelect: !1,
                    editImageMode: "",
                    editImageAdjustments: "brightness contrast exposure saturation sepia sharpen".split(" "),
                    editImagePresets: "clarity herMajesty nostalgia pinhole sunrise vintage".split(" "),
                    autoCloseHTML5Upload: 5,
                    uiModeThreshold: 48
                }
            });
            n.define("CKFinder/Event", [], function () {
                function k() {
                }

                function h(b) {
                    b = b.getPrivate && b.getPrivate() || b._ev || (b._ev = {});
                    return b.events || (b.events =
                        {})
                }

                function b(b) {
                    this.name = b;
                    this.listeners = []
                }

                function g(d) {
                    var f = h(this);
                    return f[d] || (f[d] = new b(d))
                }

                return b.prototype = {
                    getListenerIndex: function (b) {
                        for (var f = 0, e = this.listeners; f < e.length; f++)if (e[f].fn === b)return f;
                        return -1
                    }
                }, k.prototype = {
                    on: function (b, f, e, a, c) {
                        function m(c, g, m, p) {
                            c = {
                                name: b,
                                sender: this,
                                finder: c,
                                data: g,
                                listenerData: a,
                                stop: m,
                                cancel: p,
                                removeListener: h
                            };
                            return !1 === f.call(e, c) ? !1 : c.data
                        }

                        function h() {
                            v.removeListener(b, f)
                        }

                        var p, k;
                        p = g.call(this, b);
                        var v = this;
                        if (0 > p.getListenerIndex(f)) {
                            p =
                                p.listeners;
                            e || (e = this);
                            isNaN(c) && (c = 10);
                            m.fn = f;
                            m.priority = c;
                            for (k = p.length - 1; 0 <= k; k--)if (p[k].priority <= c)return p.splice(k + 1, 0, m), {removeListener: h};
                            p.unshift(m)
                        }
                        return {removeListener: h}
                    }, once: function () {
                        var b = arguments[1];
                        return arguments[1] = function (f) {
                            return f.removeListener(), b.apply(this, arguments)
                        }, this.on.apply(this, arguments)
                    }, fire: function () {
                        var b = 0, f = function () {
                            b = 1
                        }, e = 0, a = function () {
                            e = 1
                        };
                        return function (c, g, k) {
                            var p, w, v, l = h(this)[c], n = b, q = e;
                            if (b = 0, e = 0, l && (w = l.listeners, w.length))for (w =
                                                                                        w.slice(0), c = 0; c < w.length; c++) {
                                if (l.errorProof)try {
                                    v = w[c].call(this, k, g, f, a)
                                } catch (D) {
                                } else v = w[c].call(this, k, g, f, a);
                                if (!1 === v ? e = 1 : "undefined" != typeof v && (g = v), b || e)break
                            }
                            return p = e ? !1 : "undefined" == typeof g ? !0 : g, b = n, e = q, p
                        }
                    }(), fireOnce: function (b, f, e) {
                        f = this.fire(b, f, e);
                        return delete h(this)[b], f
                    }, removeListener: function (b, f) {
                        var e, a = h(this)[b];
                        a && (e = a.getListenerIndex(f), 0 <= e && a.listeners.splice(e, 1))
                    }, removeAllListeners: function () {
                        var b, f = h(this);
                        for (b in f)delete f[b]
                    }, hasListeners: function (b) {
                        return (b =
                                h(this)[b]) && 0 < b.listeners.length
                    }
                }, k
            });
            n.define("CKFinder/Util/Util", ["underscore"], function (k) {
                return {
                    url: function (h) {
                        return /^(http(s)?:)?\/\/.+/i.test(h) ? h : n.require.toUrl(h)
                    }, asyncArrayTraverse: function (h, b, g) {
                        var d, f = 0;
                        g || (g = null);
                        b = b.bind(g);
                        (d = function () {
                            for (var e, a = 0, c = (new Date).getTime(); e = h.item ? h.item(f) : h[f], e && !1 !== b(e, f, h);)if (f += 1, a += 1, 10 <= a && 50 < (new Date).getTime() - c)return setTimeout(d, 50)
                        }).call()
                    }, isPopup: function () {
                        return q !== q.parent && !!q.opener || q.isCKFinderPopup
                    }, isModal: function () {
                        return q.parent.CKFinder &&
                            q.parent.CKFinder.modal && q.parent.CKFinder.modal("visible")
                    }, isWidget: function () {
                        return q !== q.parent && !q.opener
                    }, toGet: function (h) {
                        var b = "";
                        return k.forOwn(h, function (g, d) {
                            b += "&" + encodeURIComponent(d) + "=" + encodeURIComponent(h[d])
                        }), b.substring(1)
                    }, cssEntities: function (h) {
                        return h.replace(/\(/g, "&#92;&#40;").replace(/\)/g, "&#92;&#41;")
                    }, jsCssEntities: function (h) {
                        return h.replace(/\(/g, "%28").replace(/\)/g, "%29")
                    }, getUrlParams: function () {
                        var h = {};
                        return q.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
                            function (b, g, d) {
                                h[g] = d
                            }), h
                    }, parentFolder: function (h) {
                        return h.split("/").slice(0, -1).join("/")
                    }, isShortcut: function (h, b) {
                        var g = b.split("+"), d = !!h.altKey, f = !!h.shiftKey, e = (!!h.ctrlKey || !!h.metaKey) === (k.contains(g, "ctrl") ? !0 : !1), d = d === (k.contains(g, "alt") ? !0 : !1), g = f === (k.contains(g, "shift") ? !0 : !1);
                        return e && d && g
                    }
                }
            });
            n.define("CKFinder/Util/Lang", ["underscore", "jquery", "ckf_global"], function (k, h, b) {
                function g(f, e, a, c) {
                    f || (f = d.getSupportedLanguage(navigator.userLanguage || navigator.language, a));
                    a[e] ||
                    (e = "en");
                    var g;
                    a[f] && (g = "lang/" + f + ".json");
                    g || (g = "lang/" + e + ".json");
                    b.require(["text!" + b.require.toUrl(g) + "?ver=8mhio5"], function (a) {
                        c(f, JSON.parse(a))
                    }, function () {
                        c(f)
                    })
                }

                var d = {
                    loadPluginLang: function (d, e, a, c) {
                        var g = a.lang.split(",");
                        if (!(0 <= k.indexOf(g, d))) {
                            if (!(0 <= k.indexOf(g, e)))return void c({});
                            d = e
                        }
                        b.require(["text!" + b.require.toUrl(a.path) + "lang/" + d + ".json"], function (a) {
                            var b;
                            try {
                                b = JSON.parse(a)
                            } catch (d) {
                                b = {}
                            }
                            c(b)
                        }, function () {
                            c({})
                        })
                    }, init: function (b) {
                        var d = new h.Deferred;
                        return g(b.language,
                            b.defaultLanguage, b.languages, function (a, c) {
                                if (!c)return void d.reject();
                                c.formatDate = function () {
                                    var a = "['" + c.DateAmPm.join("','") + "']", b = c.DateTime.replace(/dd|mm|yyyy|hh|HH|MM|aa|d|m|yy|h|H|M|a/g, function (c) {
                                        var b, d = {
                                            d: "day.replace(/^0/,'')",
                                            dd: "day",
                                            m: "month.replace(/^0/,'')",
                                            mm: "month",
                                            yy: "year.substr(2)",
                                            yyyy: "year",
                                            H: "hour.replace(/^0/,'')",
                                            HH: "hour",
                                            h: "( hour < 12 ? hour : ( ( hour - 12 ) + 100 ).toString().substr( 1 ) ).replace(/^0/,'')",
                                            hh: "( hour < 12 ? hour : ( ( hour - 12 ) + 100 ).toString().substr( 1 ) )",
                                            M: "minute.replace(/^0/,'')",
                                            MM: "minute",
                                            a: a + "[ hour < 12 ? 0 : 1 ].charAt(0)",
                                            aa: a + "[ hour < 12 ? 0 : 1 ]"
                                        };
                                        return b = d[c] ? d[c] : "'" + c + "'", "'," + b + ",'"
                                    });
                                    return b = "'" + b + "'", b = b.replace(/('',)|,''$/g, ""), new Function("year", "month", "day", "hour", "minute", "return [" + b + '].join("");')
                                }();
                                c.formatDateString = function (a) {
                                    return a = a || "", k.isNumber(a) && (a = a.toString()), 12 > a.length ? "" : c.formatDate(a.substr(0, 4), a.substr(4, 2), a.substr(6, 2), a.substr(8, 2), a.substr(10, 2))
                                };
                                c.formatFileSize = function (a) {
                                    return 1073741824 <=
                                    a ? c.Gb.replace("%1", (a / 1073741824).toFixed(1)) : 1048576 <= a ? c.Mb.replace("%1", (a / 1048576).toFixed(1)) : 1024 <= a ? c.Kb.replace("%1", (a / 1024).toFixed(1)) : "%1 B".replace("%1", a)
                                };
                                c.formatFilesCount = function (a) {
                                    return c[1 === a ? "FilesCountOne" : "FilesCountMany"].replace("%1", a)
                                };
                                d.resolve(c)
                            }), d.promise()
                    }, getSupportedLanguage: function (b, d) {
                        if (!b)return !1;
                        var a = b.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/), c = a[1], a = a[2];
                        return d[c + "-" + a] ? c = c + "-" + a : d[c] || (c = !1), c
                    }
                };
                return d
            });
            n.define("CKFinder/UI/UIHacks",
                ["underscore", "jquery"], function (k, h) {
                    function b() {
                        k.forEach(["transition"], function (a) {
                            d(a) && h("body").addClass("ckf-feature-css-" + a)
                        })
                    }

                    function g(a) {
                        var c = q.chrome;
                        void 0 !== r.documentMode || c ? q.addEventListener ? (q.addEventListener("focus", function () {
                            setTimeout(function () {
                                a.fire("ui:focus", null, a)
                            }, e)
                        }, !1), q.addEventListener("blur", function () {
                            a.fire("ui:blur", null, a)
                        }, !1)) : (q.attachEvent("focus", function () {
                            setTimeout(function () {
                                a.fire("ui:focus", null, a)
                            }, e)
                        }), q.attachEvent("blur", function () {
                            a.fire("ui:blur",
                                null, a)
                        })) : h(q).on("focusin", function (c) {
                            c.target === q && setTimeout(function () {
                                a.fire("ui:focus", null, a)
                            }, e)
                        }).on("focusout", function (c) {
                            c.target === q && a.fire("ui:blur", null, a)
                        })
                    }

                    function d(a) {
                        var c = (r.body || r.documentElement).style;
                        if ("string" == typeof c[a])return !0;
                        var b = "Moz webkit Webkit Khtml O ms".split(" ");
                        a = a.charAt(0).toUpperCase() + a.substr(1);
                        for (var d = 0; d < b.length; d++)if ("string" == typeof c[b[d] + a])return !0;
                        return !1
                    }

                    function f(a, c, b) {
                        c && a.removeClass("ckf-ui-mode-" + c);
                        a.addClass("ckf-ui-mode-" +
                            b)
                    }

                    var e = 300;
                    return {
                        init: function (a) {
                            b();
                            g(a);
                            var c = h("body");
                            c.attr("data-theme", a.config.swatch);
                            -1 < navigator.userAgent.toLowerCase().indexOf("trident/") && c.addClass("ckf-ie");
                            "ltr" !== a.lang.dir && (c.addClass("ckf-rtl"), c.attr("dir", "rtl"));
                            a.setHandler("ui:getMode", function () {
                                var c, b, d = q.matchMedia ? function () {
                                    return void 0 === b && (b = "(max-width: " + a.config.uiModeThreshold + "em)"), q.matchMedia(b).matches
                                } : function () {
                                    return void 0 === c && (c = parseFloat(h("body").css("font-size")) * a.config.uiModeThreshold),
                                    q.innerWidth <= c
                                };
                                return function () {
                                    return d.call(this) ? "mobile" : "desktop"
                                }
                            }());
                            var d = a.request("ui:getMode");
                            f(c, null, d);
                            h(q).bind("throttledresize", function () {
                                var b = a.request("ui:getMode"), e = d !== b;
                                e && (f(c, d, b), d = b);
                                a.fire("ui:resize", {modeChanged: e, mode: d}, a)
                            });
                            var e = h.event.special.swipe.start;
                            h.event.special.swipe.start = function (a) {
                                var c = e(a);
                                return c.ckfOrigin = a.originalEvent.type, c
                            };
                            h(q).bind("swipeleft", function (c) {
                                0 !== c.swipestart.ckfOrigin.indexOf("mouse") && a.fire("ui:swipeleft", {evt: c}, a)
                            });
                            h(q).bind("swiperight", function (c) {
                                0 !== c.swipestart.ckfOrigin.indexOf("mouse") && a.fire("ui:swiperight", {evt: c}, a)
                            });
                            a.setHandler("closePopup", function () {
                                a.util.isPopup() ? q.close() : q.top && q.top.CKFinder && q.top.CKFinder.modal && q.top.CKFinder.modal("close")
                            });
                            h(r).on("selectstart", "[draggable]", function (a) {
                                a.preventDefault();
                                a.dragDrop && a.dragDrop()
                            })
                        }
                    }
                });
            n.define("CKFinder/Plugins/Plugin", ["underscore", "jquery", "backbone"], function (k, h, b) {
                function g() {
                }

                return g.extend = b.Model.extend, k.extend(g.prototype,
                    {
                        addCss: function (b) {
                            h("<style>").text(b).appendTo("head")
                        }, init: function () {
                    }
                    }), g
            });
            n.define("CKFinder/Plugins/Plugins", ["underscore", "jquery", "backbone", "CKFinder/Plugins/Plugin", "CKFinder/Util/Lang"], function (k, h, b, g, d) {
                function f(b, a, c) {
                    function f() {
                        a.init(b);
                        b._plugins.add(a);
                        c.loaded = !0;
                        b.fire("plugin:ready", {plugin: a}, b)
                    }

                    return a.path = b.util.parentFolder(c.url) + "/", a.lang ? void d.loadPluginLang(b.lang.LangCode, b.config.defaultLanguage, a, function (a) {
                        a.name && a.values && (b.lang[a.name] = a.values);
                        f()
                    }) : void f()
                }

                return b.Collection.extend({
                    load: function (b) {
                        function a() {
                            var a = k.countBy(c, "loaded");
                            a.undefined || (b.fire("plugin:allReady", null, b), a["false"] && k.forEach(k.where(c, {loaded: !1}), function (a) {
                                b.fire("plugin:loadError", {configKey: a.config, url: a.url})
                            }))
                        }

                        var c = [], d = b.config.plugins;
                        return 1 > d.length ? void b.fire("plugin:allReady", null, b) : (k.isString(d) && (d = d.split(",")), k.forEach(d, function (a) {
                            var b = a;
                            -1 === a.search("/") && (b = n.require.toUrl("plugins/" + a + "/" + a + ".js"));
                            c.push({
                                config: a, url: b,
                                loaded: void 0
                            })
                        }), b.on("plugin:ready", function () {
                            a()
                        }), void k.forEach(c, function (c) {
                            n.require([c.url], function (a) {
                                a = g.extend(a);
                                f(b, new a, c)
                            }, function () {
                                c.loaded = !1;
                                a()
                            })
                        }))
                    }
                })
            });
            n.define("CKFinder/Modules/Connector/Transport", ["jquery", "underscore"], function (k, h) {
                function b(b, a) {
                    this.url = b;
                    this.config = a;
                    this.onFail = this.onDone = f;
                    this.request = null
                }

                function g(b) {
                    var a, c;
                    a = new XDomainRequest;
                    c = null;
                    "post" === b.config.type && (c = k.param(b.config.post));
                    a.open(b.config.type, b.url);
                    a.onload = function () {
                        b.onDone(this.responseText)
                    };
                    a.onprogress = f;
                    a.ontimeout = f;
                    a.onerror = function () {
                        b.onFail()
                    };
                    b.request = a;
                    setTimeout(function () {
                        a.send(c)
                    }, 0)
                }

                function d(b) {
                    var a, c;
                    a = new XMLHttpRequest;
                    c = null;
                    a.open(b.config.type, b.url, !0);
                    a.onreadystatechange = function () {
                        4 === this.readyState && b.onDone(this.responseText)
                    };
                    a.onerror = function () {
                        b.onFail()
                    };
                    h.isFunction(b.config.uploadProgress && a.upload) && (a.upload.onprogress = b.config.uploadProgress);
                    h.isFunction(b.config.uploadEnd && a.upload) && (a.upload.onload = b.config.uploadEnd);
                    "post" === b.config.type &&
                    (c = k.param(h.extend(b.config.post)), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"));
                    a.send(c);
                    b.request = a
                }

                var f = function () {
                };
                return b.prototype.done = function (b) {
                    this.onDone = b
                }, b.prototype.fail = function (b) {
                    this.onFail = b
                }, b.prototype.send = function () {
                    q.XMLHttpRequest ? d(this) : g(this)
                }, b.prototype.abort = function () {
                    this.request && this.request.abort()
                }, b
            });
            n.define("CKFinder/Modules/Connector/Connector", ["underscore", "jquery", "ckf_global", "CKFinder/Modules/Connector/Transport"], function (k,
                                                                                                                                                       h, b, g) {
                function d(a, c, b) {
                    var d = this.finder, e = d.config, f = {command: a, lang: d.lang.LangCode};
                    a = e.connectorInfo;
                    if (b && (f.type = b.get("resourceType"), f.currentFolder = b.getPath(), f.hash = b.getHash()), e.pass.length)b = e.pass.split(","), k.forEach(b, function (a) {
                        f[a] = d.config[a]
                    });
                    e.id && (f.id = e.id);
                    c = this.baseUrl + "?" + d.util.toGet(k.extend(f, c));
                    return 0 < a.length && (c += "&" + a), c
                }

                function f(a) {
                    var c = this.finder, b = a.name, f = h.Deferred(), p = {name: b, response: {error: {number: 109}}};
                    if (k.has(a, "context") && (p.context = a.context),
                        c.fire("command:before", a, c) && c.fire("command:before:" + b, a, c)) {
                        var w = k.extend({type: "get", post: {}}, a), v = {};
                        v.type = w.type;
                        "post" === w.type && (v.post = w.post);
                        w.uploadProgress && (v.uploadProgress = w.uploadProgress);
                        w.uploadEnd && (v.uploadEnd = w.uploadEnd);
                        w = d.call(this, b, a.params, a.folder);
                        v = new g(w, v);
                        return v.done(function (d) {
                            var g, h, w = !1;
                            try {
                                h = JSON.parse(d), g = {name: b, response: h}, w = !0
                            } catch (v) {
                                return p.response.error.message = d, e(b, p, c), void f.reject(p)
                            }
                            w && f.resolve(h);
                            k.has(a, "context") && (g.context = a.context);
                            !h || h.error ? c.fire("command:error:" + b, g, c) && (a.context && a.context.silentConnectorErrors || c.fire("command:error", g, c)) : c.fire("command:ok:" + b, g, c);
                            c.fire("command:after", g, c);
                            c.fire("command:after:" + b, g, c)
                        }), v.fail(function () {
                            e(b, p, c);
                            f.reject(p)
                        }), v.send(), a.returnTransport ? v : f.promise()
                    }
                }

                function e(a, c, b) {
                    b.fire("command:error:" + a, c, b) && b.fire("command:error", c, b);
                    b.fire("command:after", c, b);
                    b.fire("command:after:" + a, c, b)
                }

                return function (a) {
                    var c = a.config, e = c.connectorLanguage;
                    this.finder = a;
                    this.config =
                        c;
                    this.baseUrl = b.require.toUrl(c.connectorPath ? c.connectorPath : "./core/connector/" + e + "/connector." + e);
                    a.setHandlers({
                        "command:send": {callback: f, context: this},
                        "command:url": {
                            callback: function (a) {
                                return d.call(this, a.command, a.params, a.folder)
                            }, context: this
                        }
                    })
                }
            });
            n.define("CKFinder/Views/Base/Common", ["underscore", "doT", "marionette"], function (k, h, b) {
                return {
                    proto: {
                        getTemplate: function () {
                            var g = b.getOption(this, "template"), d = b.getOption(this, "imports");
                            k.isFunction(d) && (d = d.call(this));
                            g = {
                                imports: d, name: this.name,
                                template: g
                            };
                            return this.finder.fire("template", g, this.finder), this.finder.fire("template:" + this.name, g, this.finder), h.template(g.template, null, g.imports)
                        }, mixinTemplateHelpers: function (g) {
                            g = g || {};
                            var d = this.getOption("templateHelpers");
                            return d = b._getValue(d, this), k.extend(g, {
                                lang: this.finder.lang,
                                config: this.finder.config
                            }, d)
                        }
                    }, util: {
                        construct: function (b) {
                            if (!this.name) {
                                if (!b.name)throw"name parameter must be specified";
                                this.name = b.name
                            }
                            if (!this.finder) {
                                if (!b.finder)throw"Finder parameter must be specified for view: " +
                                this.name;
                                this.finder = b.finder
                            }
                            this.finder.fire("view:" + this.name, {view: this}, this.finder)
                        }
                    }
                }
            });
            n.define("CKFinder/Views/Base/CompositeView", ["underscore", "marionette", "CKFinder/Views/Base/Common"], function (k, h, b) {
                var g = h.CompositeView;
                return g.extend(b.proto).extend({
                    constructor: function (d) {
                        b.util.construct.call(this, d);
                        g.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }, buildChildView: function (b, f, e) {
                        b = k.extend({model: b, finder: this.finder}, e);
                        return new f(b)
                    }, attachBuffer: function (b,
                                               f) {
                        this.getChildViewContainer(b).append(f);
                        this.triggerMethod("attachBuffer")
                    }
                })
            });
            n.define("CKFinder/Views/Base/ItemView", ["marionette", "CKFinder/Views/Base/Common"], function (k, h) {
                var b = k.ItemView;
                return b.extend(h.proto).extend({
                    constructor: function (g) {
                        h.util.construct.call(this, g);
                        b.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }
                })
            });
            n.define("text", ["module"], function (k) {
                var h, b, g, d, f, e = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
                    c = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, m = "undefined" != typeof location && location.href, t = m && location.protocol && location.protocol.replace(/\:/, ""), p = m && location.hostname, w = m && (location.port || void 0), v = {}, l = k.config && k.config() || {};
                return h = {
                    version: "2.0.14", strip: function (b) {
                        if (b) {
                            b = b.replace(a, "");
                            var d = b.match(c);
                            d && (b = d[1])
                        } else b = "";
                        return b
                    }, jsEscape: function (a) {
                        return a.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g,
                            "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
                    }, createXhr: l.createXhr || function () {
                        var a, c, b;
                        if ("undefined" != typeof XMLHttpRequest)return new XMLHttpRequest;
                        if ("undefined" != typeof ActiveXObject)for (c = 0; 3 > c; c += 1) {
                            b = e[c];
                            try {
                                a = new ActiveXObject(b)
                            } catch (d) {
                            }
                            if (a) {
                                e = [b];
                                break
                            }
                        }
                        return a
                    }, parseName: function (a) {
                        var c, b, d, e = !1, f = a.lastIndexOf("."), g = 0 === a.indexOf("./") || 0 === a.indexOf("../");
                        return -1 !== f && (!g || 1 < f) ? (c = a.substring(0, f), b = a.substring(f + 1)) : c = a, d = b || c, f = d.indexOf("!"), -1 !==
                        f && (e = "strip" === d.substring(f + 1), d = d.substring(0, f), b ? b = d : c = d), {
                            moduleName: c,
                            ext: b,
                            strip: e
                        }
                    }, xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/, useXhr: function (a, c, b, d) {
                        var e, f, g;
                        return (a = h.xdRegExp.exec(a)) ? (e = a[2], f = a[3], f = f.split(":"), g = f[1], f = f[0], !(e && e !== c || f && f.toLowerCase() !== b.toLowerCase() || (g || f) && g !== d)) : !0
                    }, finishLoad: function (a, c, b, d) {
                        b = c ? h.strip(b) : b;
                        l.isBuild && (v[a] = b);
                        d(b)
                    }, load: function (a, c, b, d) {
                        if (d && d.isBuild && !d.inlineText)return void b();
                        l.isBuild = d && d.isBuild;
                        var e = h.parseName(a);
                        d = e.moduleName +
                            (e.ext ? "." + e.ext : "");
                        var f = c.toUrl(d), g = l.useXhr || h.useXhr;
                        return 0 === f.indexOf("empty:") ? void b() : void(!m || g(f, t, p, w) ? h.get(f, function (c) {
                            h.finishLoad(a, e.strip, c, b)
                        }, function (a) {
                            b.error && b.error(a)
                        }) : c([d], function (a) {
                            h.finishLoad(e.moduleName + "." + e.ext, e.strip, a, b)
                        }))
                    }, write: function (a, c, b) {
                        if (v.hasOwnProperty(c)) {
                            var d = h.jsEscape(v[c]);
                            b.asModule(a + "!" + c, "define(function () { return '" + d + "';});\n")
                        }
                    }, writeFile: function (a, c, b, d, e) {
                        c = h.parseName(c);
                        var f = c.ext ? "." + c.ext : "", g = c.moduleName + f, p = b.toUrl(c.moduleName +
                                f) + ".js";
                        h.load(g, b, function () {
                            var c = function (a) {
                                return d(p, a)
                            };
                            c.asModule = function (a, c) {
                                return d.asModule(a, p, c)
                            };
                            h.write(a, g, c, e)
                        }, e)
                    }
                }, "node" === l.env || !l.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] && !process.versions["atom-shell"] ? (b = require.nodeRequire("fs"), h.get = function (a, c, d) {
                    try {
                        var e = b.readFileSync(a, "utf8");
                        "\ufeff" === e[0] && (e = e.substring(1));
                        c(e)
                    } catch (f) {
                        d && d(f)
                    }
                }) : "xhr" === l.env || !l.env && h.createXhr() ? h.get = function (a, c,
                                                                                    b, d) {
                    var e, f = h.createXhr();
                    if (f.open("GET", a, !0), d)for (e in d)d.hasOwnProperty(e) && f.setRequestHeader(e.toLowerCase(), d[e]);
                    l.onXhr && l.onXhr(f, a);
                    f.onreadystatechange = function () {
                        var d, e;
                        4 === f.readyState && (d = f.status || 0, 399 < d && 600 > d ? (e = Error(a + " HTTP status: " + d), e.xhr = f, b && b(e)) : c(f.responseText), l.onXhrComplete && l.onXhrComplete(f, a))
                    };
                    f.send(null)
                } : "rhino" === l.env || !l.env && "undefined" != typeof Packages && "undefined" != typeof java ? h.get = function (a, c) {
                    var b, d, e = new java.io.File(a), f = java.lang.System.getProperty("line.separator"),
                        e = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(e), "utf-8")), g = "";
                    try {
                        b = new java.lang.StringBuffer;
                        (d = e.readLine()) && d.length() && 65279 === d.charAt(0) && (d = d.substring(1));
                        for (null !== d && b.append(d); null !== (d = e.readLine());)b.append(f), b.append(d);
                        g = String(b.toString())
                    } finally {
                        e.close()
                    }
                    c(g)
                } : ("xpconnect" === l.env || !l.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (g = Components.classes, d = Components.interfaces, Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),
                    f = "@mozilla.org/windows-registry-key;1" in g, h.get = function (a, c) {
                    var b, e, h, p = {};
                    f && (a = a.replace(/\//g, "\\"));
                    h = new FileUtils.File(a);
                    try {
                        b = g["@mozilla.org/network/file-input-stream;1"].createInstance(d.nsIFileInputStream), b.init(h, 1, 0, !1), e = g["@mozilla.org/intl/converter-input-stream;1"].createInstance(d.nsIConverterInputStream), e.init(b, "utf-8", b.available(), d.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER), e.readString(b.available(), p), e.close(), b.close(), c(p.value)
                    } catch (l) {
                        throw Error((h &&
                            h.path || "") + ": " + l);
                    }
                }), h
            });
            n.define("text!CKFinder/Templates/ContextMenu/ContextMenuItem.dot", [], function () {
                return '{{? it.divider }}{{??}}\n\t<a tabindex="-1" class="ui-btn {{? !it.isActive }}ui-state-disabled {{?}}{{? it.icon }}ui-btn-icon-left ui-icon-{{= it.icon }}{{?}}" data-ckf-name="{{= it.name }}">\n\t\t{{= it.label }}\n\t</a>\n{{?}}\n'
            });
            n.define("CKFinder/Util/KeyCode", {
                up: 38,
                down: 40,
                left: 37,
                right: 39,
                tab: 9,
                enter: 13,
                space: 32,
                escape: 27,
                end: 35,
                home: 36,
                "delete": 46,
                menu: 93,
                a: 65,
                r: 82,
                u: 85,
                f2: 113,
                f5: 116,
                f7: 118,
                f8: 119,
                f9: 120,
                f10: 121
            });
            n.define("CKFinder/Modules/ContextMenu/Views/ContextMenuView", "underscore jquery CKFinder/Views/Base/CompositeView CKFinder/Views/Base/ItemView text!CKFinder/Templates/ContextMenu/ContextMenuItem.dot CKFinder/Util/KeyCode".split(" "), function (k, h, b, g, d, f) {
                function e(a, c) {
                    var b = a.x, d = a.y, e = c.height(), f = c.width();
                    return {
                        x: parseInt(b + (q.innerWidth < b + f ? -1 : 1) * f / 2, 10),
                        y: parseInt(d + (q.innerHeight < d + e ? -1 : 1) * e / 2 + r.body.scrollTop, 10)
                    }
                }

                return b.extend({
                    name: "ContextMenu",
                    template: "<ul></ul>",
                    childViewContainer: "ul",
                    emptyView: g.extend({name: "ContextMenuEmpty", template: '<div class="ckf-message"></div>'}),
                    initialize: function (a) {
                        function c(c) {
                            c = c.model.get("action");
                            k.isFunction(c) && c(a.forView);
                            d.destroy()
                        }

                        function b(a) {
                            !d || d.$el.find(a.target).length || d.isDestroyed || d.destroy()
                        }

                        var d = this, g = h(r), w = a.position, v = a.positionToEl;
                        if (!w && v)var l = v.get(0).getBoundingClientRect(), w = {
                            x: l.left + v.width() / 2,
                            y: l.top + v.height() / 2
                        };
                        d.$el.attr("data-theme", d.finder.config.swatch);
                        d.on("destroy", function () {
                            g.off("mousedown contextmenu", b);
                            d.$el.length && d.$el.remove()
                        });
                        d.on("render", function () {
                            d.$el.find("ul").listview();
                            h(".ui-popup-container").remove();
                            d.$el.popup().popup("open");
                            d.$el.find(".ui-btn:first").focus();
                            w && w.x && w.y && d.$el.popup("reposition", e(w, d.$el));
                            setTimeout(function () {
                                g.one("mousedown contextmenu", b)
                            }, 0)
                        });
                        d.on("childview:itemclicked", function (a) {
                            c(a)
                        });
                        d.on("childview:itemkeydown", function (a, b) {
                            var e, g, h, l;
                            e = b.evt;
                            e.keyCode === f.up && (e.stopPropagation(),
                                e.preventDefault(), g = d.$el.find("a"), h = k.indexOf(g, a.$el.find("a")[0]), l = h - 1, g[0 <= l ? l : 0].focus());
                            e.keyCode === f.down && (e.stopPropagation(), e.preventDefault(), g = d.$el.find("a"), h = k.indexOf(g, a.$el.find("a")[0]), l = h + 1, g[l < g.length - 1 ? l : g.length - 1].focus());
                            e.keyCode !== f.enter && e.keyCode !== f.space || (e.stopPropagation(), e.preventDefault(), c(a));
                            e.keyCode === f.escape && (e.stopPropagation(), e.preventDefault(), d.destroy())
                        })
                    },
                    getChildView: function (a) {
                        var c = {}, b = {
                            contextmenu: function (a) {
                                a.preventDefault();
                                a.stopPropagation()
                            }
                        };
                        a.get("divider") || (c["click a"] = {
                            event: "itemclicked",
                            preventDefault: !0
                        }, b["keydown a"] = function (a) {
                            a.stopPropagation();
                            this.trigger("itemkeydown", {evt: a, view: this, model: this.model})
                        });
                        c = {
                            name: "ContextMenuItem",
                            finder: this.finder,
                            template: d,
                            triggers: c,
                            events: b,
                            tagName: "li",
                            modelEvents: {"change:active": "render"}
                        };
                        return a.get("divider") && (c.attributes = {"data-role": "list-divider"}), g.extend(c)
                    }
                })
            });
            n.define("CKFinder/Modules/ContextMenu/Models/ContextMenuGroups", ["backbone"], function (k) {
                function h() {
                    this.groups =
                    {"default": new k.Collection}
                }

                return h.prototype.addGroup = function (b, g) {
                    var d = this.groups[b];
                    (d || (this.groups[b] = new k.Collection, d = this.groups[b]), d).add(g)
                }, h
            });
            n.define("CKFinder/Modules/ContextMenu/ContextMenu", ["underscore", "backbone", "CKFinder/Modules/ContextMenu/Views/ContextMenuView", "CKFinder/Modules/ContextMenu/Models/ContextMenuGroups"], function (k, h, b, g) {
                function d(d) {
                    var e = this.finder, a = new g, c = {groups: a, context: d.context};
                    if (e.fire("contextMenu", c, e) && e.fire("contextMenu:" + d.name, c, e)) {
                        var m =
                            new h.Collection;
                        k.forEach(a.groups, function (a) {
                            a.models.length && (m.length && m.add({divider: !0}), m.add(a.models))
                        });
                        this.lastView && this.lastView.destroy();
                        a = d.evt && d.evt.clientX ? {x: d.evt.clientX, y: d.evt.clientY} : !1;
                        c = d.positionToEl ? d.positionToEl : null;
                        e.request("focus:remember");
                        this.lastView = new b({
                            finder: e,
                            className: "ckf-contextmenu",
                            collection: m,
                            position: a,
                            positionToEl: c,
                            forView: d.view
                        });
                        this.lastView.on("destroy", function () {
                            e.request("focus:restore")
                        });
                        this.lastView.render()
                    }
                }

                return function (b) {
                    function e() {
                        a.lastView &&
                        a.lastView.destroy()
                    }

                    this.finder = b;
                    b.setHandler("contextMenu", d, this);
                    var a = this;
                    b.on("ui:blur", e);
                    b.on("ui:resize", e)
                }
            });
            n.define("CKFinder/Models/FoldersCollection", ["backbone", "CKFinder/Models/Folder"], function (k, h) {
                return k.Collection.extend({
                    model: h, initialize: function () {
                        this.on("change:name", this.sort)
                    }, comparator: function (b, g) {
                        return b.get("name").localeCompare(g.get("name"))
                    }
                })
            });
            n.define("CKFinder/Models/Folder", ["backbone", "CKFinder/Models/FoldersCollection"], function (k, h) {
                return k.Model.extend({
                    defaults: {
                        name: "",
                        hasChildren: !1, resourceType: "", isRoot: !1, parent: null, isPending: !1, "view:isFolder": !0
                    }, initialize: function () {
                        function b() {
                            f.set("hasChildren", !!f.get("children").length)
                        }

                        this.set("name", this.get("name").toString(), {silent: !0});
                        this.set("children", new h, {silent: !0});
                        var g = this.get("children");
                        g.on("change", b);
                        g.on("remove", b);
                        this.on("change:children", function (d, a) {
                            a && (a.on("change", b), a.on("remove", b))
                        });
                        (g = this.get("allowedExtensions")) && "string" == typeof g && this.set("allowedExtensions", g.split(","),
                            {silent: !0});
                        var d = this.get("allowedExtensions");
                        d && "string" == typeof d && this.set("allowedExtensions", g.split(","), {silent: !0});
                        var f = this
                    }, getPath: function (b) {
                        var g, d;
                        return g = this.get("parent"), d = g ? g.getPath(b).toString() + this.get("name") + "/" : "/", this.get("isRoot") && b && b.full && (d = this.get("resourceType") + ":" + d), d
                    }, getHash: function () {
                        return this.has("hash") ? this.get("hash") : this.get("parent").getHash()
                    }, getUrl: function () {
                        if (this.has("url"))return this.get("url");
                        var b = this.get("parent");
                        return b ?
                        (b = b.getUrl()) && b + "/" + this.get("name") : !1
                    }, isPath: function (b, g) {
                        return b === this.getPath() && g === this.get("resourceType")
                    }, getResourceType: function () {
                        for (var b = this; !b.get("isRoot");)b = b.get("parent");
                        return b
                    }
                }, {
                    isValidName: function (b) {
                        return !/[\\\/:\*\?"<>\|]/.test(b)
                    }
                })
            });
            n.define("text!CKFinder/Templates/Folders/FolderNameDialogTemplate.dot", [], function () {
                return '<form action="#">\n\t{{! it.dialogMessage }}\n\t<input name="newFolderName" value="{{! it.folderName }}" tabindex="1">\n</form>\n<p class="error-message"></p>\n'
            });
            n.define("CKFinder/Modules/Folders/Views/FolderNameDialogView", ["CKFinder/Views/Base/ItemView", "CKFinder/Models/Folder", "text!CKFinder/Templates/Folders/FolderNameDialogTemplate.dot"], function (k, h, b) {
                return k.extend({
                    name: "FolderNameDialogView",
                    template: b,
                    ui: {error: ".error-message", folderName: 'input[name="newFolderName"]'},
                    events: {
                        "input @ui.folderName": function () {
                            var b = this.ui.folderName.val().toString();
                            h.isValidName(b) ? this.model.unset("error") : this.model.set("error", this.finder.lang.ErrorMsg.FolderInvChar);
                            this.model.set("folderName", b)
                        }, submit: function (b) {
                            this.trigger("submit:form");
                            b.preventDefault()
                        }
                    },
                    modelEvents: {
                        "change:error": function (b, d) {
                            d ? (this.ui.error.show(), this.ui.error.html(d)) : this.ui.error.hide()
                        }
                    }
                })
            });
            n.define("CKFinder/Modules/CreateFolder/CreateFolder", ["backbone", "CKFinder/Modules/Folders/Views/FolderNameDialogView"], function (k, h) {
                function b(b) {
                    function d(b) {
                        b.data.context.parent.cid === f.cid && (b.data.response.error || f.trigger("ui:expand"), b.finder.removeListener("command:after:GetFolders",
                            d))
                    }

                    var f = b.data.context.folder;
                    b.data.response.error || (f.set("hasChildren", !0), b.finder.once("command:after:GetFolders", d), b.finder.request("command:send", {
                        name: "GetFolders",
                        folder: f,
                        context: {parent: f}
                    }, null, null, 30))
                }

                return function (g) {
                    g.setHandler("folder:create", function (b) {
                        var f = b.parent, e = b.newFolderName;
                        if (e)g.request("command:send", {
                            name: "CreateFolder",
                            type: "post",
                            folder: f,
                            params: {newFolderName: e},
                            context: {folder: f}
                        }); else {
                            b = new k.Model({
                                dialogMessage: g.lang.FolderNew, folderName: b.newFolderName,
                                error: !1
                            });
                            var a = g.request("dialog", {
                                view: new h({finder: g, model: b}),
                                name: "CreateFolder",
                                title: g.lang.NewNameDlgTitle,
                                context: {parent: f}
                            });
                            b.on("change:error", function (c, b) {
                                b ? a.disableButton("ok") : a.enableButton("ok")
                            })
                        }
                    });
                    g.on("dialog:CreateFolder:ok", function (b) {
                        var f = b.data.view.model;
                        f.get("error") || (f = f.get("folderName"), b.finder.request("dialog:destroy"), g.request("folder:create", {
                            parent: b.data.context.parent,
                            newFolderName: f
                        }))
                    });
                    g.on("contextMenu:folder", function (b) {
                        var f = b.finder, e = b.data.context.folder;
                        b.data.groups.addGroup("edit", [{
                            name: "CreateFolder",
                            label: f.lang.NewSubFolder,
                            isActive: e.get("acl").folderCreate,
                            icon: "ckf-folder-add",
                            action: function () {
                                f.request("folder:create", {parent: e})
                            }
                        }])
                    });
                    g.on("toolbar:reset:Main:folder", function (b) {
                        var f = b.data.folder;
                        f.get("acl").folderCreate && b.data.toolbar.push({
                            type: "button",
                            name: "CreateFolder",
                            priority: 70,
                            icon: "ckf-folder-add",
                            label: b.finder.lang.NewSubFolder,
                            action: function () {
                                g.request("folder:create", {parent: f})
                            }
                        })
                    });
                    g.on("command:after:CreateFolder",
                        b)
                }
            });
            n.define("text!CKFinder/Templates/DeleteFile/DeleteFileError.dot", [], function () {
                return "{{? it.msg }}<p>{{= it.msg }}</p>{{?}}\n<ul>\n{{~ it.errors :error }}<li>{{= error }}</li>{{~}}\n</ul>\n"
            });
            n.define("CKFinder/Modules/DeleteFile/DeleteFile", ["underscore", "backbone", "text!CKFinder/Templates/DeleteFile/DeleteFileError.dot", "CKFinder/Util/KeyCode"], function (k, h, b, g) {
                function d(a) {
                    var c = this.finder, b = a.files;
                    a = 1 < b.length ? c.lang.FilesDelete.replace("%1", b.length) : c.lang.FileDelete.replace("%1",
                        b[0].get("name"));
                    c.request("dialog:confirm", {name: "DeleteFileConfirm", msg: a, context: {files: b}})
                }

                function f(a, c) {
                    a.finder.request("folder:getActive").get("acl").fileDelete && a.data.toolbar.push({
                        type: "button",
                        name: "DeleteFiles",
                        priority: 10,
                        icon: "ckf-file-delete",
                        label: c,
                        action: function () {
                            a.finder.request("files:delete", {files: a.finder.request("files:getSelected").toArray()})
                        }
                    })
                }

                function e(a) {
                    var c = this.finder, b = c.request("files:getSelected"), d = 1 < b.length;
                    a.data.groups.addGroup("delete", [{
                        name: "DeleteFiles",
                        label: d ? c.lang.DeleteFiles : c.lang.Delete,
                        isActive: a.data.context.file.get("folder").get("acl").fileDelete,
                        icon: "ckf-file-delete",
                        action: function () {
                            c.request("files:delete", {files: d ? b : [a.data.context.file]})
                        }
                    }])
                }

                function a(a) {
                    var c = a.data.context.files, b = [];
                    a = a.finder;
                    c instanceof h.Collection && (c = c.toArray());
                    k.forEach(c, function (a) {
                        var c = a.get("folder");
                        b.push({name: a.get("name"), type: c.get("resourceType"), folder: c.getPath()})
                    });
                    var d = a.request("folder:getActive");
                    a.request("command:send", {
                        name: "DeleteFiles",
                        type: "post", post: {files: b}, folder: d, context: {files: c}
                    })
                }

                function c(a) {
                    var c = a.data.response;
                    a.cancel();
                    c.error || (k.forEach(a.data.context.files, function (a) {
                        a.get("folder").get("children").remove(a)
                    }), a.finder.fire("files:deleted", {files: a.data.context.files}, a.finder))
                }

                function m(a) {
                    var c = a.data.response;
                    if (c.error.number === t) {
                        a.cancel();
                        var d = !!c.deleted, e = a.finder.lang.Errors[t], f = [];
                        k.forEach(c.error.errors, function (c) {
                            f.push(c.name + ": " + a.finder.lang.Errors[c.number]);
                            117 === c.number && (d = !0)
                        });
                        a.finder.request("dialog", {
                            name: "DeleteFilesErrors",
                            title: a.finder.lang.OperationCompletedErrors,
                            template: b,
                            templateModel: new h.Model({deleted: c.deleted, errors: f, msg: e}),
                            buttons: ["okClose"]
                        });
                        d && a.finder.request("folder:refreshFiles")
                    }
                }

                var t = 302;
                return function (b) {
                    this.finder = b;
                    b.setHandler("files:delete", d, this);
                    b.on("dialog:DeleteFileConfirm:ok", a);
                    b.on("command:after:DeleteFiles", c);
                    b.on("command:error:DeleteFiles", m);
                    b.on("contextMenu:file", e, this, null, 80);
                    b.on("toolbar:reset:Main:file", function (a) {
                        f(a,
                            b.lang.Delete)
                    });
                    b.on("toolbar:reset:Main:files", function (a) {
                        f(a, b.lang.DeleteFiles)
                    });
                    b.on("file:keydown", function (a) {
                        if (a.data.evt.keyCode === g["delete"] && b.util.isShortcut(a.data.evt, "")) {
                            var c = b.request("files:getSelected");
                            b.request("files:delete", {files: 1 < c.length ? c : [a.data.file]})
                        }
                    })
                }
            });
            n.define("CKFinder/Modules/DeleteFolder/DeleteFolder", [], function () {
                return function (k) {
                    k.on("dialog:DeleteFolderConfirm:ok", function (h) {
                        h = h.data.context.folder;
                        k.request("command:send", {
                            name: "DeleteFolder", type: "post",
                            folder: h, context: {folder: h}
                        }, k)
                    });
                    k.on("command:after:DeleteFolder", function (h) {
                        var b = h.data.context.folder;
                        h.data.response.error || (h = b.get("parent"), b.unset("parent"), h.get("children").remove(b), k.request("folder:getActive").cid === b.cid && k.request("folder:select", {folder: h}), k.fire("folder:deleted", {folder: b}))
                    });
                    k.on("toolbar:reset:Main:folder", function (h) {
                        var b = h.data.folder;
                        !b.get("isRoot") && b.get("acl").folderDelete && h.data.toolbar.push({
                            type: "button", name: "DeleteFolder", priority: 20, icon: "ckf-folder-delete",
                            label: h.finder.lang.Delete, action: function () {
                                k.request("folder:delete", {folder: b})
                            }
                        })
                    });
                    k.on("contextMenu:folder", function (h) {
                        var b = h.finder, g = h.data.context.folder, d = g.get("isRoot"), f = g.get("acl");
                        h.data.groups.addGroup("delete", [{
                            name: "DeleteFolder",
                            label: b.lang.Delete,
                            isActive: !d && f.folderDelete,
                            icon: "ckf-folder-delete",
                            action: function () {
                                b.request("folder:delete", {folder: g})
                            }
                        }])
                    });
                    k.setHandler("folder:delete", function (h) {
                        h = h.folder;
                        k.request("dialog:confirm", {
                            name: "DeleteFolderConfirm", context: {folder: h},
                            msg: k.lang.FolderDelete.replace("%1", h.get("name"))
                        })
                    })
                }
            });
            n.define("CKFinder/Views/Base/LayoutView", ["marionette", "CKFinder/Views/Base/Common"], function (k, h) {
                return k.LayoutView.extend(h.proto).extend({
                    constructor: function (b) {
                        h.util.construct.call(this, b);
                        k.LayoutView.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }
                })
            });
            n.define("CKFinder/Views/Base/CollectionView", ["underscore", "marionette", "CKFinder/Views/Base/Common"], function (k, h, b) {
                var g = h.CollectionView;
                return g.extend(b.proto).extend({
                    constructor: function (d) {
                        b.util.construct.call(this,
                            d);
                        g.prototype.constructor.apply(this, Array.prototype.slice.call(arguments))
                    }, buildChildView: function (b, f, e) {
                        b = k.extend({model: b, finder: this.finder}, e);
                        return new f(b)
                    }
                })
            });
            n.define("CKFinder/Modules/Dialogs/Views/DialogButtonView", ["CKFinder/Util/KeyCode", "CKFinder/Views/Base/ItemView"], function (k, h) {
                return h.extend({
                    name: "DialogButton",
                    tagName: "button",
                    template: "{{= it.label }}",
                    attributes: {tabindex: 1},
                    events: {
                        click: function () {
                            this.trigger("button")
                        }, keydown: function (b) {
                            b.keyCode !== k.enter && b.keyCode !==
                            k.space || (b.preventDefault(), this.trigger("button"))
                        }
                    },
                    onRender: function () {
                        this.$el.attr("data-inline", !0).attr("data-ckf-button", this.model.get("name"))
                    }
                })
            });
            n.define("CKFinder/Modules/Dialogs/Views/DialogButtonsView", ["underscore", "backbone", "CKFinder/Views/Base/CollectionView", "CKFinder/Modules/Dialogs/Views/DialogButtonView"], function (k, h, b, g) {
                function d(b, d) {
                    var a = new h.Collection;
                    return k.forEach(b, function (c) {
                        var b = k.isString(c) ? c : c.name;
                        a.push(k.extend({icons: {}, label: b, name: b, event: b.toLocaleLowerCase()},
                            k.isString(c) ? d[b] : c))
                    }), a
                }

                return b.extend({
                    name: "DialogButtons", childView: g, initialize: function (b) {
                        this.collection = d(b.buttons, {
                            ok: {
                                label: this.finder.lang.OkBtn,
                                icons: {primary: "ui-icon-check"}
                            },
                            okClose: {label: this.finder.lang.OkBtn, icons: {primary: "ui-icon-check"}, event: "ok"},
                            cancel: {label: this.finder.lang.CancelBtn, icons: {primary: "ui-icon-close"}}
                        })
                    }
                })
            });
            n.define("text!CKFinder/Templates/Dialogs/DialogLayout.dot", [], function () {
                return '{{? it.title }}<div data-role="header" class="ui-title"><h1>{{= it.title }}</h1></div>{{?}}\n<div id="ckf-dialog-contents-{{= it.id }}" class="ckf-dialog-contents {{= it.contentClassName }}"></div>\n{{? it.hasButtons }}<div class="ui-content ckf-dialog-buttons" id="ckf-dialog-buttons-{{= it.id }}"></div>{{?}}\n'
            });
            n.define("CKFinder/Modules/Dialogs/Views/DialogView", "underscore jquery CKFinder/Util/KeyCode CKFinder/Views/Base/LayoutView CKFinder/Modules/Dialogs/Views/DialogButtonsView text!CKFinder/Templates/Dialogs/DialogLayout.dot".split(" "), function (k, h, b, g, d, f) {
                return g.extend({
                    template: f, className: "ckf-dialog", ui: {title: ".ui-title:first"}, regions: function (b) {
                        return {contents: "#ckf-dialog-contents-" + b.id, buttons: "#ckf-dialog-buttons-" + b.id}
                    }, initialize: function () {
                        this.listenTo(this.contents, "show", function () {
                                this.$el.trigger("create")
                            },
                            this);
                        h(".ui-popup-container").remove()
                    }, onRender: function () {
                        this.$el.attr("data-theme", this.finder.config.swatch).appendTo("body");
                        this.contents.show(this.getOption("innerView"));
                        this._addButtons();
                        this.$el.trigger("create");
                        this.$el.popup(this._getUiConfig());
                        try {
                            this.$el.popup("open", this.options.uiOpen || {})
                        } catch (a) {
                        }
                        this.$el.find('.ckf-dialog-buttons button[data-ckf-button="okClose"],.ckf-dialog-buttons button[data-ckf-button="ok"]').first().focus();
                        var d = this.getOption("focusItem");
                        d && (d = k.isString(d) ?
                            d : "input, textarea, select", d = this.$el.find(d).first(), d.length && d.focus());
                        return this.options.restrictHeight && this.restrictHeight(), this.$el.on("keydown", function (a) {
                            a.keyCode !== b.tab && a.stopPropagation()
                        }), this
                    }, onDestroy: function () {
                        try {
                            this.$el.popup("close"), this.$el.off("keydown"), this.$el.remove()
                        } catch (b) {
                        }
                    }, getButton: function (b) {
                        return this.$el.popup("widget").find('button[data-ckf-button="' + b + '"]')
                    }, enableButton: function (b) {
                        this.getButton(b).removeClass("ui-state-disabled")
                    }, disableButton: function (b) {
                        this.getButton(b).addClass("ui-state-disabled")
                    },
                    restrictHeight: function () {
                        if (!this.isDestroyed) {
                            var b = h(q).height() - this.ui.title.outerHeight() - this.buttons.$el.outerHeight() - this.$el.parent().position().top - 20;
                            this.contents.$el.css("max-height", parseInt(b, 10) + "px")
                        }
                    }, _addButtons: function () {
                        var b = this.getOption("buttons");
                        if (b) {
                            var a = this, b = new d({finder: this.finder, buttons: b});
                            this.listenTo(b, "childview:button", function (c) {
                                var b = c.model.get("event");
                                c = c.model.get("name");
                                "cancel" !== c && "okClose" !== c || a.destroy();
                                a.finder.fire("dialog:" + a.getOption("name") +
                                    ":" + b, a.getOption("clickData"), a.finder)
                            });
                            this.buttons.show(b)
                        }
                    }, _getUiConfig: function () {
                        function b(a, d, e) {
                            c[a] && c[a].apply(d, e)
                        }

                        var a = this, c = {}, d = this.getOption("uiOptions");
                        d && k.forEach(["create", "afterclose", "beforeposition"], function (a) {
                            c[a] = d[a];
                            delete d[a]
                        });
                        var f = {
                            create: function () {
                                a.contents.$el.css({
                                    minWidth: a.getOption("minWidth"),
                                    minHeight: a.getOption("minHeight"),
                                    maxHeight: q.innerHeight
                                });
                                b("create", this, arguments)
                            }, afterclose: function () {
                                a.destroy();
                                b("afterclose", this, arguments)
                            }, beforeposition: function (c,
                                                         f) {
                                d && d.positionTo && (delete f.x, delete f.y, f.positionTo = d.positionTo);
                                setTimeout(function () {
                                    a.options.restrictHeight && a.restrictHeight()
                                }, 0);
                                b("beforeposition", this, arguments)
                            }
                        }, g = a.finder.config.dialogOverlaySwatch;
                        return g && (f.overlayTheme = k.isBoolean(g) ? a.finder.config.swatch : g), k.extend(f, d)
                    }
                })
            });
            n.define("CKFinder/Views/MessageView", ["backbone", "CKFinder/Views/Base/ItemView"], function (k, h) {
                return h.extend({
                    name: "MessageView", className: "ckf-message", template: "{{= it.msg }}", initialize: function (b) {
                        this.model =
                            new k.Model({msg: b.msg})
                    }
                })
            });
            n.define("CKFinder/Modules/Dialogs/Dialogs", "underscore jquery backbone CKFinder/Util/KeyCode CKFinder/Modules/Dialogs/Views/DialogView CKFinder/Views/Base/ItemView CKFinder/Views/MessageView".split(" "), function (k, h, b, g, d, f, e) {
                function a(a) {
                    var c = this.finder;
                    if (w(), !a.name)throw"Name parameter must be specified for dialog";
                    var b = k.isUndefined(a.captureFormSubmit) ? !0 : a.captureFormSubmit, e = t(a, c, b), f = p(c, a, e), g = new d(f);
                    return c.request("focus:remember"), g.on("destroy",
                        function () {
                            c.request("focus:restore")
                        }), b && g.listenTo(e, "submit:form", function () {
                        return c.fire("dialog:" + a.name + ":ok", f.clickData, c), !1
                    }), g.render(), g
                }

                function c(c) {
                    c = k.extend({
                        name: "Info",
                        buttons: !1,
                        view: new e({msg: c.msg, finder: this.finder}),
                        transition: "flip"
                    }, c);
                    return a.call(this, c)
                }

                function m(c) {
                    c = k.extend({
                        name: "Confirm",
                        buttons: ["okClose", "cancel"],
                        title: this.finder.lang.common.messageTitle,
                        view: new e({msg: c.msg, finder: this.finder})
                    }, c);
                    return a.call(this, c)
                }

                function t(a, c, b) {
                    a.view ? a = a.view :
                        (c = {
                            name: a.name,
                            finder: c,
                            template: a.template
                        }, b && (c.triggers = {
                            "submit form": {
                                event: "submit:form",
                                preventDefault: !0,
                                stopPropagation: !1
                            }
                        }), a = new (f.extend(c))({model: a.templateModel}));
                    return a
                }

                function p(a, c, d) {
                    a = {
                        finder: a,
                        name: c.name,
                        id: k.uniqueId("ckf"),
                        minWidth: c.minWidth ? c.minWidth : a.config.dialogMinWidth,
                        minHeight: c.minHeight ? c.minHeight : a.config.dialogMinHeight,
                        focusItem: k.isUndefined(c.focusItem) ? a.config.dialogFocusItem : c.focusItem,
                        buttons: k.isUndefined(c.buttons) ? ["ok", "cancel"] : c.buttons,
                        captureFormSubmit: k.isUndefined(c.captureFormSubmit) ? !0 : c.captureFormSubmit,
                        restrictHeight: k.isUndefined(c.restrictHeight) ? !1 : c.restrictHeight,
                        uiOptions: c.uiOptions
                    };
                    return a.model = new b.Model({
                        id: a.id,
                        title: c.title,
                        hasButtons: !k.isUndefined(a.buttons),
                        contentClassName: k.isUndefined(c.contentClassName) ? " ui-content" : !1 === c.contentClassName ? "" : " " + c.contentClassName
                    }), a.clickData = {model: c.templateModel, view: d, context: c.context}, a.innerView = d, a
                }

                function w() {
                    h(".ckf-dialog").popup("close");
                    h(".ui-popup-container").remove()
                }

                return function (b) {
                    this.finder = b;
                    b.setHandlers({
                        dialog: {callback: a, context: this},
                        "dialog:info": {callback: c, context: this},
                        "dialog:confirm": {callback: m, context: this},
                        "dialog:destroy": w
                    });
                    b.request("key:listen", {key: g.escape});
                    b.on("keyup:27", function (a) {
                        var c;
                        h(".ckf-dialog").length && (c = a.data.evt, c.preventDefault(), c.stopPropagation(), w())
                    }, null, null, 20)
                }
            });
            n.define("text!CKFinder/Templates/EditImage/EditImageLayout.dot", [], function () {
                return '<div class="ckf-ei-wrapper">\n\t<div id="ckf-ei-preview" class="ckf-ei-preview"></div>\n\t<div id="ckf-ei-actions" class="ckf-ei-controls ui-body-{{= it.swatch }}"></div>\n</div>\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/EditImageLayout", ["CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/EditImage/EditImageLayout.dot"], function (k, h) {
                return k.extend({
                    name: "EditImageLayout",
                    template: h,
                    regions: {preview: "#ckf-ei-preview", actions: "#ckf-ei-actions"},
                    templateHelpers: function () {
                        return {swatch: this.finder.config.swatch}
                    },
                    onActionsExpand: function () {
                        this.preview.$el.addClass("ckf-ei-preview-reduced")
                    },
                    onActionsCollapse: function () {
                        this.preview.$el.removeClass("ckf-ei-preview-reduced")
                    }
                })
            });
            n.define("text!CKFinder/Templates/EditImage/ImagePreview.dot", [], function () {
                return '<canvas class="ckf-ei-canvas"></canvas>\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/ImagePreviewView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/ImagePreview.dot"], function (k, h) {
                return k.extend({name: "ImagePreview", template: h, ui: {canvas: ".ckf-ei-canvas"}})
            });
            n.define("text!CKFinder/Templates/EditImage/Action.dot", [], function () {
                return '<div data-role="collapsible" data-collapsed-icon="{{= it.icon}}" data-expanded-icon="{{= it.icon}}" data-iconpos="right" data-inset="false" tabindex="-1">\n    <h4 class="ckf-ei-action-title">{{= it.title }}</h4>\n    <div class="ckf-ei-action-controls">ActionView</div>\n</div>\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/ActionView", ["jquery", "CKFinder/Util/KeyCode", "CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/EditImage/Action.dot"], function (k, h, b, g) {
                return b.extend({
                    name: "ActionView",
                    template: g,
                    className: "ckf-ei-action",
                    ui: {heading: ".ckf-ei-action-title", controls: ".ckf-ei-action-controls"},
                    regions: {action: ".ckf-ei-action-controls"},
                    events: {
                        collapsiblecollapse: function () {
                            this.model.get("tool").trigger("collapse");
                            this.ui.heading.find(".ui-btn").removeClass("ui-btn-active");
                            this.trigger("collapse")
                        }, collapsibleexpand: function () {
                            this.model.get("tool").trigger("expand");
                            this.ui.heading.find(".ui-btn").addClass("ui-btn-active");
                            this.trigger("expand")
                        }, collapsiblecreate: function () {
                            this.$el.find(".ui-collapsible-heading-toggle").attr("tabindex", 0)
                        }, "keydown .ui-collapsible-heading-toggle": function (b) {
                            if (b.keyCode === h.space || b.keyCode === h.enter)b.stopPropagation(), b.preventDefault(), b = this.$el.find(".ui-collapsible").collapsible("option", "collapsed") ? "expand" : "collapse", this.$el.find(".ui-collapsible").collapsible(b)
                        }
                    },
                    collapse: function () {
                        this.$el.find(".ui-collapsible").collapsible("collapse")
                    },
                    onRender: function () {
                        this.action.show(this.model.get("tool").getView(this.finder))
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Views/ActionsView", ["jquery", "CKFinder/Views/Base/CollectionView", "CKFinder/Modules/EditImage/Views/ActionView", "text!CKFinder/Templates/EditImage/Action.dot"], function (k, h, b, g) {
                function d(b, a) {
                    var c = "desktop" === b;
                    k(".ckf-ei-controls .ui-collapsible-heading-toggle").toggleClass("ui-corner-all ui-btn-icon-notext",
                        !c).toggleClass("ltr" === a.lang.dir ? "ui-btn-icon-left" : "right", c)
                }

                function f(b) {
                    b.data.modeChanged && d(b.data.mode, b.finder)
                }

                return h.extend({
                    name: "ActionsView",
                    attributes: {"data-role": "collapsibleset"},
                    template: g,
                    childView: b,
                    childViewContainer: "#ckf-edit-image-actions",
                    childEvents: {
                        expand: function (b) {
                            this.children.forEach(function (a) {
                                a.cid === b.cid || a.ui.heading.hasClass("ui-collapsible-heading-collapsed") || a.collapse()
                            })
                        }
                    },
                    initialize: function () {
                        var b = this.finder;
                        this.collection.on("imageData:ready",
                            function () {
                                d(b.request("ui:getMode"), b);
                                k.mobile.resetActivePageHeight()
                            });
                        b.on("ui:resize", f)
                    },
                    onDestroy: function () {
                        this.finder.removeListener("ui:resize", f)
                    },
                    focusFirst: function () {
                        this.$el.find(".ui-collapsible-heading-toggle").first().focus()
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Models/EditImageData", ["backbone"], function (k) {
                return k.Model.extend({
                    defaults: {
                        file: null,
                        caman: null,
                        imagePreview: "",
                        fullImagePreview: "",
                        actions: null
                    }, initialize: function () {
                        this.set("actions", new k.Collection)
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Tools/Tool", ["backbone"], function (k) {
                return k.Model.extend({
                    getActionData: function () {
                        return new k.Model({})
                    }, saveDeferred: function (h, b) {
                        return b
                    }, getView: function (h) {
                        var b, g;
                        return b = this.get("viewClass"), g = new b({
                            finder: h,
                            model: this.getActionData()
                        }), this.set("view", g), g
                    }
                })
            });
            n.define("text!CKFinder/Templates/EditImage/Crop.dot", [], function () {
                return '<div class="ckf-ei-crop-controls-inputs">\n\t<label>\n\t\t{{= it.lang.EditImage.keepAspectRatio }}\n\t\t<input name="ckfCropKeepAspectRatio" type="checkbox"{{? it.keepAspectRatio }} checked="checked"{{?}} data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">\n\t</label>\n\t<button id="ckf-ei-crop-apply" data-icon="ckf-tick" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.apply }}</button>\n</div>\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/CropView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Crop.dot"], function (k, h) {
                return k.extend({
                    name: "CropView",
                    template: h,
                    className: "ckf-ei-crop-controls",
                    ui: {keepAspectRatio: 'input[name="ckfCropKeepAspectRatio"]', apply: "#ckf-ei-crop-apply"},
                    triggers: {"click @ui.apply": "apply"},
                    events: {
                        "change @ui.keepAspectRatio": function (b) {
                            b.stopPropagation();
                            b.preventDefault();
                            this.model.set("keepAspectRatio", this.ui.keepAspectRatio.is(":checked"))
                        }
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Views/CropBoxView", ["jquery", "CKFinder/Views/Base/ItemView"], function (k, h) {
                return h.extend({
                    name: "CropView",
                    className: "ckf-ei-crop-wrap",
                    template: '<div class="ckf-ei-crop"><div class="ckf-ei-crop-resize"></div><div class="ckf-ei-crop-info"></div></div>',
                    ui: {cropBox: ".ckf-ei-crop", cropResize: ".ckf-ei-crop-resize", cropInfo: ".ckf-ei-crop-info"},
                    events: {
                        "vmousedown @ui.cropBox": "onMouseDown",
                        "vmouseup @ui.cropBox": "onMouseUp",
                        "vmousedown @ui.cropResize": "onMouseDownOnResize",
                        "vmouseup @ui.cropResize": "onMouseUpOnResize"
                    },
                    modelEvents: {
                        change: "updatePosition", "change:keepAspectRatio": function () {
                            if (this.model.get("keepAspectRatio")) {
                                var b = this.model.get("renderHeight"), g = this.model.get("maxRenderHeight"), d = this.model.get("maxRenderWidth"), f = g - this.model.get("renderY"), e = d - this.model.get("renderX");
                                b > f && (b = f);
                                f = parseInt(b * d / g, 10);
                                f > e && (f = e, b = parseInt(f * g / d, 10));
                                this.model.set({renderWidth: f, renderHeight: b})
                            }
                        }
                    },
                    onRender: function () {
                        var b;
                        b = this.model.get("canvas");
                        this.$el.css({
                            width: this.model.get("maxRenderWidth"),
                            height: this.model.get("maxRenderHeight")
                        });
                        this.ui.cropBox.css({
                            backgroundImage: "url(" + b.toDataURL() + ")",
                            backgroundSize: this.model.get("maxRenderWidth") + "px " + this.model.get("maxRenderHeight") + "px"
                        });
                        this.updatePosition()
                    },
                    onMouseDown: function (b) {
                        var g = this;
                        b.stopPropagation();
                        k(q).on("vmousemove", {
                            model: g.model,
                            view: g,
                            moveStart: {x: b.clientX - g.model.get("renderX"), y: b.clientY - g.model.get("renderY")}
                        }, g.mouseMove);
                        k(q).one("vmouseup", function () {
                            g.onMouseUp()
                        })
                    },
                    onMouseUp: function (b) {
                        b && b.stopPropagation();
                        k(q).off("vmousemove", this.mouseMove)
                    },
                    mouseMove: function (b) {
                        var g, d, f, e;
                        g = b.data.model;
                        d = b.data.view.ui.cropBox;
                        f = b.clientX - b.data.moveStart.x;
                        b = b.clientY - b.data.moveStart.y;
                        e = d.outerWidth();
                        d = d.outerHeight();
                        e = g.get("maxRenderWidth") - e;
                        d = g.get("maxRenderHeight") - d;
                        f = 0 > f ? 0 : f;
                        b = 0 > b ? 0 : b;
                        g.set({renderX: f > e ? e : f, renderY: b > d ? d : b})
                    },
                    onMouseDownOnResize: function (b) {
                        var g = this;
                        b.stopPropagation();
                        k(q).on("vmousemove", {
                                model: g.model,
                                view: g,
                                moveStart: {
                                    x: b.clientX - g.model.get("renderWidth"),
                                    y: b.clientY - g.model.get("renderHeight")
                                }
                            },
                            g.mouseResize);
                        k(q).one("vmouseup", function () {
                            g.onMouseUpOnResize()
                        })
                    },
                    onMouseUpOnResize: function () {
                        k(q).off("vmousemove", this.mouseResize)
                    },
                    mouseResize: function (b) {
                        var g, d, f, e, a;
                        g = b.data.model;
                        d = g.get("minCrop");
                        f = b.clientX - b.data.moveStart.x;
                        b = b.clientY - b.data.moveStart.y;
                        e = g.get("maxRenderWidth") - g.get("renderX");
                        a = g.get("maxRenderHeight") - g.get("renderY");
                        b = d > b ? d : b;
                        f = d > f ? d : f;
                        g.get("keepAspectRatio") && (f = parseInt(b * g.get("maxRenderWidth") / g.get("maxRenderHeight"), 10));
                        g.set({
                            renderWidth: f > e ? e :
                                f, renderHeight: b > a ? a : b
                        })
                    },
                    updatePosition: function () {
                        var b = this.model.get("renderX"), g = this.model.get("renderY"), d = (this.ui.cropBox.outerWidth() - this.ui.cropBox.width()) / 2;
                        this.ui.cropBox.css({
                            top: g + "px",
                            left: b + "px",
                            width: this.model.get("renderWidth") + "px",
                            height: this.model.get("renderHeight") + "px",
                            backgroundPosition: -b - d + "px " + (-g - d) + "px"
                        });
                        this.ui.cropInfo.text(this.model.get("width") + "x" + this.model.get("height"));
                        this.ui.cropInfo.attr("data-ckf-position", this.model.get("x") + "," + this.model.get("y"))
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Tools/CropTool", ["backbone", "jquery", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/CropView", "CKFinder/Modules/EditImage/Views/CropBoxView"], function (k, h, b, g, d) {
                return b.extend({
                    defaults: {name: "Crop", viewClass: g, view: null, isVisible: !1}, initialize: function () {
                        function b(a) {
                            var d, e, f;
                            f = a.get("renderWidth");
                            e = a.get("renderHeight");
                            d = a.get("imageWidth") / a.get("maxRenderWidth");
                            a.set("width", parseInt(f * d, 10));
                            a.set("height", parseInt(e * d, 10));
                            a.set("x", parseInt(a.get("renderX") * d, 10));
                            a.set("y", parseInt(a.get("renderY") * d, 10))
                        }

                        function d() {
                            a.get("isVisible") && (a.closeCropBox(), a.openCropBox())
                        }

                        this.viewModel = new k.Model({
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0,
                            renderWidth: 0,
                            renderHeight: 0,
                            maxWidth: 0,
                            maxHeight: 0,
                            imageWidth: 0,
                            imageHeight: 0,
                            keepAspectRatio: !1
                        });
                        this.viewModel.on("change:renderWidth", b);
                        this.viewModel.on("change:renderHeight", b);
                        this.viewModel.on("change:renderX", b);
                        this.viewModel.on("change:renderY", b);
                        this.collection.on("imageData:ready",
                            function () {
                                var a, b, d, e, f;
                                a = this.get("editImageData");
                                d = a.get("caman").renderingCanvas;
                                b = h(d).width();
                                d = h(d).height();
                                e = parseInt(b / 2, 10);
                                f = parseInt(d / 2, 10);
                                this.viewModel.set({
                                    canvas: a.get("caman").renderingCanvas,
                                    minCrop: 10,
                                    x: a.get("imageWidth"),
                                    y: a.get("imageHeight"),
                                    renderX: parseInt((b - e) / 2, 10),
                                    renderY: parseInt((d - f) / 2, 10),
                                    width: a.get("imageWidth"),
                                    height: a.get("imageHeight"),
                                    renderWidth: e,
                                    renderHeight: f,
                                    maxRenderWidth: b,
                                    maxRenderHeight: d,
                                    imageWidth: a.get("imageInfo").width,
                                    imageHeight: a.get("imageInfo").height
                                });
                                this.get("view").on("apply", function () {
                                    this.cropView()
                                }, this)
                            }, this);
                        this.on("expand", this.openCropBox, this);
                        this.on("collapse", this.closeCropBox, this);
                        var a = this;
                        this.collection.on("tool:reset:after", d);
                        this.collection.on("ui:resize", d)
                    }, cropView: function () {
                        var b = this.get("editImageData"), d = b.get("caman").renderingCanvas.width / this.viewModel.get("maxRenderWidth");
                        b.get("caman").crop(parseInt(d * this.viewModel.get("renderWidth"), 10), parseInt(d * this.viewModel.get("renderHeight"), 10), parseInt(d * this.viewModel.get("renderX"),
                            10), parseInt(d * this.viewModel.get("renderY"), 10));
                        this.collection.requestThrottler();
                        var a = !1;
                        b.get("actions").forEach(function (c) {
                            "Rotate" === c.get("tool") && (a = !a)
                        });
                        d = b.get(a ? "imageHeight" : "imageWidth") / this.viewModel.get("maxRenderWidth");
                        b.get("actions").push({
                            tool: this.get("name"),
                            data: {
                                width: parseInt(d * this.viewModel.get("renderWidth"), 10),
                                height: parseInt(d * this.viewModel.get("renderHeight"), 10),
                                x: parseInt(d * this.viewModel.get("renderX"), 10),
                                y: parseInt(d * this.viewModel.get("renderY"), 10)
                            }
                        });
                        this.closeCropBox()
                    }, openCropBox: function () {
                        var b = this.get("editImageData").get("caman").renderingCanvas, e = h(b).width(), b = h(b).height(), a = parseInt(e / 2, 10), c = parseInt(b / 2, 10);
                        this.viewModel.set({
                            maxRenderWidth: e,
                            maxRenderHeight: b,
                            renderWidth: a,
                            renderHeight: c,
                            renderX: parseInt((e - a) / 2, 10),
                            renderY: parseInt((b - c) / 2, 10)
                        });
                        this.cropBox = new d({finder: this.collection.finder, model: this.viewModel});
                        this.cropBox.render().$el.appendTo(h(this.get("editImageData").get("caman").renderingCanvas).parent());
                        this.set("isVisible",
                            !0)
                    }, closeCropBox: function () {
                        this.cropBox && this.cropBox.destroy();
                        this.set("isVisible", !1)
                    }, saveDeferred: function (b, d) {
                        var a, c;
                        return a = new h.Deferred, c = a.promise(), d.then(function (c) {
                            c.crop(b.width, b.height, b.x, b.y).render(function () {
                                a.resolve(this)
                            })
                        }), c
                    }, getActionData: function () {
                        return this.viewModel
                    }
                })
            });
            n.define("text!CKFinder/Templates/EditImage/Rotate.dot", [], function () {
                return '<div class="ckf-ei-rotate-controls-inputs">\n\t<button id="ckf-ei-rotate-anticlockwise" data-icon="ckf-rotate-left" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.rotateAntiClockwise }}</button>\n\t<button id="ckf-ei-rotate-clockwise" data-icon="ckf-rotate-right" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.rotateClockwise }}</button>\n</div>\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/RotateView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Rotate.dot"], function (k, h) {
                return k.extend({
                    name: "RotateView",
                    template: h,
                    ui: {clockwise: "#ckf-ei-rotate-clockwise", antiClockwise: "#ckf-ei-rotate-anticlockwise"},
                    events: {"click @ui.clockwise": "onClockwise", "click @ui.antiClockwise": "onAntiClockwise"},
                    onClockwise: function () {
                        this.model.unset("lastRotationAngle", {silent: !0});
                        this.model.set("lastRotationAngle", 90)
                    },
                    onAntiClockwise: function () {
                        this.model.unset("lastRotationAngle",
                            {silent: !0});
                        this.model.set("lastRotationAngle", -90)
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Tools/RotateTool", ["jquery", "backbone", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/RotateView"], function (k, h, b, g) {
                return b.extend({
                    defaults: {name: "Rotate", viewClass: g, view: null, rotationApplied: !1}, initialize: function () {
                        function b() {
                            var d = f.get("editImageData").get("actions");
                            d.remove(d.where({tool: f.get("name")}));
                            f.viewModel.set("angle", 0);
                            f.viewModel.set("lastRotationAngle",
                                0)
                        }

                        var f = this;
                        this.viewModel = new h.Model({angle: 0, lastRotationAngle: 0});
                        this.viewModel.on("change:lastRotationAngle", function (b, a) {
                            this.get("editImageData").get("actions").push({tool: this.get("name"), data: a});
                            this.set("rotationApplied", !1);
                            this.collection.requestThrottler()
                        }, this);
                        this.collection.on("throttle", function (b) {
                            this.get("rotationApplied") || (b.rotate(this.viewModel.get("lastRotationAngle")), b.render(), this.set("rotationApplied", !0))
                        }, this);
                        this.collection.on("tool:reset:" + this.get("name"),
                            b);
                        this.collection.on("tool:reset:all", b)
                    }, saveDeferred: function (b, f) {
                        var e, a;
                        return e = new k.Deferred, a = e.promise(), f.then(function (a) {
                            a.rotate(b).render(function () {
                                e.resolve(this)
                            })
                        }), a
                    }, getActionData: function () {
                        return this.viewModel
                    }
                })
            });
            n.define("text!CKFinder/Templates/EditImage/Adjust.dot", [], function () {
                return '{{~ it.filters: filter }}\n<div class="ckf-ei-filter">\n\t<label class="ckf-ei-filter-icon ui-btn ui-btn-icon-left ui-icon-{{= filter.icon }}" for="{{= filter.name }}">{{= filter.label }}</label>\n\t<input class="ckf-ei-filter-slider" name="{{= filter.name }}" id="{{= filter.name }}" min="{{= filter.config.min }}"\n\t\t   max="{{= filter.config.max }}" step="{{= filter.config.step }}" value="{{= filter.config.init }}" type="range"\n\t\t   data-filter="{{= filter.name }}" data-initial="{{= filter.config.init }}">\n</div>\n{{~}}\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/AdjustView", ["jquery", "backbone", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Adjust.dot"], function (k, h, b, g) {
                return b.extend({
                    isSliding: !1,
                    applyFilterInterval: null,
                    lastFilterEvent: null,
                    name: "AdjustView",
                    template: g,
                    events: {
                        "slidestart .ckf-ei-filter-slider": "onSlideStart",
                        "slidestop .ckf-ei-filter-slider": "onSlideStop",
                        "change .ckf-ei-filter-slider": "onFilter",
                        "keyup .ckf-ei-filter-slider": "onFilter"
                    },
                    initialize: function () {
                        this.model.get("activeFilters").on("reset",
                            function () {
                                this.render()
                            }, this)
                    },
                    onSlideStart: function () {
                        this.isSliding = !0
                    },
                    onSlideStop: function (b) {
                        this.isSliding = !1;
                        this.applyFilters(b)
                    },
                    onRender: function () {
                        this.$el.trigger("create")
                    },
                    onFilter: function (b) {
                        var f = this;
                        f.isSliding || (this.lastFilterEvent = b, this.applyFilterInterval || (this.applyFilterInterval = setInterval(function () {
                            100 < Date.now() - f.lastFilterEvent.timeStamp && (f.applyFilters(f.lastFilterEvent), clearInterval(f.applyFilterInterval), f.applyFilterInterval = null)
                        }, 100)))
                    },
                    applyFilters: function (b) {
                        var f,
                            e, a;
                        a = this.model.get("activeFilters");
                        e = k(b.currentTarget).data("filter");
                        (f = a.where({filter: e})[0]) || (f = new h.Model({filter: e}), a.push(f));
                        f.set("value", k(b.currentTarget).val())
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Tools/AdjustTool", ["jquery", "backbone", "underscore", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/AdjustView"], function (k, h, b, g, d) {
                return g.extend({
                    defaults: function () {
                        var f = this.collection.finder.config, e = b.filter([{
                            name: "brightness", icon: "ckf-brightness",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "contrast",
                            icon: "ckf-contrast",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "saturation",
                            icon: "ckf-saturation",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "vibrance",
                            icon: "ckf-vibrance",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {
                            name: "exposure",
                            icon: "ckf-exposure",
                            config: {min: -100, max: 100, step: 1, init: 0}
                        }, {name: "hue", icon: "ckf-hue", config: {min: 0, max: 100, step: 1, init: 0}}, {
                            name: "sepia",
                            icon: "ckf-sepia",
                            config: {min: 0, max: 100, step: 1, init: 0}
                        }, {
                            name: "gamma",
                            icon: "ckf-gamma", config: {min: 0, max: 10, step: .1, init: 1}
                        }, {
                            name: "noise",
                            icon: "ckf-noise",
                            config: {min: 0, max: 100, step: 1, init: 0}
                        }, {
                            name: "clip",
                            icon: "ckf-clip",
                            config: {min: 0, max: 100, step: 1, init: 0}
                        }, {
                            name: "sharpen",
                            icon: "ckf-sharpen",
                            config: {min: 0, max: 100, step: 1, init: 0}
                        }, {
                            name: "stackBlur",
                            icon: "ckf-blur",
                            config: {min: 0, max: 20, step: 1, init: 0}
                        }], function (a) {
                            return b.contains(f.editImageAdjustments, a.name)
                        });
                        return {name: "Adjust", viewClass: d, view: null, filters: e}
                    }, initialize: function () {
                        function b() {
                            var c = d.get("editImageData").get("actions");
                            c.remove(c.where({tool: d.get("name")}));
                            a.reset()
                        }

                        var d = this, a = new h.Collection;
                        a.on("add", function () {
                            d.collection.resetTool("Presets")
                        });
                        d.collection.on("tool:reset:" + d.get("name"), b);
                        d.collection.on("tool:reset:all", b);
                        a.on("change", function () {
                            var a, c, b;
                            b = d.get("editImageData").get("actions");
                            c = b.where({tool: d.get("name")})[0];
                            a = this.toJSON();
                            c || (c = new h.Model({tool: d.get("name")}), b.push(c));
                            c.set("data", a);
                            d.collection.requestThrottler()
                        });
                        var c = new h.Model({filters: this.get("filters"), activeFilters: a});
                        this.on("change:editImageData", function (a, b) {
                            c.set("file", b.get("file"))
                        });
                        this.collection.on("throttle", function (c) {
                            a.length && a.clone().forEach(function (a) {
                                c[a.get("filter")](parseFloat(a.get("value")))
                            })
                        });
                        this.viewModel = c;
                        this.activeFilters = a
                    }, getActionData: function () {
                        return this.viewModel
                    }, saveDeferred: function (b, d) {
                        var a = new k.Deferred, c = a.promise();
                        return d.then(function (c) {
                            k.each(b, function (a, b) {
                                c[b.filter](parseFloat(b.value))
                            });
                            c.render(function () {
                                a.resolve(this)
                            })
                        }), c
                    }
                })
            });
            n.define("text!CKFinder/Templates/EditImage/Presets.dot",
                [], function () {
                    return '{{~ it.presets: preset }}\n<button class="ckf-ei-preset" data-preset="{{= preset.name }}"><img class="ckf-ei-preset-preview" /> {{= preset.label }}</button>\n{{~}}\n'
                });
            n.define("CKFinder/Modules/EditImage/Views/PresetsView", ["underscore", "jquery", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Presets.dot"], function (k, h, b, g) {
                return b.extend({
                    name: "PresetsView",
                    template: g,
                    events: {"click .ckf-ei-preset": "onPreset"},
                    onRender: function () {
                        function b() {
                            if (p.length) {
                                var a,
                                    e;
                                a = h(p.shift());
                                e = a.data("preset");
                                c("#" + g, f, function () {
                                    this.revert(!1);
                                    this[e]().render(function () {
                                        a.find("img").attr("src", this.toBase64());
                                        b()
                                    })
                                })
                            } else t.remove()
                        }

                        var f, e = this.model.get("file");
                        if (this.finder.config.initConfigInfo.thumbs) {
                            var a;
                            k.forEach(this.finder.config.initConfigInfo.thumbs, function (c) {
                                c = parseInt(c.split("x")[0]);
                                !a && 240 <= c && (a = c)
                            });
                            a && (f = this.finder.request("file:getThumb", {file: e}))
                        }
                        f && this.finder.config.initConfigInfo.thumbs || (f = this.finder.request("image:previewUrl", {
                            file: e,
                            maxWidth: 240, maxHeight: 80, noCache: !0
                        }));
                        var c = this.model.get("Caman"), g = k.uniqueId("ckf-"), t = h("<canvas>").attr("id", g).attr("width", 240).attr("height", 240).css("display", "none").appendTo("body"), p = this.$el.find(".ckf-ei-preset").toArray();
                        b()
                    },
                    onPreset: function (b) {
                        this.model.set("active", h(b.currentTarget).data("preset"))
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Tools/PresetsTool", ["jquery", "underscore", "backbone", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/PresetsView"],
                function (k, h, b, g, d) {
                    return g.extend({
                        defaults: function () {
                            var b, e, a;
                            return b = this.collection.finder.config, e = [{name: "clarity"}, {name: "concentrate"}, {name: "crossProcess"}, {name: "glowingSun"}, {name: "grungy"}, {name: "hazyDays"}, {name: "hemingway"}, {name: "herMajesty"}, {name: "jarques"}, {name: "lomo"}, {name: "love"}, {name: "nostalgia"}, {name: "oldBoot"}, {name: "orangePeel"}, {name: "pinhole"}, {name: "sinCity"}, {name: "sunrise"}, {name: "vintage"}], a = h.filter(e, function (a) {
                                return h.contains(b.editImagePresets, a.name)
                            }),
                            {name: "Presets", viewClass: d, view: null, presets: a}
                        }, initialize: function () {
                            function d() {
                                var c = e.get("editImageData").get("actions");
                                a.set("active", null);
                                c.remove(c.where({tool: e.get("name")}))
                            }

                            var e = this, a = new b.Model({
                                Caman: this.get("Caman"),
                                active: null,
                                presets: this.get("presets")
                            });
                            a.on("change:active", function (a, b) {
                                var d, f;
                                b && (e.collection.resetTool("Adjust"), d = e.get("editImageData"), f = d.get("actions"), f.remove(f.where({tool: e.get("name")})), f.push({
                                    tool: e.get("name"),
                                    data: b
                                }), e.collection.requestThrottler())
                            });
                            e.collection.on("throttle", function (a) {
                                var b = e.viewModel.get("active");
                                b && a[b]()
                            });
                            e.collection.on("tool:reset:" + e.get("name"), d);
                            e.collection.on("tool:reset:all", d);
                            this.on("change:editImageData", function (c, b) {
                                a.set("file", b.get("file"))
                            });
                            this.viewModel = a
                        }, saveDeferred: function (b, d) {
                            var a, c;
                            return a = new k.Deferred, c = a.promise(), d.then(function (c) {
                                c[b]().render(function () {
                                    a.resolve(this)
                                })
                            }), c
                        }, getActionData: function () {
                            return this.viewModel
                        }
                    })
                });
            n.define("text!CKFinder/Templates/EditImage/Resize.dot",
                [], function () {
                    return '<div class="ui-grid-a">\n\t<div class="ckf-ei-resize-controls-inputs">\n\t\t<input name="ckfResizeWidth" value="{{= it.displayWidth }}">\n\t\t<p class="ckf-ei-resize-controls-text">x</p>\n\t\t<input name="ckfResizeHeight" value="{{= it.displayHeight }}">\n\t\t<p class="ckf-ei-resize-controls-text">{{= it.lang.PixelShort}}</p>\n\t</div>\n</div>\n<label>\n\t{{= it.lang.EditImage.keepAspectRatio }}\n\t<input type="checkbox" name="ckfResizeKeepAspectRatio" {{? it.keepAspectRatio }}checked="checked"{{?}} data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">\n</label>\n<button id="ckf-ei-resize-apply" data-icon="ckf-tick" data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}">{{= it.lang.EditImage.apply }}</button>\n'
                });
            n.define("CKFinder/Modules/EditImage/Views/ResizeView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Resize.dot"], function (k, h) {
                return k.extend({
                    name: "ResizeView",
                    template: h,
                    className: "ckf-ei-resize-controls",
                    ui: {
                        width: 'input[name="ckfResizeWidth"]',
                        height: 'input[name="ckfResizeHeight"]',
                        keepAspectRatio: 'input[name="ckfResizeKeepAspectRatio"]',
                        apply: "#ckf-ei-resize-apply"
                    },
                    triggers: {"click @ui.apply": "apply"},
                    events: {
                        "change @ui.width": "onWidth", "change @ui.height": "onHeight",
                        "change @ui.keepAspectRatio": "onAspectRatio"
                    },
                    modelEvents: {
                        "change:realWidth": "render",
                        "change:displayWidth": "setWidth",
                        "change:displayHeight": "setHeight"
                    },
                    onRender: function () {
                        this.$el.trigger("create")
                    },
                    onAspectRatio: function () {
                        var b = this.ui.keepAspectRatio.is(":checked");
                        this.model.set("keepAspectRatio", b);
                        b && this.onWidth()
                    },
                    onWidth: function () {
                        var b, g, d, f, e;
                        this.dontRender || (f = this.model.get("displayWidth"), 0 > f || (d = parseInt(this.ui.width.val(), 10), e = this.model.get("realWidth"), d > e && (d = e), b = this.model.get("displayHeight"),
                        this.model.get("keepAspectRatio") && (g = e / this.model.get("realHeight"), b = parseInt(d / g, 10)), this.updateSizes(d, b)))
                    },
                    onHeight: function () {
                        var b, g, d, f, e;
                        this.dontRender || (f = this.model.get("displayHeight"), 0 > f || (b = parseInt(this.ui.height.val(), 10), e = this.model.get("realHeight"), b > e && (b = e), d = this.model.get("displayWidth"), this.model.get("keepAspectRatio") && (g = this.model.get("realWidth") / e, d = parseInt(b * g, 10)), this.updateSizes(d, b)))
                    },
                    updateSizes: function (b, g) {
                        this.model.set({displayWidth: b, displayHeight: g});
                        this.dontRender = !0;
                        this.ui.width.val(b);
                        this.ui.height.val(g);
                        this.dontRender = !1
                    },
                    setWidth: function () {
                        this.ui.width.val(this.model.get("displayWidth"))
                    },
                    setHeight: function () {
                        this.ui.height.val(this.model.get("displayHeight"))
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Tools/ResizeTool", ["jquery", "backbone", "CKFinder/Modules/EditImage/Tools/Tool", "CKFinder/Modules/EditImage/Views/ResizeView"], function (k, h, b, g) {
                var d = h.Model.extend({
                    defaults: {
                        realWidth: -1, realHeight: -1, displayWidth: -1, displayHeight: -1,
                        renderWidth: -1, renderHeight: -1, maxRenderWidth: -1, maxRenderHeight: -1, keepAspectRatio: !0
                    }
                });
                return b.extend({
                    defaults: {name: "Resize", viewClass: g, view: null}, initialize: function () {
                        this.viewModel = new d;
                        this.collection.on("imageData:ready", function () {
                            var b = this.get("editImageData");
                            this.viewModel.set({
                                realWidth: b.get("imageWidth"),
                                realHeight: b.get("imageHeight"),
                                displayWidth: b.get("imageWidth"),
                                displayHeight: b.get("imageHeight"),
                                renderWidth: b.get("renderWidth"),
                                renderHeight: b.get("renderHeight"),
                                maxRenderWidth: b.get("renderWidth"),
                                maxRenderHeight: b.get("renderHeight")
                            });
                            this.get("view").on("apply", function () {
                                this.resizeView()
                            }, this)
                        }, this);
                        this.collection.on("tool:reset:all", function () {
                            var b, d;
                            b = this.get("editImageData");
                            d = b.get("imageInfo");
                            this.viewModel.set({
                                realWidth: d.width,
                                realHeight: d.height,
                                displayWidth: d.width,
                                displayHeight: d.height,
                                renderWidth: b.get("renderWidth"),
                                renderHeight: b.get("renderHeight"),
                                maxRenderWidth: b.get("renderWidth"),
                                maxRenderHeight: b.get("renderHeight")
                            })
                        }, this)
                    }, resizeView: function () {
                        var b, d, a,
                            c, g, h, k, w, n;
                        b = this.viewModel;
                        d = this.get("editImageData");
                        g = b.get("displayWidth");
                        c = b.get("displayHeight");
                        w = b.get("maxRenderWidth");
                        n = b.get("maxRenderHeight");
                        c > n || g > w ? (a = c > g ? n / c : w / g, k = parseInt(a * c, 10), h = parseInt(a * g, 10)) : (h = g, k = c);
                        b.set({realWidth: g, realHeight: c});
                        d.get("actions").push({tool: this.get("name"), data: {width: g, height: c}});
                        d.set({imageWidth: g, imageHeight: c});
                        d.get("caman").resize({width: h, height: k});
                        this.collection.requestThrottler()
                    }, saveDeferred: function (b, d) {
                        var a, c;
                        return a = new k.Deferred,
                            c = a.promise(), d.then(function (c) {
                            c.resize({width: b.width, height: b.height}).render(function () {
                                a.resolve(this)
                            })
                        }), c
                    }, getActionData: function () {
                        return this.viewModel
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Tools", "underscore jquery backbone CKFinder/Modules/EditImage/Tools/CropTool CKFinder/Modules/EditImage/Tools/RotateTool CKFinder/Modules/EditImage/Tools/AdjustTool CKFinder/Modules/EditImage/Tools/PresetsTool CKFinder/Modules/EditImage/Tools/ResizeTool".split(" "), function (k, h, b, g, d, f, e, a) {
                return b.Collection.extend({
                    initialize: function () {
                        this.isRendering =
                            this.needRender = !1;
                        this.on("add", function (a) {
                            a.set("name", a.get("tool").get("name"))
                        })
                    }, setupDefault: function (c, b) {
                        this.finder = c;
                        this.Caman = b;
                        this.add({
                            title: c.lang.EditImage.resize,
                            icon: "ckf-resize",
                            tool: new a(null, {collection: this})
                        });
                        this.add({
                            title: c.lang.EditImage.crop,
                            icon: "ckf-crop",
                            tool: new g(null, {collection: this})
                        });
                        this.add({
                            title: c.lang.EditImage.rotate,
                            icon: "ckf-rotate",
                            tool: new d(null, {collection: this})
                        });
                        var h = c.config.editImageAdjustments;
                        h && h.length && (h = new f(null, {collection: this}),
                            this.add({
                                title: c.lang.EditImage.adjust,
                                icon: "ckf-adjust",
                                tool: h
                            }), k.forEach(h.get("filters"), function (a) {
                            a.label = c.lang.EditImage.filters[a.name]
                        }));
                        (h = c.config.editImagePresets) && h.length && (h = new e({Caman: b}, {collection: this}), this.add({
                            title: c.lang.EditImage.presets,
                            icon: "ckf-presets",
                            tool: h
                        }), k.forEach(h.get("presets"), function (a) {
                            a.label = c.lang.EditImage.preset[a.name]
                        }));
                        return this
                    }, setImageData: function (a) {
                        this.editImageData = a;
                        a.on("change:renderHeight", function () {
                            this.checkReady()
                        }, this);
                        this.forEach(function (b) {
                            b.get("tool").set("editImageData", a)
                        })
                    }, setImageInfo: function (a) {
                        this.editImageData.set("imageInfo", a);
                        this.editImageData.set("imageWidth", a.width);
                        this.editImageData.set("imageHeight", a.height);
                        this.checkReady()
                    }, checkReady: function () {
                        this.editImageData && this.editImageData.has("imageInfo") && this.editImageData.has("renderWidth") && this.trigger("imageData:ready")
                    }, resetTool: function (a) {
                        var b;
                        a ? this.trigger("tool:reset:" + a) : (this.trigger("tool:reset:all"), b = this.editImageData.get("caman"),
                            b.reset(), b.render(), this.editImageData.get("actions").reset());
                        this.trigger("tool:reset:after")
                    }, doSave: function (a) {
                        var b = this, d = k.uniqueId("edit-image-canvas"), e = h("<canvas>").attr("id", d).css("display", "none").appendTo("body"), f = this.editImageData.get("actions"), g = this.Caman, l = new h.Deferred, n = new h.Deferred, q = l.promise();
                        return g("#" + d, a, function () {
                            var a = this, c = f.findWhere({tool: "Adjust"});
                            c && (f.remove(c), f.push(c));
                            (c = f.findWhere({tool: "Presets"})) && (f.remove(c), f.push(c));
                            f.forEach(function (a) {
                                q =
                                    this.findWhere({name: a.get("tool")}).get("tool").saveDeferred(a.get("data"), q)
                            }, b);
                            q.then(function () {
                                n.resolve(a.toBase64());
                                e.remove()
                            });
                            l.resolve(a)
                        }), n.promise()
                    }, requestThrottler: function () {
                        var a = this;
                        this.needRender = !0;
                        this.throttleID || (this.throttleID = setInterval(function () {
                            if (a.needRender && !a.isRendering) {
                                a.isRendering = !0;
                                var b = a.editImageData.get("caman");
                                try {
                                    b.revert(!1)
                                } catch (d) {
                                }
                                a.trigger("throttle", b);
                                b.render(function () {
                                    return !1
                                });
                                a.isRendering = !1;
                                a.needRender = !1
                            }
                        }, 200))
                    }, destroy: function () {
                        this.throttleID &&
                        clearInterval(this.throttleID)
                    }, haveDataToSave: function () {
                        return !0
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/Models/ProgressModel", ["backbone"], function (k) {
                return k.Model.extend({
                    defaults: {
                        progress: 0,
                        state: "normal",
                        message: "",
                        eta: !1,
                        speed: !1,
                        progressMessage: "",
                        speedMessage: ""
                    }, initialize: function () {
                        this.on("change", function (h) {
                            var b, g;
                            h.changed.time && (b = h.previous("time"), b && (g = (h.get("bytes") - h.previous("bytes") / (h.get("time") - b)).toFixed(1), this.set({
                                eta: ((h.get("bytesTotal") - h.get("bytes")) / (100 *
                                g)).toFixed(), speed: g
                            })))
                        })
                    }
                })
            });
            n.define("text!CKFinder/Templates/EditImage/Progress.dot", [], function () {
                return '<div class="ckf-ei-progress">\n\t<div class="ckf-ei-progress-message">{{= it.message }}</div>\n\t<div class="ckf-progress{{? it.state ===\'indeterminate\' }} ckf-progress-indeterminate{{?}}">\n\t\t<div class="ckf-progress-bar ckf-progress-ok" style="width:{{= it.value }}%;" ></div>\n\t</div>\n\t{{? it.eta }}\n\t<div>\n\t\t{{= it.progressMessage.replace( \'%1\', it.speedMessage.replace( \'%1\', it.speed ) ) }}\n\t\t<p>{{= it.eta }} / {{= it.speed }}</p>\n\t</div>\n\t{{?}}\n</div>\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/ProgressView", ["underscore", "jquery", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/EditImage/Progress.dot"], function (k, h, b, g) {
                return b.extend({
                    name: "EditImageProgressView",
                    template: g,
                    ui: {progressWrap: ".ckf-ei-progress", progressMessage: ".ckf-ei-progress-message"},
                    modelEvents: {change: "render"},
                    onRender: function () {
                        this.$el.trigger("create")
                    }
                })
            });
            n.define("CKFinder/Models/File", ["backbone"], function (k) {
                return k.Model.extend({
                    defaults: {
                        name: "", date: "",
                        size: -1, folder: null, "view:isFolder": !1
                    }, getExtension: function () {
                        return this.constructor.extensionFromFileName(this.get("name"))
                    }, getUrl: function () {
                        if (!this.has("url")) {
                            var h = this.get("folder").getUrl();
                            this.set("url", h && h + "/" + this.get("name"), {silent: !0})
                        }
                        return this.get("url")
                    }, isImage: function () {
                        return this.constructor.isExtensionOfImage(this.getExtension())
                    }, refresh: function () {
                        this.trigger("refresh")
                    }
                }, {
                    isValidName: function (h) {
                        return !/[\\\/:\*\?"<>\|]/.test(h)
                    }, isExtensionOfImage: function (h) {
                        return /jpeg|jpg|gif|png/.test(h.toLowerCase())
                    },
                    extensionFromFileName: function (h) {
                        return h.substr(h.lastIndexOf(".") + 1)
                    }
                })
            });
            n.define("text!CKFinder/Templates/EditImage/ConfirmDialog.dot", [], function () {
                return '<label>\n    {{= it.lang.EditImage.saveDialogOverwrite }}\n\t<input tabindex="1" type="checkbox" name="ckfEditImageOverwrite" {{? it.overwrite }}checked="checked"{{?}}>\n</label>\n<div class="filename-input-area" {{? it.overwrite }}style="display:none"{{?}}>\n    {{= it.lang.EditImage.saveDialogSaveAs }}\n    <div>\n        <span class="filename-extension-label">.{{! it.extension }}</span>\n        <div class="ui-input-text ui-body-inherit ui-corner-all ui-shadow-inset">\n    \t\t<input tabindex="1" data-enhanced="true" type="text" name="ckfEditImageFileName" value="{{! it.name }}" />\n        </div>\n    </div>\n\n    <p class="ckf-ei-confirm-error error-message"></p>\n</div>\n'
            });
            n.define("CKFinder/Modules/EditImage/Views/ConfirmDialogView", ["CKFinder/Views/Base/ItemView", "CKFinder/Models/File", "text!CKFinder/Templates/EditImage/ConfirmDialog.dot"], function (k, h, b) {
                return k.extend({
                    name: "CropView",
                    template: b,
                    className: "ckf-ei-crop-controls",
                    ui: {
                        error: ".ckf-ei-confirm-error",
                        overwrite: 'input[name="ckfEditImageOverwrite"]',
                        fileName: 'input[name="ckfEditImageFileName"]',
                        fileNameInputArea: ".filename-input-area"
                    },
                    events: {
                        "change @ui.overwrite": function (b) {
                            b.stopPropagation();
                            b.preventDefault();
                            (b = this.ui.overwrite.is(":checked")) ? (this.model.set("name", this.model.get("originalName")), this.model.unset("error"), this.ui.fileNameInputArea.hide()) : this.ui.fileNameInputArea.show();
                            this.model.set("overwrite", b)
                        }, "input @ui.fileName": function () {
                            var b = this.ui.fileName.val().toString();
                            h.isValidName(b) ? this.model.unset("error") : this.model.set("error", this.finder.lang.ErrorMsg.FileInvChar);
                            this.model.set("name", b)
                        }
                    },
                    modelEvents: {
                        "change:error": function (b, d) {
                            d ? (this.ui.error.show(), this.ui.error.html(d)) :
                                this.ui.error.hide()
                        }
                    }
                })
            });
            n.define("CKFinder/Modules/EditImage/EditImage", "underscore jquery backbone CKFinder/Modules/EditImage/Views/EditImageLayout CKFinder/Modules/EditImage/Views/ImagePreviewView CKFinder/Modules/EditImage/Views/ActionsView CKFinder/Modules/EditImage/Models/EditImageData CKFinder/Modules/EditImage/Tools CKFinder/Modules/EditImage/Models/ProgressModel CKFinder/Modules/EditImage/Views/ProgressView CKFinder/Modules/EditImage/Views/ConfirmDialogView".split(" "), function (k, h, b, g,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  d, f, e, a, c, m, t) {
                function p(a) {
                    var b = this, c = a.data.context.file.get("folder").get("acl");
                    a.data.context.file.isImage() && a.data.groups.addGroup("edit", [{
                        name: "EditImage",
                        label: b.finder.lang.Fileeditor.contextMenuName,
                        isActive: c.fileView && c.fileRename,
                        icon: "ckf-file-edit",
                        action: function () {
                            w(b, a.data.context.file)
                        }
                    }])
                }

                function w(a, b) {
                    if (k.isUndefined(A)) {
                        var c = n.require.toUrl(a.finder.config.caman || "libs/caman") + ".js?ver=8mhio5";
                        n.require([c], function (c) {
                            A = c || q.Caman;
                            v(a, b)
                        })
                    } else v(a, b)
                }

                function v(b,
                           c) {
                    var h = b.finder, k = new a;
                    k.setupDefault(h, A);
                    k.on("throttle", function () {
                        h.fire("editImage:renderPreview", {actions: w.get("actions").clone()}, h)
                    });
                    var p = new g({finder: h}), m = new d({finder: h}), t = new f({finder: h, collection: k});
                    h.once("page:show:EditImage", function () {
                        p.preview.show(m);
                        p.actions.show(t);
                        p.$el.trigger("create");
                        h.request("toolbar:reset", {name: "EditImage", context: {tools: k}});
                        var a = A(m.ui.canvas.selector, w.get("imagePreview"), function () {
                            h.request("loader:hide");
                            t.focusFirst();
                            w.set({
                                renderWidth: m.ui.canvas.width(),
                                renderHeight: m.ui.canvas.height()
                            })
                        });
                        w.set("caman", a)
                    });
                    var w = new e({
                        file: c,
                        imagePreview: h.request("image:previewUrl", {
                            file: c,
                            maxWidth: q.innerWidth - 224,
                            maxHeight: q.innerHeight - 100,
                            noCache: !0
                        }),
                        fullImagePreview: h.request("image:previewUrl", {
                            file: c,
                            maxWidth: 1E6,
                            maxHeight: 1E6,
                            noCache: !0
                        })
                    });
                    k.setImageData(w);
                    h.request("loader:show", {text: h.lang.EditImage.loading});
                    h.request("command:send", {
                        name: "ImageInfo",
                        folder: c.get("folder"),
                        params: {fileName: c.get("name")}
                    }).done(function (a) {
                        function b() {
                            k.trigger("ui:resize")
                        }

                        if (a.error && 117 === a.error.number)return h.once("command:error:ImageInfo", function (a) {
                            a.cancel()
                        }), h.request("loader:hide"), h.request("folder:refreshFiles"), void h.request("dialog:info", {msg: h.lang.ErrorMsg.MissingFile});
                        a = {width: a.width, height: a.height, size: a.size};
                        c.set("imageInfo", a);
                        k.setImageInfo(a);
                        h.util.isWidget() && l(h);
                        h.once("page:create:EditImage", function () {
                            h.request("toolbar:create", {name: "EditImage", page: "EditImage"})
                        });
                        h.request("page:create", {
                            view: p, title: h.lang.EditImage.title, name: "EditImage",
                            className: "ckf-ei-page"
                        });
                        h.request("page:show", {name: "EditImage"});
                        h.request("loader:show", {text: h.lang.EditImage.loading});
                        t.on("childview:expand", function () {
                            p.onActionsExpand()
                        }).on("childview:collapse", function () {
                            p.onActionsCollapse()
                        });
                        h.on("ui:resize", b);
                        h.once("page:destroy:EditImage", function () {
                            h.removeListener("ui:resize", b)
                        })
                    })
                }

                function l(a) {
                    function b() {
                        d = !1;
                        a.removeListener("minimized", b)
                    }

                    function c() {
                        d && a.request("minimize");
                        a.removeListener("page:destroy:EditImage", c);
                        a.removeListener("minimized",
                            b)
                    }

                    var d = !1;
                    a.request("isMaximized") || (a.request("maximize"), d = !0);
                    a.once("minimized", b);
                    a.once("page:destroy:EditImage", c)
                }

                function z(a, c) {
                    var d;
                    if (c.haveDataToSave()) {
                        d = a.finder;
                        var e = c.editImageData.get("file"), f = e.getExtension(), g = e.get("name");
                        if (f) {
                            var h = g.lastIndexOf("." + f);
                            0 < h && (g = g.substr(0, h))
                        }
                        var e = new b.Model({
                            overwrite: !0,
                            oldName: e.get("name"),
                            name: g,
                            originalName: g,
                            extension: f,
                            tools: c,
                            error: !1
                        }), k = d.request("dialog", {
                            view: new t({finder: d, model: e}), title: d.lang.EditImage.saveDialogTitle,
                            name: "EditImageConfirm", buttons: ["ok", "cancel"], context: {viewModel: e, tools: c}
                        });
                        e.on("change:error", function (a, b) {
                            b ? k.disableButton("ok") : k.enableButton("ok")
                        })
                    }
                }

                function r(a, b, d) {
                    function e() {
                        k && k.abort();
                        f.request("dialog:destroy")
                    }

                    var f = a.finder;
                    a = b.editImageData;
                    var g = new c({
                        progressMessage: f.lang.SizePerSecond,
                        speedMessage: f.lang.Kb
                    }), h = new m({finder: f, model: g});
                    if (f.request("dialog", {
                            view: h,
                            title: f.lang.EditImage.saveDialogTitle,
                            name: "EditImageSaveProgress",
                            buttons: ["cancel"]
                        }), f.on("dialog:EditImageSaveProgress:cancel",
                            e), g.set("message", f.lang.EditImage.downloadAction), !q.URL || !q.URL.createObjectURL)return g.set("state", "indeterminate"), void D(a.get("fullImagePreview"), b, f, g, d);
                    g.set({bytes: 0, bytesTotal: 0, value: 0, time: (new Date).getTime()});
                    var k = new XMLHttpRequest;
                    k.onprogress = function (a) {
                        a.lengthComputable && g.set({
                            state: "normal",
                            bytes: a.loaded,
                            bytesTotal: a.total,
                            value: a.loaded / a.total * C,
                            time: (new Date).getTime()
                        });
                        a.lengthComputable || g.set("state", "indeterminate")
                    };
                    k.onload = function () {
                        return f.removeListener("dialog:EditImageSaveProgress:cancel",
                            e), 200 !== this.status ? (f.request("folder:refreshFiles"), f.request("page:destroy", {name: "EditImage"}), void f.request("dialog:info", {msg: f.lang.ErrorMsg.MissingFile})) : (g.set({
                            value: C,
                            eta: !1,
                            speed: !1,
                            time: 0
                        }), void D(q.URL.createObjectURL(new Blob([this.response])), b, f, g, d))
                    };
                    k.open("GET", a.get("fullImagePreview"), !0);
                    k.responseType = "arraybuffer";
                    k.send(null)
                }

                function D(a, b, c, d, e) {
                    d.set({value: C, message: c.lang.EditImage.transformationAction});
                    b.doSave(a).then(function (a) {
                        function f() {
                            k && k.abort();
                            c.request("dialog:destroy")
                        }

                        d.set({value: y, message: c.lang.EditImage.uploadAction});
                        var g = b.editImageData.get("file"), h = g.get("folder");
                        c.once("command:after:SaveImage", function (a) {
                            d.set({state: "normal", value: J, message: ""});
                            g.set("date", a.data.response.date);
                            c.once("page:show:Main", function () {
                                a.data.context.isFileNameChanged ? c.request("folder:refreshFiles") : g.refresh()
                            });
                            c.request("page:destroy", {name: "EditImage"})
                        });
                        d.set({
                            bytes: 0,
                            bytesTotal: 0,
                            value: y,
                            message: c.lang.EditImage.uploadAction,
                            time: (new Date).getTime()
                        });
                        c.on("dialog:EditImageSaveProgress:cancel",
                            f);
                        var k = c.request("command:send", {
                            name: "SaveImage",
                            type: "post",
                            folder: h,
                            params: {fileName: e ? e : g.get("name")},
                            post: {content: a},
                            context: {file: g, isFileNameChanged: !!e},
                            returnTransport: !0,
                            uploadProgress: function (a) {
                                a.lengthComputable && d.set({
                                    bytes: a.loaded,
                                    bytesTotal: a.total,
                                    value: a.loaded / a.total * (F - y) + y,
                                    time: (new Date).getTime()
                                });
                                a.lengthComputable || d.set("state", "indeterminate")
                            },
                            uploadEnd: function () {
                                d.set("state", "normal");
                                c.removeListener("dialog:EditImageSaveProgress:cancel", f)
                            }
                        });
                        b.destroy()
                    })
                }

                var A, C = 33, y = 35, F = 98, J = 100;
                return function (a) {
                    var b = this;
                    this.finder = a;
                    a.on("contextMenu:file", p, this, null, 40);
                    a.on("toolbar:reset:Main:file", function (c) {
                        var d = c.data.file;
                        d.isImage() && d.get("folder").get("acl").fileRename && d.get("folder").get("acl").fileUpload && c.data.toolbar.push({
                            type: "button",
                            name: "EditImage",
                            priority: 50,
                            icon: "ckf-file-edit",
                            label: c.finder.lang.Fileeditor.contextMenuName,
                            action: function () {
                                w(b, a.request("files:getSelected").first())
                            }
                        })
                    });
                    a.on("toolbar:reset:EditImage", function (b) {
                        var c =
                            this;
                        b.data.toolbar.push({
                            icon: "ltr" === a.lang.dir ? "ckf-back" : "ckf-forward",
                            name: "Close",
                            iconOnly: !0,
                            label: b.finder.lang.CloseBtn,
                            type: "button",
                            alwaysVisible: !0,
                            action: function () {
                                a.request("page:destroy", {name: "EditImage"})
                            }
                        });
                        b.data.toolbar.push({
                            type: "text",
                            name: "Filename",
                            className: "ckf-ei-toolbar-filename",
                            label: b.data.tools.editImageData.get("file").get("name")
                        });
                        b.data.toolbar.push({
                            name: "Save",
                            label: a.lang.EditImage.save,
                            icon: "ckf-save",
                            alignment: "secondary",
                            alwaysVisible: !0,
                            type: "button",
                            action: function () {
                                z(c,
                                    b.data.tools)
                            }
                        });
                        b.data.toolbar.push({
                            name: "Reset",
                            label: a.lang.EditImage.reset,
                            icon: "ckf-reset",
                            alignment: "secondary",
                            alwaysVisible: !0,
                            type: "button",
                            action: function () {
                                b.data.tools.resetTool()
                            }
                        })
                    }, this, null, 40);
                    a.on("dialog:EditImageConfirm:ok", function (c) {
                        var d = c.data.context;
                        if (!d.viewModel.get("error")) {
                            var e = d.viewModel.get("name") + "." + d.viewModel.get("extension");
                            return !d.viewModel.get("overwrite") && a.request("files:getCurrent").where({name: e}).length ? void d.viewModel.set("error", c.finder.lang.EditImage.saveDialogFileExists) :
                                void r(b, d.tools, d.viewModel.get("oldName") === e ? !1 : e)
                        }
                    })
                }
            });
            n.define("text!CKFinder/Templates/FilePreview/Gallery.dot", [], function () {
                return '<div class="ckf-file-preview-root" style="position:fixed;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,0.8);z-index:9010;" tabindex="0">\n\t<div class="ckf-file-preview" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;"></div>\n\t<div class="ckf-file-preview-info"\n\t\t style="position:absolute;left:0;bottom:0;right:0;margin:auto;color:#fff;background: #000;padding:0.5em 1em;">\n\t\t<div class="ckf-file-preview-info-name" style="float: left;"></div>\n\t\t<div class="ckf-file-preview-info-count" style="float: right;"></div>\n\t</div>\n\t<button class="ckf-file-preview-button-prev" style="position:absolute;left:2em;top:50%;">&laquo;</button>\n\t<button class="ckf-file-preview-button-next" style="position:absolute;right:2em;top:50%;">&raquo;</button>\n</div>\n'
            });
            n.define("CKFinder/Modules/FilePreview/FilePreview", "underscore jquery doT backbone CKFinder/Util/KeyCode text!CKFinder/Templates/FilePreview/Gallery.dot CKFinder/Models/File".split(" "), function (k, h, b, g, d, f, e) {
                function a(a, b, c) {
                    a = r.createElement(a);
                    return !!a.canPlayType && "" !== a.canPlayType(b[c])
                }

                function c(a, c) {
                    function e() {
                        var c, d, f, g, l;
                        0 >= G.current ? (G.current = 0, I.hide()) : I.show();
                        G.current >= G.last ? (G.current = G.last, J.hide()) : J.show();
                        d = G.files[G.current];
                        f = d.url;
                        g = d.name;
                        l = g.substr(g.lastIndexOf(".") +
                            1);
                        f = a.fire("file:preview", {
                            templateData: {
                                fileIcon: function () {
                                    var b = h(D).width(), c = h(D).height();
                                    return a.request("file:getIcon", {size: b > c ? b : c, extension: l})
                                }
                            }, file: d.file, url: f, extension: l, template: m
                        }, a);
                        L.text(d.name);
                        O.text(G.current + 1 + " / " + G.files.length);
                        a.request("files:deselectAll");
                        a.request("files:select", {files: n[G.current]});
                        c = h(b.template(f.template)(f.templateData), D);
                        f.events && k.forEach(f.events, function (a, b) {
                            c.on(b, a)
                        });
                        F.append(c)
                    }

                    function g(a, b) {
                        F.html("");
                        a.stopPropagation();
                        G.current +=
                            b;
                        e()
                    }

                    function l() {
                        y.remove();
                        n[G.current].trigger("focus")
                    }

                    var n = a.request("files:getDisplayed").where({"view:isFolder": !1}), r = [], D = q.top.document, A = b.template(f), C = 0, y = h(A(), D), F = y.find(".ckf-file-preview"), J = y.find(".ckf-file-preview-button-next"), I = y.find(".ckf-file-preview-button-prev"), L = y.find(".ckf-file-preview-info-name"), O = y.find(".ckf-file-preview-info-count");
                    n.forEach(function (a, b) {
                        var d = a.getUrl(), e = a.get("name");
                        r.push({url: d, name: e, file: a});
                        e === c && (C = b)
                    });
                    var G = {
                        files: r, current: C,
                        last: r.length - 1
                    };
                    y.append(F).append(I).append(J).appendTo(h("body", D));
                    setTimeout(function () {
                        y.focus()
                    }, 0);
                    y.on("click", function () {
                        l()
                    });
                    h(y).on("keydown", function (a) {
                        a.keyCode === d.left && g(a, -1);
                        a.keyCode === d.right && g(a, 1);
                        a.keyCode === d.escape && (a.stopPropagation(), l())
                    });
                    I.on("click", function (a) {
                        g(a, -1)
                    });
                    J.on("click", function (a) {
                        g(a, 1)
                    });
                    e()
                }

                var m = '<img src="{{= it.fileIcon() }}" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;max-width:95%;max-height:95%;">';
                return function (b) {
                    b.setHandlers({
                        "image:previewUrl": function (a) {
                            var c,
                                d;
                            return c = a.file.get("folder"), d = {
                                fileName: a.file.get("name"),
                                size: Math.round(a.maxWidth) + "x" + Math.round(a.maxHeight),
                                date: a.file.get("date")
                            }, a.noCache && (d.d = (new Date).getTime()), b.request("command:url", {
                                command: "ImagePreview",
                                params: d,
                                folder: c
                            })
                        }, "file:preview": function (a) {
                            (a = a && a.file || b.request("files:getCurrent").first()) && c(b, a.get("name"))
                        }
                    });
                    b.on("file:preview", function (c) {
                        e.isExtensionOfImage(c.data.extension) && (c.stop(), c.data.templateData.url = b.hasHandler("image:previewUrl") ? b.request("image:previewUrl",
                            {
                                file: c.data.file,
                                maxWidth: .95 * h(q.top).width(),
                                maxHeight: .95 * h(q.top).height()
                            }) : c.data.url, c.data.template = '<img src="{{= it.fileIcon() }}" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;max-width:95%;max-height:95%;"><img src="{{= it.url }}" id="ckf-image-preview" style="display:none;position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;max-width:95%;max-height:95%;">', c.data.events = {
                            load: function (a) {
                                a.target.id && h(a.target).css("display", "").prev().remove()
                            }
                        });
                        /^(flac|mp3|ogg|opus|wav|weba)$/.test(c.data.extension) &&
                        a("audio", {
                            flac: "audio/flac",
                            mp3: "audio/mpeg",
                            ogg: "audio/ogg",
                            opus: 'audio/ogg; codecs="opus',
                            wav: "audio/wav",
                            weba: "audio/webm"
                        }, c.data.extension) && (c.stop(), c.data.templateData.url = c.data.url, c.data.template = '<audio src="{{= it.url }}" controls="controls" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;">', c.data.events = {
                            click: function (a) {
                                a.stopPropagation()
                            }
                        });
                        /^(mp4|ogv|webm)$/.test(c.data.extension) && a("video", {
                            mp4: "video/mp4",
                            ogv: "video/ogg",
                            webm: "video/webm"
                        }, c.data.extension) &&
                        (c.stop(), c.data.templateData.url = c.data.url, c.data.template = '<video src="{{= it.url }}" controls="controls" style="position:absolute;top:0;left:0;bottom:0;right:0;margin:auto;">', c.data.events = {
                            click: function (a) {
                                a.stopPropagation()
                            }
                        })
                    }, null, null, 90);
                    b.on("contextMenu:file", function (a) {
                            a.data.groups.addGroup("file", [{
                                name: "View",
                                label: a.finder.lang.View,
                                isActive: a.data.context.file.get("folder").get("acl").fileView,
                                icon: "ckf-view",
                                action: function () {
                                    c(b, a.data.context.file.get("name"))
                                }
                            }])
                        }, null, null,
                        20);
                    b.on("toolbar:reset:Main:file", function (a) {
                        var b = a.finder;
                        a.data.toolbar.push({
                            name: "View",
                            icon: "ckf-view",
                            label: b.lang.View,
                            type: "button",
                            priority: 80,
                            action: function () {
                                c(b, a.data.file.get("name"))
                            }
                        })
                    })
                }
            });
            n.define("CKFinder/Util/collectionFilter", [], function () {
                return function (k) {
                    var h = new k.constructor;
                    return h.search = function (b) {
                        var g;
                        k.length && ("" === b ? (g = k.models, h.isFiltered = !1) : (g = k.filter(function (d) {
                            return (new RegExp(b, "gi")).test(d.get("name"))
                        }), h.isFiltered = !0), h.reset(g))
                    }, k.on("reset",
                        function () {
                            h.reset(k.models);
                            h.isFiltered = !1
                        }), h.isFiltered = !1, h
                }
            });
            n.define("CKFinder/Modules/Files/SortedFiles", ["backbone"], function (k) {
                return k.Collection.extend({
                    comparator: function (h, b) {
                        return h.get("view:isFolder") === b.get("view:isFolder") ? h.get("name").localeCompare(b.get("name")) : h.get("view:isFolder") ? -1 : 1
                    }, initialize: function () {
                        this.on("change:name", function () {
                            this.sort();
                            this.trigger("sorted")
                        })
                    }
                })
            });
            n.define("text!CKFinder/Templates/Files/ChooseResizedImageItem.dot", [], function () {
                return '{{? it.divider }}{{??}}\n\t<a tabindex="-1" class="ui-btn ui-btn-icon-{{? it.lang.dir == \'ltr\' }}right{{??}}left{{?}} ui-icon-ckf-choose">{{= it.label }} <span class="ckf-choose-resized-image-size">{{= it.size}}</span></a>\n{{?}}\n'
            });
            n.define("text!CKFinder/Templates/Files/ChooseResizedImageInputItem.dot", [], function () {
                return '<a tabindex="-1" class="ui-btn ui-btn-icon-{{? it.lang.dir == \'ltr\' }}right{{??}}left{{?}} ui-icon-ckf-choose">\n<div class="ckf-choose-resized-image-custom">\n\t<label class="ckf-choose-resized-image-label">{{= it.lang.ChooseResizedImageSizes.Custom }}</label>\n\t</div>\n<div class="ckf-choose-resized-image-custom ckf-choose-resized-image-input">\n\t<input type="text" name="ckfCustomWidth" value="{{= it.width }}">\n</div>\n<div class="ckf-choose-resized-image-custom">\n\t<label class="ckf-choose-resized-image-label">x</label>\n</div>\n<div class="ckf-choose-resized-image-custom ckf-choose-resized-image-input">\n\t<input type="text" name="ckfCustomHeight" value="{{= it.height }}">\n</div>\n</a>\n'
            });
            n.define("CKFinder/Modules/Files/Views/ChooseResizedImageView", "underscore jquery CKFinder/Views/Base/CollectionView CKFinder/Views/Base/ItemView CKFinder/Util/KeyCode text!CKFinder/Templates/Files/ChooseResizedImageItem.dot text!CKFinder/Templates/Files/ChooseResizedImageInputItem.dot".split(" "), function (k, h, b, g, d, f, e) {
                return b.extend({
                    name: "ContextMenu", template: "", tagName: "ul", initialize: function () {
                        var a = this;
                        a.on("childview:itemkeydown", function (b, e) {
                            var f, g, h, n;
                            f = e.evt;
                            f.keyCode === d.up && (f.stopPropagation(),
                                f.preventDefault(), g = a.$el.find("a"), h = k.indexOf(g, b.$el.find("a")[0]), n = h - 1, g[0 <= n ? n : 0].focus());
                            f.keyCode === d.down && (f.stopPropagation(), f.preventDefault(), g = a.$el.find("a"), h = k.indexOf(g, b.$el.find("a")[0]), n = h + 1, g[n < g.length - 1 ? n : g.length - 1].focus());
                            f.keyCode !== d.enter && f.keyCode !== d.space || (f.stopPropagation(), f.preventDefault(), b.trigger("resizeSelected", {
                                evt: f,
                                view: b,
                                model: b.model
                            }), a.finder.request("dialog:destroy"));
                            f.keyCode === d.escape && (f.stopPropagation(), f.preventDefault(), a.finder.request("dialog:destroy"))
                        });
                        a.on("render:collection", function () {
                            a.$el.listview()
                        })
                    }, getChildView: function (a) {
                        var b = {}, d = {};
                        a.get("divider") || a.get("custom") || (b["click a"] = {
                            event: "resizeSelected",
                            preventDefault: !0
                        }, d["keydown a"] = function (a) {
                            this.trigger("itemkeydown", {evt: a})
                        });
                        b = {
                            name: "ChooseResizedItem",
                            finder: this.finder,
                            template: f,
                            triggers: b,
                            events: d,
                            tagName: "li",
                            initialize: function () {
                                this.on("show", function () {
                                        this.$el.parent().listview().listview("refresh");
                                        this.model.get("active") || this.$el.addClass("ui-state-disabled")
                                    },
                                    this)
                            }
                        };
                        return a.get("divider") && (b.attributes = {"data-role": "list-divider"}), a.get("custom") && (b.template = e, b.ui = {
                            width: 'input[name="ckfCustomWidth"]',
                            height: 'input[name="ckfCustomHeight"]'
                        }, d["input @ui.width"] = function () {
                            var a = this.model.get("width"), b = this.model.get("height"), c = b, d = this.ui.width.val();
                            if (!d.length)return void this.ui.height.val("");
                            d = parseInt(d);
                            a > d ? c = b / a * d : d = a;
                            this.ui.height.val(Math.round(c));
                            this.ui.width.val(d)
                        }, d["input @ui.height"] = function () {
                            var a = this.model.get("width"),
                                b = this.model.get("height"), c = a, d = this.ui.height.val(), e = parseInt(d);
                            return d.length ? (b > e ? c = a / b * e : e = b, this.ui.width.val(Math.round(c)), void this.ui.height.val(e)) : void this.ui.width.val("")
                        }, d["click @ui.height"] = function (a) {
                            a.stopPropagation()
                        }, d["click @ui.width"] = function (a) {
                            a.stopPropagation()
                        }, d["click a"] = function () {
                            this.trigger("custom", {width: this.ui.width.val(), height: this.ui.height.val()})
                        }), g.extend(b)
                    }
                })
            });
            n.define("CKFinder/Modules/Files/ChooseFiles", ["underscore", "jquery", "backbone",
                "CKFinder/Modules/Files/Views/ChooseResizedImageView"], function (k, h, b, g) {
                function d(d) {
                    function e() {
                        h.set("active", D(f))
                    }

                    var f = d.data.context.file, g = [{
                        name: "Choose",
                        label: d.finder.lang.Choose,
                        isActive: f.get("folder").get("acl").fileView,
                        icon: "ckf-choose",
                        action: function () {
                            var b = d.finder.request("files:getSelected");
                            1 < b.length ? a(d.finder, b) : r(d.finder, f)
                        }
                    }];
                    if (f.isImage() && d.finder.config.resizeImages) {
                        f.has("imageResizeData") && f.get("imageResizeData").has("originalSize") || f.once("change:imageResizeData",
                            e);
                        var h = new b.Model({
                            name: "ChooseResizedImage",
                            label: d.finder.lang.ChooseResizedImage,
                            isActive: f.get("folder").get("acl").imageResize || D(f),
                            icon: "ckf-choose-resized",
                            action: function () {
                                c(d.finder, f)
                            }
                        });
                        g.push(h)
                    }
                    d.data.groups.addGroup("choose", g)
                }

                function f(a) {
                    var d = a.data.file;
                    if (P(a, function () {
                            r(a.finder, d)
                        }), d.isImage() && a.finder.config.resizeImages) {
                        var e = d.has("imageResizeData") && d.get("imageResizeData").has("originalSize"), f = new b.Model({
                            name: "ChooseResizedImage",
                            type: "button",
                            priority: y,
                            alignment: "primary",
                            icon: "ckf-choose-resized",
                            label: a.finder.lang.ChooseResizedImage,
                            isDisabled: !(d.get("folder").get("acl").imageResize || D(d)),
                            action: function () {
                                c(a.finder, d)
                            }
                        });
                        e || (d.once("change:imageResizeData", function () {
                            f.set("isDisabled", !D(d))
                        }), a.finder.request("image:getResized", {file: d}));
                        a.data.toolbar.push(f)
                    }
                }

                function e(b) {
                    P(b, function () {
                        a(b.finder, b.finder.request("files:getSelected"))
                    })
                }

                function a(a, b) {
                    a.fire("files:choose", {files: b.clone()}, a);
                    a.config.chooseFilesClosePopup && a.request("closePopup")
                }

                function c(a, c) {
                    var d = new b.Collection, e = a.config.initConfigInfo.images;
                    q(d, a, c, e);
                    c.on("change:imageResizeData", function () {
                        d.reset();
                        q(d, a, c, e)
                    });
                    var f = new g({finder: a, collection: d});
                    f.on("childview:resizeSelected", function (b, d) {
                        l(a, d.model.get("name"), d.model.get("size"), c)
                    });
                    f.on("childview:custom", function (b, d) {
                        l(a, C, d.width + "x" + d.height, c, !0)
                    });
                    a.request("dialog", {
                        title: a.lang.ChooseResizedImage,
                        name: "ChooseResizedImage",
                        buttons: ["cancel"],
                        view: f,
                        contentClassName: !1
                    })
                }

                function m(a) {
                    var c = this.finder;
                    a = a.file;
                    var d = new h.Deferred;
                    if (a.has("imageResizeData") && a.get("imageResizeData").has("originalSize"))d.resolve(a); else {
                        var e = a.get("folder");
                        c.once("command:after:GetResizedImages", function (a) {
                            var c = a.data.context.file, d = new b.Model;
                            a.data.response.resized && d.set("resized", a.data.response.resized);
                            a.data.response.originalSize && d.set("originalSize", a.data.response.originalSize);
                            k.forEach(a.data.response.resized, function (a, b) {
                                if (b === C)return void k.forEach(a, function (a) {
                                    var c = a.name ? a.name : a, e = c.match(J);
                                    e && (c = {fileName: c}, a.url && (c.url = a.url), d.set(A(b, e[1]), c, {silent: !0}))
                                });
                                var c = {fileName: a.name ? a.name : a};
                                a.url && (c.url = a.url);
                                d.set(A(b), c, {silent: !0})
                            });
                            c.set("imageResizeData", d);
                            a.data.context.dfd.resolve(c)
                        });
                        var f = {fileName: a.get("name")};
                        k.isArray(c.config.resizeImages) && c.config.resizeImages.length && (f.sizes = c.config.resizeImages.join(","));
                        c.request("command:send", {
                            name: "GetResizedImages",
                            folder: e,
                            params: f,
                            context: {dfd: d, file: a}
                        })
                    }
                    return d.promise()
                }

                function t(a) {
                    var c = this.finder, d = a.file,
                        e = new h.Deferred, f = a.size;
                    if (!a.name)throw"The data.name parameter is required";
                    if (a.name === C) {
                        if (!a.size)throw'The data.size parameter is required when using "{name}".'.replace("{name}", C);
                        f = a.size
                    } else {
                        if (!c.config.initConfigInfo.images.sizes[a.name])throw'The name "{name}" is not configured for resized images'.replace("{name}", a.name);
                        f = c.config.initConfigInfo.images.sizes[a.name]
                    }
                    if (d.has("imageResizeData") && d.get("imageResizeData").has("resizedUrl" + f))e.resolve(d); else {
                        var g = d.get("folder");
                        c.once("command:after:ImageResize", function (c) {
                            var d = c.data.context.file, e = c.data.response.url, f = d.get("imageResizeData");
                            if (f || (f = new b.Model, d.set("imageResizeData", f)), a.save) {
                                var g = f.get("resized");
                                g || (g = {}, f.set("resized", g));
                                g.__custom || (g.__custom = []);
                                g.__custom.push(e.match(I)[0])
                            }
                            f.set(A(a.name, a.size), {url: e});
                            c.data.context.dfd.resolve(d)
                        });
                        c.request("command:send", {
                            name: "ImageResize",
                            folder: g,
                            params: {fileName: d.get("name"), size: f},
                            context: {dfd: e, file: d}
                        })
                    }
                    return e.promise()
                }

                function p(a) {
                    var b =
                        this.finder;
                    a = a.file;
                    var c = new h.Deferred, d = a.getUrl();
                    return d && c.resolve(d), b.request("command:send", {
                        name: "GetFileUrl",
                        folder: a.get("folder"),
                        params: {fileName: a.get("name")},
                        context: {dfd: c, file: a}
                    }), c.promise()
                }

                function n(a) {
                    var b = this.finder, c = a.file, d = new h.Deferred;
                    return b.request("command:send", {
                        name: "GetFileUrl",
                        folder: c.get("folder"),
                        params: {fileName: c.get("name"), thumbnail: a.thumbnail},
                        context: {dfd: d, file: c, thumbnail: a.thumbnail}
                    }), d.promise()
                }

                function q(a, b, c, d) {
                    var e = c.get("imageResizeData"),
                        f = e && e.get("originalSize") || "", g = c.get("folder").get("acl").imageResize;
                    c = c.get("folder").get("acl").imageResizeCustom;
                    a.add({label: b.lang.OriginalSize, size: f, name: "original", active: !0});
                    a.add({divider: !0});
                    var h = e && e.get("resized");
                    if (k.forEach(d.sizes, function (c, d) {
                            var e = c, l = g;
                            if (!k.isArray(b.config.resizeImages) || !b.config.resizeImages.length || k.contains(b.config.resizeImages, d)) {
                                if (h && h[d])l = h[d].match(J), 2 === l.length && (e = l[1]), l = !0; else if (f) {
                                    var m = f.split("x"), p = c.split("x"), t = parseInt(p[0]),
                                        n = parseInt(p[1]), p = parseInt(m[0]), m = parseInt(m[1]), q = {
                                            width: t,
                                            height: n
                                        }, t = t / p, n = n / m, t = ((1 !== t || 1 !== n) && (n > t ? q.height = parseInt(Math.round(m * t)) : t > n && (q.width = parseInt(Math.round(p * n)))), 0 >= q.height && (q.height = 1), 0 >= q.width && (q.width = 1), q);
                                    p <= t.width && m <= t.height ? l = !1 : e = t.width + "x" + t.height
                                }
                                a.add({
                                    label: b.lang.ChooseResizedImageSizes[d] ? b.lang.ChooseResizedImageSizes[d] : d,
                                    size: e,
                                    name: d,
                                    active: l
                                })
                            }
                        }), h && h.__custom) {
                        a.add({divider: !0});
                        var l = [];
                        k.forEach(h.__custom, function (a) {
                            var b = a.match(J);
                            b && l.push({
                                label: b[1],
                                size: b[1], width: parseInt(b[1].split("x")[0]), name: C, url: a, active: !0
                            })
                        });
                        k.chain(l).sortBy("width").forEach(function (b) {
                            a.add(b)
                        })
                    }
                    c && ((a.add({divider: !0}), f) ? (d = f.split("x"), a.add({
                        custom: !0,
                        active: c,
                        width: d[0],
                        height: d[1]
                    })) : a.add({custom: !0, active: c, width: 0, height: 0}))
                }

                function l(a, b, c, d, e) {
                    function f(b, c) {
                        a.request("loader:hide");
                        a.fire("file:choose:resizedImage", {file: b, resizedUrl: c}, a);
                        a.config.chooseFilesClosePopup && a.request("closePopup")
                    }

                    if ("original" === b)return void r(a, d);
                    var g = d.get("imageResizeData"),
                        h = A(b, c);
                    if (g && g.has(h)) {
                        c = g.get(h);
                        e = {file: d};
                        if (c.url)return void f(d, c.url);
                        g = "file:getUrl";
                        return "original" !== b && c.fileName && (g = "image:getResizedUrl", e.thumbnail = c.fileName), a.request("loader:show", {text: a.lang.GettingFileData}), void a.request(g, e).then(function (a) {
                            f(d, a)
                        })
                    }
                    a.request("loader:show", {text: a.lang.GettingFileData});
                    a.request("image:resize", {file: d, size: c, name: b, save: e}).then(function (a) {
                        f(a, a.get("imageResizeData").get(h).url)
                    })
                }

                function r(c, d) {
                    var e = d.getUrl(), f = new b.Collection([d]);
                    return e ? void a(c, f) : (c.request("loader:show", {text: c.lang.GettingFileData}), void c.request("file:getUrl", {file: d}).then(function () {
                        c.request("loader:hide");
                        a(c, f)
                    }))
                }

                function P(a, b) {
                    a.data.toolbar.push({
                        name: "Choose",
                        type: "button",
                        priority: F,
                        icon: "ckf-choose",
                        label: a.finder.lang.Choose,
                        action: b
                    })
                }

                function D(a) {
                    var b = a.get("folder").get("acl");
                    a = a.has("imageResizeData") && !!k.size(a.get("imageResizeData").get("resized"));
                    return b.imageResize || b.imageResizeCustom || a
                }

                function A(a, b) {
                    return a === C ? "resizedUrl_custom" +
                    b : "resizedUrl_" + a
                }

                var C = "__custom", y = 100, F = 110, J = "([0-9]+x[0-9]+)[.][a-zA-Z]{1,5}$", I = "/([^/]+$)";
                return function (c) {
                    this.finder = c;
                    this.isEnabled = c.config.chooseFiles;
                    c.config.ckeditor && (c.on("files:choose", function (a) {
                        a = a.data.files.pop();
                        a = {fileUrl: a.getUrl(), fileSize: a.get("size"), fileDate: a.get("date")};
                        c.config.ckeditor.callback(a.fileUrl, a)
                    }), c.on("file:choose:resizedImage", function (a) {
                        var b = {fileUrl: a.data.resizedUrl, fileSize: 0, fileDate: a.data.file.get("date")};
                        c.config.ckeditor.callback(a.data.resizedUrl,
                            b)
                    }));
                    this.isEnabled && (c.on("contextMenu:file", d, null, null, -10), c.on("toolbar:reset:Main:file", f), c.on("toolbar:reset:Main:files", e), c.on("command:ok:SaveImage", function (a) {
                        a.data.context.file.set("imageResizeData", new b.Model)
                    }), c.setHandlers({
                        "image:getResized": {callback: m, context: this},
                        "image:resize": {callback: t, context: this},
                        "image:getResizedUrl": {callback: n, context: this},
                        "files:choose": {
                            context: this, callback: function (b) {
                                a(c, b.files)
                            }
                        }
                    }));
                    c.setHandlers({"file:getUrl": {callback: p, context: this}});
                    c.on("command:after:GetFileUrl", function (a) {
                        a.data.context.thumbnail || a.data.context.file.set("url", a.data.response.url);
                        a.data.context.dfd.resolve(a.data.response.url)
                    })
                }
            });
            n.define("text!CKFinder/Templates/Files/FilesInfo.dot", [], function () {
                return '{{? it.displayLoader }}\n<div class="ui-loader ui-loader-verbose ui-content ui-body-{{= it.swatch }} ui-corner-all">\n\t<span class="ui-icon-loading"></span>\n\t<h1>{{= it.title }}</h1>\n</div>\n{{??}}\n<div class="ckf-files-info-body ui-content ui-body-{{= it.swatch }} ui-corner-all">\n\t<h2>{{= it.title }}</h2>\n\t<p>{{= it.text }}</p>\n</div>\n{{?}}\n'
            });
            n.define("CKFinder/Modules/Files/Views/FilesInfoView", ["backbone", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Files/FilesInfo.dot"], function (k, h, b) {
                return h.extend({
                    name: "FilesInfoView",
                    template: b,
                    className: "ckf-files-info",
                    templateHelpers: function () {
                        return {swatch: this.finder.config.swatch}
                    },
                    initialize: function () {
                        this.model = new k.Model({
                            title: this.msg.title,
                            text: this.msg.text,
                            displayLoader: this.displayLoader
                        })
                    }
                })
            });
            n.define("text!CKFinder/Templates/Files/FileView.dot", [], function () {
                return '<a href="javascript:void(0)" class="ckf-files-inner" tabindex="-1" draggable="true">\n\t<img class="ui-li-thumb" src="{{= it.getFileIcon() }}" draggable="true" />\n\t{{? it.displayName || it.displayDate || it.displaySize }}\n\t<div class="ckf-file-desc ui-bar-{{= it.config.swatch}}"  draggable="true">\n\t\t{{? it.displayName }}<h2 title="{{! it.name }}">{{! it.name }}</h2>{{?}}\n\t\t<p draggable="true">\n\t\t\t{{? it.displayDate }}{{! it.lang.formatDateString( it.date ) }}{{?}}\n\t\t\t{{? it.displaySize }}\n\t\t\t\t{{? it.displayDate }}<br>{{?}}\n\t\t\t{{! it.lang.formatFileSize( it.size * 1024 ) }}\n\t\t\t{{?}}\n\t\t</p>\n\t</div>\n\t{{?}}\n</a>\n'
            });
            n.define("CKFinder/Modules/Files/Views/FileView", ["ckf_global", "underscore", "CKFinder/Views/Base/ItemView", "CKFinder/Util/KeyCode", "text!CKFinder/Templates/Files/FileView.dot"], function (k, h, b, g, d) {
                return b.extend({
                    tagName: "li",
                    lazyLoad: !0,
                    name: "FileThumb",
                    template: d,
                    className: "ckf-file-item",
                    eventPrefix: "file",
                    ui: {activeElem: ".ckf-files-inner", img: "img"},
                    attributes: {"data-icon": !1},
                    events: {
                        "touchstart @ui.activeElem": function (b) {
                            this.isInTouch = !0;
                            this.longTouchTimeout && clearTimeout(this.longTouchTimeout);
                            var d = this;
                            this.longTouchTimeout = setTimeout(function () {
                                d.isInTouch && (d.triggerEvent("longtouch", {
                                    evt: b,
                                    view: d,
                                    model: d.model
                                }), d.isInTouch = !1)
                            }, 700)
                        }, "touchend @ui.activeElem": function (b) {
                            this.checkDoubleTap(b);
                            b.preventDefault();
                            b.stopPropagation();
                            this.isInTouch && this.triggerEvent("click", {evt: b, view: this, model: this.model});
                            this.isInTouch = !1
                        }, "touchcancel @ui.activeElem": function (b) {
                            b.stopPropagation();
                            this.isInTouch = !1
                        }, "contextmenu @ui.activeElem": function (b) {
                            this.isInTouch ? b.preventDefault() :
                                this.triggerEvent("contextmenu", {evt: b, view: this, model: this.model})
                        }, "dblclick @ui.activeElem": function (b) {
                            this.triggerEvent("dblclick", {evt: b, view: this, model: this.model})
                        }, "click @ui.activeElem": function (b) {
                            var d = {evt: b, view: this, model: this.model};
                            if (2 === b.button || 3 === b.button)this.triggerEvent("contextmenu", d); else {
                                if (0 !== b.button)return !1;
                                this.triggerEvent("click", d)
                            }
                        }, "keydown @ui.activeElem": function (b) {
                            return b.keyCode === g.menu || b.keyCode === g.f10 && this.finder.util.isShortcut(b, "shift") ? void this.triggerEvent("contextmenu",
                                {evt: b, view: this, model: this.model}) : void this.triggerEvent("keydown", {
                                evt: b,
                                view: this,
                                model: this.model
                            })
                        }, "dragstart @ui.activeElem": function (b) {
                            this.triggerEvent("dragstart", {evt: b, view: this, model: this.model})
                        }, "dragend @ui.activeElem": function (b) {
                            function d(a) {
                                a.cancel()
                            }

                            var a = this;
                            a.finder.on("ui:swipeleft", d, null, null, 1);
                            a.finder.on("ui:swiperight", d, null, null, 1);
                            setTimeout(function () {
                                a.finder.removeListener("ui:swipeleft", d);
                                a.finder.removeListener("ui:swiperight", d)
                            }, 500);
                            this.triggerEvent("dragend",
                                {evt: b, view: this, model: this.model})
                        }, "mouseenter @ui.img": function () {
                            var b = this;
                            this.overTimeout = setTimeout(function () {
                                b.$el.addClass("ckf-file-show-thumb")
                            }, 1E3)
                        }, "mouseleave @ui.img": function () {
                            clearTimeout(this.overTimeout);
                            this.$el.removeClass("ckf-file-show-thumb")
                        }
                    },
                    modelEvents: {
                        focus: function () {
                            this.ui.activeElem.focus()
                        }, refresh: function () {
                            this.render();
                            this.trigger("rerender")
                        }, selected: function () {
                            this.ui.activeElem.addClass("ui-btn-active")
                        }, deselected: function () {
                            this.ui.activeElem.removeClass("ui-btn-active")
                        },
                        change: function (b) {
                            b.changed.name && (this.render(), this.trigger("rerender"))
                        }
                    },
                    templateHelpers: function () {
                        return {
                            getFileIcon: this.getFileIcon.bind(this),
                            displayName: this.getOption("displayName"),
                            displaySize: this.getOption("displaySize"),
                            displayDate: this.getOption("displayDate")
                        }
                    },
                    initialize: function () {
                        this.on("sizeUpdate", function (b) {
                            this.options.thumbSize = b.thumbSize;
                            this.options.thumbSizeString = b.thumbSizeString;
                            this.ui.img.attr("src", this.getFileIcon());
                            this.trigger("rerender")
                        })
                    },
                    onRender: function () {
                        var b;
                        "thumbs" === this.getOption("mode") && (b = this.getOption("thumbSize"), this.$el.css({
                            width: b + "px",
                            height: b + "px"
                        }))
                    },
                    getFileIcon: function () {
                        var b = this.model;
                        return b.isImage() && this.finder.config.initConfigInfo.thumbs && (this.options.lazyThumb = this.finder.request("file:getThumb", {
                            file: b,
                            size: this.getOption("thumbSizeString")
                        })), this.finder.request("file:getIcon", {
                            size: this.getOption("thumbSize"),
                            extension: b.getExtension()
                        })
                    },
                    checkDoubleTap: function (b) {
                        b.stopPropagation();
                        var d = this.touchStartAt;
                        this.touchStartAt =
                            (new Date).getTime();
                        this.triggerEvent(d && 250 > this.touchStartAt - d ? "dbltap" : "touch", {
                            evt: b,
                            view: this,
                            model: this.model
                        })
                    },
                    triggerEvent: function (b, d) {
                        this.trigger(this.getOption("eventPrefix") + ":" + b, d)
                    }
                })
            });
            n.define("text!CKFinder/Templates/Files/FolderInFile.dot", [], function () {
                return '<a class="ckf-files-inner" tabindex="-1" draggable="false">\n\t<img class="ui-li-thumb" src="{{= it.getFileIcon() }}">\n\n\t<div class="ckf-file-desc ui-bar-{{= it.config.swatch }}">\n\t\t<h2 title="{{! it.label || it.name }}">{{! it.label || it.name }}</h2>\n\t</div>\n</a>\n'
            });
            n.define("CKFinder/Modules/Files/Views/FolderInFileView", ["ckf_global", "underscore", "CKFinder/Modules/Files/Views/FileView", "CKFinder/Util/KeyCode", "text!CKFinder/Templates/Files/FolderInFile.dot"], function (k, h, b, g, d) {
                return b.extend({
                    name: "FolderThumb",
                    template: d,
                    className: "ckf-file-item ckf-folders-item",
                    eventPrefix: "folder",
                    ui: {activeElem: ".ckf-files-inner"},
                    events: h.extend({}, b.prototype.events, {
                        "dragenter @ui.activeElem": function (b) {
                            b.stopPropagation();
                            b.preventDefault();
                            this.ui.activeElem.addClass("ui-btn-active");
                            this.trigger("folder:dragenter", {evt: b, view: this, model: this.model})
                        }, "dragover @ui.activeElem": function (b) {
                            b.stopPropagation();
                            b.preventDefault();
                            this.ui.activeElem.addClass("ui-btn-active");
                            this.trigger("folder:dragover", {evt: b, view: this, model: this.model})
                        }, "dragleave @ui.activeElem": function (b) {
                            b.stopPropagation();
                            this.ui.activeElem.removeClass("ui-btn-active");
                            this.trigger("folder:dragleave", {evt: b, view: this, model: this.model})
                        }, "drop @ui.activeElem": function (b) {
                            b.stopPropagation();
                            this.ui.activeElem.removeClass("ui-btn-active");
                            this.trigger("folder:drop", {evt: b, view: this, model: this.model})
                        }, "dragstart @ui.activeElem": function (b) {
                            b.preventDefault()
                        }, "dragend @ui.activeElem": function (b) {
                            b.preventDefault()
                        }, "keydown @ui.activeElem": function (b) {
                            return b.stopPropagation(), b.keyCode === g.f10 && this.finder.util.isShortcut(b, "shift") ? (b.preventDefault(), b.stopPropagation(), void this.trigger("folder:contextmenu", {
                                evt: b,
                                view: this,
                                model: this.model
                            })) : void this.trigger("folder:keydown", {evt: b, view: this, model: this.model})
                        }
                    }),
                    getFileIcon: function () {
                        return this.finder.request("file:getIcon",
                            {size: this.getOption("thumbSize"), extension: "folder"})
                    }
                })
            });
            n.define("CKFinder/Util/Throttlers", ["underscore", "jquery"], function (k, h) {
                function b() {
                    this.reset()
                }

                var g = {};
                return b.prototype = {
                    reset: function () {
                        var b = this;
                        b.dfd && b.dfd.reject();
                        b.dfd = new h.Deferred;
                        b.dfd.done(function () {
                            b.callback && b.callback();
                            b.reset()
                        });
                        b.timeOutId = -1
                    }, assignJob: function (b) {
                        this.callback = b
                    }, runAfter: function (b) {
                        var f = this;
                        f.timeOutId && clearTimeout(f.timeOutId);
                        f.timeOutId = setTimeout(function () {
                            f.dfd.resolve()
                        }, b)
                    }
                },
                {
                    getOrCreate: function (d, f) {
                        return k.has(g, d) || (g[d] = new b), g[d].reset(), g[d].assignJob(f), g[d]
                    }
                }
            });
            n.define("CKFinder/Modules/Files/Views/FilesView", "underscore CKFinder/Views/Base/CollectionView CKFinder/Modules/Files/Views/FilesInfoView CKFinder/Modules/Files/Views/FileView CKFinder/Modules/Files/Views/FolderInFileView CKFinder/Util/Throttlers".split(" "), function (k, h, b, g, d, f) {
                return h.extend({
                    name: "ThumbnailsView",
                    childView: g,
                    attributes: {"data-role": "listview", tabindex: 30},
                    tagName: "ul",
                    className: "ckf-files-view ui-body-inherit",
                    events: {
                        keydown: function (b) {
                            this.trigger("keydown", {evt: b})
                        }
                    },
                    initialize: function (b) {
                        var a = this;
                        b.displayConfig.set({
                            mode: "list",
                            thumbSizeString: null,
                            currentThumbConfigSize: 0,
                            thumbClassName: ""
                        });
                        "thumbs" === b.mode ? a.setThumbsMode() : a.setListMode();
                        a.once("render", function () {
                            a.$el.trigger("create");
                            a.on("render", function () {
                                a.$el.listview().listview("refresh");
                                a.applySizeClass(this.getOption("displayConfig").get("thumbSize"))
                            });
                            a.on("childview:rerender", function () {
                                a.$el.listview("refresh")
                            })
                        });
                        this.once("show",
                            function () {
                                function b(c) {
                                    a.trigger("click", {evt: c})
                                }

                                var d = a.$el.closest(".ckf-page-regions");
                                d.on("click", b);
                                a.once("destroy", function () {
                                    d.off("click", b)
                                })
                            });
                        a.on("render", function () {
                            a.finder.config.displayFoldersPanel || a.$el.focus();
                            "list" === a.getOption("displayConfig").get("mode") ? a.setListMode() : a.setThumbsMode()
                        });
                        a.on("maximize", function (b) {
                            var d = parseInt(getComputedStyle(a.el).getPropertyValue("padding-top")), e = parseInt(getComputedStyle(a.el).getPropertyValue("padding-bottom")), f = parseInt(getComputedStyle(a.el).getPropertyValue("border-top-width")),
                                g = parseInt(getComputedStyle(a.el).getPropertyValue("border-bottom-width"));
                            a.$el.css({"min-height": b.height - d - e - f - g})
                        });
                        a.collection.on("sorted", a.render)
                    },
                    childViewOptions: function () {
                        return this.getOption("displayConfig").toJSON()
                    },
                    getEmptyView: function () {
                        var d, a = !1;
                        return this.collection.isLoading ? (d = this.finder.lang.FilesLoading, a = !0) : d = this.collection.isFiltered ? this.finder.lang.FilterFilesEmpty : this.finder.lang.FilesEmpty, b.extend({
                            msg: d,
                            displayLoader: a
                        })
                    },
                    getChildView: function (b) {
                        return b.get("view:isFolder") ?
                            d : g
                    },
                    applySizeClass: function (b) {
                        var a = this, c = !1;
                        k.forEach(a.finder.config.thumbnailClasses, function (d, f) {
                            !c && f > b ? (a.$el.addClass("ckf-files-thumbs-" + d), c = !0) : a.$el.removeClass("ckf-files-thumbs-" + d)
                        })
                    },
                    calculateThumbSizeConfig: function (b) {
                        if (b && this.getOption("displayConfig").get("areThumbnailsResizable")) {
                            var a = this.getOption("displayConfig").get("serverThumbs"), c = k.filter(a, function (a) {
                                return a >= b
                            }), a = k.isEmpty(c) ? k.max(a) : k.min(c), c = this.getOption("displayConfig").get("thumbnailConfigs")[a];
                            return this.getOption("displayConfig").set("thumbSizeString",
                                c.thumb), this.getOption("displayConfig").set("currentThumbConfigSize", a), c
                        }
                    },
                    resizeThumbs: function (b) {
                        this.$el.find(".ckf-file-item").css({width: b + "px", height: b + "px"})
                    },
                    applyBiggerThumbs: function (b) {
                        var a = this;
                        if (b && "thumbs" === a.getOption("displayConfig").get("mode")) {
                            b = parseInt(b, 10);
                            this.applySizeClass(b);
                            var c = this.getOption("displayConfig").get("currentThumbConfigSize");
                            if (c ? b > c : 1) {
                                var d = this.calculateThumbSizeConfig(b);
                                f.getOrCreate("files:resize", function () {
                                    a.children.invoke("trigger", "sizeUpdate",
                                        {thumbSize: b, thumbSizeString: d.thumb});
                                    a.trigger("sizeUpdate:after")
                                }).runAfter(500)
                            } else setTimeout(function () {
                                a.trigger("sizeUpdate:after")
                            }, 400)
                        }
                    },
                    setListMode: function () {
                        this.getOption("displayConfig").set("mode", "list");
                        this.$el.removeClass("ckf-files-thumbs").addClass("ckf-files-list");
                        this.$el.find(".ckf-file-item").css({width: "auto", height: "auto"})
                    },
                    setThumbsMode: function () {
                        this.getOption("displayConfig").set("mode", "thumbs");
                        this.$el.removeClass("ckf-files-list").addClass("ckf-files-thumbs")
                    },
                    getThumbsInRow: function () {
                        if ("list" === this.getOption("displayConfig").get("mode") || 2 > this.children.length)return 1;
                        var b, a, c = this.children.findByIndex(0).$el.offset().top, d = 1;
                        for (b = 1; b < this.children.length && (a = this.children.findByIndex(b), a.$el.offset().top === c); b++)d += 1;
                        return d
                    },
                    focus: function () {
                        this.$el.focus()
                    }
                })
            });
            n.define("CKFinder/Modules/Files/LazyLoader", ["jquery", "backbone"], function (k, h) {
                function b(b, d) {
                    this.finder = b;
                    this.view = d;
                    this.items = new h.Collection
                }

                function g(b, e, a, c) {
                    e.length &&
                    e.chain().filter(function (b) {
                        return d(b, a) && !b.has("timeoutId")
                    }).forEach(function (g, h) {
                        var k = setTimeout(function () {
                            d(g, a) ? (e.remove(g), g.get("view").$el.find("img").attr("src", c.util.jsCssEntities(g.get("view").options.lazyThumb))) : g.unset("timeoutId")
                        }, h * b);
                        g.set("timeoutId", k)
                    })
                }

                function d(b, d) {
                    var a = b.get("view").el.getBoundingClientRect();
                    return 0 <= a.top + a.height - d && a.top <= (q.innerHeight || r.documentElement.clientHeight)
                }

                return b.prototype.registerHandlers = function () {
                    function b() {
                        clearTimeout(d);
                        d = setTimeout(function () {
                            g(h.config.thumbnailDelay, t, a, h)
                        }, 50)
                    }

                    var d, a, c = this.view, h = this.finder, t = this.items;
                    c.on("render", function () {
                        a = k(".ui-page-active .ui-header").height() || 0;
                        g(h.config.thumbnailDelay, t, a, h)
                    });
                    c.on("before:render", function () {
                        t.chain().filter(function (a) {
                            return a.has("timeoutId")
                        }).forEach(function (a) {
                            clearTimeout(a.get("timeoutId"))
                        });
                        t.reset()
                    });
                    c.on("add:child", function (a) {
                        a.options.lazyThumb && t.add({view: a})
                    });
                    c.on("sizeUpdate:after", b);
                    c.on("childview:rerender", function (a) {
                        a.options.lazyThumb &&
                        t.add({view: a});
                        b()
                    });
                    k(r).on("scroll", b);
                    k(q).on("resize", b)
                }, b
            });
            n.define("CKFinder/Modules/Files/SelectionHandler", ["underscore", "backbone", "CKFinder/Util/KeyCode"], function (k, h, b) {
                function g(b, d, e) {
                    function f(a) {
                        g.isInSelectionMode && (a.data.toolbar.push({
                            name: "ClearSelection",
                            type: "button",
                            priority: 105,
                            icon: "ckf-cancel",
                            iconOnly: !0,
                            title: a.finder.lang.Choose,
                            action: function () {
                                g.isInSelectionMode = !1;
                                a.finder.request("files:deselectAll")
                            }
                        }), a.data.toolbar.push({
                            name: "ClearSelectionText", type: "text",
                            priority: 100, label: b.lang.formatFilesCount(b.request("files:getSelected").length)
                        }))
                    }

                    this.filesModule = d;
                    this.finder = b;
                    this.selectedFiles = new h.Collection;
                    this.displayedFiles = e;
                    this.lastFolderCid = null;
                    this.isInSelectionMode = !1;
                    this.focusedFile = null;
                    this.rangeSelectionStart = a;
                    var g = this;
                    b.on("toolbar:reset:Main:folder", f);
                    b.on("toolbar:reset:Main:file", f);
                    b.on("toolbar:reset:Main:files", f)
                }

                function d(a, b) {
                    var d = b.lastFolderCid, e = a.request("folder:getActive"), e = e && e.cid;
                    d && d !== e || a.fire("files:selected",
                        {files: b.getSelectedFiles(b)}, a);
                    b.lastFolderCid = e
                }

                function f(a, f) {
                    var g = f.evt, h = g.keyCode;
                    if (k.contains([b.space, b.left, b.right, b.up, b.down], h)) {
                        g.preventDefault();
                        g.stopPropagation();
                        var n, q = this.displayedFiles.indexOf(this.focusedFile);
                        if (h === b.space && (n = q, 1 < this.selectedFiles.length))return e(this), this.resetRangeSelection(), void d(this.finder, this);
                        g = {isAddToRange: !!g.shiftKey};
                        h === b.up && (n = q - this.filesModule.view.getThumbsInRow());
                        h === b.left && (n = q - 1);
                        h === b.right && (n = q + 1);
                        h === b.down && (n = q + this.filesModule.view.getThumbsInRow());
                        this.selectFiles(n, g)
                    }
                }

                function e(a) {
                    a.selectedFiles.forEach(function (a) {
                        a.trigger("deselected")
                    });
                    a.selectedFiles.reset([], {silent: !0})
                }

                var a = -1;
                return g.prototype.resetRangeSelection = function () {
                    this.rangeSelectionStart = a
                }, g.prototype.selectFiles = function (b, d) {
                    var f = this.displayedFiles, g = this.displayedFiles.indexOf(this.focusedFile), h = f.at(b);
                    if (h) {
                        if (d.resetSelection && e(this), d.isAddToRange || this.resetRangeSelection(), g || (g = 0), g === b && !d.forceSelect || d.isToggle)this.filesSelectToggleHandler({files: [h]});
                        else {
                            var k = {files: h};
                            d.isAddToRange && (this.rangeSelectionStart === a && (this.rangeSelectionStart = g), k = {files: f.slice(b > this.rangeSelectionStart ? this.rangeSelectionStart : b, (b > this.rangeSelectionStart ? b : this.rangeSelectionStart) + 1)});
                            e(this);
                            this.filesSelectHandler(k)
                        }
                        h.trigger("focus");
                        this.focusedFile = h
                    }
                }, g.prototype.filesSelectHandler = function (a) {
                    k.isArray(a.files) || (a.files = [a.files]);
                    this.selectedFiles.add(a.files);
                    d(this.finder, this)
                }, g.prototype.filesSelectToggleHandler = function (a) {
                    k.isArray(a.files) &&
                    (k.forEach(a.files, function (a) {
                        0 > this.selectedFiles.indexOf(a) ? this.selectedFiles.add(a) : (a.trigger("deselected"), this.selectedFiles.remove(a))
                    }, this), d(this.finder, this))
                }, g.prototype.getSelectedFiles = function () {
                    return new h.Collection(this.selectedFiles.where({"view:isFolder": !1}))
                }, g.prototype.registerHandlers = function () {
                    var a = this, e = a.finder, g = a.filesModule;
                    a.selectedFiles.on("reset", function () {
                        d(e, a)
                    });
                    g.view.on("click", function (a) {
                        a.evt.stopPropagation();
                        e.request("files:deselectAll")
                    });
                    g.view.on("childview:file:click",
                        function (b, d) {
                            d.evt.preventDefault();
                            d.evt.stopPropagation();
                            a.isInSelectionMode ? a.selectFiles(a.displayedFiles.indexOf(d.model), {
                                isAddToRange: !1,
                                isToggle: !0
                            }) : a.selectFiles(a.displayedFiles.indexOf(d.model), {
                                isAddToRange: !!d.evt.shiftKey,
                                isToggle: !!d.evt.ctrlKey || !!d.evt.metaKey
                            })
                        });
                    g.view.on("childview:file:longtouch", function (b, d) {
                        a.isInSelectionMode || (a.isInSelectionMode = !0, a.selectFiles(a.displayedFiles.indexOf(d.model), {
                            isAddToRange: !1,
                            isToggle: !0,
                            resetSelection: !0
                        }))
                    });
                    g.view.on("childview:folder:keydown",
                        f.bind(this));
                    g.view.on("childview:file:keydown", f.bind(this));
                    g.view.on("keydown", function (d) {
                        var e, f = d.evt;
                        if ((f.keyCode === b.left || f.keyCode === b.end) && (e = a.displayedFiles.last()), (f.keyCode === b.right || f.keyCode === b.home) && (e = a.displayedFiles.first()), e) {
                            f.stopPropagation();
                            f.preventDefault();
                            var g = f.keyCode === b.left || f.keyCode === b.right || f.keyCode === b.down || f.keyCode === b.up;
                            a.selectFiles(a.displayedFiles.indexOf(e), {
                                forceSelect: g,
                                isAddToRange: !!f.shiftKey,
                                isToggle: !!d.evt.ctrlKey || !!d.evt.metaKey
                            })
                        }
                    });
                    e.setHandlers({
                        "files:select": this.filesSelectHandler.bind(this),
                        "files:select:toggle": this.filesSelectToggleHandler.bind(this),
                        "files:getSelected": this.getSelectedFiles.bind(this),
                        "files:selectAll": function () {
                            a.selectedFiles.reset(g.files.toArray());
                            a.selectedFiles.forEach(function (a) {
                                a.trigger("selected")
                            });
                            d(e, a)
                        },
                        "files:deselectAll": function () {
                            a.selectedFiles.length && (a.selectedFiles.forEach(function (a) {
                                a.trigger("deselected")
                            }), a.selectedFiles.reset())
                        }
                    });
                    e.on("folder:getFiles:after", function () {
                        a.selectedFiles.reset();
                        a.resetRangeSelection();
                        a.isInSelectionMode = !1
                    });
                    e.on("files:selected", function (a) {
                        a.data.files.forEach(function (a) {
                            a.trigger("selected")
                        })
                    });
                    e.on("keydown:" + b.a, function (a) {
                        a.finder.util.isShortcut(a.data.evt, "ctrl") && (a.data.evt.preventDefault(), a.finder.request("files:selectAll"))
                    });
                    e.request("key:listen", {key: b.a})
                }, g
            });
            n.define("CKFinder/Modules/Files/Files", "underscore jquery backbone CKFinder/Models/File CKFinder/Models/Folder CKFinder/Util/collectionFilter CKFinder/Util/KeyCode CKFinder/Modules/Files/SortedFiles CKFinder/Modules/Files/ChooseFiles CKFinder/Modules/Files/Views/FilesView CKFinder/Modules/Files/LazyLoader CKFinder/Modules/Files/SelectionHandler".split(" "),
                function (k, h, b, g, d, f, e, a, c, m, t, p) {
                    function n(d) {
                        var l = this;
                        l.initDfd = new h.Deferred;
                        l.config = new b.Model({
                            isInitialized: !1,
                            areThumbnailsResizable: !1,
                            serverThumbs: [],
                            thumbnailConfigs: {},
                            thumbnailMinSize: null,
                            thumbnailMaxSize: null,
                            thumbnailSizeStep: 1
                        });
                        l.finder = d;
                        l.files = new a;
                        l.displayedFiles = f(l.files);
                        l.displayedFiles.isLoading = !0;
                        l.fileSelect = new c(d);
                        d.setHandlers({
                            "file:download": {callback: A, context: l},
                            "file:getThumb": {callback: C, context: l},
                            "file:getIcon": {callback: y, context: l},
                            "files:filter": {
                                callback: D,
                                context: l
                            },
                            "files:getCurrent": function () {
                                return l.files.clone()
                            },
                            "files:getDisplayed": function () {
                                return l.displayedFiles.clone()
                            },
                            "folder:getFiles": {callback: P, context: l},
                            "folder:refreshFiles": function () {
                                d.request("folder:getFiles", {folder: d.request("folder:getActive")})
                            },
                            "resources:show": {callback: F, context: l}
                        });
                        d.on("command:after:Init", J, l, null, 30);
                        d.on("contextMenu:file", I, l, null, 30);
                        d.on("app:loaded", O, l, null, 20);
                        d.on("files:deleted", function (a) {
                            l.files.remove(a.data.files);
                            l.files.trigger("reset");
                            l.finder.request("files:deselectAll")
                        });
                        d.config.displayFoldersPanel || (d.on("folder:deleted", function (a) {
                            l.files.remove(a.data.folder);
                            l.files.trigger("reset");
                            l.finder.request("files:deselectAll")
                        }), d.on("command:after:GetFolders", function (a) {
                            l.doAfterInit(function () {
                                var b = d.request("folder:getActive");
                                b && b.isPath(a.data.response.currentFolder.path, a.data.response.resourceType) && (b.get("children").forEach(function (a) {
                                    l.files.push(a)
                                }), l.files.trigger("reset"))
                            })
                        }, null, null, 30));
                        d.on("settings:change:files",
                            function (a) {
                                l.config.set(a.data.settings);
                                k.contains(["displayDate", "displayName", "displaySize"], a.data.changed) && l.view.render()
                            });
                        d.on("settings:change:files:thumbSize", function (a) {
                            a = a.data.value;
                            l.view.resizeThumbs(a);
                            l.view.applyBiggerThumbs(a)
                        });
                        d.on("command:after:GetFiles", function (a) {
                            var b = a.data.response, c = d.request("folder:getActive");
                            if (function (a) {
                                    !(Y && sa && K && u) && E || V || (setInterval(function () {
                                        a.request("dialog:info", {msg: "This is a demo version of CKFinder 3.0"})
                                    }, 3E5), V = !0)
                                }(d), !a.data.response.error &&
                                c && c.isPath(b.currentFolder.path, b.resourceType)) {
                                a = b.files;
                                var e = [];
                                d.config.displayFoldersPanel || c.get("children").forEach(function (a) {
                                    e.push(a)
                                });
                                k.forEach(a, function (a) {
                                    a = new g(a);
                                    a.set("folder", c);
                                    e.push(a)
                                });
                                l.displayedFiles.isLoading = !1;
                                l.files.reset(e);
                                d.fire("folder:getFiles:after", {folder: c}, d);
                                q.scrollY && q.scrollTo(0, 0)
                            }
                        });
                        d.on("file:dblclick", z, l);
                        d.on("file:dbltap", z, l);
                        d.on("file:keydown", function (a) {
                            d.util.isShortcut(a.data.evt, "") && a.data.evt.keyCode === e.enter && (a.stop(), a.data.evt.preventDefault(),
                                z.call(l, a))
                        });
                        d.on("command:error:RenameFile", X, null, null, 5)
                    }

                    function v(a) {
                        var b, c;
                        c = "";
                        for (b = 0; b < a.length; b++)c += String.fromCharCode("123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(a[b]));
                        return v = void 0, c
                    }

                    function l(a) {
                        function b(a, d) {
                            d.evt.preventDefault();
                            c.request("folder:openPath", {path: d.model.getPath({full: !0})})
                        }

                        var c = a.finder;
                        a.view = new m({
                            finder: c,
                            collection: a.displayedFiles,
                            displayConfig: a.config,
                            mode: "desktop" === c.request("ui:getMode") ? "thumbs" : "list"
                        });
                        a.view.on("childview:file:contextmenu",
                            function (a, b) {
                                b.evt.preventDefault();
                                c.request("contextMenu", {
                                    name: "file",
                                    evt: b.evt,
                                    positionToEl: a.$el,
                                    context: {file: a.model}
                                })
                            });
                        a.view.on("childview:folder:contextmenu", function (a, b) {
                            b.evt.preventDefault();
                            c.request("contextMenu", {
                                name: "folder",
                                evt: b.evt,
                                positionToEl: a.$el,
                                context: {folder: b.model}
                            })
                        });
                        a.view.on("childview:file:keydown", function (a, b) {
                            c.fire("file:keydown", {evt: b.evt, file: b.model, source: "filespane"}, c)
                        });
                        a.view.on("childview:file:dragstart", function (a, b) {
                            c.request("files:getSelected").contains(b.model) ||
                            (c.request("files:deselectAll"), c.request("files:select", {files: [b.model]}));
                            L(b.evt, c)
                        });
                        a.view.on("childview:folder:keydown", function (a, b) {
                            c.fire("folder:keydown", {evt: b.evt, folder: b.model, source: "filespane"}, c)
                        });
                        a.view.on("childview:folder:click", function (a, b) {
                            b.model.get("isRoot") || c.request("toolbar:reset", {
                                name: "Main",
                                event: "folder",
                                context: {folder: b.model}
                            })
                        });
                        a.view.on("childview:folder:dblclick", b);
                        a.view.on("childview:folder:dbltap", b);
                        a.view.on("childview:file:dblclick", function (a, b) {
                            c.fire("file:dblclick",
                                {evt: b.evt, file: b.model})
                        });
                        a.view.on("childview:file:dbltap", function (a, b) {
                            c.fire("file:dbltap", {evt: b.evt, file: b.model})
                        });
                        a.view.on("childview:folder:drop", function (a, b) {
                            c.fire("folder:drop", {evt: b.evt, folder: b.model, view: b.view}, c)
                        });
                        (new t(c, a.view)).registerHandlers();
                        c.request("page:create", {
                            name: "Main",
                            view: a.view,
                            mainRegionAutoHeight: !0,
                            className: "ckf-files-page" + (c.config.displayFoldersPanel ? "" : " ckf-files-no-tree")
                        });
                        c.on("ui:resize", function (b) {
                            var d;
                            b.data.modeChanged && ("desktop" === b.data.mode ?
                                (a.view.setThumbsMode(), c.request("settings:enable", {
                                    group: "files",
                                    name: "thumbSize"
                                }), d = c.request("settings:getValue", {
                                    group: "files",
                                    name: "thumbSize"
                                }), a.view.resizeThumbs(d), a.view.applyBiggerThumbs(d)) : (c.request("settings:disable", {
                                group: "files",
                                name: "thumbSize"
                            }), a.view.setListMode()))
                        });
                        c.request("page:show", {name: "Main"});
                        c.request("key:listen", {key: e.f9});
                        c.request("key:listen", {key: e.f5});
                        c.request("key:listen", {key: e.r});
                        c.on("keydown:" + e.f9, function (b) {
                            c.util.isShortcut(b.data.evt, "alt") &&
                            (b.data.evt.preventDefault(), b.data.evt.stopPropagation(), a.view.$el.focus())
                        });
                        c.on("keydown:" + e.f5, function (a) {
                            (c.util.isShortcut(a.data.evt, "") || c.util.isShortcut(a.data.evt, "ctrl") || c.util.isShortcut(a.data.evt, "shift") || c.util.isShortcut(a.data.evt, "ctrl+shift")) && B(a)
                        });
                        c.on("keydown:" + e.r, function (a) {
                            c.util.isShortcut(a.data.evt, "ctrl") && B(a)
                        })
                    }

                    function z(a) {
                        var b = this.finder;
                        a = a.data.file;
                        b.request("files:select", {files: a});
                        b.config.chooseFiles && b.config.chooseFilesOnDblClick ? b.request("files:choose",
                            {files: b.request("files:getSelected")}) : b.request("file:preview", {file: a})
                    }

                    function P(a) {
                        var b = a.folder, c = this.finder;
                        a = k.extend({folder: b}, a.context);
                        return this.displayedFiles.isLoading = !0, this.files.reset(), c.fire("folder:getFiles:before", a, c) ? c.request("command:send", {
                            name: "GetFiles",
                            folder: b,
                            context: a
                        }) : void 0
                    }

                    function D(a) {
                        var b = this;
                        b._lastFilterTimeout && (clearTimeout(b._lastFilterTimeout), b._lastFilterTimeout = null);
                        200 > b.displayedFiles.length ? b.displayedFiles.search(a.text) : b._lastFilterTimeout =
                            setTimeout(function () {
                                b.displayedFiles.search(a.text)
                            }, 1E3)
                    }

                    function A(a) {
                        var b = k.uniqueId("ckf-"), c = a.file.get("folder"), d = this.finder;
                        a = d.request("command:url", {
                            command: "DownloadFile",
                            folder: c,
                            params: {fileName: a.file.get("name")}
                        });
                        var e = h("#" + b);
                        e.length || (e = h("<iframe>"), e.attr("id", b), e.css("display", "none"), e.on("load", function () {
                            var a = h(e.get(0).contentDocument).text();
                            if (a.length)try {
                                var b = JSON.parse(a);
                                b.error && 117 === b.error.number && (d.request("folder:refreshFiles"), d.request("dialog:info",
                                    {msg: d.lang.ErrorMsg.MissingFile}))
                            } catch (c) {
                            }
                        }), e.attr("src", a), h("body").append(e))
                    }

                    function C(a) {
                        var b = a.file, c = {fileName: b.get("name"), date: b.get("date"), fileSize: b.get("size")};
                        return a.size && (c.size = a.size), this.finder.request("command:url", {
                            command: "Thumbnail",
                            folder: b.get("folder"),
                            params: c
                        })
                    }

                    function y(a) {
                        var b = this.finder.config.fileIconsSizes.split(","), c = a.extension.toLocaleLowerCase(), c = this.finder.config.fileIcons[k.has(this.finder.config.fileIcons, c) ? c : "default"];
                        return this.finder.util.url(this.finder.config.fileIconsPath +
                            function (a) {
                                for (var c = b.length, d = c - 1; a > parseInt(b[--c]) && 0 <= c;)d = c;
                                return b[d]
                            }(a.size) + "/" + c + "?ver=8mhio5")
                    }

                    function F() {
                        var a = this, b = a.finder;
                        a.doAfterInit(function () {
                            a.files.reset(b.request("resources:get").toArray());
                            b.config.rememberLastFolder && b.request("settings:setValue", {
                                group: "folders",
                                name: "lastFolder",
                                value: "/"
                            });
                            b.fire("resources:show", {resources: a.resources}, b)
                        })
                    }

                    function J(a) {
                        var b = this, c = b.finder;
                        N = N || function (a) {
                                return function (b) {
                                    return a.charCodeAt(b)
                                }
                            }(v(c.config.initConfigInfo.c));
                        if ((new p(c, b, b.displayedFiles)).registerHandlers(), !a.data.response.error) {
                            var d = parseInt(b.finder.config.thumbnailMaxSize, 10), e = parseInt(b.finder.config.thumbnailMinSize, 10);
                            a.data.response.thumbs && k.forEach(a.data.response.thumbs, function (a) {
                                var c, d;
                                d = a.split("x");
                                c = d[0] > d[1] ? d[0] : d[1];
                                b.config.get("serverThumbs").push(parseInt(c, 10));
                                b.config.get("thumbnailConfigs")[c] = {width: d[0], height: d[1], thumb: a}
                            });
                            b.config.get("serverThumbs").length && (e || (e = k.min(b.config.get("serverThumbs"))), d || (d = k.max(b.config.get("serverThumbs"))));
                            (function () {
                                var a = N(4) - N(0);
                                N(4) - N(0);
                                0 > a && (a = N(4) - N(0) + 33);
                                Y = 4 > a
                            })();
                            b.config.set("areThumbnailsResizable", !(!e || !d));
                            var f = k.max(b.config.get("serverThumbs"));
                            b.config.set("thumbnailMaxSize", d > f ? f : d);
                            b.config.set("thumbnailMinSize", e);
                            b.config.set("thumbnailSizeStep", b.finder.config.thumbnailSizeStep);
                            (function () {
                                var a = {
                                    s: function (a) {
                                        for (var b = "", c = 0; c < a.length; ++c)b += String.fromCharCode(a.charCodeAt(c) ^ 255 & c);
                                        return b
                                    }, m: 92533269
                                };
                                E = !function (b, c, d, e, f, g) {
                                    var h = q[a.s("D`vf")], k, l, m, p;
                                    l = 33 + (d * g -
                                        e * f) % 33;
                                    for (m = k = 0; 33 > m; m++)1 == l * m % 33 && (k = m);
                                    l = b;
                                    m = c;
                                    return p = new h(1E4 * (218977407 ^ a.m)), (k * g % 33 * l + k * (33 + -1 * e) % 33 * m) % 33 * 12 + ((k * (33 + -1 * f) - 33 * ("" + k * (33 + -1 * f) / 33 >>> 0)) * l + k * d % 33 * m) % 33 - 1 >= 12 * (p[a.s("gdvEqij^mhx")]() % 2E3) + p[a.s("gdvNkkro")]()
                                }(N(8), N(9), N(0), N(1), N(2), N(3))
                            })();
                            d = {
                                group: "files",
                                label: c.lang.SetDisplay,
                                settings: [{
                                    name: "displayName",
                                    label: c.lang.SetDisplayName,
                                    type: "checkbox",
                                    defaultValue: c.config.defaultDisplayFileName
                                }, {
                                    name: "displayDate",
                                    label: c.lang.SetDisplayDate,
                                    type: "checkbox",
                                    defaultValue: c.config.defaultDisplayDate
                                },
                                    {
                                        name: "displaySize",
                                        label: c.lang.SetDisplaySize,
                                        type: "checkbox",
                                        defaultValue: c.config.defaultDisplayFileSize
                                    }]
                            };
                            e = {
                                name: "thumbSize",
                                label: c.lang.SetDisplayThumbnailSize,
                                type: "hidden",
                                defaultValue: c.config.thumbnailDefaultSize
                            };
                            !function () {
                                var a = N(5) - N(1);
                                0 > a && (a = N(5) - N(1) + 33);
                                K = 1 === a
                            }();
                            b.config.get("areThumbnailsResizable") && (e.type = "range", e.isEnabled = "desktop" === c.request("ui:getMode"), e.attributes = {
                                min: b.config.get("thumbnailMinSize"),
                                max: b.config.get("thumbnailMaxSize"),
                                step: b.config.get("thumbnailSizeStep")
                            });
                            d.settings.push(e);
                            a = a.finder.request("settings:define", d);
                            if (function () {
                                    sa = function (a, b, c) {
                                        var d = 0, e = (q.opener ? q.opener : q.top).location.hostname;
                                        if (0 === b && (e = e.replace(/^www./, "")), 1 === b && (e = 0 <= ("." + e.replace(/^www./, "")).search(new RegExp("\\." + c + "$")) && c), 2 === b)return !0;
                                        for (b = 0; b < e.length; b++)d += e.charCodeAt(b);
                                        return e === c && a === d + -33 * parseInt(d % 100 / 33, 10) - 100 * ("" + d / 100 >>> 0)
                                    }(N(7), function (a, b) {
                                        var c = a - b;
                                        return 0 > c && (c = a - b + 33), c
                                    }(N(4), N(0)), c.config.initConfigInfo.s)
                                }(), b.config.set(a), b.config.get("thumbSize"))a =
                                b.config.get("thumbSize"), d = null, a > b.config.get("thumbnailMaxSize") ? d = b.config.get("thumbnailMaxSize") : a < b.config.get("thumbnailMinSize") && (d = b.config.get("thumbnailMinSize")), d && (b.config.set("thumbSize", d), b.finder.request("settings:setValue", {
                                group: "files",
                                name: "thumbSize",
                                value: d
                            })), b.view.calculateThumbSizeConfig(a);
                            b.initDfd.resolve();
                            (function () {
                                for (var a = c.config.initConfigInfo.c, b = N(10), d = 0, e = 0; 10 > e; e++)d += a.charCodeAt(e);
                                for (; 33 < d;)for (a = d.toString().split(""), e = d = 0; e < a.length; e++)d += parseInt(a[e]);
                                u = d === b
                            })()
                        }
                    }

                    function I(a) {
                        a = a.data;
                        var b = a.context.file, c = this, d = b.get("folder").get("acl"), e = c.finder.request("files:getSelected");
                        e.length && !e.contains(b) && c.finder.request("files:deselectAll");
                        c.finder.request("files:select", {files: b});
                        a.groups.addGroup("file", [{
                            name: "Download",
                            label: c.finder.lang.Download,
                            isActive: d.fileView,
                            icon: "ckf-file-download",
                            action: function () {
                                c.finder.request("file:download", {file: b})
                            }
                        }])
                    }

                    function L(a, b) {
                        function c(a) {
                            h(r).off("mousemove", d);
                            h(r).off("mouseup", c);
                            g.remove();
                            a = h(a.target);
                            a.data("ckf-drop") && a.trigger(new h.Event("ckfdrop", {ckfFilesSelection: !0}))
                        }

                        function d(a) {
                            e(g, a)
                        }

                        function e(a, b) {
                            var c = h(b.target);
                            c.data("ckf-drop") && c.trigger("ckfdragover");
                            a.css({top: b.originalEvent.clientY + 10, left: b.originalEvent.clientX + 10})
                        }

                        var f = b.request("files:getSelected").length;
                        a.originalEvent.stopPropagation();
                        a.originalEvent.preventDefault();
                        var g = h('<div class="ckf-drag">'), k = '<img src="' + h(a.currentTarget).find("img:first").attr("src") + '">';
                        1 < f ? g.append(h(k).addClass("ckf-drag-first")).append(h(k).addClass("ckf-drag-second")).append(h(k).addClass("ckf-drag-third")).append('<div class="ckf-drag-info">' +
                            f + "</div>") : g.append(h(k));
                        g.appendTo("body");
                        e(g, a);
                        g.on("mousemove", d);
                        g.on("mouseup", c);
                        h(r).on("mousemove", d);
                        h(r).one("mouseup", c)
                    }

                    function O() {
                        G.call(this, this.finder);
                        l(this)
                    }

                    function G(a) {
                        a.on("page:create:Main", function (a) {
                            a.finder.request("toolbar:create", {name: "Main", page: "Main"})
                        });
                        a.on("toolbar:reset:Main:file", function (a) {
                            a.data.toolbar.push({
                                name: "Download",
                                type: "button",
                                priority: 70,
                                icon: "ckf-file-download",
                                label: a.finder.lang.Download,
                                action: function () {
                                    a.finder.request("file:download",
                                        {file: a.finder.request("files:getSelected").toArray()[0]})
                                }
                            })
                        });
                        a.on("resources:show", function () {
                            a.request("toolbar:reset", {name: "Main", event: "resources"})
                        });
                        a.on("files:selected", function (a) {
                            var b = a.data.files;
                            return b.length ? 1 < b.length ? void a.finder.request("toolbar:reset", {
                                name: "Main",
                                event: "files",
                                context: {files: b}
                            }) : void a.finder.request("toolbar:reset", {
                                name: "Main",
                                event: "file",
                                context: {file: b.at(0)}
                            }) : (b = a.finder.request("folder:getActive")) ? void a.finder.request("toolbar:reset", {
                                name: "Main",
                                event: "folder", context: {folder: b}
                            }) : void a.finder.request("toolbar:reset", {name: "Main", event: "resources"})
                        }, this)
                    }

                    function X(a) {
                        117 === a.data.response.error.number && (a.cancel(), a.finder.request("dialog:info", {msg: a.finder.lang.ErrorMsg.MissingFile}), a.finder.request("folder:refreshFiles"))
                    }

                    function B(a) {
                        a.data.evt.preventDefault();
                        a.data.evt.stopPropagation();
                        var b = a.finder.request("folder:getActive");
                        a.finder.request("folder:refreshFiles");
                        a.finder.request("command:send", {
                            name: "GetFolders", folder: b,
                            context: {parent: b}
                        })
                    }

                    n.prototype.doAfterInit = function (a) {
                        this.initDfd.promise().done(a)
                    };
                    var Y, K, u, E, sa, N, V = !1;
                    return n
                });
            n.define("text!CKFinder/Templates/Folders/FolderTreeNodeView.dot", [], function () {
                return '<a class="ckf-folders-tree-label {{? !it.hasChildren }}ckf-folders-tree-no-children{{?}}" tabindex="-1" data-ckf-drop="true">{{! it.label || it.name }}</a>\n<a class="ckf-folders-tree-expander {{? !it.hasChildren }}ckf-folders-tree-no-children{{?}}" data-icon="custom" data-iconpos="notext"></a>\n<div class="ckf-folders-tree-body">\n\t<ul data-role="listview" style="display:none;"></ul>\n</div>\n'
            });
            n.define("CKFinder/Modules/Folders/Views/FolderTreeNodeView", ["underscore", "CKFinder/Views/Base/CompositeView", "text!CKFinder/Templates/Folders/FolderTreeNodeView.dot", "CKFinder/Util/KeyCode", "ckf-jquery-mobile"], function (k, h, b, g) {
                function d(b) {
                    this.trigger("folder:contextmenu", {evt: b, view: this, model: this.model})
                }

                return h.extend({
                    name: "FolderTreeNode",
                    tagName: "li",
                    className: "ckf-folders-tree",
                    childViewContainer: "ul:first",
                    template: b,
                    bubbleEvents: "folder:expand folder:click folder:contextmenu folder:keydown folder:dragenter folder:dragleave folder:dragover folder:drop selected:before".split(" "),
                    modelEvents: {
                        selected: "onModelSelected",
                        deselected: "deselect",
                        change: "onModelChange",
                        "ui:expand": "expand"
                    },
                    ui: {
                        subTree: "ul:first",
                        expander: ".ckf-folders-tree-expander:first",
                        label: ".ckf-folders-tree-label:first"
                    },
                    events: {
                        "click @ui.expander": function (b) {
                            b.stopPropagation();
                            this.requestExpand()
                        }, "contextmenu @ui.label": function (b) {
                            b.stopPropagation();
                            d.call(this, b)
                        }, "click @ui.label": function (b) {
                            b.stopPropagation();
                            2 === b.button || 3 === b.button ? d.call(this, b) : this.trigger("folder:click", {view: this})
                        },
                        "keydown @ui.label": function (b) {
                            return b.keyCode === g.menu || b.keyCode === g.f10 && this.finder.util.isShortcut(b, "shift") ? (b.stopPropagation(), void d.call(this, b)) : void this.trigger("folder:keydown", {
                                evt: b,
                                view: this,
                                model: this.model
                            })
                        }, "dragenter @ui.label": function (b) {
                            b.stopPropagation();
                            b.preventDefault();
                            this.ui.label.addClass("ui-btn-active");
                            this.trigger("folder:dragenter", {evt: b, view: this, model: this.model})
                        }, "dragover @ui.label": function (b) {
                            b.stopPropagation();
                            b.preventDefault();
                            this.ui.label.addClass("ui-btn-active");
                            this.trigger("folder:dragover", {evt: b, view: this, model: this.model})
                        }, "mouseout @ui.label": function () {
                            this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active")
                        }, "ckfdragover @ui.label": function () {
                            this.ui.label.addClass("ui-btn-active")
                        }, "dragleave @ui.label": function (b) {
                            b.stopPropagation();
                            this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active");
                            this.trigger("folder:dragleave", {evt: b, view: this, model: this.model})
                        }, "drop @ui.label": function (b) {
                            b.stopPropagation();
                            this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active");
                            this.trigger("folder:drop", {evt: b, view: this, model: this.model})
                        }, "ckfdrop @ui.label": function (b) {
                            b.stopPropagation();
                            this.model.get(this.viewMetadataPrefix + ":isSelected") || this.ui.label.removeClass("ui-btn-active");
                            this.trigger("folder:drop", {evt: b, view: this, model: this.model})
                        }
                    },
                    initialize: function (b) {
                        this.collection = this.model.get("children");
                        this.viewMetadataPrefix = b.viewMetadataPrefix || "view";
                        this.options =
                            k.extend({
                                workingIcon: "ui-icon-ckf-rotate",
                                expandedIcon: "ui-icon-ckf-arrow-d",
                                collapsedIcon: "ui-icon-ckf-arrow-" + ("ltr" === this.finder.lang.dir ? "r" : "l")
                            }, b);
                        this.model.has(this.viewMetadataPrefix + ":isExpanded") || this.model.set(this.viewMetadataPrefix + ":isExpanded", !1)
                    },
                    onModelSelected: function () {
                        this.trigger("selected:before");
                        this.ui.label.addClass("ui-btn-active");
                        this.model.set(this.viewMetadataPrefix + ":isSelected", !0);
                        this.expandParents();
                        this.focus()
                    },
                    deselect: function () {
                        this.ui.label.removeClass("ui-btn-active");
                        this.model.set(this.viewMetadataPrefix + ":isSelected", !1);
                        this.children.call("deselect")
                    },
                    onModelChange: function (b) {
                        var d = !1, a = ["name", "parent"];
                        (k.keys(b.changed).forEach(function (b) {
                            k.contains(a, b) && (d = !0)
                        }), k.isUndefined(b.changed.hasChildren) || b.changed.hasChildren || (d = !0), d) ? (b = !!this.$el.find(":focus").length, this.render(), b && this.ui.label.focus()) : (b.changed.hasChildren && (this.ui.label.removeClass("ckf-folders-tree-no-children"), this.ui.expander.removeClass("ckf-folders-tree-no-children")),
                            this.refreshUI())
                    },
                    onRender: function () {
                        this.refreshUI();
                        this.model.get(this.viewMetadataPrefix + ":isExpanded") ? this.expand() : this.collapse();
                        this.model.get(this.viewMetadataPrefix + ":isSelected") && this.ui.label.addClass("ui-btn-active")
                    },
                    refreshUI: function () {
                        this.$el.closest("ul").listview().listview("refresh");
                        this.ui.subTree.listview().listview("refresh");
                        this.model.get("isPending") ? (this.ui.expander.addClass(this.options.workingIcon).addClass("ckf-tree-loading"), this.$el.find("> .ckf-folders-tree-label, > .ckf-folders-tree-expander").addClass("ui-state-disabled")) :
                            (this.ui.expander.removeClass(this.options.workingIcon).removeClass("ckf-tree-loading"), this.$el.find("> .ckf-folders-tree-label, > .ckf-folders-tree-expander").removeClass("ui-state-disabled"));
                        this.model.get(this.viewMetadataPrefix + ":isExpanding") ? this.ui.expander.addClass(this.options.workingIcon).addClass("ckf-tree-loading") : this.model.get("isPending") || this.ui.expander.removeClass(this.options.workingIcon).removeClass("ckf-tree-loading")
                    },
                    childViewOptions: function () {
                        return {viewMetadataPrefix: this.viewMetadataPrefix}
                    },
                    onAddChild: function (b) {
                        var d = this;
                        this.refreshUI();
                        d.model.get(d.viewMetadataPrefix + ":isExpanding") && d.expand();
                        k.each(d.bubbleEvents, function (a) {
                            b.on(a, function (b) {
                                d.trigger(a, b)
                            })
                        });
                        b.parentView = this;
                        b.on("focusnext", function () {
                            this.model.next().trigger("focusItem")
                        });
                        b.on("focusprev", function () {
                            this.model.next().trigger("focusItem")
                        })
                    },
                    collapse: function () {
                        this.children.each(function (b) {
                            b.collapse()
                        });
                        this.ui.subTree.hide();
                        this.ui.expander.removeClass(this.options.workingIcon).removeClass(this.options.expandedIcon).removeClass("ckf-tree-loading").addClass(this.options.collapsedIcon);
                        this.ui.label.attr("aria-expanded", !1);
                        this.$el.removeClass("ckf-tree-expanded");
                        this.model.set(this.viewMetadataPrefix + ":isExpanded", !1)
                    },
                    expand: function () {
                        this.ui.subTree.show();
                        this.ui.expander.removeClass(this.options.workingIcon).removeClass(this.options.collapsedIcon).removeClass("ckf-tree-loading").addClass(this.options.expandedIcon);
                        this.ui.label.attr("aria-expanded", !0);
                        this.$el.addClass("ckf-tree-expanded");
                        this.model.set(this.viewMetadataPrefix + ":isExpanded", !0);
                        this.model.set(this.viewMetadataPrefix +
                            ":isExpanding", !1);
                        this.refreshUI()
                    },
                    requestExpand: function () {
                        this.refreshUI();
                        this.ui.expander.hasClass(this.options.collapsedIcon) ? (this.ui.expander.removeClass(this.options.collapsedIcon).addClass(this.options.workingIcon).addClass("ckf-tree-loading"), this.model.get("hasChildren") && this.model.get("children").length && this.expand(), this.model.get("children").length || this.model.set(this.viewMetadataPrefix + ":isExpanding", !0), this.trigger("folder:expand", {view: this})) : (this.collapse(), this.trigger("folder:collapse",
                            {view: this}))
                    },
                    next: function () {
                        if (!this.parentView || !this.parentView.children)return null;
                        var b = this.parentView.collection, d = b.indexOf(this.model);
                        return d + 1 === b.length ? null : this.parentView.children.findByModel(b.at(d + 1))
                    },
                    prev: function () {
                        if (!this.parentView || !this.parentView.children)return null;
                        var b = this.parentView.collection, d = b.indexOf(this.model);
                        return 0 === d ? null : this.parentView.children.findByModel(b.at(d - 1))
                    },
                    focus: function () {
                        this.ui.label.focus()
                    },
                    expandParents: function () {
                        for (var b = this; b.parentView &&
                        b.parentView.expand;)b = b.parentView, b.expand()
                    }
                })
            });
            n.define("CKFinder/Modules/Folders/Views/FoldersTreeView", ["CKFinder/Views/Base/CompositeView", "CKFinder/Modules/Folders/Views/FolderTreeNodeView", "CKFinder/Util/KeyCode"], function (k, h, b) {
                function g(a, b, d) {
                    if (a) {
                        if (a && !b)return void d.requestExpand();
                        (a = d.children.first()) && a.focus()
                    }
                }

                function d(a, b, d) {
                    var e;
                    if (a && b)return void d.children.findByModel(d.collection.first()).focus();
                    if (e = d.next(), e || !d.model.get("isRoot")) {
                        if (!e) {
                            a = d.parentView;
                            for (e =
                                     a.next(); !e && !a.model.get("isRoot");)e = a.next(), a = a.parentView;
                            !e && a.model.get("isRoot") && (e = a.next())
                        }
                        e && e.focus()
                    }
                }

                function f(a, b, d) {
                    a && b ? d.collapse() : d.model.get("isRoot") || d.parentView.focus()
                }

                function e(a) {
                    var b = a.prev();
                    if (b)for (; b.model.get(a.viewMetadataPrefix + ":isExpanded");)b = b.children.findByModel(b.collection.last()); else a.model.get("isRoot") || (b = a.parentView);
                    b && b.focus()
                }

                return k.extend({
                    name: "FoldersTree", childView: h, tagName: "ul", className: "ckf-tree", attributes: {
                        "data-role": "listview",
                        tabindex: 20
                    }, template: "", events: {
                        keydown: function (a) {
                            var c;
                            a.keyCode !== b.up && a.keyCode !== b.end || (c = this.children.last());
                            a.keyCode !== b.down && a.keyCode !== b.home || (c = this.children.first());
                            c && (a.stopPropagation(), a.preventDefault(), c.focus())
                        }
                    }, childEvents: {
                        "folder:keydown": function (a, c) {
                            function h() {
                                c.evt.preventDefault();
                                c.evt.stopPropagation()
                            }

                            var k = c.view, p = c.evt.keyCode, n = c.model, q = n.get(k.viewMetadataPrefix + ":isExpanded"), n = n.get("hasChildren");
                            p === b.up && (h(), e(k));
                            p === ("ltr" === this.finder.lang.dir ?
                                b.right : b.left) && (h(), g(n, q, k));
                            p === b.down && (h(), d(n, q, k));
                            p === ("ltr" === this.finder.lang.dir ? b.left : b.right) && (h(), f(n, q, k))
                        }
                    }, initialize: function (a) {
                        this.viewMetadataPrefix = a.viewMetadataPrefix || "view";
                        this.on("childview:selected:before", function () {
                            this.children.call("deselect")
                        }, this)
                    }, childViewOptions: function () {
                        return {viewMetadataPrefix: this.viewMetadataPrefix}
                    }, onAddChild: function (a) {
                        a.parentView = this;
                        this.refreshUI()
                    }, refreshUI: function () {
                        this.$el.listview().listview("refresh")
                    }
                })
            });
            n.define("CKFinder/Modules/FilesMoveCopy/Models/MoveCopyData",
                ["underscore", "backbone"], function (k, h) {
                    return h.Model.extend({
                        defaults: {done: 0, lastCommandResponse: !1}, initialize: function () {
                            this.set({fileExistsErrors: new h.Collection, otherErrors: []})
                        }, processResponse: function (b) {
                            this.set("lastResponse", {
                                done: "Copy" === this.get("type") ? b.copied : b.moved,
                                response: b
                            });
                            var g = this.get("done"), d = parseInt("Copy" === this.get("type") ? b.copied : b.moved);
                            if (this.set("done", g + d), b.error && (300 === b.error.number || 301 === b.error.number)) {
                                var f = this.get("fileExistsErrors"), e = this.get("otherErrors");
                                k.forEach(b.error.errors, function (a) {
                                    if (115 === a.number)f.push(a); else {
                                        var b = k.findWhere(e, {number: a.number});
                                        b || (b = {number: a.number, files: []}, e.push(b));
                                        b.files.push(a.name)
                                    }
                                })
                            }
                        }, hasFileExistErrors: function () {
                            return !!this.get("fileExistsErrors").length
                        }, hasOtherErrors: function () {
                            return !!this.get("otherErrors").length
                        }, nextError: function () {
                            var b = this.get("fileExistsErrors").shift();
                            return this.set("current", b), b
                        }, getFilesForPost: function (b) {
                            var g = [];
                            if (g.push(this.get("current").toJSON()), b)for (; this.hasFileExistErrors();)g.push(this.nextError().toJSON());
                            return g
                        }, addErrorMessages: function (b) {
                            k.forEach(this.get("otherErrors"), function (g) {
                                g.msg = b[g.number]
                            })
                        }
                    })
                });
            n.define("text!CKFinder/Templates/FilesMoveCopy/ChooseFolder.dot", [], function () {
                return '<div data-role="header">\n\t<h2>{{= it.lang.DestinationFolder }}</h2>\n\t<a class="ui-btn ui-corner-all ui-btn-icon-notext ui-icon-ckf-back" id="ckf-move-copy-close" title="{{= it.lang.CloseBtn }}"></a>\n</div>\n<div id="ckf-move-copy-content"></div>\n'
            });
            n.define("CKFinder/Modules/FilesMoveCopy/Views/ChooseFolderLayout",
                ["CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/FilesMoveCopy/ChooseFolder.dot"], function (k, h) {
                    return k.extend({
                        name: "ChooseFolderDialogLayoutView",
                        template: h,
                        regions: {content: "#ckf-move-copy-content"},
                        ui: {close: "#ckf-move-copy-close"}
                    })
                });
            n.define("CKFinder/Modules/FilesMoveCopy/Views/MoveCopyDialogLayout", ["CKFinder/Views/Base/LayoutView"], function (k) {
                return k.extend({name: "MoveCopyDialogLayoutView", template: "<div></div>", regions: {content: "div"}})
            });
            n.define("text!CKFinder/Templates/FilesMoveCopy/MoveCopyFileActionsTemplate.dot",
                [], function () {
                    return '<h3 class="ckf-move-copy-filename">{{= it.current.get( \'name\' ) }}</h3>\n<p class="ckf-move-copy-error">{{= it.lang.Errors[ 115 ] }}</p>\n\n<button class="ckf-move-copy-button" id="ckf-move-overwrite">{{= it.lang.FileOverwrite }}</button>\n<button class="ckf-move-copy-button" id="ckf-move-rename">{{= it.lang.FileAutorename }}</button>\n<button class="ckf-move-copy-button" id="ckf-move-skip">{{= it.lang.common.skip }}</button>\n\n<div class="ckf-move-copy-checkbox">\n\t<label>\n\t\t<input name="processAll" type="checkbox">\n\t\t{{= it.lang.common.rememberDecision }}\n\t</label>\n</div>\n\n{{? it.showCancel }}\n<div class="ui-grid-solo">\n\t<div class="ui-block-a"><div><button id="ckf-move-cancel">{{= it.lang.common.cancel }}</button></div></div>\n</div>\n{{?}}\n'
                });
            n.define("CKFinder/Modules/FilesMoveCopy/Views/MoveCopyFileActionsView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/FilesMoveCopy/MoveCopyFileActionsTemplate.dot"], function (k, h) {
                return k.extend({
                    name: "MoveCopyErrorsView",
                    template: h,
                    ui: {
                        processAll: '[name="processAll"]',
                        overwrite: "#ckf-move-overwrite",
                        skip: "#ckf-move-skip",
                        rename: "#ckf-move-rename",
                        cancel: "#ckf-move-cancel"
                    },
                    onRender: function () {
                        this.$el.enhanceWithin()
                    }
                })
            });
            n.define("text!CKFinder/Templates/FilesMoveCopy/MoveCopyResultTemplate.dot",
                [], function () {
                    return '<p>{{= it.msg }}</p>\n<hr>\n<p class="ckf-move-copy-failures-title ui-body-inherit">{{= it.errorsTitle }}</p>\n<div class="ckf-move-copy-failures">\n\t{{~ it.otherErrors: errorGroup }}\n\t\t<p>{{= errorGroup.msg }}</p>\n\t\t<ul>\n\t\t{{~ errorGroup.files: error }}\n\t\t\t<li>{{= error }}</li>\n\t\t{{~}}\n\t\t</ul>\n\t{{~}}\n</div>\n{{? it.showCancel }}\n<div class="ui-grid-solo">\n\t<div class="ui-block-a"><div><button id="ckf-move-copy-ok">{{= it.lang.OkBtn }}</button></div></div>\n</div>\n{{?}}\n'
                });
            n.define("CKFinder/Modules/FilesMoveCopy/Views/MoveCopyResultView", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/FilesMoveCopy/MoveCopyResultTemplate.dot"], function (k, h) {
                return k.extend({
                    name: "MoveCopyResultView",
                    template: h,
                    className: "ckf-move-copy-result",
                    ui: {ok: "#ckf-move-copy-ok"},
                    onRender: function () {
                        this.$el.enhanceWithin()
                    }
                })
            });
            n.define("CKFinder/Modules/FilesMoveCopy/FilesMoveCopy", "underscore backbone CKFinder/Views/MessageView CKFinder/Modules/Folders/Views/FoldersTreeView CKFinder/Modules/FilesMoveCopy/Models/MoveCopyData CKFinder/Modules/FilesMoveCopy/Views/ChooseFolderLayout CKFinder/Modules/FilesMoveCopy/Views/MoveCopyDialogLayout CKFinder/Modules/FilesMoveCopy/Views/MoveCopyFileActionsView CKFinder/Modules/FilesMoveCopy/Views/MoveCopyResultView CKFinder/Util/KeyCode".split(" "),
                function (k, h, b, g, d, f, e, a, c, m) {
                    function n(a, b, c) {
                        var e = a.files, f = [], g = a.toFolder;
                        e instanceof h.Collection && (e = e.toArray());
                        k.forEach(e, function (b) {
                            var c, d;
                            d = {options: a.options ? a.options : ""};
                            "function" == typeof b.get ? (c = b.get("folder"), d.name = b.get("name"), d.type = c.get("resourceType"), d.folder = c.getPath()) : (d.name = b.name, d.type = b.type, d.folder = b.folder);
                            f.push(d)
                        });
                        e = new d;
                        e.set({type: b, currentFolder: g});
                        p(c, f, e)
                    }

                    function p(a, b, c, d) {
                        d && k.forEach(b, function (a, c) {
                            b[c].options = d
                        });
                        var e = c.get("type"),
                            f = b.length;
                        a.request("loader:show", {text: a.lang[e + (1 === f ? "OneFileWait" : "ManyFilesWait")].replace("%1", f)});
                        a.request("command:send", {
                            name: e + "Files",
                            type: "post",
                            post: {files: b},
                            folder: c.get("currentFolder"),
                            context: {moveCopyData: c}
                        })
                    }

                    function q(b, e, f) {
                        function g() {
                            f.finder.request("page:destroy", {name: C});
                            f.finder.request("dialog:destroy")
                        }

                        if (!b.data.response.error || 116 !== b.data.response.error.number) {
                            var h = f.finder, k = b.data.context, k = k && k.moveCopyData ? k.moveCopyData : new d;
                            k.get("type") || k.set("type",
                                e);
                            k.processResponse(b.data.response);
                            h.request("loader:hide");
                            var m;
                            b = ("Copy" === k.get("type") ? "Copied" : "Moved") + "FilesNumber";
                            if (k.set("msg", h.lang[b].replace("%1", k.get("done"))), k.set("errorsTitle", h.lang[k.get("type") + "FilesErrorTitle"]), k.set("showCancel", A(h)), !k.hasFileExistErrors())return h.request("page:destroy", {name: F}), h.request("page:destroy", {name: C}), e = h.lang[k.hasFileExistErrors() ? "OperationCompletedErrors" : k.get("type") + "Operation"], k.hasOtherErrors() && (k.set("msg", h.lang.OperationCompletedErrors +
                                " " + k.get("msg")), m = new c({
                                finder: h,
                                model: k,
                                events: {
                                    "click @ui.ok": function () {
                                        f.finder.request("page:destroy", {name: y});
                                        f.finder.request("dialog:destroy")
                                    }
                                },
                                className: function () {
                                    return "mobile" == this.finder.request("ui:getMode") ? "ui-content" : ""
                                }
                            }), k.addErrorMessages(h.lang.Errors)), m ? A(h) ? (h.request("page:create", {
                                view: m,
                                title: e,
                                name: y,
                                uiOptions: {
                                    dialog: "mobile" !== h.request("ui:getMode"),
                                    theme: h.config.swatch,
                                    overlayTheme: h.config.swatch
                                }
                            }), h.request("page:show", {name: y}), h.request("page:destroy",
                                {name: C})) : h.request("dialog", {
                                name: k.get("type") + "Success",
                                title: e,
                                buttons: ["okClose"],
                                minWidth: "400px",
                                view: m
                            }) : h.request("dialog:info", {
                                title: e,
                                msg: k.get("msg")
                            }), void h.request("folder:refreshFiles");
                            k.nextError();
                            k.addErrorMessages(h.lang.Errors);
                            l(k, h, e).content.show(new a({
                                finder: h, model: k, events: {
                                    "click @ui.skip": function () {
                                        this.model.hasFileExistErrors() && !this.ui.processAll.is(":checked") ? (this.model.nextError(), this.render()) : g()
                                    }, "click @ui.overwrite": function () {
                                        p(f.finder, this.model.getFilesForPost(this.ui.processAll.is(":checked")),
                                            this.model, "overwrite")
                                    }, "click @ui.rename": function () {
                                        p(f.finder, this.model.getFilesForPost(this.ui.processAll.is(":checked")), this.model, "autorename")
                                    }, "click @ui.cancel": g
                                }, className: function () {
                                    return "mobile" == this.finder.request("ui:getMode") ? "ui-content" : ""
                                }
                            }))
                        }
                    }

                    function v(a) {
                        var b = a.data.response;
                        if ((300 === b.error.number || 301 === b.error.number) && a.cancel(), 116 === b.error.number) {
                            a.cancel();
                            a.finder.request("loader:hide");
                            a.finder.request("dialog:info", {msg: a.finder.lang.ErrorMsg.MissingFolder});
                            var b = a.data.context.moveCopyData.get("currentFolder"), c = b.get("parent");
                            c.get("children").remove(b);
                            a.finder.request("folder:getActive") === b && a.finder.request("folder:openPath", {
                                path: c.getPath({full: !0}),
                                expand: !0
                            })
                        }
                    }

                    function l(a, b, c) {
                        a = a.get("view");
                        a || (a = new e({finder: b}), c = b.lang[c + "Operation"], A(b) ? (b.request("page:create", {
                            view: a,
                            title: c,
                            name: C,
                            uiOptions: {
                                dialog: "mobile" !== b.request("ui:getMode"),
                                theme: b.config.swatch,
                                overlayTheme: b.config.swatch
                            }
                        }), b.request("page:show", {name: C}), b.request("page:destroy",
                            {name: F})) : b.request("dialog", {name: C, title: c, buttons: ["cancel"], view: a}));
                        return a
                    }

                    function r(a, b, c) {
                        a.data.toolbar.push({
                            name: b + "Files",
                            type: "button",
                            priority: 40,
                            icon: "ckf-file-" + ("Copy" === b ? "copy" : "move"),
                            label: c.finder.lang[b + "ToolbarButton"],
                            action: function () {
                                var d = new g({
                                    finder: c.finder,
                                    collection: c.finder.request("resources:get"),
                                    viewMetadataPrefix: "moveCopy"
                                });
                                d.on("childview:folder:expand", function (a, b) {
                                    c.finder.fire("folder:expand", {view: b.view, folder: b.view.model}, c.finder)
                                });
                                d.on("childview:folder:click",
                                    function (a, d) {
                                        c.finder.request("files:" + b.toLowerCase(), {
                                            files: c.finder.request("files:getSelected"),
                                            toFolder: d.view.model
                                        })
                                    });
                                d.on("childview:folder:keydown", function (a, d) {
                                    d.evt.keyCode !== m.enter && d.evt.keyCode !== m.space || (d.evt.preventDefault(), d.evt.stopPropagation(), c.finder.request("files:" + b.toLowerCase(), {
                                        files: c.finder.request("files:getSelected"),
                                        toFolder: d.view.model
                                    }))
                                });
                                var e = a.data.file ? a.finder.lang[b + "OneFileDialogTitle"] : a.finder.lang[b + "ManyFilesDialogTitle"].replace("{count}", a.data.files.length);
                                if (A(c.finder)) {
                                    c.finder.on("page:show:" + F, function () {
                                        d.refreshUI()
                                    });
                                    var h = new f({
                                        finder: c.finder, events: {
                                            "click @ui.close": function () {
                                                c.finder.request("page:destroy", {name: F})
                                            }
                                        }
                                    });
                                    h.on("show", function () {
                                        this.content.show(d)
                                    });
                                    c.finder.request("page:create", {
                                        view: h,
                                        title: e,
                                        name: F,
                                        className: "ckf-move-copy-dialog",
                                        uiOptions: {theme: c.finder.config.swatch, overlayTheme: c.finder.config.swatch}
                                    });
                                    c.finder.request("page:show", {name: F})
                                } else c.finder.request("dialog", {
                                    name: F,
                                    title: e,
                                    buttons: ["cancel"],
                                    contentClassName: "ckf-move-copy-dialog",
                                    restrictHeight: !0,
                                    focusItem: ".ckf-tree",
                                    uiOptions: {
                                        positionTo: '[data-ckf-toolbar="Main"]', create: function () {
                                            setTimeout(function () {
                                                d.refreshUI()
                                            }, 0)
                                        }, afterclose: function () {
                                            h && h.destroy();
                                            d && d.destroy()
                                        }
                                    },
                                    view: d
                                })
                            }
                        })
                    }

                    function P(a) {
                        a.data.evt.ckfFilesSelection && this.finder.request("contextMenu", {
                            name: "folderDrop",
                            evt: a.data.evt,
                            positionToEl: a.data.view.ui.label,
                            context: {folder: a.data.folder}
                        })
                    }

                    function D(a) {
                        var b = a.data.context.folder, c = b.get("acl");
                        a.data.groups.addGroup("drop", [{
                            name: "MoveFiles", label: a.finder.lang.MoveDragDrop,
                            isActive: c.fileUpload, icon: "ckf-file-move", action: function () {
                                a.finder.request("files:move", {
                                    files: a.finder.request("files:getSelected"),
                                    toFolder: b
                                })
                            }
                        }, {
                            name: "CopyFiles",
                            label: a.finder.lang.CopyDragDrop,
                            isActive: c.fileUpload,
                            icon: "ckf-file-copy",
                            action: function () {
                                a.finder.request("files:copy", {
                                    files: a.finder.request("files:getSelected"),
                                    toFolder: b
                                })
                            }
                        }])
                    }

                    function A(a) {
                        return "mobile" === a.request("ui:getMode")
                    }

                    var C = "MoveCopyDialogPage", y = "MoveCopySuccessDialogPage", F = "ChooseFolder";
                    return function (a) {
                        function b(d) {
                            a.setHandler("files:" +
                                d.toLowerCase(), function (b) {
                                n(b, d, a)
                            });
                            a.on("command:after:" + d + "Files", function (a) {
                                q(a, d, c)
                            });
                            a.on("command:error:" + d + "Files", v);
                            a.on("toolbar:reset:Main:files", function (a) {
                                r(a, d, c)
                            });
                            a.on("toolbar:reset:Main:file", function (a) {
                                r(a, d, c)
                            })
                        }

                        var c = this;
                        c.finder = a;
                        a.on("folder:drop", P, c);
                        a.on("contextMenu:folderDrop", D);
                        b("Copy");
                        b("Move")
                    }
                });
            n.define("CKFinder/Modules/FocusManager/FocusManager", ["jquery"], function (k) {
                return function (h) {
                    var b = [];
                    h.setHandlers({
                        "focus:remember": function () {
                            b.push(r.activeElement)
                        },
                        "focus:restore": function () {
                            k(b.pop()).focus()
                        }
                    })
                }
            });
            n.define("CKFinder/Models/ResourceType", ["underscore", "backbone", "CKFinder/Models/Folder"], function (k, h, b) {
                return b.extend({
                    initialize: function () {
                        b.prototype.initialize.call(this);
                        var g = this.get("allowedExtensions");
                        g && "string" == typeof g && this.set("allowedExtensions", g.split(","), {silent: !0});
                        var d = this.get("allowedExtensions");
                        d && "string" == typeof d && this.set("allowedExtensions", g.split(","), {silent: !0})
                    }, isAllowedExtension: function (b) {
                        b = b.toLocaleLowerCase();
                        var d = this.get("allowedExtensions"), f = this.get("deniedExtensions"), d = d && !k.contains(d, b);
                        b = f && k.contains(f, b);
                        return !(d || b)
                    }
                })
            });
            n.define("text!CKFinder/Templates/Breadcrumbs/Breadcrumbs.dot", [], function () {
                return '<a class="ui-btn{{? it.current }} ui-btn-active{{?}}" data-ckf-path="{{! it.path }}" href="#" tabindex="-1">{{! it.label || it.name }}</a>\n'
            });
            n.define("CKFinder/Modules/Folders/Views/BreadcrumbView", ["jquery", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Breadcrumbs/Breadcrumbs.dot"],
                function (k, h, b) {
                    return h.extend({
                        name: "ToolbarFolder", tagName: "li", template: b, ui: {btn: ".ui-btn"}, events: {
                            click: function (b) {
                                b.preventDefault();
                                this.finder.request("folder:openPath", {path: this.model.get("path")})
                            }, dragenter: function (b) {
                                this.model.get("current") || "/" === this.model.get("path") || (b.stopPropagation(), b.preventDefault(), this.ui.btn.addClass("ui-btn-active"), this.trigger("folder:dragenter", {
                                    evt: b,
                                    view: this,
                                    model: this.model.get("folder")
                                }))
                            }, dragover: function (b) {
                                this.model.get("current") ||
                                "/" === this.model.get("path") || (b.stopPropagation(), b.preventDefault(), this.ui.btn.addClass("ui-btn-active"), this.trigger("folder:dragover", {
                                    evt: b,
                                    view: this,
                                    model: this.model.get("folder")
                                }))
                            }, dragleave: function (b) {
                                this.model.get("current") || "/" === this.model.get("path") || (b.stopPropagation(), this.ui.btn.removeClass("ui-btn-active"), this.trigger("folder:dragleave", {
                                    evt: b,
                                    view: this,
                                    model: this.model.get("folder")
                                }))
                            }, drop: function (b) {
                                if (!this.model.get("current") && "/" !== this.model.get("path")) {
                                    b.stopPropagation();
                                    this.ui.btn.removeClass("ui-btn-active");
                                    var d = this.model.get("folder");
                                    this.finder.fire("folder:drop", {evt: b, folder: d, view: this}, this.finder)
                                }
                            }, keydown: function (b) {
                                this.trigger("keydown", {evt: b, view: this, model: this.model})
                            }
                        }, focus: function () {
                            this.ui.btn.focus()
                        }
                    })
                });
            n.define("CKFinder/Modules/Folders/Views/BreadcrumbsView", ["jquery", "CKFinder/Modules/Folders/Views/BreadcrumbView", "CKFinder/Views/Base/CompositeView", "CKFinder/Util/KeyCode"], function (k, h, b, g) {
                return b.extend({
                    name: "ToolbarFolders",
                    className: "ckf-folders-breadcrumbs ui-body-inherit",
                    template: '<ul tabindex="20"></ul>',
                    childViewContainer: "ul",
                    attributes: {role: "navigation"},
                    childView: h,
                    ui: {container: "ul:first"},
                    events: {
                        touchstart: function (b) {
                            b.stopPropagation()
                        }, keydown: function (b) {
                            var f;
                            b.keyCode !== g.left && b.keyCode !== g.end || (f = this.children.last());
                            b.keyCode !== g.right && b.keyCode !== g.home || (f = this.children.first());
                            f && (b.stopPropagation(), b.preventDefault(), f.focus())
                        }
                    },
                    initialize: function () {
                        this.listenTo(this.collection, "reset",
                            function () {
                                this.$el[this.collection.length ? "show" : "hide"]()
                            });
                        this.on("childview:keydown", function (b, f) {
                                var e = f.evt;
                                if (e.keyCode === g.left || e.keyCode === g.right) {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    var a = this.collection.indexOf(f.model), a = e.keyCode === g.left ? 0 >= a ? 0 : a - 1 : a >= this.collection.length - 1 ? a : a + 1;
                                    this.children.findByModel(this.collection.at(a)).focus()
                                }
                                e.keyCode !== g.space && e.keyCode !== g.enter || (e.preventDefault(), e.stopPropagation(), this.finder.request("folder:openPath", {path: f.model.get("path")}))
                            },
                            this)
                    },
                    onRenderCollection: function () {
                        this.$childViewContainer.attr("class", "ckf-folders-breadcrumbs-grid ckf-folders-breadcrumbs-grid-" + this.collection.length);
                        var b = this.$childViewContainer.prop("scrollWidth") - this.$childViewContainer.width();
                        b && this.$childViewContainer.scrollLeft(b)
                    },
                    focus: function () {
                        this.ui.container.focus()
                    }
                })
            });
            n.define("CKFinder/Modules/Folders/Breadcrumbs", ["jquery", "backbone", "CKFinder/Modules/Folders/Views/BreadcrumbsView"], function (k, h, b) {
                function g(d, e) {
                    var a = new b({
                        finder: d,
                        collection: e
                    });
                    return d.on("page:show:Main", function () {
                        d.request("page:addRegion", {
                            page: "Main",
                            name: "breadcrumbs",
                            id: d._.uniqueId("ckf-"),
                            priority: 30
                        });
                        d.request("page:showInRegion", {view: a, page: "Main", region: "breadcrumbs"})
                    }), a
                }

                function d(b, d) {
                    b.on("folder:selected", function (a) {
                        var b = [];
                        a = a.data.folder;
                        for (b.unshift({
                            name: a.get("name"),
                            path: a.getPath({full: !0}),
                            label: a.get("label"),
                            folder: a,
                            current: !0
                        }); a.has("parent");)a = a.get("parent"), b.unshift({
                            folder: a, name: a.get("name"), path: a.getPath({full: !0}),
                            label: a.get("label")
                        });
                        b.unshift({name: "/", path: "/"});
                        d.reset(b)
                    });
                    b.on("resources:show", function () {
                        d.reset([])
                    })
                }

                return {
                    start: function (b) {
                        this.breadcrumbs = new h.Collection;
                        this.breadcrumbsView = g(b, this.breadcrumbs);
                        d(b, this.breadcrumbs)
                    }, focus: function () {
                        this.breadcrumbsView && this.breadcrumbsView.focus()
                    }
                }
            });
            n.define("CKFinder/Util/parseAcl", [], function () {
                return function (k) {
                    return {
                        folderView: 1 === (k & 1),
                        folderCreate: 2 === (k & 2),
                        folderRename: 4 === (k & 4),
                        folderDelete: 8 === (k & 8),
                        fileView: 16 === (k & 16),
                        fileUpload: 32 ===
                        (k & 32),
                        fileRename: 64 === (k & 64),
                        fileDelete: 128 === (k & 128),
                        imageResize: 256 === (k & 256),
                        imageResizeCustom: 512 === (k & 512)
                    }
                }
            });
            n.define("CKFinder/Modules/Folders/Folders", "underscore jquery CKFinder/Models/Folder CKFinder/Models/ResourceType CKFinder/Models/FoldersCollection CKFinder/Modules/Folders/Views/FoldersTreeView CKFinder/Modules/Folders/Breadcrumbs CKFinder/Util/parseAcl CKFinder/Util/KeyCode".split(" "), function (k, h, b, g, d, f, e, a, c) {
                function m(a) {
                    var b = a.finder, d = new f({finder: b, collection: a.resources});
                    a.view = d;
                    d.on("childview:folder:expand", function (a, c) {
                        b.fire("folder:expand", {view: c.view, folder: c.view.model}, b)
                    });
                    d.on("childview:folder:click", function (a, c) {
                        b.request("folder:select", {folder: c.view.model})
                    });
                    d.on("childview:folder:contextmenu", function (b, c) {
                        c.evt.preventDefault();
                        a.finder.request("contextMenu", {
                            name: "folder",
                            evt: c.evt,
                            positionToEl: c.view.ui.label,
                            context: {folder: c.view.model}
                        })
                    });
                    d.on("childview:folder:keydown", function (a, d) {
                        return d.evt.keyCode === c.enter || d.evt.keyCode === c.space ?
                            void b.request("folder:select", {folder: d.view.model}) : void b.fire("folder:keydown", {
                            evt: d.evt,
                            view: d.view,
                            folder: d.model,
                            source: "folderstree"
                        }, b)
                    });
                    d.on("childview:folder:drop", function (a, c) {
                        b.fire("folder:drop", {evt: c.evt, folder: c.model, view: c.view}, b)
                    });
                    b.on("app:loaded", function () {
                        function c() {
                            h('[data-ckf-page="Main"] .ui-panel-wrapper').css("ltr" === b.lang.dir ? {
                                "margin-right": "",
                                left: ""
                            } : {"margin-left": "", right: ""})
                        }

                        function d() {
                            h('[data-ckf-page="Main"] .ui-panel-wrapper').css("ltr" === b.lang.dir ?
                            {
                                "margin-right": b.config.primaryPanelWidth,
                                left: b.config.primaryPanelWidth
                            } : {"margin-left": b.config.primaryPanelWidth, right: b.config.primaryPanelWidth})
                        }

                        var e = !1, f = b.request("panel:create", {
                            name: "folders",
                            view: a.view,
                            position: "primary",
                            scrollContent: !0,
                            panelOptions: {
                                animate: !1,
                                positionFixed: !0,
                                dismissible: !1,
                                swipeClose: !1,
                                display: "push",
                                beforeopen: function () {
                                    d();
                                    e = !0
                                },
                                beforeclose: function () {
                                    c();
                                    e = !1
                                }
                            }
                        });
                        b.on("page:show:Main", function () {
                            f.$el.addClass("ckf-folders-panel");
                            b.config.primaryPanelWidth ||
                            f.$el.addClass("ckf-folders-panel-default")
                        });
                        b.config.primaryPanelWidth && (b.on("page:show:Main", function () {
                            "desktop" === b.request("ui:getMode") && d()
                        }), b.on("ui:resize", function (a) {
                            a.data.modeChanged && (a = b.request("ui:getMode"), "desktop" === a && d(), "mobile" === a && (e ? d() : c()))
                        }));
                        b.on("page:hide:Main", function () {
                            f.$el.removeClass("ckf-folders-panel")
                        })
                    })
                }

                function n(c, e, f, g) {
                    function h(b) {
                        if (!p) {
                            if (p = !0, b.error)return b = c.resources.findWhere({name: m.get("resourceType")}), b.get("children").reset(), void k.request("folder:select",
                                {folder: b});
                            m.set("acl", a(b.currentFolder.acl));
                            m === k.request("folder:getActive") && k.request("toolbar:reset", {
                                name: "Main",
                                event: "folder",
                                context: {folder: m}
                            })
                        }
                    }

                    var k = c.finder;
                    f = f.replace(/^\//, "").split("/").filter(function (a) {
                        return !!a.length
                    });
                    var l = e;
                    f.length && (e.set("isPending", !0), f.forEach(function (c) {
                        c = new b({
                            name: c,
                            resourceType: e.get("resourceType"),
                            hasChildren: !0,
                            acl: a(0),
                            isPending: !0,
                            children: new d,
                            parent: l
                        });
                        l.get("children").add(c);
                        l = c
                    }));
                    var m = l;
                    c.currentFolder && c.currentFolder.cid !==
                    m.cid && c.currentFolder.trigger("deselected");
                    c.currentFolder = m;
                    var p = !1;
                    k.request("command:send", {
                        name: "GetFolders",
                        folder: m,
                        context: {silentConnectorErrors: !0, parent: m}
                    }).done(h);
                    k.request("folder:getFiles", {folder: m, context: {silentConnectorErrors: !0}}).done(h);
                    m.trigger("selected");
                    k.fire("folder:selected", {folder: m}, k);
                    f.length || m.set("isPending", !1, {silent: !0});
                    g && m.trigger("ui:expand")
                }

                function p(b, c, d, e, f) {
                    function g() {
                        var a = d.replace(/^\//, "").split("/");
                        if (a.length) {
                            var h = c.get("children").findWhere({name: a[0].toString()});
                            h ? p(b, h, a.slice(1).join("/"), e, f) : f || (k.request("folder:select", {folder: c}), e && c.trigger("ui:expand"))
                        }
                    }

                    var h = d.length, k = b.finder, l = 0 < c.get("children").size();
                    c.get("isPending") || c.get("hasChildren") && h && !l ? k.request("command:send", {
                        name: "GetFolders",
                        folder: c,
                        context: {parent: c}
                    }, null, null, 30).done(function (b) {
                        b.error || (c.set("acl", a(b.currentFolder.acl)), g())
                    }) : g()
                }

                function w(a) {
                    var b = a.expand, c = a.expandStubs, d = (a.path || "").split(":");
                    if ("/" === a.path)return void this.finder.request("resources:show");
                    var e;
                    d[1] && (e = d[1]);
                    (a = this.resources.findWhere({name: d[0]})) || (a = this.resources.first());
                    c && n(this, a, e, b);
                    p(this, a, e.replace(/\/$/, ""), b, c)
                }

                function v(a) {
                    var b;
                    b = this.finder;
                    a = a.folder;
                    this.currentFolder && this.currentFolder.cid !== a.cid && this.currentFolder.trigger("deselected");
                    this.currentFolder = a;
                    b.request("command:send", {name: "GetFolders", folder: a, context: {parent: a}});
                    b.request("folder:getFiles", {folder: a});
                    a.trigger("selected");
                    this.finder.fire("folder:selected", {folder: a}, b)
                }

                function l(c) {
                    function d(b) {
                        return k.extend(b,
                            {path: "/", isRoot: !0, resourceType: b.name, acl: a(b.acl)}), new g(b)
                    }

                    var e = this;
                    if ((c = c.data.response) && !c.error) {
                        var f = c.resourceTypes, h = [];
                        k.isArray(f) && k.forOwn(f, function (a, b) {
                            h.push(d(f[b]))
                        });
                        e.finder.fire("createResources:before", {resources: h}, e.finder);
                        k.forEach(h, function (a) {
                            a instanceof b || (a = new b(a));
                            e.resources.add(a)
                        });
                        e.finder.fire("createResources:after", {resources: e.resources}, e.finder)
                    }
                }

                function r(c, e, f) {
                    var g, h, l, m = c.name.toString(), p = e.where({name: m});
                    c = {
                        name: m, resourceType: f.get("resourceType"),
                        hasChildren: c.hasChildren, acl: a(c.acl)
                    };
                    p.length ? (g = p[0], h = {}, l = !1, k.forEach(c, function (a, b) {
                        g.get(b) !== a && (h[b] = a, l = !0)
                    }), l && g.set(h)) : (g = new b(c), g.set({children: new d, parent: f}), e.add(g))
                }

                function P(a) {
                    a.data.folder.get("hasChildren") && 0 >= a.data.folder.get("children").size() && a.finder.request("command:send", {
                        name: "GetFolders",
                        folder: a.data.folder,
                        context: {parent: a.data.folder}
                    })
                }

                function D() {
                    function a(c, d) {
                        b.request("folder:openPath", {path: c, expand: d, expandStubs: !0})
                    }

                    var b, c, d, e, f;
                    if (b = this.finder,
                            B = B || function (a) {
                                    return function (b) {
                                        return a.charCodeAt(b)
                                    }
                                }(x(b.config.initConfigInfo.c)), e = b.config.rememberLastFolder, e && (b.request("settings:define", {
                            group: "folders",
                            label: "Folders",
                            settings: [{name: "lastFolder", type: "hidden"}]
                        }), b.on("folder:selected", function (a) {
                            b.request("settings:setValue", {
                                group: "folders",
                                name: "lastFolder",
                                value: a.data.folder.get("resourceType") + ":" + a.data.folder.getPath()
                            });
                            f = b.request("settings:getValue", {group: "folders", name: "lastFolder"})
                        })), function () {
                            var a = B(4) - B(0);
                            B(4) - B(0);
                            0 > a && (a = B(4) - B(0) + 33);
                            I = 4 > a
                        }(), e)c = b.request("settings:getValue", {
                        group: "folders",
                        name: "lastFolder"
                    }), b.config.displayFoldersPanel && "/" === c || (f = c);
                    c = b.config.resourceType;
                    (function () {
                        var a = {
                            s: function (a) {
                                for (var b = "", c = 0; c < a.length; ++c)b += String.fromCharCode(a.charCodeAt(c) ^ 255 & c);
                                return b
                            }, m: 92533269
                        };
                        G = !function (b, c, d, e, f, g) {
                            var h = q[a.s("D`vf")], k, l, m, p;
                            l = 33 + (d * g - e * f) % 33;
                            for (m = k = 0; 33 > m; m++)1 == l * m % 33 && (k = m);
                            l = b;
                            m = c;
                            return p = new h(1E4 * (218977407 ^ a.m)), (k * g % 33 * l + k * (33 + -1 * e) % 33 * m) % 33 * 12 + ((k *
                            (33 + -1 * f) - 33 * ("" + k * (33 + -1 * f) / 33 >>> 0)) * l + k * d % 33 * m) % 33 - 1 >= 12 * (p[a.s("gdvEqij^mhx")]() % 2E3) + p[a.s("gdvNkkro")]()
                        }(B(8), B(9), B(0), B(1), B(2), B(3))
                    })();
                    d = b.config.startupPath;
                    var g = c;
                    !g && this.resources.length && (g = this.resources.at(0).get("name"));
                    var h = e && f ? f.split(":")[0] : g, g = this.resources.where({lazyLoad: !0});
                    g.length && g.forEach(function (a) {
                        var c = a.get("name");
                        a.set("hasChildren", !0);
                        a.set("isPending", !0);
                        c !== h && b.request("command:send", {name: "GetFolders", folder: a, context: {parent: a}})
                    });
                    (function () {
                        var a =
                            B(5) - B(1);
                        0 > a && (a = B(5) - B(1) + 33);
                        L = 1 === a
                    })();
                    e && f ? a(f) : !c && d || 0 === d.search(c + ":") ? a(d, b.config.startupFolderExpanded) : (!c && this.resources.length && (c = this.resources.at(0).get("name")), a(c + ":/"));
                    (function () {
                        X = function (a, b, c) {
                            var d = 0, e = (q.opener ? q.opener : q.top).location.hostname;
                            if (0 === b && (e = e.replace(/^www./, "")), 1 === b && (e = 0 <= ("." + e.replace(/^www./, "")).search(new RegExp("\\." + c + "$")) && c), 2 === b)return !0;
                            for (b = 0; b < e.length; b++)d += e.charCodeAt(b);
                            return e === c && a === d + -33 * parseInt(d % 100 / 33, 10) - 100 * ("" +
                                d / 100 >>> 0)
                        }(B(7), function (a, b) {
                            var c = a - b;
                            return 0 > c && (c = a - b + 33), c
                        }(B(4), B(0)), b.config.initConfigInfo.s)
                    })()
                }

                function A(a) {
                    var b = a.finder;
                    !function () {
                        for (var a = b.config.initConfigInfo.c, c = B(10), d = 0, e = 0; 10 > e; e++)d += a.charCodeAt(e);
                        for (; 33 < d;)for (a = d.toString().split(""), e = d = 0; e < a.length; e++)d += parseInt(a[e]);
                        O = d === c
                    }();
                    var c = a.data.context.parent, e = a.data.response.folders;
                    c.set("isPending", !1);
                    (function (a) {
                        function b() {
                            return a.request("page:addRegion", {
                                page: "Main",
                                name: d,
                                id: a._.uniqueId("ckf-"),
                                priority: 10
                            })
                        }

                        function c() {
                            Y = !0;
                            a.request("page:showInRegion", {
                                view: new (a.Backbone.Marionette.ItemView.extend({
                                    attributes: {
                                        "data-role": "header",
                                        "data-theme": "a" === a.config.swatch ? "b" : "a"
                                    }, template: a._.template('<h2 style="margin:-1px auto 0;"><%= message %></h2>')
                                }))({model: new a.Backbone.Model({message: "This is a demo version of CKFinder 3"})}),
                                page: "Main",
                                region: d
                            })
                        }

                        if (O && I && X && L || !G) {
                            var d = a._.uniqueId("ckf-" + (10 * Math.random()).toFixed(0) + "-");
                            if (!Y) {
                                if (!b())return void a.once("page:create:Main", function () {
                                    b();
                                    c()
                                });
                                c()
                            }
                        }
                    })(b);
                    var f = c.get("children");
                    if (k.isEmpty(e))return c.set("hasChildren", !1), void(f && f.reset());
                    k.isArray(e) || (e = [e]);
                    f || (f = new d);
                    var g = [];
                    f.forEach(function (a) {
                        k.findWhere(e, {name: a.get("name")}) || g.push(a)
                    });
                    g.length && f.remove(g);
                    k.forEach(e, function (a) {
                        r(a, f, c)
                    })
                }

                function C(a) {
                    function b() {
                        return "desktop" === a.finder.request("ui:getMode")
                    }

                    a.data.toolbar.push({
                        name: "ShowFolders",
                        type: "button",
                        priority: 200,
                        icon: "ckf-menu",
                        label: "",
                        className: "ckf-folders-toggle",
                        hidden: b(),
                        onRedraw: function () {
                            this.set("hidden",
                                b())
                        },
                        action: function () {
                            a.finder.request("panel:toggle", {name: "folders"})
                        }
                    })
                }

                function y(a) {
                    function b() {
                        a.data.evt.preventDefault();
                        a.data.evt.stopPropagation()
                    }

                    var d = a.data.evt.keyCode, e = a.data.folder, f = {folder: e};
                    e.get("isRoot") || (d === c["delete"] && this.finder.util.isShortcut(a.data.evt, "") && (b(), this.finder.request("folder:delete", f)), d === c.f2 && this.finder.util.isShortcut(a.data.evt, "") && (b(), this.finder.request("folder:rename", f)));
                    a.data.evt.keyCode !== c.space && a.data.evt.keyCode !== c.enter || (a.data.evt.preventDefault(),
                        a.data.evt.stopPropagation(), this.finder.request("folder:openPath", {path: e.getPath({full: !0})}))
                }

                function F(a) {
                    if (116 === a.data.response.error.number) {
                        a.cancel();
                        a.finder.request("dialog:info", {msg: a.finder.lang.ErrorMsg.MissingFolder});
                        var b = a.data.context.folder, c = b.get("parent");
                        c.get("children").remove(b);
                        a.finder.request("folder:getActive") === b && a.finder.request("folder:openPath", {
                            path: c.getPath({full: !0}),
                            expand: !0
                        })
                    }
                }

                function x(a) {
                    var b, c;
                    c = "";
                    for (b = 0; b < a.length; b++)c += String.fromCharCode("123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(a[b]));
                    return x = void 0, c
                }

                var I, L, O, G, X, B, Y = !1;
                return function (a) {
                    var b = this;
                    b.finder = a;
                    b.resources = new d;
                    a.config.displayFoldersPanel ? (m(b), a.on("toolbar:reset:Main", C)) : e.start(a);
                    a.setHandlers({
                        "folder:openPath": {callback: w, context: b},
                        "folder:select": {callback: v, context: b},
                        "folder:getActive": function () {
                            return b.currentFolder
                        },
                        "resources:get": function () {
                            return b.resources.clone()
                        }
                    });
                    a.on("command:error:GetFolders", function (a) {
                        116 !== a.data.response.error.number || a.data.context.silentConnectorErrors || (a.cancel(),
                            a.finder.request("dialog:info", {msg: a.finder.lang.ErrorMsg.MissingFolder}), a.finder.request("folder:openPath", {
                            path: a.data.context.parent.get("parent").getPath({full: !0}),
                            expand: !0
                        }))
                    }, null, null, 5);
                    a.on("command:error:RenameFolder", F, null, null, 5);
                    a.on("command:error:DeleteFolder", F, null, null, 5);
                    a.on("command:error:CreateFolder", F, null, null, 5);
                    a.on("command:error:GetFiles", function (a) {
                        116 === a.data.response.error.number && a.cancel()
                    }, null, null, 5);
                    a.on("command:ok:Init", l, b);
                    a.on("folder:keydown", y, b);
                    a.on("folder:expand", P, b);
                    a.on("app:start", D, b);
                    a.on("command:after:GetFolders", A, b);
                    a.on("resources:show", function () {
                        b.currentFolder = null
                    });
                    a.on("folder:selected", function (b) {
                        a.request("toolbar:reset", {name: "Main", event: "folder", context: {folder: b.data.folder}})
                    });
                    a.on("ui:swiperight", function () {
                        "Main" === a.request("page:current") && "desktop" !== a.request("ui:getMode") && a.request("panel:open", {name: "folders"})
                    }, null, null, 20);
                    a.request("key:listen", {key: c.f8});
                    a.on("keydown:" + c.f8, function (c) {
                        a.util.isShortcut(c.data.evt,
                            "alt") && (a.config.displayFoldersPanel ? (c.finder.request("panel:open", {name: "folders"}), c.data.evt.preventDefault(), c.data.evt.stopPropagation(), b.view.$el.focus()) : e.focus())
                    })
                }
            });
            n.define("text!CKFinder/Templates/UploadFileForm/UploadFileForm.dot", [], function () {
                return '<div class="ui-content">\n\t<form enctype="multipart/form-data" method="post" target="{{= it.ids.iframe }}" action="{{= it.url }}">\n\t\t<label for="{{= it.ids.input }}">{{= it.lang.UploadSelectLbl }}</label>\n\t\t\t<div class="ui-responsive">\n\t\t\t\t<div class="ckf-upload-form-part">\n\t\t\t\t\t<input id="{{= it.ids.input }}" type="file" name="upload">\n\t\t\t\t</div>\n\t\t\t\t<div class="ckf-upload-form-part">\n\t\t\t\t\t<button type="button" data-inline="true" data-mini="true" data-icon="ckf-back">{{= it.lang.UploadBtnCancel }}</button>\n\t\t\t\t\t<button type="submit" data-inline="true" data-mini="true" data-icon="ckf-upload">{{= it.lang.UploadSend }}</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t</form>\n\t<iframe id="{{= it.ids.iframe }}" name="{{= it.ids.iframe }}" style="display:none" tabIndex="-1" allowTransparency="true" {{? it.isCustomDomain }} src="javascript:void((function(){document.open();document.domain=\'{{= it.domain }}\';document.destroy();})())" {{?}}></iframe>\n</div>\n'
            });
            n.define("CKFinder/Modules/FormUpload/Views/UploadFileFormView", ["underscore", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/UploadFileForm/UploadFileForm.dot"], function (k, h, b) {
                return h.extend({
                    name: "UploadFileForm",
                    template: b,
                    className: "ckf-upload-form",
                    ui: {
                        cancel: 'button[type="button"]',
                        input: 'input[type="file"]',
                        submit: 'button[type="submit"]',
                        form: "form"
                    },
                    events: {
                        "click @ui.cancel": function () {
                            this.destroy()
                        }, submit: function () {
                            this.trigger("submit")
                        }, click: function (b) {
                            b.stopPropagation()
                        }
                    },
                    templateHelpers: function () {
                        var b = this.finder.request("folder:getActive");
                        return {
                            ids: {iframe: k.uniqueId("ckf-"), cid: this.cid, input: k.uniqueId("ckf-")},
                            domain: "",
                            isCustomDomain: !1,
                            url: this.finder.request("command:url", {
                                command: "FileUpload",
                                folder: b,
                                params: {asPlainText: !0}
                            })
                        }
                    },
                    onShow: function () {
                        var b = this;
                        -1 < navigator.userAgent.toLowerCase().indexOf("trident/") || this.finder.config.test || this.ui.input.trigger("click");
                        var d = this.$el.find("iframe");
                        d.load(function () {
                            var f = d.contents().find("body").text();
                            if (f.length) {
                                var e;
                                try {
                                    e = JSON.parse(f)
                                } catch (a) {
                                    e = {error: {number: 109, message: f}}
                                }
                                b.trigger("upload:response", e)
                            }
                        })
                    }
                })
            });
            n.define("CKFinder/Modules/FormUpload/FormUpload", ["underscore", "CKFinder/Modules/FormUpload/Views/UploadFileFormView"], function (k, h) {
                return function (b) {
                    var g;
                    b.hasHandler("upload") || (b.on("page:create:Main", function () {
                        b.request("page:addRegion", {
                            page: "Main",
                            name: "upload",
                            id: k.uniqueId("ckf-"),
                            priority: 20
                        })
                    }), b.setHandler("upload", function () {
                        g = new h({finder: b});
                        g.on("submit", function () {
                            b.request("loader:show",
                                {text: b.lang.UploadProgressLbl})
                        });
                        g.on("upload:response", function (d) {
                            var f = !!d.uploaded;
                            g && g.destroy();
                            g = null;
                            b.request("loader:hide");
                            b.request("dialog:info", {msg: d.error ? d.error.message : b.lang.FileUploaded});
                            f && (b.once("folder:getFiles:after", function () {
                                var e = b.request("files:getCurrent").where({name: d.fileName});
                                e.length && (b.request("files:select", {files: e}), e[e.length - 1].trigger("focus"))
                            }), b.request("folder:refreshFiles"))
                        });
                        b.request("page:showInRegion", {view: g, page: "Main", region: "upload"})
                    }),
                        b.on("folder:selected", function (b) {
                            g && !b.data.folder.get("acl").fileUpload && (g && g.destroy(), g = null)
                        }))
                }
            });
            n.define("CKFinder/Modules/Html5Upload/Queue", ["underscore", "backbone"], function (k, h) {
                function b(a, b) {
                    a.items.length ? (a.state.set("currentItem", a.state.get("currentItem") + 1), g(a.items.shift(), a, b)) : (a.state.set("currentItem", a.state.get("totalFiles")), a.state.set("isStarted", !1), a.state.trigger("stop"))
                }

                function g(a, c, e) {
                    var f = new XMLHttpRequest;
                    a.set("xhr", f);
                    f.upload && (f.upload.onprogress = function (b) {
                        var d =
                            b.position || b.loaded;
                        a.set("progress", Math.round(d / b.total * 100));
                        c.state.set("currentItemBytes", d)
                    });
                    f.onreadystatechange = function () {
                        if (4 === this.readyState) {
                            var f = c.state, g = a.get("file").size, h = {
                                totalFiles: f.get("totalFiles"),
                                totalBytes: f.get("totalBytes"),
                                processedFiles: f.get("processedFiles"),
                                processedBytes: f.get("processedBytes"),
                                errorFiles: f.get("errorFiles"),
                                errorBytes: f.get("errorBytes"),
                                uploadedFiles: f.get("uploadedFiles"),
                                uploadedBytes: f.get("uploadedBytes"),
                                currentItem: f.get("currentItem"),
                                currentItemBytes: 0
                            }, k = {}, p = !1;
                            if (this.responseType || this.responseText ? (h.processedFiles += 1, h.processedBytes += g) : (h.totalFiles = h.totalFiles ? h.totalFiles - 1 : 0, h.totalBytes = h.totalBytes ? h.totalBytes - g : 0, h.currentItem = h.currentItem ? h.currentItem - 1 : 0), this.responseText)try {
                                p = JSON.parse(this.responseText)
                            } catch (n) {
                                p = {uploaded: 0, error: {number: 109, message: c.finder.lang.UploadUnknError}}
                            }
                            p && (p.uploaded && (k.uploaded = !0, h.uploadedFiles += 1, h.uploadedBytes += g, h.lastUploaded = p.fileName), p.error && (k.message = p.error.message,
                                p.uploaded ? k.isWarning = !0 : (k.isError = !0, h.errorFiles += 1, h.errorBytes += g)));
                            d(c, a);
                            f.set(h);
                            a.set(k);
                            a.trigger("done");
                            b(c, e)
                        }
                    };
                    var g = new FormData;
                    f.open("post", e, !0);
                    g.append("upload", a.get("file"));
                    f.send(g)
                }

                function d(a, b) {
                    var d = k.indexOf(a.items, b);
                    0 <= d && a.items.splice(d, 1)
                }

                var f = {
                    totalFiles: 0,
                    totalBytes: 0,
                    uploadedFiles: 0,
                    uploadedBytes: 0,
                    errorFiles: 0,
                    errorBytes: 0,
                    processedFiles: 0,
                    processedBytes: 0,
                    currentItemBytes: 0,
                    currentItem: 0,
                    isStarted: !1,
                    lastUploaded: void 0
                }, e = function (a) {
                    this.finder = a;
                    this.state =
                        new h.Model(f);
                    this.items = []
                };
                return e.prototype.getState = function () {
                    return this.state
                }, e.prototype.add = function (a) {
                    var b = this, d = 0, e = 0, f = 0;
                    k.forEach(a, function (a) {
                        var g = a.get("file").size;
                        d += g;
                        a.get("isError") ? (e += g, f += 1) : b.items.push(a)
                    });
                    this.state.get("isStarted") ? this.state.set({
                        totalFiles: this.state.get("totalFiles") + a.length,
                        totalBytes: this.state.get("totalBytes") + d,
                        errorFiles: this.state.get("errorFiles") + f,
                        errorBytes: this.state.get("errorBytes") + e,
                        processedFiles: this.state.get("processedFiles") +
                        f,
                        processedBytes: this.state.get("processedBytes") + e
                    }) : (this.state.set({
                        totalFiles: a.length,
                        totalBytes: d,
                        uploadedFiles: 0,
                        uploadedBytes: 0,
                        errorFiles: f,
                        errorBytes: e,
                        processedFiles: f,
                        processedBytes: e,
                        currentItem: 0
                    }), this.start())
                }, e.prototype.start = function () {
                    this.state.set("isStarted", !0);
                    var a = this.finder.request("command:url", {
                        command: "FileUpload",
                        folder: this.finder.request("folder:getActive"),
                        params: {responseType: "json"}
                    });
                    b(this, a)
                }, e.prototype.cancelItem = function (a) {
                    var b = a.get("xhr");
                    if (b)return void b.abort();
                    d(this, a);
                    b = this.state;
                    a = a.get("file").size;
                    var e = b.get("totalFiles"), f = b.get("totalBytes");
                    b.set({totalFiles: e ? e - 1 : 0, totalBytes: f ? f - a : 0});
                    b.get("processedFiles") === b.get("totalFiles") && b.trigger("stop")
                }, e.prototype.cancel = function () {
                    var a = this.items;
                    this.items = [];
                    k.forEach(a, function (a) {
                        this.cancelItem(a)
                    }, this);
                    this.state.set(f)
                }, e
            });
            n.define("text!CKFinder/Templates/Html5Upload/UploadListItem.dot", [], function () {
                return '<a class="ckf-upload-item{{? it.uploaded && !it.isError}} ckf-upload-item-ok{{?}}{{? it.isError }} ckf-upload-item-error{{?}}">\n\t<h3>{{! it.file.name }}</h3>\n\t<div class="ckf-progress{{? it.uploaded && !it.isError }} ckf-progress-ok{{?}}{{? it.isError }} ckf-progress-error{{?}}">\n\t\t<div class="ckf-progress-bar"></div>\n\t</div>\n\t<p class="ckf-upload-message">{{= it.message }}</p>\n</a>\n<a class="ckf-upload-item ckf-upload-item-button{{? it.uploaded && !it.isError }} ckf-upload-item-ok{{?}}{{? it.isError }} ckf-upload-item-error{{?}}"></a>\n'
            });
            n.define("CKFinder/Modules/Html5Upload/Views/UploadListItem", ["underscore", "CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Html5Upload/UploadListItem.dot"], function (k, h, b) {
                return h.extend({
                    name: "UploadListItem",
                    tagName: "li",
                    attributes: {"data-icon": "ckf-cancel"},
                    template: b,
                    events: {
                        "click .ckf-upload-item": function (b) {
                            b.preventDefault();
                            this.trigger("upload-cancel")
                        }
                    },
                    ui: {
                        progress: ".ckf-progress-bar:first",
                        items: "a.ckf-upload-item",
                        msg: ".ckf-upload-message",
                        split: ".ckf-upload-item-button"
                    },
                    modelEvents: {
                        "change:progress": "updateProgress", "change:uploaded": function () {
                            this.updateProgress();
                            this.setStatus("ok");
                            this.setHideIcon()
                        }, "change:isError": function (b, d) {
                            this.updateProgress();
                            this.ui.msg.show().text(b.get("message"));
                            d && this.setStatus("error")
                        }, "change:isWarning": function () {
                            this.ui.msg.show().text(this.model.get("message"));
                            this.setHideIcon()
                        }
                    },
                    onRender: function () {
                        this.updateProgress(this.model, this.model.get("progress"));
                        this.setTitle();
                        (this.model.get("uploaded") || this.model.get("isError")) &&
                        this.setHideIcon()
                    },
                    updateProgress: function (b, d) {
                        this.isDestroyed || this.ui.progress.css({width: d + "%"})
                    },
                    setStatus: function (b) {
                        this.isDestroyed || (this.ui.items.addClass("ckf-upload-item-" + b), this.ui.progress.parent().addClass("ckf-progress-" + b))
                    },
                    setHideIcon: function () {
                        this.isDestroyed || (this.$el.attr("data-icon", "ckf-tick"), this.ui.split.addClass("ui-icon-ckf-tick"), this.setTitle())
                    },
                    setTitle: function () {
                        var b = this.model.get("uploaded") || this.model.get("isError") ? this.finder.lang.CloseBtn : this.finder.lang.CancelBtn;
                        this.isDestroyed || (this.ui.split.attr("data-ckf-title", b), this.updateSplitTitle())
                    },
                    updateSplitTitle: function () {
                        this.isDestroyed || this.ui.split.attr("title", this.ui.split.attr("data-ckf-title"))
                    }
                })
            });
            n.define("text!CKFinder/Templates/Html5Upload/UploadForm.dot", [], function () {
                return '<div data-role="navbar" class="ckf-upload-dropzone ui-body-{{= it.swatch }}" tabindex="20">\n\t<div class="ui-content">\n\t\t<div class="ckf-upload-dropzone-grid">\n\t\t\t<div class="ckf-upload-dropzone-grid-a">\n\t\t\t\t<p class="ckf-upload-status">{{= it.lang.UploadLabel.UploadSelect }}</p>\n\t\t\t\t<p class="ckf-upload-progress-text">\n\t\t\t\t\t<span class="ckf-upload-progress-text-files"></span> <span class="ckf-upload-progress-text-bytes"></span>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class="ckf-upload-dropzone-grid-b">\n\t\t\t\t<input type="button" tabindex="-1" data-icon="ckf-plus" data-ckf-button="add" value="{{= it.lang.UploadAddFiles }}">\n\t\t\t\t<input type="button" tabindex="-1" data-icon="ckf-cancel" data-ckf-button="cancel" value="{{= it.lang.CancelBtn }}">\n\t\t\t\t<input type="button" tabindex="-1" data-icon="ckf-details" data-ckf-button="details" value="{{= it.lang.UploadDetails }}">\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="ckf-progress">\n\t\t\t<div class="ckf-progress-bar"></div>\n\t\t</div>\n\t\t<div class="ckf-upload-input-wrap"><input class="ckf-upload-input" type="file" multiple="multiple"></div>\n\t</div>\n</div>\n'
            });
            n.define("CKFinder/Modules/Html5Upload/Views/UploadForm", "underscore jquery CKFinder/Util/KeyCode CKFinder/Views/Base/CompositeView CKFinder/Modules/Html5Upload/Views/UploadListItem text!CKFinder/Templates/Html5Upload/UploadForm.dot".split(" "), function (k, h, b, g, d, f) {
                function e(a) {
                    var b;
                    if (a.data) {
                        if (!a.data.modeChanged)return;
                        b = "desktop" === a.data.mode
                    } else b = "desktop" === a;
                    h([this.ui.cancelButton, this.ui.detailsButton, this.ui.addButton]).each(function () {
                        this.parent().toggleClass("ui-btn-icon-notext",
                            !b).toggleClass("ui-btn-icon-left", b)
                    })
                }

                return g.extend({
                    name: "UploadForm",
                    template: f,
                    ui: {
                        input: ".ckf-upload-input",
                        dropZone: ".ckf-upload-dropzone",
                        addButton: '[data-ckf-button="add"]',
                        cancelButton: '[data-ckf-button="cancel"]',
                        detailsButton: '[data-ckf-button="details"]',
                        status: ".ckf-upload-status",
                        progressText: ".ckf-upload-progress-text",
                        progressTextFiles: ".ckf-upload-progress-text-files",
                        progressTextBytes: ".ckf-upload-progress-text-bytes",
                        progressWrapper: ".ckf-progress:first",
                        progress: ".ckf-progress-bar:first"
                    },
                    events: {
                        "click @ui.input": "setStatusSelect", click: function (a) {
                            a.stopPropagation()
                        }, selectstart: function (a) {
                            a.preventDefault()
                        }, "keydown @ui.addButton": function (a) {
                            a.keyCode === b.left && (this.ui.addButton.focus(), a.stopPropagation());
                            a.keyCode === b.right && (a.stopPropagation(), this.ui.cancelButton.focus())
                        }, "keydown @ui.cancelButton": function (a) {
                            a.keyCode === b.left && (a.stopPropagation(), this.ui.addButton.focus());
                            a.keyCode === b.right && (a.stopPropagation(), this.isDetailsEnabled ? this.ui.detailsButton.focus() :
                                this.ui.cancelButton.focus())
                        }, "keydown @ui.detailsButton": function (a) {
                            a.keyCode === b.left && (a.stopPropagation(), this.ui.cancelButton.focus());
                            a.keyCode === b.right && (a.stopPropagation(), this.ui.detailsButton.focus())
                        }, "keydown @ui.dropZone": function (a) {
                            a.keyCode !== b.right && a.keyCode !== b.home || this.ui.addButton.focus();
                            (a.keyCode === b.left || a.keyCode === b.end) && (this.isDetailsEnabled ? this.ui.detailsButton.focus() : this.ui.cancelButton.focus())
                        }
                    },
                    templateHelpers: function () {
                        return {swatch: this.finder.config.swatch}
                    },
                    initialize: function () {
                        this.listenTo(this.model, "change", this.updateView);
                        this.finder.on("ui:resize", e, this)
                    },
                    onRender: function () {
                        this.isDetailsEnabled = !1;
                        this.$el.enhanceWithin();
                        e.call(this, this.finder.request("ui:getMode"));
                        this.disableDetailsButton()
                    },
                    updateView: function () {
                        this.ui.progressTextBytes[0].innerHTML = this.formatBytes(this.model.get("processedBytes") + this.model.get("currentItemBytes"));
                        this.ui.progressTextFiles[0].innerHTML = this.formatFiles(this.model.get("currentItem"));
                        this.setStatusProgress(100 *
                            (this.model.get("processedBytes") + this.model.get("currentItemBytes")) / this.model.get("totalBytes"));
                        k.isUndefined(this.model.changed.isStarted) || this.model.changed.isStarted || (this.model.get("errorFiles") ? this.setStatusError() : this.setStatusOk())
                    },
                    formatBytes: function (a) {
                        return this.finder.lang.UploadBytesCountProgress.replace("{bytesUploaded}", this.finder.lang.formatFileSize(a)).replace("{bytesTotal}", this.finder.lang.formatFileSize(this.model.get("totalBytes")))
                    },
                    formatFiles: function (a) {
                        return this.finder.lang.UploadFilesCountProgress.replace("{filesUploaded}",
                            a).replace("{filesTotal}", this.model.get("totalFiles"))
                    },
                    onDestroy: function () {
                        this.finder.removeListener("ui:resize", e)
                    },
                    setProgressbarValue: function (a) {
                        this.ui.progress.css({width: a + "%"});
                        this.ui.progressWrapper.toggleClass("ckf-progress-ok", 100 == a);
                        this.ui.progressWrapper.toggleClass("ckf-progress-error", !(100 != a || !this.model.get("errorFiles")))
                    },
                    showProgressText: function () {
                        this.ui.progressText.css("display", "")
                    },
                    hideProgressText: function () {
                        this.ui.progressText.css("display", "none")
                    },
                    setStatusText: function (a) {
                        this.ui.status.html(a)
                    },
                    setStatusSelect: function () {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadSelect);
                        this.setProgressbarValue(0);
                        this.hideProgressText()
                    },
                    setStatusProgress: function (a) {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadProgress);
                        this.setProgressbarValue(a);
                        this.showProgressText()
                    },
                    setStatusOk: function () {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadOk);
                        this.setProgressbarValue(100);
                        this.showProgressText()
                    },
                    setStatusError: function () {
                        this.setStatusText(this.finder.lang.UploadLabel.UploadError);
                        this.setProgressbarValue(100);
                        this.showProgressText()
                    },
                    showUploadSummary: function () {
                        this.ui.progressTextFiles[0].innerHTML = this.finder.lang.UploadSummary.replace("%1", this.formatFiles(this.model.get("uploadedFiles")));
                        this.ui.progressTextBytes[0].innerHTML = this.formatBytes(this.model.get("uploadedBytes"))
                    },
                    enableDetailsButton: function () {
                        this.ui.detailsButton.button("enable");
                        this.isDetailsEnabled = !0
                    },
                    disableDetailsButton: function () {
                        this.ui.detailsButton.button("disable");
                        this.isDetailsEnabled = !1
                    }
                })
            });
            n.define("text!CKFinder/Templates/Html5Upload/UploadListSummary.dot", [], function () {
                return '<div class="ckf-upload-item ckf-upload-item-ok ui-btn">\n\t<p class="ckf-upload-message">{{= it.message }}</p>\n</div>\n'
            });
            n.define("CKFinder/Modules/Html5Upload/Views/UploadListSummary", ["CKFinder/Views/Base/ItemView", "text!CKFinder/Templates/Html5Upload/UploadListSummary.dot"], function (k, h) {
                return k.extend({
                    name: "UploadListSummary",
                    tagName: "li",
                    attributes: {"data-icon": "false"},
                    className: "ckf-upload-summary",
                    template: h,
                    modelEvents: {"change:message": "render"}
                })
            });
            n.define("CKFinder/Modules/Html5Upload/Views/UploadList", ["CKFinder/Views/Base/CollectionView", "CKFinder/Modules/Html5Upload/Views/UploadListItem", "CKFinder/Modules/Html5Upload/Views/UploadListSummary"], function (k, h, b) {
                return k.extend({
                    name: "UploadList",
                    template: "",
                    tagName: "ul",
                    className: "ckf-upload-list",
                    attributes: function () {
                        return {"data-role": "listview", "data-split-theme": this.finder.config.swatch}
                    },
                    initialize: function () {
                        function b() {
                            setTimeout(function () {
                                d.$el.listview().listview("refresh");
                                d.updateChildrenSplitTitle()
                            }, 0)
                        }

                        this.on("attachBuffer", b, this);
                        this.on("childview:render", b, this);
                        var d = this
                    },
                    getChildView: function (g) {
                        return g.get("isSummary") ? b : h
                    },
                    updateChildrenSplitTitle: function () {
                        this.children.forEach(function (b) {
                            b.updateSplitTitle && b.updateSplitTitle()
                        })
                    }
                })
            });
            n.define("CKFinder/Modules/Html5Upload/Html5Upload", "underscore backbone CKFinder/Modules/Html5Upload/Queue CKFinder/Modules/Html5Upload/Views/UploadForm CKFinder/Modules/Html5Upload/Views/UploadList CKFinder/Models/File".split(" "),
                function (k, h, b, g, d, f) {
                    function e(a) {
                        var b, c;
                        c = "";
                        for (b = 0; b < a.length; b++)c += String.fromCharCode("123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(a[b]));
                        return e = void 0, c
                    }

                    function a(a, b, c, d) {
                        function e(a, b) {
                            a.set("isError", !0);
                            a.set("message", d.lang.Errors[b]);
                            a.set("progress", 100);
                            a.set("uploaded", !0)
                        }

                        var g = [], k = d.request("folder:getActive").getResourceType(), q = k.get("maxSize"), x = d.config.initConfigInfo.uploadCheckImages;
                        (d.util.asyncArrayTraverse(a, function (a) {
                            var m = new h.Model({
                                file: a, uploaded: !1, progress: 0,
                                isError: !1, isWarning: !1, message: ""
                            }), p = f.extensionFromFileName(a.name).toLowerCase();
                            (!f.isExtensionOfImage(p) || x) && a.size > q && e(m, l);
                            k.isAllowedExtension(p) || e(m, r);
                            m.on("change:uploaded", function (a) {
                                a.get("isWarning") || b.remove(a);
                                b.summary || (b.summary = new h.Model({isSummary: !0, message: ""}), b.add(b.summary));
                                b.summary.set("message", d.lang.UploadSummary.replace("%1", c.state.get("uploadedFiles")))
                            });
                            g.push(m)
                        }, null), m && w && n && function () {
                            var a = v(5) - v(1);
                            return 0 > a && (a = v(5) - v(1) + 33), 1 === a
                        }() && !p) || (c.state.get("isStarted") ||
                        (b.summary && (b.summary = null), b.reset()), b.add(g), c.add(g))
                    }

                    function c() {
                        var a = new XMLHttpRequest;
                        return !!q.FormData && !!a && !!a.upload
                    }

                    var m, n, p, w, v, l = 203, r = 105, x = h.Collection.extend({
                        comparator: function (a, b) {
                            return a.get("isSummary") ? -1 : b.get("isSummary") ? 1 : 0
                        }
                    });
                    return function (f) {
                        function h() {
                            r && r.cancel();
                            r = null;
                            z && z.destroy();
                            z = null;
                            J && J.destroy();
                            J = null;
                            I && I.destroy();
                            I = null;
                            l();
                            f.request("panel:destroy", {name: "html5upload"});
                            O = null
                        }

                        function l() {
                            L && clearTimeout(L);
                            L = null
                        }

                        var r, z, J, I, L, O;
                        c() && (f.on("page:create:Main",
                            function () {
                                f.request("page:addRegion", {
                                    page: "Main",
                                    name: "uploadFiles",
                                    id: k.uniqueId("ckf-"),
                                    priority: 20
                                })
                            }), f.on("view:ThumbnailsView", function (a) {
                            var b = a.data.view;
                            b.once("render", function () {
                                var a = b.$el;
                                a.on("dragover", function (a) {
                                    a.preventDefault();
                                    a.stopPropagation()
                                });
                                a.on("drop", function (a) {
                                    a.stopPropagation();
                                    a.preventDefault();
                                    f.request("upload", {files: a.originalEvent.dataTransfer.files})
                                })
                            })
                        }), f.on("folder:selected", function (a) {
                            a.data.folder.get("acl").fileUpload || h()
                        }), f.setHandler("upload",
                            function (c) {
                                l();
                                v = v || function (a) {
                                        return function (b) {
                                            return a.charCodeAt(b)
                                        }
                                    }(e(f.config.initConfigInfo.c));
                                var I = f.request("folder:getActive");
                                if (!I)return void f.request("dialog:info", {msg: f.lang.UploadNoFolder});
                                if (function () {
                                        for (var a = f.config.initConfigInfo.c, b = v(10), c = 0, d = 0; 10 > d; d++)c += a.charCodeAt(d);
                                        for (; 33 < c;)for (a = c.toString().split(""), d = c = 0; d < a.length; d++)c += parseInt(a[d]);
                                        n = c === b
                                    }(), !I.get("acl").fileUpload)return void f.request("dialog:info", {msg: f.lang.UploadNoPerms});
                                var B = !1, H = new x;
                                H.summary = null;
                                r = new b(f);
                                var K = r.getState();
                                H.on("reset", function () {
                                    z.disableDetailsButton();
                                    H.once("add", function () {
                                        z.enableDetailsButton()
                                    })
                                });
                                (function () {
                                    var a = {
                                        s: function (a) {
                                            for (var b = "", c = 0; c < a.length; ++c)b += String.fromCharCode(a.charCodeAt(c) ^ 255 & c);
                                            return b
                                        }, m: 92533269
                                    };
                                    p = !function (b, c, d, e, f, g) {
                                        var h = q[a.s("D`vf")], k, l, m, p;
                                        l = 33 + (d * g - e * f) % 33;
                                        for (m = k = 0; 33 > m; m++)1 == l * m % 33 && (k = m);
                                        l = b;
                                        m = c;
                                        return p = new h(1E4 * (218977407 ^ a.m)), (k * g % 33 * l + k * (33 + -1 * e) % 33 * m) % 33 * 12 + ((k * (33 + -1 * f) - 33 * ("" + k * (33 + -1 * f) / 33 >>>
                                        0)) * l + k * d % 33 * m) % 33 - 1 >= 12 * (p[a.s("gdvEqij^mhx")]() % 2E3) + p[a.s("gdvNkkro")]()
                                    }(v(8), v(9), v(0), v(1), v(2), v(3))
                                })();
                                K.on("stop", function () {
                                    f.once("command:after:GetFiles", function () {
                                        var a = f.request("files:getCurrent").where({name: K.get("lastUploaded")}).pop();
                                        a && a.trigger("focus")
                                    });
                                    z.showUploadSummary();
                                    f.request("folder:refreshFiles");
                                    var a = !k.isBoolean(f.config.autoCloseHTML5Upload) || f.config.autoCloseHTML5Upload;
                                    K.get("totalFiles") === K.get("uploadedFiles") && !B && a && (l(), L = setTimeout(h, 1E3 * parseFloat(f.config.autoCloseHTML5Upload ||
                                            0)))
                                });
                                K.on("change:isStarted", function () {
                                    K.get("isStarted") && l()
                                });
                                (function () {
                                    w = function (a, b, c) {
                                        var d = 0, e = (q.opener ? q.opener : q.top).location.hostname;
                                        if (0 === b && (e = e.replace(/^www./, "")), 1 === b && (e = 0 <= ("." + e.replace(/^www./, "")).search(new RegExp("\\." + c + "$")) && c), 2 === b)return !0;
                                        for (b = 0; b < e.length; b++)d += e.charCodeAt(b);
                                        return e === c && a === d + -33 * parseInt(d % 100 / 33, 10) - 100 * ("" + d / 100 >>> 0)
                                    }(v(7), function (a, b) {
                                        var c = a - b;
                                        return 0 > c && (c = a - b + 33), c
                                    }(v(4), v(0)), f.config.initConfigInfo.s)
                                })();
                                f.on("panel:open:html5upload",
                                    function () {
                                        l();
                                        B = !0
                                    });
                                f.on("panel:close:html5upload", function () {
                                    B = !1
                                });
                                (function () {
                                    var a = v(4) - v(0);
                                    v(4) - v(0);
                                    0 > a && (a = v(4) - v(0) + 33);
                                    m = 4 > a
                                })();
                                J = new d({collection: H, finder: f});
                                J.on("childview:upload-cancel", function (a) {
                                    a.model.get("uploaded") || a.model.get("isError") || r.cancelItem(a.model);
                                    J.removeChildView(a);
                                    J.children.length || (z.disableDetailsButton(), f.request("panel:close", {name: "html5upload"}))
                                });
                                J.on("render", function () {
                                    J.$el.trigger("updatelayout")
                                });
                                z = new g({
                                    finder: f, model: K, events: k.extend({},
                                        g.prototype.events, {
                                            "click @ui.destroyButton": h,
                                            "click @ui.cancelButton": h,
                                            "click @ui.addButton": function () {
                                                l();
                                                z.ui.input.trigger("click")
                                            },
                                            "change @ui.input": function (b) {
                                                l();
                                                a(b.dataTransfer && b.dataTransfer.files || b.target.files || [], H, r, f)
                                            },
                                            "dragover @ui.dropZone": function (a) {
                                                a.preventDefault();
                                                a.stopPropagation()
                                            },
                                            "drop @ui.dropZone": function (b) {
                                                b.stopPropagation();
                                                b.preventDefault();
                                                l();
                                                a(b.originalEvent.dataTransfer ? b.originalEvent.dataTransfer.files : [], H, r, f)
                                            },
                                            "click @ui.detailsButton": function () {
                                                O ||
                                                (O = f.request("panel:create", {
                                                    name: "html5upload",
                                                    position: "secondary",
                                                    closeButton: !0,
                                                    view: J
                                                }));
                                                f.request("panel:toggle", {name: "html5upload"});
                                                J.$el.listview().listview("refresh")
                                            }
                                        })
                                });
                                c && c.files || z.on("show", function () {
                                    f.config.test || z.ui.input.trigger("click")
                                });
                                f.request("page:showInRegion", {view: z, page: "Main", region: "uploadFiles"});
                                c && c.files && a(c.files, H, r, f)
                            }))
                    }
                });
            n.define("CKFinder/Modules/KeyListener/KeyListener", ["underscore", "jquery"], function (k, h) {
                return function (b) {
                    this.finder = b;
                    var g = {};
                    h("body").on("keydown", function (d) {
                        var f = d.keyCode;
                        k.has(g, f) && b.fire("keydown:" + f, {evt: d}, b)
                    }).on("keyup", function (d) {
                        var f = d.keyCode;
                        k.has(g, f) && b.fire("keyup:" + f, {evt: d}, b)
                    });
                    b.setHandler("key:listen", function (b) {
                        g[b.key] = !0
                    });
                    b.setHandler("key:listen:stop", function (b) {
                        delete g[b.key]
                    })
                }
            });
            n.define("CKFinder/Modules/Loader/Loader", ["underscore", "jquery"], function (k, h) {
                return function (b) {
                    function g() {
                        b.config.loaderOverlaySwatch && h("#ckf-loader-overlay").remove()
                    }

                    this.finder = b;
                    b.setHandlers({
                        "loader:show": function (d) {
                            g();
                            h.mobile.loading("show", {text: d.text, textVisible: !!d.text, theme: b.config.swatch});
                            (d = b.config.loaderOverlaySwatch) && h('<div id="ckf-loader-overlay" class="ui-popup-screen in"></div>').addClass("ui-overlay-" + (k.isBoolean(d) ? b.config.swatch : d)).appendTo("body")
                        }, "loader:hide": function () {
                            h.mobile.loading("hide");
                            g()
                        }
                    })
                }
            });
            n.define("CKFinder/Modules/Maximize/Maximize", ["underscore", "jquery", "backbone"], function (k, h, b) {
                function g(b) {
                    function f() {
                        v.popup = {
                            x: p.screenLeft || p.screenX,
                            y: p.screenTop || p.screenY,
                            width: p.outerWidth || p.document.body.scrollWidth,
                            height: p.outerHeight || p.document.body.scrollHeight
                        };
                        p.moveTo(0, 0);
                        p.resizeTo ? p.resizeTo(p.screen.availWidth, p.screen.availHeight) : (p.outerHeight = p.screen.availHeight, p.outerWidth = p.screen.availWidth)
                    }

                    function e() {
                        var a = v.popup;
                        p.resizeTo ? p.resizeTo(a.width, a.height) : (p.outerWidth = a.width, p.outerHeight = a.height);
                        p.moveTo(a.x, a.y);
                        delete v.popup
                    }

                    function a() {
                        h(n.document).css({overflow: "hidden", width: 0, height: 0});
                        v.frame = h(p.frameElement).css(["position",
                            "left", "top", "width", "height"]);
                        h(p.frameElement).css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            width: "100%",
                            height: "100%",
                            "z-index": 9001
                        });
                        n.scrollTo(0, 0)
                    }

                    function c() {
                        v.frame && h(p.frameElement).css(v.frame);
                        delete v.frame
                    }

                    var g, k, p = q, n = q.parent, v = {};
                    return b.util.isPopup() ? (k = e, g = f) : b.util.isModal() ? (k = function () {
                        n.CKFinder.modal("minimize")
                    }, g = function () {
                        n.CKFinder.modal("maximize")
                    }) : (k = c, g = a), {min: k, max: g}
                }

                return function (d) {
                    if (!d.util.isPopup() && !d.util.isModal() && !d.util.isWidget())return void d.setHandlers({
                        isMaximized: function () {
                            return !0
                        }
                    });
                    d.on("toolbar:reset:Main:folder", function (a) {
                        var c = new b.Model({
                            name: "Maximize",
                            type: "button",
                            alignment: "primary",
                            priority: 30,
                            icon: f ? "ckf-minimize" : "ckf-maximize",
                            label: f ? d.lang.Maximize.minimize : d.lang.Maximize.maximize,
                            action: function () {
                                c.set("focus", !0);
                                d.request(f ? "minimize" : "maximize");
                                c.set("label", f ? d.lang.Maximize.minimize : d.lang.Maximize.maximize);
                                c.set("icon", f ? "ckf-minimize" : "ckf-maximize")
                            }
                        });
                        a.data.toolbar.push(c)
                    });
                    var f = !1, e = g(d);
                    d.setHandlers({
                        maximize: function () {
                            e.max();
                            f = !0;
                            d.fire("maximized",
                                null, d)
                        }, minimize: function () {
                            e.min();
                            f = !1;
                            d.fire("minimized", null, d)
                        }, isMaximized: function () {
                            return f
                        }
                    })
                }
            });
            n.define("CKFinder/Views/Base/DynamicLayoutView", ["jquery", "CKFinder/Views/Base/LayoutView"], function (k, h) {
                return h.extend({
                    createRegion: function (b) {
                        var g = k("<div>").attr("id", b.id).attr("data-ckf-priority", b.priority);
                        b.className && g.addClass(b.className);
                        var d = !1;
                        this.ui.regions.find("[data-ckf-priority]").each(function (f, e) {
                            if (!d) {
                                var a = k(e), c = a.data("ckf-priority");
                                b.priority <= c && (a.before(g),
                                    d = !0)
                            }
                        });
                        d || this.ui.regions.append(g);
                        this.addRegion(b.name, "#" + b.id)
                    }
                })
            });
            n.define("text!CKFinder/Templates/Pages/PageLayout.dot", [], function () {
                return '<div class="ckf-page-regions ui-content" role="main">\n\t<div class="ckf-main-region" data-ckf-priority="50"></div>\n</div>\n'
            });
            n.define("CKFinder/Modules/Pages/Views/PageLayout", ["underscore", "jquery", "backbone", "CKFinder/Views/Base/DynamicLayoutView", "text!CKFinder/Templates/Pages/PageLayout.dot"], function (k, h, b, g, d) {
                function f(b) {
                    b.data.page ===
                    this.options.name && this.doAutoHeight()
                }

                return g.extend({
                    name: "PageLayout",
                    template: d,
                    className: "ckf-page",
                    attributes: {"data-role": "page"},
                    regions: {main: ".ckf-main-region"},
                    ui: {regions: ".ckf-page-regions"},
                    initialize: function () {
                        var b = this;
                        b.main.on("show", function (a) {
                            b.listenTo(a, "render", b.doAutoHeight);
                            b.doAutoHeight()
                        });
                        b.listenTo(b.regionManager, "add:region", function (a, c) {
                            c.on("show", function (a) {
                                a._isRendered && b.doAutoHeight();
                                b.listenTo(a, "render", b.doAutoHeight);
                                b.listenToOnce(a, "destroy", b.doAutoHeight)
                            })
                        });
                        b.finder.on("toolbar:create", f, b);
                        b.finder.on("toolbar:reset", f, b);
                        b.finder.on("page:show:" + b.getOption("name"), function () {
                            b.doAutoHeight()
                        });
                        b.finder.on("ui:resize", function () {
                            b.doAutoHeight()
                        })
                    },
                    onRender: function () {
                        var b = this;
                        this.$el.one("create", function () {
                            b.$el.removeAttr("tabindex")
                        })
                    },
                    onDestroy: function () {
                        this.finder.removeListener("toolbar:create", f);
                        this.finder.removeListener("toolbar:reset", f);
                        this.finder.removeListener("ui:resize", this.doAutoHeight)
                    },
                    setAutoHeightRegion: function (b) {
                        this.autoHeightRegion =
                            b
                    },
                    doAutoHeight: function () {
                        var b = this;
                        setTimeout(function () {
                            var a = b.regionManager.get(b.autoHeightRegion);
                            if (a && a.currentView) {
                                var c = b.calculateMinHeight();
                                k.forEach(b.regionManager.without(a), function (a) {
                                    a = a.$el.outerHeight();
                                    c -= a
                                });
                                a.$el.css({"min-height": c + "px"});
                                a.currentView.trigger("maximize", {height: c})
                            }
                        }, 10)
                    },
                    calculateMinHeight: function () {
                        var b = parseInt(getComputedStyle(this.el).getPropertyValue("padding-top")), a = parseInt(getComputedStyle(this.el).getPropertyValue("padding-bottom")), c = parseInt(getComputedStyle(this.el).getPropertyValue("border-top-width")),
                            d = parseInt(getComputedStyle(this.el).getPropertyValue("border-bottom-width"));
                        return q.innerHeight - b - a - c - d
                    }
                })
            });
            n.define("CKFinder/Modules/Pages/Pages", ["underscore", "jquery", "CKFinder/Modules/Pages/Views/PageLayout"], function (k, h, b) {
                function g(b) {
                    this.finder = b;
                    this.pages = {};
                    this.pageStack = [];
                    this.started = !1
                }

                return g.prototype = {
                    getHandlers: function () {
                        var b = this;
                        return h("body").on("pagecontainershow", function (f, e) {
                            var a = h(e.toPage[0]).data("ckfPage");
                            b.currentPage = a;
                            b.finder.fire("page:show:" + a, b.finder);
                            b.finder.fire("page:show", {page: a}, b.finder)
                        }), {
                            "page:current": {callback: this.pageCurrentHandler, context: this},
                            "page:create": {callback: this.pageCreateHandler, context: this},
                            "page:show": {callback: this.pageShowHandler, context: this},
                            "page:hide": {callback: this.pageHideHandler, context: this},
                            "page:destroy": {callback: this.pageDestroyHandler, context: this},
                            "page:addRegion": {callback: this.pageAddRegionHandler, context: this},
                            "page:showInRegion": {callback: this.pageShowInRegionHandler, context: this}
                        }
                    }, setFinder: function (b) {
                        this.finder =
                            b
                    }, pageCurrentHandler: function () {
                        return this.getCurrentPage()
                    }, pageDestroyHandler: function (b) {
                        function f() {
                            c && (c.destroy(), a.fire("page:destroy", {page: b.name}, a), a.fire("page:destroy:" + b.name, null, a), delete e.pages[b.name])
                        }

                        var e, a, c, g, k;
                        e = this;
                        a = this.finder;
                        c = this.getPage(b.name);
                        b.name === this.getCurrentPage() ? (h(":mobile-pagecontainer").one("pagecontainershow", f), k = this.popPrevPage(), g = this.getPage(k), g && this.showPage(g)) : f()
                    }, pageHideHandler: function (b) {
                        var f, e;
                        b.name === this.getCurrentPage() &&
                        (f = this.popPrevPage(), e = this.getPage(f), this.showPage(e))
                    }, pageCreateHandler: function (d) {
                        var f = k.extend({}, d.uiOptions), e = this, a = d.name;
                        if (!this.pages[a]) {
                            var c = new b({
                                finder: this.finder,
                                name: a,
                                attributes: k.extend({}, b.prototype.attributes, {"data-ckf-page": a}),
                                className: b.prototype.className + (d.className ? " " + d.className : "")
                            });
                            d.mainRegionAutoHeight && c.setAutoHeightRegion("main");
                            this.pages[a] = c;
                            c.render();
                            c.$el.attr("data-theme", this.finder.config.swatch);
                            c.$el.appendTo("body");
                            this.started || (f.create =
                                function () {
                                    h.mobile.initializePage();
                                    e.started = !0
                                });
                            c.$el.page(f);
                            c.main.show(d.view);
                            this.finder.fire("page:create:" + d.name, {}, this.finder)
                        }
                    }, pageShowHandler: function (b) {
                        var f = this.getPage(b.name);
                        if (f) {
                            var e = this.getCurrentPage();
                            e && e !== b.name && (this.pageStack.push(e), this.finder.fire("page:hide:" + e, null, this.finder));
                            this.showPage(f)
                        }
                    }, pageAddRegionHandler: function (b) {
                        var f = this.getPage(b.page);
                        return f ? (f.createRegion({
                            name: b.name,
                            id: b.id,
                            priority: b.priority ? b.priority : 50,
                            className: b.className
                        }),
                            !0) : !1
                    }, pageShowInRegionHandler: function (b) {
                        var f = this.getPage(b.page);
                        f[b.region].show(b.view);
                        f[b.region].$el.trigger("create")
                    }, showPage: function (b) {
                        h(":mobile-pagecontainer").pagecontainer("change", b.$el);
                        this.currentPage = b.attributes["data-ckf-page"];
                        b.$el.trigger("create").trigger("updatelayout")
                    }, getCurrentPage: function () {
                        return this.currentPage
                    }, getPage: function (b) {
                        return this.pages[b]
                    }, popPrevPage: function () {
                        for (; this.pageStack.length;) {
                            var b = this.pageStack.pop();
                            if (this.getPage(b))return b
                        }
                        return this.pageStack =
                            [], !1
                    }
                }, g
            });
            n.define("text!CKFinder/Templates/Panels/PanelLayout.dot", [], function () {
                return '{{? it.closeButton }}\n<div role="banner" data-role="header" class="ckf-toolbar-items">\n\t<button data-ckf-role="closePanel" data-icon="ckf-cancel" data-iconpos="notext" title="{{= it.lang.CloseBtn }}">{{= it.lang.CloseBtn }}</button>\n</div>\n{{?}}\n<div class="ckf-panel-contents"></div>\n'
            });
            n.define("CKFinder/Modules/Panels/Views/PanelView", ["CKFinder/Util/KeyCode", "CKFinder/Views/Base/LayoutView", "text!CKFinder/Templates/Panels/PanelLayout.dot"],
                function (k, h, b) {
                    return h.extend({
                        name: "PanelLayout",
                        template: b,
                        regions: {contents: ".ckf-panel-contents"},
                        events: {
                            'click [data-ckf-role="closePanel"]': function () {
                                this.hide()
                            }, panelclose: function () {
                                this.trigger("closed")
                            }, panelopen: function () {
                                this.trigger("opened")
                            }, keydown: function (b) {
                                b.keyCode === k.escape && (b.stopPropagation(), this.hide())
                            }
                        },
                        templateHelpers: function () {
                            return {closeButton: !!this.options.closeButton}
                        },
                        initialize: function (b) {
                            function d() {
                                var d = this.$el.find(".ui-panel-inner");
                                if (d.length) {
                                    var d =
                                        getComputedStyle(d[0]).getPropertyValue("padding-top"), a = 0;
                                    if (b.closeButton) {
                                        var c = this.$el.find('[data-role="header"]');
                                        c.length && (a = c.outerHeight())
                                    }
                                    this.contents.$el.css({
                                        height: this.$el.height() - parseInt(d) - a + "px",
                                        overflow: "auto"
                                    })
                                }
                            }

                            this.$el.attr("data-ckf-panel", b.name).attr("data-position", b.position).attr("data-theme", this.finder.config.swatch).addClass("ckf-panel-" + b.position);
                            var f = this;
                            b.overrideWidth && (this.$el.css({width: b.overrideWidth}), this.$el.on("panelbeforeopen", function () {
                                f.$el.css({width: b.overrideWidth})
                            }),
                            "overlay" === b.type && (this.$el.on("panelbeforeclose", function () {
                                f.$el.css("left" === b.position ? {
                                    left: 0,
                                    transform: "translate3d(-" + f.finder.config.secondaryPanelWidth + ", 0, 0)"
                                } : {
                                    right: 0,
                                    transform: "translate3d(" + f.finder.config.secondaryPanelWidth + ", 0, 0)"
                                })
                            }), this.$el.on("panelclose", function () {
                                f.$el.css("left" === b.position ? {left: "", transform: ""} : {
                                    right: "",
                                    transform: ""
                                })
                            })));
                            b.scrollContent && (this.contents.on("show", d, this), this.finder.on("toolbar:create", d, this), this.finder.on("toolbar:destroy", d,
                                this), this.finder.on("ui:resize", d, this), this.on("destroy", function () {
                                this.finder.removeListener("toolbar:create", d);
                                this.finder.removeListener("toolbar:destroy", d);
                                this.finder.removeListener("ui:resize", d)
                            }, this))
                        },
                        display: function () {
                            this.$el.panel("open")
                        },
                        toggle: function () {
                            this.$el.panel("toggle")
                        },
                        hide: function () {
                            this.$el.panel().panel("close")
                        }
                    })
                });
            n.define("CKFinder/Modules/Panels/Panels", ["jquery", "CKFinder/Views/Base/ItemView", "CKFinder/Views/Base/LayoutView", "CKFinder/Modules/Panels/Views/PanelView",
                "CKFinder/Util/KeyCode"], function (k, h, b, g, d) {
                function f() {
                    this.panels = {};
                    this.opened = null
                }

                return f.prototype = {
                    getHandlers: function () {
                        return {
                            "panel:create": {callback: this.panelCreateHandler, context: this},
                            "panel:open": {callback: this.panelOpenHandler, context: this},
                            "panel:close": {callback: this.panelCloseHandler, context: this},
                            "panel:toggle": {callback: this.panelToggleHandler, context: this},
                            "panel:destroy": {callback: this.panelDestroyHandler, context: this}
                        }
                    }, setFinder: function (b) {
                        this.finder = b;
                        b.request("key:listen",
                            {key: d.escape});
                        b.on("keyup:" + d.escape, function (a) {
                            a.data.evt.stopPropagation()
                        }, null, null, 30);
                        b.on("ui:swipeleft", function (a) {
                            this.onSwipe("left", a)
                        }, this, null, 10);
                        b.on("ui:swiperight", function (a) {
                            this.onSwipe("right", a)
                        }, this, null, 10)
                    }, panelCreateHandler: function (b) {
                        var a, c = this.finder, d = {
                            finder: c,
                            position: "primary" === b.position ? "ltr" === c.lang.dir ? "left" : "right" : "ltr" === c.lang.dir ? "right" : "left",
                            closeButton: b.closeButton,
                            name: b.name,
                            scrollContent: !!b.scrollContent,
                            overrideWidth: "primary" === b.position ?
                                c.config.primaryPanelWidth : c.config.secondaryPanelWidth,
                            type: b.panelOptions && b.panelOptions.display ? b.panelOptions.display : ""
                        };
                        b.scrollContent && (a = "ckf-panel-scrollable");
                        b.className && (a = (a ? a + " " : "") + b.className);
                        a && (d.className = a);
                        var f = new g(d);
                        return f.on("closed", function () {
                            c.fire("panel:close:" + b.name, null, c);
                            this.opened = null
                        }, this), f.on("opened", function () {
                            c.fire("panel:open:" + b.name, null, c);
                            this.opened = b.name
                        }, this), f.render(), f.$el.appendTo("body").panel(b.panelOptions || {}).trigger("create"),
                            f.contents.show(b.view), f.on("destroy", function () {
                            c.fire("panel:destroy:" + b.name, null, c);
                            delete f[b.name]
                        }), this.panels[b.name] = f, f
                    }, panelOpenHandler: function (b) {
                        (b = this.panels[b.name]) && b.display()
                    }, panelToggleHandler: function (b) {
                        this.panels[b.name] && this.panels[b.name].toggle()
                    }, panelCloseHandler: function (b) {
                        this.panels[b.name] && this.panels[b.name].hide()
                    }, panelDestroyHandler: function (b) {
                        this.panels[b.name] && (this.panels[b.name].hide(), this.panels[b.name].destroy(), delete this.panels[b.name])
                    },
                    onSwipe: function (b, a) {
                        var c = this.panels[this.opened];
                        c && c.getOption("position") === b && (a.cancel(), c.hide())
                    }
                }, f
            });
            n.define("text!CKFinder/Templates/Files/FileNameDialogTemplate.dot", [], function () {
                return '<form action="#">\n\t{{! it.dialogMessage }}\n\t<input tabindex="1" name="newFileName" value="{{! it.fileName }}">\n</form>\n<p class="error-message"></p>\n'
            });
            n.define("CKFinder/Modules/Files/Views/FileNameDialogView", ["underscore", "CKFinder/Views/Base/ItemView", "CKFinder/Models/File", "text!CKFinder/Templates/Files/FileNameDialogTemplate.dot"],
                function (k, h, b, g) {
                    return h.extend({
                        name: "FileNameDialogView",
                        template: g,
                        ui: {error: ".error-message", fileName: 'input[name="newFileName"]'},
                        events: {
                            "input @ui.fileName": function () {
                                var d = this.ui.fileName.val().toString();
                                if (!b.isValidName(d))return void this.model.set("error", this.finder.lang.ErrorMsg.FileInvChar);
                                this.model.unset("error");
                                var f = b.extensionFromFileName(this.model.get("originalFileName")).toLowerCase(), e = b.extensionFromFileName(d).toLowerCase();
                                if (f !== e) {
                                    if (!this.model.get("resourceType").isAllowedExtension(e))return void this.model.set("error",
                                        this.finder.lang.UploadExtIncorrect);
                                    this.model.set("extensionChanged", !0)
                                } else this.model.set("extensionChanged", !1);
                                this.model.set("fileName", d)
                            }, submit: function (b) {
                                this.trigger("submit:form");
                                b.preventDefault()
                            }
                        },
                        modelEvents: {
                            "change:error": function (b, f) {
                                f ? (this.ui.error.show(), this.ui.error.html(f)) : this.ui.error.hide()
                            }
                        }
                    })
                });
            n.define("CKFinder/Modules/RenameFile/RenameFile", ["backbone", "CKFinder/Models/File", "CKFinder/Util/KeyCode", "CKFinder/Modules/Files/Views/FileNameDialogView"], function (k,
                                                                                                                                                                                           h, b, g) {
                function d(a) {
                    var b = this, d = a.data.context.file, e = d.get("folder").get("acl");
                    a.data.groups.addGroup("edit", [{
                        name: "RenameFile",
                        label: b.finder.lang.Rename,
                        isActive: e.fileRename,
                        icon: "ckf-file-rename",
                        action: function () {
                            b.finder.request("file:rename", {file: d})
                        }
                    }])
                }

                function f(a) {
                    var b = this.finder, d = b.lang, e = a.file.get("folder"), e = new k.Model({
                            dialogMessage: b.lang.FileRename,
                            fileName: a.file.get("name"),
                            originalFileName: a.file.get("name"),
                            resourceType: e.getResourceType(),
                            extensionChanged: !1,
                            error: !1
                        }),
                        f = b.request("dialog", {
                            view: new g({finder: b, model: e}),
                            name: "RenameFile",
                            title: d.Rename,
                            context: {file: a.file}
                        });
                    e.on("change:error", function (a, b) {
                        b ? f.disableButton("ok") : f.enableButton("ok")
                    })
                }

                function e(a, b) {
                    var d = a.file, e = d.get("folder"), f = {fileName: d.get("name"), newFileName: a.newFileName};
                    b.once("command:after:RenameFile", function (a) {
                        a = a.data.response;
                        a.error || d.set("name", a.newName);
                        (a = b.request("files:getCurrent").where({name: a.newName}).pop()) && a.trigger("focus")
                    });
                    b.request("command:send", {
                        name: "RenameFile",
                        folder: e, params: f, type: "post"
                    })
                }

                return function (a) {
                    this.finder = a;
                    a.setHandler("file:rename", f, this);
                    a.on("contextMenu:file", d, this, null, 50);
                    a.on("file:keydown", function (c) {
                        c.data.evt.keyCode === b.f2 && a.request("file:rename", {file: c.data.file})
                    });
                    a.on("toolbar:reset:Main:file", function (a) {
                        a.data.file.get("folder").get("acl").fileRename && a.data.toolbar.push({
                            name: "RenameFile",
                            type: "button",
                            priority: 30,
                            icon: "ckf-file-rename",
                            label: a.finder.lang.Rename,
                            action: function () {
                                a.finder.request("file:rename",
                                    {file: a.finder.request("files:getSelected").toArray()[0]})
                            }
                        })
                    });
                    a.on("dialog:RenameFile:ok", function (b) {
                        var d = b.data.view.model;
                        if (!d.get("error")) {
                            var f = b.data.context.file, g = d.get("fileName"), h = f.get("name"), f = {
                                file: f,
                                newFileName: g
                            };
                            b.finder.request("dialog:destroy");
                            d.get("extensionChanged") ? a.request("dialog:confirm", {
                                name: "renameFileConfirm",
                                msg: a.lang.FileRenameExt,
                                context: f
                            }) : g !== h && e(f, a)
                        }
                    });
                    a.on("dialog:renameFileConfirm:ok", function (b) {
                        e(b.data.context, a)
                    })
                }
            });
            n.define("CKFinder/Modules/RenameFolder/RenameFolder",
                ["backbone", "CKFinder/Modules/Folders/Views/FolderNameDialogView", "CKFinder/Util/KeyCode"], function (k, h, b) {
                    return function (g) {
                        g.setHandler("folder:rename", function (b) {
                            var f;
                            if (f = b.folder, b = b.newFolderName)g.request("command:send", {
                                name: "RenameFolder",
                                type: "post",
                                params: {type: f.get("resourceType"), currentFolder: f.getPath(), newFolderName: b},
                                context: {folder: f, newFolderName: b}
                            }); else {
                                b = new k.Model({
                                    dialogMessage: g.lang.FolderRename,
                                    folderName: f.get("name"),
                                    error: !1
                                });
                                var e = g.request("dialog", {
                                    view: new h({
                                        finder: g,
                                        model: b
                                    }), name: "RenameFolder", title: g.lang.RenameDlgTitle, context: {folder: f}
                                });
                                b.on("change:error", function (a, b) {
                                    b ? e.disableButton("ok") : e.enableButton("ok")
                                })
                            }
                        });
                        g.on("dialog:RenameFolder:ok", function (b) {
                            var f = b.data.view.model;
                            f.get("error") || (f = f.get("folderName"), b.finder.request("dialog:destroy"), g.request("folder:rename", {
                                folder: b.data.context.folder,
                                newFolderName: f
                            }))
                        });
                        g.on("command:after:RenameFolder", function (b) {
                            var f;
                            b.data.response.error || (f = b.data.context.folder, f.set("name", b.data.context.newFolderName),
                                g.fire("folder:selected", {folder: f}, g), f.trigger("selected"))
                        });
                        g.on("contextMenu:folder", function (b) {
                            var f = b.finder, e = b.data.context.folder, a = e.get("isRoot"), c = e.get("acl");
                            b.data.groups.addGroup("edit", [{
                                name: "RenameFolder",
                                label: f.lang.Rename,
                                isActive: !a && c.folderRename,
                                icon: "ckf-folder-rename",
                                action: function () {
                                    f.request("folder:rename", {folder: e})
                                }
                            }])
                        });
                        g.on("toolbar:reset:Main:folder", function (b) {
                            var f = b.data.folder;
                            !f.get("isRoot") && f.get("acl").folderRename && b.data.toolbar.push({
                                name: "RenameFolder",
                                type: "button",
                                priority: 30,
                                label: b.finder.lang.Rename,
                                icon: "ckf-folder-rename",
                                action: function () {
                                    g.request("folder:rename", {folder: f})
                                }
                            })
                        });
                        g.on("folder:keydown", function (d) {
                            d.data.evt.keyCode === b.f2 && g.request("folder:rename", {folder: d.data.folder})
                        })
                    }
                });
            n.define("CKFinder/Modules/FilterFiles/FilterFiles", ["doT", "marionette", "CKFinder/Util/KeyCode"], function (k, h, b) {
                return function (g) {
                    g.on("toolbar:reset:Main:folder", function (d) {
                        var f = "";
                        d.data.toolbar.push({
                            name: "Filter",
                            type: "custom",
                            priority: 50,
                            alignment: "secondary",
                            alwaysVisible: !0,
                            view: h.ItemView.extend({
                                className: "ckf-files-filter",
                                template: k.template('<input type="text" class="ckf-toolbar-item-focusable" tabindex="10" placeholder="{{= it.placeholder }}" data-prevent-focus-zoom="true">'),
                                events: {
                                    "input input": function () {
                                        var b = this.$el.find("input").val();
                                        f !== b && (g.request("files:filter", {text: b}), f = b)
                                    }, "keydown input": function (d) {
                                        d.keyCode !== b.tab && d.stopPropagation()
                                    }
                                }
                            }),
                            placeholder: g.lang.Filter.filterPlaceholder
                        })
                    })
                }
            });
            n.define("CKFinder/Modules/Settings/Views/SettingView",
                ["underscore", "CKFinder/Views/Base/ItemView"], function (k, h) {
                    return h.extend({
                        initialize: function () {
                            this.model.set("id", k.uniqueId("ckf-"))
                        }
                    })
                });
            n.define("text!CKFinder/Templates/Settings/SettingsGroup.dot", [], function () {
                return '<legend>{{= it.label }}</legend>\n<div class="items"></div>\n'
            });
            n.define("text!CKFinder/Templates/Settings/Radio.dot", [], function () {
                return '{{= it.label }}\n{{ it._.each(it.attributes.options, function(optionLabel, optionValue){ }}\n<input name="{{= it.name }}" id="{{= it.name }}{{= optionValue }}"\n\t   value="{{= optionValue }}" {{ if( it.value == optionValue) { }}checked="checked"{{ } }}\n\t   data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}"\n\t   type="radio">\n<label for="{{= it.name }}{{= optionValue }}">{{= optionLabel }}</label>\n{{ }); }}\n'
            });
            n.define("text!CKFinder/Templates/Settings/Select.dot", [], function () {
                return '{{= it.label }}\n<select type="text" name="{{= it.name }}" value="{{= it.value }}">\n\t{{ it._.each(it.attributes.options, function(name, key){ }}\n\t<option value="{{= key }}">{{= name }}</option>\n\t{{ }); }}\n</select>\n'
            });
            n.define("text!CKFinder/Templates/Settings/Text.dot", [], function () {
                return '{{= it.label }}<input type="text" name="{{= it.name }}" value="{{= it.value }}">\n'
            });
            n.define("text!CKFinder/Templates/Settings/Range.dot",
                [], function () {
                    return '{{= it.label }}\n<input type="range" name="{{= it.name }}" id="{{= it.name }}" min="{{= it.attributes.min }}"\n\t   max="{{= it.attributes.max }}" step="{{= it.attributes.step }}" value="{{= it.value }}">\n'
                });
            n.define("text!CKFinder/Templates/Settings/Checkbox.dot", [], function () {
                return '<label for="{{= it.id }}"><input id="{{= it.id }}" type="checkbox" name="{{= it.name }}"\n    data-iconpos="{{? it.lang.dir == \'ltr\'}}left{{??}}right{{?}}" {{? it.value }}checked="checked"{{?}}>{{= it.label }}</label>\n'
            });
            n.define("CKFinder/Modules/Settings/Views/SettingsGroupView", "underscore jquery marionette CKFinder/Views/Base/CompositeView CKFinder/Modules/Settings/Views/SettingView text!CKFinder/Templates/Settings/SettingsGroup.dot text!CKFinder/Templates/Settings/Radio.dot text!CKFinder/Templates/Settings/Select.dot text!CKFinder/Templates/Settings/Text.dot text!CKFinder/Templates/Settings/Range.dot text!CKFinder/Templates/Settings/Checkbox.dot".split(" "), function (k, h, b, g, d, f, e, a, c, m, n) {
                return g.extend({
                    name: "SettingsGroupView",
                    attributes: {"data-role": "controlgroup"},
                    tagName: "div",
                    template: f,
                    childViewContainer: ".items",
                    className: "ckf-settings-group",
                    collectionEvents: {
                        "change:isEnabled": function (a, b) {
                            var c = this.children.findByModelCid(a.cid);
                            b ? c.$el.removeClass("ui-state-disabled") : c.$el.addClass("ui-state-disabled")
                        }
                    },
                    initialize: function (a) {
                        this.collection = a.model.get("settings")
                    },
                    addChild: function (a) {
                        "hidden" !== a.get("type") && b.CollectionView.prototype.addChild.apply(this, arguments)
                    },
                    getChildView: function (b) {
                        var f = {
                            finder: this.finder,
                            className: b.get("isEnabled") ? "" : "ui-state-disabled"
                        }, f = {
                            checkbox: d.extend(k.extend({}, f, {
                                name: "Setting",
                                template: n,
                                ui: {checkbox: "input"},
                                events: {
                                    "change input": function () {
                                        this._isExt = !0;
                                        this.model.set("value", !!this.ui.checkbox.is(":checked"));
                                        this._isExt = !1
                                    }
                                },
                                modelEvents: {
                                    "change:value": function (a, b) {
                                        this._isExt || this.ui.checkbox.prop("checked", b).checkboxradio("refresh")
                                    }
                                },
                                focus: function () {
                                    this.ui.checkbox.focus()
                                }
                            })),
                            range: d.extend(k.extend({}, f, {
                                tagName: "label", name: "Setting", template: m, events: {
                                    "change input": function (a) {
                                        this._isExt = !0;
                                        this.model.set("value", parseFloat(h(a.currentTarget).val()));
                                        this._isExt = !1
                                    }
                                }, modelEvents: {
                                    "change:value": function (a, b) {
                                        this._isExt || this.$el.find("input").val(b).slider("refresh")
                                    }
                                }, focus: function () {
                                    this.$el.find("input").first().focus()
                                }
                            })),
                            text: d.extend(k.extend({}, f, {
                                tagName: "label",
                                name: "Setting",
                                template: c,
                                events: {
                                    "change input": function (a) {
                                        this.model.set("value", h(a.currentTarget).val())
                                    }
                                },
                                focus: function () {
                                    this.$el.find("input").first().focus()
                                }
                            })),
                            select: d.extend(k.extend({}, f, {
                                tagName: "label",
                                name: "Setting",
                                template: a,
                                templateHelpers: {_: k},
                                ui: {select: "select"},
                                events: {
                                    "change select": function () {
                                        this.model.set("value", h(this.ui.select).val());
                                        var a = this;
                                        setTimeout(function () {
                                            a.focus()
                                        }, 10)
                                    }
                                },
                                focus: function () {
                                    this.$el.find("select").first().focus()
                                }
                            })),
                            radio: d.extend(k.extend({}, f, {
                                name: "Setting",
                                template: e,
                                templateHelpers: {_: k},
                                events: {
                                    "change input": function (a) {
                                        this.model.set("value", h(a.currentTarget).val())
                                    }
                                },
                                focus: function () {
                                    this.$el.find('input[value="' + this.model.get("value") + '"]').focus()
                                }
                            }))
                        };
                        b = b.get("type");
                        return f[b] || (b = "text"), f[b]
                    },
                    focus: function () {
                        var a = this.children.findByModel(this.collection.filter(function (a) {
                            return a.get("isEnabled") && "hidden" !== a.get("type")
                        }).shift());
                        a && a.focus()
                    }
                })
            });
            n.define("CKFinder/Modules/Settings/Views/SettingsView", ["CKFinder/Views/Base/CollectionView", "CKFinder/Modules/Settings/Views/SettingsGroupView"], function (k, h) {
                return k.extend({
                    name: "SettingsView", childView: h, collectionEvents: {
                        focus: function () {
                            var b = this.children.findByModel(this.collection.first());
                            b && b.focus()
                        }
                    }, onShow: function () {
                        this.$el.parent().trigger("create")
                    }, onRender: function () {
                        this.$el.enhanceWithin()
                    }
                })
            });
            n.define("CKFinder/Modules/Settings/Models/Setting", ["backbone"], function (k) {
                return k.Model.extend({defaults: {type: "text", value: "", label: ""}})
            });
            n.define("CKFinder/Modules/Settings/Models/SettingsGroup", ["backbone", "CKFinder/Modules/Settings/Models/Setting"], function (k, h) {
                return k.Model.extend({
                    defaults: {displayTitle: "", title: "", group: ""}, initialize: function () {
                        var b = this, g = new (k.Collection.extend({model: h}));
                        g.on("change", function () {
                            b.trigger("change")
                        });
                        this.set("settings", g)
                    }, getSettings: function () {
                        var b = {};
                        return this.get("settings").forEach(function (g) {
                            b[g.get("name")] = g.get("value")
                        }), b
                    }, forSave: function () {
                        return {group: this.get("group"), settings: this.getSettings()}
                    }
                })
            });
            n.define("CKFinder/Modules/Settings/Models/SettingsStorage", ["underscore", "backbone", "CKFinder/Modules/Settings/Models/SettingsGroup"], function (k, h, b) {
                return h.Collection.extend({
                    model: b, initialize: function () {
                        this.on("change", this.saveToStorage,
                            this);
                        this.on("add", this.saveToStorage, this);
                        this.on("remove", this.saveToStorage, this);
                        this.storageKey = "ckf.settings";
                        this.dataInStorage = {}
                    }, loadStorage: function () {
                        localStorage[this.storageKey] && (this.dataInStorage = JSON.parse(localStorage[this.storageKey]))
                    }, hasValueInStorage: function (b, d) {
                        return !k.isUndefined(this.dataInStorage[b]) && !k.isUndefined(this.dataInStorage[b].settings[d])
                    }, getValueFromStorage: function (b, d) {
                        return this.hasValueInStorage(b, d) ? JSON.parse(localStorage[this.storageKey])[b].settings[d] :
                            void 0
                    }, saveToStorage: function () {
                        var b = {};
                        this.forEach(function (d) {
                            b[d.get("group")] = d.forSave()
                        });
                        k.merge(this.dataInStorage, b);
                        try {
                            localStorage[this.storageKey] = JSON.stringify(this.dataInStorage)
                        } catch (d) {
                        }
                    }
                })
            });
            n.define("CKFinder/Modules/Settings/Models/FilteredSettings", ["backbone"], function (k) {
                return k.Collection.extend({
                    initialize: function (h, b) {
                        this._original = b.settings;
                        this.listenTo(this._original, "update", function () {
                            var b = this._original.filter(function (b) {
                                return !!b.get("settings").filter(function (b) {
                                    return "hidden" !==
                                        b.get("type")
                                }).length
                            });
                            this.reset(b)
                        })
                    }
                })
            });
            n.define("CKFinder/Modules/Settings/Settings", ["underscore", "CKFinder/Modules/Settings/Views/SettingsView", "CKFinder/Modules/Settings/Models/SettingsStorage", "CKFinder/Modules/Settings/Models/FilteredSettings"], function (k, h, b, g) {
                function d(a) {
                    var b, c;
                    c = "";
                    for (b = 0; b < a.length; b++)c += String.fromCharCode("123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(a[b]));
                    return d = void 0, c
                }

                var f, e, a, c, m, n, p = !1;
                return function (r) {
                    function v(a) {
                        return z.findWhere({group: a})
                    }

                    function l(a, b) {
                        var c = v(a);
                        return c ? c.get("settings").findWhere({name: b}) : !1
                    }

                    var z = new b, x = new g([], {settings: z});
                    this.finder = r;
                    r.config.id && (z.storageKey = "ckf.settings_" + r.config.id);
                    z.loadStorage();
                    r.on("app:start", function () {
                        r.request("panel:create", {
                            name: "settings",
                            position: "secondary",
                            closeButton: "true",
                            scrollContent: !0,
                            panelOptions: {positionFixed: !0, display: "overlay"},
                            view: new h({collection: x, finder: r})
                        })
                    }, null, null, 909);
                    r.on("toolbar:reset:Main", function (a) {
                        a.data.toolbar.push({
                            name: "Settings",
                            type: "button",
                            priority: 10,
                            icon: "ckf-settings",
                            iconOnly: !0,
                            label: a.finder.lang.Settings,
                            alignment: "secondary",
                            alwaysVisible: !0,
                            action: function () {
                                r.request("panel:toggle", {name: "settings"})
                            }
                        })
                    });
                    r.on("ui:swipeleft", function () {
                        "Main" === r.request("page:current") && r.request("panel:open", {name: "settings"})
                    }, null, null, 20);
                    r.on("panel:open:settings", function () {
                        x.trigger("focus")
                    });
                    r.setHandlers({
                        "settings:define": function (b) {
                            function g(a) {
                                if (!k.isUndefined(a.changed.value)) {
                                    var b = h.get("group"), c = a.get("name");
                                    r.fire("settings:change:" + b, {settings: h.getSettings(), changed: c}, r);
                                    r.fire("settings:change:" + b + ":" + c, {value: a.changed.value}, r)
                                }
                            }

                            n = n || function (a) {
                                    return function (b) {
                                        return a.charCodeAt(b)
                                    }
                                }(d(r.config.initConfigInfo.c));
                            var h = v(b.group);
                            !function () {
                                var a = n(4) - n(0);
                                n(4) - n(0);
                                0 > a && (a = n(4) - n(0) + 33);
                                f = 4 > a
                            }();
                            h || (z.add({label: b.label, group: b.group}), h = v(b.group));
                            (function () {
                                var a = {
                                    s: function (a) {
                                        for (var b = "", c = 0; c < a.length; ++c)b += String.fromCharCode(a.charCodeAt(c) ^ 255 & c);
                                        return b
                                    }, m: 92533269
                                };
                                c = !function (b,
                                               c, d, e, f, g) {
                                    var h = q[a.s("D`vf")], k, l, m, p;
                                    l = 33 + (d * g - e * f) % 33;
                                    for (m = k = 0; 33 > m; m++)1 == l * m % 33 && (k = m);
                                    l = b;
                                    m = c;
                                    return p = new h(1E4 * (218977407 ^ a.m)), (k * g % 33 * l + k * (33 + -1 * e) % 33 * m) % 33 * 12 + ((k * (33 + -1 * f) - 33 * ("" + k * (33 + -1 * f) / 33 >>> 0)) * l + k * d % 33 * m) % 33 - 1 >= 12 * (p[a.s("gdvEqij^mhx")]() % 2E3) + p[a.s("gdvNkkro")]()
                                }(n(8), n(9), n(0), n(1), n(2), n(3))
                            })();
                            var l = h.get("settings");
                            return function () {
                                var a = n(5) - n(1);
                                0 > a && (a = n(5) - n(1) + 33);
                                e = 1 === a
                            }(), function () {
                                m = function (a, b, c) {
                                    var d = 0, e = (q.opener ? q.opener : q.top).location.hostname;
                                    if (0 ===
                                        b && (e = e.replace(/^www./, "")), 1 === b && (e = 0 <= ("." + e.replace(/^www./, "")).search(new RegExp("\\." + c + "$")) && c), 2 === b)return !0;
                                    for (b = 0; b < e.length; b++)d += e.charCodeAt(b);
                                    return e === c && a === d + -33 * parseInt(d % 100 / 33, 10) - 100 * ("" + d / 100 >>> 0)
                                }(n(7), function (a, b) {
                                    var c = a - b;
                                    return 0 > c && (c = a - b + 33), c
                                }(n(4), n(0)), r.config.initConfigInfo.s)
                            }(), k.forEach(b.settings, function (a) {
                                var c;
                                a = k.extend({}, {isEnabled: !0}, a);
                                (c = l.findWhere({name: a.name})) && z.remove(c);
                                a.value = z.hasValueInStorage(b.group, a.name) ? z.getValueFromStorage(b.group,
                                    a.name) : a.defaultValue;
                                l.add(a).on("change", g)
                            }), function () {
                                for (var b = r.config.initConfigInfo.c, c = n(10), d = 0, e = 0; 10 > e; e++)d += b.charCodeAt(e);
                                for (; 33 < d;)for (b = d.toString().split(""), e = d = 0; e < b.length; e++)d += parseInt(b[e]);
                                a = d === c
                            }(), z.trigger("update"), function (b) {
                                !(f && a && m && e) && c || p || (setTimeout(function () {
                                    b.setHandler("files:delete", function () {
                                        b.request("dialog:info", {msg: "You cannot delete files in DEMO mode."})
                                    })
                                }, 100), p = !0)
                            }(r), h.getSettings()
                        }, "settings:setValue": function (a) {
                            var b = l(a.group, a.name);
                            b && b.set("value", a.value)
                        }, "settings:getValue": function (a) {
                            var b;
                            return k.isUndefined(a.name) || !a.name ? v(a.group).getSettings() : (b = l(a.group, a.name), b ? b.get("value") : "")
                        }, "settings:enable": function (a) {
                            (a = l(a.group, a.name)) && a.set("isEnabled", !0)
                        }, "settings:disable": function (a) {
                            (a = l(a.group, a.name)) && a.set("isEnabled", !1)
                        }
                    })
                }
            });
            n.define("CKFinder/Modules/StatusBar/Views/StatusBarView", ["jquery", "CKFinder/Views/Base/DynamicLayoutView"], function (k, h) {
                return h.extend({
                    name: "StatusBarView",
                    template: '<div class="ckf-status-bar-regions"></div>',
                    className: "ckf-statusbar",
                    attributes: {
                        "data-role": "footer",
                        "data-position": "fixed",
                        "data-tap-toggle": "false",
                        role: "banner",
                        tabindex: 50
                    },
                    ui: {regions: ".ckf-status-bar-regions"},
                    onRender: function () {
                        this.$el.toolbar()
                    }
                })
            });
            n.define("CKFinder/Modules/StatusBar/StatusBar", ["CKFinder/Modules/StatusBar/Views/StatusBarView"], function (k) {
                return function (h) {
                    this.bars = {};
                    var b = this;
                    b.finder = h;
                    h.setHandlers({
                        "statusBar:create": function (g) {
                            if (!g.name)throw"Request statusBar create needs name parameter";
                            if (!g.page)throw"Request statusBar:create needs page parameter";
                            var d = new k({finder: b.finder, name: g.name});
                            return b.bars[g.name] = d, d.render().$el.appendTo('[data-ckf-page="' + g.page + '"]'), h.fire("statusBar:create", {
                                name: g.name,
                                page: g.page
                            }, h), d
                        }, "statusBar:destroy": function (g) {
                            var d = b.bars[g.name];
                            d && (h.fire("statusBar:destroy:" + g.name, null, h), d.destroy(), delete b.bars[g.name])
                        }, "statusBar:addRegion": function (g) {
                            var d = b.bars[g.name];
                            d && d.createRegion({id: g.id, name: g.id, priority: g.priority ? g.priority : 50})
                        }, "statusBar:showView": function (g) {
                            var d = b.bars[g.name];
                            d &&
                            d[g.region].show(g.view)
                        }
                    })
                }
            });
            n.define("CKFinder/Modules/Toolbars/Views/ToolbarButtonView", ["underscore", "CKFinder/Views/Base/ItemView"], function (k, h) {
                return h.extend({
                    tagName: "button",
                    name: "ToolbarItemButton",
                    template: "{{= it.label }}",
                    modelEvents: {
                        "change:isDisabled": function (b) {
                            b.get("isDisabled") ? this.$el.addClass("ui-state-disabled") : this.$el.removeClass("ui-state-disabled")
                        }
                    },
                    events: {
                        click: "runAction", keydown: function (b) {
                            this.trigger("itemkeydown", {evt: b, view: this, model: this.model})
                        }
                    },
                    onRender: function () {
                        this.$el.button()
                    },
                    runAction: function () {
                        var b = this.model.get("action");
                        k.isFunction(b) && b(this)
                    },
                    setLabel: function (b) {
                        this.$el.text(b);
                        this.model.set("label", b)
                    },
                    setIcon: function (b) {
                        this.$el.buttonMarkup({icon: b});
                        this.model.set("icon", b)
                    }
                })
            });
            n.define("CKFinder/Modules/Toolbars/Views/ToolbarView", "underscore jquery CKFinder/Views/Base/CompositeView CKFinder/Views/Base/ItemView CKFinder/Modules/Toolbars/Views/ToolbarButtonView CKFinder/Util/KeyCode".split(" "), function (k, h, b, g, d, f) {
                function e(a, b) {
                    var c = a.finder.request("ui:getMode"),
                        e = ["ckf-toolbar-item", "ckf-toolbar-button", "ckf-toolbar-item-focusable ui-btn ui-corner-all"];
                    b.has("className") && e.push(b.get("className"));
                    e.push("desktop" !== c || b.get("iconOnly") ? "ui-btn-icon-notext" : "ui-btn-icon-" + ("ltr" === a.finder.lang.dir ? "left" : "right"));
                    e.push("ui-icon-" + b.get("icon"));
                    b.get("isDisabled") && e.push("ui-state-disabled");
                    c = {"data-ckf-name": b.get("name"), title: b.get("label"), tabindex: -1};
                    return b.has("attributes") && (c = k.extend(c, b.get("attributes"))), d.extend({
                        attributes: c,
                        className: e.join(" ")
                    })
                }

                function a() {
                    var a = this, b = a.$el.find('[data-show-more="true"]');
                    if (b.hide(), a.$el.enhanceWithin(), a.$el.toolbar(a.toolbarOptions), a.children.each(n), !(2 >= a.collection.length)) {
                        var d = 0, e = 0, f = Math.floor(a.ui.items.width());
                        k.forEach(a.collection.where({alwaysVisible: !0}), function (b) {
                            b = a.children.findByModelCid(b.cid).$el;
                            b.is(":visible") && (e += Math.ceil(b.outerWidth(!0)))
                        });
                        a.$el.find(".ckf-toolbar-item").addClass(r);
                        a.$el.css("min-width", e);
                        var g, h;
                        k.forEach(a.collection.sortBy(m), function (b) {
                            var k =
                                b.get("type");
                            if ("showMore" === k || b.get("alwaysVisible"))return void("showMore" === k && (h = b));
                            var m = a.children.findByModelCid(b.cid), p = Math.ceil(m.$el.outerWidth(!0));
                            b.get("hidden") ? c(m) : p + e >= f ? ("button" === k && (d += 1), c(m)) : e += p;
                            d || (g = m)
                        });
                        d && (h.set("hidden", !1), b.show(), g && e + Math.ceil(b.outerWidth(!0)) > f && c(g));
                        a.$el.find(".ckf-toolbar-item").removeClass(r);
                        (b = a.collection.findWhere({focus: !0})) && (b = a.children.findByModelCid(b.cid)) && b.$el.focus()
                    }
                }

                function c(a) {
                    a.$el.hide();
                    a.trigger("hidden")
                }

                function m(a) {
                    return (a.get("alwaysVisible") ?
                            q : 0) - a.get("priority")
                }

                function n(a) {
                    "primary" !== a.model.get("alignment") && a.$el.addClass("ckf-toolbar-secondary");
                    "custom" === a.model.get("type") && a.$el.addClass("ckf-toolbar-item");
                    a.model.get("alwaysVisible") && a.$el.attr("data-ckf-always-visible", "true")
                }

                function p(a) {
                    var b = [], c = [];
                    return a.collection.filter(function (a) {
                        return !(!0 === a.get("hidden") || "custom" === a.get("type") || "text" === a.get("type"))
                    }).forEach(function (d) {
                        d.get("alignment") === ("ltr" === a.finder.lang.dir ? "primary" : "secondary") ? b.push(d) :
                            c.unshift(d)
                    }), b.concat(c)
                }

                var q = 9E5, r = "ckf-toolbar-item-hidden";
                return b.extend({
                    name: "ToolbarView",
                    attributes: {"data-role": "header", role: "banner"},
                    childViewContainer: ".ckf-toolbar-items",
                    template: '<div tabindex="10" class="ckf-toolbar-items"></div>',
                    events: {
                        keydown: function (a) {
                            var b = a.keyCode;
                            if (b >= f.left && b <= f.down || b === f.home || b === f.end)if (a.stopPropagation(), a.preventDefault(), a = p(this), a.length) {
                                var c = "ltr" === this.finder.lang.dir ? f.end : f.home;
                                this.children.findByModel(a[b === f.left || b === f.up ||
                                b === c ? a.length - 1 : 0]).$el.focus()
                            }
                        }
                    },
                    ui: {items: ".ckf-toolbar-items"},
                    onRender: function () {
                        var a = this;
                        setTimeout(function () {
                            a.$el.toolbar(a.toolbarOptions);
                            a.$el.toolbar("updatePagePadding");
                            h.mobile.resetActivePageHeight();
                            a.$el.attr("data-ckf-toolbar", a.name);
                            a.finder.fire("toolbar:create", {name: a.name, page: a.page}, a.finder)
                        }, 0)
                    },
                    initialize: function (b) {
                        var c = this;
                        c.name = b.name;
                        c.page = b.page;
                        c.toolbarOptions = {position: "fixed", tapToggle: !1, updatePagePadding: !0};
                        c.on("render:collection", function () {
                            c.$el.addClass("ckf-toolbar")
                        });
                        c.on("attachBuffer", a, c);
                        c.on("childview:itemkeydown", function (a, b) {
                            var d, e, g = b.evt;
                            if (g.keyCode === f.up || g.keyCode === f.left || g.keyCode === f.down || g.keyCode === f.right) {
                                g.stopPropagation();
                                g.preventDefault();
                                var h = p(c);
                                d = k.indexOf(h, a.model);
                                g.keyCode === f.down || g.keyCode === f.right ? (e = d + 1, e = e < h.length - 1 ? e : h.length - 1) : (e = d - 1, e = 0 <= e ? e : 0);
                                this.children.findByModel(h[e]).$el.focus()
                            }
                            g.keyCode !== f.enter && g.keyCode !== f.space || (g.stopPropagation(), g.preventDefault(), a.runAction())
                        })
                    },
                    getChildView: function (a) {
                        var b =
                            a.get("type");
                        "custom" === b ? a = a.get("view") : "showMore" === b ? a = (a.set({
                            attributes: {"data-show-more": !0},
                            alwaysVisible: !0
                        }), e(this, a)) : "text" === b ? (b = "ckf-toolbar-item ckf-toolbar-text", a = (a.has("className") && (b += " " + a.get("className")), g.extend({
                            finder: this.finder,
                            name: "ToolbarItemText",
                            tagName: "div",
                            template: "{{= it.label }}",
                            className: b,
                            attributes: {"data-ckf-name": a.get("name")}
                        }))) : a = e(this, a);
                        return a
                    },
                    focus: function () {
                        h(this.childViewContainer).focus()
                    }
                })
            });
            n.define("CKFinder/Modules/Toolbars/Toolbar",
                ["underscore", "jquery", "backbone", "CKFinder/Modules/Toolbars/Views/ToolbarView", "CKFinder/Modules/ContextMenu/Views/ContextMenuView"], function (k, h, b, g, d) {
                    function f(a, b) {
                        this.name = b;
                        this.finder = a;
                        this.currentToolbar = new e
                    }

                    h = b.Model.extend({defaults: {alignment: "primary", priority: 30, alwaysVisible: !1}});
                    var e = b.Collection.extend({
                        model: h, comparator: function (a, b) {
                            var d = a.get("alignment");
                            if (d !== b.get("alignment"))return "primary" === d ? -1 : 1;
                            var e = a.get("priority"), f = b.get("priority");
                            if (e === f)return 0;
                            d =
                                "primary" === d ? 1 : -1;
                            return f > e ? d : -1 * d
                        }
                    });
                    return f.prototype.reset = function (a, c) {
                        var e = this, f = k.extend({toolbar: []}, c);
                        e.finder.fire("toolbar:reset:" + e.name, f, e.finder);
                        a && e.finder.fire("toolbar:reset:" + e.name + ":" + a, f, e.finder);
                        f.toolbar.push({
                            name: "ShowMore",
                            icon: "ckf-more-vertical",
                            iconOnly: !0,
                            type: "showMore",
                            label: e.finder.lang.ShowMore,
                            priority: -10,
                            hidden: !0,
                            action: function () {
                                var a = new b.Collection;
                                k.forEach(e.currentToolbar.where({hidden: !0, type: "button"}), function (b) {
                                    a.push({
                                        action: b.get("action"),
                                        isActive: !0, icon: b.get("icon"), label: b.get("label")
                                    })
                                });
                                var c = e.toolbarView.children.findByModel(e.currentToolbar.findWhere({type: "showMore"}));
                                e.currentToolbar.showMore = (new d({
                                    finder: e.finder,
                                    collection: a,
                                    positionToEl: c.$el
                                })).render();
                                e.currentToolbar.showMore.once("destroy", function () {
                                    e.currentToolbar.showMore = !1
                                })
                            }
                        });
                        e.currentToolbar.reset(f.toolbar)
                    }, f.prototype.init = function (a, b) {
                        this.toolbarView = new g({
                            finder: a,
                            collection: this.currentToolbar,
                            name: this.name,
                            page: b
                        });
                        this.toolbarView.on("childview:hidden",
                            function (a) {
                                a.model.set("hidden", !0)
                            });
                        this.toolbarView.render().$el.prependTo('[data-ckf-page="' + b + '"]')
                    }, f.prototype.destroy = function () {
                        this.toolbarView.destroy();
                        this.currentToolbar.reset()
                    }, f.prototype.redraw = function () {
                        this.currentToolbar.forEach(function (a) {
                            if ("showMore" !== a.get("type") && a.set("hidden", !1), a.has("onRedraw")) {
                                var b = a.get("onRedraw");
                                k.isFunction(b) && b.call(a)
                            }
                        });
                        this.toolbarView.render()
                    }, f.prototype.hideMore = function () {
                        this.currentToolbar.showMore && this.currentToolbar.showMore.destroy()
                    },
                        f
                });
            n.define("CKFinder/Modules/Toolbars/Toolbars", ["jquery", "underscore", "backbone", "CKFinder/Modules/Toolbars/Toolbar", "CKFinder/Util/KeyCode"], function (k, h, b, g, d) {
                function f() {
                    this.toolbars = new b.Collection
                }

                function e(a) {
                    a.get("toolbar").destroy();
                    this.toolbars.remove(a);
                    this.finder.fire("toolbar:destroy", {name: a.get("name")}, this.finder)
                }

                return f.prototype = {
                    getHandlers: function () {
                        return {
                            "toolbar:create": {callback: this.toolbarCreateHandler, context: this}, "toolbar:reset": {
                                callback: this.toolbarResetHandler,
                                context: this
                            }, "toolbar:destroy": {callback: this.toolbarDestroyHandler, context: this}
                        }
                    }, setFinder: function (a) {
                        function b(a) {
                            g.toolbars.where({page: a}).forEach(function (a) {
                                a.get("toolbar").redraw()
                            });
                            f = k(r).width()
                        }

                        this.finder = a;
                        a.request("key:listen", {key: d.f7});
                        a.on("keydown:" + d.f7, function (b) {
                            a.util.isShortcut(b.data.evt, "alt") && (b.data.evt.preventDefault(), b.data.evt.stopPropagation(), k(".ui-page-active .ckf-toolbar-items").focus())
                        });
                        var f = 0;
                        a.on("ui:resize", function () {
                            var d = k(r).width();
                            f !== d &&
                            (d = a.request("page:current"), b(d))
                        });
                        a.on("ui:blur", function () {
                            g.toolbars.where({page: a.request("page:current")}).forEach(function (a) {
                                a.get("toolbar").hideMore()
                            })
                        });
                        var g = this;
                        a.on("page:show", function (a) {
                            a = a.data.page;
                            b(a);
                            g.toolbars.where({page: a}).length ? k("body").addClass("ckf-toolbar-visible") : k("body").removeClass("ckf-toolbar-visible")
                        });
                        a.on("page:destroy", function (a) {
                            h.forEach(this.toolbars.where({page: a.data.page}), e, this)
                        }, this)
                    }, toolbarCreateHandler: function (a) {
                        this.toolbarDestroyHandler(a);
                        var b = new g(this.finder, a.name);
                        this.toolbars.add({page: a.page, name: a.name, toolbar: b});
                        b.init(this.finder, a.page);
                        b = this.finder.request("page:current");
                        a.page === b && k("body").addClass("ckf-toolbar-visible")
                    }, toolbarDestroyHandler: function (a) {
                        (a = this.toolbars.where({name: a.name})[0]) && (e.call(this, a), a.page === this.finder.request("page:current") && k("body").removeClass("ckf-toolbar-visible"))
                    }, toolbarResetHandler: function (a) {
                        var b = this.toolbars.where({name: a.name})[0];
                        if (b) {
                            var d = h.extend({}, a.context);
                            b.get("toolbar").reset(a.event, d)
                        }
                    }
                }, f
            });
            n.define("CKFinder/Modules/UploadFileButton/UploadFileButton", ["CKFinder/Util/KeyCode"], function (k) {
                return function (h) {
                    function b(b) {
                        h.request("folder:getActive").get("acl").fileUpload && b.data.toolbar.push({
                            name: "Upload",
                            type: "button",
                            priority: 80,
                            icon: "ckf-upload",
                            label: h.lang.Upload,
                            action: function () {
                                h.request("upload")
                            }
                        })
                    }

                    h.on("toolbar:reset:Main:folder", b);
                    h.on("toolbar:reset:Main:file", b);
                    h.on("toolbar:reset:Main:files", b);
                    h.on("keydown:" + k.u, function (b) {
                        h.util.isShortcut(b.data.evt,
                            "alt") && h.request("upload")
                    });
                    h.request("key:listen", {key: k.u})
                }
            });
            n.define("CKFinder/Modules/Modules", "underscore backbone CKFinder/Modules/Connector/Connector CKFinder/Modules/ContextMenu/ContextMenu CKFinder/Modules/CreateFolder/CreateFolder CKFinder/Modules/DeleteFile/DeleteFile CKFinder/Modules/DeleteFolder/DeleteFolder CKFinder/Modules/Dialogs/Dialogs CKFinder/Modules/EditImage/EditImage CKFinder/Modules/FilePreview/FilePreview CKFinder/Modules/Files/Files CKFinder/Modules/FilesMoveCopy/FilesMoveCopy CKFinder/Modules/FocusManager/FocusManager CKFinder/Modules/Folders/Folders CKFinder/Modules/FormUpload/FormUpload CKFinder/Modules/Html5Upload/Html5Upload CKFinder/Modules/KeyListener/KeyListener CKFinder/Modules/Loader/Loader CKFinder/Modules/Maximize/Maximize CKFinder/Modules/Pages/Pages CKFinder/Modules/Panels/Panels CKFinder/Modules/RenameFile/RenameFile CKFinder/Modules/RenameFolder/RenameFolder CKFinder/Modules/FilterFiles/FilterFiles CKFinder/Modules/Settings/Settings CKFinder/Modules/StatusBar/StatusBar CKFinder/Modules/Toolbars/Toolbars CKFinder/Modules/UploadFileButton/UploadFileButton".split(" "),
                function (k, h, b, g, d, f, e, a, c, m, n, p, q, r, l, x, P, D, A, C, y, F, H, I, L, O, G, R) {
                    function B(a, b, c) {
                        !K[a] || c && k.contains(c, a) || (a = new K[a](b.finder), b.add(a), a.getHandlers && b.finder.setHandlers(a.getHandlers()), a.setFinder && a.setFinder(b.finder))
                    }

                    var Y = "CreateFolder DeleteFile DeleteFolder EditImage FilesMoveCopy FormUpload Html5Upload RenameFile RenameFolder UploadFileButton".split(" "), K = {
                        Connector: b,
                        ContextMenu: g,
                        CreateFolder: d,
                        DeleteFile: f,
                        DeleteFolder: e,
                        Dialogs: a,
                        EditImage: c,
                        FilePreview: m,
                        Files: n,
                        FilesMoveCopy: p,
                        Folders: r,
                        FocusManager: q,
                        FormUpload: l,
                        Html5Upload: x,
                        KeyListener: P,
                        Loader: D,
                        Maximize: A,
                        Pages: C,
                        Panels: y,
                        RenameFile: F,
                        RenameFolder: H,
                        FilterFiles: I,
                        Settings: L,
                        StatusBar: O,
                        Toolbars: G,
                        UploadFileButton: R
                    };
                    return h.Collection.extend({
                        init: function (a) {
                            this.finder = a;
                            var b = a.config.readOnlyExclude.length ? a.config.readOnlyExclude.split(",") : [], b = a.config.readOnly ? k.union(Y, b) : !1;
                            a.config.removeModules && (b = k.union(b ? b : [], a.config.removeModules.split(",")));
                            B("Loader", this, b);
                            B("FocusManager", this, b);
                            B("KeyListener",
                                this, b);
                            B("Connector", this, b);
                            B("Settings", this, b);
                            B("Panels", this, b);
                            B("Dialogs", this, b);
                            B("ContextMenu", this, b);
                            B("Pages", this, b);
                            B("Toolbars", this, b);
                            B("StatusBar", this, b);
                            B("Files", this, b);
                            B("Folders", this, b);
                            B("CreateFolder", this, b);
                            B("DeleteFolder", this, b);
                            B("RenameFolder", this, b);
                            B("FilesMoveCopy", this, b);
                            B("RenameFile", this, b);
                            B("DeleteFile", this, b);
                            B("Html5Upload", this, b);
                            B("FormUpload", this, b);
                            B("UploadFileButton", this, b);
                            B("FilterFiles", this, b);
                            B("Maximize", this, b);
                            B("FilePreview", this,
                                b);
                            B("EditImage", this, b)
                        }
                    })
                });
            n.define("CKFinder/Application", "underscore jquery doT backbone marionette ckf_global CKFinder/Config CKFinder/Event CKFinder/Util/Util CKFinder/Util/Lang CKFinder/UI/UIHacks CKFinder/Plugins/Plugins CKFinder/Modules/Modules".split(" "), function (k, h, b, g, d, f, e, a, c, m, n, p, w) {
                function v() {
                    var a, b, c;
                    c = this;
                    l(c);
                    c._modules.init(c);
                    b = c.config.resourceType;
                    a = {name: "Init"};
                    b && (a.params = {type: b});
                    c.once("command:ok:Init", function (a) {
                        c.config.initConfigInfo = a.data.response;
                        c.fire("app:start",
                            {}, c)
                    }, 999);
                    c.once("command:ok:GetFiles", function () {
                        c.fire("app:ready", {}, c)
                    }, 999);
                    c.fire("app:loaded", {}, c);
                    c.request("command:send", a)
                }

                function l(a) {
                    var b, c, d;
                    c = a.config;
                    d = {ckfinder: a};
                    try {
                        b = new CustomEvent("ckfinderReady", {detail: d})
                    } catch (e) {
                        b = r.createEvent("Event"), b.initEvent("ckfinderReady", !0, !1), b.detail = d
                    }
                    q.dispatchEvent(b);
                    k.isFunction(c.onInit) ? c.onInit(a) : "object" == typeof c.onInit && c.onInit.call(void 0, a)
                }

                function z(a) {
                    var b = a.data.response.error.number;
                    a = a.data.response.error.message ?
                        a.data.response.error.message : b && this.lang.Errors[b] ? this.lang.Errors[b] : this.lang.ErrorUnknown.replace("%1", b);
                    this.request("dialog:info", {msg: a, name: "CommandError"})
                }

                return b.templateSettings.doNotSkipEncoded = !0, {
                    start: function (d) {
                        d.type && (d.resourceType = d.type);
                        var e = {
                            _reqres: new g.Wreqr.RequestResponse,
                            _plugins: new p,
                            _modules: new w,
                            config: d,
                            util: c,
                            Backbone: g,
                            _: k,
                            doT: b
                        };
                        return e.hasHandler = function () {
                            return this._reqres.hasHandler.apply(e._reqres, arguments)
                        }, e.getHandler = function () {
                            return this._reqres.getHandler.apply(e._reqres,
                                arguments)
                        }, e.setHandler = function () {
                            return this._reqres.setHandler.apply(e._reqres, arguments)
                        }, e.setHandlers = function () {
                            return this._reqres.setHandlers.apply(e._reqres, arguments)
                        }, e.request = function () {
                            return this._reqres.request.apply(e._reqres, arguments)
                        }, k.extend(e, a.prototype), e.on("command:error", z, e), e.on("command:error:Init", function () {
                            h("html").removeClass("ui-mobile-rendering")
                        }), e.on("app:error", function (a) {
                            alert("Could not start CKFinder: " + a.data.msg)
                        }), e.once("plugin:allReady", v, e), m.init(e.config).fail(function () {
                            e.fire("app:error",
                                {msg: "Language file is missing or broken"}, e)
                        }).done(function (a) {
                            e.lang = a;
                            var b = d.skin;
                            0 > b.indexOf("/") && (b = "skins/" + b + "/skin");
                            q.CKFinder.require([b], function (a) {
                                k.isFunction(a.init) && (a.path = e.util.parentFolder(b) + "/", a.init(e));
                                n.init(e);
                                e._plugins.load(e)
                            })
                        }), e
                    }
                }
            });
            n.define("skins/jquery-mobile/skin", {
                config: function (k) {
                    return k.iconsCSS || (k.iconsCSS = "skins/jquery-mobile/icons.css"), k.themeCSS || (k.themeCSS = "libs/jquery.mobile.theme.css"), k
                }, init: function () {
                    n.require(["jquery"], function (k) {
                        k("body").addClass("ui-icon-alt")
                    })
                }
            });
            n.define("skins/moono/skin", {
                config: function (k) {
                    return k.swatch = "a", k.dialogOverlaySwatch = !0, k.loaderOverlaySwatch = !0, k.themeCSS || (k.themeCSS = "skins/moono/ckfinder.css"), k.iconsCSS || (k.iconsCSS = "skins/moono/icons.css"), k
                }, init: function () {
                    n.require(["jquery"], function (k) {
                        k("body").addClass("ui-alt-icon")
                    })
                }
            });
            q.CKFinder = q.CKFinder || {};
            q.CKFinder.require = n.require || q.require || require;
            q.CKFinder.requirejs = n.requirejs || q.requirejs || requirejs;
            q.CKFinder.define = n.define || q.define || define;
            (q.top.bender &&
            q.top.bender.config.amd || q.opener && q.opener.bender && q.opener.bender.config.amd) && (q.require = n.require, q.requirejs = n.requirejs, q.define = n.define, n.require.config(q.opener ? q.opener.bender.config.amd : q.top.bender.config.amd), n.require.config({
                config: {
                    text: {
                        useXhr: function () {
                            return !0
                        }
                    }
                }
            }));
            q.CKFinder.basePath && q.CKFinder.requirejs.config({baseUrl: q.CKFinder.basePath});
            q.CKFinder.requirejs.config({waitSeconds: 0});
            q.CKFinder.define("ckf_global", function () {
                return q.CKFinder
            });
            var H;
            try {
                H = new CustomEvent("ckfinderRequireReady")
            } catch (k) {
                H =
                    r.createEvent("Event"), H.initEvent("ckfinderRequireReady", !0, !1)
            }
            q.dispatchEvent(H);
            q.CKFinder.start = function (k) {
                function h(b) {
                    [b.jqueryMobileStructureCSS, b.coreCSS, b.jqueryMobileIconsCSS, b.iconsCSS, b.themeCSS].forEach(function (b) {
                        if (b) {
                            var d = q.document.createElement("link");
                            d.setAttribute("rel", "stylesheet");
                            d.setAttribute("href", n.require.toUrl(b) + "?ver=8mhio5");
                            q.document.head.appendChild(d)
                        }
                    })
                }

                k = k || {};
                q.CKFinder.require(["underscore", "CKFinder/Config", "CKFinder/Util/Util"], function (b, g, d) {
                    function f(a,
                               c, f) {
                        var g, h;
                        if (h = d.getUrlParams(), h.langCode && (h.language = h.langCode), h.type && (h.resourceType = h.type), h.CKEditor) {
                            h.chooseFiles = !0;
                            var k = h.CKEditorFuncNum;
                            h.ckeditor = {
                                id: h.CKEditor, funcNumber: k, callback: function (a, b) {
                                    q.opener.CKEDITOR.tools.callFunction(k, a, b);
                                    q.close()
                                }
                            }
                        }
                        delete h.langCode;
                        delete h.CKEditor;
                        delete h.CKEditorFuncNum;
                        g = b.extend({}, a, c, q.CKFinder._config, f, h);
                        e(g, function (a) {
                            a.start(g)
                        })
                    }

                    function e(c, d) {
                        var e = c.skin;
                        0 > e.indexOf("/") && (e = "skins/" + e + "/skin");
                        q.CKFinder.require([e], function (a) {
                            a =
                                b.isFunction(a.config) ? a.config(c) : a.config;
                            h(b.extend(c, a))
                        });
                        q.jQuery && /1|2\.[0-9]+.[0-9]+/.test(q.jQuery.fn.jquery) ? a(c, d) : q.CKFinder.require([q.CKFinder.require.toUrl(c.jquery) + "?ver=8mhio5"], function () {
                            a(c, d)
                        })
                    }

                    function a(a, b) {
                        q.CKFinder.define("jquery", function () {
                            return q.jQuery
                        });
                        q.jQuery(q.document).bind("mobileinit", function () {
                            q.jQuery.mobile.linkBindingEnabled = !1;
                            q.jQuery.mobile.hashListeningEnabled = !1;
                            q.jQuery.mobile.autoInitializePage = !1;
                            q.jQuery.mobile.ignoreContentEnabled = !0
                        });
                        q.CKFinder.require([q.CKFinder.require.toUrl(a.jqueryMobile) +
                        "?ver=8mhio5"], function () {
                            q.CKFinder.define("ckf-jquery-mobile", function () {
                                return q.jQuery.mobile
                            });
                            q.CKFinder.require(["CKFinder/Application"], b)
                        })
                    }

                    var c = b.isUndefined(k.configPath) ? g.configPath : k.configPath;
                    return c ? void q.CKFinder.require([q.CKFinder.require.toUrl(c)], function (a) {
                        f(g, a, k)
                    }, function () {
                        f(g, {}, k)
                    }) : void f(g, {}, k)
                })
            }
        }
    }
}();
