function hideMenu(taggy, head) {
    var cusid_ele = document.getElementsByClassName(taggy);
    for (var i = 0; i < cusid_ele.length; ++i) {
        var item = cusid_ele[i];
        item.style.display = "none";
    }
}

function showMenu(taggy) {
    var cusid_ele = document.getElementsByClassName(taggy);
    for (var i = 0; i < cusid_ele.length; ++i) {
        var item = cusid_ele[i];
        item.style.display = "block";
    }
}

