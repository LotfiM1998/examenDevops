(() => {
    var e = {
            897: (e, t) => {
                t.isEmpty = (e) => !e || 0 === e.length;
            },
        },
        t = {};
    function n(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var o = (t[r] = { exports: {} });
        return e[r](o, o.exports, n), o.exports;
    }
    (() => {
        try {
            const { isEmpty: r } = n(897),
                a = document.getElementById("gamerTagInput"),
                o = document.getElementById("gamerTagCheckButton"),
                g = document.getElementById("gamerTagFeedback");
            var e, t;
            a.addEventListener("change", (t) => {
                e = t.target.value;
            }),
                o.addEventListener("click", () => {
                    (t = r(e)
                        ? "Gamer tag cannot be empty"
                        : "Gamer tag is valid"),
                        (g.textContent = t);
                });
        } catch (e) {
            console.error(JSON.stringify(e));
        }
    })();
})();
