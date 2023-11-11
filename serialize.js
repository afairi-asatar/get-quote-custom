(serialize = function (e) {
    var t = [];
    for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.join("&");
}),
    document.addEventListener("DOMContentLoaded", (e) => {
        [document.querySelector(".x_nav-button"), document.querySelector(".x_button-main")].forEach((e) => {
            e &&
                "click mouseover touchstart".split(" ").forEach((t) => {
                    e.addEventListener(t, () => {
                        const t = FsCC.store.getConsents();
                        e.href = `/safe/?${serialize(t)}&locale=${Weglot.getCurrentLang()}`;
                    });
                });
        });
    });
(serialize = function (e) {
    var t = [];
    for (var n in e) e.hasOwnProperty(n) && t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
    return t.join("&");
}),
    document.addEventListener("DOMContentLoaded", (e) => {
        [document.querySelector(".x_nav-button"), document.querySelector(".x_button-main")].forEach((e) => {
            e &&
                "click mouseover touchstart".split(" ").forEach((t) => {
                    e.addEventListener(t, () => {
                        const t = FsCC.store.getConsents();
                        e.href = `/safe/?${serialize(t)}&locale=${Weglot.getCurrentLang()}`;
                    });
                });
        });
    });