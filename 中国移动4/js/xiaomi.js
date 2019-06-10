function changeTab1(num1) {
    var li = document.getElementsByClassName("jiadian_items");
    var div = document.getElementsByClassName("exposure_right_jiadian");
    for (var i = 0; i < 2; i++) {
        div[i].style.display = "none";
        li[i].color = "red";
    }
    div[num1].style.display = "block";

    li[num1].cursor = "pointer";

}



function changeTab3(num3) {
    var li = document.getElementsByClassName("items");
    var div = document.getElementsByClassName("xinzeng");
    for (var i = 0; i < 2; i++) {
        div[i].style.display = "none";
        li[i].color = "red";
    }
    div[num1].style.display = "block";

    li[num1].cursor = "pointer";

}