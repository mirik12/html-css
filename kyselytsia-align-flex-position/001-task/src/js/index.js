 var item = document.getElementById("one");
 var sideBar = document.querySelectorAll(".side-bar");


 function toggleSideBar () {
    sideBar.forEach(function(element) {
         if (element.style.top == "0px") {
            element.style.top = "300px";
         }
         else {
             element.style.top = "0px";
         }
    }, this);
    
 }

 item.addEventListener('click', toggleSideBar);
