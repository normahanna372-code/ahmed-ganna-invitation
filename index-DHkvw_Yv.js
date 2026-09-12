(function() {
    const T = document.createElement("link").relList;
    if (T && T.supports && T.supports("modulepreload"))
        return;
    for (const q of document.querySelectorAll('link[rel="modulepreload"]'))
        o(q);
    new MutationObserver(q => {
        for (const U of q)
            if (U.type === "childList")
                for (const X of U.addedNodes)
                    X.tagName === "LINK" && X.rel === "modulepreload" && o(X)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function A(q) {
        const U = {};
        return q.integrity && (U.integrity = q.integrity),
        q.referrerPolicy && (U.referrerPolicy = q.referrerPolicy),
        q.crossOrigin === "use-credentials" ? U.credentials = "include" : q.crossOrigin === "anonymous" ? U.credentials = "omit" : U.credentials = "same-origin",
        U
    }
    function o(q) {
        if (q.ep)
            return;
        q.ep = !0;
        const U = A(q);
        fetch(q.href, U)
    }
}
)();
var ff = {
    exports: {}
}
  , pu = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function uh() {
    if (Sd)
        return pu;
    Sd = 1;
    var g = Symbol.for("react.transitional.element")
      , T = Symbol.for("react.fragment");
    function A(o, q, U) {
        var X = null;
        if (U !== void 0 && (X = "" + U),
        q.key !== void 0 && (X = "" + q.key),
        "key" in q) {
            U = {};
            for (var ol in q)
                ol !== "key" && (U[ol] = q[ol])
        } else
            U = q;
        return q = U.ref,
        {
            $$typeof: g,
            type: o,
            key: X,
            ref: q !== void 0 ? q : null,
            props: U
        }
    }
    return pu.Fragment = T,
    pu.jsx = A,
    pu.jsxs = A,
    pu
}
var pd;
function nh() {
    return pd || (pd = 1,
    ff.exports = uh()),
    ff.exports
}
var s = nh()
  , sf = {
    exports: {}
}
  , L = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zd;
function ih() {
    if (zd)
        return L;
    zd = 1;
    var g = Symbol.for("react.transitional.element")
      , T = Symbol.for("react.portal")
      , A = Symbol.for("react.fragment")
      , o = Symbol.for("react.strict_mode")
      , q = Symbol.for("react.profiler")
      , U = Symbol.for("react.consumer")
      , X = Symbol.for("react.context")
      , ol = Symbol.for("react.forward_ref")
      , j = Symbol.for("react.suspense")
      , E = Symbol.for("react.memo")
      , R = Symbol.for("react.lazy")
      , D = Symbol.for("react.activity")
      , K = Symbol.iterator;
    function Q(d) {
        return d === null || typeof d != "object" ? null : (d = K && d[K] || d["@@iterator"],
        typeof d == "function" ? d : null)
    }
    var gl = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , Ol = Object.assign
      , xt = {};
    function Yl(d, N, _) {
        this.props = d,
        this.context = N,
        this.refs = xt,
        this.updater = _ || gl
    }
    Yl.prototype.isReactComponent = {},
    Yl.prototype.setState = function(d, N) {
        if (typeof d != "object" && typeof d != "function" && d != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, d, N, "setState")
    }
    ,
    Yl.prototype.forceUpdate = function(d) {
        this.updater.enqueueForceUpdate(this, d, "forceUpdate")
    }
    ;
    function Et() {}
    Et.prototype = Yl.prototype;
    function ql(d, N, _) {
        this.props = d,
        this.context = N,
        this.refs = xt,
        this.updater = _ || gl
    }
    var ft = ql.prototype = new Et;
    ft.constructor = ql,
    Ol(ft, Yl.prototype),
    ft.isPureReactComponent = !0;
    var Nt = Array.isArray;
    function Ql() {}
    var I = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , Ll = Object.prototype.hasOwnProperty;
    function At(d, N, _) {
        var C = _.ref;
        return {
            $$typeof: g,
            type: d,
            key: N,
            ref: C !== void 0 ? C : null,
            props: _
        }
    }
    function Ze(d, N) {
        return At(d.type, N, d.props)
    }
    function Mt(d) {
        return typeof d == "object" && d !== null && d.$$typeof === g
    }
    function Zl(d) {
        var N = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + d.replace(/[=:]/g, function(_) {
            return N[_]
        })
    }
    var ze = /\/+/g;
    function Ct(d, N) {
        return typeof d == "object" && d !== null && d.key != null ? Zl("" + d.key) : N.toString(36)
    }
    function St(d) {
        switch (d.status) {
        case "fulfilled":
            return d.value;
        case "rejected":
            throw d.reason;
        default:
            switch (typeof d.status == "string" ? d.then(Ql, Ql) : (d.status = "pending",
            d.then(function(N) {
                d.status === "pending" && (d.status = "fulfilled",
                d.value = N)
            }, function(N) {
                d.status === "pending" && (d.status = "rejected",
                d.reason = N)
            })),
            d.status) {
            case "fulfilled":
                return d.value;
            case "rejected":
                throw d.reason
            }
        }
        throw d
    }
    function S(d, N, _, C, Z) {
        var J = typeof d;
        (J === "undefined" || J === "boolean") && (d = null);
        var al = !1;
        if (d === null)
            al = !0;
        else
            switch (J) {
            case "bigint":
            case "string":
            case "number":
                al = !0;
                break;
            case "object":
                switch (d.$$typeof) {
                case g:
                case T:
                    al = !0;
                    break;
                case R:
                    return al = d._init,
                    S(al(d._payload), N, _, C, Z)
                }
            }
        if (al)
            return Z = Z(d),
            al = C === "" ? "." + Ct(d, 0) : C,
            Nt(Z) ? (_ = "",
            al != null && (_ = al.replace(ze, "$&/") + "/"),
            S(Z, N, _, "", function(_a) {
                return _a
            })) : Z != null && (Mt(Z) && (Z = Ze(Z, _ + (Z.key == null || d && d.key === Z.key ? "" : ("" + Z.key).replace(ze, "$&/") + "/") + al)),
            N.push(Z)),
            1;
        al = 0;
        var Gl = C === "" ? "." : C + ":";
        if (Nt(d))
            for (var Sl = 0; Sl < d.length; Sl++)
                C = d[Sl],
                J = Gl + Ct(C, Sl),
                al += S(C, N, _, J, Z);
        else if (Sl = Q(d),
        typeof Sl == "function")
            for (d = Sl.call(d),
            Sl = 0; !(C = d.next()).done; )
                C = C.value,
                J = Gl + Ct(C, Sl++),
                al += S(C, N, _, J, Z);
        else if (J === "object") {
            if (typeof d.then == "function")
                return S(St(d), N, _, C, Z);
            throw N = String(d),
            Error("Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(d).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead.")
        }
        return al
    }
    function M(d, N, _) {
        if (d == null)
            return d;
        var C = []
          , Z = 0;
        return S(d, C, "", "", function(J) {
            return N.call(_, J, Z++)
        }),
        C
    }
    function G(d) {
        if (d._status === -1) {
            var N = d._result;
            N = N(),
            N.then(function(_) {
                (d._status === 0 || d._status === -1) && (d._status = 1,
                d._result = _)
            }, function(_) {
                (d._status === 0 || d._status === -1) && (d._status = 2,
                d._result = _)
            }),
            d._status === -1 && (d._status = 0,
            d._result = N)
        }
        if (d._status === 1)
            return d._result.default;
        throw d._result
    }
    var il = typeof reportError == "function" ? reportError : function(d) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var N = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof d == "object" && d !== null && typeof d.message == "string" ? String(d.message) : String(d),
                error: d
            });
            if (!window.dispatchEvent(N))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", d);
            return
        }
        console.error(d)
    }
      , rl = {
        map: M,
        forEach: function(d, N, _) {
            M(d, function() {
                N.apply(this, arguments)
            }, _)
        },
        count: function(d) {
            var N = 0;
            return M(d, function() {
                N++
            }),
            N
        },
        toArray: function(d) {
            return M(d, function(N) {
                return N
            }) || []
        },
        only: function(d) {
            if (!Mt(d))
                throw Error("React.Children.only expected to receive a single React element child.");
            return d
        }
    };
    return L.Activity = D,
    L.Children = rl,
    L.Component = Yl,
    L.Fragment = A,
    L.Profiler = q,
    L.PureComponent = ql,
    L.StrictMode = o,
    L.Suspense = j,
    L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I,
    L.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(d) {
            return I.H.useMemoCache(d)
        }
    },
    L.cache = function(d) {
        return function() {
            return d.apply(null, arguments)
        }
    }
    ,
    L.cacheSignal = function() {
        return null
    }
    ,
    L.cloneElement = function(d, N, _) {
        if (d == null)
            throw Error("The argument must be a React element, but you passed " + d + ".");
        var C = Ol({}, d.props)
          , Z = d.key;
        if (N != null)
            for (J in N.key !== void 0 && (Z = "" + N.key),
            N)
                !Ll.call(N, J) || J === "key" || J === "__self" || J === "__source" || J === "ref" && N.ref === void 0 || (C[J] = N[J]);
        var J = arguments.length - 2;
        if (J === 1)
            C.children = _;
        else if (1 < J) {
            for (var al = Array(J), Gl = 0; Gl < J; Gl++)
                al[Gl] = arguments[Gl + 2];
            C.children = al
        }
        return At(d.type, Z, C)
    }
    ,
    L.createContext = function(d) {
        return d = {
            $$typeof: X,
            _currentValue: d,
            _currentValue2: d,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        d.Provider = d,
        d.Consumer = {
            $$typeof: U,
            _context: d
        },
        d
    }
    ,
    L.createElement = function(d, N, _) {
        var C, Z = {}, J = null;
        if (N != null)
            for (C in N.key !== void 0 && (J = "" + N.key),
            N)
                Ll.call(N, C) && C !== "key" && C !== "__self" && C !== "__source" && (Z[C] = N[C]);
        var al = arguments.length - 2;
        if (al === 1)
            Z.children = _;
        else if (1 < al) {
            for (var Gl = Array(al), Sl = 0; Sl < al; Sl++)
                Gl[Sl] = arguments[Sl + 2];
            Z.children = Gl
        }
        if (d && d.defaultProps)
            for (C in al = d.defaultProps,
            al)
                Z[C] === void 0 && (Z[C] = al[C]);
        return At(d, J, Z)
    }
    ,
    L.createRef = function() {
        return {
            current: null
        }
    }
    ,
    L.forwardRef = function(d) {
        return {
            $$typeof: ol,
            render: d
        }
    }
    ,
    L.isValidElement = Mt,
    L.lazy = function(d) {
        return {
            $$typeof: R,
            _payload: {
                _status: -1,
                _result: d
            },
            _init: G
        }
    }
    ,
    L.memo = function(d, N) {
        return {
            $$typeof: E,
            type: d,
            compare: N === void 0 ? null : N
        }
    }
    ,
    L.startTransition = function(d) {
        var N = I.T
          , _ = {};
        I.T = _;
        try {
            var C = d()
              , Z = I.S;
            Z !== null && Z(_, C),
            typeof C == "object" && C !== null && typeof C.then == "function" && C.then(Ql, il)
        } catch (J) {
            il(J)
        } finally {
            N !== null && _.types !== null && (N.types = _.types),
            I.T = N
        }
    }
    ,
    L.unstable_useCacheRefresh = function() {
        return I.H.useCacheRefresh()
    }
    ,
    L.use = function(d) {
        return I.H.use(d)
    }
    ,
    L.useActionState = function(d, N, _) {
        return I.H.useActionState(d, N, _)
    }
    ,
    L.useCallback = function(d, N) {
        return I.H.useCallback(d, N)
    }
    ,
    L.useContext = function(d) {
        return I.H.useContext(d)
    }
    ,
    L.useDebugValue = function() {}
    ,
    L.useDeferredValue = function(d, N) {
        return I.H.useDeferredValue(d, N)
    }
    ,
    L.useEffect = function(d, N) {
        return I.H.useEffect(d, N)
    }
    ,
    L.useEffectEvent = function(d) {
        return I.H.useEffectEvent(d)
    }
    ,
    L.useId = function() {
        return I.H.useId()
    }
    ,
    L.useImperativeHandle = function(d, N, _) {
        return I.H.useImperativeHandle(d, N, _)
    }
    ,
    L.useInsertionEffect = function(d, N) {
        return I.H.useInsertionEffect(d, N)
    }
    ,
    L.useLayoutEffect = function(d, N) {
        return I.H.useLayoutEffect(d, N)
    }
    ,
    L.useMemo = function(d, N) {
        return I.H.useMemo(d, N)
    }
    ,
    L.useOptimistic = function(d, N) {
        return I.H.useOptimistic(d, N)
    }
    ,
    L.useReducer = function(d, N, _) {
        return I.H.useReducer(d, N, _)
    }
    ,
    L.useRef = function(d) {
        return I.H.useRef(d)
    }
    ,
    L.useState = function(d) {
        return I.H.useState(d)
    }
    ,
    L.useSyncExternalStore = function(d, N, _) {
        return I.H.useSyncExternalStore(d, N, _)
    }
    ,
    L.useTransition = function() {
        return I.H.useTransition()
    }
    ,
    L.version = "19.2.8",
    L
}
var Td;
function vf() {
    return Td || (Td = 1,
    sf.exports = ih()),
    sf.exports
}
var vl = vf()
  , of = {
    exports: {}
}
  , zu = {}
  , rf = {
    exports: {}
}
  , df = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ed;
function ch() {
    return Ed || (Ed = 1,
    (function(g) {
        function T(S, M) {
            var G = S.length;
            S.push(M);
            l: for (; 0 < G; ) {
                var il = G - 1 >>> 1
                  , rl = S[il];
                if (0 < q(rl, M))
                    S[il] = M,
                    S[G] = rl,
                    G = il;
                else
                    break l
            }
        }
        function A(S) {
            return S.length === 0 ? null : S[0]
        }
        function o(S) {
            if (S.length === 0)
                return null;
            var M = S[0]
              , G = S.pop();
            if (G !== M) {
                S[0] = G;
                l: for (var il = 0, rl = S.length, d = rl >>> 1; il < d; ) {
                    var N = 2 * (il + 1) - 1
                      , _ = S[N]
                      , C = N + 1
                      , Z = S[C];
                    if (0 > q(_, G))
                        C < rl && 0 > q(Z, _) ? (S[il] = Z,
                        S[C] = G,
                        il = C) : (S[il] = _,
                        S[N] = G,
                        il = N);
                    else if (C < rl && 0 > q(Z, G))
                        S[il] = Z,
                        S[C] = G,
                        il = C;
                    else
                        break l
                }
            }
            return M
        }
        function q(S, M) {
            var G = S.sortIndex - M.sortIndex;
            return G !== 0 ? G : S.id - M.id
        }
        if (g.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var U = performance;
            g.unstable_now = function() {
                return U.now()
            }
        } else {
            var X = Date
              , ol = X.now();
            g.unstable_now = function() {
                return X.now() - ol
            }
        }
        var j = []
          , E = []
          , R = 1
          , D = null
          , K = 3
          , Q = !1
          , gl = !1
          , Ol = !1
          , xt = !1
          , Yl = typeof setTimeout == "function" ? setTimeout : null
          , Et = typeof clearTimeout == "function" ? clearTimeout : null
          , ql = typeof setImmediate < "u" ? setImmediate : null;
        function ft(S) {
            for (var M = A(E); M !== null; ) {
                if (M.callback === null)
                    o(E);
                else if (M.startTime <= S)
                    o(E),
                    M.sortIndex = M.expirationTime,
                    T(j, M);
                else
                    break;
                M = A(E)
            }
        }
        function Nt(S) {
            if (Ol = !1,
            ft(S),
            !gl)
                if (A(j) !== null)
                    gl = !0,
                    Ql || (Ql = !0,
                    Zl());
                else {
                    var M = A(E);
                    M !== null && St(Nt, M.startTime - S)
                }
        }
        var Ql = !1
          , I = -1
          , Ll = 5
          , At = -1;
        function Ze() {
            return xt ? !0 : !(g.unstable_now() - At < Ll)
        }
        function Mt() {
            if (xt = !1,
            Ql) {
                var S = g.unstable_now();
                At = S;
                var M = !0;
                try {
                    l: {
                        gl = !1,
                        Ol && (Ol = !1,
                        Et(I),
                        I = -1),
                        Q = !0;
                        var G = K;
                        try {
                            t: {
                                for (ft(S),
                                D = A(j); D !== null && !(D.expirationTime > S && Ze()); ) {
                                    var il = D.callback;
                                    if (typeof il == "function") {
                                        D.callback = null,
                                        K = D.priorityLevel;
                                        var rl = il(D.expirationTime <= S);
                                        if (S = g.unstable_now(),
                                        typeof rl == "function") {
                                            D.callback = rl,
                                            ft(S),
                                            M = !0;
                                            break t
                                        }
                                        D === A(j) && o(j),
                                        ft(S)
                                    } else
                                        o(j);
                                    D = A(j)
                                }
                                if (D !== null)
                                    M = !0;
                                else {
                                    var d = A(E);
                                    d !== null && St(Nt, d.startTime - S),
                                    M = !1
                                }
                            }
                            break l
                        } finally {
                            D = null,
                            K = G,
                            Q = !1
                        }
                        M = void 0
                    }
                } finally {
                    M ? Zl() : Ql = !1
                }
            }
        }
        var Zl;
        if (typeof ql == "function")
            Zl = function() {
                ql(Mt)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var ze = new MessageChannel
              , Ct = ze.port2;
            ze.port1.onmessage = Mt,
            Zl = function() {
                Ct.postMessage(null)
            }
        } else
            Zl = function() {
                Yl(Mt, 0)
            }
            ;
        function St(S, M) {
            I = Yl(function() {
                S(g.unstable_now())
            }, M)
        }
        g.unstable_IdlePriority = 5,
        g.unstable_ImmediatePriority = 1,
        g.unstable_LowPriority = 4,
        g.unstable_NormalPriority = 3,
        g.unstable_Profiling = null,
        g.unstable_UserBlockingPriority = 2,
        g.unstable_cancelCallback = function(S) {
            S.callback = null
        }
        ,
        g.unstable_forceFrameRate = function(S) {
            0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ll = 0 < S ? Math.floor(1e3 / S) : 5
        }
        ,
        g.unstable_getCurrentPriorityLevel = function() {
            return K
        }
        ,
        g.unstable_next = function(S) {
            switch (K) {
            case 1:
            case 2:
            case 3:
                var M = 3;
                break;
            default:
                M = K
            }
            var G = K;
            K = M;
            try {
                return S()
            } finally {
                K = G
            }
        }
        ,
        g.unstable_requestPaint = function() {
            xt = !0
        }
        ,
        g.unstable_runWithPriority = function(S, M) {
            switch (S) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                S = 3
            }
            var G = K;
            K = S;
            try {
                return M()
            } finally {
                K = G
            }
        }
        ,
        g.unstable_scheduleCallback = function(S, M, G) {
            var il = g.unstable_now();
            switch (typeof G == "object" && G !== null ? (G = G.delay,
            G = typeof G == "number" && 0 < G ? il + G : il) : G = il,
            S) {
            case 1:
                var rl = -1;
                break;
            case 2:
                rl = 250;
                break;
            case 5:
                rl = 1073741823;
                break;
            case 4:
                rl = 1e4;
                break;
            default:
                rl = 5e3
            }
            return rl = G + rl,
            S = {
                id: R++,
                callback: M,
                priorityLevel: S,
                startTime: G,
                expirationTime: rl,
                sortIndex: -1
            },
            G > il ? (S.sortIndex = G,
            T(E, S),
            A(j) === null && S === A(E) && (Ol ? (Et(I),
            I = -1) : Ol = !0,
            St(Nt, G - il))) : (S.sortIndex = rl,
            T(j, S),
            gl || Q || (gl = !0,
            Ql || (Ql = !0,
            Zl()))),
            S
        }
        ,
        g.unstable_shouldYield = Ze,
        g.unstable_wrapCallback = function(S) {
            var M = K;
            return function() {
                var G = K;
                K = M;
                try {
                    return S.apply(this, arguments)
                } finally {
                    K = G
                }
            }
        }
    }
    )(df)),
    df
}
var Nd;
function fh() {
    return Nd || (Nd = 1,
    rf.exports = ch()),
    rf.exports
}
var mf = {
    exports: {}
}
  , Bl = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function sh() {
    if (Ad)
        return Bl;
    Ad = 1;
    var g = vf();
    function T(j) {
        var E = "https://react.dev/errors/" + j;
        if (1 < arguments.length) {
            E += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var R = 2; R < arguments.length; R++)
                E += "&args[]=" + encodeURIComponent(arguments[R])
        }
        return "Minified React error #" + j + "; visit " + E + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function A() {}
    var o = {
        d: {
            f: A,
            r: function() {
                throw Error(T(522))
            },
            D: A,
            C: A,
            L: A,
            m: A,
            X: A,
            S: A,
            M: A
        },
        p: 0,
        findDOMNode: null
    }
      , q = Symbol.for("react.portal");
    function U(j, E, R) {
        var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: q,
            key: D == null ? null : "" + D,
            children: j,
            containerInfo: E,
            implementation: R
        }
    }
    var X = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function ol(j, E) {
        if (j === "font")
            return "";
        if (typeof E == "string")
            return E === "use-credentials" ? E : ""
    }
    return Bl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o,
    Bl.createPortal = function(j, E) {
        var R = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!E || E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11)
            throw Error(T(299));
        return U(j, E, null, R)
    }
    ,
    Bl.flushSync = function(j) {
        var E = X.T
          , R = o.p;
        try {
            if (X.T = null,
            o.p = 2,
            j)
                return j()
        } finally {
            X.T = E,
            o.p = R,
            o.d.f()
        }
    }
    ,
    Bl.preconnect = function(j, E) {
        typeof j == "string" && (E ? (E = E.crossOrigin,
        E = typeof E == "string" ? E === "use-credentials" ? E : "" : void 0) : E = null,
        o.d.C(j, E))
    }
    ,
    Bl.prefetchDNS = function(j) {
        typeof j == "string" && o.d.D(j)
    }
    ,
    Bl.preinit = function(j, E) {
        if (typeof j == "string" && E && typeof E.as == "string") {
            var R = E.as
              , D = ol(R, E.crossOrigin)
              , K = typeof E.integrity == "string" ? E.integrity : void 0
              , Q = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
            R === "style" ? o.d.S(j, typeof E.precedence == "string" ? E.precedence : void 0, {
                crossOrigin: D,
                integrity: K,
                fetchPriority: Q
            }) : R === "script" && o.d.X(j, {
                crossOrigin: D,
                integrity: K,
                fetchPriority: Q,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0
            })
        }
    }
    ,
    Bl.preinitModule = function(j, E) {
        if (typeof j == "string")
            if (typeof E == "object" && E !== null) {
                if (E.as == null || E.as === "script") {
                    var R = ol(E.as, E.crossOrigin);
                    o.d.M(j, {
                        crossOrigin: R,
                        integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                        nonce: typeof E.nonce == "string" ? E.nonce : void 0
                    })
                }
            } else
                E == null && o.d.M(j)
    }
    ,
    Bl.preload = function(j, E) {
        if (typeof j == "string" && typeof E == "object" && E !== null && typeof E.as == "string") {
            var R = E.as
              , D = ol(R, E.crossOrigin);
            o.d.L(j, R, {
                crossOrigin: D,
                integrity: typeof E.integrity == "string" ? E.integrity : void 0,
                nonce: typeof E.nonce == "string" ? E.nonce : void 0,
                type: typeof E.type == "string" ? E.type : void 0,
                fetchPriority: typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
                referrerPolicy: typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
                imageSrcSet: typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
                imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
                media: typeof E.media == "string" ? E.media : void 0
            })
        }
    }
    ,
    Bl.preloadModule = function(j, E) {
        if (typeof j == "string")
            if (E) {
                var R = ol(E.as, E.crossOrigin);
                o.d.m(j, {
                    as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
                    crossOrigin: R,
                    integrity: typeof E.integrity == "string" ? E.integrity : void 0
                })
            } else
                o.d.m(j)
    }
    ,
    Bl.requestFormReset = function(j) {
        o.d.r(j)
    }
    ,
    Bl.unstable_batchedUpdates = function(j, E) {
        return j(E)
    }
    ,
    Bl.useFormState = function(j, E, R) {
        return X.H.useFormState(j, E, R)
    }
    ,
    Bl.useFormStatus = function() {
        return X.H.useHostTransitionStatus()
    }
    ,
    Bl.version = "19.2.8",
    Bl
}
var Md;
function oh() {
    if (Md)
        return mf.exports;
    Md = 1;
    function g() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)
            } catch (T) {
                console.error(T)
            }
    }
    return g(),
    mf.exports = sh(),
    mf.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _d;
function rh() {
    if (_d)
        return zu;
    _d = 1;
    var g = fh()
      , T = vf()
      , A = oh();
    function o(l) {
        var t = "https://react.dev/errors/" + l;
        if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var e = 2; e < arguments.length; e++)
                t += "&args[]=" + encodeURIComponent(arguments[e])
        }
        return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function q(l) {
        return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11)
    }
    function U(l) {
        var t = l
          , e = l;
        if (l.alternate)
            for (; t.return; )
                t = t.return;
        else {
            l = t;
            do
                t = l,
                (t.flags & 4098) !== 0 && (e = t.return),
                l = t.return;
            while (l)
        }
        return t.tag === 3 ? e : null
    }
    function X(l) {
        if (l.tag === 13) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function ol(l) {
        if (l.tag === 31) {
            var t = l.memoizedState;
            if (t === null && (l = l.alternate,
            l !== null && (t = l.memoizedState)),
            t !== null)
                return t.dehydrated
        }
        return null
    }
    function j(l) {
        if (U(l) !== l)
            throw Error(o(188))
    }
    function E(l) {
        var t = l.alternate;
        if (!t) {
            if (t = U(l),
            t === null)
                throw Error(o(188));
            return t !== l ? null : l
        }
        for (var e = l, a = t; ; ) {
            var u = e.return;
            if (u === null)
                break;
            var n = u.alternate;
            if (n === null) {
                if (a = u.return,
                a !== null) {
                    e = a;
                    continue
                }
                break
            }
            if (u.child === n.child) {
                for (n = u.child; n; ) {
                    if (n === e)
                        return j(u),
                        l;
                    if (n === a)
                        return j(u),
                        t;
                    n = n.sibling
                }
                throw Error(o(188))
            }
            if (e.return !== a.return)
                e = u,
                a = n;
            else {
                for (var i = !1, c = u.child; c; ) {
                    if (c === e) {
                        i = !0,
                        e = u,
                        a = n;
                        break
                    }
                    if (c === a) {
                        i = !0,
                        a = u,
                        e = n;
                        break
                    }
                    c = c.sibling
                }
                if (!i) {
                    for (c = n.child; c; ) {
                        if (c === e) {
                            i = !0,
                            e = n,
                            a = u;
                            break
                        }
                        if (c === a) {
                            i = !0,
                            a = n,
                            e = u;
                            break
                        }
                        c = c.sibling
                    }
                    if (!i)
                        throw Error(o(189))
                }
            }
            if (e.alternate !== a)
                throw Error(o(190))
        }
        if (e.tag !== 3)
            throw Error(o(188));
        return e.stateNode.current === e ? l : t
    }
    function R(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l;
        for (l = l.child; l !== null; ) {
            if (t = R(l),
            t !== null)
                return t;
            l = l.sibling
        }
        return null
    }
    var D = Object.assign
      , K = Symbol.for("react.element")
      , Q = Symbol.for("react.transitional.element")
      , gl = Symbol.for("react.portal")
      , Ol = Symbol.for("react.fragment")
      , xt = Symbol.for("react.strict_mode")
      , Yl = Symbol.for("react.profiler")
      , Et = Symbol.for("react.consumer")
      , ql = Symbol.for("react.context")
      , ft = Symbol.for("react.forward_ref")
      , Nt = Symbol.for("react.suspense")
      , Ql = Symbol.for("react.suspense_list")
      , I = Symbol.for("react.memo")
      , Ll = Symbol.for("react.lazy")
      , At = Symbol.for("react.activity")
      , Ze = Symbol.for("react.memo_cache_sentinel")
      , Mt = Symbol.iterator;
    function Zl(l) {
        return l === null || typeof l != "object" ? null : (l = Mt && l[Mt] || l["@@iterator"],
        typeof l == "function" ? l : null)
    }
    var ze = Symbol.for("react.client.reference");
    function Ct(l) {
        if (l == null)
            return null;
        if (typeof l == "function")
            return l.$$typeof === ze ? null : l.displayName || l.name || null;
        if (typeof l == "string")
            return l;
        switch (l) {
        case Ol:
            return "Fragment";
        case Yl:
            return "Profiler";
        case xt:
            return "StrictMode";
        case Nt:
            return "Suspense";
        case Ql:
            return "SuspenseList";
        case At:
            return "Activity"
        }
        if (typeof l == "object")
            switch (l.$$typeof) {
            case gl:
                return "Portal";
            case ql:
                return l.displayName || "Context";
            case Et:
                return (l._context.displayName || "Context") + ".Consumer";
            case ft:
                var t = l.render;
                return l = l.displayName,
                l || (l = t.displayName || t.name || "",
                l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"),
                l;
            case I:
                return t = l.displayName || null,
                t !== null ? t : Ct(l.type) || "Memo";
            case Ll:
                t = l._payload,
                l = l._init;
                try {
                    return Ct(l(t))
                } catch {}
            }
        return null
    }
    var St = Array.isArray
      , S = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , M = A.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , G = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , il = []
      , rl = -1;
    function d(l) {
        return {
            current: l
        }
    }
    function N(l) {
        0 > rl || (l.current = il[rl],
        il[rl] = null,
        rl--)
    }
    function _(l, t) {
        rl++,
        il[rl] = l.current,
        l.current = t
    }
    var C = d(null)
      , Z = d(null)
      , J = d(null)
      , al = d(null);
    function Gl(l, t) {
        switch (_(J, t),
        _(Z, l),
        _(C, null),
        t.nodeType) {
        case 9:
        case 11:
            l = (l = t.documentElement) && (l = l.namespaceURI) ? Zr(l) : 0;
            break;
        default:
            if (l = t.tagName,
            t = t.namespaceURI)
                t = Zr(t),
                l = Vr(t, l);
            else
                switch (l) {
                case "svg":
                    l = 1;
                    break;
                case "math":
                    l = 2;
                    break;
                default:
                    l = 0
                }
        }
        N(C),
        _(C, l)
    }
    function Sl() {
        N(C),
        N(Z),
        N(J)
    }
    function _a(l) {
        l.memoizedState !== null && _(al, l);
        var t = C.current
          , e = Vr(t, l.type);
        t !== e && (_(Z, l),
        _(C, e))
    }
    function Tu(l) {
        Z.current === l && (N(C),
        N(Z)),
        al.current === l && (N(al),
        gu._currentValue = G)
    }
    var Zn, bf;
    function Te(l) {
        if (Zn === void 0)
            try {
                throw Error()
            } catch (e) {
                var t = e.stack.trim().match(/\n( *(at )?)/);
                Zn = t && t[1] || "",
                bf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + Zn + l + bf
    }
    var Vn = !1;
    function wn(l, t) {
        if (!l || Vn)
            return "";
        Vn = !0;
        var e = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var a = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (t) {
                            var z = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(z.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(z, [])
                                } catch (b) {
                                    var y = b
                                }
                                Reflect.construct(l, [], z)
                            } else {
                                try {
                                    z.call()
                                } catch (b) {
                                    y = b
                                }
                                l.call(z.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (b) {
                                y = b
                            }
                            (z = l()) && typeof z.catch == "function" && z.catch(function() {})
                        }
                    } catch (b) {
                        if (b && y && typeof b.stack == "string")
                            return [b.stack, y.stack]
                    }
                    return [null, null]
                }
            };
            a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
            u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var n = a.DetermineComponentFrameRoot()
              , i = n[0]
              , c = n[1];
            if (i && c) {
                var f = i.split(`
`)
                  , v = c.split(`
`);
                for (u = a = 0; a < f.length && !f[a].includes("DetermineComponentFrameRoot"); )
                    a++;
                for (; u < v.length && !v[u].includes("DetermineComponentFrameRoot"); )
                    u++;
                if (a === f.length || u === v.length)
                    for (a = f.length - 1,
                    u = v.length - 1; 1 <= a && 0 <= u && f[a] !== v[u]; )
                        u--;
                for (; 1 <= a && 0 <= u; a--,
                u--)
                    if (f[a] !== v[u]) {
                        if (a !== 1 || u !== 1)
                            do
                                if (a--,
                                u--,
                                0 > u || f[a] !== v[u]) {
                                    var x = `
` + f[a].replace(" at new ", " at ");
                                    return l.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", l.displayName)),
                                    x
                                }
                            while (1 <= a && 0 <= u);
                        break
                    }
            }
        } finally {
            Vn = !1,
            Error.prepareStackTrace = e
        }
        return (e = l ? l.displayName || l.name : "") ? Te(e) : ""
    }
    function Rd(l, t) {
        switch (l.tag) {
        case 26:
        case 27:
        case 5:
            return Te(l.type);
        case 16:
            return Te("Lazy");
        case 13:
            return l.child !== t && t !== null ? Te("Suspense Fallback") : Te("Suspense");
        case 19:
            return Te("SuspenseList");
        case 0:
        case 15:
            return wn(l.type, !1);
        case 11:
            return wn(l.type.render, !1);
        case 1:
            return wn(l.type, !0);
        case 31:
            return Te("Activity");
        default:
            return ""
        }
    }
    function xf(l) {
        try {
            var t = ""
              , e = null;
            do
                t += Rd(l, e),
                e = l,
                l = l.return;
            while (l);
            return t
        } catch (a) {
            return `
Error generating stack: ` + a.message + `
` + a.stack
        }
    }
    var Kn = Object.prototype.hasOwnProperty
      , Jn = g.unstable_scheduleCallback
      , $n = g.unstable_cancelCallback
      , qd = g.unstable_shouldYield
      , Bd = g.unstable_requestPaint
      , Il = g.unstable_now
      , Yd = g.unstable_getCurrentPriorityLevel
      , Sf = g.unstable_ImmediatePriority
      , pf = g.unstable_UserBlockingPriority
      , Eu = g.unstable_NormalPriority
      , Gd = g.unstable_LowPriority
      , zf = g.unstable_IdlePriority
      , Xd = g.log
      , Qd = g.unstable_setDisableYieldValue
      , ja = null
      , Pl = null;
    function Ft(l) {
        if (typeof Xd == "function" && Qd(l),
        Pl && typeof Pl.setStrictMode == "function")
            try {
                Pl.setStrictMode(ja, l)
            } catch {}
    }
    var lt = Math.clz32 ? Math.clz32 : Vd
      , Ld = Math.log
      , Zd = Math.LN2;
    function Vd(l) {
        return l >>>= 0,
        l === 0 ? 32 : 31 - (Ld(l) / Zd | 0) | 0
    }
    var Nu = 256
      , Au = 262144
      , Mu = 4194304;
    function Ee(l) {
        var t = l & 42;
        if (t !== 0)
            return t;
        switch (l & -l) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return l & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return l
        }
    }
    function _u(l, t, e) {
        var a = l.pendingLanes;
        if (a === 0)
            return 0;
        var u = 0
          , n = l.suspendedLanes
          , i = l.pingedLanes;
        l = l.warmLanes;
        var c = a & 134217727;
        return c !== 0 ? (a = c & ~n,
        a !== 0 ? u = Ee(a) : (i &= c,
        i !== 0 ? u = Ee(i) : e || (e = c & ~l,
        e !== 0 && (u = Ee(e))))) : (c = a & ~n,
        c !== 0 ? u = Ee(c) : i !== 0 ? u = Ee(i) : e || (e = a & ~l,
        e !== 0 && (u = Ee(e)))),
        u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u,
        e = t & -t,
        n >= e || n === 32 && (e & 4194048) !== 0) ? t : u
    }
    function Oa(l, t) {
        return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0
    }
    function wd(l, t) {
        switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function Tf() {
        var l = Mu;
        return Mu <<= 1,
        (Mu & 62914560) === 0 && (Mu = 4194304),
        l
    }
    function kn(l) {
        for (var t = [], e = 0; 31 > e; e++)
            t.push(l);
        return t
    }
    function Da(l, t) {
        l.pendingLanes |= t,
        t !== 268435456 && (l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0)
    }
    function Kd(l, t, e, a, u, n) {
        var i = l.pendingLanes;
        l.pendingLanes = e,
        l.suspendedLanes = 0,
        l.pingedLanes = 0,
        l.warmLanes = 0,
        l.expiredLanes &= e,
        l.entangledLanes &= e,
        l.errorRecoveryDisabledLanes &= e,
        l.shellSuspendCounter = 0;
        var c = l.entanglements
          , f = l.expirationTimes
          , v = l.hiddenUpdates;
        for (e = i & ~e; 0 < e; ) {
            var x = 31 - lt(e)
              , z = 1 << x;
            c[x] = 0,
            f[x] = -1;
            var y = v[x];
            if (y !== null)
                for (v[x] = null,
                x = 0; x < y.length; x++) {
                    var b = y[x];
                    b !== null && (b.lane &= -536870913)
                }
            e &= ~z
        }
        a !== 0 && Ef(l, a, 0),
        n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t))
    }
    function Ef(l, t, e) {
        l.pendingLanes |= t,
        l.suspendedLanes &= ~t;
        var a = 31 - lt(t);
        l.entangledLanes |= t,
        l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930
    }
    function Nf(l, t) {
        var e = l.entangledLanes |= t;
        for (l = l.entanglements; e; ) {
            var a = 31 - lt(e)
              , u = 1 << a;
            u & t | l[a] & t && (l[a] |= t),
            e &= ~u
        }
    }
    function Af(l, t) {
        var e = t & -t;
        return e = (e & 42) !== 0 ? 1 : Wn(e),
        (e & (l.suspendedLanes | t)) !== 0 ? 0 : e
    }
    function Wn(l) {
        switch (l) {
        case 2:
            l = 1;
            break;
        case 8:
            l = 4;
            break;
        case 32:
            l = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            l = 128;
            break;
        case 268435456:
            l = 134217728;
            break;
        default:
            l = 0
        }
        return l
    }
    function Fn(l) {
        return l &= -l,
        2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function Mf() {
        var l = M.p;
        return l !== 0 ? l : (l = window.event,
        l === void 0 ? 32 : md(l.type))
    }
    function _f(l, t) {
        var e = M.p;
        try {
            return M.p = l,
            t()
        } finally {
            M.p = e
        }
    }
    var It = Math.random().toString(36).slice(2)
      , Dl = "__reactFiber$" + It
      , Vl = "__reactProps$" + It
      , Ve = "__reactContainer$" + It
      , In = "__reactEvents$" + It
      , Jd = "__reactListeners$" + It
      , $d = "__reactHandles$" + It
      , jf = "__reactResources$" + It
      , Ca = "__reactMarker$" + It;
    function Pn(l) {
        delete l[Dl],
        delete l[Vl],
        delete l[In],
        delete l[Jd],
        delete l[$d]
    }
    function we(l) {
        var t = l[Dl];
        if (t)
            return t;
        for (var e = l.parentNode; e; ) {
            if (t = e[Ve] || e[Dl]) {
                if (e = t.alternate,
                t.child !== null || e !== null && e.child !== null)
                    for (l = Fr(l); l !== null; ) {
                        if (e = l[Dl])
                            return e;
                        l = Fr(l)
                    }
                return t
            }
            l = e,
            e = l.parentNode
        }
        return null
    }
    function Ke(l) {
        if (l = l[Dl] || l[Ve]) {
            var t = l.tag;
            if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
                return l
        }
        return null
    }
    function Ua(l) {
        var t = l.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6)
            return l.stateNode;
        throw Error(o(33))
    }
    function Je(l) {
        var t = l[jf];
        return t || (t = l[jf] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        t
    }
    function _l(l) {
        l[Ca] = !0
    }
    var Of = new Set
      , Df = {};
    function Ne(l, t) {
        $e(l, t),
        $e(l + "Capture", t)
    }
    function $e(l, t) {
        for (Df[l] = t,
        l = 0; l < t.length; l++)
            Of.add(t[l])
    }
    var kd = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , Cf = {}
      , Uf = {};
    function Wd(l) {
        return Kn.call(Uf, l) ? !0 : Kn.call(Cf, l) ? !1 : kd.test(l) ? Uf[l] = !0 : (Cf[l] = !0,
        !1)
    }
    function ju(l, t, e) {
        if (Wd(t))
            if (e === null)
                l.removeAttribute(t);
            else {
                switch (typeof e) {
                case "undefined":
                case "function":
                case "symbol":
                    l.removeAttribute(t);
                    return;
                case "boolean":
                    var a = t.toLowerCase().slice(0, 5);
                    if (a !== "data-" && a !== "aria-") {
                        l.removeAttribute(t);
                        return
                    }
                }
                l.setAttribute(t, "" + e)
            }
    }
    function Ou(l, t, e) {
        if (e === null)
            l.removeAttribute(t);
        else {
            switch (typeof e) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(t);
                return
            }
            l.setAttribute(t, "" + e)
        }
    }
    function Ut(l, t, e, a) {
        if (a === null)
            l.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                l.removeAttribute(e);
                return
            }
            l.setAttributeNS(t, e, "" + a)
        }
    }
    function st(l) {
        switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return l;
        case "object":
            return l;
        default:
            return ""
        }
    }
    function Hf(l) {
        var t = l.type;
        return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
    }
    function Fd(l, t, e) {
        var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
        if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
            var u = a.get
              , n = a.set;
            return Object.defineProperty(l, t, {
                configurable: !0,
                get: function() {
                    return u.call(this)
                },
                set: function(i) {
                    e = "" + i,
                    n.call(this, i)
                }
            }),
            Object.defineProperty(l, t, {
                enumerable: a.enumerable
            }),
            {
                getValue: function() {
                    return e
                },
                setValue: function(i) {
                    e = "" + i
                },
                stopTracking: function() {
                    l._valueTracker = null,
                    delete l[t]
                }
            }
        }
    }
    function li(l) {
        if (!l._valueTracker) {
            var t = Hf(l) ? "checked" : "value";
            l._valueTracker = Fd(l, t, "" + l[t])
        }
    }
    function Rf(l) {
        if (!l)
            return !1;
        var t = l._valueTracker;
        if (!t)
            return !0;
        var e = t.getValue()
          , a = "";
        return l && (a = Hf(l) ? l.checked ? "true" : "false" : l.value),
        l = a,
        l !== e ? (t.setValue(l),
        !0) : !1
    }
    function Du(l) {
        if (l = l || (typeof document < "u" ? document : void 0),
        typeof l > "u")
            return null;
        try {
            return l.activeElement || l.body
        } catch {
            return l.body
        }
    }
    var Id = /[\n"\\]/g;
    function ot(l) {
        return l.replace(Id, function(t) {
            return "\\" + t.charCodeAt(0).toString(16) + " "
        })
    }
    function ti(l, t, e, a, u, n, i, c) {
        l.name = "",
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"),
        t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + st(t)) : l.value !== "" + st(t) && (l.value = "" + st(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"),
        t != null ? ei(l, i, st(t)) : e != null ? ei(l, i, st(e)) : a != null && l.removeAttribute("value"),
        u == null && n != null && (l.defaultChecked = !!n),
        u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"),
        c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + st(c) : l.removeAttribute("name")
    }
    function qf(l, t, e, a, u, n, i, c) {
        if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n),
        t != null || e != null) {
            if (!(n !== "submit" && n !== "reset" || t != null)) {
                li(l);
                return
            }
            e = e != null ? "" + st(e) : "",
            t = t != null ? "" + st(t) : e,
            c || t === l.value || (l.value = t),
            l.defaultValue = t
        }
        a = a ?? u,
        a = typeof a != "function" && typeof a != "symbol" && !!a,
        l.checked = c ? l.checked : !!a,
        l.defaultChecked = !!a,
        i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i),
        li(l)
    }
    function ei(l, t, e) {
        t === "number" && Du(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e)
    }
    function ke(l, t, e, a) {
        if (l = l.options,
        t) {
            t = {};
            for (var u = 0; u < e.length; u++)
                t["$" + e[u]] = !0;
            for (e = 0; e < l.length; e++)
                u = t.hasOwnProperty("$" + l[e].value),
                l[e].selected !== u && (l[e].selected = u),
                u && a && (l[e].defaultSelected = !0)
        } else {
            for (e = "" + st(e),
            t = null,
            u = 0; u < l.length; u++) {
                if (l[u].value === e) {
                    l[u].selected = !0,
                    a && (l[u].defaultSelected = !0);
                    return
                }
                t !== null || l[u].disabled || (t = l[u])
            }
            t !== null && (t.selected = !0)
        }
    }
    function Bf(l, t, e) {
        if (t != null && (t = "" + st(t),
        t !== l.value && (l.value = t),
        e == null)) {
            l.defaultValue !== t && (l.defaultValue = t);
            return
        }
        l.defaultValue = e != null ? "" + st(e) : ""
    }
    function Yf(l, t, e, a) {
        if (t == null) {
            if (a != null) {
                if (e != null)
                    throw Error(o(92));
                if (St(a)) {
                    if (1 < a.length)
                        throw Error(o(93));
                    a = a[0]
                }
                e = a
            }
            e == null && (e = ""),
            t = e
        }
        e = st(t),
        l.defaultValue = e,
        a = l.textContent,
        a === e && a !== "" && a !== null && (l.value = a),
        li(l)
    }
    function We(l, t) {
        if (t) {
            var e = l.firstChild;
            if (e && e === l.lastChild && e.nodeType === 3) {
                e.nodeValue = t;
                return
            }
        }
        l.textContent = t
    }
    var Pd = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function Gf(l, t, e) {
        var a = t.indexOf("--") === 0;
        e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Pd.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px"
    }
    function Xf(l, t, e) {
        if (t != null && typeof t != "object")
            throw Error(o(62));
        if (l = l.style,
        e != null) {
            for (var a in e)
                !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
            for (var u in t)
                a = t[u],
                t.hasOwnProperty(u) && e[u] !== a && Gf(l, u, a)
        } else
            for (var n in t)
                t.hasOwnProperty(n) && Gf(l, n, t[n])
    }
    function ai(l) {
        if (l.indexOf("-") === -1)
            return !1;
        switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var l0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , t0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Cu(l) {
        return t0.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l
    }
    function Ht() {}
    var ui = null;
    function ni(l) {
        return l = l.target || l.srcElement || window,
        l.correspondingUseElement && (l = l.correspondingUseElement),
        l.nodeType === 3 ? l.parentNode : l
    }
    var Fe = null
      , Ie = null;
    function Qf(l) {
        var t = Ke(l);
        if (t && (l = t.stateNode)) {
            var e = l[Vl] || null;
            l: switch (l = t.stateNode,
            t.type) {
            case "input":
                if (ti(l, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name),
                t = e.name,
                e.type === "radio" && t != null) {
                    for (e = l; e.parentNode; )
                        e = e.parentNode;
                    for (e = e.querySelectorAll('input[name="' + ot("" + t) + '"][type="radio"]'),
                    t = 0; t < e.length; t++) {
                        var a = e[t];
                        if (a !== l && a.form === l.form) {
                            var u = a[Vl] || null;
                            if (!u)
                                throw Error(o(90));
                            ti(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
                        }
                    }
                    for (t = 0; t < e.length; t++)
                        a = e[t],
                        a.form === l.form && Rf(a)
                }
                break l;
            case "textarea":
                Bf(l, e.value, e.defaultValue);
                break l;
            case "select":
                t = e.value,
                t != null && ke(l, !!e.multiple, t, !1)
            }
        }
    }
    var ii = !1;
    function Lf(l, t, e) {
        if (ii)
            return l(t, e);
        ii = !0;
        try {
            var a = l(t);
            return a
        } finally {
            if (ii = !1,
            (Fe !== null || Ie !== null) && (Sn(),
            Fe && (t = Fe,
            l = Ie,
            Ie = Fe = null,
            Qf(t),
            l)))
                for (t = 0; t < l.length; t++)
                    Qf(l[t])
        }
    }
    function Ha(l, t) {
        var e = l.stateNode;
        if (e === null)
            return null;
        var a = e[Vl] || null;
        if (a === null)
            return null;
        e = a[t];
        l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (a = !a.disabled) || (l = l.type,
            a = !(l === "button" || l === "input" || l === "select" || l === "textarea")),
            l = !a;
            break l;
        default:
            l = !1
        }
        if (l)
            return null;
        if (e && typeof e != "function")
            throw Error(o(231, t, typeof e));
        return e
    }
    var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , ci = !1;
    if (Rt)
        try {
            var Ra = {};
            Object.defineProperty(Ra, "passive", {
                get: function() {
                    ci = !0
                }
            }),
            window.addEventListener("test", Ra, Ra),
            window.removeEventListener("test", Ra, Ra)
        } catch {
            ci = !1
        }
    var Pt = null
      , fi = null
      , Uu = null;
    function Zf() {
        if (Uu)
            return Uu;
        var l, t = fi, e = t.length, a, u = "value" in Pt ? Pt.value : Pt.textContent, n = u.length;
        for (l = 0; l < e && t[l] === u[l]; l++)
            ;
        var i = e - l;
        for (a = 1; a <= i && t[e - a] === u[n - a]; a++)
            ;
        return Uu = u.slice(l, 1 < a ? 1 - a : void 0)
    }
    function Hu(l) {
        var t = l.keyCode;
        return "charCode" in l ? (l = l.charCode,
        l === 0 && t === 13 && (l = 13)) : l = t,
        l === 10 && (l = 13),
        32 <= l || l === 13 ? l : 0
    }
    function Ru() {
        return !0
    }
    function Vf() {
        return !1
    }
    function wl(l) {
        function t(e, a, u, n, i) {
            this._reactName = e,
            this._targetInst = u,
            this.type = a,
            this.nativeEvent = n,
            this.target = i,
            this.currentTarget = null;
            for (var c in l)
                l.hasOwnProperty(c) && (e = l[c],
                this[c] = e ? e(n) : n[c]);
            return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Ru : Vf,
            this.isPropagationStopped = Vf,
            this
        }
        return D(t.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1),
                this.isDefaultPrevented = Ru)
            },
            stopPropagation: function() {
                var e = this.nativeEvent;
                e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0),
                this.isPropagationStopped = Ru)
            },
            persist: function() {},
            isPersistent: Ru
        }),
        t
    }
    var Ae = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(l) {
            return l.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, qu = wl(Ae), qa = D({}, Ae, {
        view: 0,
        detail: 0
    }), e0 = wl(qa), si, oi, Ba, Bu = D({}, qa, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: di,
        button: 0,
        buttons: 0,
        relatedTarget: function(l) {
            return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget
        },
        movementX: function(l) {
            return "movementX" in l ? l.movementX : (l !== Ba && (Ba && l.type === "mousemove" ? (si = l.screenX - Ba.screenX,
            oi = l.screenY - Ba.screenY) : oi = si = 0,
            Ba = l),
            si)
        },
        movementY: function(l) {
            return "movementY" in l ? l.movementY : oi
        }
    }), wf = wl(Bu), a0 = D({}, Bu, {
        dataTransfer: 0
    }), u0 = wl(a0), n0 = D({}, qa, {
        relatedTarget: 0
    }), ri = wl(n0), i0 = D({}, Ae, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), c0 = wl(i0), f0 = D({}, Ae, {
        clipboardData: function(l) {
            return "clipboardData" in l ? l.clipboardData : window.clipboardData
        }
    }), s0 = wl(f0), o0 = D({}, Ae, {
        data: 0
    }), Kf = wl(o0), r0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, d0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, m0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function h0(l) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(l) : (l = m0[l]) ? !!t[l] : !1
    }
    function di() {
        return h0
    }
    var v0 = D({}, qa, {
        key: function(l) {
            if (l.key) {
                var t = r0[l.key] || l.key;
                if (t !== "Unidentified")
                    return t
            }
            return l.type === "keypress" ? (l = Hu(l),
            l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? d0[l.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: di,
        charCode: function(l) {
            return l.type === "keypress" ? Hu(l) : 0
        },
        keyCode: function(l) {
            return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        },
        which: function(l) {
            return l.type === "keypress" ? Hu(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0
        }
    })
      , y0 = wl(v0)
      , g0 = D({}, Bu, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Jf = wl(g0)
      , b0 = D({}, qa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: di
    })
      , x0 = wl(b0)
      , S0 = D({}, Ae, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , p0 = wl(S0)
      , z0 = D({}, Bu, {
        deltaX: function(l) {
            return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0
        },
        deltaY: function(l) {
            return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , T0 = wl(z0)
      , E0 = D({}, Ae, {
        newState: 0,
        oldState: 0
    })
      , N0 = wl(E0)
      , A0 = [9, 13, 27, 32]
      , mi = Rt && "CompositionEvent" in window
      , Ya = null;
    Rt && "documentMode" in document && (Ya = document.documentMode);
    var M0 = Rt && "TextEvent" in window && !Ya
      , $f = Rt && (!mi || Ya && 8 < Ya && 11 >= Ya)
      , kf = " "
      , Wf = !1;
    function Ff(l, t) {
        switch (l) {
        case "keyup":
            return A0.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function If(l) {
        return l = l.detail,
        typeof l == "object" && "data" in l ? l.data : null
    }
    var Pe = !1;
    function _0(l, t) {
        switch (l) {
        case "compositionend":
            return If(t);
        case "keypress":
            return t.which !== 32 ? null : (Wf = !0,
            kf);
        case "textInput":
            return l = t.data,
            l === kf && Wf ? null : l;
        default:
            return null
        }
    }
    function j0(l, t) {
        if (Pe)
            return l === "compositionend" || !mi && Ff(l, t) ? (l = Zf(),
            Uu = fi = Pt = null,
            Pe = !1,
            l) : null;
        switch (l) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length)
                    return t.char;
                if (t.which)
                    return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return $f && t.locale !== "ko" ? null : t.data;
        default:
            return null
        }
    }
    var O0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Pf(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t === "input" ? !!O0[l.type] : t === "textarea"
    }
    function ls(l, t, e, a) {
        Fe ? Ie ? Ie.push(a) : Ie = [a] : Fe = a,
        t = Mn(t, "onChange"),
        0 < t.length && (e = new qu("onChange","change",null,e,a),
        l.push({
            event: e,
            listeners: t
        }))
    }
    var Ga = null
      , Xa = null;
    function D0(l) {
        Br(l, 0)
    }
    function Yu(l) {
        var t = Ua(l);
        if (Rf(t))
            return l
    }
    function ts(l, t) {
        if (l === "change")
            return t
    }
    var es = !1;
    if (Rt) {
        var hi;
        if (Rt) {
            var vi = "oninput" in document;
            if (!vi) {
                var as = document.createElement("div");
                as.setAttribute("oninput", "return;"),
                vi = typeof as.oninput == "function"
            }
            hi = vi
        } else
            hi = !1;
        es = hi && (!document.documentMode || 9 < document.documentMode)
    }
    function us() {
        Ga && (Ga.detachEvent("onpropertychange", ns),
        Xa = Ga = null)
    }
    function ns(l) {
        if (l.propertyName === "value" && Yu(Xa)) {
            var t = [];
            ls(t, Xa, l, ni(l)),
            Lf(D0, t)
        }
    }
    function C0(l, t, e) {
        l === "focusin" ? (us(),
        Ga = t,
        Xa = e,
        Ga.attachEvent("onpropertychange", ns)) : l === "focusout" && us()
    }
    function U0(l) {
        if (l === "selectionchange" || l === "keyup" || l === "keydown")
            return Yu(Xa)
    }
    function H0(l, t) {
        if (l === "click")
            return Yu(t)
    }
    function R0(l, t) {
        if (l === "input" || l === "change")
            return Yu(t)
    }
    function q0(l, t) {
        return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t
    }
    var tt = typeof Object.is == "function" ? Object.is : q0;
    function Qa(l, t) {
        if (tt(l, t))
            return !0;
        if (typeof l != "object" || l === null || typeof t != "object" || t === null)
            return !1;
        var e = Object.keys(l)
          , a = Object.keys(t);
        if (e.length !== a.length)
            return !1;
        for (a = 0; a < e.length; a++) {
            var u = e[a];
            if (!Kn.call(t, u) || !tt(l[u], t[u]))
                return !1
        }
        return !0
    }
    function is(l) {
        for (; l && l.firstChild; )
            l = l.firstChild;
        return l
    }
    function cs(l, t) {
        var e = is(l);
        l = 0;
        for (var a; e; ) {
            if (e.nodeType === 3) {
                if (a = l + e.textContent.length,
                l <= t && a >= t)
                    return {
                        node: e,
                        offset: t - l
                    };
                l = a
            }
            l: {
                for (; e; ) {
                    if (e.nextSibling) {
                        e = e.nextSibling;
                        break l
                    }
                    e = e.parentNode
                }
                e = void 0
            }
            e = is(e)
        }
    }
    function fs(l, t) {
        return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? fs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1
    }
    function ss(l) {
        l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
        for (var t = Du(l.document); t instanceof l.HTMLIFrameElement; ) {
            try {
                var e = typeof t.contentWindow.location.href == "string"
            } catch {
                e = !1
            }
            if (e)
                l = t.contentWindow;
            else
                break;
            t = Du(l.document)
        }
        return t
    }
    function yi(l) {
        var t = l && l.nodeName && l.nodeName.toLowerCase();
        return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true")
    }
    var B0 = Rt && "documentMode" in document && 11 >= document.documentMode
      , la = null
      , gi = null
      , La = null
      , bi = !1;
    function os(l, t, e) {
        var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
        bi || la == null || la !== Du(a) || (a = la,
        "selectionStart" in a && yi(a) ? a = {
            start: a.selectionStart,
            end: a.selectionEnd
        } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(),
        a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset
        }),
        La && Qa(La, a) || (La = a,
        a = Mn(gi, "onSelect"),
        0 < a.length && (t = new qu("onSelect","select",null,t,e),
        l.push({
            event: t,
            listeners: a
        }),
        t.target = la)))
    }
    function Me(l, t) {
        var e = {};
        return e[l.toLowerCase()] = t.toLowerCase(),
        e["Webkit" + l] = "webkit" + t,
        e["Moz" + l] = "moz" + t,
        e
    }
    var ta = {
        animationend: Me("Animation", "AnimationEnd"),
        animationiteration: Me("Animation", "AnimationIteration"),
        animationstart: Me("Animation", "AnimationStart"),
        transitionrun: Me("Transition", "TransitionRun"),
        transitionstart: Me("Transition", "TransitionStart"),
        transitioncancel: Me("Transition", "TransitionCancel"),
        transitionend: Me("Transition", "TransitionEnd")
    }
      , xi = {}
      , rs = {};
    Rt && (rs = document.createElement("div").style,
    "AnimationEvent" in window || (delete ta.animationend.animation,
    delete ta.animationiteration.animation,
    delete ta.animationstart.animation),
    "TransitionEvent" in window || delete ta.transitionend.transition);
    function _e(l) {
        if (xi[l])
            return xi[l];
        if (!ta[l])
            return l;
        var t = ta[l], e;
        for (e in t)
            if (t.hasOwnProperty(e) && e in rs)
                return xi[l] = t[e];
        return l
    }
    var ds = _e("animationend")
      , ms = _e("animationiteration")
      , hs = _e("animationstart")
      , Y0 = _e("transitionrun")
      , G0 = _e("transitionstart")
      , X0 = _e("transitioncancel")
      , vs = _e("transitionend")
      , ys = new Map
      , Si = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Si.push("scrollEnd");
    function pt(l, t) {
        ys.set(l, t),
        Ne(t, [l])
    }
    var Gu = typeof reportError == "function" ? reportError : function(l) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var t = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
                error: l
            });
            if (!window.dispatchEvent(t))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", l);
            return
        }
        console.error(l)
    }
      , rt = []
      , ea = 0
      , pi = 0;
    function Xu() {
        for (var l = ea, t = pi = ea = 0; t < l; ) {
            var e = rt[t];
            rt[t++] = null;
            var a = rt[t];
            rt[t++] = null;
            var u = rt[t];
            rt[t++] = null;
            var n = rt[t];
            if (rt[t++] = null,
            a !== null && u !== null) {
                var i = a.pending;
                i === null ? u.next = u : (u.next = i.next,
                i.next = u),
                a.pending = u
            }
            n !== 0 && gs(e, u, n)
        }
    }
    function Qu(l, t, e, a) {
        rt[ea++] = l,
        rt[ea++] = t,
        rt[ea++] = e,
        rt[ea++] = a,
        pi |= a,
        l.lanes |= a,
        l = l.alternate,
        l !== null && (l.lanes |= a)
    }
    function zi(l, t, e, a) {
        return Qu(l, t, e, a),
        Lu(l)
    }
    function je(l, t) {
        return Qu(l, null, null, t),
        Lu(l)
    }
    function gs(l, t, e) {
        l.lanes |= e;
        var a = l.alternate;
        a !== null && (a.lanes |= e);
        for (var u = !1, n = l.return; n !== null; )
            n.childLanes |= e,
            a = n.alternate,
            a !== null && (a.childLanes |= e),
            n.tag === 22 && (l = n.stateNode,
            l === null || l._visibility & 1 || (u = !0)),
            l = n,
            n = n.return;
        return l.tag === 3 ? (n = l.stateNode,
        u && t !== null && (u = 31 - lt(e),
        l = n.hiddenUpdates,
        a = l[u],
        a === null ? l[u] = [t] : a.push(t),
        t.lane = e | 536870912),
        n) : null
    }
    function Lu(l) {
        if (50 < ou)
            throw ou = 0,
            Dc = null,
            Error(o(185));
        for (var t = l.return; t !== null; )
            l = t,
            t = l.return;
        return l.tag === 3 ? l.stateNode : null
    }
    var aa = {};
    function Q0(l, t, e, a) {
        this.tag = l,
        this.key = e,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = t,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = a,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function et(l, t, e, a) {
        return new Q0(l,t,e,a)
    }
    function Ti(l) {
        return l = l.prototype,
        !(!l || !l.isReactComponent)
    }
    function qt(l, t) {
        var e = l.alternate;
        return e === null ? (e = et(l.tag, t, l.key, l.mode),
        e.elementType = l.elementType,
        e.type = l.type,
        e.stateNode = l.stateNode,
        e.alternate = l,
        l.alternate = e) : (e.pendingProps = t,
        e.type = l.type,
        e.flags = 0,
        e.subtreeFlags = 0,
        e.deletions = null),
        e.flags = l.flags & 65011712,
        e.childLanes = l.childLanes,
        e.lanes = l.lanes,
        e.child = l.child,
        e.memoizedProps = l.memoizedProps,
        e.memoizedState = l.memoizedState,
        e.updateQueue = l.updateQueue,
        t = l.dependencies,
        e.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        },
        e.sibling = l.sibling,
        e.index = l.index,
        e.ref = l.ref,
        e.refCleanup = l.refCleanup,
        e
    }
    function bs(l, t) {
        l.flags &= 65011714;
        var e = l.alternate;
        return e === null ? (l.childLanes = 0,
        l.lanes = t,
        l.child = null,
        l.subtreeFlags = 0,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.updateQueue = null,
        l.dependencies = null,
        l.stateNode = null) : (l.childLanes = e.childLanes,
        l.lanes = e.lanes,
        l.child = e.child,
        l.subtreeFlags = 0,
        l.deletions = null,
        l.memoizedProps = e.memoizedProps,
        l.memoizedState = e.memoizedState,
        l.updateQueue = e.updateQueue,
        l.type = e.type,
        t = e.dependencies,
        l.dependencies = t === null ? null : {
            lanes: t.lanes,
            firstContext: t.firstContext
        }),
        l
    }
    function Zu(l, t, e, a, u, n) {
        var i = 0;
        if (a = l,
        typeof l == "function")
            Ti(l) && (i = 1);
        else if (typeof l == "string")
            i = Km(l, e, C.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
        else
            l: switch (l) {
            case At:
                return l = et(31, e, t, u),
                l.elementType = At,
                l.lanes = n,
                l;
            case Ol:
                return Oe(e.children, u, n, t);
            case xt:
                i = 8,
                u |= 24;
                break;
            case Yl:
                return l = et(12, e, t, u | 2),
                l.elementType = Yl,
                l.lanes = n,
                l;
            case Nt:
                return l = et(13, e, t, u),
                l.elementType = Nt,
                l.lanes = n,
                l;
            case Ql:
                return l = et(19, e, t, u),
                l.elementType = Ql,
                l.lanes = n,
                l;
            default:
                if (typeof l == "object" && l !== null)
                    switch (l.$$typeof) {
                    case ql:
                        i = 10;
                        break l;
                    case Et:
                        i = 9;
                        break l;
                    case ft:
                        i = 11;
                        break l;
                    case I:
                        i = 14;
                        break l;
                    case Ll:
                        i = 16,
                        a = null;
                        break l
                    }
                i = 29,
                e = Error(o(130, l === null ? "null" : typeof l, "")),
                a = null
            }
        return t = et(i, e, t, u),
        t.elementType = l,
        t.type = a,
        t.lanes = n,
        t
    }
    function Oe(l, t, e, a) {
        return l = et(7, l, a, t),
        l.lanes = e,
        l
    }
    function Ei(l, t, e) {
        return l = et(6, l, null, t),
        l.lanes = e,
        l
    }
    function xs(l) {
        var t = et(18, null, null, 0);
        return t.stateNode = l,
        t
    }
    function Ni(l, t, e) {
        return t = et(4, l.children !== null ? l.children : [], l.key, t),
        t.lanes = e,
        t.stateNode = {
            containerInfo: l.containerInfo,
            pendingChildren: null,
            implementation: l.implementation
        },
        t
    }
    var Ss = new WeakMap;
    function dt(l, t) {
        if (typeof l == "object" && l !== null) {
            var e = Ss.get(l);
            return e !== void 0 ? e : (t = {
                value: l,
                source: t,
                stack: xf(t)
            },
            Ss.set(l, t),
            t)
        }
        return {
            value: l,
            source: t,
            stack: xf(t)
        }
    }
    var ua = []
      , na = 0
      , Vu = null
      , Za = 0
      , mt = []
      , ht = 0
      , le = null
      , _t = 1
      , jt = "";
    function Bt(l, t) {
        ua[na++] = Za,
        ua[na++] = Vu,
        Vu = l,
        Za = t
    }
    function ps(l, t, e) {
        mt[ht++] = _t,
        mt[ht++] = jt,
        mt[ht++] = le,
        le = l;
        var a = _t;
        l = jt;
        var u = 32 - lt(a) - 1;
        a &= ~(1 << u),
        e += 1;
        var n = 32 - lt(t) + u;
        if (30 < n) {
            var i = u - u % 5;
            n = (a & (1 << i) - 1).toString(32),
            a >>= i,
            u -= i,
            _t = 1 << 32 - lt(t) + u | e << u | a,
            jt = n + l
        } else
            _t = 1 << n | e << u | a,
            jt = l
    }
    function Ai(l) {
        l.return !== null && (Bt(l, 1),
        ps(l, 1, 0))
    }
    function Mi(l) {
        for (; l === Vu; )
            Vu = ua[--na],
            ua[na] = null,
            Za = ua[--na],
            ua[na] = null;
        for (; l === le; )
            le = mt[--ht],
            mt[ht] = null,
            jt = mt[--ht],
            mt[ht] = null,
            _t = mt[--ht],
            mt[ht] = null
    }
    function zs(l, t) {
        mt[ht++] = _t,
        mt[ht++] = jt,
        mt[ht++] = le,
        _t = t.id,
        jt = t.overflow,
        le = l
    }
    var Cl = null
      , ml = null
      , P = !1
      , te = null
      , vt = !1
      , _i = Error(o(519));
    function ee(l) {
        var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw Va(dt(t, l)),
        _i
    }
    function Ts(l) {
        var t = l.stateNode
          , e = l.type
          , a = l.memoizedProps;
        switch (t[Dl] = l,
        t[Vl] = a,
        e) {
        case "dialog":
            k("cancel", t),
            k("close", t);
            break;
        case "iframe":
        case "object":
        case "embed":
            k("load", t);
            break;
        case "video":
        case "audio":
            for (e = 0; e < du.length; e++)
                k(du[e], t);
            break;
        case "source":
            k("error", t);
            break;
        case "img":
        case "image":
        case "link":
            k("error", t),
            k("load", t);
            break;
        case "details":
            k("toggle", t);
            break;
        case "input":
            k("invalid", t),
            qf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
            break;
        case "select":
            k("invalid", t);
            break;
        case "textarea":
            k("invalid", t),
            Yf(t, a.value, a.defaultValue, a.children)
        }
        e = a.children,
        typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || Qr(t.textContent, e) ? (a.popover != null && (k("beforetoggle", t),
        k("toggle", t)),
        a.onScroll != null && k("scroll", t),
        a.onScrollEnd != null && k("scrollend", t),
        a.onClick != null && (t.onclick = Ht),
        t = !0) : t = !1,
        t || ee(l, !0)
    }
    function Es(l) {
        for (Cl = l.return; Cl; )
            switch (Cl.tag) {
            case 5:
            case 31:
            case 13:
                vt = !1;
                return;
            case 27:
            case 3:
                vt = !0;
                return;
            default:
                Cl = Cl.return
            }
    }
    function ia(l) {
        if (l !== Cl)
            return !1;
        if (!P)
            return Es(l),
            P = !0,
            !1;
        var t = l.tag, e;
        if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type,
        e = !(e !== "form" && e !== "button") || Kc(l.type, l.memoizedProps)),
        e = !e),
        e && ml && ee(l),
        Es(l),
        t === 13) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(o(317));
            ml = Wr(l)
        } else if (t === 31) {
            if (l = l.memoizedState,
            l = l !== null ? l.dehydrated : null,
            !l)
                throw Error(o(317));
            ml = Wr(l)
        } else
            t === 27 ? (t = ml,
            ye(l.type) ? (l = Fc,
            Fc = null,
            ml = l) : ml = t) : ml = Cl ? gt(l.stateNode.nextSibling) : null;
        return !0
    }
    function De() {
        ml = Cl = null,
        P = !1
    }
    function ji() {
        var l = te;
        return l !== null && (kl === null ? kl = l : kl.push.apply(kl, l),
        te = null),
        l
    }
    function Va(l) {
        te === null ? te = [l] : te.push(l)
    }
    var Oi = d(null)
      , Ce = null
      , Yt = null;
    function ae(l, t, e) {
        _(Oi, t._currentValue),
        t._currentValue = e
    }
    function Gt(l) {
        l._currentValue = Oi.current,
        N(Oi)
    }
    function Di(l, t, e) {
        for (; l !== null; ) {
            var a = l.alternate;
            if ((l.childLanes & t) !== t ? (l.childLanes |= t,
            a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
            l === e)
                break;
            l = l.return
        }
    }
    function Ci(l, t, e, a) {
        var u = l.child;
        for (u !== null && (u.return = l); u !== null; ) {
            var n = u.dependencies;
            if (n !== null) {
                var i = u.child;
                n = n.firstContext;
                l: for (; n !== null; ) {
                    var c = n;
                    n = u;
                    for (var f = 0; f < t.length; f++)
                        if (c.context === t[f]) {
                            n.lanes |= e,
                            c = n.alternate,
                            c !== null && (c.lanes |= e),
                            Di(n.return, e, l),
                            a || (i = null);
                            break l
                        }
                    n = c.next
                }
            } else if (u.tag === 18) {
                if (i = u.return,
                i === null)
                    throw Error(o(341));
                i.lanes |= e,
                n = i.alternate,
                n !== null && (n.lanes |= e),
                Di(i, e, l),
                i = null
            } else
                i = u.child;
            if (i !== null)
                i.return = u;
            else
                for (i = u; i !== null; ) {
                    if (i === l) {
                        i = null;
                        break
                    }
                    if (u = i.sibling,
                    u !== null) {
                        u.return = i.return,
                        i = u;
                        break
                    }
                    i = i.return
                }
            u = i
        }
    }
    function ca(l, t, e, a) {
        l = null;
        for (var u = t, n = !1; u !== null; ) {
            if (!n) {
                if ((u.flags & 524288) !== 0)
                    n = !0;
                else if ((u.flags & 262144) !== 0)
                    break
            }
            if (u.tag === 10) {
                var i = u.alternate;
                if (i === null)
                    throw Error(o(387));
                if (i = i.memoizedProps,
                i !== null) {
                    var c = u.type;
                    tt(u.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c])
                }
            } else if (u === al.current) {
                if (i = u.alternate,
                i === null)
                    throw Error(o(387));
                i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(gu) : l = [gu])
            }
            u = u.return
        }
        l !== null && Ci(t, l, e, a),
        t.flags |= 262144
    }
    function wu(l) {
        for (l = l.firstContext; l !== null; ) {
            if (!tt(l.context._currentValue, l.memoizedValue))
                return !0;
            l = l.next
        }
        return !1
    }
    function Ue(l) {
        Ce = l,
        Yt = null,
        l = l.dependencies,
        l !== null && (l.firstContext = null)
    }
    function Ul(l) {
        return Ns(Ce, l)
    }
    function Ku(l, t) {
        return Ce === null && Ue(l),
        Ns(l, t)
    }
    function Ns(l, t) {
        var e = t._currentValue;
        if (t = {
            context: t,
            memoizedValue: e,
            next: null
        },
        Yt === null) {
            if (l === null)
                throw Error(o(308));
            Yt = t,
            l.dependencies = {
                lanes: 0,
                firstContext: t
            },
            l.flags |= 524288
        } else
            Yt = Yt.next = t;
        return e
    }
    var L0 = typeof AbortController < "u" ? AbortController : function() {
        var l = []
          , t = this.signal = {
            aborted: !1,
            addEventListener: function(e, a) {
                l.push(a)
            }
        };
        this.abort = function() {
            t.aborted = !0,
            l.forEach(function(e) {
                return e()
            })
        }
    }
      , Z0 = g.unstable_scheduleCallback
      , V0 = g.unstable_NormalPriority
      , Tl = {
        $$typeof: ql,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function Ui() {
        return {
            controller: new L0,
            data: new Map,
            refCount: 0
        }
    }
    function wa(l) {
        l.refCount--,
        l.refCount === 0 && Z0(V0, function() {
            l.controller.abort()
        })
    }
    var Ka = null
      , Hi = 0
      , fa = 0
      , sa = null;
    function w0(l, t) {
        if (Ka === null) {
            var e = Ka = [];
            Hi = 0,
            fa = Bc(),
            sa = {
                status: "pending",
                value: void 0,
                then: function(a) {
                    e.push(a)
                }
            }
        }
        return Hi++,
        t.then(As, As),
        t
    }
    function As() {
        if (--Hi === 0 && Ka !== null) {
            sa !== null && (sa.status = "fulfilled");
            var l = Ka;
            Ka = null,
            fa = 0,
            sa = null;
            for (var t = 0; t < l.length; t++)
                (0,
                l[t])()
        }
    }
    function K0(l, t) {
        var e = []
          , a = {
            status: "pending",
            value: null,
            reason: null,
            then: function(u) {
                e.push(u)
            }
        };
        return l.then(function() {
            a.status = "fulfilled",
            a.value = t;
            for (var u = 0; u < e.length; u++)
                (0,
                e[u])(t)
        }, function(u) {
            for (a.status = "rejected",
            a.reason = u,
            u = 0; u < e.length; u++)
                (0,
                e[u])(void 0)
        }),
        a
    }
    var Ms = S.S;
    S.S = function(l, t) {
        rr = Il(),
        typeof t == "object" && t !== null && typeof t.then == "function" && w0(l, t),
        Ms !== null && Ms(l, t)
    }
    ;
    var He = d(null);
    function Ri() {
        var l = He.current;
        return l !== null ? l : dl.pooledCache
    }
    function Ju(l, t) {
        t === null ? _(He, He.current) : _(He, t.pool)
    }
    function _s() {
        var l = Ri();
        return l === null ? null : {
            parent: Tl._currentValue,
            pool: l
        }
    }
    var oa = Error(o(460))
      , qi = Error(o(474))
      , $u = Error(o(542))
      , ku = {
        then: function() {}
    };
    function js(l) {
        return l = l.status,
        l === "fulfilled" || l === "rejected"
    }
    function Os(l, t, e) {
        switch (e = l[e],
        e === void 0 ? l.push(t) : e !== t && (t.then(Ht, Ht),
        t = e),
        t.status) {
        case "fulfilled":
            return t.value;
        case "rejected":
            throw l = t.reason,
            Cs(l),
            l;
        default:
            if (typeof t.status == "string")
                t.then(Ht, Ht);
            else {
                if (l = dl,
                l !== null && 100 < l.shellSuspendCounter)
                    throw Error(o(482));
                l = t,
                l.status = "pending",
                l.then(function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "fulfilled",
                        u.value = a
                    }
                }, function(a) {
                    if (t.status === "pending") {
                        var u = t;
                        u.status = "rejected",
                        u.reason = a
                    }
                })
            }
            switch (t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw l = t.reason,
                Cs(l),
                l
            }
            throw qe = t,
            oa
        }
    }
    function Re(l) {
        try {
            var t = l._init;
            return t(l._payload)
        } catch (e) {
            throw e !== null && typeof e == "object" && typeof e.then == "function" ? (qe = e,
            oa) : e
        }
    }
    var qe = null;
    function Ds() {
        if (qe === null)
            throw Error(o(459));
        var l = qe;
        return qe = null,
        l
    }
    function Cs(l) {
        if (l === oa || l === $u)
            throw Error(o(483))
    }
    var ra = null
      , Ja = 0;
    function Wu(l) {
        var t = Ja;
        return Ja += 1,
        ra === null && (ra = []),
        Os(ra, l, t)
    }
    function $a(l, t) {
        t = t.props.ref,
        l.ref = t !== void 0 ? t : null
    }
    function Fu(l, t) {
        throw t.$$typeof === K ? Error(o(525)) : (l = Object.prototype.toString.call(t),
        Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)))
    }
    function Us(l) {
        function t(m, r) {
            if (l) {
                var h = m.deletions;
                h === null ? (m.deletions = [r],
                m.flags |= 16) : h.push(r)
            }
        }
        function e(m, r) {
            if (!l)
                return null;
            for (; r !== null; )
                t(m, r),
                r = r.sibling;
            return null
        }
        function a(m) {
            for (var r = new Map; m !== null; )
                m.key !== null ? r.set(m.key, m) : r.set(m.index, m),
                m = m.sibling;
            return r
        }
        function u(m, r) {
            return m = qt(m, r),
            m.index = 0,
            m.sibling = null,
            m
        }
        function n(m, r, h) {
            return m.index = h,
            l ? (h = m.alternate,
            h !== null ? (h = h.index,
            h < r ? (m.flags |= 67108866,
            r) : h) : (m.flags |= 67108866,
            r)) : (m.flags |= 1048576,
            r)
        }
        function i(m) {
            return l && m.alternate === null && (m.flags |= 67108866),
            m
        }
        function c(m, r, h, p) {
            return r === null || r.tag !== 6 ? (r = Ei(h, m.mode, p),
            r.return = m,
            r) : (r = u(r, h),
            r.return = m,
            r)
        }
        function f(m, r, h, p) {
            var B = h.type;
            return B === Ol ? x(m, r, h.props.children, p, h.key) : r !== null && (r.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Ll && Re(B) === r.type) ? (r = u(r, h.props),
            $a(r, h),
            r.return = m,
            r) : (r = Zu(h.type, h.key, h.props, null, m.mode, p),
            $a(r, h),
            r.return = m,
            r)
        }
        function v(m, r, h, p) {
            return r === null || r.tag !== 4 || r.stateNode.containerInfo !== h.containerInfo || r.stateNode.implementation !== h.implementation ? (r = Ni(h, m.mode, p),
            r.return = m,
            r) : (r = u(r, h.children || []),
            r.return = m,
            r)
        }
        function x(m, r, h, p, B) {
            return r === null || r.tag !== 7 ? (r = Oe(h, m.mode, p, B),
            r.return = m,
            r) : (r = u(r, h),
            r.return = m,
            r)
        }
        function z(m, r, h) {
            if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint")
                return r = Ei("" + r, m.mode, h),
                r.return = m,
                r;
            if (typeof r == "object" && r !== null) {
                switch (r.$$typeof) {
                case Q:
                    return h = Zu(r.type, r.key, r.props, null, m.mode, h),
                    $a(h, r),
                    h.return = m,
                    h;
                case gl:
                    return r = Ni(r, m.mode, h),
                    r.return = m,
                    r;
                case Ll:
                    return r = Re(r),
                    z(m, r, h)
                }
                if (St(r) || Zl(r))
                    return r = Oe(r, m.mode, h, null),
                    r.return = m,
                    r;
                if (typeof r.then == "function")
                    return z(m, Wu(r), h);
                if (r.$$typeof === ql)
                    return z(m, Ku(m, r), h);
                Fu(m, r)
            }
            return null
        }
        function y(m, r, h, p) {
            var B = r !== null ? r.key : null;
            if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
                return B !== null ? null : c(m, r, "" + h, p);
            if (typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case Q:
                    return h.key === B ? f(m, r, h, p) : null;
                case gl:
                    return h.key === B ? v(m, r, h, p) : null;
                case Ll:
                    return h = Re(h),
                    y(m, r, h, p)
                }
                if (St(h) || Zl(h))
                    return B !== null ? null : x(m, r, h, p, null);
                if (typeof h.then == "function")
                    return y(m, r, Wu(h), p);
                if (h.$$typeof === ql)
                    return y(m, r, Ku(m, h), p);
                Fu(m, h)
            }
            return null
        }
        function b(m, r, h, p, B) {
            if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                return m = m.get(h) || null,
                c(r, m, "" + p, B);
            if (typeof p == "object" && p !== null) {
                switch (p.$$typeof) {
                case Q:
                    return m = m.get(p.key === null ? h : p.key) || null,
                    f(r, m, p, B);
                case gl:
                    return m = m.get(p.key === null ? h : p.key) || null,
                    v(r, m, p, B);
                case Ll:
                    return p = Re(p),
                    b(m, r, h, p, B)
                }
                if (St(p) || Zl(p))
                    return m = m.get(h) || null,
                    x(r, m, p, B, null);
                if (typeof p.then == "function")
                    return b(m, r, h, Wu(p), B);
                if (p.$$typeof === ql)
                    return b(m, r, h, Ku(r, p), B);
                Fu(r, p)
            }
            return null
        }
        function O(m, r, h, p) {
            for (var B = null, ll = null, H = r, w = r = 0, F = null; H !== null && w < h.length; w++) {
                H.index > w ? (F = H,
                H = null) : F = H.sibling;
                var tl = y(m, H, h[w], p);
                if (tl === null) {
                    H === null && (H = F);
                    break
                }
                l && H && tl.alternate === null && t(m, H),
                r = n(tl, r, w),
                ll === null ? B = tl : ll.sibling = tl,
                ll = tl,
                H = F
            }
            if (w === h.length)
                return e(m, H),
                P && Bt(m, w),
                B;
            if (H === null) {
                for (; w < h.length; w++)
                    H = z(m, h[w], p),
                    H !== null && (r = n(H, r, w),
                    ll === null ? B = H : ll.sibling = H,
                    ll = H);
                return P && Bt(m, w),
                B
            }
            for (H = a(H); w < h.length; w++)
                F = b(H, m, w, h[w], p),
                F !== null && (l && F.alternate !== null && H.delete(F.key === null ? w : F.key),
                r = n(F, r, w),
                ll === null ? B = F : ll.sibling = F,
                ll = F);
            return l && H.forEach(function(pe) {
                return t(m, pe)
            }),
            P && Bt(m, w),
            B
        }
        function Y(m, r, h, p) {
            if (h == null)
                throw Error(o(151));
            for (var B = null, ll = null, H = r, w = r = 0, F = null, tl = h.next(); H !== null && !tl.done; w++,
            tl = h.next()) {
                H.index > w ? (F = H,
                H = null) : F = H.sibling;
                var pe = y(m, H, tl.value, p);
                if (pe === null) {
                    H === null && (H = F);
                    break
                }
                l && H && pe.alternate === null && t(m, H),
                r = n(pe, r, w),
                ll === null ? B = pe : ll.sibling = pe,
                ll = pe,
                H = F
            }
            if (tl.done)
                return e(m, H),
                P && Bt(m, w),
                B;
            if (H === null) {
                for (; !tl.done; w++,
                tl = h.next())
                    tl = z(m, tl.value, p),
                    tl !== null && (r = n(tl, r, w),
                    ll === null ? B = tl : ll.sibling = tl,
                    ll = tl);
                return P && Bt(m, w),
                B
            }
            for (H = a(H); !tl.done; w++,
            tl = h.next())
                tl = b(H, m, w, tl.value, p),
                tl !== null && (l && tl.alternate !== null && H.delete(tl.key === null ? w : tl.key),
                r = n(tl, r, w),
                ll === null ? B = tl : ll.sibling = tl,
                ll = tl);
            return l && H.forEach(function(ah) {
                return t(m, ah)
            }),
            P && Bt(m, w),
            B
        }
        function sl(m, r, h, p) {
            if (typeof h == "object" && h !== null && h.type === Ol && h.key === null && (h = h.props.children),
            typeof h == "object" && h !== null) {
                switch (h.$$typeof) {
                case Q:
                    l: {
                        for (var B = h.key; r !== null; ) {
                            if (r.key === B) {
                                if (B = h.type,
                                B === Ol) {
                                    if (r.tag === 7) {
                                        e(m, r.sibling),
                                        p = u(r, h.props.children),
                                        p.return = m,
                                        m = p;
                                        break l
                                    }
                                } else if (r.elementType === B || typeof B == "object" && B !== null && B.$$typeof === Ll && Re(B) === r.type) {
                                    e(m, r.sibling),
                                    p = u(r, h.props),
                                    $a(p, h),
                                    p.return = m,
                                    m = p;
                                    break l
                                }
                                e(m, r);
                                break
                            } else
                                t(m, r);
                            r = r.sibling
                        }
                        h.type === Ol ? (p = Oe(h.props.children, m.mode, p, h.key),
                        p.return = m,
                        m = p) : (p = Zu(h.type, h.key, h.props, null, m.mode, p),
                        $a(p, h),
                        p.return = m,
                        m = p)
                    }
                    return i(m);
                case gl:
                    l: {
                        for (B = h.key; r !== null; ) {
                            if (r.key === B)
                                if (r.tag === 4 && r.stateNode.containerInfo === h.containerInfo && r.stateNode.implementation === h.implementation) {
                                    e(m, r.sibling),
                                    p = u(r, h.children || []),
                                    p.return = m,
                                    m = p;
                                    break l
                                } else {
                                    e(m, r);
                                    break
                                }
                            else
                                t(m, r);
                            r = r.sibling
                        }
                        p = Ni(h, m.mode, p),
                        p.return = m,
                        m = p
                    }
                    return i(m);
                case Ll:
                    return h = Re(h),
                    sl(m, r, h, p)
                }
                if (St(h))
                    return O(m, r, h, p);
                if (Zl(h)) {
                    if (B = Zl(h),
                    typeof B != "function")
                        throw Error(o(150));
                    return h = B.call(h),
                    Y(m, r, h, p)
                }
                if (typeof h.then == "function")
                    return sl(m, r, Wu(h), p);
                if (h.$$typeof === ql)
                    return sl(m, r, Ku(m, h), p);
                Fu(m, h)
            }
            return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h,
            r !== null && r.tag === 6 ? (e(m, r.sibling),
            p = u(r, h),
            p.return = m,
            m = p) : (e(m, r),
            p = Ei(h, m.mode, p),
            p.return = m,
            m = p),
            i(m)) : e(m, r)
        }
        return function(m, r, h, p) {
            try {
                Ja = 0;
                var B = sl(m, r, h, p);
                return ra = null,
                B
            } catch (H) {
                if (H === oa || H === $u)
                    throw H;
                var ll = et(29, H, null, m.mode);
                return ll.lanes = p,
                ll.return = m,
                ll
            } finally {}
        }
    }
    var Be = Us(!0)
      , Hs = Us(!1)
      , ue = !1;
    function Bi(l) {
        l.updateQueue = {
            baseState: l.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Yi(l, t) {
        l = l.updateQueue,
        t.updateQueue === l && (t.updateQueue = {
            baseState: l.baseState,
            firstBaseUpdate: l.firstBaseUpdate,
            lastBaseUpdate: l.lastBaseUpdate,
            shared: l.shared,
            callbacks: null
        })
    }
    function ne(l) {
        return {
            lane: l,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function ie(l, t, e) {
        var a = l.updateQueue;
        if (a === null)
            return null;
        if (a = a.shared,
        (el & 2) !== 0) {
            var u = a.pending;
            return u === null ? t.next = t : (t.next = u.next,
            u.next = t),
            a.pending = t,
            t = Lu(l),
            gs(l, null, e),
            t
        }
        return Qu(l, a, t, e),
        Lu(l)
    }
    function ka(l, t, e) {
        if (t = t.updateQueue,
        t !== null && (t = t.shared,
        (e & 4194048) !== 0)) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            Nf(l, e)
        }
    }
    function Gi(l, t) {
        var e = l.updateQueue
          , a = l.alternate;
        if (a !== null && (a = a.updateQueue,
        e === a)) {
            var u = null
              , n = null;
            if (e = e.firstBaseUpdate,
            e !== null) {
                do {
                    var i = {
                        lane: e.lane,
                        tag: e.tag,
                        payload: e.payload,
                        callback: null,
                        next: null
                    };
                    n === null ? u = n = i : n = n.next = i,
                    e = e.next
                } while (e !== null);
                n === null ? u = n = t : n = n.next = t
            } else
                u = n = t;
            e = {
                baseState: a.baseState,
                firstBaseUpdate: u,
                lastBaseUpdate: n,
                shared: a.shared,
                callbacks: a.callbacks
            },
            l.updateQueue = e;
            return
        }
        l = e.lastBaseUpdate,
        l === null ? e.firstBaseUpdate = t : l.next = t,
        e.lastBaseUpdate = t
    }
    var Xi = !1;
    function Wa() {
        if (Xi) {
            var l = sa;
            if (l !== null)
                throw l
        }
    }
    function Fa(l, t, e, a) {
        Xi = !1;
        var u = l.updateQueue;
        ue = !1;
        var n = u.firstBaseUpdate
          , i = u.lastBaseUpdate
          , c = u.shared.pending;
        if (c !== null) {
            u.shared.pending = null;
            var f = c
              , v = f.next;
            f.next = null,
            i === null ? n = v : i.next = v,
            i = f;
            var x = l.alternate;
            x !== null && (x = x.updateQueue,
            c = x.lastBaseUpdate,
            c !== i && (c === null ? x.firstBaseUpdate = v : c.next = v,
            x.lastBaseUpdate = f))
        }
        if (n !== null) {
            var z = u.baseState;
            i = 0,
            x = v = f = null,
            c = n;
            do {
                var y = c.lane & -536870913
                  , b = y !== c.lane;
                if (b ? (W & y) === y : (a & y) === y) {
                    y !== 0 && y === fa && (Xi = !0),
                    x !== null && (x = x.next = {
                        lane: 0,
                        tag: c.tag,
                        payload: c.payload,
                        callback: null,
                        next: null
                    });
                    l: {
                        var O = l
                          , Y = c;
                        y = t;
                        var sl = e;
                        switch (Y.tag) {
                        case 1:
                            if (O = Y.payload,
                            typeof O == "function") {
                                z = O.call(sl, z, y);
                                break l
                            }
                            z = O;
                            break l;
                        case 3:
                            O.flags = O.flags & -65537 | 128;
                        case 0:
                            if (O = Y.payload,
                            y = typeof O == "function" ? O.call(sl, z, y) : O,
                            y == null)
                                break l;
                            z = D({}, z, y);
                            break l;
                        case 2:
                            ue = !0
                        }
                    }
                    y = c.callback,
                    y !== null && (l.flags |= 64,
                    b && (l.flags |= 8192),
                    b = u.callbacks,
                    b === null ? u.callbacks = [y] : b.push(y))
                } else
                    b = {
                        lane: y,
                        tag: c.tag,
                        payload: c.payload,
                        callback: c.callback,
                        next: null
                    },
                    x === null ? (v = x = b,
                    f = z) : x = x.next = b,
                    i |= y;
                if (c = c.next,
                c === null) {
                    if (c = u.shared.pending,
                    c === null)
                        break;
                    b = c,
                    c = b.next,
                    b.next = null,
                    u.lastBaseUpdate = b,
                    u.shared.pending = null
                }
            } while (!0);
            x === null && (f = z),
            u.baseState = f,
            u.firstBaseUpdate = v,
            u.lastBaseUpdate = x,
            n === null && (u.shared.lanes = 0),
            re |= i,
            l.lanes = i,
            l.memoizedState = z
        }
    }
    function Rs(l, t) {
        if (typeof l != "function")
            throw Error(o(191, l));
        l.call(t)
    }
    function qs(l, t) {
        var e = l.callbacks;
        if (e !== null)
            for (l.callbacks = null,
            l = 0; l < e.length; l++)
                Rs(e[l], t)
    }
    var da = d(null)
      , Iu = d(0);
    function Bs(l, t) {
        l = $t,
        _(Iu, l),
        _(da, t),
        $t = l | t.baseLanes
    }
    function Qi() {
        _(Iu, $t),
        _(da, da.current)
    }
    function Li() {
        $t = Iu.current,
        N(da),
        N(Iu)
    }
    var at = d(null)
      , yt = null;
    function ce(l) {
        var t = l.alternate;
        _(pl, pl.current & 1),
        _(at, l),
        yt === null && (t === null || da.current !== null || t.memoizedState !== null) && (yt = l)
    }
    function Zi(l) {
        _(pl, pl.current),
        _(at, l),
        yt === null && (yt = l)
    }
    function Ys(l) {
        l.tag === 22 ? (_(pl, pl.current),
        _(at, l),
        yt === null && (yt = l)) : fe()
    }
    function fe() {
        _(pl, pl.current),
        _(at, at.current)
    }
    function ut(l) {
        N(at),
        yt === l && (yt = null),
        N(pl)
    }
    var pl = d(0);
    function Pu(l) {
        for (var t = l; t !== null; ) {
            if (t.tag === 13) {
                var e = t.memoizedState;
                if (e !== null && (e = e.dehydrated,
                e === null || kc(e) || Wc(e)))
                    return t
            } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                if ((t.flags & 128) !== 0)
                    return t
            } else if (t.child !== null) {
                t.child.return = t,
                t = t.child;
                continue
            }
            if (t === l)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === l)
                    return null;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
        return null
    }
    var Xt = 0
      , V = null
      , cl = null
      , El = null
      , ln = !1
      , ma = !1
      , Ye = !1
      , tn = 0
      , Ia = 0
      , ha = null
      , J0 = 0;
    function bl() {
        throw Error(o(321))
    }
    function Vi(l, t) {
        if (t === null)
            return !1;
        for (var e = 0; e < t.length && e < l.length; e++)
            if (!tt(l[e], t[e]))
                return !1;
        return !0
    }
    function wi(l, t, e, a, u, n) {
        return Xt = n,
        V = t,
        t.memoizedState = null,
        t.updateQueue = null,
        t.lanes = 0,
        S.H = l === null || l.memoizedState === null ? zo : ic,
        Ye = !1,
        n = e(a, u),
        Ye = !1,
        ma && (n = Xs(t, e, a, u)),
        Gs(l),
        n
    }
    function Gs(l) {
        S.H = tu;
        var t = cl !== null && cl.next !== null;
        if (Xt = 0,
        El = cl = V = null,
        ln = !1,
        Ia = 0,
        ha = null,
        t)
            throw Error(o(300));
        l === null || Nl || (l = l.dependencies,
        l !== null && wu(l) && (Nl = !0))
    }
    function Xs(l, t, e, a) {
        V = l;
        var u = 0;
        do {
            if (ma && (ha = null),
            Ia = 0,
            ma = !1,
            25 <= u)
                throw Error(o(301));
            if (u += 1,
            El = cl = null,
            l.updateQueue != null) {
                var n = l.updateQueue;
                n.lastEffect = null,
                n.events = null,
                n.stores = null,
                n.memoCache != null && (n.memoCache.index = 0)
            }
            S.H = To,
            n = t(e, a)
        } while (ma);
        return n
    }
    function $0() {
        var l = S.H
          , t = l.useState()[0];
        return t = typeof t.then == "function" ? Pa(t) : t,
        l = l.useState()[0],
        (cl !== null ? cl.memoizedState : null) !== l && (V.flags |= 1024),
        t
    }
    function Ki() {
        var l = tn !== 0;
        return tn = 0,
        l
    }
    function Ji(l, t, e) {
        t.updateQueue = l.updateQueue,
        t.flags &= -2053,
        l.lanes &= ~e
    }
    function $i(l) {
        if (ln) {
            for (l = l.memoizedState; l !== null; ) {
                var t = l.queue;
                t !== null && (t.pending = null),
                l = l.next
            }
            ln = !1
        }
        Xt = 0,
        El = cl = V = null,
        ma = !1,
        Ia = tn = 0,
        ha = null
    }
    function Xl() {
        var l = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return El === null ? V.memoizedState = El = l : El = El.next = l,
        El
    }
    function zl() {
        if (cl === null) {
            var l = V.alternate;
            l = l !== null ? l.memoizedState : null
        } else
            l = cl.next;
        var t = El === null ? V.memoizedState : El.next;
        if (t !== null)
            El = t,
            cl = l;
        else {
            if (l === null)
                throw V.alternate === null ? Error(o(467)) : Error(o(310));
            cl = l,
            l = {
                memoizedState: cl.memoizedState,
                baseState: cl.baseState,
                baseQueue: cl.baseQueue,
                queue: cl.queue,
                next: null
            },
            El === null ? V.memoizedState = El = l : El = El.next = l
        }
        return El
    }
    function en() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Pa(l) {
        var t = Ia;
        return Ia += 1,
        ha === null && (ha = []),
        l = Os(ha, l, t),
        t = V,
        (El === null ? t.memoizedState : El.next) === null && (t = t.alternate,
        S.H = t === null || t.memoizedState === null ? zo : ic),
        l
    }
    function an(l) {
        if (l !== null && typeof l == "object") {
            if (typeof l.then == "function")
                return Pa(l);
            if (l.$$typeof === ql)
                return Ul(l)
        }
        throw Error(o(438, String(l)))
    }
    function ki(l) {
        var t = null
          , e = V.updateQueue;
        if (e !== null && (t = e.memoCache),
        t == null) {
            var a = V.alternate;
            a !== null && (a = a.updateQueue,
            a !== null && (a = a.memoCache,
            a != null && (t = {
                data: a.data.map(function(u) {
                    return u.slice()
                }),
                index: 0
            })))
        }
        if (t == null && (t = {
            data: [],
            index: 0
        }),
        e === null && (e = en(),
        V.updateQueue = e),
        e.memoCache = t,
        e = t.data[t.index],
        e === void 0)
            for (e = t.data[t.index] = Array(l),
            a = 0; a < l; a++)
                e[a] = Ze;
        return t.index++,
        e
    }
    function Qt(l, t) {
        return typeof t == "function" ? t(l) : t
    }
    function un(l) {
        var t = zl();
        return Wi(t, cl, l)
    }
    function Wi(l, t, e) {
        var a = l.queue;
        if (a === null)
            throw Error(o(311));
        a.lastRenderedReducer = e;
        var u = l.baseQueue
          , n = a.pending;
        if (n !== null) {
            if (u !== null) {
                var i = u.next;
                u.next = n.next,
                n.next = i
            }
            t.baseQueue = u = n,
            a.pending = null
        }
        if (n = l.baseState,
        u === null)
            l.memoizedState = n;
        else {
            t = u.next;
            var c = i = null
              , f = null
              , v = t
              , x = !1;
            do {
                var z = v.lane & -536870913;
                if (z !== v.lane ? (W & z) === z : (Xt & z) === z) {
                    var y = v.revertLane;
                    if (y === 0)
                        f !== null && (f = f.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        }),
                        z === fa && (x = !0);
                    else if ((Xt & y) === y) {
                        v = v.next,
                        y === fa && (x = !0);
                        continue
                    } else
                        z = {
                            lane: 0,
                            revertLane: v.revertLane,
                            gesture: null,
                            action: v.action,
                            hasEagerState: v.hasEagerState,
                            eagerState: v.eagerState,
                            next: null
                        },
                        f === null ? (c = f = z,
                        i = n) : f = f.next = z,
                        V.lanes |= y,
                        re |= y;
                    z = v.action,
                    Ye && e(n, z),
                    n = v.hasEagerState ? v.eagerState : e(n, z)
                } else
                    y = {
                        lane: z,
                        revertLane: v.revertLane,
                        gesture: v.gesture,
                        action: v.action,
                        hasEagerState: v.hasEagerState,
                        eagerState: v.eagerState,
                        next: null
                    },
                    f === null ? (c = f = y,
                    i = n) : f = f.next = y,
                    V.lanes |= z,
                    re |= z;
                v = v.next
            } while (v !== null && v !== t);
            if (f === null ? i = n : f.next = c,
            !tt(n, l.memoizedState) && (Nl = !0,
            x && (e = sa,
            e !== null)))
                throw e;
            l.memoizedState = n,
            l.baseState = i,
            l.baseQueue = f,
            a.lastRenderedState = n
        }
        return u === null && (a.lanes = 0),
        [l.memoizedState, a.dispatch]
    }
    function Fi(l) {
        var t = zl()
          , e = t.queue;
        if (e === null)
            throw Error(o(311));
        e.lastRenderedReducer = l;
        var a = e.dispatch
          , u = e.pending
          , n = t.memoizedState;
        if (u !== null) {
            e.pending = null;
            var i = u = u.next;
            do
                n = l(n, i.action),
                i = i.next;
            while (i !== u);
            tt(n, t.memoizedState) || (Nl = !0),
            t.memoizedState = n,
            t.baseQueue === null && (t.baseState = n),
            e.lastRenderedState = n
        }
        return [n, a]
    }
    function Qs(l, t, e) {
        var a = V
          , u = zl()
          , n = P;
        if (n) {
            if (e === void 0)
                throw Error(o(407));
            e = e()
        } else
            e = t();
        var i = !tt((cl || u).memoizedState, e);
        if (i && (u.memoizedState = e,
        Nl = !0),
        u = u.queue,
        lc(Vs.bind(null, a, u, l), [l]),
        u.getSnapshot !== t || i || El !== null && El.memoizedState.tag & 1) {
            if (a.flags |= 2048,
            va(9, {
                destroy: void 0
            }, Zs.bind(null, a, u, e, t), null),
            dl === null)
                throw Error(o(349));
            n || (Xt & 127) !== 0 || Ls(a, t, e)
        }
        return e
    }
    function Ls(l, t, e) {
        l.flags |= 16384,
        l = {
            getSnapshot: t,
            value: e
        },
        t = V.updateQueue,
        t === null ? (t = en(),
        V.updateQueue = t,
        t.stores = [l]) : (e = t.stores,
        e === null ? t.stores = [l] : e.push(l))
    }
    function Zs(l, t, e, a) {
        t.value = e,
        t.getSnapshot = a,
        ws(t) && Ks(l)
    }
    function Vs(l, t, e) {
        return e(function() {
            ws(t) && Ks(l)
        })
    }
    function ws(l) {
        var t = l.getSnapshot;
        l = l.value;
        try {
            var e = t();
            return !tt(l, e)
        } catch {
            return !0
        }
    }
    function Ks(l) {
        var t = je(l, 2);
        t !== null && Wl(t, l, 2)
    }
    function Ii(l) {
        var t = Xl();
        if (typeof l == "function") {
            var e = l;
            if (l = e(),
            Ye) {
                Ft(!0);
                try {
                    e()
                } finally {
                    Ft(!1)
                }
            }
        }
        return t.memoizedState = t.baseState = l,
        t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Qt,
            lastRenderedState: l
        },
        t
    }
    function Js(l, t, e, a) {
        return l.baseState = e,
        Wi(l, cl, typeof a == "function" ? a : Qt)
    }
    function k0(l, t, e, a, u) {
        if (fn(l))
            throw Error(o(485));
        if (l = t.action,
        l !== null) {
            var n = {
                payload: u,
                action: l,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(i) {
                    n.listeners.push(i)
                }
            };
            S.T !== null ? e(!0) : n.isTransition = !1,
            a(n),
            e = t.pending,
            e === null ? (n.next = t.pending = n,
            $s(t, n)) : (n.next = e.next,
            t.pending = e.next = n)
        }
    }
    function $s(l, t) {
        var e = t.action
          , a = t.payload
          , u = l.state;
        if (t.isTransition) {
            var n = S.T
              , i = {};
            S.T = i;
            try {
                var c = e(u, a)
                  , f = S.S;
                f !== null && f(i, c),
                ks(l, t, c)
            } catch (v) {
                Pi(l, t, v)
            } finally {
                n !== null && i.types !== null && (n.types = i.types),
                S.T = n
            }
        } else
            try {
                n = e(u, a),
                ks(l, t, n)
            } catch (v) {
                Pi(l, t, v)
            }
    }
    function ks(l, t, e) {
        e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
            Ws(l, t, a)
        }, function(a) {
            return Pi(l, t, a)
        }) : Ws(l, t, e)
    }
    function Ws(l, t, e) {
        t.status = "fulfilled",
        t.value = e,
        Fs(t),
        l.state = e,
        t = l.pending,
        t !== null && (e = t.next,
        e === t ? l.pending = null : (e = e.next,
        t.next = e,
        $s(l, e)))
    }
    function Pi(l, t, e) {
        var a = l.pending;
        if (l.pending = null,
        a !== null) {
            a = a.next;
            do
                t.status = "rejected",
                t.reason = e,
                Fs(t),
                t = t.next;
            while (t !== a)
        }
        l.action = null
    }
    function Fs(l) {
        l = l.listeners;
        for (var t = 0; t < l.length; t++)
            (0,
            l[t])()
    }
    function Is(l, t) {
        return t
    }
    function Ps(l, t) {
        if (P) {
            var e = dl.formState;
            if (e !== null) {
                l: {
                    var a = V;
                    if (P) {
                        if (ml) {
                            t: {
                                for (var u = ml, n = vt; u.nodeType !== 8; ) {
                                    if (!n) {
                                        u = null;
                                        break t
                                    }
                                    if (u = gt(u.nextSibling),
                                    u === null) {
                                        u = null;
                                        break t
                                    }
                                }
                                n = u.data,
                                u = n === "F!" || n === "F" ? u : null
                            }
                            if (u) {
                                ml = gt(u.nextSibling),
                                a = u.data === "F!";
                                break l
                            }
                        }
                        ee(a)
                    }
                    a = !1
                }
                a && (t = e[0])
            }
        }
        return e = Xl(),
        e.memoizedState = e.baseState = t,
        a = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Is,
            lastRenderedState: t
        },
        e.queue = a,
        e = xo.bind(null, V, a),
        a.dispatch = e,
        a = Ii(!1),
        n = nc.bind(null, V, !1, a.queue),
        a = Xl(),
        u = {
            state: t,
            dispatch: null,
            action: l,
            pending: null
        },
        a.queue = u,
        e = k0.bind(null, V, u, n, e),
        u.dispatch = e,
        a.memoizedState = l,
        [t, e, !1]
    }
    function lo(l) {
        var t = zl();
        return to(t, cl, l)
    }
    function to(l, t, e) {
        if (t = Wi(l, t, Is)[0],
        l = un(Qt)[0],
        typeof t == "object" && t !== null && typeof t.then == "function")
            try {
                var a = Pa(t)
            } catch (i) {
                throw i === oa ? $u : i
            }
        else
            a = t;
        t = zl();
        var u = t.queue
          , n = u.dispatch;
        return e !== t.memoizedState && (V.flags |= 2048,
        va(9, {
            destroy: void 0
        }, W0.bind(null, u, e), null)),
        [a, n, l]
    }
    function W0(l, t) {
        l.action = t
    }
    function eo(l) {
        var t = zl()
          , e = cl;
        if (e !== null)
            return to(t, e, l);
        zl(),
        t = t.memoizedState,
        e = zl();
        var a = e.queue.dispatch;
        return e.memoizedState = l,
        [t, a, !1]
    }
    function va(l, t, e, a) {
        return l = {
            tag: l,
            create: e,
            deps: a,
            inst: t,
            next: null
        },
        t = V.updateQueue,
        t === null && (t = en(),
        V.updateQueue = t),
        e = t.lastEffect,
        e === null ? t.lastEffect = l.next = l : (a = e.next,
        e.next = l,
        l.next = a,
        t.lastEffect = l),
        l
    }
    function ao() {
        return zl().memoizedState
    }
    function nn(l, t, e, a) {
        var u = Xl();
        V.flags |= l,
        u.memoizedState = va(1 | t, {
            destroy: void 0
        }, e, a === void 0 ? null : a)
    }
    function cn(l, t, e, a) {
        var u = zl();
        a = a === void 0 ? null : a;
        var n = u.memoizedState.inst;
        cl !== null && a !== null && Vi(a, cl.memoizedState.deps) ? u.memoizedState = va(t, n, e, a) : (V.flags |= l,
        u.memoizedState = va(1 | t, n, e, a))
    }
    function uo(l, t) {
        nn(8390656, 8, l, t)
    }
    function lc(l, t) {
        cn(2048, 8, l, t)
    }
    function F0(l) {
        V.flags |= 4;
        var t = V.updateQueue;
        if (t === null)
            t = en(),
            V.updateQueue = t,
            t.events = [l];
        else {
            var e = t.events;
            e === null ? t.events = [l] : e.push(l)
        }
    }
    function no(l) {
        var t = zl().memoizedState;
        return F0({
            ref: t,
            nextImpl: l
        }),
        function() {
            if ((el & 2) !== 0)
                throw Error(o(440));
            return t.impl.apply(void 0, arguments)
        }
    }
    function io(l, t) {
        return cn(4, 2, l, t)
    }
    function co(l, t) {
        return cn(4, 4, l, t)
    }
    function fo(l, t) {
        if (typeof t == "function") {
            l = l();
            var e = t(l);
            return function() {
                typeof e == "function" ? e() : t(null)
            }
        }
        if (t != null)
            return l = l(),
            t.current = l,
            function() {
                t.current = null
            }
    }
    function so(l, t, e) {
        e = e != null ? e.concat([l]) : null,
        cn(4, 4, fo.bind(null, t, l), e)
    }
    function tc() {}
    function oo(l, t) {
        var e = zl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        return t !== null && Vi(t, a[1]) ? a[0] : (e.memoizedState = [l, t],
        l)
    }
    function ro(l, t) {
        var e = zl();
        t = t === void 0 ? null : t;
        var a = e.memoizedState;
        if (t !== null && Vi(t, a[1]))
            return a[0];
        if (a = l(),
        Ye) {
            Ft(!0);
            try {
                l()
            } finally {
                Ft(!1)
            }
        }
        return e.memoizedState = [a, t],
        a
    }
    function ec(l, t, e) {
        return e === void 0 || (Xt & 1073741824) !== 0 && (W & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e,
        l = mr(),
        V.lanes |= l,
        re |= l,
        e)
    }
    function mo(l, t, e, a) {
        return tt(e, t) ? e : da.current !== null ? (l = ec(l, e, a),
        tt(l, t) || (Nl = !0),
        l) : (Xt & 42) === 0 || (Xt & 1073741824) !== 0 && (W & 261930) === 0 ? (Nl = !0,
        l.memoizedState = e) : (l = mr(),
        V.lanes |= l,
        re |= l,
        t)
    }
    function ho(l, t, e, a, u) {
        var n = M.p;
        M.p = n !== 0 && 8 > n ? n : 8;
        var i = S.T
          , c = {};
        S.T = c,
        nc(l, !1, t, e);
        try {
            var f = u()
              , v = S.S;
            if (v !== null && v(c, f),
            f !== null && typeof f == "object" && typeof f.then == "function") {
                var x = K0(f, a);
                lu(l, t, x, ct(l))
            } else
                lu(l, t, a, ct(l))
        } catch (z) {
            lu(l, t, {
                then: function() {},
                status: "rejected",
                reason: z
            }, ct())
        } finally {
            M.p = n,
            i !== null && c.types !== null && (i.types = c.types),
            S.T = i
        }
    }
    function I0() {}
    function ac(l, t, e, a) {
        if (l.tag !== 5)
            throw Error(o(476));
        var u = vo(l).queue;
        ho(l, u, t, G, e === null ? I0 : function() {
            return yo(l),
            e(a)
        }
        )
    }
    function vo(l) {
        var t = l.memoizedState;
        if (t !== null)
            return t;
        t = {
            memoizedState: G,
            baseState: G,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: G
            },
            next: null
        };
        var e = {};
        return t.next = {
            memoizedState: e,
            baseState: e,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Qt,
                lastRenderedState: e
            },
            next: null
        },
        l.memoizedState = t,
        l = l.alternate,
        l !== null && (l.memoizedState = t),
        t
    }
    function yo(l) {
        var t = vo(l);
        t.next === null && (t = l.alternate.memoizedState),
        lu(l, t.next.queue, {}, ct())
    }
    function uc() {
        return Ul(gu)
    }
    function go() {
        return zl().memoizedState
    }
    function bo() {
        return zl().memoizedState
    }
    function P0(l) {
        for (var t = l.return; t !== null; ) {
            switch (t.tag) {
            case 24:
            case 3:
                var e = ct();
                l = ne(e);
                var a = ie(t, l, e);
                a !== null && (Wl(a, t, e),
                ka(a, t, e)),
                t = {
                    cache: Ui()
                },
                l.payload = t;
                return
            }
            t = t.return
        }
    }
    function lm(l, t, e) {
        var a = ct();
        e = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        fn(l) ? So(t, e) : (e = zi(l, t, e, a),
        e !== null && (Wl(e, l, a),
        po(e, t, a)))
    }
    function xo(l, t, e) {
        var a = ct();
        lu(l, t, e, a)
    }
    function lu(l, t, e, a) {
        var u = {
            lane: a,
            revertLane: 0,
            gesture: null,
            action: e,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (fn(l))
            So(t, u);
        else {
            var n = l.alternate;
            if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer,
            n !== null))
                try {
                    var i = t.lastRenderedState
                      , c = n(i, e);
                    if (u.hasEagerState = !0,
                    u.eagerState = c,
                    tt(c, i))
                        return Qu(l, t, u, 0),
                        dl === null && Xu(),
                        !1
                } catch {} finally {}
            if (e = zi(l, t, u, a),
            e !== null)
                return Wl(e, l, a),
                po(e, t, a),
                !0
        }
        return !1
    }
    function nc(l, t, e, a) {
        if (a = {
            lane: 2,
            revertLane: Bc(),
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        fn(l)) {
            if (t)
                throw Error(o(479))
        } else
            t = zi(l, e, a, 2),
            t !== null && Wl(t, l, 2)
    }
    function fn(l) {
        var t = l.alternate;
        return l === V || t !== null && t === V
    }
    function So(l, t) {
        ma = ln = !0;
        var e = l.pending;
        e === null ? t.next = t : (t.next = e.next,
        e.next = t),
        l.pending = t
    }
    function po(l, t, e) {
        if ((e & 4194048) !== 0) {
            var a = t.lanes;
            a &= l.pendingLanes,
            e |= a,
            t.lanes = e,
            Nf(l, e)
        }
    }
    var tu = {
        readContext: Ul,
        use: an,
        useCallback: bl,
        useContext: bl,
        useEffect: bl,
        useImperativeHandle: bl,
        useLayoutEffect: bl,
        useInsertionEffect: bl,
        useMemo: bl,
        useReducer: bl,
        useRef: bl,
        useState: bl,
        useDebugValue: bl,
        useDeferredValue: bl,
        useTransition: bl,
        useSyncExternalStore: bl,
        useId: bl,
        useHostTransitionStatus: bl,
        useFormState: bl,
        useActionState: bl,
        useOptimistic: bl,
        useMemoCache: bl,
        useCacheRefresh: bl
    };
    tu.useEffectEvent = bl;
    var zo = {
        readContext: Ul,
        use: an,
        useCallback: function(l, t) {
            return Xl().memoizedState = [l, t === void 0 ? null : t],
            l
        },
        useContext: Ul,
        useEffect: uo,
        useImperativeHandle: function(l, t, e) {
            e = e != null ? e.concat([l]) : null,
            nn(4194308, 4, fo.bind(null, t, l), e)
        },
        useLayoutEffect: function(l, t) {
            return nn(4194308, 4, l, t)
        },
        useInsertionEffect: function(l, t) {
            nn(4, 2, l, t)
        },
        useMemo: function(l, t) {
            var e = Xl();
            t = t === void 0 ? null : t;
            var a = l();
            if (Ye) {
                Ft(!0);
                try {
                    l()
                } finally {
                    Ft(!1)
                }
            }
            return e.memoizedState = [a, t],
            a
        },
        useReducer: function(l, t, e) {
            var a = Xl();
            if (e !== void 0) {
                var u = e(t);
                if (Ye) {
                    Ft(!0);
                    try {
                        e(t)
                    } finally {
                        Ft(!1)
                    }
                }
            } else
                u = t;
            return a.memoizedState = a.baseState = u,
            l = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: l,
                lastRenderedState: u
            },
            a.queue = l,
            l = l.dispatch = lm.bind(null, V, l),
            [a.memoizedState, l]
        },
        useRef: function(l) {
            var t = Xl();
            return l = {
                current: l
            },
            t.memoizedState = l
        },
        useState: function(l) {
            l = Ii(l);
            var t = l.queue
              , e = xo.bind(null, V, t);
            return t.dispatch = e,
            [l.memoizedState, e]
        },
        useDebugValue: tc,
        useDeferredValue: function(l, t) {
            var e = Xl();
            return ec(e, l, t)
        },
        useTransition: function() {
            var l = Ii(!1);
            return l = ho.bind(null, V, l.queue, !0, !1),
            Xl().memoizedState = l,
            [!1, l]
        },
        useSyncExternalStore: function(l, t, e) {
            var a = V
              , u = Xl();
            if (P) {
                if (e === void 0)
                    throw Error(o(407));
                e = e()
            } else {
                if (e = t(),
                dl === null)
                    throw Error(o(349));
                (W & 127) !== 0 || Ls(a, t, e)
            }
            u.memoizedState = e;
            var n = {
                value: e,
                getSnapshot: t
            };
            return u.queue = n,
            uo(Vs.bind(null, a, n, l), [l]),
            a.flags |= 2048,
            va(9, {
                destroy: void 0
            }, Zs.bind(null, a, n, e, t), null),
            e
        },
        useId: function() {
            var l = Xl()
              , t = dl.identifierPrefix;
            if (P) {
                var e = jt
                  , a = _t;
                e = (a & ~(1 << 32 - lt(a) - 1)).toString(32) + e,
                t = "_" + t + "R_" + e,
                e = tn++,
                0 < e && (t += "H" + e.toString(32)),
                t += "_"
            } else
                e = J0++,
                t = "_" + t + "r_" + e.toString(32) + "_";
            return l.memoizedState = t
        },
        useHostTransitionStatus: uc,
        useFormState: Ps,
        useActionState: Ps,
        useOptimistic: function(l) {
            var t = Xl();
            t.memoizedState = t.baseState = l;
            var e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = e,
            t = nc.bind(null, V, !0, e),
            e.dispatch = t,
            [l, t]
        },
        useMemoCache: ki,
        useCacheRefresh: function() {
            return Xl().memoizedState = P0.bind(null, V)
        },
        useEffectEvent: function(l) {
            var t = Xl()
              , e = {
                impl: l
            };
            return t.memoizedState = e,
            function() {
                if ((el & 2) !== 0)
                    throw Error(o(440));
                return e.impl.apply(void 0, arguments)
            }
        }
    }
      , ic = {
        readContext: Ul,
        use: an,
        useCallback: oo,
        useContext: Ul,
        useEffect: lc,
        useImperativeHandle: so,
        useInsertionEffect: io,
        useLayoutEffect: co,
        useMemo: ro,
        useReducer: un,
        useRef: ao,
        useState: function() {
            return un(Qt)
        },
        useDebugValue: tc,
        useDeferredValue: function(l, t) {
            var e = zl();
            return mo(e, cl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = un(Qt)[0]
              , t = zl().memoizedState;
            return [typeof l == "boolean" ? l : Pa(l), t]
        },
        useSyncExternalStore: Qs,
        useId: go,
        useHostTransitionStatus: uc,
        useFormState: lo,
        useActionState: lo,
        useOptimistic: function(l, t) {
            var e = zl();
            return Js(e, cl, l, t)
        },
        useMemoCache: ki,
        useCacheRefresh: bo
    };
    ic.useEffectEvent = no;
    var To = {
        readContext: Ul,
        use: an,
        useCallback: oo,
        useContext: Ul,
        useEffect: lc,
        useImperativeHandle: so,
        useInsertionEffect: io,
        useLayoutEffect: co,
        useMemo: ro,
        useReducer: Fi,
        useRef: ao,
        useState: function() {
            return Fi(Qt)
        },
        useDebugValue: tc,
        useDeferredValue: function(l, t) {
            var e = zl();
            return cl === null ? ec(e, l, t) : mo(e, cl.memoizedState, l, t)
        },
        useTransition: function() {
            var l = Fi(Qt)[0]
              , t = zl().memoizedState;
            return [typeof l == "boolean" ? l : Pa(l), t]
        },
        useSyncExternalStore: Qs,
        useId: go,
        useHostTransitionStatus: uc,
        useFormState: eo,
        useActionState: eo,
        useOptimistic: function(l, t) {
            var e = zl();
            return cl !== null ? Js(e, cl, l, t) : (e.baseState = l,
            [l, e.queue.dispatch])
        },
        useMemoCache: ki,
        useCacheRefresh: bo
    };
    To.useEffectEvent = no;
    function cc(l, t, e, a) {
        t = l.memoizedState,
        e = e(a, t),
        e = e == null ? t : D({}, t, e),
        l.memoizedState = e,
        l.lanes === 0 && (l.updateQueue.baseState = e)
    }
    var fc = {
        enqueueSetState: function(l, t, e) {
            l = l._reactInternals;
            var a = ct()
              , u = ne(a);
            u.payload = t,
            e != null && (u.callback = e),
            t = ie(l, u, a),
            t !== null && (Wl(t, l, a),
            ka(t, l, a))
        },
        enqueueReplaceState: function(l, t, e) {
            l = l._reactInternals;
            var a = ct()
              , u = ne(a);
            u.tag = 1,
            u.payload = t,
            e != null && (u.callback = e),
            t = ie(l, u, a),
            t !== null && (Wl(t, l, a),
            ka(t, l, a))
        },
        enqueueForceUpdate: function(l, t) {
            l = l._reactInternals;
            var e = ct()
              , a = ne(e);
            a.tag = 2,
            t != null && (a.callback = t),
            t = ie(l, a, e),
            t !== null && (Wl(t, l, e),
            ka(t, l, e))
        }
    };
    function Eo(l, t, e, a, u, n, i) {
        return l = l.stateNode,
        typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, i) : t.prototype && t.prototype.isPureReactComponent ? !Qa(e, a) || !Qa(u, n) : !0
    }
    function No(l, t, e, a) {
        l = t.state,
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a),
        t.state !== l && fc.enqueueReplaceState(t, t.state, null)
    }
    function Ge(l, t) {
        var e = t;
        if ("ref" in t) {
            e = {};
            for (var a in t)
                a !== "ref" && (e[a] = t[a])
        }
        if (l = l.defaultProps) {
            e === t && (e = D({}, e));
            for (var u in l)
                e[u] === void 0 && (e[u] = l[u])
        }
        return e
    }
    function Ao(l) {
        Gu(l)
    }
    function Mo(l) {
        console.error(l)
    }
    function _o(l) {
        Gu(l)
    }
    function sn(l, t) {
        try {
            var e = l.onUncaughtError;
            e(t.value, {
                componentStack: t.stack
            })
        } catch (a) {
            setTimeout(function() {
                throw a
            })
        }
    }
    function jo(l, t, e) {
        try {
            var a = l.onCaughtError;
            a(e.value, {
                componentStack: e.stack,
                errorBoundary: t.tag === 1 ? t.stateNode : null
            })
        } catch (u) {
            setTimeout(function() {
                throw u
            })
        }
    }
    function sc(l, t, e) {
        return e = ne(e),
        e.tag = 3,
        e.payload = {
            element: null
        },
        e.callback = function() {
            sn(l, t)
        }
        ,
        e
    }
    function Oo(l) {
        return l = ne(l),
        l.tag = 3,
        l
    }
    function Do(l, t, e, a) {
        var u = e.type.getDerivedStateFromError;
        if (typeof u == "function") {
            var n = a.value;
            l.payload = function() {
                return u(n)
            }
            ,
            l.callback = function() {
                jo(t, e, a)
            }
        }
        var i = e.stateNode;
        i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
            jo(t, e, a),
            typeof u != "function" && (de === null ? de = new Set([this]) : de.add(this));
            var c = a.stack;
            this.componentDidCatch(a.value, {
                componentStack: c !== null ? c : ""
            })
        }
        )
    }
    function tm(l, t, e, a, u) {
        if (e.flags |= 32768,
        a !== null && typeof a == "object" && typeof a.then == "function") {
            if (t = e.alternate,
            t !== null && ca(t, e, u, !0),
            e = at.current,
            e !== null) {
                switch (e.tag) {
                case 31:
                case 13:
                    return yt === null ? pn() : e.alternate === null && xl === 0 && (xl = 3),
                    e.flags &= -257,
                    e.flags |= 65536,
                    e.lanes = u,
                    a === ku ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? e.updateQueue = new Set([a]) : t.add(a),
                    Hc(l, a, u)),
                    !1;
                case 22:
                    return e.flags |= 65536,
                    a === ku ? e.flags |= 16384 : (t = e.updateQueue,
                    t === null ? (t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a])
                    },
                    e.updateQueue = t) : (e = t.retryQueue,
                    e === null ? t.retryQueue = new Set([a]) : e.add(a)),
                    Hc(l, a, u)),
                    !1
                }
                throw Error(o(435, e.tag))
            }
            return Hc(l, a, u),
            pn(),
            !1
        }
        if (P)
            return t = at.current,
            t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            t.flags |= 65536,
            t.lanes = u,
            a !== _i && (l = Error(o(422), {
                cause: a
            }),
            Va(dt(l, e)))) : (a !== _i && (t = Error(o(423), {
                cause: a
            }),
            Va(dt(t, e))),
            l = l.current.alternate,
            l.flags |= 65536,
            u &= -u,
            l.lanes |= u,
            a = dt(a, e),
            u = sc(l.stateNode, a, u),
            Gi(l, u),
            xl !== 4 && (xl = 2)),
            !1;
        var n = Error(o(520), {
            cause: a
        });
        if (n = dt(n, e),
        su === null ? su = [n] : su.push(n),
        xl !== 4 && (xl = 2),
        t === null)
            return !0;
        a = dt(a, e),
        e = t;
        do {
            switch (e.tag) {
            case 3:
                return e.flags |= 65536,
                l = u & -u,
                e.lanes |= l,
                l = sc(e.stateNode, a, l),
                Gi(e, l),
                !1;
            case 1:
                if (t = e.type,
                n = e.stateNode,
                (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (de === null || !de.has(n))))
                    return e.flags |= 65536,
                    u &= -u,
                    e.lanes |= u,
                    u = Oo(u),
                    Do(u, l, e, a),
                    Gi(e, u),
                    !1
            }
            e = e.return
        } while (e !== null);
        return !1
    }
    var oc = Error(o(461))
      , Nl = !1;
    function Hl(l, t, e, a) {
        t.child = l === null ? Hs(t, null, e, a) : Be(t, l.child, e, a)
    }
    function Co(l, t, e, a, u) {
        e = e.render;
        var n = t.ref;
        if ("ref" in a) {
            var i = {};
            for (var c in a)
                c !== "ref" && (i[c] = a[c])
        } else
            i = a;
        return Ue(t),
        a = wi(l, t, e, i, n, u),
        c = Ki(),
        l !== null && !Nl ? (Ji(l, t, u),
        Lt(l, t, u)) : (P && c && Ai(t),
        t.flags |= 1,
        Hl(l, t, a, u),
        t.child)
    }
    function Uo(l, t, e, a, u) {
        if (l === null) {
            var n = e.type;
            return typeof n == "function" && !Ti(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15,
            t.type = n,
            Ho(l, t, n, a, u)) : (l = Zu(e.type, null, a, t, t.mode, u),
            l.ref = t.ref,
            l.return = t,
            t.child = l)
        }
        if (n = l.child,
        !bc(l, u)) {
            var i = n.memoizedProps;
            if (e = e.compare,
            e = e !== null ? e : Qa,
            e(i, a) && l.ref === t.ref)
                return Lt(l, t, u)
        }
        return t.flags |= 1,
        l = qt(n, a),
        l.ref = t.ref,
        l.return = t,
        t.child = l
    }
    function Ho(l, t, e, a, u) {
        if (l !== null) {
            var n = l.memoizedProps;
            if (Qa(n, a) && l.ref === t.ref)
                if (Nl = !1,
                t.pendingProps = a = n,
                bc(l, u))
                    (l.flags & 131072) !== 0 && (Nl = !0);
                else
                    return t.lanes = l.lanes,
                    Lt(l, t, u)
        }
        return rc(l, t, e, a, u)
    }
    function Ro(l, t, e, a) {
        var u = a.children
          , n = l !== null ? l.memoizedState : null;
        if (l === null && t.stateNode === null && (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        a.mode === "hidden") {
            if ((t.flags & 128) !== 0) {
                if (n = n !== null ? n.baseLanes | e : e,
                l !== null) {
                    for (a = t.child = l.child,
                    u = 0; a !== null; )
                        u = u | a.lanes | a.childLanes,
                        a = a.sibling;
                    a = u & ~n
                } else
                    a = 0,
                    t.child = null;
                return qo(l, t, n, e, a)
            }
            if ((e & 536870912) !== 0)
                t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                l !== null && Ju(t, n !== null ? n.cachePool : null),
                n !== null ? Bs(t, n) : Qi(),
                Ys(t);
            else
                return a = t.lanes = 536870912,
                qo(l, t, n !== null ? n.baseLanes | e : e, e, a)
        } else
            n !== null ? (Ju(t, n.cachePool),
            Bs(t, n),
            fe(),
            t.memoizedState = null) : (l !== null && Ju(t, null),
            Qi(),
            fe());
        return Hl(l, t, u, e),
        t.child
    }
    function eu(l, t) {
        return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        t.sibling
    }
    function qo(l, t, e, a, u) {
        var n = Ri();
        return n = n === null ? null : {
            parent: Tl._currentValue,
            pool: n
        },
        t.memoizedState = {
            baseLanes: e,
            cachePool: n
        },
        l !== null && Ju(t, null),
        Qi(),
        Ys(t),
        l !== null && ca(l, t, a, !0),
        t.childLanes = u,
        null
    }
    function on(l, t) {
        return t = dn({
            mode: t.mode,
            children: t.children
        }, l.mode),
        t.ref = l.ref,
        l.child = t,
        t.return = l,
        t
    }
    function Bo(l, t, e) {
        return Be(t, l.child, null, e),
        l = on(t, t.pendingProps),
        l.flags |= 2,
        ut(t),
        t.memoizedState = null,
        l
    }
    function em(l, t, e) {
        var a = t.pendingProps
          , u = (t.flags & 128) !== 0;
        if (t.flags &= -129,
        l === null) {
            if (P) {
                if (a.mode === "hidden")
                    return l = on(t, a),
                    t.lanes = 536870912,
                    eu(null, l);
                if (Zi(t),
                (l = ml) ? (l = kr(l, vt),
                l = l !== null && l.data === "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: le !== null ? {
                        id: _t,
                        overflow: jt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = xs(l),
                e.return = t,
                t.child = e,
                Cl = t,
                ml = null)) : l = null,
                l === null)
                    throw ee(t);
                return t.lanes = 536870912,
                null
            }
            return on(t, a)
        }
        var n = l.memoizedState;
        if (n !== null) {
            var i = n.dehydrated;
            if (Zi(t),
            u)
                if (t.flags & 256)
                    t.flags &= -257,
                    t = Bo(l, t, e);
                else if (t.memoizedState !== null)
                    t.child = l.child,
                    t.flags |= 128,
                    t = null;
                else
                    throw Error(o(558));
            else if (Nl || ca(l, t, e, !1),
            u = (e & l.childLanes) !== 0,
            Nl || u) {
                if (a = dl,
                a !== null && (i = Af(a, e),
                i !== 0 && i !== n.retryLane))
                    throw n.retryLane = i,
                    je(l, i),
                    Wl(a, l, i),
                    oc;
                pn(),
                t = Bo(l, t, e)
            } else
                l = n.treeContext,
                ml = gt(i.nextSibling),
                Cl = t,
                P = !0,
                te = null,
                vt = !1,
                l !== null && zs(t, l),
                t = on(t, a),
                t.flags |= 4096;
            return t
        }
        return l = qt(l.child, {
            mode: a.mode,
            children: a.children
        }),
        l.ref = t.ref,
        t.child = l,
        l.return = t,
        l
    }
    function rn(l, t) {
        var e = t.ref;
        if (e === null)
            l !== null && l.ref !== null && (t.flags |= 4194816);
        else {
            if (typeof e != "function" && typeof e != "object")
                throw Error(o(284));
            (l === null || l.ref !== e) && (t.flags |= 4194816)
        }
    }
    function rc(l, t, e, a, u) {
        return Ue(t),
        e = wi(l, t, e, a, void 0, u),
        a = Ki(),
        l !== null && !Nl ? (Ji(l, t, u),
        Lt(l, t, u)) : (P && a && Ai(t),
        t.flags |= 1,
        Hl(l, t, e, u),
        t.child)
    }
    function Yo(l, t, e, a, u, n) {
        return Ue(t),
        t.updateQueue = null,
        e = Xs(t, a, e, u),
        Gs(l),
        a = Ki(),
        l !== null && !Nl ? (Ji(l, t, n),
        Lt(l, t, n)) : (P && a && Ai(t),
        t.flags |= 1,
        Hl(l, t, e, n),
        t.child)
    }
    function Go(l, t, e, a, u) {
        if (Ue(t),
        t.stateNode === null) {
            var n = aa
              , i = e.contextType;
            typeof i == "object" && i !== null && (n = Ul(i)),
            n = new e(a,n),
            t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
            n.updater = fc,
            t.stateNode = n,
            n._reactInternals = t,
            n = t.stateNode,
            n.props = a,
            n.state = t.memoizedState,
            n.refs = {},
            Bi(t),
            i = e.contextType,
            n.context = typeof i == "object" && i !== null ? Ul(i) : aa,
            n.state = t.memoizedState,
            i = e.getDerivedStateFromProps,
            typeof i == "function" && (cc(t, e, i, a),
            n.state = t.memoizedState),
            typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (i = n.state,
            typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
            i !== n.state && fc.enqueueReplaceState(n, n.state, null),
            Fa(t, a, n, u),
            Wa(),
            n.state = t.memoizedState),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !0
        } else if (l === null) {
            n = t.stateNode;
            var c = t.memoizedProps
              , f = Ge(e, c);
            n.props = f;
            var v = n.context
              , x = e.contextType;
            i = aa,
            typeof x == "object" && x !== null && (i = Ul(x));
            var z = e.getDerivedStateFromProps;
            x = typeof z == "function" || typeof n.getSnapshotBeforeUpdate == "function",
            c = t.pendingProps !== c,
            x || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || v !== i) && No(t, n, a, i),
            ue = !1;
            var y = t.memoizedState;
            n.state = y,
            Fa(t, a, n, u),
            Wa(),
            v = t.memoizedState,
            c || y !== v || ue ? (typeof z == "function" && (cc(t, e, z, a),
            v = t.memoizedState),
            (f = ue || Eo(t, e, f, a, y, v, i)) ? (x || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
            typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
            typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            t.memoizedProps = a,
            t.memoizedState = v),
            n.props = a,
            n.state = v,
            n.context = i,
            a = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            a = !1)
        } else {
            n = t.stateNode,
            Yi(l, t),
            i = t.memoizedProps,
            x = Ge(e, i),
            n.props = x,
            z = t.pendingProps,
            y = n.context,
            v = e.contextType,
            f = aa,
            typeof v == "object" && v !== null && (f = Ul(v)),
            c = e.getDerivedStateFromProps,
            (v = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i !== z || y !== f) && No(t, n, a, f),
            ue = !1,
            y = t.memoizedState,
            n.state = y,
            Fa(t, a, n, u),
            Wa();
            var b = t.memoizedState;
            i !== z || y !== b || ue || l !== null && l.dependencies !== null && wu(l.dependencies) ? (typeof c == "function" && (cc(t, e, c, a),
            b = t.memoizedState),
            (x = ue || Eo(t, e, x, a, y, b, f) || l !== null && l.dependencies !== null && wu(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, b, f),
            typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(a, b, f)),
            typeof n.componentDidUpdate == "function" && (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024),
            t.memoizedProps = a,
            t.memoizedState = b),
            n.props = a,
            n.state = b,
            n.context = f,
            a = x) : (typeof n.componentDidUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 4),
            typeof n.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && y === l.memoizedState || (t.flags |= 1024),
            a = !1)
        }
        return n = a,
        rn(l, t),
        a = (t.flags & 128) !== 0,
        n || a ? (n = t.stateNode,
        e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(),
        t.flags |= 1,
        l !== null && a ? (t.child = Be(t, l.child, null, u),
        t.child = Be(t, null, e, u)) : Hl(l, t, e, u),
        t.memoizedState = n.state,
        l = t.child) : l = Lt(l, t, u),
        l
    }
    function Xo(l, t, e, a) {
        return De(),
        t.flags |= 256,
        Hl(l, t, e, a),
        t.child
    }
    var dc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function mc(l) {
        return {
            baseLanes: l,
            cachePool: _s()
        }
    }
    function hc(l, t, e) {
        return l = l !== null ? l.childLanes & ~e : 0,
        t && (l |= it),
        l
    }
    function Qo(l, t, e) {
        var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, i;
        if ((i = n) || (i = l !== null && l.memoizedState === null ? !1 : (pl.current & 2) !== 0),
        i && (u = !0,
        t.flags &= -129),
        i = (t.flags & 32) !== 0,
        t.flags &= -33,
        l === null) {
            if (P) {
                if (u ? ce(t) : fe(),
                (l = ml) ? (l = kr(l, vt),
                l = l !== null && l.data !== "&" ? l : null,
                l !== null && (t.memoizedState = {
                    dehydrated: l,
                    treeContext: le !== null ? {
                        id: _t,
                        overflow: jt
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                e = xs(l),
                e.return = t,
                t.child = e,
                Cl = t,
                ml = null)) : l = null,
                l === null)
                    throw ee(t);
                return Wc(l) ? t.lanes = 32 : t.lanes = 536870912,
                null
            }
            var c = a.children;
            return a = a.fallback,
            u ? (fe(),
            u = t.mode,
            c = dn({
                mode: "hidden",
                children: c
            }, u),
            a = Oe(a, u, e, null),
            c.return = t,
            a.return = t,
            c.sibling = a,
            t.child = c,
            a = t.child,
            a.memoizedState = mc(e),
            a.childLanes = hc(l, i, e),
            t.memoizedState = dc,
            eu(null, a)) : (ce(t),
            vc(t, c))
        }
        var f = l.memoizedState;
        if (f !== null && (c = f.dehydrated,
        c !== null)) {
            if (n)
                t.flags & 256 ? (ce(t),
                t.flags &= -257,
                t = yc(l, t, e)) : t.memoizedState !== null ? (fe(),
                t.child = l.child,
                t.flags |= 128,
                t = null) : (fe(),
                c = a.fallback,
                u = t.mode,
                a = dn({
                    mode: "visible",
                    children: a.children
                }, u),
                c = Oe(c, u, e, null),
                c.flags |= 2,
                a.return = t,
                c.return = t,
                a.sibling = c,
                t.child = a,
                Be(t, l.child, null, e),
                a = t.child,
                a.memoizedState = mc(e),
                a.childLanes = hc(l, i, e),
                t.memoizedState = dc,
                t = eu(null, a));
            else if (ce(t),
            Wc(c)) {
                if (i = c.nextSibling && c.nextSibling.dataset,
                i)
                    var v = i.dgst;
                i = v,
                a = Error(o(419)),
                a.stack = "",
                a.digest = i,
                Va({
                    value: a,
                    source: null,
                    stack: null
                }),
                t = yc(l, t, e)
            } else if (Nl || ca(l, t, e, !1),
            i = (e & l.childLanes) !== 0,
            Nl || i) {
                if (i = dl,
                i !== null && (a = Af(i, e),
                a !== 0 && a !== f.retryLane))
                    throw f.retryLane = a,
                    je(l, a),
                    Wl(i, l, a),
                    oc;
                kc(c) || pn(),
                t = yc(l, t, e)
            } else
                kc(c) ? (t.flags |= 192,
                t.child = l.child,
                t = null) : (l = f.treeContext,
                ml = gt(c.nextSibling),
                Cl = t,
                P = !0,
                te = null,
                vt = !1,
                l !== null && zs(t, l),
                t = vc(t, a.children),
                t.flags |= 4096);
            return t
        }
        return u ? (fe(),
        c = a.fallback,
        u = t.mode,
        f = l.child,
        v = f.sibling,
        a = qt(f, {
            mode: "hidden",
            children: a.children
        }),
        a.subtreeFlags = f.subtreeFlags & 65011712,
        v !== null ? c = qt(v, c) : (c = Oe(c, u, e, null),
        c.flags |= 2),
        c.return = t,
        a.return = t,
        a.sibling = c,
        t.child = a,
        eu(null, a),
        a = t.child,
        c = l.child.memoizedState,
        c === null ? c = mc(e) : (u = c.cachePool,
        u !== null ? (f = Tl._currentValue,
        u = u.parent !== f ? {
            parent: f,
            pool: f
        } : u) : u = _s(),
        c = {
            baseLanes: c.baseLanes | e,
            cachePool: u
        }),
        a.memoizedState = c,
        a.childLanes = hc(l, i, e),
        t.memoizedState = dc,
        eu(l.child, a)) : (ce(t),
        e = l.child,
        l = e.sibling,
        e = qt(e, {
            mode: "visible",
            children: a.children
        }),
        e.return = t,
        e.sibling = null,
        l !== null && (i = t.deletions,
        i === null ? (t.deletions = [l],
        t.flags |= 16) : i.push(l)),
        t.child = e,
        t.memoizedState = null,
        e)
    }
    function vc(l, t) {
        return t = dn({
            mode: "visible",
            children: t
        }, l.mode),
        t.return = l,
        l.child = t
    }
    function dn(l, t) {
        return l = et(22, l, null, t),
        l.lanes = 0,
        l
    }
    function yc(l, t, e) {
        return Be(t, l.child, null, e),
        l = vc(t, t.pendingProps.children),
        l.flags |= 2,
        t.memoizedState = null,
        l
    }
    function Lo(l, t, e) {
        l.lanes |= t;
        var a = l.alternate;
        a !== null && (a.lanes |= t),
        Di(l.return, t, e)
    }
    function gc(l, t, e, a, u, n) {
        var i = l.memoizedState;
        i === null ? l.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: a,
            tail: e,
            tailMode: u,
            treeForkCount: n
        } : (i.isBackwards = t,
        i.rendering = null,
        i.renderingStartTime = 0,
        i.last = a,
        i.tail = e,
        i.tailMode = u,
        i.treeForkCount = n)
    }
    function Zo(l, t, e) {
        var a = t.pendingProps
          , u = a.revealOrder
          , n = a.tail;
        a = a.children;
        var i = pl.current
          , c = (i & 2) !== 0;
        if (c ? (i = i & 1 | 2,
        t.flags |= 128) : i &= 1,
        _(pl, i),
        Hl(l, t, a, e),
        a = P ? Za : 0,
        !c && l !== null && (l.flags & 128) !== 0)
            l: for (l = t.child; l !== null; ) {
                if (l.tag === 13)
                    l.memoizedState !== null && Lo(l, e, t);
                else if (l.tag === 19)
                    Lo(l, e, t);
                else if (l.child !== null) {
                    l.child.return = l,
                    l = l.child;
                    continue
                }
                if (l === t)
                    break l;
                for (; l.sibling === null; ) {
                    if (l.return === null || l.return === t)
                        break l;
                    l = l.return
                }
                l.sibling.return = l.return,
                l = l.sibling
            }
        switch (u) {
        case "forwards":
            for (e = t.child,
            u = null; e !== null; )
                l = e.alternate,
                l !== null && Pu(l) === null && (u = e),
                e = e.sibling;
            e = u,
            e === null ? (u = t.child,
            t.child = null) : (u = e.sibling,
            e.sibling = null),
            gc(t, !1, u, e, n, a);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (e = null,
            u = t.child,
            t.child = null; u !== null; ) {
                if (l = u.alternate,
                l !== null && Pu(l) === null) {
                    t.child = u;
                    break
                }
                l = u.sibling,
                u.sibling = e,
                e = u,
                u = l
            }
            gc(t, !0, e, null, n, a);
            break;
        case "together":
            gc(t, !1, null, null, void 0, a);
            break;
        default:
            t.memoizedState = null
        }
        return t.child
    }
    function Lt(l, t, e) {
        if (l !== null && (t.dependencies = l.dependencies),
        re |= t.lanes,
        (e & t.childLanes) === 0)
            if (l !== null) {
                if (ca(l, t, e, !1),
                (e & t.childLanes) === 0)
                    return null
            } else
                return null;
        if (l !== null && t.child !== l.child)
            throw Error(o(153));
        if (t.child !== null) {
            for (l = t.child,
            e = qt(l, l.pendingProps),
            t.child = e,
            e.return = t; l.sibling !== null; )
                l = l.sibling,
                e = e.sibling = qt(l, l.pendingProps),
                e.return = t;
            e.sibling = null
        }
        return t.child
    }
    function bc(l, t) {
        return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies,
        !!(l !== null && wu(l)))
    }
    function am(l, t, e) {
        switch (t.tag) {
        case 3:
            Gl(t, t.stateNode.containerInfo),
            ae(t, Tl, l.memoizedState.cache),
            De();
            break;
        case 27:
        case 5:
            _a(t);
            break;
        case 4:
            Gl(t, t.stateNode.containerInfo);
            break;
        case 10:
            ae(t, t.type, t.memoizedProps.value);
            break;
        case 31:
            if (t.memoizedState !== null)
                return t.flags |= 128,
                Zi(t),
                null;
            break;
        case 13:
            var a = t.memoizedState;
            if (a !== null)
                return a.dehydrated !== null ? (ce(t),
                t.flags |= 128,
                null) : (e & t.child.childLanes) !== 0 ? Qo(l, t, e) : (ce(t),
                l = Lt(l, t, e),
                l !== null ? l.sibling : null);
            ce(t);
            break;
        case 19:
            var u = (l.flags & 128) !== 0;
            if (a = (e & t.childLanes) !== 0,
            a || (ca(l, t, e, !1),
            a = (e & t.childLanes) !== 0),
            u) {
                if (a)
                    return Zo(l, t, e);
                t.flags |= 128
            }
            if (u = t.memoizedState,
            u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
            _(pl, pl.current),
            a)
                break;
            return null;
        case 22:
            return t.lanes = 0,
            Ro(l, t, e, t.pendingProps);
        case 24:
            ae(t, Tl, l.memoizedState.cache)
        }
        return Lt(l, t, e)
    }
    function Vo(l, t, e) {
        if (l !== null)
            if (l.memoizedProps !== t.pendingProps)
                Nl = !0;
            else {
                if (!bc(l, e) && (t.flags & 128) === 0)
                    return Nl = !1,
                    am(l, t, e);
                Nl = (l.flags & 131072) !== 0
            }
        else
            Nl = !1,
            P && (t.flags & 1048576) !== 0 && ps(t, Za, t.index);
        switch (t.lanes = 0,
        t.tag) {
        case 16:
            l: {
                var a = t.pendingProps;
                if (l = Re(t.elementType),
                t.type = l,
                typeof l == "function")
                    Ti(l) ? (a = Ge(l, a),
                    t.tag = 1,
                    t = Go(null, t, l, a, e)) : (t.tag = 0,
                    t = rc(null, t, l, a, e));
                else {
                    if (l != null) {
                        var u = l.$$typeof;
                        if (u === ft) {
                            t.tag = 11,
                            t = Co(null, t, l, a, e);
                            break l
                        } else if (u === I) {
                            t.tag = 14,
                            t = Uo(null, t, l, a, e);
                            break l
                        }
                    }
                    throw t = Ct(l) || l,
                    Error(o(306, t, ""))
                }
            }
            return t;
        case 0:
            return rc(l, t, t.type, t.pendingProps, e);
        case 1:
            return a = t.type,
            u = Ge(a, t.pendingProps),
            Go(l, t, a, u, e);
        case 3:
            l: {
                if (Gl(t, t.stateNode.containerInfo),
                l === null)
                    throw Error(o(387));
                a = t.pendingProps;
                var n = t.memoizedState;
                u = n.element,
                Yi(l, t),
                Fa(t, a, null, e);
                var i = t.memoizedState;
                if (a = i.cache,
                ae(t, Tl, a),
                a !== n.cache && Ci(t, [Tl], e, !0),
                Wa(),
                a = i.element,
                n.isDehydrated)
                    if (n = {
                        element: a,
                        isDehydrated: !1,
                        cache: i.cache
                    },
                    t.updateQueue.baseState = n,
                    t.memoizedState = n,
                    t.flags & 256) {
                        t = Xo(l, t, a, e);
                        break l
                    } else if (a !== u) {
                        u = dt(Error(o(424)), t),
                        Va(u),
                        t = Xo(l, t, a, e);
                        break l
                    } else {
                        switch (l = t.stateNode.containerInfo,
                        l.nodeType) {
                        case 9:
                            l = l.body;
                            break;
                        default:
                            l = l.nodeName === "HTML" ? l.ownerDocument.body : l
                        }
                        for (ml = gt(l.firstChild),
                        Cl = t,
                        P = !0,
                        te = null,
                        vt = !0,
                        e = Hs(t, null, a, e),
                        t.child = e; e; )
                            e.flags = e.flags & -3 | 4096,
                            e = e.sibling
                    }
                else {
                    if (De(),
                    a === u) {
                        t = Lt(l, t, e);
                        break l
                    }
                    Hl(l, t, a, e)
                }
                t = t.child
            }
            return t;
        case 26:
            return rn(l, t),
            l === null ? (e = td(t.type, null, t.pendingProps, null)) ? t.memoizedState = e : P || (e = t.type,
            l = t.pendingProps,
            a = _n(J.current).createElement(e),
            a[Dl] = t,
            a[Vl] = l,
            Rl(a, e, l),
            _l(a),
            t.stateNode = a) : t.memoizedState = td(t.type, l.memoizedProps, t.pendingProps, l.memoizedState),
            null;
        case 27:
            return _a(t),
            l === null && P && (a = t.stateNode = Ir(t.type, t.pendingProps, J.current),
            Cl = t,
            vt = !0,
            u = ml,
            ye(t.type) ? (Fc = u,
            ml = gt(a.firstChild)) : ml = u),
            Hl(l, t, t.pendingProps.children, e),
            rn(l, t),
            l === null && (t.flags |= 4194304),
            t.child;
        case 5:
            return l === null && P && ((u = a = ml) && (a = Um(a, t.type, t.pendingProps, vt),
            a !== null ? (t.stateNode = a,
            Cl = t,
            ml = gt(a.firstChild),
            vt = !1,
            u = !0) : u = !1),
            u || ee(t)),
            _a(t),
            u = t.type,
            n = t.pendingProps,
            i = l !== null ? l.memoizedProps : null,
            a = n.children,
            Kc(u, n) ? a = null : i !== null && Kc(u, i) && (t.flags |= 32),
            t.memoizedState !== null && (u = wi(l, t, $0, null, null, e),
            gu._currentValue = u),
            rn(l, t),
            Hl(l, t, a, e),
            t.child;
        case 6:
            return l === null && P && ((l = e = ml) && (e = Hm(e, t.pendingProps, vt),
            e !== null ? (t.stateNode = e,
            Cl = t,
            ml = null,
            l = !0) : l = !1),
            l || ee(t)),
            null;
        case 13:
            return Qo(l, t, e);
        case 4:
            return Gl(t, t.stateNode.containerInfo),
            a = t.pendingProps,
            l === null ? t.child = Be(t, null, a, e) : Hl(l, t, a, e),
            t.child;
        case 11:
            return Co(l, t, t.type, t.pendingProps, e);
        case 7:
            return Hl(l, t, t.pendingProps, e),
            t.child;
        case 8:
            return Hl(l, t, t.pendingProps.children, e),
            t.child;
        case 12:
            return Hl(l, t, t.pendingProps.children, e),
            t.child;
        case 10:
            return a = t.pendingProps,
            ae(t, t.type, a.value),
            Hl(l, t, a.children, e),
            t.child;
        case 9:
            return u = t.type._context,
            a = t.pendingProps.children,
            Ue(t),
            u = Ul(u),
            a = a(u),
            t.flags |= 1,
            Hl(l, t, a, e),
            t.child;
        case 14:
            return Uo(l, t, t.type, t.pendingProps, e);
        case 15:
            return Ho(l, t, t.type, t.pendingProps, e);
        case 19:
            return Zo(l, t, e);
        case 31:
            return em(l, t, e);
        case 22:
            return Ro(l, t, e, t.pendingProps);
        case 24:
            return Ue(t),
            a = Ul(Tl),
            l === null ? (u = Ri(),
            u === null && (u = dl,
            n = Ui(),
            u.pooledCache = n,
            n.refCount++,
            n !== null && (u.pooledCacheLanes |= e),
            u = n),
            t.memoizedState = {
                parent: a,
                cache: u
            },
            Bi(t),
            ae(t, Tl, u)) : ((l.lanes & e) !== 0 && (Yi(l, t),
            Fa(t, null, null, e),
            Wa()),
            u = l.memoizedState,
            n = t.memoizedState,
            u.parent !== a ? (u = {
                parent: a,
                cache: a
            },
            t.memoizedState = u,
            t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u),
            ae(t, Tl, a)) : (a = n.cache,
            ae(t, Tl, a),
            a !== u.cache && Ci(t, [Tl], e, !0))),
            Hl(l, t, t.pendingProps.children, e),
            t.child;
        case 29:
            throw t.pendingProps
        }
        throw Error(o(156, t.tag))
    }
    function Zt(l) {
        l.flags |= 4
    }
    function xc(l, t, e, a, u) {
        if ((t = (l.mode & 32) !== 0) && (t = !1),
        t) {
            if (l.flags |= 16777216,
            (u & 335544128) === u)
                if (l.stateNode.complete)
                    l.flags |= 8192;
                else if (gr())
                    l.flags |= 8192;
                else
                    throw qe = ku,
                    qi
        } else
            l.flags &= -16777217
    }
    function wo(l, t) {
        if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
            l.flags &= -16777217;
        else if (l.flags |= 16777216,
        !id(t))
            if (gr())
                l.flags |= 8192;
            else
                throw qe = ku,
                qi
    }
    function mn(l, t) {
        t !== null && (l.flags |= 4),
        l.flags & 16384 && (t = l.tag !== 22 ? Tf() : 536870912,
        l.lanes |= t,
        xa |= t)
    }
    function au(l, t) {
        if (!P)
            switch (l.tailMode) {
            case "hidden":
                t = l.tail;
                for (var e = null; t !== null; )
                    t.alternate !== null && (e = t),
                    t = t.sibling;
                e === null ? l.tail = null : e.sibling = null;
                break;
            case "collapsed":
                e = l.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null
            }
    }
    function hl(l) {
        var t = l.alternate !== null && l.alternate.child === l.child
          , e = 0
          , a = 0;
        if (t)
            for (var u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags & 65011712,
                a |= u.flags & 65011712,
                u.return = l,
                u = u.sibling;
        else
            for (u = l.child; u !== null; )
                e |= u.lanes | u.childLanes,
                a |= u.subtreeFlags,
                a |= u.flags,
                u.return = l,
                u = u.sibling;
        return l.subtreeFlags |= a,
        l.childLanes = e,
        t
    }
    function um(l, t, e) {
        var a = t.pendingProps;
        switch (Mi(t),
        t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return hl(t),
            null;
        case 1:
            return hl(t),
            null;
        case 3:
            return e = t.stateNode,
            a = null,
            l !== null && (a = l.memoizedState.cache),
            t.memoizedState.cache !== a && (t.flags |= 2048),
            Gt(Tl),
            Sl(),
            e.pendingContext && (e.context = e.pendingContext,
            e.pendingContext = null),
            (l === null || l.child === null) && (ia(t) ? Zt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
            ji())),
            hl(t),
            null;
        case 26:
            var u = t.type
              , n = t.memoizedState;
            return l === null ? (Zt(t),
            n !== null ? (hl(t),
            wo(t, n)) : (hl(t),
            xc(t, u, null, a, e))) : n ? n !== l.memoizedState ? (Zt(t),
            hl(t),
            wo(t, n)) : (hl(t),
            t.flags &= -16777217) : (l = l.memoizedProps,
            l !== a && Zt(t),
            hl(t),
            xc(t, u, l, a, e)),
            null;
        case 27:
            if (Tu(t),
            e = J.current,
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && Zt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return hl(t),
                    null
                }
                l = C.current,
                ia(t) ? Ts(t) : (l = Ir(u, a, e),
                t.stateNode = l,
                Zt(t))
            }
            return hl(t),
            null;
        case 5:
            if (Tu(t),
            u = t.type,
            l !== null && t.stateNode != null)
                l.memoizedProps !== a && Zt(t);
            else {
                if (!a) {
                    if (t.stateNode === null)
                        throw Error(o(166));
                    return hl(t),
                    null
                }
                if (n = C.current,
                ia(t))
                    Ts(t);
                else {
                    var i = _n(J.current);
                    switch (n) {
                    case 1:
                        n = i.createElementNS("http://www.w3.org/2000/svg", u);
                        break;
                    case 2:
                        n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                        break;
                    default:
                        switch (u) {
                        case "svg":
                            n = i.createElementNS("http://www.w3.org/2000/svg", u);
                            break;
                        case "math":
                            n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                            break;
                        case "script":
                            n = i.createElement("div"),
                            n.innerHTML = "<script><\/script>",
                            n = n.removeChild(n.firstChild);
                            break;
                        case "select":
                            n = typeof a.is == "string" ? i.createElement("select", {
                                is: a.is
                            }) : i.createElement("select"),
                            a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                            break;
                        default:
                            n = typeof a.is == "string" ? i.createElement(u, {
                                is: a.is
                            }) : i.createElement(u)
                        }
                    }
                    n[Dl] = t,
                    n[Vl] = a;
                    l: for (i = t.child; i !== null; ) {
                        if (i.tag === 5 || i.tag === 6)
                            n.appendChild(i.stateNode);
                        else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                            i.child.return = i,
                            i = i.child;
                            continue
                        }
                        if (i === t)
                            break l;
                        for (; i.sibling === null; ) {
                            if (i.return === null || i.return === t)
                                break l;
                            i = i.return
                        }
                        i.sibling.return = i.return,
                        i = i.sibling
                    }
                    t.stateNode = n;
                    l: switch (Rl(n, u, a),
                    u) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        a = !!a.autoFocus;
                        break l;
                    case "img":
                        a = !0;
                        break l;
                    default:
                        a = !1
                    }
                    a && Zt(t)
                }
            }
            return hl(t),
            xc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, e),
            null;
        case 6:
            if (l && t.stateNode != null)
                l.memoizedProps !== a && Zt(t);
            else {
                if (typeof a != "string" && t.stateNode === null)
                    throw Error(o(166));
                if (l = J.current,
                ia(t)) {
                    if (l = t.stateNode,
                    e = t.memoizedProps,
                    a = null,
                    u = Cl,
                    u !== null)
                        switch (u.tag) {
                        case 27:
                        case 5:
                            a = u.memoizedProps
                        }
                    l[Dl] = t,
                    l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || Qr(l.nodeValue, e)),
                    l || ee(t, !0)
                } else
                    l = _n(l).createTextNode(a),
                    l[Dl] = t,
                    t.stateNode = l
            }
            return hl(t),
            null;
        case 31:
            if (e = t.memoizedState,
            l === null || l.memoizedState !== null) {
                if (a = ia(t),
                e !== null) {
                    if (l === null) {
                        if (!a)
                            throw Error(o(318));
                        if (l = t.memoizedState,
                        l = l !== null ? l.dehydrated : null,
                        !l)
                            throw Error(o(557));
                        l[Dl] = t
                    } else
                        De(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    hl(t),
                    l = !1
                } else
                    e = ji(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e),
                    l = !0;
                if (!l)
                    return t.flags & 256 ? (ut(t),
                    t) : (ut(t),
                    null);
                if ((t.flags & 128) !== 0)
                    throw Error(o(558))
            }
            return hl(t),
            null;
        case 13:
            if (a = t.memoizedState,
            l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
                if (u = ia(t),
                a !== null && a.dehydrated !== null) {
                    if (l === null) {
                        if (!u)
                            throw Error(o(318));
                        if (u = t.memoizedState,
                        u = u !== null ? u.dehydrated : null,
                        !u)
                            throw Error(o(317));
                        u[Dl] = t
                    } else
                        De(),
                        (t.flags & 128) === 0 && (t.memoizedState = null),
                        t.flags |= 4;
                    hl(t),
                    u = !1
                } else
                    u = ji(),
                    l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u),
                    u = !0;
                if (!u)
                    return t.flags & 256 ? (ut(t),
                    t) : (ut(t),
                    null)
            }
            return ut(t),
            (t.flags & 128) !== 0 ? (t.lanes = e,
            t) : (e = a !== null,
            l = l !== null && l.memoizedState !== null,
            e && (a = t.child,
            u = null,
            a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool),
            n = null,
            a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool),
            n !== u && (a.flags |= 2048)),
            e !== l && e && (t.child.flags |= 8192),
            mn(t, t.updateQueue),
            hl(t),
            null);
        case 4:
            return Sl(),
            l === null && Qc(t.stateNode.containerInfo),
            hl(t),
            null;
        case 10:
            return Gt(t.type),
            hl(t),
            null;
        case 19:
            if (N(pl),
            a = t.memoizedState,
            a === null)
                return hl(t),
                null;
            if (u = (t.flags & 128) !== 0,
            n = a.rendering,
            n === null)
                if (u)
                    au(a, !1);
                else {
                    if (xl !== 0 || l !== null && (l.flags & 128) !== 0)
                        for (l = t.child; l !== null; ) {
                            if (n = Pu(l),
                            n !== null) {
                                for (t.flags |= 128,
                                au(a, !1),
                                l = n.updateQueue,
                                t.updateQueue = l,
                                mn(t, l),
                                t.subtreeFlags = 0,
                                l = e,
                                e = t.child; e !== null; )
                                    bs(e, l),
                                    e = e.sibling;
                                return _(pl, pl.current & 1 | 2),
                                P && Bt(t, a.treeForkCount),
                                t.child
                            }
                            l = l.sibling
                        }
                    a.tail !== null && Il() > bn && (t.flags |= 128,
                    u = !0,
                    au(a, !1),
                    t.lanes = 4194304)
                }
            else {
                if (!u)
                    if (l = Pu(n),
                    l !== null) {
                        if (t.flags |= 128,
                        u = !0,
                        l = l.updateQueue,
                        t.updateQueue = l,
                        mn(t, l),
                        au(a, !0),
                        a.tail === null && a.tailMode === "hidden" && !n.alternate && !P)
                            return hl(t),
                            null
                    } else
                        2 * Il() - a.renderingStartTime > bn && e !== 536870912 && (t.flags |= 128,
                        u = !0,
                        au(a, !1),
                        t.lanes = 4194304);
                a.isBackwards ? (n.sibling = t.child,
                t.child = n) : (l = a.last,
                l !== null ? l.sibling = n : t.child = n,
                a.last = n)
            }
            return a.tail !== null ? (l = a.tail,
            a.rendering = l,
            a.tail = l.sibling,
            a.renderingStartTime = Il(),
            l.sibling = null,
            e = pl.current,
            _(pl, u ? e & 1 | 2 : e & 1),
            P && Bt(t, a.treeForkCount),
            l) : (hl(t),
            null);
        case 22:
        case 23:
            return ut(t),
            Li(),
            a = t.memoizedState !== null,
            l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192),
            a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (hl(t),
            t.subtreeFlags & 6 && (t.flags |= 8192)) : hl(t),
            e = t.updateQueue,
            e !== null && mn(t, e.retryQueue),
            e = null,
            l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
            a = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            a !== e && (t.flags |= 2048),
            l !== null && N(He),
            null;
        case 24:
            return e = null,
            l !== null && (e = l.memoizedState.cache),
            t.memoizedState.cache !== e && (t.flags |= 2048),
            Gt(Tl),
            hl(t),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(o(156, t.tag))
    }
    function nm(l, t) {
        switch (Mi(t),
        t.tag) {
        case 1:
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 3:
            return Gt(Tl),
            Sl(),
            l = t.flags,
            (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 26:
        case 27:
        case 5:
            return Tu(t),
            null;
        case 31:
            if (t.memoizedState !== null) {
                if (ut(t),
                t.alternate === null)
                    throw Error(o(340));
                De()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 13:
            if (ut(t),
            l = t.memoizedState,
            l !== null && l.dehydrated !== null) {
                if (t.alternate === null)
                    throw Error(o(340));
                De()
            }
            return l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 19:
            return N(pl),
            null;
        case 4:
            return Sl(),
            null;
        case 10:
            return Gt(t.type),
            null;
        case 22:
        case 23:
            return ut(t),
            Li(),
            l !== null && N(He),
            l = t.flags,
            l & 65536 ? (t.flags = l & -65537 | 128,
            t) : null;
        case 24:
            return Gt(Tl),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function Ko(l, t) {
        switch (Mi(t),
        t.tag) {
        case 3:
            Gt(Tl),
            Sl();
            break;
        case 26:
        case 27:
        case 5:
            Tu(t);
            break;
        case 4:
            Sl();
            break;
        case 31:
            t.memoizedState !== null && ut(t);
            break;
        case 13:
            ut(t);
            break;
        case 19:
            N(pl);
            break;
        case 10:
            Gt(t.type);
            break;
        case 22:
        case 23:
            ut(t),
            Li(),
            l !== null && N(He);
            break;
        case 24:
            Gt(Tl)
        }
    }
    function uu(l, t) {
        try {
            var e = t.updateQueue
              , a = e !== null ? e.lastEffect : null;
            if (a !== null) {
                var u = a.next;
                e = u;
                do {
                    if ((e.tag & l) === l) {
                        a = void 0;
                        var n = e.create
                          , i = e.inst;
                        a = n(),
                        i.destroy = a
                    }
                    e = e.next
                } while (e !== u)
            }
        } catch (c) {
            nl(t, t.return, c)
        }
    }
    function se(l, t, e) {
        try {
            var a = t.updateQueue
              , u = a !== null ? a.lastEffect : null;
            if (u !== null) {
                var n = u.next;
                a = n;
                do {
                    if ((a.tag & l) === l) {
                        var i = a.inst
                          , c = i.destroy;
                        if (c !== void 0) {
                            i.destroy = void 0,
                            u = t;
                            var f = e
                              , v = c;
                            try {
                                v()
                            } catch (x) {
                                nl(u, f, x)
                            }
                        }
                    }
                    a = a.next
                } while (a !== n)
            }
        } catch (x) {
            nl(t, t.return, x)
        }
    }
    function Jo(l) {
        var t = l.updateQueue;
        if (t !== null) {
            var e = l.stateNode;
            try {
                qs(t, e)
            } catch (a) {
                nl(l, l.return, a)
            }
        }
    }
    function $o(l, t, e) {
        e.props = Ge(l.type, l.memoizedProps),
        e.state = l.memoizedState;
        try {
            e.componentWillUnmount()
        } catch (a) {
            nl(l, t, a)
        }
    }
    function nu(l, t) {
        try {
            var e = l.ref;
            if (e !== null) {
                switch (l.tag) {
                case 26:
                case 27:
                case 5:
                    var a = l.stateNode;
                    break;
                case 30:
                    a = l.stateNode;
                    break;
                default:
                    a = l.stateNode
                }
                typeof e == "function" ? l.refCleanup = e(a) : e.current = a
            }
        } catch (u) {
            nl(l, t, u)
        }
    }
    function Ot(l, t) {
        var e = l.ref
          , a = l.refCleanup;
        if (e !== null)
            if (typeof a == "function")
                try {
                    a()
                } catch (u) {
                    nl(l, t, u)
                } finally {
                    l.refCleanup = null,
                    l = l.alternate,
                    l != null && (l.refCleanup = null)
                }
            else if (typeof e == "function")
                try {
                    e(null)
                } catch (u) {
                    nl(l, t, u)
                }
            else
                e.current = null
    }
    function ko(l) {
        var t = l.type
          , e = l.memoizedProps
          , a = l.stateNode;
        try {
            l: switch (t) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                e.autoFocus && a.focus();
                break l;
            case "img":
                e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet)
            }
        } catch (u) {
            nl(l, l.return, u)
        }
    }
    function Sc(l, t, e) {
        try {
            var a = l.stateNode;
            Mm(a, l.type, e, t),
            a[Vl] = t
        } catch (u) {
            nl(l, l.return, u)
        }
    }
    function Wo(l) {
        return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ye(l.type) || l.tag === 4
    }
    function pc(l) {
        l: for (; ; ) {
            for (; l.sibling === null; ) {
                if (l.return === null || Wo(l.return))
                    return null;
                l = l.return
            }
            for (l.sibling.return = l.return,
            l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
                if (l.tag === 27 && ye(l.type) || l.flags & 2 || l.child === null || l.tag === 4)
                    continue l;
                l.child.return = l,
                l = l.child
            }
            if (!(l.flags & 2))
                return l.stateNode
        }
    }
    function zc(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            t.appendChild(l),
            e = e._reactRootContainer,
            e != null || t.onclick !== null || (t.onclick = Ht));
        else if (a !== 4 && (a === 27 && ye(l.type) && (e = l.stateNode,
        t = null),
        l = l.child,
        l !== null))
            for (zc(l, t, e),
            l = l.sibling; l !== null; )
                zc(l, t, e),
                l = l.sibling
    }
    function hn(l, t, e) {
        var a = l.tag;
        if (a === 5 || a === 6)
            l = l.stateNode,
            t ? e.insertBefore(l, t) : e.appendChild(l);
        else if (a !== 4 && (a === 27 && ye(l.type) && (e = l.stateNode),
        l = l.child,
        l !== null))
            for (hn(l, t, e),
            l = l.sibling; l !== null; )
                hn(l, t, e),
                l = l.sibling
    }
    function Fo(l) {
        var t = l.stateNode
          , e = l.memoizedProps;
        try {
            for (var a = l.type, u = t.attributes; u.length; )
                t.removeAttributeNode(u[0]);
            Rl(t, a, e),
            t[Dl] = l,
            t[Vl] = e
        } catch (n) {
            nl(l, l.return, n)
        }
    }
    var Vt = !1
      , Al = !1
      , Tc = !1
      , Io = typeof WeakSet == "function" ? WeakSet : Set
      , jl = null;
    function im(l, t) {
        if (l = l.containerInfo,
        Vc = Rn,
        l = ss(l),
        yi(l)) {
            if ("selectionStart" in l)
                var e = {
                    start: l.selectionStart,
                    end: l.selectionEnd
                };
            else
                l: {
                    e = (e = l.ownerDocument) && e.defaultView || window;
                    var a = e.getSelection && e.getSelection();
                    if (a && a.rangeCount !== 0) {
                        e = a.anchorNode;
                        var u = a.anchorOffset
                          , n = a.focusNode;
                        a = a.focusOffset;
                        try {
                            e.nodeType,
                            n.nodeType
                        } catch {
                            e = null;
                            break l
                        }
                        var i = 0
                          , c = -1
                          , f = -1
                          , v = 0
                          , x = 0
                          , z = l
                          , y = null;
                        t: for (; ; ) {
                            for (var b; z !== e || u !== 0 && z.nodeType !== 3 || (c = i + u),
                            z !== n || a !== 0 && z.nodeType !== 3 || (f = i + a),
                            z.nodeType === 3 && (i += z.nodeValue.length),
                            (b = z.firstChild) !== null; )
                                y = z,
                                z = b;
                            for (; ; ) {
                                if (z === l)
                                    break t;
                                if (y === e && ++v === u && (c = i),
                                y === n && ++x === a && (f = i),
                                (b = z.nextSibling) !== null)
                                    break;
                                z = y,
                                y = z.parentNode
                            }
                            z = b
                        }
                        e = c === -1 || f === -1 ? null : {
                            start: c,
                            end: f
                        }
                    } else
                        e = null
                }
            e = e || {
                start: 0,
                end: 0
            }
        } else
            e = null;
        for (wc = {
            focusedElem: l,
            selectionRange: e
        },
        Rn = !1,
        jl = t; jl !== null; )
            if (t = jl,
            l = t.child,
            (t.subtreeFlags & 1028) !== 0 && l !== null)
                l.return = t,
                jl = l;
            else
                for (; jl !== null; ) {
                    switch (t = jl,
                    n = t.alternate,
                    l = t.flags,
                    t.tag) {
                    case 0:
                        if ((l & 4) !== 0 && (l = t.updateQueue,
                        l = l !== null ? l.events : null,
                        l !== null))
                            for (e = 0; e < l.length; e++)
                                u = l[e],
                                u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((l & 1024) !== 0 && n !== null) {
                            l = void 0,
                            e = t,
                            u = n.memoizedProps,
                            n = n.memoizedState,
                            a = e.stateNode;
                            try {
                                var O = Ge(e.type, u);
                                l = a.getSnapshotBeforeUpdate(O, n),
                                a.__reactInternalSnapshotBeforeUpdate = l
                            } catch (Y) {
                                nl(e, e.return, Y)
                            }
                        }
                        break;
                    case 3:
                        if ((l & 1024) !== 0) {
                            if (l = t.stateNode.containerInfo,
                            e = l.nodeType,
                            e === 9)
                                $c(l);
                            else if (e === 1)
                                switch (l.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    $c(l);
                                    break;
                                default:
                                    l.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((l & 1024) !== 0)
                            throw Error(o(163))
                    }
                    if (l = t.sibling,
                    l !== null) {
                        l.return = t.return,
                        jl = l;
                        break
                    }
                    jl = t.return
                }
    }
    function Po(l, t, e) {
        var a = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            Kt(l, e),
            a & 4 && uu(5, e);
            break;
        case 1:
            if (Kt(l, e),
            a & 4)
                if (l = e.stateNode,
                t === null)
                    try {
                        l.componentDidMount()
                    } catch (i) {
                        nl(e, e.return, i)
                    }
                else {
                    var u = Ge(e.type, t.memoizedProps);
                    t = t.memoizedState;
                    try {
                        l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate)
                    } catch (i) {
                        nl(e, e.return, i)
                    }
                }
            a & 64 && Jo(e),
            a & 512 && nu(e, e.return);
            break;
        case 3:
            if (Kt(l, e),
            a & 64 && (l = e.updateQueue,
            l !== null)) {
                if (t = null,
                e.child !== null)
                    switch (e.child.tag) {
                    case 27:
                    case 5:
                        t = e.child.stateNode;
                        break;
                    case 1:
                        t = e.child.stateNode
                    }
                try {
                    qs(l, t)
                } catch (i) {
                    nl(e, e.return, i)
                }
            }
            break;
        case 27:
            t === null && a & 4 && Fo(e);
        case 26:
        case 5:
            Kt(l, e),
            t === null && a & 4 && ko(e),
            a & 512 && nu(e, e.return);
            break;
        case 12:
            Kt(l, e);
            break;
        case 31:
            Kt(l, e),
            a & 4 && er(l, e);
            break;
        case 13:
            Kt(l, e),
            a & 4 && ar(l, e),
            a & 64 && (l = e.memoizedState,
            l !== null && (l = l.dehydrated,
            l !== null && (e = vm.bind(null, e),
            Rm(l, e))));
            break;
        case 22:
            if (a = e.memoizedState !== null || Vt,
            !a) {
                t = t !== null && t.memoizedState !== null || Al,
                u = Vt;
                var n = Al;
                Vt = a,
                (Al = t) && !n ? Jt(l, e, (e.subtreeFlags & 8772) !== 0) : Kt(l, e),
                Vt = u,
                Al = n
            }
            break;
        case 30:
            break;
        default:
            Kt(l, e)
        }
    }
    function lr(l) {
        var t = l.alternate;
        t !== null && (l.alternate = null,
        lr(t)),
        l.child = null,
        l.deletions = null,
        l.sibling = null,
        l.tag === 5 && (t = l.stateNode,
        t !== null && Pn(t)),
        l.stateNode = null,
        l.return = null,
        l.dependencies = null,
        l.memoizedProps = null,
        l.memoizedState = null,
        l.pendingProps = null,
        l.stateNode = null,
        l.updateQueue = null
    }
    var yl = null
      , Kl = !1;
    function wt(l, t, e) {
        for (e = e.child; e !== null; )
            tr(l, t, e),
            e = e.sibling
    }
    function tr(l, t, e) {
        if (Pl && typeof Pl.onCommitFiberUnmount == "function")
            try {
                Pl.onCommitFiberUnmount(ja, e)
            } catch {}
        switch (e.tag) {
        case 26:
            Al || Ot(e, t),
            wt(l, t, e),
            e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode,
            e.parentNode.removeChild(e));
            break;
        case 27:
            Al || Ot(e, t);
            var a = yl
              , u = Kl;
            ye(e.type) && (yl = e.stateNode,
            Kl = !1),
            wt(l, t, e),
            hu(e.stateNode),
            yl = a,
            Kl = u;
            break;
        case 5:
            Al || Ot(e, t);
        case 6:
            if (a = yl,
            u = Kl,
            yl = null,
            wt(l, t, e),
            yl = a,
            Kl = u,
            yl !== null)
                if (Kl)
                    try {
                        (yl.nodeType === 9 ? yl.body : yl.nodeName === "HTML" ? yl.ownerDocument.body : yl).removeChild(e.stateNode)
                    } catch (n) {
                        nl(e, t, n)
                    }
                else
                    try {
                        yl.removeChild(e.stateNode)
                    } catch (n) {
                        nl(e, t, n)
                    }
            break;
        case 18:
            yl !== null && (Kl ? (l = yl,
            Jr(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.stateNode),
            Ma(l)) : Jr(yl, e.stateNode));
            break;
        case 4:
            a = yl,
            u = Kl,
            yl = e.stateNode.containerInfo,
            Kl = !0,
            wt(l, t, e),
            yl = a,
            Kl = u;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            se(2, e, t),
            Al || se(4, e, t),
            wt(l, t, e);
            break;
        case 1:
            Al || (Ot(e, t),
            a = e.stateNode,
            typeof a.componentWillUnmount == "function" && $o(e, t, a)),
            wt(l, t, e);
            break;
        case 21:
            wt(l, t, e);
            break;
        case 22:
            Al = (a = Al) || e.memoizedState !== null,
            wt(l, t, e),
            Al = a;
            break;
        default:
            wt(l, t, e)
        }
    }
    function er(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null))) {
            l = l.dehydrated;
            try {
                Ma(l)
            } catch (e) {
                nl(t, t.return, e)
            }
        }
    }
    function ar(l, t) {
        if (t.memoizedState === null && (l = t.alternate,
        l !== null && (l = l.memoizedState,
        l !== null && (l = l.dehydrated,
        l !== null))))
            try {
                Ma(l)
            } catch (e) {
                nl(t, t.return, e)
            }
    }
    function cm(l) {
        switch (l.tag) {
        case 31:
        case 13:
        case 19:
            var t = l.stateNode;
            return t === null && (t = l.stateNode = new Io),
            t;
        case 22:
            return l = l.stateNode,
            t = l._retryCache,
            t === null && (t = l._retryCache = new Io),
            t;
        default:
            throw Error(o(435, l.tag))
        }
    }
    function vn(l, t) {
        var e = cm(l);
        t.forEach(function(a) {
            if (!e.has(a)) {
                e.add(a);
                var u = ym.bind(null, l, a);
                a.then(u, u)
            }
        })
    }
    function Jl(l, t) {
        var e = t.deletions;
        if (e !== null)
            for (var a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = l
                  , i = t
                  , c = i;
                l: for (; c !== null; ) {
                    switch (c.tag) {
                    case 27:
                        if (ye(c.type)) {
                            yl = c.stateNode,
                            Kl = !1;
                            break l
                        }
                        break;
                    case 5:
                        yl = c.stateNode,
                        Kl = !1;
                        break l;
                    case 3:
                    case 4:
                        yl = c.stateNode.containerInfo,
                        Kl = !0;
                        break l
                    }
                    c = c.return
                }
                if (yl === null)
                    throw Error(o(160));
                tr(n, i, u),
                yl = null,
                Kl = !1,
                n = u.alternate,
                n !== null && (n.return = null),
                u.return = null
            }
        if (t.subtreeFlags & 13886)
            for (t = t.child; t !== null; )
                ur(t, l),
                t = t.sibling
    }
    var zt = null;
    function ur(l, t) {
        var e = l.alternate
          , a = l.flags;
        switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Jl(t, l),
            $l(l),
            a & 4 && (se(3, l, l.return),
            uu(3, l),
            se(5, l, l.return));
            break;
        case 1:
            Jl(t, l),
            $l(l),
            a & 512 && (Al || e === null || Ot(e, e.return)),
            a & 64 && Vt && (l = l.updateQueue,
            l !== null && (a = l.callbacks,
            a !== null && (e = l.shared.hiddenCallbacks,
            l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
            break;
        case 26:
            var u = zt;
            if (Jl(t, l),
            $l(l),
            a & 512 && (Al || e === null || Ot(e, e.return)),
            a & 4) {
                var n = e !== null ? e.memoizedState : null;
                if (a = l.memoizedState,
                e === null)
                    if (a === null)
                        if (l.stateNode === null) {
                            l: {
                                a = l.type,
                                e = l.memoizedProps,
                                u = u.ownerDocument || u;
                                t: switch (a) {
                                case "title":
                                    n = u.getElementsByTagName("title")[0],
                                    (!n || n[Ca] || n[Dl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = u.createElement(a),
                                    u.head.insertBefore(n, u.querySelector("head > title"))),
                                    Rl(n, a, e),
                                    n[Dl] = l,
                                    _l(n),
                                    a = n;
                                    break l;
                                case "link":
                                    var i = ud("link", "href", u).get(a + (e.href || ""));
                                    if (i) {
                                        for (var c = 0; c < i.length; c++)
                                            if (n = i[c],
                                            n.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && n.getAttribute("rel") === (e.rel == null ? null : e.rel) && n.getAttribute("title") === (e.title == null ? null : e.title) && n.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                                                i.splice(c, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    Rl(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                case "meta":
                                    if (i = ud("meta", "content", u).get(a + (e.content || ""))) {
                                        for (c = 0; c < i.length; c++)
                                            if (n = i[c],
                                            n.getAttribute("content") === (e.content == null ? null : "" + e.content) && n.getAttribute("name") === (e.name == null ? null : e.name) && n.getAttribute("property") === (e.property == null ? null : e.property) && n.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && n.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                                                i.splice(c, 1);
                                                break t
                                            }
                                    }
                                    n = u.createElement(a),
                                    Rl(n, a, e),
                                    u.head.appendChild(n);
                                    break;
                                default:
                                    throw Error(o(468, a))
                                }
                                n[Dl] = l,
                                _l(n),
                                a = n
                            }
                            l.stateNode = a
                        } else
                            nd(u, l.type, l.stateNode);
                    else
                        l.stateNode = ad(u, a, l.memoizedProps);
                else
                    n !== a ? (n === null ? e.stateNode !== null && (e = e.stateNode,
                    e.parentNode.removeChild(e)) : n.count--,
                    a === null ? nd(u, l.type, l.stateNode) : ad(u, a, l.memoizedProps)) : a === null && l.stateNode !== null && Sc(l, l.memoizedProps, e.memoizedProps)
            }
            break;
        case 27:
            Jl(t, l),
            $l(l),
            a & 512 && (Al || e === null || Ot(e, e.return)),
            e !== null && a & 4 && Sc(l, l.memoizedProps, e.memoizedProps);
            break;
        case 5:
            if (Jl(t, l),
            $l(l),
            a & 512 && (Al || e === null || Ot(e, e.return)),
            l.flags & 32) {
                u = l.stateNode;
                try {
                    We(u, "")
                } catch (O) {
                    nl(l, l.return, O)
                }
            }
            a & 4 && l.stateNode != null && (u = l.memoizedProps,
            Sc(l, u, e !== null ? e.memoizedProps : u)),
            a & 1024 && (Tc = !0);
            break;
        case 6:
            if (Jl(t, l),
            $l(l),
            a & 4) {
                if (l.stateNode === null)
                    throw Error(o(162));
                a = l.memoizedProps,
                e = l.stateNode;
                try {
                    e.nodeValue = a
                } catch (O) {
                    nl(l, l.return, O)
                }
            }
            break;
        case 3:
            if (Dn = null,
            u = zt,
            zt = jn(t.containerInfo),
            Jl(t, l),
            zt = u,
            $l(l),
            a & 4 && e !== null && e.memoizedState.isDehydrated)
                try {
                    Ma(t.containerInfo)
                } catch (O) {
                    nl(l, l.return, O)
                }
            Tc && (Tc = !1,
            nr(l));
            break;
        case 4:
            a = zt,
            zt = jn(l.stateNode.containerInfo),
            Jl(t, l),
            $l(l),
            zt = a;
            break;
        case 12:
            Jl(t, l),
            $l(l);
            break;
        case 31:
            Jl(t, l),
            $l(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            vn(l, a)));
            break;
        case 13:
            Jl(t, l),
            $l(l),
            l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (gn = Il()),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            vn(l, a)));
            break;
        case 22:
            u = l.memoizedState !== null;
            var f = e !== null && e.memoizedState !== null
              , v = Vt
              , x = Al;
            if (Vt = v || u,
            Al = x || f,
            Jl(t, l),
            Al = x,
            Vt = v,
            $l(l),
            a & 8192)
                l: for (t = l.stateNode,
                t._visibility = u ? t._visibility & -2 : t._visibility | 1,
                u && (e === null || f || Vt || Al || Xe(l)),
                e = null,
                t = l; ; ) {
                    if (t.tag === 5 || t.tag === 26) {
                        if (e === null) {
                            f = e = t;
                            try {
                                if (n = f.stateNode,
                                u)
                                    i = n.style,
                                    typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                                else {
                                    c = f.stateNode;
                                    var z = f.memoizedProps.style
                                      , y = z != null && z.hasOwnProperty("display") ? z.display : null;
                                    c.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim()
                                }
                            } catch (O) {
                                nl(f, f.return, O)
                            }
                        }
                    } else if (t.tag === 6) {
                        if (e === null) {
                            f = t;
                            try {
                                f.stateNode.nodeValue = u ? "" : f.memoizedProps
                            } catch (O) {
                                nl(f, f.return, O)
                            }
                        }
                    } else if (t.tag === 18) {
                        if (e === null) {
                            f = t;
                            try {
                                var b = f.stateNode;
                                u ? $r(b, !0) : $r(f.stateNode, !1)
                            } catch (O) {
                                nl(f, f.return, O)
                            }
                        }
                    } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
                        t.child.return = t,
                        t = t.child;
                        continue
                    }
                    if (t === l)
                        break l;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === l)
                            break l;
                        e === t && (e = null),
                        t = t.return
                    }
                    e === t && (e = null),
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            a & 4 && (a = l.updateQueue,
            a !== null && (e = a.retryQueue,
            e !== null && (a.retryQueue = null,
            vn(l, e))));
            break;
        case 19:
            Jl(t, l),
            $l(l),
            a & 4 && (a = l.updateQueue,
            a !== null && (l.updateQueue = null,
            vn(l, a)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Jl(t, l),
            $l(l)
        }
    }
    function $l(l) {
        var t = l.flags;
        if (t & 2) {
            try {
                for (var e, a = l.return; a !== null; ) {
                    if (Wo(a)) {
                        e = a;
                        break
                    }
                    a = a.return
                }
                if (e == null)
                    throw Error(o(160));
                switch (e.tag) {
                case 27:
                    var u = e.stateNode
                      , n = pc(l);
                    hn(l, n, u);
                    break;
                case 5:
                    var i = e.stateNode;
                    e.flags & 32 && (We(i, ""),
                    e.flags &= -33);
                    var c = pc(l);
                    hn(l, c, i);
                    break;
                case 3:
                case 4:
                    var f = e.stateNode.containerInfo
                      , v = pc(l);
                    zc(l, v, f);
                    break;
                default:
                    throw Error(o(161))
                }
            } catch (x) {
                nl(l, l.return, x)
            }
            l.flags &= -3
        }
        t & 4096 && (l.flags &= -4097)
    }
    function nr(l) {
        if (l.subtreeFlags & 1024)
            for (l = l.child; l !== null; ) {
                var t = l;
                nr(t),
                t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                l = l.sibling
            }
    }
    function Kt(l, t) {
        if (t.subtreeFlags & 8772)
            for (t = t.child; t !== null; )
                Po(l, t.alternate, t),
                t = t.sibling
    }
    function Xe(l) {
        for (l = l.child; l !== null; ) {
            var t = l;
            switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                se(4, t, t.return),
                Xe(t);
                break;
            case 1:
                Ot(t, t.return);
                var e = t.stateNode;
                typeof e.componentWillUnmount == "function" && $o(t, t.return, e),
                Xe(t);
                break;
            case 27:
                hu(t.stateNode);
            case 26:
            case 5:
                Ot(t, t.return),
                Xe(t);
                break;
            case 22:
                t.memoizedState === null && Xe(t);
                break;
            case 30:
                Xe(t);
                break;
            default:
                Xe(t)
            }
            l = l.sibling
        }
    }
    function Jt(l, t, e) {
        for (e = e && (t.subtreeFlags & 8772) !== 0,
        t = t.child; t !== null; ) {
            var a = t.alternate
              , u = l
              , n = t
              , i = n.flags;
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                Jt(u, n, e),
                uu(4, n);
                break;
            case 1:
                if (Jt(u, n, e),
                a = n,
                u = a.stateNode,
                typeof u.componentDidMount == "function")
                    try {
                        u.componentDidMount()
                    } catch (v) {
                        nl(a, a.return, v)
                    }
                if (a = n,
                u = a.updateQueue,
                u !== null) {
                    var c = a.stateNode;
                    try {
                        var f = u.shared.hiddenCallbacks;
                        if (f !== null)
                            for (u.shared.hiddenCallbacks = null,
                            u = 0; u < f.length; u++)
                                Rs(f[u], c)
                    } catch (v) {
                        nl(a, a.return, v)
                    }
                }
                e && i & 64 && Jo(n),
                nu(n, n.return);
                break;
            case 27:
                Fo(n);
            case 26:
            case 5:
                Jt(u, n, e),
                e && a === null && i & 4 && ko(n),
                nu(n, n.return);
                break;
            case 12:
                Jt(u, n, e);
                break;
            case 31:
                Jt(u, n, e),
                e && i & 4 && er(u, n);
                break;
            case 13:
                Jt(u, n, e),
                e && i & 4 && ar(u, n);
                break;
            case 22:
                n.memoizedState === null && Jt(u, n, e),
                nu(n, n.return);
                break;
            case 30:
                break;
            default:
                Jt(u, n, e)
            }
            t = t.sibling
        }
    }
    function Ec(l, t) {
        var e = null;
        l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool),
        l = null,
        t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool),
        l !== e && (l != null && l.refCount++,
        e != null && wa(e))
    }
    function Nc(l, t) {
        l = null,
        t.alternate !== null && (l = t.alternate.memoizedState.cache),
        t = t.memoizedState.cache,
        t !== l && (t.refCount++,
        l != null && wa(l))
    }
    function Tt(l, t, e, a) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                ir(l, t, e, a),
                t = t.sibling
    }
    function ir(l, t, e, a) {
        var u = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            Tt(l, t, e, a),
            u & 2048 && uu(9, t);
            break;
        case 1:
            Tt(l, t, e, a);
            break;
        case 3:
            Tt(l, t, e, a),
            u & 2048 && (l = null,
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== l && (t.refCount++,
            l != null && wa(l)));
            break;
        case 12:
            if (u & 2048) {
                Tt(l, t, e, a),
                l = t.stateNode;
                try {
                    var n = t.memoizedProps
                      , i = n.id
                      , c = n.onPostCommit;
                    typeof c == "function" && c(i, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0)
                } catch (f) {
                    nl(t, t.return, f)
                }
            } else
                Tt(l, t, e, a);
            break;
        case 31:
            Tt(l, t, e, a);
            break;
        case 13:
            Tt(l, t, e, a);
            break;
        case 23:
            break;
        case 22:
            n = t.stateNode,
            i = t.alternate,
            t.memoizedState !== null ? n._visibility & 2 ? Tt(l, t, e, a) : iu(l, t) : n._visibility & 2 ? Tt(l, t, e, a) : (n._visibility |= 2,
            ya(l, t, e, a, (t.subtreeFlags & 10256) !== 0 || !1)),
            u & 2048 && Ec(i, t);
            break;
        case 24:
            Tt(l, t, e, a),
            u & 2048 && Nc(t.alternate, t);
            break;
        default:
            Tt(l, t, e, a)
        }
    }
    function ya(l, t, e, a, u) {
        for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1),
        t = t.child; t !== null; ) {
            var n = l
              , i = t
              , c = e
              , f = a
              , v = i.flags;
            switch (i.tag) {
            case 0:
            case 11:
            case 15:
                ya(n, i, c, f, u),
                uu(8, i);
                break;
            case 23:
                break;
            case 22:
                var x = i.stateNode;
                i.memoizedState !== null ? x._visibility & 2 ? ya(n, i, c, f, u) : iu(n, i) : (x._visibility |= 2,
                ya(n, i, c, f, u)),
                u && v & 2048 && Ec(i.alternate, i);
                break;
            case 24:
                ya(n, i, c, f, u),
                u && v & 2048 && Nc(i.alternate, i);
                break;
            default:
                ya(n, i, c, f, u)
            }
            t = t.sibling
        }
    }
    function iu(l, t) {
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) {
                var e = l
                  , a = t
                  , u = a.flags;
                switch (a.tag) {
                case 22:
                    iu(e, a),
                    u & 2048 && Ec(a.alternate, a);
                    break;
                case 24:
                    iu(e, a),
                    u & 2048 && Nc(a.alternate, a);
                    break;
                default:
                    iu(e, a)
                }
                t = t.sibling
            }
    }
    var cu = 8192;
    function ga(l, t, e) {
        if (l.subtreeFlags & cu)
            for (l = l.child; l !== null; )
                cr(l, t, e),
                l = l.sibling
    }
    function cr(l, t, e) {
        switch (l.tag) {
        case 26:
            ga(l, t, e),
            l.flags & cu && l.memoizedState !== null && Jm(e, zt, l.memoizedState, l.memoizedProps);
            break;
        case 5:
            ga(l, t, e);
            break;
        case 3:
        case 4:
            var a = zt;
            zt = jn(l.stateNode.containerInfo),
            ga(l, t, e),
            zt = a;
            break;
        case 22:
            l.memoizedState === null && (a = l.alternate,
            a !== null && a.memoizedState !== null ? (a = cu,
            cu = 16777216,
            ga(l, t, e),
            cu = a) : ga(l, t, e));
            break;
        default:
            ga(l, t, e)
        }
    }
    function fr(l) {
        var t = l.alternate;
        if (t !== null && (l = t.child,
        l !== null)) {
            t.child = null;
            do
                t = l.sibling,
                l.sibling = null,
                l = t;
            while (l !== null)
        }
    }
    function fu(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    jl = a,
                    or(a, l)
                }
            fr(l)
        }
        if (l.subtreeFlags & 10256)
            for (l = l.child; l !== null; )
                sr(l),
                l = l.sibling
    }
    function sr(l) {
        switch (l.tag) {
        case 0:
        case 11:
        case 15:
            fu(l),
            l.flags & 2048 && se(9, l, l.return);
            break;
        case 3:
            fu(l);
            break;
        case 12:
            fu(l);
            break;
        case 22:
            var t = l.stateNode;
            l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3,
            yn(l)) : fu(l);
            break;
        default:
            fu(l)
        }
    }
    function yn(l) {
        var t = l.deletions;
        if ((l.flags & 16) !== 0) {
            if (t !== null)
                for (var e = 0; e < t.length; e++) {
                    var a = t[e];
                    jl = a,
                    or(a, l)
                }
            fr(l)
        }
        for (l = l.child; l !== null; ) {
            switch (t = l,
            t.tag) {
            case 0:
            case 11:
            case 15:
                se(8, t, t.return),
                yn(t);
                break;
            case 22:
                e = t.stateNode,
                e._visibility & 2 && (e._visibility &= -3,
                yn(t));
                break;
            default:
                yn(t)
            }
            l = l.sibling
        }
    }
    function or(l, t) {
        for (; jl !== null; ) {
            var e = jl;
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                se(8, e, t);
                break;
            case 23:
            case 22:
                if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
                    var a = e.memoizedState.cachePool.pool;
                    a != null && a.refCount++
                }
                break;
            case 24:
                wa(e.memoizedState.cache)
            }
            if (a = e.child,
            a !== null)
                a.return = e,
                jl = a;
            else
                l: for (e = l; jl !== null; ) {
                    a = jl;
                    var u = a.sibling
                      , n = a.return;
                    if (lr(a),
                    a === e) {
                        jl = null;
                        break l
                    }
                    if (u !== null) {
                        u.return = n,
                        jl = u;
                        break l
                    }
                    jl = n
                }
        }
    }
    var fm = {
        getCacheForType: function(l) {
            var t = Ul(Tl)
              , e = t.data.get(l);
            return e === void 0 && (e = l(),
            t.data.set(l, e)),
            e
        },
        cacheSignal: function() {
            return Ul(Tl).controller.signal
        }
    }
      , sm = typeof WeakMap == "function" ? WeakMap : Map
      , el = 0
      , dl = null
      , $ = null
      , W = 0
      , ul = 0
      , nt = null
      , oe = !1
      , ba = !1
      , Ac = !1
      , $t = 0
      , xl = 0
      , re = 0
      , Qe = 0
      , Mc = 0
      , it = 0
      , xa = 0
      , su = null
      , kl = null
      , _c = !1
      , gn = 0
      , rr = 0
      , bn = 1 / 0
      , xn = null
      , de = null
      , Ml = 0
      , me = null
      , Sa = null
      , kt = 0
      , jc = 0
      , Oc = null
      , dr = null
      , ou = 0
      , Dc = null;
    function ct() {
        return (el & 2) !== 0 && W !== 0 ? W & -W : S.T !== null ? Bc() : Mf()
    }
    function mr() {
        if (it === 0)
            if ((W & 536870912) === 0 || P) {
                var l = Au;
                Au <<= 1,
                (Au & 3932160) === 0 && (Au = 262144),
                it = l
            } else
                it = 536870912;
        return l = at.current,
        l !== null && (l.flags |= 32),
        it
    }
    function Wl(l, t, e) {
        (l === dl && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null) && (pa(l, 0),
        he(l, W, it, !1)),
        Da(l, e),
        ((el & 2) === 0 || l !== dl) && (l === dl && ((el & 2) === 0 && (Qe |= e),
        xl === 4 && he(l, W, it, !1)),
        Dt(l))
    }
    function hr(l, t, e) {
        if ((el & 6) !== 0)
            throw Error(o(327));
        var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Oa(l, t)
          , u = a ? dm(l, t) : Uc(l, t, !0)
          , n = a;
        do {
            if (u === 0) {
                ba && !a && he(l, t, 0, !1);
                break
            } else {
                if (e = l.current.alternate,
                n && !om(e)) {
                    u = Uc(l, t, !1),
                    n = !1;
                    continue
                }
                if (u === 2) {
                    if (n = t,
                    l.errorRecoveryDisabledLanes & n)
                        var i = 0;
                    else
                        i = l.pendingLanes & -536870913,
                        i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
                    if (i !== 0) {
                        t = i;
                        l: {
                            var c = l;
                            u = su;
                            var f = c.current.memoizedState.isDehydrated;
                            if (f && (pa(c, i).flags |= 256),
                            i = Uc(c, i, !1),
                            i !== 2) {
                                if (Ac && !f) {
                                    c.errorRecoveryDisabledLanes |= n,
                                    Qe |= n,
                                    u = 4;
                                    break l
                                }
                                n = kl,
                                kl = u,
                                n !== null && (kl === null ? kl = n : kl.push.apply(kl, n))
                            }
                            u = i
                        }
                        if (n = !1,
                        u !== 2)
                            continue
                    }
                }
                if (u === 1) {
                    pa(l, 0),
                    he(l, t, 0, !0);
                    break
                }
                l: {
                    switch (a = l,
                    n = u,
                    n) {
                    case 0:
                    case 1:
                        throw Error(o(345));
                    case 4:
                        if ((t & 4194048) !== t)
                            break;
                    case 6:
                        he(a, t, it, !oe);
                        break l;
                    case 2:
                        kl = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(o(329))
                    }
                    if ((t & 62914560) === t && (u = gn + 300 - Il(),
                    10 < u)) {
                        if (he(a, t, it, !oe),
                        _u(a, 0, !0) !== 0)
                            break l;
                        kt = t,
                        a.timeoutHandle = wr(vr.bind(null, a, e, kl, xn, _c, t, it, Qe, xa, oe, n, "Throttled", -0, 0), u);
                        break l
                    }
                    vr(a, e, kl, xn, _c, t, it, Qe, xa, oe, n, null, -0, 0)
                }
            }
            break
        } while (!0);
        Dt(l)
    }
    function vr(l, t, e, a, u, n, i, c, f, v, x, z, y, b) {
        if (l.timeoutHandle = -1,
        z = t.subtreeFlags,
        z & 8192 || (z & 16785408) === 16785408) {
            z = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Ht
            },
            cr(t, n, z);
            var O = (n & 62914560) === n ? gn - Il() : (n & 4194048) === n ? rr - Il() : 0;
            if (O = $m(z, O),
            O !== null) {
                kt = n,
                l.cancelPendingCommit = O(Tr.bind(null, l, t, n, e, a, u, i, c, f, x, z, null, y, b)),
                he(l, n, i, !v);
                return
            }
        }
        Tr(l, t, n, e, a, u, i, c, f)
    }
    function om(l) {
        for (var t = l; ; ) {
            var e = t.tag;
            if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue,
            e !== null && (e = e.stores,
            e !== null)))
                for (var a = 0; a < e.length; a++) {
                    var u = e[a]
                      , n = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!tt(n(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (e = t.child,
            t.subtreeFlags & 16384 && e !== null)
                e.return = t,
                t = e;
            else {
                if (t === l)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === l)
                        return !0;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        }
        return !0
    }
    function he(l, t, e, a) {
        t &= ~Mc,
        t &= ~Qe,
        l.suspendedLanes |= t,
        l.pingedLanes &= ~t,
        a && (l.warmLanes |= t),
        a = l.expirationTimes;
        for (var u = t; 0 < u; ) {
            var n = 31 - lt(u)
              , i = 1 << n;
            a[n] = -1,
            u &= ~i
        }
        e !== 0 && Ef(l, e, t)
    }
    function Sn() {
        return (el & 6) === 0 ? (ru(0),
        !1) : !0
    }
    function Cc() {
        if ($ !== null) {
            if (ul === 0)
                var l = $.return;
            else
                l = $,
                Yt = Ce = null,
                $i(l),
                ra = null,
                Ja = 0,
                l = $;
            for (; l !== null; )
                Ko(l.alternate, l),
                l = l.return;
            $ = null
        }
    }
    function pa(l, t) {
        var e = l.timeoutHandle;
        e !== -1 && (l.timeoutHandle = -1,
        Om(e)),
        e = l.cancelPendingCommit,
        e !== null && (l.cancelPendingCommit = null,
        e()),
        kt = 0,
        Cc(),
        dl = l,
        $ = e = qt(l.current, null),
        W = t,
        ul = 0,
        nt = null,
        oe = !1,
        ba = Oa(l, t),
        Ac = !1,
        xa = it = Mc = Qe = re = xl = 0,
        kl = su = null,
        _c = !1,
        (t & 8) !== 0 && (t |= t & 32);
        var a = l.entangledLanes;
        if (a !== 0)
            for (l = l.entanglements,
            a &= t; 0 < a; ) {
                var u = 31 - lt(a)
                  , n = 1 << u;
                t |= l[u],
                a &= ~n
            }
        return $t = t,
        Xu(),
        e
    }
    function yr(l, t) {
        V = null,
        S.H = tu,
        t === oa || t === $u ? (t = Ds(),
        ul = 3) : t === qi ? (t = Ds(),
        ul = 4) : ul = t === oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
        nt = t,
        $ === null && (xl = 1,
        sn(l, dt(t, l.current)))
    }
    function gr() {
        var l = at.current;
        return l === null ? !0 : (W & 4194048) === W ? yt === null : (W & 62914560) === W || (W & 536870912) !== 0 ? l === yt : !1
    }
    function br() {
        var l = S.H;
        return S.H = tu,
        l === null ? tu : l
    }
    function xr() {
        var l = S.A;
        return S.A = fm,
        l
    }
    function pn() {
        xl = 4,
        oe || (W & 4194048) !== W && at.current !== null || (ba = !0),
        (re & 134217727) === 0 && (Qe & 134217727) === 0 || dl === null || he(dl, W, it, !1)
    }
    function Uc(l, t, e) {
        var a = el;
        el |= 2;
        var u = br()
          , n = xr();
        (dl !== l || W !== t) && (xn = null,
        pa(l, t)),
        t = !1;
        var i = xl;
        l: do
            try {
                if (ul !== 0 && $ !== null) {
                    var c = $
                      , f = nt;
                    switch (ul) {
                    case 8:
                        Cc(),
                        i = 6;
                        break l;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        at.current === null && (t = !0);
                        var v = ul;
                        if (ul = 0,
                        nt = null,
                        za(l, c, f, v),
                        e && ba) {
                            i = 0;
                            break l
                        }
                        break;
                    default:
                        v = ul,
                        ul = 0,
                        nt = null,
                        za(l, c, f, v)
                    }
                }
                rm(),
                i = xl;
                break
            } catch (x) {
                yr(l, x)
            }
        while (!0);
        return t && l.shellSuspendCounter++,
        Yt = Ce = null,
        el = a,
        S.H = u,
        S.A = n,
        $ === null && (dl = null,
        W = 0,
        Xu()),
        i
    }
    function rm() {
        for (; $ !== null; )
            Sr($)
    }
    function dm(l, t) {
        var e = el;
        el |= 2;
        var a = br()
          , u = xr();
        dl !== l || W !== t ? (xn = null,
        bn = Il() + 500,
        pa(l, t)) : ba = Oa(l, t);
        l: do
            try {
                if (ul !== 0 && $ !== null) {
                    t = $;
                    var n = nt;
                    t: switch (ul) {
                    case 1:
                        ul = 0,
                        nt = null,
                        za(l, t, n, 1);
                        break;
                    case 2:
                    case 9:
                        if (js(n)) {
                            ul = 0,
                            nt = null,
                            pr(t);
                            break
                        }
                        t = function() {
                            ul !== 2 && ul !== 9 || dl !== l || (ul = 7),
                            Dt(l)
                        }
                        ,
                        n.then(t, t);
                        break l;
                    case 3:
                        ul = 7;
                        break l;
                    case 4:
                        ul = 5;
                        break l;
                    case 7:
                        js(n) ? (ul = 0,
                        nt = null,
                        pr(t)) : (ul = 0,
                        nt = null,
                        za(l, t, n, 7));
                        break;
                    case 5:
                        var i = null;
                        switch ($.tag) {
                        case 26:
                            i = $.memoizedState;
                        case 5:
                        case 27:
                            var c = $;
                            if (i ? id(i) : c.stateNode.complete) {
                                ul = 0,
                                nt = null;
                                var f = c.sibling;
                                if (f !== null)
                                    $ = f;
                                else {
                                    var v = c.return;
                                    v !== null ? ($ = v,
                                    zn(v)) : $ = null
                                }
                                break t
                            }
                        }
                        ul = 0,
                        nt = null,
                        za(l, t, n, 5);
                        break;
                    case 6:
                        ul = 0,
                        nt = null,
                        za(l, t, n, 6);
                        break;
                    case 8:
                        Cc(),
                        xl = 6;
                        break l;
                    default:
                        throw Error(o(462))
                    }
                }
                mm();
                break
            } catch (x) {
                yr(l, x)
            }
        while (!0);
        return Yt = Ce = null,
        S.H = a,
        S.A = u,
        el = e,
        $ !== null ? 0 : (dl = null,
        W = 0,
        Xu(),
        xl)
    }
    function mm() {
        for (; $ !== null && !qd(); )
            Sr($)
    }
    function Sr(l) {
        var t = Vo(l.alternate, l, $t);
        l.memoizedProps = l.pendingProps,
        t === null ? zn(l) : $ = t
    }
    function pr(l) {
        var t = l
          , e = t.alternate;
        switch (t.tag) {
        case 15:
        case 0:
            t = Yo(e, t, t.pendingProps, t.type, void 0, W);
            break;
        case 11:
            t = Yo(e, t, t.pendingProps, t.type.render, t.ref, W);
            break;
        case 5:
            $i(t);
        default:
            Ko(e, t),
            t = $ = bs(t, $t),
            t = Vo(e, t, $t)
        }
        l.memoizedProps = l.pendingProps,
        t === null ? zn(l) : $ = t
    }
    function za(l, t, e, a) {
        Yt = Ce = null,
        $i(t),
        ra = null,
        Ja = 0;
        var u = t.return;
        try {
            if (tm(l, u, t, e, W)) {
                xl = 1,
                sn(l, dt(e, l.current)),
                $ = null;
                return
            }
        } catch (n) {
            if (u !== null)
                throw $ = u,
                n;
            xl = 1,
            sn(l, dt(e, l.current)),
            $ = null;
            return
        }
        t.flags & 32768 ? (P || a === 1 ? l = !0 : ba || (W & 536870912) !== 0 ? l = !1 : (oe = l = !0,
        (a === 2 || a === 9 || a === 3 || a === 6) && (a = at.current,
        a !== null && a.tag === 13 && (a.flags |= 16384))),
        zr(t, l)) : zn(t)
    }
    function zn(l) {
        var t = l;
        do {
            if ((t.flags & 32768) !== 0) {
                zr(t, oe);
                return
            }
            l = t.return;
            var e = um(t.alternate, t, $t);
            if (e !== null) {
                $ = e;
                return
            }
            if (t = t.sibling,
            t !== null) {
                $ = t;
                return
            }
            $ = t = l
        } while (t !== null);
        xl === 0 && (xl = 5)
    }
    function zr(l, t) {
        do {
            var e = nm(l.alternate, l);
            if (e !== null) {
                e.flags &= 32767,
                $ = e;
                return
            }
            if (e = l.return,
            e !== null && (e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null),
            !t && (l = l.sibling,
            l !== null)) {
                $ = l;
                return
            }
            $ = l = e
        } while (l !== null);
        xl = 6,
        $ = null
    }
    function Tr(l, t, e, a, u, n, i, c, f) {
        l.cancelPendingCommit = null;
        do
            Tn();
        while (Ml !== 0);
        if ((el & 6) !== 0)
            throw Error(o(327));
        if (t !== null) {
            if (t === l.current)
                throw Error(o(177));
            if (n = t.lanes | t.childLanes,
            n |= pi,
            Kd(l, e, n, i, c, f),
            l === dl && ($ = dl = null,
            W = 0),
            Sa = t,
            me = l,
            kt = e,
            jc = n,
            Oc = u,
            dr = a,
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null,
            l.callbackPriority = 0,
            gm(Eu, function() {
                return _r(),
                null
            })) : (l.callbackNode = null,
            l.callbackPriority = 0),
            a = (t.flags & 13878) !== 0,
            (t.subtreeFlags & 13878) !== 0 || a) {
                a = S.T,
                S.T = null,
                u = M.p,
                M.p = 2,
                i = el,
                el |= 4;
                try {
                    im(l, t, e)
                } finally {
                    el = i,
                    M.p = u,
                    S.T = a
                }
            }
            Ml = 1,
            Er(),
            Nr(),
            Ar()
        }
    }
    function Er() {
        if (Ml === 1) {
            Ml = 0;
            var l = me
              , t = Sa
              , e = (t.flags & 13878) !== 0;
            if ((t.subtreeFlags & 13878) !== 0 || e) {
                e = S.T,
                S.T = null;
                var a = M.p;
                M.p = 2;
                var u = el;
                el |= 4;
                try {
                    ur(t, l);
                    var n = wc
                      , i = ss(l.containerInfo)
                      , c = n.focusedElem
                      , f = n.selectionRange;
                    if (i !== c && c && c.ownerDocument && fs(c.ownerDocument.documentElement, c)) {
                        if (f !== null && yi(c)) {
                            var v = f.start
                              , x = f.end;
                            if (x === void 0 && (x = v),
                            "selectionStart" in c)
                                c.selectionStart = v,
                                c.selectionEnd = Math.min(x, c.value.length);
                            else {
                                var z = c.ownerDocument || document
                                  , y = z && z.defaultView || window;
                                if (y.getSelection) {
                                    var b = y.getSelection()
                                      , O = c.textContent.length
                                      , Y = Math.min(f.start, O)
                                      , sl = f.end === void 0 ? Y : Math.min(f.end, O);
                                    !b.extend && Y > sl && (i = sl,
                                    sl = Y,
                                    Y = i);
                                    var m = cs(c, Y)
                                      , r = cs(c, sl);
                                    if (m && r && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== r.node || b.focusOffset !== r.offset)) {
                                        var h = z.createRange();
                                        h.setStart(m.node, m.offset),
                                        b.removeAllRanges(),
                                        Y > sl ? (b.addRange(h),
                                        b.extend(r.node, r.offset)) : (h.setEnd(r.node, r.offset),
                                        b.addRange(h))
                                    }
                                }
                            }
                        }
                        for (z = [],
                        b = c; b = b.parentNode; )
                            b.nodeType === 1 && z.push({
                                element: b,
                                left: b.scrollLeft,
                                top: b.scrollTop
                            });
                        for (typeof c.focus == "function" && c.focus(),
                        c = 0; c < z.length; c++) {
                            var p = z[c];
                            p.element.scrollLeft = p.left,
                            p.element.scrollTop = p.top
                        }
                    }
                    Rn = !!Vc,
                    wc = Vc = null
                } finally {
                    el = u,
                    M.p = a,
                    S.T = e
                }
            }
            l.current = t,
            Ml = 2
        }
    }
    function Nr() {
        if (Ml === 2) {
            Ml = 0;
            var l = me
              , t = Sa
              , e = (t.flags & 8772) !== 0;
            if ((t.subtreeFlags & 8772) !== 0 || e) {
                e = S.T,
                S.T = null;
                var a = M.p;
                M.p = 2;
                var u = el;
                el |= 4;
                try {
                    Po(l, t.alternate, t)
                } finally {
                    el = u,
                    M.p = a,
                    S.T = e
                }
            }
            Ml = 3
        }
    }
    function Ar() {
        if (Ml === 4 || Ml === 3) {
            Ml = 0,
            Bd();
            var l = me
              , t = Sa
              , e = kt
              , a = dr;
            (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ml = 5 : (Ml = 0,
            Sa = me = null,
            Mr(l, l.pendingLanes));
            var u = l.pendingLanes;
            if (u === 0 && (de = null),
            Fn(e),
            t = t.stateNode,
            Pl && typeof Pl.onCommitFiberRoot == "function")
                try {
                    Pl.onCommitFiberRoot(ja, t, void 0, (t.current.flags & 128) === 128)
                } catch {}
            if (a !== null) {
                t = S.T,
                u = M.p,
                M.p = 2,
                S.T = null;
                try {
                    for (var n = l.onRecoverableError, i = 0; i < a.length; i++) {
                        var c = a[i];
                        n(c.value, {
                            componentStack: c.stack
                        })
                    }
                } finally {
                    S.T = t,
                    M.p = u
                }
            }
            (kt & 3) !== 0 && Tn(),
            Dt(l),
            u = l.pendingLanes,
            (e & 261930) !== 0 && (u & 42) !== 0 ? l === Dc ? ou++ : (ou = 0,
            Dc = l) : ou = 0,
            ru(0)
        }
    }
    function Mr(l, t) {
        (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache,
        t != null && (l.pooledCache = null,
        wa(t)))
    }
    function Tn() {
        return Er(),
        Nr(),
        Ar(),
        _r()
    }
    function _r() {
        if (Ml !== 5)
            return !1;
        var l = me
          , t = jc;
        jc = 0;
        var e = Fn(kt)
          , a = S.T
          , u = M.p;
        try {
            M.p = 32 > e ? 32 : e,
            S.T = null,
            e = Oc,
            Oc = null;
            var n = me
              , i = kt;
            if (Ml = 0,
            Sa = me = null,
            kt = 0,
            (el & 6) !== 0)
                throw Error(o(331));
            var c = el;
            if (el |= 4,
            sr(n.current),
            ir(n, n.current, i, e),
            el = c,
            ru(0, !1),
            Pl && typeof Pl.onPostCommitFiberRoot == "function")
                try {
                    Pl.onPostCommitFiberRoot(ja, n)
                } catch {}
            return !0
        } finally {
            M.p = u,
            S.T = a,
            Mr(l, t)
        }
    }
    function jr(l, t, e) {
        t = dt(e, t),
        t = sc(l.stateNode, t, 2),
        l = ie(l, t, 2),
        l !== null && (Da(l, 2),
        Dt(l))
    }
    function nl(l, t, e) {
        if (l.tag === 3)
            jr(l, l, e);
        else
            for (; t !== null; ) {
                if (t.tag === 3) {
                    jr(t, l, e);
                    break
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (de === null || !de.has(a))) {
                        l = dt(e, l),
                        e = Oo(2),
                        a = ie(t, e, 2),
                        a !== null && (Do(e, a, t, l),
                        Da(a, 2),
                        Dt(a));
                        break
                    }
                }
                t = t.return
            }
    }
    function Hc(l, t, e) {
        var a = l.pingCache;
        if (a === null) {
            a = l.pingCache = new sm;
            var u = new Set;
            a.set(t, u)
        } else
            u = a.get(t),
            u === void 0 && (u = new Set,
            a.set(t, u));
        u.has(e) || (Ac = !0,
        u.add(e),
        l = hm.bind(null, l, t, e),
        t.then(l, l))
    }
    function hm(l, t, e) {
        var a = l.pingCache;
        a !== null && a.delete(t),
        l.pingedLanes |= l.suspendedLanes & e,
        l.warmLanes &= ~e,
        dl === l && (W & e) === e && (xl === 4 || xl === 3 && (W & 62914560) === W && 300 > Il() - gn ? (el & 2) === 0 && pa(l, 0) : Mc |= e,
        xa === W && (xa = 0)),
        Dt(l)
    }
    function Or(l, t) {
        t === 0 && (t = Tf()),
        l = je(l, t),
        l !== null && (Da(l, t),
        Dt(l))
    }
    function vm(l) {
        var t = l.memoizedState
          , e = 0;
        t !== null && (e = t.retryLane),
        Or(l, e)
    }
    function ym(l, t) {
        var e = 0;
        switch (l.tag) {
        case 31:
        case 13:
            var a = l.stateNode
              , u = l.memoizedState;
            u !== null && (e = u.retryLane);
            break;
        case 19:
            a = l.stateNode;
            break;
        case 22:
            a = l.stateNode._retryCache;
            break;
        default:
            throw Error(o(314))
        }
        a !== null && a.delete(t),
        Or(l, e)
    }
    function gm(l, t) {
        return Jn(l, t)
    }
    var En = null
      , Ta = null
      , Rc = !1
      , Nn = !1
      , qc = !1
      , ve = 0;
    function Dt(l) {
        l !== Ta && l.next === null && (Ta === null ? En = Ta = l : Ta = Ta.next = l),
        Nn = !0,
        Rc || (Rc = !0,
        xm())
    }
    function ru(l, t) {
        if (!qc && Nn) {
            qc = !0;
            do
                for (var e = !1, a = En; a !== null; ) {
                    if (l !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0)
                            var n = 0;
                        else {
                            var i = a.suspendedLanes
                              , c = a.pingedLanes;
                            n = (1 << 31 - lt(42 | l) + 1) - 1,
                            n &= u & ~(i & ~c),
                            n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0
                        }
                        n !== 0 && (e = !0,
                        Hr(a, n))
                    } else
                        n = W,
                        n = _u(a, a === dl ? n : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1),
                        (n & 3) === 0 || Oa(a, n) || (e = !0,
                        Hr(a, n));
                    a = a.next
                }
            while (e);
            qc = !1
        }
    }
    function bm() {
        Dr()
    }
    function Dr() {
        Nn = Rc = !1;
        var l = 0;
        ve !== 0 && jm() && (l = ve);
        for (var t = Il(), e = null, a = En; a !== null; ) {
            var u = a.next
              , n = Cr(a, t);
            n === 0 ? (a.next = null,
            e === null ? En = u : e.next = u,
            u === null && (Ta = e)) : (e = a,
            (l !== 0 || (n & 3) !== 0) && (Nn = !0)),
            a = u
        }
        Ml !== 0 && Ml !== 5 || ru(l),
        ve !== 0 && (ve = 0)
    }
    function Cr(l, t) {
        for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
            var i = 31 - lt(n)
              , c = 1 << i
              , f = u[i];
            f === -1 ? ((c & e) === 0 || (c & a) !== 0) && (u[i] = wd(c, t)) : f <= t && (l.expiredLanes |= c),
            n &= ~c
        }
        if (t = dl,
        e = W,
        e = _u(l, l === t ? e : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a = l.callbackNode,
        e === 0 || l === t && (ul === 2 || ul === 9) || l.cancelPendingCommit !== null)
            return a !== null && a !== null && $n(a),
            l.callbackNode = null,
            l.callbackPriority = 0;
        if ((e & 3) === 0 || Oa(l, e)) {
            if (t = e & -e,
            t === l.callbackPriority)
                return t;
            switch (a !== null && $n(a),
            Fn(e)) {
            case 2:
            case 8:
                e = pf;
                break;
            case 32:
                e = Eu;
                break;
            case 268435456:
                e = zf;
                break;
            default:
                e = Eu
            }
            return a = Ur.bind(null, l),
            e = Jn(e, a),
            l.callbackPriority = t,
            l.callbackNode = e,
            t
        }
        return a !== null && a !== null && $n(a),
        l.callbackPriority = 2,
        l.callbackNode = null,
        2
    }
    function Ur(l, t) {
        if (Ml !== 0 && Ml !== 5)
            return l.callbackNode = null,
            l.callbackPriority = 0,
            null;
        var e = l.callbackNode;
        if (Tn() && l.callbackNode !== e)
            return null;
        var a = W;
        return a = _u(l, l === dl ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1),
        a === 0 ? null : (hr(l, a, t),
        Cr(l, Il()),
        l.callbackNode != null && l.callbackNode === e ? Ur.bind(null, l) : null)
    }
    function Hr(l, t) {
        if (Tn())
            return null;
        hr(l, t, !0)
    }
    function xm() {
        Dm(function() {
            (el & 6) !== 0 ? Jn(Sf, bm) : Dr()
        })
    }
    function Bc() {
        if (ve === 0) {
            var l = fa;
            l === 0 && (l = Nu,
            Nu <<= 1,
            (Nu & 261888) === 0 && (Nu = 256)),
            ve = l
        }
        return ve
    }
    function Rr(l) {
        return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Cu("" + l)
    }
    function qr(l, t) {
        var e = t.ownerDocument.createElement("input");
        return e.name = t.name,
        e.value = t.value,
        l.id && e.setAttribute("form", l.id),
        t.parentNode.insertBefore(e, t),
        l = new FormData(l),
        e.parentNode.removeChild(e),
        l
    }
    function Sm(l, t, e, a, u) {
        if (t === "submit" && e && e.stateNode === u) {
            var n = Rr((u[Vl] || null).action)
              , i = a.submitter;
            i && (t = (t = i[Vl] || null) ? Rr(t.formAction) : i.getAttribute("formAction"),
            t !== null && (n = t,
            i = null));
            var c = new qu("action","action",null,a,u);
            l.push({
                event: c,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (a.defaultPrevented) {
                            if (ve !== 0) {
                                var f = i ? qr(u, i) : new FormData(u);
                                ac(e, {
                                    pending: !0,
                                    data: f,
                                    method: u.method,
                                    action: n
                                }, null, f)
                            }
                        } else
                            typeof n == "function" && (c.preventDefault(),
                            f = i ? qr(u, i) : new FormData(u),
                            ac(e, {
                                pending: !0,
                                data: f,
                                method: u.method,
                                action: n
                            }, n, f))
                    },
                    currentTarget: u
                }]
            })
        }
    }
    for (var Yc = 0; Yc < Si.length; Yc++) {
        var Gc = Si[Yc]
          , pm = Gc.toLowerCase()
          , zm = Gc[0].toUpperCase() + Gc.slice(1);
        pt(pm, "on" + zm)
    }
    pt(ds, "onAnimationEnd"),
    pt(ms, "onAnimationIteration"),
    pt(hs, "onAnimationStart"),
    pt("dblclick", "onDoubleClick"),
    pt("focusin", "onFocus"),
    pt("focusout", "onBlur"),
    pt(Y0, "onTransitionRun"),
    pt(G0, "onTransitionStart"),
    pt(X0, "onTransitionCancel"),
    pt(vs, "onTransitionEnd"),
    $e("onMouseEnter", ["mouseout", "mouseover"]),
    $e("onMouseLeave", ["mouseout", "mouseover"]),
    $e("onPointerEnter", ["pointerout", "pointerover"]),
    $e("onPointerLeave", ["pointerout", "pointerover"]),
    Ne("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ne("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ne("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ne("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ne("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ne("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var du = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Tm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(du));
    function Br(l, t) {
        t = (t & 4) !== 0;
        for (var e = 0; e < l.length; e++) {
            var a = l[e]
              , u = a.event;
            a = a.listeners;
            l: {
                var n = void 0;
                if (t)
                    for (var i = a.length - 1; 0 <= i; i--) {
                        var c = a[i]
                          , f = c.instance
                          , v = c.currentTarget;
                        if (c = c.listener,
                        f !== n && u.isPropagationStopped())
                            break l;
                        n = c,
                        u.currentTarget = v;
                        try {
                            n(u)
                        } catch (x) {
                            Gu(x)
                        }
                        u.currentTarget = null,
                        n = f
                    }
                else
                    for (i = 0; i < a.length; i++) {
                        if (c = a[i],
                        f = c.instance,
                        v = c.currentTarget,
                        c = c.listener,
                        f !== n && u.isPropagationStopped())
                            break l;
                        n = c,
                        u.currentTarget = v;
                        try {
                            n(u)
                        } catch (x) {
                            Gu(x)
                        }
                        u.currentTarget = null,
                        n = f
                    }
            }
        }
    }
    function k(l, t) {
        var e = t[In];
        e === void 0 && (e = t[In] = new Set);
        var a = l + "__bubble";
        e.has(a) || (Yr(t, l, 2, !1),
        e.add(a))
    }
    function Xc(l, t, e) {
        var a = 0;
        t && (a |= 4),
        Yr(e, l, a, t)
    }
    var An = "_reactListening" + Math.random().toString(36).slice(2);
    function Qc(l) {
        if (!l[An]) {
            l[An] = !0,
            Of.forEach(function(e) {
                e !== "selectionchange" && (Tm.has(e) || Xc(e, !1, l),
                Xc(e, !0, l))
            });
            var t = l.nodeType === 9 ? l : l.ownerDocument;
            t === null || t[An] || (t[An] = !0,
            Xc("selectionchange", !1, t))
        }
    }
    function Yr(l, t, e, a) {
        switch (md(t)) {
        case 2:
            var u = Fm;
            break;
        case 8:
            u = Im;
            break;
        default:
            u = ef
        }
        e = u.bind(null, t, e, l),
        u = void 0,
        !ci || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0),
        a ? u !== void 0 ? l.addEventListener(t, e, {
            capture: !0,
            passive: u
        }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
            passive: u
        }) : l.addEventListener(t, e, !1)
    }
    function Lc(l, t, e, a, u) {
        var n = a;
        if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
            l: for (; ; ) {
                if (a === null)
                    return;
                var i = a.tag;
                if (i === 3 || i === 4) {
                    var c = a.stateNode.containerInfo;
                    if (c === u)
                        break;
                    if (i === 4)
                        for (i = a.return; i !== null; ) {
                            var f = i.tag;
                            if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                                return;
                            i = i.return
                        }
                    for (; c !== null; ) {
                        if (i = we(c),
                        i === null)
                            return;
                        if (f = i.tag,
                        f === 5 || f === 6 || f === 26 || f === 27) {
                            a = n = i;
                            continue l
                        }
                        c = c.parentNode
                    }
                }
                a = a.return
            }
        Lf(function() {
            var v = n
              , x = ni(e)
              , z = [];
            l: {
                var y = ys.get(l);
                if (y !== void 0) {
                    var b = qu
                      , O = l;
                    switch (l) {
                    case "keypress":
                        if (Hu(e) === 0)
                            break l;
                    case "keydown":
                    case "keyup":
                        b = y0;
                        break;
                    case "focusin":
                        O = "focus",
                        b = ri;
                        break;
                    case "focusout":
                        O = "blur",
                        b = ri;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        b = ri;
                        break;
                    case "click":
                        if (e.button === 2)
                            break l;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        b = wf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        b = u0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        b = x0;
                        break;
                    case ds:
                    case ms:
                    case hs:
                        b = c0;
                        break;
                    case vs:
                        b = p0;
                        break;
                    case "scroll":
                    case "scrollend":
                        b = e0;
                        break;
                    case "wheel":
                        b = T0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        b = s0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        b = Jf;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        b = N0
                    }
                    var Y = (t & 4) !== 0
                      , sl = !Y && (l === "scroll" || l === "scrollend")
                      , m = Y ? y !== null ? y + "Capture" : null : y;
                    Y = [];
                    for (var r = v, h; r !== null; ) {
                        var p = r;
                        if (h = p.stateNode,
                        p = p.tag,
                        p !== 5 && p !== 26 && p !== 27 || h === null || m === null || (p = Ha(r, m),
                        p != null && Y.push(mu(r, p, h))),
                        sl)
                            break;
                        r = r.return
                    }
                    0 < Y.length && (y = new b(y,O,null,e,x),
                    z.push({
                        event: y,
                        listeners: Y
                    }))
                }
            }
            if ((t & 7) === 0) {
                l: {
                    if (y = l === "mouseover" || l === "pointerover",
                    b = l === "mouseout" || l === "pointerout",
                    y && e !== ui && (O = e.relatedTarget || e.fromElement) && (we(O) || O[Ve]))
                        break l;
                    if ((b || y) && (y = x.window === x ? x : (y = x.ownerDocument) ? y.defaultView || y.parentWindow : window,
                    b ? (O = e.relatedTarget || e.toElement,
                    b = v,
                    O = O ? we(O) : null,
                    O !== null && (sl = U(O),
                    Y = O.tag,
                    O !== sl || Y !== 5 && Y !== 27 && Y !== 6) && (O = null)) : (b = null,
                    O = v),
                    b !== O)) {
                        if (Y = wf,
                        p = "onMouseLeave",
                        m = "onMouseEnter",
                        r = "mouse",
                        (l === "pointerout" || l === "pointerover") && (Y = Jf,
                        p = "onPointerLeave",
                        m = "onPointerEnter",
                        r = "pointer"),
                        sl = b == null ? y : Ua(b),
                        h = O == null ? y : Ua(O),
                        y = new Y(p,r + "leave",b,e,x),
                        y.target = sl,
                        y.relatedTarget = h,
                        p = null,
                        we(x) === v && (Y = new Y(m,r + "enter",O,e,x),
                        Y.target = h,
                        Y.relatedTarget = sl,
                        p = Y),
                        sl = p,
                        b && O)
                            t: {
                                for (Y = Em,
                                m = b,
                                r = O,
                                h = 0,
                                p = m; p; p = Y(p))
                                    h++;
                                p = 0;
                                for (var B = r; B; B = Y(B))
                                    p++;
                                for (; 0 < h - p; )
                                    m = Y(m),
                                    h--;
                                for (; 0 < p - h; )
                                    r = Y(r),
                                    p--;
                                for (; h--; ) {
                                    if (m === r || r !== null && m === r.alternate) {
                                        Y = m;
                                        break t
                                    }
                                    m = Y(m),
                                    r = Y(r)
                                }
                                Y = null
                            }
                        else
                            Y = null;
                        b !== null && Gr(z, y, b, Y, !1),
                        O !== null && sl !== null && Gr(z, sl, O, Y, !0)
                    }
                }
                l: {
                    if (y = v ? Ua(v) : window,
                    b = y.nodeName && y.nodeName.toLowerCase(),
                    b === "select" || b === "input" && y.type === "file")
                        var ll = ts;
                    else if (Pf(y))
                        if (es)
                            ll = R0;
                        else {
                            ll = U0;
                            var H = C0
                        }
                    else
                        b = y.nodeName,
                        !b || b.toLowerCase() !== "input" || y.type !== "checkbox" && y.type !== "radio" ? v && ai(v.elementType) && (ll = ts) : ll = H0;
                    if (ll && (ll = ll(l, v))) {
                        ls(z, ll, e, x);
                        break l
                    }
                    H && H(l, y, v),
                    l === "focusout" && v && y.type === "number" && v.memoizedProps.value != null && ei(y, "number", y.value)
                }
                switch (H = v ? Ua(v) : window,
                l) {
                case "focusin":
                    (Pf(H) || H.contentEditable === "true") && (la = H,
                    gi = v,
                    La = null);
                    break;
                case "focusout":
                    La = gi = la = null;
                    break;
                case "mousedown":
                    bi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    bi = !1,
                    os(z, e, x);
                    break;
                case "selectionchange":
                    if (B0)
                        break;
                case "keydown":
                case "keyup":
                    os(z, e, x)
                }
                var w;
                if (mi)
                    l: {
                        switch (l) {
                        case "compositionstart":
                            var F = "onCompositionStart";
                            break l;
                        case "compositionend":
                            F = "onCompositionEnd";
                            break l;
                        case "compositionupdate":
                            F = "onCompositionUpdate";
                            break l
                        }
                        F = void 0
                    }
                else
                    Pe ? Ff(l, e) && (F = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (F = "onCompositionStart");
                F && ($f && e.locale !== "ko" && (Pe || F !== "onCompositionStart" ? F === "onCompositionEnd" && Pe && (w = Zf()) : (Pt = x,
                fi = "value" in Pt ? Pt.value : Pt.textContent,
                Pe = !0)),
                H = Mn(v, F),
                0 < H.length && (F = new Kf(F,l,null,e,x),
                z.push({
                    event: F,
                    listeners: H
                }),
                w ? F.data = w : (w = If(e),
                w !== null && (F.data = w)))),
                (w = M0 ? _0(l, e) : j0(l, e)) && (F = Mn(v, "onBeforeInput"),
                0 < F.length && (H = new Kf("onBeforeInput","beforeinput",null,e,x),
                z.push({
                    event: H,
                    listeners: F
                }),
                H.data = w)),
                Sm(z, l, v, e, x)
            }
            Br(z, t)
        })
    }
    function mu(l, t, e) {
        return {
            instance: l,
            listener: t,
            currentTarget: e
        }
    }
    function Mn(l, t) {
        for (var e = t + "Capture", a = []; l !== null; ) {
            var u = l
              , n = u.stateNode;
            if (u = u.tag,
            u !== 5 && u !== 26 && u !== 27 || n === null || (u = Ha(l, e),
            u != null && a.unshift(mu(l, u, n)),
            u = Ha(l, t),
            u != null && a.push(mu(l, u, n))),
            l.tag === 3)
                return a;
            l = l.return
        }
        return []
    }
    function Em(l) {
        if (l === null)
            return null;
        do
            l = l.return;
        while (l && l.tag !== 5 && l.tag !== 27);
        return l || null
    }
    function Gr(l, t, e, a, u) {
        for (var n = t._reactName, i = []; e !== null && e !== a; ) {
            var c = e
              , f = c.alternate
              , v = c.stateNode;
            if (c = c.tag,
            f !== null && f === a)
                break;
            c !== 5 && c !== 26 && c !== 27 || v === null || (f = v,
            u ? (v = Ha(e, n),
            v != null && i.unshift(mu(e, v, f))) : u || (v = Ha(e, n),
            v != null && i.push(mu(e, v, f)))),
            e = e.return
        }
        i.length !== 0 && l.push({
            event: t,
            listeners: i
        })
    }
    var Nm = /\r\n?/g
      , Am = /\u0000|\uFFFD/g;
    function Xr(l) {
        return (typeof l == "string" ? l : "" + l).replace(Nm, `
`).replace(Am, "")
    }
    function Qr(l, t) {
        return t = Xr(t),
        Xr(l) === t
    }
    function fl(l, t, e, a, u, n) {
        switch (e) {
        case "children":
            typeof a == "string" ? t === "body" || t === "textarea" && a === "" || We(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && We(l, "" + a);
            break;
        case "className":
            Ou(l, "class", a);
            break;
        case "tabIndex":
            Ou(l, "tabindex", a);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            Ou(l, e, a);
            break;
        case "style":
            Xf(l, a, n);
            break;
        case "data":
            if (t !== "object") {
                Ou(l, "data", a);
                break
            }
        case "src":
        case "href":
            if (a === "" && (t !== "a" || e !== "href")) {
                l.removeAttribute(e);
                break
            }
            if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Cu("" + a),
            l.setAttribute(e, a);
            break;
        case "action":
        case "formAction":
            if (typeof a == "function") {
                l.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof n == "function" && (e === "formAction" ? (t !== "input" && fl(l, t, "name", u.name, u, null),
                fl(l, t, "formEncType", u.formEncType, u, null),
                fl(l, t, "formMethod", u.formMethod, u, null),
                fl(l, t, "formTarget", u.formTarget, u, null)) : (fl(l, t, "encType", u.encType, u, null),
                fl(l, t, "method", u.method, u, null),
                fl(l, t, "target", u.target, u, null)));
            if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                l.removeAttribute(e);
                break
            }
            a = Cu("" + a),
            l.setAttribute(e, a);
            break;
        case "onClick":
            a != null && (l.onclick = Ht);
            break;
        case "onScroll":
            a != null && k("scroll", l);
            break;
        case "onScrollEnd":
            a != null && k("scrollend", l);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(o(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(o(60));
                    l.innerHTML = e
                }
            }
            break;
        case "multiple":
            l.multiple = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "muted":
            l.muted = a && typeof a != "function" && typeof a != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                l.removeAttribute("xlink:href");
                break
            }
            e = Cu("" + a),
            l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
            break;
        case "capture":
        case "download":
            a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
            break;
        case "rowSpan":
        case "start":
            a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
            break;
        case "popover":
            k("beforetoggle", l),
            k("toggle", l),
            ju(l, "popover", a);
            break;
        case "xlinkActuate":
            Ut(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
            break;
        case "xlinkArcrole":
            Ut(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
            break;
        case "xlinkRole":
            Ut(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
            break;
        case "xlinkShow":
            Ut(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
            break;
        case "xlinkTitle":
            Ut(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
            break;
        case "xlinkType":
            Ut(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
            break;
        case "xmlBase":
            Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
            break;
        case "xmlLang":
            Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
            break;
        case "xmlSpace":
            Ut(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
            break;
        case "is":
            ju(l, "is", a);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = l0.get(e) || e,
            ju(l, e, a))
        }
    }
    function Zc(l, t, e, a, u, n) {
        switch (e) {
        case "style":
            Xf(l, a, n);
            break;
        case "dangerouslySetInnerHTML":
            if (a != null) {
                if (typeof a != "object" || !("__html" in a))
                    throw Error(o(61));
                if (e = a.__html,
                e != null) {
                    if (u.children != null)
                        throw Error(o(60));
                    l.innerHTML = e
                }
            }
            break;
        case "children":
            typeof a == "string" ? We(l, a) : (typeof a == "number" || typeof a == "bigint") && We(l, "" + a);
            break;
        case "onScroll":
            a != null && k("scroll", l);
            break;
        case "onScrollEnd":
            a != null && k("scrollend", l);
            break;
        case "onClick":
            a != null && (l.onclick = Ht);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!Df.hasOwnProperty(e))
                l: {
                    if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"),
                    t = e.slice(2, u ? e.length - 7 : void 0),
                    n = l[Vl] || null,
                    n = n != null ? n[e] : null,
                    typeof n == "function" && l.removeEventListener(t, n, u),
                    typeof a == "function")) {
                        typeof n != "function" && n !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)),
                        l.addEventListener(t, a, u);
                        break l
                    }
                    e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : ju(l, e, a)
                }
        }
    }
    function Rl(l, t, e) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            k("error", l),
            k("load", l);
            var a = !1, u = !1, n;
            for (n in e)
                if (e.hasOwnProperty(n)) {
                    var i = e[n];
                    if (i != null)
                        switch (n) {
                        case "src":
                            a = !0;
                            break;
                        case "srcSet":
                            u = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(o(137, t));
                        default:
                            fl(l, t, n, i, e, null)
                        }
                }
            u && fl(l, t, "srcSet", e.srcSet, e, null),
            a && fl(l, t, "src", e.src, e, null);
            return;
        case "input":
            k("invalid", l);
            var c = n = i = u = null
              , f = null
              , v = null;
            for (a in e)
                if (e.hasOwnProperty(a)) {
                    var x = e[a];
                    if (x != null)
                        switch (a) {
                        case "name":
                            u = x;
                            break;
                        case "type":
                            i = x;
                            break;
                        case "checked":
                            f = x;
                            break;
                        case "defaultChecked":
                            v = x;
                            break;
                        case "value":
                            n = x;
                            break;
                        case "defaultValue":
                            c = x;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (x != null)
                                throw Error(o(137, t));
                            break;
                        default:
                            fl(l, t, a, x, e, null)
                        }
                }
            qf(l, n, c, f, v, i, u, !1);
            return;
        case "select":
            k("invalid", l),
            a = i = n = null;
            for (u in e)
                if (e.hasOwnProperty(u) && (c = e[u],
                c != null))
                    switch (u) {
                    case "value":
                        n = c;
                        break;
                    case "defaultValue":
                        i = c;
                        break;
                    case "multiple":
                        a = c;
                    default:
                        fl(l, t, u, c, e, null)
                    }
            t = n,
            e = i,
            l.multiple = !!a,
            t != null ? ke(l, !!a, t, !1) : e != null && ke(l, !!a, e, !0);
            return;
        case "textarea":
            k("invalid", l),
            n = u = a = null;
            for (i in e)
                if (e.hasOwnProperty(i) && (c = e[i],
                c != null))
                    switch (i) {
                    case "value":
                        a = c;
                        break;
                    case "defaultValue":
                        u = c;
                        break;
                    case "children":
                        n = c;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (c != null)
                            throw Error(o(91));
                        break;
                    default:
                        fl(l, t, i, c, e, null)
                    }
            Yf(l, a, u, n);
            return;
        case "option":
            for (f in e)
                if (e.hasOwnProperty(f) && (a = e[f],
                a != null))
                    switch (f) {
                    case "selected":
                        l.selected = a && typeof a != "function" && typeof a != "symbol";
                        break;
                    default:
                        fl(l, t, f, a, e, null)
                    }
            return;
        case "dialog":
            k("beforetoggle", l),
            k("toggle", l),
            k("cancel", l),
            k("close", l);
            break;
        case "iframe":
        case "object":
            k("load", l);
            break;
        case "video":
        case "audio":
            for (a = 0; a < du.length; a++)
                k(du[a], l);
            break;
        case "image":
            k("error", l),
            k("load", l);
            break;
        case "details":
            k("toggle", l);
            break;
        case "embed":
        case "source":
        case "link":
            k("error", l),
            k("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (v in e)
                if (e.hasOwnProperty(v) && (a = e[v],
                a != null))
                    switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(o(137, t));
                    default:
                        fl(l, t, v, a, e, null)
                    }
            return;
        default:
            if (ai(t)) {
                for (x in e)
                    e.hasOwnProperty(x) && (a = e[x],
                    a !== void 0 && Zc(l, t, x, a, e, void 0));
                return
            }
        }
        for (c in e)
            e.hasOwnProperty(c) && (a = e[c],
            a != null && fl(l, t, c, a, e, null))
    }
    function Mm(l, t, e, a) {
        switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var u = null
              , n = null
              , i = null
              , c = null
              , f = null
              , v = null
              , x = null;
            for (b in e) {
                var z = e[b];
                if (e.hasOwnProperty(b) && z != null)
                    switch (b) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        f = z;
                    default:
                        a.hasOwnProperty(b) || fl(l, t, b, null, a, z)
                    }
            }
            for (var y in a) {
                var b = a[y];
                if (z = e[y],
                a.hasOwnProperty(y) && (b != null || z != null))
                    switch (y) {
                    case "type":
                        n = b;
                        break;
                    case "name":
                        u = b;
                        break;
                    case "checked":
                        v = b;
                        break;
                    case "defaultChecked":
                        x = b;
                        break;
                    case "value":
                        i = b;
                        break;
                    case "defaultValue":
                        c = b;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (b != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        b !== z && fl(l, t, y, b, a, z)
                    }
            }
            ti(l, i, c, f, v, x, n, u);
            return;
        case "select":
            b = i = c = y = null;
            for (n in e)
                if (f = e[n],
                e.hasOwnProperty(n) && f != null)
                    switch (n) {
                    case "value":
                        break;
                    case "multiple":
                        b = f;
                    default:
                        a.hasOwnProperty(n) || fl(l, t, n, null, a, f)
                    }
            for (u in a)
                if (n = a[u],
                f = e[u],
                a.hasOwnProperty(u) && (n != null || f != null))
                    switch (u) {
                    case "value":
                        y = n;
                        break;
                    case "defaultValue":
                        c = n;
                        break;
                    case "multiple":
                        i = n;
                    default:
                        n !== f && fl(l, t, u, n, a, f)
                    }
            t = c,
            e = i,
            a = b,
            y != null ? ke(l, !!e, y, !1) : !!a != !!e && (t != null ? ke(l, !!e, t, !0) : ke(l, !!e, e ? [] : "", !1));
            return;
        case "textarea":
            b = y = null;
            for (c in e)
                if (u = e[c],
                e.hasOwnProperty(c) && u != null && !a.hasOwnProperty(c))
                    switch (c) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        fl(l, t, c, null, a, u)
                    }
            for (i in a)
                if (u = a[i],
                n = e[i],
                a.hasOwnProperty(i) && (u != null || n != null))
                    switch (i) {
                    case "value":
                        y = u;
                        break;
                    case "defaultValue":
                        b = u;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (u != null)
                            throw Error(o(91));
                        break;
                    default:
                        u !== n && fl(l, t, i, u, a, n)
                    }
            Bf(l, y, b);
            return;
        case "option":
            for (var O in e)
                if (y = e[O],
                e.hasOwnProperty(O) && y != null && !a.hasOwnProperty(O))
                    switch (O) {
                    case "selected":
                        l.selected = !1;
                        break;
                    default:
                        fl(l, t, O, null, a, y)
                    }
            for (f in a)
                if (y = a[f],
                b = e[f],
                a.hasOwnProperty(f) && y !== b && (y != null || b != null))
                    switch (f) {
                    case "selected":
                        l.selected = y && typeof y != "function" && typeof y != "symbol";
                        break;
                    default:
                        fl(l, t, f, y, a, b)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var Y in e)
                y = e[Y],
                e.hasOwnProperty(Y) && y != null && !a.hasOwnProperty(Y) && fl(l, t, Y, null, a, y);
            for (v in a)
                if (y = a[v],
                b = e[v],
                a.hasOwnProperty(v) && y !== b && (y != null || b != null))
                    switch (v) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (y != null)
                            throw Error(o(137, t));
                        break;
                    default:
                        fl(l, t, v, y, a, b)
                    }
            return;
        default:
            if (ai(t)) {
                for (var sl in e)
                    y = e[sl],
                    e.hasOwnProperty(sl) && y !== void 0 && !a.hasOwnProperty(sl) && Zc(l, t, sl, void 0, a, y);
                for (x in a)
                    y = a[x],
                    b = e[x],
                    !a.hasOwnProperty(x) || y === b || y === void 0 && b === void 0 || Zc(l, t, x, y, a, b);
                return
            }
        }
        for (var m in e)
            y = e[m],
            e.hasOwnProperty(m) && y != null && !a.hasOwnProperty(m) && fl(l, t, m, null, a, y);
        for (z in a)
            y = a[z],
            b = e[z],
            !a.hasOwnProperty(z) || y === b || y == null && b == null || fl(l, t, z, y, a, b)
    }
    function Lr(l) {
        switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function _m() {
        if (typeof performance.getEntriesByType == "function") {
            for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
                var u = e[a]
                  , n = u.transferSize
                  , i = u.initiatorType
                  , c = u.duration;
                if (n && c && Lr(i)) {
                    for (i = 0,
                    c = u.responseEnd,
                    a += 1; a < e.length; a++) {
                        var f = e[a]
                          , v = f.startTime;
                        if (v > c)
                            break;
                        var x = f.transferSize
                          , z = f.initiatorType;
                        x && Lr(z) && (f = f.responseEnd,
                        i += x * (f < c ? 1 : (c - v) / (f - v)))
                    }
                    if (--a,
                    t += 8 * (n + i) / (u.duration / 1e3),
                    l++,
                    10 < l)
                        break
                }
            }
            if (0 < l)
                return t / l / 1e6
        }
        return navigator.connection && (l = navigator.connection.downlink,
        typeof l == "number") ? l : 5
    }
    var Vc = null
      , wc = null;
    function _n(l) {
        return l.nodeType === 9 ? l : l.ownerDocument
    }
    function Zr(l) {
        switch (l) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function Vr(l, t) {
        if (l === 0)
            switch (t) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return l === 1 && t === "foreignObject" ? 0 : l
    }
    function Kc(l, t) {
        return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
    }
    var Jc = null;
    function jm() {
        var l = window.event;
        return l && l.type === "popstate" ? l === Jc ? !1 : (Jc = l,
        !0) : (Jc = null,
        !1)
    }
    var wr = typeof setTimeout == "function" ? setTimeout : void 0
      , Om = typeof clearTimeout == "function" ? clearTimeout : void 0
      , Kr = typeof Promise == "function" ? Promise : void 0
      , Dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kr < "u" ? function(l) {
        return Kr.resolve(null).then(l).catch(Cm)
    }
    : wr;
    function Cm(l) {
        setTimeout(function() {
            throw l
        })
    }
    function ye(l) {
        return l === "head"
    }
    function Jr(l, t) {
        var e = t
          , a = 0;
        do {
            var u = e.nextSibling;
            if (l.removeChild(e),
            u && u.nodeType === 8)
                if (e = u.data,
                e === "/$" || e === "/&") {
                    if (a === 0) {
                        l.removeChild(u),
                        Ma(t);
                        return
                    }
                    a--
                } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
                    a++;
                else if (e === "html")
                    hu(l.ownerDocument.documentElement);
                else if (e === "head") {
                    e = l.ownerDocument.head,
                    hu(e);
                    for (var n = e.firstChild; n; ) {
                        var i = n.nextSibling
                          , c = n.nodeName;
                        n[Ca] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n),
                        n = i
                    }
                } else
                    e === "body" && hu(l.ownerDocument.body);
            e = u
        } while (e);
        Ma(t)
    }
    function $r(l, t) {
        var e = l;
        l = 0;
        do {
            var a = e.nextSibling;
            if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display,
            e.style.display = "none") : (e.style.display = e._stashedDisplay || "",
            e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue,
            e.nodeValue = "") : e.nodeValue = e._stashedText || ""),
            a && a.nodeType === 8)
                if (e = a.data,
                e === "/$") {
                    if (l === 0)
                        break;
                    l--
                } else
                    e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
            e = a
        } while (e)
    }
    function $c(l) {
        var t = l.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
            var e = t;
            switch (t = t.nextSibling,
            e.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                $c(e),
                Pn(e);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (e.rel.toLowerCase() === "stylesheet")
                    continue
            }
            l.removeChild(e)
        }
    }
    function Um(l, t, e, a) {
        for (; l.nodeType === 1; ) {
            var u = e;
            if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
                if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
                    break
            } else if (a) {
                if (!l[Ca])
                    switch (t) {
                    case "meta":
                        if (!l.hasAttribute("itemprop"))
                            break;
                        return l;
                    case "link":
                        if (n = l.getAttribute("rel"),
                        n === "stylesheet" && l.hasAttribute("data-precedence"))
                            break;
                        if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                            break;
                        return l;
                    case "style":
                        if (l.hasAttribute("data-precedence"))
                            break;
                        return l;
                    case "script":
                        if (n = l.getAttribute("src"),
                        (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                            break;
                        return l;
                    default:
                        return l
                    }
            } else if (t === "input" && l.type === "hidden") {
                var n = u.name == null ? null : "" + u.name;
                if (u.type === "hidden" && l.getAttribute("name") === n)
                    return l
            } else
                return l;
            if (l = gt(l.nextSibling),
            l === null)
                break
        }
        return null
    }
    function Hm(l, t, e) {
        if (t === "")
            return null;
        for (; l.nodeType !== 3; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = gt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function kr(l, t) {
        for (; l.nodeType !== 8; )
            if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = gt(l.nextSibling),
            l === null))
                return null;
        return l
    }
    function kc(l) {
        return l.data === "$?" || l.data === "$~"
    }
    function Wc(l) {
        return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading"
    }
    function Rm(l, t) {
        var e = l.ownerDocument;
        if (l.data === "$~")
            l._reactRetry = t;
        else if (l.data !== "$?" || e.readyState !== "loading")
            t();
        else {
            var a = function() {
                t(),
                e.removeEventListener("DOMContentLoaded", a)
            };
            e.addEventListener("DOMContentLoaded", a),
            l._reactRetry = a
        }
    }
    function gt(l) {
        for (; l != null; l = l.nextSibling) {
            var t = l.nodeType;
            if (t === 1 || t === 3)
                break;
            if (t === 8) {
                if (t = l.data,
                t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
                    break;
                if (t === "/$" || t === "/&")
                    return null
            }
        }
        return l
    }
    var Fc = null;
    function Wr(l) {
        l = l.nextSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "/$" || e === "/&") {
                    if (t === 0)
                        return gt(l.nextSibling);
                    t--
                } else
                    e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++
            }
            l = l.nextSibling
        }
        return null
    }
    function Fr(l) {
        l = l.previousSibling;
        for (var t = 0; l; ) {
            if (l.nodeType === 8) {
                var e = l.data;
                if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
                    if (t === 0)
                        return l;
                    t--
                } else
                    e !== "/$" && e !== "/&" || t++
            }
            l = l.previousSibling
        }
        return null
    }
    function Ir(l, t, e) {
        switch (t = _n(e),
        l) {
        case "html":
            if (l = t.documentElement,
            !l)
                throw Error(o(452));
            return l;
        case "head":
            if (l = t.head,
            !l)
                throw Error(o(453));
            return l;
        case "body":
            if (l = t.body,
            !l)
                throw Error(o(454));
            return l;
        default:
            throw Error(o(451))
        }
    }
    function hu(l) {
        for (var t = l.attributes; t.length; )
            l.removeAttributeNode(t[0]);
        Pn(l)
    }
    var bt = new Map
      , Pr = new Set;
    function jn(l) {
        return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument
    }
    var Wt = M.d;
    M.d = {
        f: qm,
        r: Bm,
        D: Ym,
        C: Gm,
        L: Xm,
        m: Qm,
        X: Zm,
        S: Lm,
        M: Vm
    };
    function qm() {
        var l = Wt.f()
          , t = Sn();
        return l || t
    }
    function Bm(l) {
        var t = Ke(l);
        t !== null && t.tag === 5 && t.type === "form" ? yo(t) : Wt.r(l)
    }
    var Ea = typeof document > "u" ? null : document;
    function ld(l, t, e) {
        var a = Ea;
        if (a && typeof t == "string" && t) {
            var u = ot(t);
            u = 'link[rel="' + l + '"][href="' + u + '"]',
            typeof e == "string" && (u += '[crossorigin="' + e + '"]'),
            Pr.has(u) || (Pr.add(u),
            l = {
                rel: l,
                crossOrigin: e,
                href: t
            },
            a.querySelector(u) === null && (t = a.createElement("link"),
            Rl(t, "link", l),
            _l(t),
            a.head.appendChild(t)))
        }
    }
    function Ym(l) {
        Wt.D(l),
        ld("dns-prefetch", l, null)
    }
    function Gm(l, t) {
        Wt.C(l, t),
        ld("preconnect", l, t)
    }
    function Xm(l, t, e) {
        Wt.L(l, t, e);
        var a = Ea;
        if (a && l && t) {
            var u = 'link[rel="preload"][as="' + ot(t) + '"]';
            t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + ot(e.imageSrcSet) + '"]',
            typeof e.imageSizes == "string" && (u += '[imagesizes="' + ot(e.imageSizes) + '"]')) : u += '[href="' + ot(l) + '"]';
            var n = u;
            switch (t) {
            case "style":
                n = Na(l);
                break;
            case "script":
                n = Aa(l)
            }
            bt.has(n) || (l = D({
                rel: "preload",
                href: t === "image" && e && e.imageSrcSet ? void 0 : l,
                as: t
            }, e),
            bt.set(n, l),
            a.querySelector(u) !== null || t === "style" && a.querySelector(vu(n)) || t === "script" && a.querySelector(yu(n)) || (t = a.createElement("link"),
            Rl(t, "link", l),
            _l(t),
            a.head.appendChild(t)))
        }
    }
    function Qm(l, t) {
        Wt.m(l, t);
        var e = Ea;
        if (e && l) {
            var a = t && typeof t.as == "string" ? t.as : "script"
              , u = 'link[rel="modulepreload"][as="' + ot(a) + '"][href="' + ot(l) + '"]'
              , n = u;
            switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                n = Aa(l)
            }
            if (!bt.has(n) && (l = D({
                rel: "modulepreload",
                href: l
            }, t),
            bt.set(n, l),
            e.querySelector(u) === null)) {
                switch (a) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (e.querySelector(yu(n)))
                        return
                }
                a = e.createElement("link"),
                Rl(a, "link", l),
                _l(a),
                e.head.appendChild(a)
            }
        }
    }
    function Lm(l, t, e) {
        Wt.S(l, t, e);
        var a = Ea;
        if (a && l) {
            var u = Je(a).hoistableStyles
              , n = Na(l);
            t = t || "default";
            var i = u.get(n);
            if (!i) {
                var c = {
                    loading: 0,
                    preload: null
                };
                if (i = a.querySelector(vu(n)))
                    c.loading = 5;
                else {
                    l = D({
                        rel: "stylesheet",
                        href: l,
                        "data-precedence": t
                    }, e),
                    (e = bt.get(n)) && Ic(l, e);
                    var f = i = a.createElement("link");
                    _l(f),
                    Rl(f, "link", l),
                    f._p = new Promise(function(v, x) {
                        f.onload = v,
                        f.onerror = x
                    }
                    ),
                    f.addEventListener("load", function() {
                        c.loading |= 1
                    }),
                    f.addEventListener("error", function() {
                        c.loading |= 2
                    }),
                    c.loading |= 4,
                    On(i, t, a)
                }
                i = {
                    type: "stylesheet",
                    instance: i,
                    count: 1,
                    state: c
                },
                u.set(n, i)
            }
        }
    }
    function Zm(l, t) {
        Wt.X(l, t);
        var e = Ea;
        if (e && l) {
            var a = Je(e).hoistableScripts
              , u = Aa(l)
              , n = a.get(u);
            n || (n = e.querySelector(yu(u)),
            n || (l = D({
                src: l,
                async: !0
            }, t),
            (t = bt.get(u)) && Pc(l, t),
            n = e.createElement("script"),
            _l(n),
            Rl(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function Vm(l, t) {
        Wt.M(l, t);
        var e = Ea;
        if (e && l) {
            var a = Je(e).hoistableScripts
              , u = Aa(l)
              , n = a.get(u);
            n || (n = e.querySelector(yu(u)),
            n || (l = D({
                src: l,
                async: !0,
                type: "module"
            }, t),
            (t = bt.get(u)) && Pc(l, t),
            n = e.createElement("script"),
            _l(n),
            Rl(n, "link", l),
            e.head.appendChild(n)),
            n = {
                type: "script",
                instance: n,
                count: 1,
                state: null
            },
            a.set(u, n))
        }
    }
    function td(l, t, e, a) {
        var u = (u = J.current) ? jn(u) : null;
        if (!u)
            throw Error(o(446));
        switch (l) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Na(e.href),
            e = Je(u).hoistableStyles,
            a = e.get(t),
            a || (a = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
                l = Na(e.href);
                var n = Je(u).hoistableStyles
                  , i = n.get(l);
                if (i || (u = u.ownerDocument || u,
                i = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                n.set(l, i),
                (n = u.querySelector(vu(l))) && !n._p && (i.instance = n,
                i.state.loading = 5),
                bt.has(l) || (e = {
                    rel: "preload",
                    as: "style",
                    href: e.href,
                    crossOrigin: e.crossOrigin,
                    integrity: e.integrity,
                    media: e.media,
                    hrefLang: e.hrefLang,
                    referrerPolicy: e.referrerPolicy
                },
                bt.set(l, e),
                n || wm(u, l, e, i.state))),
                t && a === null)
                    throw Error(o(528, ""));
                return i
            }
            if (t && a !== null)
                throw Error(o(529, ""));
            return null;
        case "script":
            return t = e.async,
            e = e.src,
            typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Aa(e),
            e = Je(u).hoistableScripts,
            a = e.get(t),
            a || (a = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            e.set(t, a)),
            a) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(o(444, l))
        }
    }
    function Na(l) {
        return 'href="' + ot(l) + '"'
    }
    function vu(l) {
        return 'link[rel="stylesheet"][' + l + "]"
    }
    function ed(l) {
        return D({}, l, {
            "data-precedence": l.precedence,
            precedence: null
        })
    }
    function wm(l, t, e, a) {
        l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"),
        a.preload = t,
        t.addEventListener("load", function() {
            return a.loading |= 1
        }),
        t.addEventListener("error", function() {
            return a.loading |= 2
        }),
        Rl(t, "link", e),
        _l(t),
        l.head.appendChild(t))
    }
    function Aa(l) {
        return '[src="' + ot(l) + '"]'
    }
    function yu(l) {
        return "script[async]" + l
    }
    function ad(l, t, e) {
        if (t.count++,
        t.instance === null)
            switch (t.type) {
            case "style":
                var a = l.querySelector('style[data-href~="' + ot(e.href) + '"]');
                if (a)
                    return t.instance = a,
                    _l(a),
                    a;
                var u = D({}, e, {
                    "data-href": e.href,
                    "data-precedence": e.precedence,
                    href: null,
                    precedence: null
                });
                return a = (l.ownerDocument || l).createElement("style"),
                _l(a),
                Rl(a, "style", u),
                On(a, e.precedence, l),
                t.instance = a;
            case "stylesheet":
                u = Na(e.href);
                var n = l.querySelector(vu(u));
                if (n)
                    return t.state.loading |= 4,
                    t.instance = n,
                    _l(n),
                    n;
                a = ed(e),
                (u = bt.get(u)) && Ic(a, u),
                n = (l.ownerDocument || l).createElement("link"),
                _l(n);
                var i = n;
                return i._p = new Promise(function(c, f) {
                    i.onload = c,
                    i.onerror = f
                }
                ),
                Rl(n, "link", a),
                t.state.loading |= 4,
                On(n, e.precedence, l),
                t.instance = n;
            case "script":
                return n = Aa(e.src),
                (u = l.querySelector(yu(n))) ? (t.instance = u,
                _l(u),
                u) : (a = e,
                (u = bt.get(n)) && (a = D({}, e),
                Pc(a, u)),
                l = l.ownerDocument || l,
                u = l.createElement("script"),
                _l(u),
                Rl(u, "link", a),
                l.head.appendChild(u),
                t.instance = u);
            case "void":
                return null;
            default:
                throw Error(o(443, t.type))
            }
        else
            t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance,
            t.state.loading |= 4,
            On(a, e.precedence, l));
        return t.instance
    }
    function On(l, t, e) {
        for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
            var c = a[i];
            if (c.dataset.precedence === t)
                n = c;
            else if (n !== u)
                break
        }
        n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e,
        t.insertBefore(l, t.firstChild))
    }
    function Ic(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.title == null && (l.title = t.title)
    }
    function Pc(l, t) {
        l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
        l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
        l.integrity == null && (l.integrity = t.integrity)
    }
    var Dn = null;
    function ud(l, t, e) {
        if (Dn === null) {
            var a = new Map
              , u = Dn = new Map;
            u.set(e, a)
        } else
            u = Dn,
            a = u.get(e),
            a || (a = new Map,
            u.set(e, a));
        if (a.has(l))
            return a;
        for (a.set(l, null),
        e = e.getElementsByTagName(l),
        u = 0; u < e.length; u++) {
            var n = e[u];
            if (!(n[Ca] || n[Dl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                var i = n.getAttribute(t) || "";
                i = l + i;
                var c = a.get(i);
                c ? c.push(n) : a.set(i, [n])
            }
        }
        return a
    }
    function nd(l, t, e) {
        l = l.ownerDocument || l,
        l.head.insertBefore(e, t === "title" ? l.querySelector("head > title") : null)
    }
    function Km(l, t, e) {
        if (e === 1 || t.itemProp != null)
            return !1;
        switch (l) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                break;
            return !0;
        case "link":
            if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                break;
            switch (t.rel) {
            case "stylesheet":
                return l = t.disabled,
                typeof t.precedence == "string" && l == null;
            default:
                return !0
            }
        case "script":
            if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                return !0
        }
        return !1
    }
    function id(l) {
        return !(l.type === "stylesheet" && (l.state.loading & 3) === 0)
    }
    function Jm(l, t, e, a) {
        if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
            if (e.instance === null) {
                var u = Na(a.href)
                  , n = t.querySelector(vu(u));
                if (n) {
                    t = n._p,
                    t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++,
                    l = Cn.bind(l),
                    t.then(l, l)),
                    e.state.loading |= 4,
                    e.instance = n,
                    _l(n);
                    return
                }
                n = t.ownerDocument || t,
                a = ed(a),
                (u = bt.get(u)) && Ic(a, u),
                n = n.createElement("link"),
                _l(n);
                var i = n;
                i._p = new Promise(function(c, f) {
                    i.onload = c,
                    i.onerror = f
                }
                ),
                Rl(n, "link", a),
                e.instance = n
            }
            l.stylesheets === null && (l.stylesheets = new Map),
            l.stylesheets.set(e, t),
            (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++,
            e = Cn.bind(l),
            t.addEventListener("load", e),
            t.addEventListener("error", e))
        }
    }
    var lf = 0;
    function $m(l, t) {
        return l.stylesheets && l.count === 0 && Hn(l, l.stylesheets),
        0 < l.count || 0 < l.imgCount ? function(e) {
            var a = setTimeout(function() {
                if (l.stylesheets && Hn(l, l.stylesheets),
                l.unsuspend) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, 6e4 + t);
            0 < l.imgBytes && lf === 0 && (lf = 62500 * _m());
            var u = setTimeout(function() {
                if (l.waitingForImages = !1,
                l.count === 0 && (l.stylesheets && Hn(l, l.stylesheets),
                l.unsuspend)) {
                    var n = l.unsuspend;
                    l.unsuspend = null,
                    n()
                }
            }, (l.imgBytes > lf ? 50 : 800) + t);
            return l.unsuspend = e,
            function() {
                l.unsuspend = null,
                clearTimeout(a),
                clearTimeout(u)
            }
        }
        : null
    }
    function Cn() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Hn(this, this.stylesheets);
            else if (this.unsuspend) {
                var l = this.unsuspend;
                this.unsuspend = null,
                l()
            }
        }
    }
    var Un = null;
    function Hn(l, t) {
        l.stylesheets = null,
        l.unsuspend !== null && (l.count++,
        Un = new Map,
        t.forEach(km, l),
        Un = null,
        Cn.call(l))
    }
    function km(l, t) {
        if (!(t.state.loading & 4)) {
            var e = Un.get(l);
            if (e)
                var a = e.get(null);
            else {
                e = new Map,
                Un.set(l, e);
                for (var u = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < u.length; n++) {
                    var i = u[n];
                    (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i),
                    a = i)
                }
                a && e.set(null, a)
            }
            u = t.instance,
            i = u.getAttribute("data-precedence"),
            n = e.get(i) || a,
            n === a && e.set(null, u),
            e.set(i, u),
            this.count++,
            a = Cn.bind(this),
            u.addEventListener("load", a),
            u.addEventListener("error", a),
            n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l,
            l.insertBefore(u, l.firstChild)),
            t.state.loading |= 4
        }
    }
    var gu = {
        $$typeof: ql,
        Provider: null,
        Consumer: null,
        _currentValue: G,
        _currentValue2: G,
        _threadCount: 0
    };
    function Wm(l, t, e, a, u, n, i, c, f) {
        this.tag = 1,
        this.containerInfo = l,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = kn(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = kn(0),
        this.hiddenUpdates = kn(null),
        this.identifierPrefix = a,
        this.onUncaughtError = u,
        this.onCaughtError = n,
        this.onRecoverableError = i,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = f,
        this.incompleteTransitions = new Map
    }
    function cd(l, t, e, a, u, n, i, c, f, v, x, z) {
        return l = new Wm(l,t,e,i,f,v,x,z,c),
        t = 1,
        n === !0 && (t |= 24),
        n = et(3, null, null, t),
        l.current = n,
        n.stateNode = l,
        t = Ui(),
        t.refCount++,
        l.pooledCache = t,
        t.refCount++,
        n.memoizedState = {
            element: a,
            isDehydrated: e,
            cache: t
        },
        Bi(n),
        l
    }
    function fd(l) {
        return l ? (l = aa,
        l) : aa
    }
    function sd(l, t, e, a, u, n) {
        u = fd(u),
        a.context === null ? a.context = u : a.pendingContext = u,
        a = ne(t),
        a.payload = {
            element: e
        },
        n = n === void 0 ? null : n,
        n !== null && (a.callback = n),
        e = ie(l, a, t),
        e !== null && (Wl(e, l, t),
        ka(e, l, t))
    }
    function od(l, t) {
        if (l = l.memoizedState,
        l !== null && l.dehydrated !== null) {
            var e = l.retryLane;
            l.retryLane = e !== 0 && e < t ? e : t
        }
    }
    function tf(l, t) {
        od(l, t),
        (l = l.alternate) && od(l, t)
    }
    function rd(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = je(l, 67108864);
            t !== null && Wl(t, l, 67108864),
            tf(l, 67108864)
        }
    }
    function dd(l) {
        if (l.tag === 13 || l.tag === 31) {
            var t = ct();
            t = Wn(t);
            var e = je(l, t);
            e !== null && Wl(e, l, t),
            tf(l, t)
        }
    }
    var Rn = !0;
    function Fm(l, t, e, a) {
        var u = S.T;
        S.T = null;
        var n = M.p;
        try {
            M.p = 2,
            ef(l, t, e, a)
        } finally {
            M.p = n,
            S.T = u
        }
    }
    function Im(l, t, e, a) {
        var u = S.T;
        S.T = null;
        var n = M.p;
        try {
            M.p = 8,
            ef(l, t, e, a)
        } finally {
            M.p = n,
            S.T = u
        }
    }
    function ef(l, t, e, a) {
        if (Rn) {
            var u = af(a);
            if (u === null)
                Lc(l, t, a, qn, e),
                hd(l, a);
            else if (lh(u, l, t, e, a))
                a.stopPropagation();
            else if (hd(l, a),
            t & 4 && -1 < Pm.indexOf(l)) {
                for (; u !== null; ) {
                    var n = Ke(u);
                    if (n !== null)
                        switch (n.tag) {
                        case 3:
                            if (n = n.stateNode,
                            n.current.memoizedState.isDehydrated) {
                                var i = Ee(n.pendingLanes);
                                if (i !== 0) {
                                    var c = n;
                                    for (c.pendingLanes |= 2,
                                    c.entangledLanes |= 2; i; ) {
                                        var f = 1 << 31 - lt(i);
                                        c.entanglements[1] |= f,
                                        i &= ~f
                                    }
                                    Dt(n),
                                    (el & 6) === 0 && (bn = Il() + 500,
                                    ru(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            c = je(n, 2),
                            c !== null && Wl(c, n, 2),
                            Sn(),
                            tf(n, 2)
                        }
                    if (n = af(a),
                    n === null && Lc(l, t, a, qn, e),
                    n === u)
                        break;
                    u = n
                }
                u !== null && a.stopPropagation()
            } else
                Lc(l, t, a, null, e)
        }
    }
    function af(l) {
        return l = ni(l),
        uf(l)
    }
    var qn = null;
    function uf(l) {
        if (qn = null,
        l = we(l),
        l !== null) {
            var t = U(l);
            if (t === null)
                l = null;
            else {
                var e = t.tag;
                if (e === 13) {
                    if (l = X(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 31) {
                    if (l = ol(t),
                    l !== null)
                        return l;
                    l = null
                } else if (e === 3) {
                    if (t.stateNode.current.memoizedState.isDehydrated)
                        return t.tag === 3 ? t.stateNode.containerInfo : null;
                    l = null
                } else
                    t !== l && (l = null)
            }
        }
        return qn = l,
        null
    }
    function md(l) {
        switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (Yd()) {
            case Sf:
                return 2;
            case pf:
                return 8;
            case Eu:
            case Gd:
                return 32;
            case zf:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var nf = !1
      , ge = null
      , be = null
      , xe = null
      , bu = new Map
      , xu = new Map
      , Se = []
      , Pm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function hd(l, t) {
        switch (l) {
        case "focusin":
        case "focusout":
            ge = null;
            break;
        case "dragenter":
        case "dragleave":
            be = null;
            break;
        case "mouseover":
        case "mouseout":
            xe = null;
            break;
        case "pointerover":
        case "pointerout":
            bu.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            xu.delete(t.pointerId)
        }
    }
    function Su(l, t, e, a, u, n) {
        return l === null || l.nativeEvent !== n ? (l = {
            blockedOn: t,
            domEventName: e,
            eventSystemFlags: a,
            nativeEvent: n,
            targetContainers: [u]
        },
        t !== null && (t = Ke(t),
        t !== null && rd(t)),
        l) : (l.eventSystemFlags |= a,
        t = l.targetContainers,
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l)
    }
    function lh(l, t, e, a, u) {
        switch (t) {
        case "focusin":
            return ge = Su(ge, l, t, e, a, u),
            !0;
        case "dragenter":
            return be = Su(be, l, t, e, a, u),
            !0;
        case "mouseover":
            return xe = Su(xe, l, t, e, a, u),
            !0;
        case "pointerover":
            var n = u.pointerId;
            return bu.set(n, Su(bu.get(n) || null, l, t, e, a, u)),
            !0;
        case "gotpointercapture":
            return n = u.pointerId,
            xu.set(n, Su(xu.get(n) || null, l, t, e, a, u)),
            !0
        }
        return !1
    }
    function vd(l) {
        var t = we(l.target);
        if (t !== null) {
            var e = U(t);
            if (e !== null) {
                if (t = e.tag,
                t === 13) {
                    if (t = X(e),
                    t !== null) {
                        l.blockedOn = t,
                        _f(l.priority, function() {
                            dd(e)
                        });
                        return
                    }
                } else if (t === 31) {
                    if (t = ol(e),
                    t !== null) {
                        l.blockedOn = t,
                        _f(l.priority, function() {
                            dd(e)
                        });
                        return
                    }
                } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
                    l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
                    return
                }
            }
        }
        l.blockedOn = null
    }
    function Bn(l) {
        if (l.blockedOn !== null)
            return !1;
        for (var t = l.targetContainers; 0 < t.length; ) {
            var e = af(l.nativeEvent);
            if (e === null) {
                e = l.nativeEvent;
                var a = new e.constructor(e.type,e);
                ui = a,
                e.target.dispatchEvent(a),
                ui = null
            } else
                return t = Ke(e),
                t !== null && rd(t),
                l.blockedOn = e,
                !1;
            t.shift()
        }
        return !0
    }
    function yd(l, t, e) {
        Bn(l) && e.delete(t)
    }
    function th() {
        nf = !1,
        ge !== null && Bn(ge) && (ge = null),
        be !== null && Bn(be) && (be = null),
        xe !== null && Bn(xe) && (xe = null),
        bu.forEach(yd),
        xu.forEach(yd)
    }
    function Yn(l, t) {
        l.blockedOn === t && (l.blockedOn = null,
        nf || (nf = !0,
        g.unstable_scheduleCallback(g.unstable_NormalPriority, th)))
    }
    var Gn = null;
    function gd(l) {
        Gn !== l && (Gn = l,
        g.unstable_scheduleCallback(g.unstable_NormalPriority, function() {
            Gn === l && (Gn = null);
            for (var t = 0; t < l.length; t += 3) {
                var e = l[t]
                  , a = l[t + 1]
                  , u = l[t + 2];
                if (typeof a != "function") {
                    if (uf(a || e) === null)
                        continue;
                    break
                }
                var n = Ke(e);
                n !== null && (l.splice(t, 3),
                t -= 3,
                ac(n, {
                    pending: !0,
                    data: u,
                    method: e.method,
                    action: a
                }, a, u))
            }
        }))
    }
    function Ma(l) {
        function t(f) {
            return Yn(f, l)
        }
        ge !== null && Yn(ge, l),
        be !== null && Yn(be, l),
        xe !== null && Yn(xe, l),
        bu.forEach(t),
        xu.forEach(t);
        for (var e = 0; e < Se.length; e++) {
            var a = Se[e];
            a.blockedOn === l && (a.blockedOn = null)
        }
        for (; 0 < Se.length && (e = Se[0],
        e.blockedOn === null); )
            vd(e),
            e.blockedOn === null && Se.shift();
        if (e = (l.ownerDocument || l).$$reactFormReplay,
        e != null)
            for (a = 0; a < e.length; a += 3) {
                var u = e[a]
                  , n = e[a + 1]
                  , i = u[Vl] || null;
                if (typeof n == "function")
                    i || gd(e);
                else if (i) {
                    var c = null;
                    if (n && n.hasAttribute("formAction")) {
                        if (u = n,
                        i = n[Vl] || null)
                            c = i.formAction;
                        else if (uf(u) !== null)
                            continue
                    } else
                        c = i.action;
                    typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3),
                    a -= 3),
                    gd(e)
                }
            }
    }
    function bd() {
        function l(n) {
            n.canIntercept && n.info === "react-transition" && n.intercept({
                handler: function() {
                    return new Promise(function(i) {
                        return u = i
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function t() {
            u !== null && (u(),
            u = null),
            a || setTimeout(e, 20)
        }
        function e() {
            if (!a && !navigation.transition) {
                var n = navigation.currentEntry;
                n && n.url != null && navigation.navigate(n.url, {
                    state: n.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var a = !1
              , u = null;
            return navigation.addEventListener("navigate", l),
            navigation.addEventListener("navigatesuccess", t),
            navigation.addEventListener("navigateerror", t),
            setTimeout(e, 100),
            function() {
                a = !0,
                navigation.removeEventListener("navigate", l),
                navigation.removeEventListener("navigatesuccess", t),
                navigation.removeEventListener("navigateerror", t),
                u !== null && (u(),
                u = null)
            }
        }
    }
    function cf(l) {
        this._internalRoot = l
    }
    Xn.prototype.render = cf.prototype.render = function(l) {
        var t = this._internalRoot;
        if (t === null)
            throw Error(o(409));
        var e = t.current
          , a = ct();
        sd(e, a, l, t, null, null)
    }
    ,
    Xn.prototype.unmount = cf.prototype.unmount = function() {
        var l = this._internalRoot;
        if (l !== null) {
            this._internalRoot = null;
            var t = l.containerInfo;
            sd(l.current, 2, null, l, null, null),
            Sn(),
            t[Ve] = null
        }
    }
    ;
    function Xn(l) {
        this._internalRoot = l
    }
    Xn.prototype.unstable_scheduleHydration = function(l) {
        if (l) {
            var t = Mf();
            l = {
                blockedOn: null,
                target: l,
                priority: t
            };
            for (var e = 0; e < Se.length && t !== 0 && t < Se[e].priority; e++)
                ;
            Se.splice(e, 0, l),
            e === 0 && vd(l)
        }
    }
    ;
    var xd = T.version;
    if (xd !== "19.2.8")
        throw Error(o(527, xd, "19.2.8"));
    M.findDOMNode = function(l) {
        var t = l._reactInternals;
        if (t === void 0)
            throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","),
            Error(o(268, l)));
        return l = E(t),
        l = l !== null ? R(l) : null,
        l = l === null ? null : l.stateNode,
        l
    }
    ;
    var eh = {
        bundleType: 0,
        version: "19.2.8",
        rendererPackageName: "react-dom",
        currentDispatcherRef: S,
        reconcilerVersion: "19.2.8"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Qn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Qn.isDisabled && Qn.supportsFiber)
            try {
                ja = Qn.inject(eh),
                Pl = Qn
            } catch {}
    }
    return zu.createRoot = function(l, t) {
        if (!q(l))
            throw Error(o(299));
        var e = !1
          , a = ""
          , u = Ao
          , n = Mo
          , i = _o;
        return t != null && (t.unstable_strictMode === !0 && (e = !0),
        t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
        t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
        t.onCaughtError !== void 0 && (n = t.onCaughtError),
        t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        t = cd(l, 1, !1, null, null, e, a, null, u, n, i, bd),
        l[Ve] = t.current,
        Qc(l),
        new cf(t)
    }
    ,
    zu.hydrateRoot = function(l, t, e) {
        if (!q(l))
            throw Error(o(299));
        var a = !1
          , u = ""
          , n = Ao
          , i = Mo
          , c = _o
          , f = null;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (u = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
        e.onCaughtError !== void 0 && (i = e.onCaughtError),
        e.onRecoverableError !== void 0 && (c = e.onRecoverableError),
        e.formState !== void 0 && (f = e.formState)),
        t = cd(l, 1, !0, t, e ?? null, a, u, f, n, i, c, bd),
        t.context = fd(null),
        e = t.current,
        a = ct(),
        a = Wn(a),
        u = ne(a),
        u.callback = null,
        ie(e, u, a),
        e = a,
        t.current.lanes = e,
        Da(t, e),
        Dt(t),
        l[Ve] = t.current,
        Qc(l),
        new Xn(t)
    }
    ,
    zu.version = "19.2.8",
    zu
}
var jd;
function dh() {
    if (jd)
        return of.exports;
    jd = 1;
    function g() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g)
            } catch (T) {
                console.error(T)
            }
    }
    return g(),
    of.exports = rh(),
    of.exports
}
var mh = dh();
const hh = {
    en: {
        groomName: "Ahmed",
        brideName: "Ganna",
        namesCombined: "Ahmed & Ganna",
        monogram: "A & G",
        exclusiveInvitation: "Exclusive Invitation",
        togetherWithFamilies: "Together with their families",
        dateDisplay: "Friday, November 6, 2026",
        timeDisplay: "5 PM EET",
        venueDisplay: "Open Air Terrace",
        venueCityCountry: "El Mokattam, Cairo, Egypt",
        romanticQuote: "Wait To Celebrate With You",
        quoteSubtext: "Two souls, one heart, a lifetime of love and togetherness.",
        openInvitation: "Open Invitation",
        clickToUnfold: "Click to unfold our story & details",
        selectLanguageTitle: "Select Invitation Language",
        selectLanguageSub: "Choose your preferred language to view the engagement details",
        arabicLabel: "العربية",
        englishLabel: "English",
        arabicDesc: "دعوة باللغة العربية مع كافة التفاصيل",
        englishDesc: "Full invitation in English",
        saveTheDate: "Save The Date",
        rsvpButton: "Confirm Attendance",
        momentsOfLove: "Moments of Love",
        momentsSubtext: "A glimpse into our journey together towards our big day",
        bigDayTitle: "The Big Day",
        bigDaySubtext: 'Counting down the moments until we say "I Do"',
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        addToCalendar: "Add to Google Calendar",
        downloadIcs: "Download .ics Calendar File",
        scheduleTitle: "Order of Events",
        scheduleSubtext: "What to expect on our special day",
        events: [{
            time: "5:30 PM",
            title: "Guest Arrival & Welcome Drinks",
            description: "Welcome reception with light refreshments, soft violin melodies, and guestbook signing.",
            iconName: "GlassWater"
        }, {
            time: "6:30 PM",
            title: "Engagement Ceremony & Ring Exchange",
            description: "The formal engagement ceremony celebrating Ahmed and Ganna’s promise to one another.",
            iconName: "Heart"
        }, {
            time: "8:00 PM",
            title: "Grand Dinner Banquet",
            description: "A multi-course gourmet banquet featuring European and Oriental culinary delights.",
            iconName: "Utensils"
        }, {
            time: "9:30 PM",
            title: "First Dance & Cake Cutting",
            description: "Cutting of the engagement cake followed by Ahmed & Ganna’s romantic first dance.",
            iconName: "Sparkles"
        }, {
            time: "10:30 PM",
            title: "Music & Celebration",
            description: "Dance, laughter, and unforgettable moments as we celebrate late into the night.",
            iconName: "Music"
        }],
        venueTitle: "Engagement Location",
        venueSubtext: "Join us at Open Air Terrace",
        venueName: "Open Air Terrace",
        venueHall: "Open Air Terrace",
        venueAddress: "El Mokattam",
        coordinates: "",
        openInGoogleMaps: "Open in Google Maps",
        dressCodeTitle: "Dress Code",
        dressCodeName: "Formal Elegance / Black Tie Optional",
        dressCodeDesc: "",
        rsvpTitle: "RSVP",
        rsvpMainHeader: "RSVP",
        rsvpSubtext: "Kindly respond before October 25, 2026",
        fullNameLabel: "Full Name",
        fullNamePlaceholder: "Enter your full name",
        attendanceLabel: "Will you be attending?",
        attendanceYes: "Joyfully Accepts",
        attendanceNo: "Regretfully Declines",
        guestCountLabel: "Number of Guests",
        guestCountPlaceholder: "1, 2, 3...",
        songRequestLabel: "Song Request for the Celebration",
        songRequestPlaceholder: "What song will get you on the dancefloor?",
        sendRsvp: "Send Confirmation",
        rsvpSuccessMsg: "Thank you! Your response has been received. We look forward to celebrating with you!",
        guestbookTitle: "Guestbook",
        guestbookMainHeader: "Guestbook Wishes",
        guestbookSubtext: "Leave a warm message and loving wish for the bride and groom",
        yourNameLabel: "Your Name",
        yourNamePlaceholder: "Enter your name",
        relationshipLabel: "Relationship",
        relationshipPlaceholder: "Family, Friend, Colleague...",
        wishMessageLabel: "Your Wish or Message",
        wishMessagePlaceholder: "Write a loving wish for Ahmed & Ganna...",
        sendWishBtn: "Send Wish",
        wishSuccessMsg: "✨ Thank you! Your wish has been added to the guestbook.",
        noWishesYet: "No wishes yet. Be the first to leave a message for Ahmed & Ganna!",
        deleteBtn: "Delete",
        footerCantWait: "We wait with joy to celebrate this momentous day with you.",
        backToTop: "Back to Top"
    },
    ar: {
        groomName: "أحمد",
        brideName: "جنة",
        namesCombined: "أحمد وجنة",
        monogram: "أ & ج",
        exclusiveInvitation: "دعوة خاصة لحضور حفل خطوبة",
        togetherWithFamilies: "يسرنا وعائلاتنا دعوتكم لتشاركونا فرحتنا",
        dateDisplay: "الجمعة، 6 نوفمبر 2026",
        timeDisplay: "5 مساءً",
        venueDisplay: "Open Air Terrace",
        venueCityCountry: "المقطم، القاهرة، مصر",
        romanticQuote: "في انتظار مشاركتكم فرحتنا",
        quoteSubtext: "قلبان يجمعهما الحب، ويبدآن معاً أجمل رحلة في الحياة.",
        openInvitation: "افتح الدعوة",
        clickToUnfold: "اضغط لاستكشاف التفاصيل ولحظات الفرح",
        selectLanguageTitle: "اختر لغة الدعوة",
        selectLanguageSub: "يرجى اختيار اللغة المفضلة لعرض تفاصيل حفل الخطوبة",
        arabicLabel: "العربية",
        englishLabel: "English",
        arabicDesc: "دعوة كاملة باللغة العربية مع كافة التفاصيل",
        englishDesc: "Full invitation in English",
        saveTheDate: "احفظ التاريخ",
        rsvpButton: "تأكيد الحضور",
        momentsOfLove: "لحظات الحب والسعادة",
        momentsSubtext: "لمحات نعتز بها من رحلتنا معاً نحو ليلة العمر",
        bigDayTitle: "يوم الخطوبة الموعود",
        bigDaySubtext: "نحتسب اللحظات والأيام حتى نلتقي بكم في ليلة العمر",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        addToCalendar: "إضافة إلى تقويم جوجل",
        downloadIcs: "تحميل ملف التقويم (.ics)",
        scheduleTitle: "برنامج حفل الخطوبة",
        scheduleSubtext: "فقرات ومواعيد الحفل المبارك",
        events: [{
            time: "5:30 مساءً",
            title: "استقبال الضيوف والمشروبات",
            description: "استقبال حار ومشروبات ترحيبية مع أنغام الكمان الهادئة والتوقيع في سجل التهنئة.",
            iconName: "GlassWater"
        }, {
            time: "6:30 مساءً",
            title: "مراسم الخطوبة وتبادل الدبل",
            description: "مراسم الخطوبة الرسمية وتبادل الدبل بين أحمد وجنة.",
            iconName: "Heart"
        }, {
            time: "8:00 مساءً",
            title: "مأدبة العشاء الفاخرة",
            description: "تقديم وجبة العشاء الشهية والمشروبات المتنوعة احتفالاً بالخطيبين.",
            iconName: "Utensils"
        }, {
            time: "9:30 مساءً",
            title: "الرقصة الأولى وتقطيع الكيك",
            description: "تقطيع كيكة الخطوبة وتليها الرقصة الأولى الشاعرية للخطيبين.",
            iconName: "Sparkles"
        }, {
            time: "10:30 مساءً",
            title: "الموسيقى والاحتفال",
            description: "أجواء مبهجة ورقص ولحظات لا تُنسى ونحن نحتفل سوياً حتى نهاية السهرة.",
            iconName: "Music"
        }],
        venueTitle: "موقع حفل الخطوبة",
        venueSubtext: "تشرفنا بحضوركم في Open Air Terrace",
        venueName: "Open Air Terrace",
        venueHall: "Open Air Terrace",
        venueAddress: "المقطم",
        coordinates: "",
        openInGoogleMaps: "فتح في خرائط جوجل",
        dressCodeTitle: "الزي المطلوب",
        dressCodeName: "زي رسمي أنيق (Formal Elegance)",
        dressCodeDesc: "",
        rsvpTitle: "تأكيد الحضور",
        rsvpMainHeader: "تأكيد الحضور",
        rsvpSubtext: "يرجى التكرم بتأكيد الحضور قبل 25 أكتوبر 2026",
        fullNameLabel: "الاسم بالكامل",
        fullNamePlaceholder: "أدخل اسمك بالكامل",
        attendanceLabel: "هل ستشرفنا بالحضور؟",
        attendanceYes: "نعم، يسعدني الحضور جداً",
        attendanceNo: "نعتذر عن الحضور",
        guestCountLabel: "عدد المرافقين",
        guestCountPlaceholder: "1، 2، 3...",
        songRequestLabel: "أغنية تحب سماعها في الحفل",
        songRequestPlaceholder: "ما هي الأغنية التي تحب أن ترقص عليها؟",
        sendRsvp: "إرسال تأكيد الحضور",
        rsvpSuccessMsg: "شكراً لك! تم استلام تأكيد حضورك بنجاح. ننتظر حضوركم بشغف للاحتفال معاً!",
        guestbookTitle: "سجل الزوار",
        guestbookMainHeader: "سجل أمنيات وتهاني الضيوف",
        guestbookSubtext: "اترك كلمة دافئة وأمنية طيبة للعروسين أحمد وجنة",
        yourNameLabel: "اسمك",
        yourNamePlaceholder: "أدخل اسمك",
        relationshipLabel: "صلة القرابة أو الصداقة",
        relationshipPlaceholder: "صديق، قريب، زميل...",
        wishMessageLabel: "أمنيتك أو تهنئتك",
        wishMessagePlaceholder: "اكتب تهنئة قلبية للعروسين أحمد وجنة...",
        sendWishBtn: "إرسال التهنئة",
        wishSuccessMsg: "✨ شكراً لك! تم إضافة تهنئتك بنجاح إلى السجل.",
        noWishesYet: "لا توجد تهاني بعد. كن أول من يترك كلمة دافئة لأحمد وجنة!",
        deleteBtn: "حذف",
        footerCantWait: "في انتظاركم لتشاركونا أجمل لحظات العمر!",
        backToTop: "العودة للأعلى"
    }
}
  , Cd = vl.createContext(void 0)
  , vh = ({children: g}) => {
    const [T,A] = vl.useState( () => {
        const X = localStorage.getItem("ahmed_ganna_lang");
        return X === "ar" || X === "en" ? X : "en"
    }
    )
      , o = X => {
        A(X),
        localStorage.setItem("ahmed_ganna_lang", X)
    }
      , q = T === "ar" ? "rtl" : "ltr";
    vl.useEffect( () => {
        document.documentElement.dir = q,
        document.documentElement.lang = T
    }
    , [q, T]);
    const U = {
        lang: T,
        setLang: o,
        t: hh[T],
        dir: q
    };
    return s.jsx(Cd.Provider, {
        value: U,
        children: g
    })
}
  , Le = () => {
    const g = vl.useContext(Cd);
    if (!g)
        throw new Error("useLanguage must be used within a LanguageProvider");
    return g
}
  , yh = ({active: g=!0}) => {
    const T = vl.useRef(null);
    return vl.useEffect( () => {
        if (!g)
            return;
        const A = T.current;
        if (!A)
            return;
        const o = A.getContext("2d");
        if (!o)
            return;
        let q, U = A.width = window.innerWidth, X = A.height = window.innerHeight;
        const ol = () => {
            A && (U = A.width = window.innerWidth,
            X = A.height = window.innerHeight)
        }
        ;
        window.addEventListener("resize", ol);
        const j = ["rgba(245, 235, 224, 0.65)", "rgba(230, 202, 101, 0.45)", "rgba(250, 240, 230, 0.70)", "rgba(220, 190, 150, 0.40)"]
          , E = U < 640 ? 18 : 32
          , R = Array.from({
            length: E
        }, () => ({
            x: Math.random() * U,
            y: Math.random() * X - X,
            size: Math.random() * 8 + 6,
            speedY: Math.random() * .8 + .4,
            speedX: Math.random() * .5 - .25,
            angle: Math.random() * Math.PI * 2,
            angularSpeed: (Math.random() - .5) * .02,
            opacity: Math.random() * .5 + .3,
            color: j[Math.floor(Math.random() * j.length)]
        }))
          , D = Q => {
            o.save(),
            o.translate(Q.x, Q.y),
            o.rotate(Q.angle),
            o.fillStyle = Q.color,
            o.beginPath(),
            o.moveTo(0, 0),
            o.bezierCurveTo(-Q.size / 2, -Q.size, -Q.size, Q.size / 2, 0, Q.size * 1.5),
            o.bezierCurveTo(Q.size, Q.size / 2, Q.size / 2, -Q.size, 0, 0),
            o.fill(),
            o.restore()
        }
          , K = () => {
            o.clearRect(0, 0, U, X),
            R.forEach(Q => {
                Q.y += Q.speedY,
                Q.x += Math.sin(Q.y * .01) * .6 + Q.speedX,
                Q.angle += Q.angularSpeed,
                Q.y > X + 20 && (Q.y = -20,
                Q.x = Math.random() * U),
                D(Q)
            }
            ),
            q = requestAnimationFrame(K)
        }
        ;
        return K(),
        () => {
            window.removeEventListener("resize", ol),
            cancelAnimationFrame(q)
        }
    }
    , [g]),
    g ? s.jsx("canvas", {
        ref: T,
        className: "fixed inset-0 pointer-events-none z-0 opacity-80"
    }) : null
}
;
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gh = g => g.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , bh = g => g.replace(/^([A-Z])|[\s-_]+(\w)/g, (T, A, o) => o ? o.toUpperCase() : A.toLowerCase())
  , Od = g => {
    const T = bh(g);
    return T.charAt(0).toUpperCase() + T.slice(1)
}
  , Ud = (...g) => g.filter( (T, A, o) => !!T && T.trim() !== "" && o.indexOf(T) === A).join(" ").trim()
  , xh = g => {
    for (const T in g)
        if (T.startsWith("aria-") || T === "role" || T === "title")
            return !0
}
;
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Sh = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ph = vl.forwardRef( ({color: g="currentColor", size: T=24, strokeWidth: A=2, absoluteStrokeWidth: o, className: q="", children: U, iconNode: X, ...ol}, j) => vl.createElement("svg", {
    ref: j,
    ...Sh,
    width: T,
    height: T,
    stroke: g,
    strokeWidth: o ? Number(A) * 24 / Number(T) : A,
    className: Ud("lucide", q),
    ...!U && !xh(ol) && {
        "aria-hidden": "true"
    },
    ...ol
}, [...X.map( ([E,R]) => vl.createElement(E, R)), ...Array.isArray(U) ? U : [U]]));
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fl = (g, T) => {
    const A = vl.forwardRef( ({className: o, ...q}, U) => vl.createElement(ph, {
        ref: U,
        iconNode: T,
        className: Ud(`lucide-${gh(Od(g))}`, `lucide-${g}`, o),
        ...q
    }));
    return A.displayName = Od(g),
    A
}
;
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zh = [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]
  , Th = Fl("arrow-up", zh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Eh = [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]
  , Nh = Fl("calendar", Eh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ah = [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]
  , hf = Fl("check", Ah);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mh = [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]
  , _h = Fl("copy", Mh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jh = [["path", {
    d: "M12 15V3",
    key: "m9g1x1"
}], ["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["path", {
    d: "m7 10 5 5 5-5",
    key: "brsn70"
}]]
  , Oh = Fl("download", jh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dh = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , Ch = Fl("external-link", Dh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uh = [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
    key: "13o1zl"
}], ["path", {
    d: "M2 12h20",
    key: "9i4pu4"
}]]
  , Hd = Fl("globe", Uh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hh = [["path", {
    d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
    key: "mvr1a0"
}]]
  , Ln = Fl("heart", Hh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = [["path", {
    d: "M9 18V5l12-2v13",
    key: "1jmyc2"
}], ["circle", {
    cx: "6",
    cy: "18",
    r: "3",
    key: "fqmcym"
}], ["circle", {
    cx: "18",
    cy: "16",
    r: "3",
    key: "1hluhg"
}]]
  , qh = Fl("music", Rh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bh = [["polygon", {
    points: "3 11 22 2 13 21 11 13 3 11",
    key: "1ltx0t"
}]]
  , Yh = Fl("navigation", Bh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gh = [["rect", {
    x: "14",
    y: "3",
    width: "5",
    height: "18",
    rx: "1",
    key: "kaeet6"
}], ["rect", {
    x: "5",
    y: "3",
    width: "5",
    height: "18",
    rx: "1",
    key: "1wsw3u"
}]]
  , Xh = Fl("pause", Gh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qh = [["path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
    key: "1s2grr"
}], ["path", {
    d: "M20 2v4",
    key: "1rf3ol"
}], ["path", {
    d: "M22 4h-4",
    key: "gwowj6"
}], ["circle", {
    cx: "4",
    cy: "20",
    r: "2",
    key: "6kqj1y"
}]]
  , Lh = Fl("sparkles", Qh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zh = [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["path", {
    d: "M16 9a5 5 0 0 1 0 6",
    key: "1q6k2b"
}], ["path", {
    d: "M19.364 18.364a9 9 0 0 0 0-12.728",
    key: "ijwkga"
}]]
  , Vh = Fl("volume-2", Zh);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wh = [["path", {
    d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
    key: "uqj9uw"
}], ["line", {
    x1: "22",
    x2: "16",
    y1: "9",
    y2: "15",
    key: "1ewh16"
}], ["line", {
    x1: "16",
    x2: "22",
    y1: "9",
    y2: "15",
    key: "5ykzw1"
}]]
  , Kh = Fl("volume-x", wh)
  , Jh = "./assets/13_-_Ady_Elly_Fe_Baly.mp3"
  , $h = ({autoStart: g=!1}) => {
    const [T,A] = vl.useState(!1)
      , [o,q] = vl.useState(!1)
      , U = vl.useRef(null);
    vl.useEffect( () => {
        if (!g || !U.current)
            return;
        U.current.play().then( () => {
            A(!0)
        }
        ).catch( () => {
            console.log("Autoplay blocked by browser")
        }
        )
    }
    , [g]);
    const X = async () => {
        if (U.current)
            if (T)
                U.current.pause(),
                A(!1);
            else
                try {
                    await U.current.play(),
                    A(!0)
                } catch (j) {
                    console.error("Audio playback failed:", j)
                }
    }
      , ol = j => {
        if (j.stopPropagation(),
        !U.current)
            return;
        const E = !o;
        U.current.muted = E,
        q(E)
    }
    ;
    return s.jsxs(s.Fragment, {
        children: [s.jsx("audio", {
            ref: U,
            src: Jh,
            loop: !0,
            preload: "auto",
            onPlay: () => A(!0),
            onPause: () => A(!1)
        }), s.jsxs("div", {
            className: `fixed bottom-5 right-5 z-50 group flex items-center space-x-1 px-2 py-2 rounded-full bg-white/95 backdrop-blur-md gold-border luxury-card-shadow text-[#3d2b1f] transition-all duration-300 hover:scale-105 ${T ? "ring-2 ring-[#c5a059]/40" : ""}`,
            children: [s.jsx("button", {
                type: "button",
                onClick: X,
                title: T ? "Pause Song" : "Play Song",
                className: "flex items-center justify-center focus:outline-none",
                children: s.jsx("div", {
                    className: `p-1 rounded-full transition-colors ${T ? "bg-[#c5a059] text-white animate-pulse" : "bg-[#e6dfd3] text-[#5c4335]"}`,
                    children: T ? s.jsx(Xh, {
                        className: "w-3.5 h-3.5 fill-current"
                    }) : s.jsx(qh, {
                        className: "w-3.5 h-3.5"
                    })
                })
            }), T && s.jsx("button", {
                type: "button",
                onClick: ol,
                title: o ? "Unmute" : "Mute",
                className: "flex items-center justify-center p-1 hover:text-[#c5a059] text-[#5c4335] transition-colors focus:outline-none border-l border-[#c5a059]/20",
                children: o ? s.jsx(Kh, {
                    className: "w-3.5 h-3.5"
                }) : s.jsx(Vh, {
                    className: "w-3.5 h-3.5"
                })
            })]
        })]
    })
}
  , yf = ({className: g="my-8"}) => s.jsxs("div", {
    className: `flex items-center justify-center space-x-3 opacity-90 ${g}`,
    children: [s.jsx("div", {
        className: "h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#c5a059]/60 to-[#c5a059]"
    }), s.jsxs("svg", {
        className: "w-6 h-6 text-[#c5a059]",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1",
        children: [s.jsx("path", {
            d: "M12 21L10.5 19.5C5.4 14.9 2 11.8 2 8C2 4.9 4.4 2.5 7.5 2.5C9.2 2.5 10.9 3.3 12 4.5C13.1 3.3 14.8 2.5 16.5 2.5C19.6 2.5 22 4.9 22 8C22 11.8 18.6 14.9 13.5 19.5L12 21Z",
            fill: "rgba(197, 160, 89, 0.15)"
        }), s.jsx("path", {
            d: "M12 4V20M4 12H20",
            stroke: "currentColor",
            strokeWidth: "0.5",
            strokeDasharray: "1 2"
        })]
    }), s.jsx("div", {
        className: "h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#c5a059]/60 to-[#c5a059]"
    })]
})
  , gf = ({size: g=64, className: T=""}) => s.jsxs("svg", {
    width: g,
    height: g,
    viewBox: "0 0 100 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: `text-[#c5a059] ${T}`,
    children: [s.jsx("circle", {
        cx: "50",
        cy: "50",
        r: "44",
        stroke: "currentColor",
        strokeWidth: "1",
        strokeDasharray: "2 4"
    }), s.jsx("circle", {
        cx: "50",
        cy: "50",
        r: "38",
        stroke: "currentColor",
        strokeWidth: "0.75"
    }), s.jsx("path", {
        d: "M50 34C46 24 34 22 28 30C22 38 26 48 38 58C42 61 46 64 50 68C54 64 58 61 62 58C74 48 78 38 72 30C66 22 54 24 50 34Z",
        fill: "currentColor",
        opacity: "0.3"
    })]
})
  , kh = () => s.jsxs(s.Fragment, {
    children: [s.jsxs("svg", {
        className: "absolute top-2 left-2 w-10 h-10 text-[#c5a059]/60 pointer-events-none",
        viewBox: "0 0 40 40",
        fill: "none",
        children: [s.jsx("path", {
            d: "M0 40V12C0 5.37258 5.37258 0 12 0H40",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), s.jsx("circle", {
            cx: "6",
            cy: "6",
            r: "2",
            fill: "currentColor"
        })]
    }), s.jsxs("svg", {
        className: "absolute top-2 right-2 w-10 h-10 text-[#c5a059]/60 pointer-events-none",
        viewBox: "0 0 40 40",
        fill: "none",
        children: [s.jsx("path", {
            d: "M40 40V12C40 5.37258 34.6274 0 28 0H0",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), s.jsx("circle", {
            cx: "34",
            cy: "6",
            r: "2",
            fill: "currentColor"
        })]
    }), s.jsxs("svg", {
        className: "absolute bottom-2 left-2 w-10 h-10 text-[#c5a059]/60 pointer-events-none",
        viewBox: "0 0 40 40",
        fill: "none",
        children: [s.jsx("path", {
            d: "M0 0V28C0 34.6274 5.37258 40 12 40H40",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), s.jsx("circle", {
            cx: "6",
            cy: "34",
            r: "2",
            fill: "currentColor"
        })]
    }), s.jsxs("svg", {
        className: "absolute bottom-2 right-2 w-10 h-10 text-[#c5a059]/60 pointer-events-none",
        viewBox: "0 0 40 40",
        fill: "none",
        children: [s.jsx("path", {
            d: "M40 0V28C40 34.6274 34.6274 40 28 40H0",
            stroke: "currentColor",
            strokeWidth: "1.5"
        }), s.jsx("circle", {
            cx: "34",
            cy: "34",
            r: "2",
            fill: "currentColor"
        })]
    })]
})
  , Wh = ({onOpen: g}) => {
    const {lang: T, setLang: A, t: o} = Le()
      , [q,U] = vl.useState("envelope")
      , [X,ol] = vl.useState(T)
      , [j,E] = vl.useState(!1)
      , [R,D] = vl.useState(!1)
      , K = () => {
        U("language")
    }
      , Q = gl => {
        ol(gl),
        A(gl),
        E(!0),
        g(),
        setTimeout( () => {
            D(!0)
        }
        , 1e3)
    }
    ;
    return R ? null : s.jsxs("div", {
        className: `fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3d2b1f]/85 backdrop-blur-md transition-all duration-1000 ${j ? "opacity-0 pointer-events-none scale-105" : "opacity-100"}`,
        children: [s.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.25)_0%,transparent_70%)]"
        }), s.jsxs("div", {
            className: "relative w-full max-w-lg mx-auto bg-white rounded-2xl gold-border-glow p-6 sm:p-10 text-center luxury-card-shadow overflow-hidden transform transition-all duration-500",
            children: [s.jsx("div", {
                className: "absolute inset-2.5 sm:inset-3 border border-[#c5a059]/30 rounded-xl pointer-events-none"
            }), s.jsx("div", {
                className: "flex justify-center mb-3 sm:mb-4",
                children: s.jsx(gf, {
                    size: 52,
                    className: "animate-float-slow text-[#c5a059]"
                })
            }), q === "envelope" ? s.jsxs(s.Fragment, {
                children: [s.jsx("p", {
                    className: `text-xs text-[#c5a059] mb-2 ${T === "ar" ? "font-amiri font-bold text-sm" : "font-cinzel tracking-[0.3em] uppercase"}`,
                    children: o.exclusiveInvitation
                }), s.jsxs("div", {
                    className: "my-3 flex flex-col items-center justify-center",
                    children: [s.jsx("h1", {
                        className: `text-4xl sm:text-5xl text-[#c5a059] leading-tight drop-shadow-sm ${T === "ar" ? "font-aref font-bold" : "font-pinyon"}`,
                        children: o.groomName
                    }), s.jsx("div", {
                        className: `text-base sm:text-lg text-[#c5a059] -my-1 ${T === "ar" ? "font-aref font-bold" : "font-cormorant italic text-[#5c4335] my-0.5"}`,
                        children: T === "ar" ? "وَ" : "&"
                    }), s.jsx("h1", {
                        className: `text-4xl sm:text-5xl text-[#c5a059] leading-tight drop-shadow-sm ${T === "ar" ? "font-aref font-bold" : "font-pinyon"}`,
                        children: o.brideName
                    })]
                }), s.jsxs("p", {
                    className: `text-lg sm:text-xl text-[#5c4335] mb-6 ${T === "ar" ? "font-amiri leading-relaxed" : "font-cormorant italic"}`,
                    children: ['"', o.togetherWithFamilies, '"']
                }), s.jsxs("div", {
                    className: "my-6 py-4 border-y border-[#c5a059]/20 flex flex-col items-center justify-center space-y-1",
                    children: [s.jsx("span", {
                        className: `text-[#3d2b1f] ${T === "ar" ? "font-amiri font-bold text-lg" : "font-cinzel text-sm tracking-widest"}`,
                        children: [o.dateDisplay, " • ", o.timeDisplay]
                    })]
                }), s.jsxs("div", {
                    className: "mt-8 flex flex-col items-center justify-center space-y-4",
                    children: [s.jsxs("button", {
                        onClick: K,
                        className: "group relative inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3d2b1f] hover:bg-[#c5a059] text-[#f5f2ed] font-montserrat text-xs tracking-[0.25em] uppercase font-medium shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 cursor-pointer",
                        children: [s.jsx(Lh, {
                            className: "w-4 h-4 mr-2.5 text-[#f5f2ed] animate-spin-slow"
                        }), s.jsx("span", {
                            children: o.openInvitation
                        }), s.jsx(Ln, {
                            className: "w-3.5 h-3.5 ml-2.5 text-[#f5f2ed] fill-current"
                        }), s.jsx("span", {
                            className: "absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        })]
                    }), s.jsx("p", {
                        className: "font-cormorant text-sm text-[#5c4335]/70 italic",
                        children: o.clickToUnfold
                    })]
                })]
            }) : s.jsxs("div", {
                className: "space-y-4 sm:space-y-5 animate-fadeIn",
                children: [s.jsxs("div", {
                    className: "flex flex-col items-center text-center",
                    children: [s.jsx("div", {
                        className: "inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f5f2ed] border border-[#c5a059]/40 text-[#c5a059] mb-2 shadow-xs",
                        children: s.jsx(Hd, {
                            className: "w-4 h-4"
                        })
                    }), s.jsx("h2", {
                        className: "font-amiri font-bold text-2xl sm:text-3xl text-[#3d2b1f] leading-tight",
                        children: "اختر لغة الدعوة"
                    }), s.jsx("h3", {
                        className: "font-cormorant font-semibold text-base sm:text-lg text-[#c5a059] tracking-widest uppercase mt-0.5",
                        children: "Select Your Language"
                    }), s.jsxs("div", {
                        className: "mt-2 space-y-0.5 text-center max-w-md mx-auto",
                        children: [s.jsx("p", {
                            className: "font-amiri text-xs sm:text-sm text-[#5c4335] leading-relaxed",
                            children: "يرجى اختيار اللغة المفضلة لعرض تفاصيل حفل الخطوبة"
                        }), s.jsx("p", {
                            className: "font-cormorant text-xs sm:text-sm text-[#5c4335]/80 italic",
                            children: "Please choose your preferred language to view the engagement invitation"
                        })]
                    })]
                }), s.jsx(yf, {
                    className: "my-2.5 opacity-75"
                }), s.jsxs("div", {
                    className: "grid grid-cols-1 gap-3.5 pt-1",
                    children: [s.jsxs("button", {
                        type: "button",
                        onClick: () => Q("ar"),
                        className: `group relative p-4 rounded-xl border transition-all duration-300 flex items-center justify-between text-right cursor-pointer ${X === "ar" ? "bg-[#3d2b1f] text-[#f5f2ed] border-[#c5a059] shadow-lg scale-[1.01]" : "bg-[#f5f2ed] hover:bg-[#3d2b1f] text-[#3d2b1f] hover:text-[#f5f2ed] border-[#c5a059]/40 hover:border-[#c5a059] shadow-xs hover:shadow-md"}`,
                        children: [s.jsxs("div", {
                            className: "flex items-center space-x-3 space-x-reverse",
                            children: [s.jsx("span", {
                                className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-xs border border-[#c5a059]/30 shrink-0 shadow-2xs",
                                children: "🇪🇬"
                            }), s.jsxs("div", {
                                children: [s.jsxs("div", {
                                    className: "flex items-baseline space-x-2 space-x-reverse",
                                    children: [s.jsx("h4", {
                                        className: "font-amiri font-bold text-xl sm:text-2xl leading-none",
                                        children: "العربية"
                                    }), s.jsx("span", {
                                        className: "text-[11px] font-cormorant uppercase tracking-wider opacity-70",
                                        children: "(Arabic)"
                                    })]
                                }), s.jsx("p", {
                                    className: "font-amiri text-xs opacity-80 mt-1 leading-snug",
                                    children: "دعوة كاملة باللغة العربية وبخطوط عربية أصيلة"
                                })]
                            })]
                        }), s.jsx("div", {
                            className: `w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${X === "ar" ? "border-[#c5a059] bg-[#c5a059] text-[#3d2b1f]" : "border-[#c5a059]/60 group-hover:border-[#c5a059] text-transparent group-hover:text-[#c5a059]"}`,
                            children: s.jsx(hf, {
                                className: "w-3.5 h-3.5 stroke-[2.5]"
                            })
                        })]
                    }), s.jsxs("button", {
                        type: "button",
                        onClick: () => Q("en"),
                        className: `group relative p-4 rounded-xl border transition-all duration-300 flex items-center justify-between text-left cursor-pointer ${X === "en" ? "bg-[#3d2b1f] text-[#f5f2ed] border-[#c5a059] shadow-lg scale-[1.01]" : "bg-[#f5f2ed] hover:bg-[#3d2b1f] text-[#3d2b1f] hover:text-[#f5f2ed] border-[#c5a059]/40 hover:border-[#c5a059] shadow-xs hover:shadow-md"}`,
                        children: [s.jsxs("div", {
                            className: "flex items-center space-x-3",
                            children: [s.jsx("span", {
                                className: "inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/90 text-xs border border-[#c5a059]/30 shrink-0 shadow-2xs",
                                children: "🇬🇧"
                            }), s.jsxs("div", {
                                children: [s.jsx("div", {
                                    className: "flex items-baseline space-x-2",
                                    children: s.jsx("h4", {
                                        className: "font-cormorant font-bold text-xl sm:text-2xl leading-none",
                                        children: "English"
                                    })
                                }), s.jsx("p", {
                                    className: "font-cormorant text-xs opacity-80 mt-1 leading-snug italic",
                                    children: "Full invitation experience in English"
                                })]
                            })]
                        }), s.jsx("div", {
                            className: `w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${X === "en" ? "border-[#c5a059] bg-[#c5a059] text-[#3d2b1f]" : "border-[#c5a059]/60 group-hover:border-[#c5a059] text-transparent group-hover:text-[#c5a059]"}`,
                            children: s.jsx(hf, {
                                className: "w-3.5 h-3.5 stroke-[2.5]"
                            })
                        })]
                    })]
                })]
            })]
        })]
    })
}
  , Fh = () => {
    const {lang: g, setLang: T} = Le()
      , A = () => {
        T(g === "ar" ? "en" : "ar")
    }
    ;
    return s.jsx("div", {
        className: "fixed top-4 left-4 z-40",
        children: s.jsxs("button", {
            onClick: A,
            title: g === "ar" ? "Switch to English" : "التحويل للعربية",
            className: "group flex items-center space-x-2 space-x-reverse px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-md gold-border-glow text-[#3d2b1f] hover:text-[#c5a059] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 cursor-pointer text-xs font-montserrat font-medium",
            children: [s.jsx(Hd, {
                className: "w-4 h-4 text-[#c5a059] group-hover:rotate-45 transition-transform duration-300"
            }), s.jsx("span", {
                className: g === "ar" ? "font-cairo font-bold text-sm" : "font-montserrat font-bold",
                children: g === "ar" ? "English" : "العربية"
            })]
        })
    })
}
  , Ih = () => {
    const {lang: g, t: T} = Le();
    return s.jsxs("section", {
        className: "relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 pt-16 pb-12 overflow-hidden",
        children: [s.jsx("div", {
            className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.12)_0%,transparent_70%)] pointer-events-none"
        }), s.jsxs("div", {
            className: "relative z-10 w-full max-w-xl mx-auto flex flex-col items-center",
            children: [s.jsxs("div", {
                className: "relative mb-6",
                children: [s.jsx(gf, {
                    size: 88,
                    className: "animate-float-slow text-[#c5a059]"
                }), s.jsx("span", {
                    className: `absolute inset-0 flex items-center justify-center text-[#c5a059] ${g === "ar" ? "font-aref text-lg font-bold" : "font-cinzel text-xl font-bold tracking-widest"}`,
                    children: T.monogram
                })]
            }), s.jsx("p", {
                className: `text-xs sm:text-sm text-[#5c4335] mb-3 ${g === "ar" ? "font-amiri font-bold text-sm sm:text-base text-[#5c4335]" : "font-cinzel tracking-[0.35em] uppercase"}`,
                dir: g === "ar" ? "rtl" : void 0,
                children: T.exclusiveInvitation
            }), s.jsxs("p", {
                className: `text-lg sm:text-xl text-[#3d2b1f]/90 max-w-md mx-auto ${g === "ar" ? "font-amiri text-xl sm:text-2xl font-normal leading-relaxed" : "font-cormorant italic text-lg sm:text-xl"}`,
                dir: g === "ar" ? "rtl" : void 0,
                children: ['"', T.togetherWithFamilies, '"']
            }), s.jsxs("div", {
                className: "my-5 py-1 flex flex-col items-center justify-center",
                dir: g === "ar" ? "rtl" : void 0,
                children: [s.jsx("h1", {
                    className: `text-6xl sm:text-7xl md:text-8xl text-[#c5a059] leading-tight drop-shadow-sm ${g === "ar" ? "font-aref font-bold py-0.5" : "font-pinyon"}`,
                    children: T.groomName
                }), s.jsx("div", {
                    className: `text-xl sm:text-2xl text-[#c5a059] ${g === "ar" ? "font-aref font-bold -my-2 sm:-my-3" : "font-cormorant italic text-2xl sm:text-3xl text-[#5c4335] my-1"}`,
                    children: g === "ar" ? "وَ" : "&"
                }), s.jsx("h1", {
                    className: `text-6xl sm:text-7xl md:text-8xl text-[#c5a059] leading-tight drop-shadow-sm ${g === "ar" ? "font-aref font-bold py-0.5" : "font-pinyon"}`,
                    children: T.brideName
                })]
            }), s.jsx(yf, {
                className: "my-4"
            }), s.jsxs("div", {
                className: "space-y-2 mt-2",
                dir: g === "ar" ? "rtl" : void 0,
                children: [s.jsx("p", {
                    className: `text-[#3d2b1f] ${g === "ar" ? "font-amiri font-bold text-xl sm:text-2xl leading-snug" : "font-cinzel text-base sm:text-lg font-semibold tracking-[0.2em] uppercase"}`,
                    children: T.dateDisplay
                }), s.jsx("p", {
                    className: `text-[#c5a059] ${g === "ar" ? "font-amiri font-bold text-lg sm:text-xl" : "font-cinzel text-sm sm:text-base font-semibold tracking-[0.2em] uppercase"}`,
                    children: T.timeDisplay
                }), s.jsxs("p", {
                    className: `text-[#5c4335] ${g === "ar" ? "font-amiri text-sm sm:text-base" : "font-montserrat text-xs tracking-[0.25em] uppercase"}`,
                    children: [T.venueHall, " • ", T.venueAddress]
                })]
            }), s.jsxs("p", {
                className: `mt-8 text-xl sm:text-2xl text-[#c5a059]/90 ${g === "ar" ? "font-amiri font-bold text-2xl sm:text-3xl" : "font-cormorant italic"}`,
                dir: g === "ar" ? "rtl" : void 0,
                children: ['"', T.romanticQuote, '"']
            }), s.jsx("p", {
                className: `mt-1 text-sm text-[#5c4335]/80 ${g === "ar" ? "font-amiri text-base" : "font-cormorant"}`,
                dir: g === "ar" ? "rtl" : void 0,
                children: T.quoteSubtext
            })]
        })]
    })
}
  , Ph = "couple_childhood_photo_1786109308541-C5SXRo78.jpeg"
  , l1 = () => {
    const [g,T] = vl.useState(!1)
      , {lang: A, t: o} = Le();
    return s.jsx("section", {
        className: "py-16 px-4 max-w-3xl mx-auto text-center",
        children: s.jsxs("div", {
            className: "relative bg-white rounded-2xl gold-border-glow p-6 sm:p-10 luxury-card-shadow overflow-hidden",
            children: [s.jsx(kh, {}), s.jsxs("div", {
                className: "mb-6",
                children: [s.jsx("p", {
                    className: `text-xs uppercase text-[#c5a059] mb-1 ${A === "ar" ? "font-cairo font-semibold tracking-wider" : "font-cinzel tracking-[0.3em]"}`,
                    children: o.momentsOfLove
                }), s.jsx("h2", {
                    className: `text-4xl sm:text-5xl text-[#3d2b1f] ${A === "ar" ? "font-amiri font-bold" : "font-pinyon"}`,
                    children: A === "ar" ? "رحلة العمر معاً" : "Our Childhood"
                })]
            }), s.jsx("div", {
                className: "relative mx-auto max-w-sm sm:max-w-md my-6 p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-[#f5f2ed] via-[#faf7f2] to-[#e6dfd3] gold-border shadow-md",
                children: s.jsxs("div", {
                    className: "relative rounded-xl overflow-hidden bg-[#f5f2ed] flex items-center justify-center p-1 border border-[#c5a059]/30",
                    children: [g ? s.jsxs("div", {
                        className: "w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-white via-[#f5f2ed] to-[#e6dfd3]/50",
                        children: [s.jsx("div", {
                            className: "w-20 h-20 rounded-full border-2 border-dashed border-[#c5a059]/60 flex items-center justify-center mb-4 text-[#c5a059] animate-pulse-glow",
                            children: s.jsx(Ln, {
                                className: "w-8 h-8 fill-current"
                            })
                        }), s.jsx("h3", {
                            className: `text-3xl text-[#c5a059] ${A === "ar" ? "font-amiri font-bold" : "font-pinyon"}`,
                            children: o.namesCombined
                        }), s.jsxs("p", {
                            className: `text-sm italic text-[#5c4335] mt-2 ${A === "ar" ? "font-amiri" : "font-cormorant"}`,
                            children: ['"', o.quoteSubtext, '"']
                        })]
                    }) : s.jsx("img", {
                        src: Ph,
                        alt: `${o.namesCombined} Photo`,
                        onError: () => T(!0),
                        className: "w-full h-auto max-h-[480px] object-contain rounded-lg shadow-sm",
                        referrerPolicy: "no-referrer"
                    }), s.jsx("div", {
                        className: "absolute inset-0 ring-1 ring-inset ring-[#c5a059]/30 rounded-lg pointer-events-none"
                    })]
                })
            }), s.jsxs("div", {
                className: "my-6 space-y-2",
                children: [s.jsxs("h3", {
                    className: `text-3xl sm:text-5xl text-[#c5a059] drop-shadow-sm ${A === "ar" ? "font-amiri font-bold" : "font-pinyon"}`,
                    children: ['"', o.romanticQuote, '"']
                }), s.jsx("p", {
                    className: `italic text-base sm:text-lg text-[#5c4335] max-w-lg mx-auto ${A === "ar" ? "font-amiri" : "font-cormorant"}`,
                    children: o.quoteSubtext
                })]
            })]
        })
    })
}
  , t1 = {
    engagementDateISO: "2026-11-06T17:30:00+02:00"
}
  , Dd = {
    googleMapsUrl: "https://maps.app.goo.gl/1a3yCJpAYkDRDkV78?g_st=ac",
    embedMapUrl: "https://maps.google.com/maps?q=Katameya+Gardens+Club,+El+Mokattam,+Cairo,+Egypt&hl=en&z=16&output=embed"
}
  , e1 = () => {
    const {lang: g, t: T} = Le()
      , [A,o] = vl.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    vl.useEffect( () => {
        const R = new Date(t1.engagementDateISO).getTime()
          , D = () => {
            const Q = new Date().getTime()
              , gl = R - Q;
            if (gl <= 0) {
                o({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0
                });
                return
            }
            const Ol = Math.floor(gl / (1e3 * 60 * 60 * 24))
              , xt = Math.floor(gl % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60))
              , Yl = Math.floor(gl % (1e3 * 60 * 60) / (1e3 * 60))
              , Et = Math.floor(gl % (1e3 * 60) / 1e3);
            o({
                days: Ol,
                hours: xt,
                minutes: Yl,
                seconds: Et
            })
        }
        ;
        D();
        const K = setInterval(D, 1e3);
        return () => clearInterval(K)
    }
    , []);
    const q = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`Engagement of ${T.groomName} & ${T.brideName}`)}&dates=20261106T153000Z/20261106T223000Z&details=${encodeURIComponent(`Join us in celebrating the engagement of ${T.groomName} and ${T.brideName} at Open Air Terrace!`)}&location=${encodeURIComponent("Open Air Terrace, El Mokattam, Cairo, Egypt")}`
      , U = () => {
        const R = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Ahmed and Ganna Engagement//EN
BEGIN:VEVENT
SUMMARY:Engagement of ${T.groomName} & ${T.brideName}
DESCRIPTION:Celebrating the engagement of ${T.groomName} and ${T.brideName}
LOCATION:Open Air Terrace, El Mokattam, Cairo, Egypt
DTSTART:20261106T153000Z
DTEND:20261106T223000Z
END:VEVENT
END:VCALENDAR`
          , D = new Blob([R],{
            type: "text/calendar;charset=utf-8;"
        })
          , K = document.createElement("a");
        K.href = URL.createObjectURL(D),
        K.download = "Ahmed_and_Ganna_Engagement.ics",
        K.click()
    }
      , X = 30
      , ol = 0
      , j = [];
    for (let R = 0; R < ol; R++)
        j.push(null);
    for (let R = 1; R <= X; R++)
        j.push(R);
    const E = g === "ar" ? ["أحد", "إثنين", "ثلاثاء", "أربعاء", "خميس", "جمعة", "سبت"] : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return s.jsx("section", {
        className: "py-16 px-4 max-w-4xl mx-auto text-center",
        children: s.jsxs("div", {
            className: "bg-white rounded-2xl gold-border-glow p-6 sm:p-12 luxury-card-shadow",
            children: [s.jsxs("div", {
                className: "mb-8",
                children: [s.jsx("p", {
                    className: `text-xs uppercase text-[#c5a059] mb-1 ${g === "ar" ? "font-cairo font-semibold tracking-wider" : "font-cinzel tracking-[0.3em]"}`,
                    children: T.bigDayTitle
                }), s.jsx("h2", {
                    className: `text-5xl sm:text-6xl text-[#3d2b1f] ${g === "ar" ? "font-amiri font-bold" : "font-pinyon"}`,
                    children: T.saveTheDate
                })]
            }), s.jsx("div", {
                className: "grid grid-cols-4 gap-2 sm:gap-4 max-w-xl mx-auto mb-10",
                children: [{
                    label: T.days,
                    value: A.days
                }, {
                    label: T.hours,
                    value: A.hours
                }, {
                    label: T.minutes,
                    value: A.minutes
                }, {
                    label: T.seconds,
                    value: A.seconds
                }].map( (R, D) => s.jsxs("div", {
                    className: "flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-[#f5f2ed] gold-border luxury-card-shadow",
                    children: [s.jsx("span", {
                        className: "font-cinzel text-2xl sm:text-4xl font-bold text-[#c5a059]",
                        children: String(R.value).padStart(2, "0")
                    }), s.jsx("span", {
                        className: `text-[10px] sm:text-xs uppercase text-[#5c4335] mt-1 ${g === "ar" ? "font-cairo font-bold" : "font-montserrat tracking-widest"}`,
                        children: R.label
                    })]
                }, D))
            }), s.jsx(yf, {
                className: "my-8"
            }), s.jsxs("div", {
                className: "max-w-md mx-auto bg-[#f5f2ed] rounded-xl gold-border p-6 shadow-sm",
                children: [s.jsxs("div", {
                    className: "flex items-center justify-between mb-4 border-b border-[#c5a059]/30 pb-3",
                    children: [s.jsx("span", {
                        className: `text-lg font-semibold text-[#3d2b1f] ${g === "ar" ? "font-amiri text-xl font-bold" : "font-cinzel tracking-wider"}`,
                        children: g === "ar" ? "نوفمبر 2026" : "November 2026"
                    }), s.jsxs("div", {
                        className: "flex items-center space-x-1 space-x-reverse text-[#c5a059] text-xs",
                        children: [s.jsx(Nh, {
                            className: "w-4 h-4 ml-1"
                        }), s.jsx("span", {
                            className: g === "ar" ? "font-cairo" : "font-montserrat",
                            children: T.venueHall
                        })]
                    })]
                }), s.jsx("div", {
                    className: `grid grid-cols-7 gap-1 text-center text-xs font-medium text-[#5c4335]/80 mb-2 ${g === "ar" ? "font-cairo font-semibold" : "font-montserrat"}`,
                    children: E.map( (R, D) => s.jsx("span", {
                        children: R
                    }, D))
                }), s.jsx("div", {
                    className: "grid grid-cols-7 gap-1.5 text-center font-cormorant text-base sm:text-lg",
                    children: j.map( (R, D) => {
                        if (R === null)
                            return s.jsx("div", {
                                className: "h-9 sm:h-10"
                            }, `empty-${D}`);
                        const K = R === 6;
                        return s.jsxs("div", {
                            className: `relative flex items-center justify-center h-9 sm:h-10 rounded-full transition-all duration-300 ${K ? "bg-[#3d2b1f] text-[#f5f2ed] font-bold ring-4 ring-[#c5a059]/30 scale-110 shadow-md" : "hover:bg-[#e6dfd3]/50 text-[#3d2b1f]"}`,
                            children: [R, K && s.jsxs("span", {
                                className: "absolute -top-1 -right-1 flex h-3 w-3",
                                children: [s.jsx("span", {
                                    className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75"
                                }), s.jsx(Ln, {
                                    className: "relative inline-flex h-3 w-3 text-[#c5a059] fill-current"
                                })]
                            })]
                        }, R)
                    }
                    )
                }), s.jsxs("div", {
                    className: "mt-4 pt-3 border-t border-[#c5a059]/20 flex items-center justify-center space-x-2 space-x-reverse text-xs text-[#c5a059]",
                    children: [s.jsx(Ln, {
                        className: "w-3.5 h-3.5 fill-current text-[#c5a059]"
                    }), s.jsx("span", {
                        className: `font-medium ${g === "ar" ? "font-cairo" : "font-montserrat"}`,
                        children: g === "ar" ? "6 نوفمبر — موعد حفل الخطوبة المبارك" : "November 6 — Our Special Engagement Day"
                    })]
                })]
            }), s.jsxs("div", {
                className: "mt-8 flex flex-wrap justify-center gap-3",
                children: [s.jsxs("a", {
                    href: q,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `inline-flex items-center px-5 py-2.5 rounded-full bg-[#f5f2ed] gold-border text-[#3d2b1f] text-xs hover:border-[#c5a059] hover:bg-[#e6dfd3]/40 transition-all shadow-sm ${g === "ar" ? "font-cairo font-bold" : "font-montserrat uppercase tracking-wider"}`,
                    children: [s.jsx(Ch, {
                        className: "w-3.5 h-3.5 ml-2 text-[#c5a059]"
                    }), T.addToCalendar]
                }), s.jsxs("button", {
                    onClick: U,
                    className: `inline-flex items-center px-5 py-2.5 rounded-full bg-[#f5f2ed] gold-border text-[#3d2b1f] text-xs hover:border-[#c5a059] hover:bg-[#e6dfd3]/40 transition-all shadow-sm ${g === "ar" ? "font-cairo font-bold" : "font-montserrat uppercase tracking-wider"}`,
                    children: [s.jsx(Oh, {
                        className: "w-3.5 h-3.5 ml-2 text-[#c5a059]"
                    }), T.downloadIcs]
                })]
            })]
        })
    })
}
  , a1 = () => {
    const [g,T] = vl.useState(!1)
      , {lang: A, t: o} = Le()
      , q = () => {
        const U = `${o.venueHall}, ${o.venueAddress}, ${o.venueCityCountry}`;
        navigator.clipboard.writeText(U),
        T(!0),
        setTimeout( () => T(!1), 2500)
    }
    ;
    return s.jsx("section", {
        className: "py-16 px-4 max-w-4xl mx-auto",
        children: s.jsxs("div", {
            className: "bg-white rounded-2xl gold-border-glow p-6 sm:p-12 luxury-card-shadow text-center",
            children: [s.jsxs("div", {
                className: "mb-8",
                children: [s.jsx("p", {
                    className: `text-xs uppercase text-[#c5a059] mb-1 ${A === "ar" ? "font-cairo font-semibold tracking-wider" : "font-cinzel tracking-[0.3em]"}`,
                    children: o.venueTitle
                }), s.jsx("h2", {
                    className: `text-5xl sm:text-6xl text-[#3d2b1f] ${A === "ar" ? "font-amiri font-bold" : "font-pinyon"}`,
                    children: o.venueName
                })]
            }), s.jsxs("div", {
                className: "max-w-xl mx-auto space-y-3 mb-8",
                children: [s.jsx("h3", {
                    className: `text-2xl sm:text-3xl font-semibold text-[#c5a059] ${A === "ar" ? "font-amiri font-bold" : "font-playfair"}`,
                    children: o.venueHall
                }), s.jsxs("p", {
                    className: `text-lg text-[#5c4335] ${A === "ar" ? "font-cairo" : "font-cormorant"}`,
                    children: [o.venueAddress, " — ", o.venueCityCountry]
                }), s.jsx("p", {
                    className: `text-xs text-[#5c4335]/70 ${A === "ar" ? "font-cairo" : "font-montserrat tracking-widest"}`,
                    children: o.coordinates
                })]
            }), s.jsxs("div", {
                className: "relative w-full aspect-[16/9] max-h-[380px] rounded-xl overflow-hidden gold-border luxury-card-shadow my-6 bg-[#f5f2ed]",
                children: [s.jsx("iframe", {
                    title: "Open Air Terrace Map Location",
                    src: Dd.embedMapUrl,
                    className: "w-full h-full border-0 grayscale-[20%] opacity-90 hover:grayscale-0 transition-all duration-500",
                    allowFullScreen: !1,
                    loading: "lazy",
                    referrerPolicy: "no-referrer-when-downgrade"
                }), s.jsx("div", {
                    className: "absolute inset-0 ring-1 ring-inset ring-[#c5a059]/40 pointer-events-none rounded-xl"
                })]
            }), s.jsxs("div", {
                className: "flex flex-wrap justify-center items-center gap-3 mt-6",
                children: [s.jsxs("a", {
                    href: Dd.googleMapsUrl,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `inline-flex items-center px-6 py-3 rounded-full bg-[#3d2b1f] hover:bg-[#c5a059] text-[#f5f2ed] text-xs font-medium shadow-md hover:scale-105 transition-all duration-300 ${A === "ar" ? "font-cairo font-bold" : "font-montserrat tracking-widest uppercase"}`,
                    children: [s.jsx(Yh, {
                        className: "w-4 h-4 ml-2"
                    }), o.openInGoogleMaps]
                }), s.jsx("button", {
                    onClick: q,
                    className: `inline-flex items-center px-6 py-3 rounded-full bg-[#f5f2ed] gold-border text-[#3d2b1f] text-xs hover:border-[#c5a059] hover:bg-[#e6dfd3]/50 transition-all shadow-sm ${A === "ar" ? "font-cairo font-bold" : "font-montserrat tracking-widest uppercase"}`,
                    children: g ? s.jsxs(s.Fragment, {
                        children: [s.jsx(hf, {
                            className: "w-4 h-4 ml-2 text-green-600"
                        }), A === "ar" ? "تم نسخ العنوان!" : "Address Copied!"]
                    }) : s.jsxs(s.Fragment, {
                        children: [s.jsx(_h, {
                            className: "w-4 h-4 ml-2 text-[#c5a059]"
                        }), A === "ar" ? "نسخ عنوان القاعة" : "Copy Venue Address"]
                    })
                })]
            })]
        })
    })
}
  , u1 = () => {
    const {lang: g, t: T} = Le()
      , A = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return s.jsx("footer", {
        className: "relative py-16 px-4 text-center border-t border-[#c5a059]/30 bg-white/80 backdrop-blur-sm",
        children: s.jsxs("div", {
            className: "max-w-xl mx-auto space-y-6",
            children: [s.jsx("div", {
                className: "flex justify-center",
                children: s.jsx(gf, {
                    size: 64,
                    className: "text-[#c5a059]"
                })
            }), s.jsxs("div", {
                className: "flex flex-col items-center justify-center space-y-1",
                children: [s.jsx("h2", {
                    className: `text-4xl sm:text-5xl text-[#c5a059] ${g === "ar" ? "font-aref font-bold" : "font-pinyon"}`,
                    children: T.groomName
                }), s.jsx("span", {
                    className: `text-base sm:text-lg text-[#c5a059] -my-1 ${g === "ar" ? "font-aref font-bold" : "font-cormorant italic text-[#5c4335]"}`,
                    children: g === "ar" ? "وَ" : "&"
                }), s.jsx("h2", {
                    className: `text-4xl sm:text-5xl text-[#c5a059] ${g === "ar" ? "font-aref font-bold" : "font-pinyon"}`,
                    children: T.brideName
                })]
            }), s.jsxs("p", {
                className: `text-xs text-[#3d2b1f] ${g === "ar" ? "font-amiri font-bold text-sm sm:text-base" : "font-cinzel tracking-[0.25em] uppercase"}`,
                children: [T.dateDisplay, " • ", T.timeDisplay, " • ", T.venueHall]
            }), s.jsxs("p", {
                className: `text-lg sm:text-xl text-[#5c4335] max-w-lg mx-auto ${g === "ar" ? "font-amiri font-bold text-xl sm:text-2xl" : "font-cormorant italic"}`,
                children: ['"', T.footerCantWait, '"']
            }), s.jsx("p", {
                className: `text-xs font-medium text-[#c5a059] ${g === "ar" ? "font-cairo font-bold" : "font-montserrat tracking-widest"}`,
                children: T.hashtag
            }), s.jsx("div", {
                className: "flex justify-center items-center pt-4",
                children: s.jsx("button", {
                    onClick: A,
                    title: g === "ar" ? "الرجوع للأعلى" : "Scroll to Top",
                    className: "p-2.5 rounded-full bg-[#f5f2ed] gold-border text-[#c5a059] hover:border-[#c5a059] hover:scale-110 transition-all cursor-pointer",
                    children: s.jsx(Th, {
                        className: "w-4 h-4"
                    })
                })
            })]
        })
    })
}
;
function n1() {
    const [g,T] = vl.useState(!1)
      , A = () => {
        T(!0)
    }
    ;
    return s.jsx(vh, {
        children: s.jsxs("div", {
            className: "relative min-h-screen bg-[#f5f2ed] text-[#3d2b1f] font-cormorant selection:bg-[#c5a059]/30 selection:text-[#3d2b1f] overflow-x-hidden",
            children: [s.jsx(yh, {
                active: !0
            }), s.jsx(Wh, {
                onOpen: A
            }), g && s.jsx(Fh, {}), s.jsx($h, {
                autoStart: g
            }), s.jsxs("main", {
                className: `relative z-10 transition-opacity duration-1000 ${g ? "opacity-100" : "opacity-90"}`,
                children: [s.jsx(Ih, {}), s.jsx(l1, {}), s.jsx(e1, {}), s.jsx(a1, {}), s.jsx(u1, {})]
            })]
        })
    })
}
mh.createRoot(document.getElementById("root")).render(s.jsx(vl.StrictMode, {
    children: s.jsx(n1, {})
}));
