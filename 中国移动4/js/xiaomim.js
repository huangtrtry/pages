 function changeTab(num) {
     var li = document.getElementsByClassName("items_2");
     var div = document.getElementsByClassName("cebianlan_right");
     for (var i = 0; i < 5; i++) {
         div[i].style.display = "none";
         li[i].color = "red";
     }
     div[num].style.display = "block";
     li[num].cursor = "pointer";

 }

 function changeTab3(num3) {
     var li = document.getElementsByClassName("items");
     var div = document.getElementsByClassName("xinzeng");
     for (var i = 0; i < 3; i++) {
         div[i].style.display = "none";
         li[i].color = "red";


     }
     div[num3].style.display = "block";

     li[num3].cursor = "pointer";

 }