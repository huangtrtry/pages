function changeTab3(num3) {
    var li = document.getElementsByClassName("items");
    var div = document.getElementsByClassName("xinzeng");
    for (var i = 0; i < 2; i++) {
        div[i].style.display = "none";
        li[i].color = "red";
    }
    div[num3].style.display = "block";

    li[num3].cursor = "pointer";

}