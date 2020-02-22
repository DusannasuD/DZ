
// Show/hide DZ videos
$(document).ready(function(){
  $("#container1").click(function(){
    $("#videos1").fadeToggle("slow");
  });
});

// Show/hide Dusan Zaharijevic videos
$(document).ready(function(){
  $("#container2").click(function(){
    $("#videos2").fadeToggle("slow");
  });
});

// Open menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
