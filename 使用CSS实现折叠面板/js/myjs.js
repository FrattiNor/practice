    var x,y;
    document.body.onmousedown = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.tagName === 'LABEL') {
            y = target.className;
            x = document.getElementById(y);
            x.previousValue = x.checked;
        }
    }
    document.body.onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement;
        if (target.tagName === 'LABEL') {
            y = target.className;
            x = document.getElementById(y);
            if (x.previousValue) {
                x.checked = false;
            }
        }
    }
