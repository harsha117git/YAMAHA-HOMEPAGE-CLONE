// www.bytewebster.com
// www.bytewebster.com
// www.bytewebster.com
const rs = str => document.querySelector(str);
const rsrs = str => document.querySelectorAll(str);

(function() {
    if (!window.app) {
        window.app = {};
    }
    app.iframeslider = {
        removeClass: function(el, classname='') {
            if (el) {
                if (classname === '') {
                    el.className = '';
                } else {
                    el.classList.remove(classname);
                }
                return el;
            }
            return;
        },
        reorder: function() {
            let childcnt = rs("#iframeslider").children.length;
            let childs = rs("#iframeslider").children;

            for (let j=0; j< childcnt; j++) {
                childs[j].dataset.pos = j;
            }
        },
        move: function(el) {
            let iframeselected = el;

            if (typeof el === "string") {
            console.log(`got string: rs{el}`);
                iframeselected = (el == "nextiframe") ? rs(".iframeselected").nextElementSibling : rs(".iframeselected").previousElementSibling;
                console.dir(iframeselected);
            }

            let curpos = parseInt(app.iframeselected.dataset.pos);
            let tgtpos = parseInt(iframeselected.dataset.pos);

            let cnt = curpos - tgtpos;
            let dir = (cnt < 0) ? -1 : 1;
            let shift = Math.abs(cnt);

            for (let i=0; i<shift; i++) {
                let el = (dir == -1) ? rs("#iframeslider").firstElementChild : rs("#iframeslider").lastElementChild;

                if (dir == -1) {
                    el.dataset.pos = rs("#iframeslider").children.length;
                    rs('#iframeslider').append(el);
                } else {
                    el.dataset.pos = 0;
                    rs('#iframeslider').prepend(el);
                }

                app.iframeslider.reorder();
            }


            app.iframeselected = iframeselected;
            let nextiframe = iframeselected.nextElementSibling;// ? iframeselected.nextElementSibling : iframeselected.parentElement.firstElementChild;
            var previframe = iframeselected.previousElementSibling; // ? iframeselected.previousElementSibling : iframeselected.parentElement.lastElementChild;
            var prevSecond = previframe ? previframe.previousElementSibling : iframeselected.parentElement.lastElementChild;
            var nextSecond = nextiframe ? nextiframe.nextElementSibling : iframeselected.parentElement.firstElementChild;

            iframeselected.className = '';
            iframeselected.classList.add("iframeselected");

            app.iframeslider.removeClass(previframe).classList.add('previframe');
            app.iframeslider.removeClass(nextiframe).classList.add('nextiframe');

            app.iframeslider.removeClass(nextSecond).classList.add("nextRightSecond");
            app.iframeslider.removeClass(prevSecond).classList.add("prevLeftSecond");

            app.iframeslider.nextAll(nextSecond).forEach(item=>{ item.className = ''; item.classList.add('iframehideleft') });
            app.iframeslider.prevAll(prevSecond).forEach(item=>{ item.className = ''; item.classList.add('iframehideleft') });

        },
        nextAll: function(el) {
            let els = [];

            if (el) {
                while (el = el.nextElementSibling) { els.push(el); }
            }

            return els;

        },
        prevAll: function(el) {
            let els = [];

            if (el) {
                while (el = el.previousElementSibling) { els.push(el); }
            }


            return els;
        },
        keypress: function(e) {
            switch (e.which) {
                case 37: // left
                    app.iframeslider.move('previframe');
                    break;

                case 39: // right
                    app.iframeslider.move('nextiframe');
                    break;

                default:
                    return;
            }
            e.preventDefault();
            return false;
        },
        select: function(e) {
        console.log(`select: rs{e}`);
            let tgt = e.target;
            while (!tgt.parentElement.classList.contains('iframeslider')) {
                tgt = tgt.parentElement;
            }

            app.iframeslider.move(tgt);

        },
        previous: function(e) {
            app.iframeslider.move('previframe');
        },
        nextiframe: function(e) {
            app.iframeslider.move('nextiframe');
        },
        doDown: function(e) {
        console.log(`down: rs{e.x}`);
            app.iframeslider.state.downX = e.x;
        },
        doUp: function(e) {
        console.log(`up: rs{e.x}`);
            let direction = 0,
                velocity = 0;

            if (app.iframeslider.state.downX) {
                direction = (app.iframeslider.state.downX > e.x) ? -1 : 1;
                velocity = app.iframeslider.state.downX - e.x;

                if (Math.abs(app.iframeslider.state.downX - e.x) < 10) {
                    app.iframeslider.select(e);
                    return false;
                }
                if (direction === -1) {
                    app.iframeslider.move('nextiframe');
                } else {
                    app.iframeslider.move('previframe');
                }
                app.iframeslider.state.downX = 0;
            }
        },
        init: function() {
            document.addEventListener("keydown", app.iframeslider.keypress);
           // rs('#iframeslider').addEventListener("click", app.iframeslider.select, true);
            rs("#iframeslider").addEventListener("mousedown", app.iframeslider.doDown);
            rs("#iframeslider").addEventListener("touchstart", app.iframeslider.doDown);
            rs("#iframeslider").addEventListener("mouseup", app.iframeslider.doUp);
            rs("#iframeslider").addEventListener("touchend", app.iframeslider.doup);

            app.iframeslider.reorder();
            rs('#previframe').addEventListener("click", app.iframeslider.previous);
            rs('#nextiframe').addEventListener("click", app.iframeslider.nextiframe);
            app.iframeselected = rs(".iframeselected");

        },
        state: {}

    }
    app.iframeslider.init();
})();