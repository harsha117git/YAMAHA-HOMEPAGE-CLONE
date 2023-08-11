
const $ = str => document.querySelector(str);
const $$ = str => document.querySelectorAll(str);

(function() {
    if (!window.app) {
        window.app = {};
    }
    app.carousel = {
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
            let childcnt = $("#carousel").children.length;
            let childs = $("#carousel").children;

            for (let j=0; j< childcnt; j++) {
                childs[j].dataset.pos = j;
            }
        },
        move: function(el) {
            let selected = el;

            if (typeof el === "string") {
            console.log(`got string: ${el}`);
                selected = (el == "next") ? $(".selected").nextElementSibling : $(".selected").previousElementSibling;
                console.dir(selected);
            }

            let curpos = parseInt(app.selected.dataset.pos);
            let tgtpos = parseInt(selected.dataset.pos);

            let cnt = curpos - tgtpos;
            let dir = (cnt < 0) ? -1 : 1;
            let shift = Math.abs(cnt);

            for (let i=0; i<shift; i++) {
                let el = (dir == -1) ? $("#carousel").firstElementChild : $("#carousel").lastElementChild;

                if (dir == -1) {
                    el.dataset.pos = $("#carousel").children.length;
                    $('#carousel').append(el);
                } else {
                    el.dataset.pos = 0;
                    $('#carousel').prepend(el);
                }

                app.carousel.reorder();
            }


            app.selected = selected;
            let next = selected.nextElementSibling;// ? selected.nextElementSibling : selected.parentElement.firstElementChild;
            var prev = selected.previousElementSibling; // ? selected.previousElementSibling : selected.parentElement.lastElementChild;
            var prevSecond = prev ? prev.previousElementSibling : selected.parentElement.lastElementChild;
            var nextSecond = next ? next.nextElementSibling : selected.parentElement.firstElementChild;

            selected.className = '';
            selected.classList.add("selected");

            app.carousel.removeClass(prev).classList.add('prev');
            app.carousel.removeClass(next).classList.add('next');

            app.carousel.removeClass(nextSecond).classList.add("nextRightSecond");
            app.carousel.removeClass(prevSecond).classList.add("prevLeftSecond");

            app.carousel.nextAll(nextSecond).forEach(item=>{ item.className = ''; item.classList.add('hideRight') });
            app.carousel.prevAll(prevSecond).forEach(item=>{ item.className = ''; item.classList.add('hideLeft') });

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
                    app.carousel.move('prev');
                    break;

                case 39: // right
                    app.carousel.move('next');
                    break;

                default:
                    return;
            }
            e.preventDefault();
            return false;
        },
        select: function(e) {
        console.log(`select: ${e}`);
            let tgt = e.target;
            while (!tgt.parentElement.classList.contains('carousel')) {
                tgt = tgt.parentElement;
            }

            app.carousel.move(tgt);

        },
        previous: function(e) {
            app.carousel.move('prev');
        },
        next: function(e) {
            app.carousel.move('next');
        },
        doDown: function(e) {
        console.log(`down: ${e.x}`);
            app.carousel.state.downX = e.x;
        },
        doUp: function(e) {
        console.log(`up: ${e.x}`);
            let direction = 0,
                velocity = 0;

            if (app.carousel.state.downX) {
                direction = (app.carousel.state.downX > e.x) ? -1 : 1;
                velocity = app.carousel.state.downX - e.x;

                if (Math.abs(app.carousel.state.downX - e.x) < 10) {
                    app.carousel.select(e);
                    return false;
                }
                if (direction === -1) {
                    app.carousel.move('next');
                } else {
                    app.carousel.move('prev');
                }
                app.carousel.state.downX = 0;
            }
        },
        init: function() {
            document.addEventListener("keydown", app.carousel.keypress);
           // $('#carousel').addEventListener("click", app.carousel.select, true);
            $("#carousel").addEventListener("mousedown", app.carousel.doDown);
            $("#carousel").addEventListener("touchstart", app.carousel.doDown);
            $("#carousel").addEventListener("mouseup", app.carousel.doUp);
            $("#carousel").addEventListener("touchend", app.carousel.doup);

            app.carousel.reorder();
            $('#prev').addEventListener("click", app.carousel.previous);
            $('#next').addEventListener("click", app.carousel.next);
            app.selected = $(".selected");

        },
        state: {}

    }
    app.carousel.init();
})();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// www.bytewebster.com
// www.bytewebster.com
// www.bytewebster.com
const $$$ = str => document.querySelector(str);
const $$$$$$ = str => document.querySelectorAll(str);

(function() {
    if (!window.app) {
        window.app = {};
    }
    app.scooterslider = {
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
            let childcnt = $$$("#scooterslider").children.length;
            let childs = $$$("#scooterslider").children;

            for (let j=0; j< childcnt; j++) {
                childs[j].dataset.pos = j;
            }
        },
        move: function(el) {
            let selectedsc = el;

            if (typeof el === "string") {
            console.log(`got string: $$${el}`);
                selectedsc = (el == "nextsc") ? $$$(".selectedsc").nextElementSibling : $$$(".selectedsc").previousElementSibling;
                console.dir(selectedsc);
            }

            let curpos = parseInt(app.selectedsc.dataset.pos);
            let tgtpos = parseInt(selectedsc.dataset.pos);

            let cnt = curpos - tgtpos;
            let dir = (cnt < 0) ? -1 : 1;
            let shift = Math.abs(cnt);

            for (let i=0; i<shift; i++) {
                let el = (dir == -1) ? $$$("#scooterslider").firstElementChild : $$$("#scooterslider").lastElementChild;

                if (dir == -1) {
                    el.dataset.pos = $$$("#scooterslider").children.length;
                    $$$('#scooterslider').append(el);
                } else {
                    el.dataset.pos = 0;
                    $$$('#scooterslider').prepend(el);
                }

                app.scooterslider.reorder();
            }


            app.selectedsc = selectedsc;
            let nextsc = selectedsc.nextElementSibling;// ? selectedsc.nextElementSibling : selectedsc.parentElement.firstElementChild;
            var prevsc = selectedsc.previousElementSibling; // ? selectedsc.previousElementSibling : selectedsc.parentElement.lastElementChild;
            var prevSecond = prevsc ? prevsc.previousElementSibling : selectedsc.parentElement.lastElementChild;
            var nextSecond = nextsc ? nextsc.nextElementSibling : selectedsc.parentElement.firstElementChild;

            selectedsc.className = '';
            selectedsc.classList.add("selectedsc");

            app.scooterslider.removeClass(prevsc).classList.add('prevsc');
            app.scooterslider.removeClass(nextsc).classList.add('nextsc');

            app.scooterslider.removeClass(nextSecond).classList.add("nextRightSecondsc");
            app.scooterslider.removeClass(prevSecond).classList.add("prevLeftSecondsc");

            app.scooterslider.nextAll(nextSecond).forEach(item=>{ item.className = ''; item.classList.add('hideRightsc') });
            app.scooterslider.prevAll(prevSecond).forEach(item=>{ item.className = ''; item.classList.add('hideLefttsc') });

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
                    app.scooterslider.move('prevsc');
                    break;

                case 39: // right
                    app.scooterslider.move('nextsc');
                    break;

                default:
                    return;
            }
            e.preventDefault();
            return false;
        },
        select: function(e) {
        console.log(`select: $$${e}`);
            let tgt = e.target;
            while (!tgt.parentElement.classList.contains('scooterslider')) {
                tgt = tgt.parentElement;
            }

            app.scooterslider.move(tgt);

        },
        previous: function(e) {
            app.scooterslider.move('prevsc');
        },
        nextsc: function(e) {
            app.scooterslider.move('nextsc');
        },
        doDown: function(e) {
        console.log(`down: $$${e.x}`);
            app.scooterslider.state.downX = e.x;
        },
        doUp: function(e) {
        console.log(`up: $$${e.x}`);
            let direction = 0,
                velocity = 0;

            if (app.scooterslider.state.downX) {
                direction = (app.scooterslider.state.downX > e.x) ? -1 : 1;
                velocity = app.scooterslider.state.downX - e.x;

                if (Math.abs(app.scooterslider.state.downX - e.x) < 10) {
                    app.scooterslider.select(e);
                    return false;
                }
                if (direction === -1) {
                    app.scooterslider.move('nextsc');
                } else {
                    app.scooterslider.move('prevsc');
                }
                app.scooterslider.state.downX = 0;
            }
        },
        init: function() {
            document.addEventListener("keydown", app.scooterslider.keypress);
           // $$$('#scooterslider').addEventListener("click", app.scooterslider.select, true);
            $$$("#scooterslider").addEventListener("mousedown", app.scooterslider.doDown);
            $$$("#scooterslider").addEventListener("touchstart", app.scooterslider.doDown);
            $$$("#scooterslider").addEventListener("mouseup", app.scooterslider.doUp);
            $$$("#scooterslider").addEventListener("touchend", app.scooterslider.doup);

            app.scooterslider.reorder();
            $$$('#prevsc').addEventListener("click", app.scooterslider.previous);
            $$$('#nextsc').addEventListener("click", app.scooterslider.nextsc);
            app.selectedsc = $$$(".selectedsc");

        },
        state: {}

    }
    app.scooterslider.init();
})();